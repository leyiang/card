import typescript from 'typescript';
import { readFileSync, writeFileSync, readdirSync, mkdirSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Create cards_json directory if it doesn't exist
const outputDir = join(__dirname, '../src/cards_json');
if (!existsSync(outputDir)) {
    mkdirSync(outputDir);
}

// Process a single file
function processFile(filePath) {
    const fileContent = readFileSync(filePath, 'utf-8');
    const sourceFile = typescript.createSourceFile(
        filePath,
        fileContent,
        typescript.ScriptTarget.Latest,
        true
    );

    findCardArray(sourceFile, filePath);
}

function getNodeType(node) {
    if (typescript.isStringLiteral(node)) return 'string';
    if (typescript.isTemplateLiteral(node) || typescript.isNoSubstitutionTemplateLiteral(node)) return 'string (template)';
    if (typescript.isNumericLiteral(node)) return 'number';
    if (typescript.isObjectLiteralExpression(node)) return 'object';
    if (typescript.isArrayLiteralExpression(node)) return 'array';
    if (typescript.isIdentifier(node)) return 'identifier';
    if (typescript.isCallExpression(node)) {
        const functionName = node.expression.getText(sourceFile);
        // Get first string from arguments array
        const firstArg = node.arguments[0];
        if (typescript.isArrayLiteralExpression(firstArg)) {
            const firstString = firstArg.elements[0];
            if (firstString) {
                return `function call (${functionName}) -> ${getNodeText(firstString, sourceFile)}`;
            }
        }
        return `function call (${functionName})`;
    }
    return 'unknown';
}

function convertTemplateToString(text) {
    // Remove backticks at start and end
    text = text.slice(1, -1);
    // Escape any existing double quotes
    text = text.replace(/"/g, '\\"');
    // Wrap with double quotes
    return `"${text}"`;
}

function getNodeText(node, sourceFile) {
    if (typescript.isNoSubstitutionTemplateLiteral(node)) {
        return convertTemplateToString(node.getText(sourceFile));
    }
    if (typescript.isCallExpression(node)) {
        const firstArg = node.arguments[0];
        if (typescript.isArrayLiteralExpression(firstArg) && firstArg.elements[0]) {
            return getNodeText(firstArg.elements[0], sourceFile);
        }
    }
    const text = node.getText(sourceFile)
        .replace(/\n/g, ' ')
        .replace(/\s+/g, ' ')
        .trim();
    return text;
}

function findCardArray(sourceFile, inputPath) {
    function visit(node) {
        if (typescript.isPropertyAssignment(node) && 
            typescript.isIdentifier(node.name) && 
            node.name.text === 'cards') {
            if (typescript.isArrayLiteralExpression(node.initializer)) {
                const cards = [];
                
                node.initializer.elements.forEach((cardElement) => {
                    if (typescript.isArrayLiteralExpression(cardElement)) {
                        const card = cardElement.elements.map(item => {
                            const text = getNodeText(item, sourceFile);
                            try {
                                return JSON.parse(text);
                            } catch (e) {
                                return text.replace(/^['"`]|['"`]$/g, '');
                            }
                        });
                        cards.push(card);
                    }
                });

                const pathParts = inputPath.split('/');
                const folderName = pathParts[pathParts.length - 2];
                const tsFileName = pathParts[pathParts.length - 1];
                const stackName = tsFileName.replace('.ts', '');
                
                const jsonFileName = `${folderName}_${tsFileName.replace('.ts', '.json')}`;
                const outputPath = join(outputDir, jsonFileName);
                
                writeFileSync(outputPath, JSON.stringify({ 
                    group: folderName,
                    stack: stackName,
                    cards 
                }, null, 2));
                console.log(`Converted ${jsonFileName} (group: ${folderName}, stack: ${stackName})`);
            }
        }

        typescript.forEachChild(node, visit);
    }

    visit(sourceFile);
}

// Process all ts files in cards directory
const cardsDir = join(__dirname, '../src/cards');
function processDirectory(dir) {
    const files = readdirSync(dir, { withFileTypes: true });
    
    files.forEach(file => {
        const fullPath = join(dir, file.name);
        if (file.isDirectory()) {
            processDirectory(fullPath);
        } else if (file.name.endsWith('.ts')) {
            processFile(fullPath);
        }
    });
}

// Start processing
processDirectory(cardsDir); 