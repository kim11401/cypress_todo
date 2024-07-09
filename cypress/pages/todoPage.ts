class TodoPage {
    private selector: { Input_Tag: string };
    constructor() {
        this.selector = {
            Input_Tag: 'input[placeholder="할 일을 입력하세요"]'
        }
    }

    visit() {
        cy.visit('/')
    }

    getInput() {
        const input_tag = this.selector.Input_Tag
        return cy.get(input_tag)
    }

}

export const todoPage = new TodoPage()