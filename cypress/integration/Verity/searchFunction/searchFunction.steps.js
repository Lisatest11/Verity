
import Search from "./searchFunction.po";

Given("I open Google website", () => {
    // visit base url
    cy.visit("/");
});
When("I search {string}", (text) => {
    //the step can be reused for the rest keyword searching as well
    Search.searchBox().clear().type(text).type("{enter}");
});
Then("I can see {string} link is returned as the first result", (text) => {
   //wikipedia result displays on the top of the results list
    Search.resultsList()
        .eq(1)
        .invoke("text")
        .then(() => {
            cy.contains(text)
                .should("be.visible")
                .should("have.attr", "href")
                .and("include", "https://en.wikipedia.org/wiki/Software");
        });
});
Then("I can see {string} is returned", (text) => {
    //wikipedia result displays on the top of the results page, because this case automated is not required so comment it for now
    // Search.topResult()
    //     .invoke("text")
    //     .then(() => {
    //         cy.contains("wikipedia")
    //             .should("be.visible")
    //             .should("have.attr", "href")
    //             .and("include", "https://en.wikipedia.org/wiki/Literature");
    //     });
    Search.resultsList()
        .eq(1)
        .invoke("text")
        .then(() => {
            cy.contains(text)
                .should("be.visible")
                .should("have.attr", "href")
                .and("include", "https://www.britannica.com/art/literature");
        });
    Search.resultsList()
        .eq(1)
        .contains("› Literature › Literary Terms")
        .should("be.visible")
    Search.resultsList()
        .eq(1)
        .contains("› art › English-literature")
        .should("be.visible")    
});
And('I can see the position where the result is in "britannica.com"', () => {
    Search.resultsList()
        .eq(1)
        .contains("› Literature › Literary Terms")
        .should("be.visible")
    Search.resultsList()
        .eq(1)
        .contains("› art › English-literature")
        .should("be.visible")    
});