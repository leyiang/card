function getRandomText() {
	return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
}

describe('基础测试', () => {
	// beforeEach(() => {
	// 	cy.url()
	// })

	it('能正常添加卡片', () => {
		cy.visit('/new')

		const randomText = getRandomText();

		cy._get('live-edit-textarea').type(randomText);

		cy._get('live-edit-textarea')
			.trigger('keydown', { 
				key: 's',
				altKey: true,
				bubbles: true,
				cancelable: true 
			});
		
		cy.pathShouldContain('edit');

		cy.reload();

		cy._get('live-edit-textarea').should('contain.value', randomText);
	});
	/**
	 * 多面卡片创建
	 */

	/**
	 * 多面卡片编辑
	 */

	it.only('能正常编辑卡片', () => {
		cy.visit('/edit/1');

		// Select all text (Ctrl+A)
		cy._get('live-edit-textarea')
			.type('{selectall}');  // This is equivalent to Ctrl+A

		// Press backspace to delete
		cy._get('live-edit-textarea')
			.type('{backspace}');

		const randomText = getRandomText();

		cy._get('live-edit-textarea')
			.type(randomText);

		const textContent = "// type=text\n" + randomText;
		cy._get('live-edit-textarea')
			.should('have.value', textContent);
	});

	/**
	 * 
	 */
})
