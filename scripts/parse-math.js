import typescript from 'typescript';
import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Read the file
const filePath = join(__dirname, '../src/cards/math/basic.ts');
const fileContent = readFileSync(filePath, 'utf-8');

// Create a source file
const sourceFile = typescript.createSourceFile(
    'basic.ts',
    fileContent,
    typescript.ScriptTarget.Latest,
    true
);

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
                return `function call (${functionName}) -> ${getNodeText(firstString)}`;
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

function getNodeText(node) {
    if (typescript.isNoSubstitutionTemplateLiteral(node)) {
        return convertTemplateToString(node.getText(sourceFile));
    }
    if (typescript.isCallExpression(node)) {
        const firstArg = node.arguments[0];
        if (typescript.isArrayLiteralExpression(firstArg) && firstArg.elements[0]) {
            return getNodeText(firstArg.elements[0]);
        }
    }
    // Clean up the text by removing newlines and extra spaces
    const text = node.getText(sourceFile)
        .replace(/\n/g, ' ')  // Replace newlines with spaces
        .replace(/\s+/g, ' ') // Replace multiple spaces with single space
        .trim();              // Remove leading/trailing spaces
    return text;
}

function findCardArray(node) {
    if (typescript.isPropertyAssignment(node) && 
        typescript.isIdentifier(node.name) && 
        node.name.text === 'cards') {
        // Found the cards property
        if (typescript.isArrayLiteralExpression(node.initializer)) {
            const cards = [];
            
            // Loop through each card
            node.initializer.elements.forEach((cardElement) => {
                if (typescript.isArrayLiteralExpression(cardElement)) {
                    const card = cardElement.elements.map(item => {
                        const text = getNodeText(item);
                        try {
                            return JSON.parse(text);
                        } catch (e) {
                            // If parsing fails, return the raw text
                            return text.replace(/^['"`]|['"`]$/g, ''); // Remove quotes
                        }
                    });
                    cards.push(card);
                }
            });

            // Write to JSON file
            const outputPath = join(__dirname, '../src/cards/math/basic.json');
            writeFileSync(outputPath, JSON.stringify({ cards }, null, 2));
            console.log(`JSON file written to ${outputPath}`);
            
            return true;
        }
    }

    // Recursively search children
    return typescript.forEachChild(node, findCardArray);
}

// Find and convert the cards array
findCardArray(sourceFile); 