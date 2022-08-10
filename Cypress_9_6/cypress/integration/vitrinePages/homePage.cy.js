/// <reference types="Cypress"/>

import { getAllRecommendations } from "../recommendations/getRecommendation";

describe('validateLogin',() => {
    beforeEach(() => {
        cy.visit(Cypress.env('VITRINE_HOME'))
        cy.get('.cookie-banner-lgpd_accept-button').click()
    })
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
    })

    it('Validating Vitrine Homepage', () => {
        cy.get('.text-user').click()
        cy.get('.btn__enter').click()

        cy.get('#login').type(Cypress.env('EMAIL_GLOBOPLAY_MENSAL'))
        cy.get('#password').type(Cypress.env('USER_PASSWORD'))
        cy.get('.button').click()
    })

    it('Validating Recommendations', () => {    
        cy.log("response.offers.name")
        getAllRecommendations(Cypress.env('API_RECOMMENDATION_URL')).should((Response)=>{
            var cont = 1
            for (var index in Response.body.offers){
                cy.log(Response.body.offers[index].name) 
                cy.get('div[id="splide02-list"').should('contain.text', Response.body.offers[index].name)
                cy.get('div[id="splide02-list"').should('contain.text', Response.body.offers[index].products[0].valueParcel)
                cont ++
            }
        })
    })
})