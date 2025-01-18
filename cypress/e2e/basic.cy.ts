describe('基础测试', () => {
	// beforeEach(() => {
	// 	cy.url()
	// })

	it('能正常添加卡片', () => {
		cy.addCard().then(res => {
			cy.reload();
			cy._get('live-edit-textarea').should('contain.value', res.content);
		})
	});
	/**
	 * 多面卡片创建
	 */

	/**
	 * 多面卡片编辑
	 */


	// _TODO 移到 utils 中
	function getRandomText() {
		return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
	}

	it.only('能正常编辑卡片', () => {
		cy.addCard().then(res => {
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

	});

	/**
	 * 
	 */
})
