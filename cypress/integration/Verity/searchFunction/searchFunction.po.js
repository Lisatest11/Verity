export default class Search {
    static searchBox() {
        return cy.get('input.gLFyf');
    }
    static resultsList() {
        return cy.get('.v7W49e').children();
    }
    static topResult() {
        return cy.get('.M8OgIe');
    }
}