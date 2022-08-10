/// <reference types="cypress"/>

function getAllRecommendations(){
    return cy.request({
        method: 'GET',
        url: Cypress.env('API_RECOMMENDATION_URL'),
    })
}
export{getAllRecommendations}