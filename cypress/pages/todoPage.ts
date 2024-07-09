class TodoPage {
    private selector: { Input_Tag: string, Button_Tag: string };
    constructor() {
        this.selector = {
            Input_Tag: 'input[placeholder="할 일을 입력하세요"]',
            Button_Tag: 'button'
        }
    }

    visit() {
        cy.visit('/')
    }

    getInput() {
        const input_tag = this.selector.Input_Tag
        return cy.get(input_tag)
    }

    getAddButton() {
        const button_tag = this.selector.Button_Tag
        return cy.get(button_tag).contains('+')
    }

    getTextContains(text:string) {
        cy.contains(text).should('exist');
    }

    typeAndVerifyInput(inputText: string, checkText: string ) {
        const input_tag = this.selector.Input_Tag
        cy.get(input_tag).type(inputText).should('have.value',checkText)
    }

    pasteAndVerifyInput(text: string) {
        const input_tag = this.selector.Input_Tag
        cy.get(input_tag).copyPaste(text).should('have.value', text);
    }

}

export const todoPage = new TodoPage()