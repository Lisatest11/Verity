
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
   //wikipedia result displays on the top of the results list(not on the top of the whole page),
    Search.resultsList()
        .eq(1)
        .invoke("text")
        .then(() => {
            cy.contains(text)
                .should("be.visible")
                .should("have.attr", "href")
                .and("include", "https://en.wikipedia.org/wiki/Software");
        });
    //so if the requirement is displaying on the top of the whole page here has a bug, the below case is checking the result display on the top of the whole page
    // Search.topResult()
    //     .invoke("text")
    //     .then(() => {
    //         cy.contains(text)
    //             .should("be.visible")
    //             .should("have.attr", "href")
    //             .and("include", "https://en.wikipedia.org/wiki/Software");
    //     });
});
Then("I can see {string} is returned", (text) => {
    Search.resultsList()
        .eq(1)
        .invoke("text")
        .then(() => {
            cy.contains(text)
                .should("be.visible")
                .should("have.attr", "href")
                .and("include", "https://www.britannica.com/art/literature");
        });   
});
And('I can get the position for {string}', (text) => {     
    Search.resultsList().contains(text).invoke('offset').then(cy.log)
});
