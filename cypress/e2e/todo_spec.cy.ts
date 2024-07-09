import { todoPage } from '../pages/todoPage';
import {INPUT_DATA} from "../constants/INPUT_DATA";

/*

* */

describe('Todo List Test', () => {
    beforeEach(() => {
        cy.exec('npm run start')
        todoPage.visit()
    })

    it('한글 입력 확인', () => {
        const { KOREAN_TEXT } = INPUT_DATA
        todoPage.getInput().type(KOREAN_TEXT).should('have.value', KOREAN_TEXT)
    });

    it('영어 입력 확인', () => {
        const { ENGLISH_TEXT} = INPUT_DATA
        todoPage.getInput().type(ENGLISH_TEXT).should('have.value', ENGLISH_TEXT);
    });

    it('숫자 입력 확인', () => {
        const { NUMERIC_TEXT} = INPUT_DATA
        todoPage.getInput().type(NUMERIC_TEXT).should('have.value', NUMERIC_TEXT);
    });

    it('특수문자 입력 확인', () => {
        const { SPECIAL_CHARACTERS} = INPUT_DATA
        todoPage.getInput().type(SPECIAL_CHARACTERS).should('have.value', SPECIAL_CHARACTERS);
    });

    it('최소값 입력 확인')

    it('최대값 입력 확인')

    it('초과 입력 확인')

    it('초과 텍스트 복사 붙여넣기')


})

export {}