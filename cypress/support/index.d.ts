declare namespace Cypress {
    interface Chainable<Subject = any> {
        copyPaste(text: string): Chainable<Subject>;
    }
}
