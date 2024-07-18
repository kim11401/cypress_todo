import { todoPage } from '../pages/todoPage'
import { INPUT_DATA } from '../constants/INPUT_DATA'

/*

* */

describe('Todo List Test', () => {
  beforeEach(() => {
    todoPage.visit()
  })

  it('한글 입력 확인', () => {
    const { KOREAN_TEXT } = INPUT_DATA
    todoPage.typeAndVerifyInput(KOREAN_TEXT, KOREAN_TEXT)
  })

  it('영어 입력 확인', () => {
    const { ENGLISH_TEXT } = INPUT_DATA
    todoPage.typeAndVerifyInput(ENGLISH_TEXT, ENGLISH_TEXT)
  })

  it('숫자 입력 확인', () => {
    const { NUMERIC_TEXT } = INPUT_DATA
    todoPage.typeAndVerifyInput(NUMERIC_TEXT, NUMERIC_TEXT)
  })

  it('특수문자 입력 확인', () => {
    const { SPECIAL_CHARACTERS } = INPUT_DATA
    todoPage.typeAndVerifyInput(SPECIAL_CHARACTERS, SPECIAL_CHARACTERS)
  })

  it('최소값 입력 확인', () => {
    const { SHORT_TEXT } = INPUT_DATA
    todoPage.typeAndVerifyInput(SHORT_TEXT, SHORT_TEXT)
  })

  it('최대값 입력 확인', () => {
    const { LONG_TEXT } = INPUT_DATA
    todoPage.typeAndVerifyInput(LONG_TEXT, LONG_TEXT)
  })

  it('초과 입력 확인', () => {
    const { OVERFLOW_TEXT, LONG_TEXT } = INPUT_DATA
    todoPage.typeAndVerifyInput(OVERFLOW_TEXT, LONG_TEXT)
  })

  it('초과 텍스트 복사 붙여넣기', () => {
    const { OVERFLOW_TEXT } = INPUT_DATA
    todoPage.pasteAndVerifyInput(OVERFLOW_TEXT)
  })

  it('Enter키를 사용하여 할 일 등록', () => {
    const { TEST_TODO } = INPUT_DATA
    todoPage.getInput().type(TEST_TODO).type('{enter}')
    todoPage.getTextContains(TEST_TODO)
  })

  it('+ 버튼을 눌러 할 일 등록', () => {
    const { TEST_TODO } = INPUT_DATA
    todoPage.getInput().type(TEST_TODO)
    todoPage.getAddButton().click()
    todoPage.getTextContains(TEST_TODO)
  })
  it('말 줄임표 확인', () => {
    const { LONG_TEXT } = INPUT_DATA
    todoPage.getInput().type(LONG_TEXT)
    todoPage.getAddButton().click()
    // 추가된 Todo 항목 찾기
    cy.contains(LONG_TEXT).then(($el) => {
      if (!$el) {
        throw new Error('Element not found')
      }

      const el = $el[0] as HTMLElement

      // 실제 너비와 스크롤 너비를 Cypress 로그에 출력
      const spanWidth = el.offsetWidth
      const spanScrollWidth = el.scrollWidth

      // 텍스트가 넘치는지 확인
      expect(spanScrollWidth).to.be.greaterThan(spanWidth)
    })
  })

  it('툴팁 확인', () => {
    const { LONG_TEXT } = INPUT_DATA
    todoPage.getInput().type(LONG_TEXT)
    todoPage.getAddButton().click()
    cy.contains(LONG_TEXT)
      .trigger('mouseover')
      .should('have.attr', 'title', LONG_TEXT)
  })

  it('아무런 입력을 하지 않고 등록을 시도한다.', () => {
    todoPage.getAddButton().click()
    todoPage.getAlert().find('div').should('have.text', '할 일을 입력해주세요')
  })

  it('Alert의 [확인] 버튼 클릭시 Alert이 종료된다..', () => {
    todoPage.getAddButton().click()

    todoPage
      .getAlert()
      .should('be.visible')
      .within(() => {
        cy.get('button').click()
      })

    todoPage.getAlert().should('not.exist')
  })

  it('XSS 스크립트 시도시 평문으로 등록된다.', () => {
    const { XSS_SCRIPT } = INPUT_DATA
    todoPage.getInput().type(XSS_SCRIPT).type('{enter}')
    todoPage.getTextContains(XSS_SCRIPT)

    cy.on('window:alert', (str) => {
      throw new Error('Unexpected alert with message: ' + str)
    })
  })

  it('SQL Injection 시도시 평문으로 등록된다.', () => {
    const { SQL_INJECTION } = INPUT_DATA
    todoPage.getInput().type(SQL_INJECTION).type('{enter}')
    todoPage.getTextContains(SQL_INJECTION)
  })

  it('등록된 할 일을 클릭하면 절취선이 보여진다.', () => {
    const { TEST_TODO } = INPUT_DATA
    todoPage.getInput().type(TEST_TODO).type('{enter}')
    cy.contains(TEST_TODO)
      .click()
      .should('have.css', 'text-decoration-line', 'line-through')
  })

  it('완료한 할 일을 클릭하면 절취선이 사라진다.', () => {
    const { TEST_TODO } = INPUT_DATA
    todoPage.getInput().type(TEST_TODO).type('{enter}')
    cy.contains(TEST_TODO)
      .click()
      .should('have.css', 'text-decoration-line', 'line-through')
      .click()
      .should('not.have.css', 'text-decoration-line', 'line-through')
  })

  it('5개의 할 일을 등록 후 첫번째 데이터를 삭제 확인', () => {
    const { TEST_TODO } = INPUT_DATA
    const FIRST_TODO_DATA = `${TEST_TODO}0`
    todoPage.addMultipleTodos(5, TEST_TODO)
    todoPage.deleteTodo(FIRST_TODO_DATA)
    cy.contains(FIRST_TODO_DATA).should('not.exist')
  })

  it('5개의 할 일을 등록 후 세번째 데이터를 삭제 확인', () => {
    const { TEST_TODO } = INPUT_DATA
    const MIDDLE_TODO_DATA = `${TEST_TODO}2`
    todoPage.addMultipleTodos(5, TEST_TODO)
    todoPage.deleteTodo(MIDDLE_TODO_DATA)
    cy.contains(MIDDLE_TODO_DATA).should('not.exist')
  })

  it('5개의 할 일을 등록 후 마지막 데이터를 삭제 확인', () => {
    const { TEST_TODO } = INPUT_DATA
    const LAST_TODO_DATA = `${TEST_TODO}4`
    todoPage.addMultipleTodos(5, TEST_TODO)
    todoPage.deleteTodo(LAST_TODO_DATA)
    cy.contains(LAST_TODO_DATA).should('not.exist')
  })

  it('수정 버튼을 클릭시 수정 모달이 나타난다.', () => {
    const { TEST_TODO } = INPUT_DATA
    todoPage.addInputTodo(TEST_TODO)
    todoPage.editTodo(TEST_TODO)
    todoPage.getEditModal().should('be.visible')
  })

  it('수정 모달이 나타난 상태에서 X 버튼을 클릭시 모달이 종료된다.', () => {
    const { TEST_TODO } = INPUT_DATA
    todoPage.addInputTodo(TEST_TODO)
    todoPage.editTodo(TEST_TODO)
    todoPage.getEditModal().within(() => {
      cy.contains('button', 'x').click()
    })
    todoPage.getEditModal().should('not.exist')
  })

  it('수정 모달이 나타난 상태에서 ESC키를 입력시 모달이 종료된다.', () => {
    const { TEST_TODO } = INPUT_DATA
    todoPage.addInputTodo(TEST_TODO)
    todoPage.editTodo(TEST_TODO)
    todoPage.getEditModal().type('{esc}')
    todoPage.getEditModal().should('not.exist')
  })
})

export {}
