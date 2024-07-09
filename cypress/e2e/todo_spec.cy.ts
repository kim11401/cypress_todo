import { todoPage } from '../pages/todoPage';
import {INPUT_DATA} from "../constants/INPUT_DATA";

/*

* */

describe('Todo List Test', () => {
    beforeEach(() => {
        todoPage.visit()
    })

    it('한글 입력 확인', () => {
        const { KOREAN_TEXT } = INPUT_DATA
        todoPage.typeAndVerifyInput(KOREAN_TEXT, KOREAN_TEXT)
    });

    it('영어 입력 확인', () => {
        const { ENGLISH_TEXT} = INPUT_DATA
        todoPage.typeAndVerifyInput(ENGLISH_TEXT,ENGLISH_TEXT);
    });

    it('숫자 입력 확인', () => {
        const { NUMERIC_TEXT} = INPUT_DATA
        todoPage.typeAndVerifyInput(NUMERIC_TEXT, NUMERIC_TEXT);
    });

    it('특수문자 입력 확인', () => {
        const { SPECIAL_CHARACTERS} = INPUT_DATA
        todoPage.typeAndVerifyInput(SPECIAL_CHARACTERS, SPECIAL_CHARACTERS);
    });

    it('최소값 입력 확인', () => {
        const { SHORT_TEXT } = INPUT_DATA
        todoPage.typeAndVerifyInput(SHORT_TEXT, SHORT_TEXT)
    })

    it('최대값 입력 확인', () => {
        const { LONG_TEXT} = INPUT_DATA
        todoPage.typeAndVerifyInput(LONG_TEXT, LONG_TEXT)

    })

    it('초과 입력 확인', () => {
        const { OVERFLOW_TEXT,LONG_TEXT} = INPUT_DATA
        todoPage.typeAndVerifyInput(OVERFLOW_TEXT,LONG_TEXT)

    })

    it('초과 텍스트 복사 붙여넣기', () => {
        const { OVERFLOW_TEXT} = INPUT_DATA
        todoPage.pasteAndVerifyInput(OVERFLOW_TEXT)
    })

    it('Enter키를 사용하여 할 일 등록', () => {
        const {TEST_TODO} = INPUT_DATA
        todoPage.getInput().type(TEST_TODO).type('{enter}')
        todoPage.getTextContains(TEST_TODO)
    })

    it('+ 버튼을 눌러 할 일 등록', () => {
        const {TEST_TODO} = INPUT_DATA
        todoPage.getInput().type(TEST_TODO)
        todoPage.getAddButton().click()
        todoPage.getTextContains(TEST_TODO)
    })

    it('아무런 입력을 하지 않고 등록을 시도한다.', () => {
        todoPage.getAddButton().click()
    })


})

export {}