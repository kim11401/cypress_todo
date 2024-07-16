class TodoPage {
  private selector: { [key: string]: string }
  constructor() {
    this.selector = {
      Input_Tag: 'input[placeholder="할 일을 입력하세요"]',
      Button_Tag: 'button',
      Alert: '#alert',
      Edit_Modal: '#editModal'
    }
  }

  visit() {
    cy.visit('/')
  }

  getInput() {
    const input_tag = this.selector.Input_Tag
    return cy.get(input_tag)
  }

  getAlert() {
    const alert_tag = this.selector.Alert
    return cy.get(alert_tag)
  }

  getEditModal() {
    const editModal_tag = this.selector.Edit_Modal
    return cy.get(editModal_tag)
  }

  getAddButton() {
    const button_tag = this.selector.Button_Tag
    return cy.get(button_tag).contains('+')
  }

  getTextContains(text: string) {
    cy.contains(text).should('exist')
  }

  typeAndVerifyInput(inputText: string, checkText: string) {
    const input_tag = this.selector.Input_Tag
    cy.get(input_tag).type(inputText).should('have.value', checkText)
  }

  pasteAndVerifyInput(text: string) {
    const input_tag = this.selector.Input_Tag
    cy.get(input_tag).copyPaste(text).should('have.value', text)
  }

  addInputTodo(item: string) {
    this.getInput().type(item).type('{enter}')
  }

  addMultipleTodos(count: number, item: string) {
    for (let i = 0; i < count; i++) {
      this.addInputTodo(item + i)
    }
  }

  deleteTodo(item: string) {
    cy.contains('li', item).within(() => {
      cy.get('button').last().click()
    })
  }

  editTodo(item: string) {
    cy.contains('li', item).within(() => {
      cy.get('button').first().click()
    })
  }
}

export const todoPage = new TodoPage()
