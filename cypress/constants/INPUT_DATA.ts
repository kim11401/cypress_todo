export const INPUT_DATA = {
    KOREAN_TEXT: "가나다라",
    ENGLISH_TEXT: "ABCDEFhijklmn",
    NUMERIC_TEXT: "1234567890",
    SPECIAL_CHARACTERS: "`~!@#$%^&*()_-+=|\\}]{[\"':;?/>.<,",
    SHORT_TEXT: "a",
    LONG_TEXT: "a".repeat(100),
    OVERFLOW_TEXT: "a".repeat(101),
    XSS_SCRIPT: "<script>alert('XSS');</script>",
    SQL_INJECTION: "; DROP TABLE todos; --",
    TEST_TODO: "test Data"
};
