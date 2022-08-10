/// <reference types="Cypress"/>

describe('Default page test',() => {
    beforeEach(() => {
        // Visita a página 
        cy.visit(Cypress.env('DEEZER_PAGE'))  
        cy.get('.cookie-banner-lgpd_accept-button').click()      
    })
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
    })

    it('Validate Header', () => {
        //Validates if the Vitrine logo is redirecting to home page
        cy.get('[alt="Logo Vitrine Globo"]')
            .click()
            .url().should('eq', Cypress.env('VITRINE_HOME'))
            .go('back')

        //Validate the Modal enter button and if is redirected to the loging page
        cy.get('.text-user').click()
        cy.get('.btn__enter').click()
        cy.url().should('contain', Cypress.env('LOGIN_URL'))
        cy.go("back")
    })

    it('Validate Hero Fullscreen', () => {
        cy.get('.hero__content__description')
            .should('have.text', ' Agora, assinantes de qualquer plano Globoplay ganham 6 meses para curtir suas playlists favoritas on e offline. ');
        
        cy.get('.discount-box__discount > span')
            .should('have.text', '6 meses grátis');

        cy.get('.offer-button > .vtr-button')
            .should('be.visible')
            .should('have.text', ' Conheça as ofertas ')
            .click()
        cy.get(':nth-child(1) > .btn-filter').should('have.class', 'active')
        
        //Falta validar scrollDown para ofertas   
    })

    it('Validate Banner 01', () => {
        cy.get('.partner > picture').should('be.visible')   
    })

    // it('Validate Offers'), () => ({

    // })

    it('Validate Button Veja mais ofertas', () => {
        cy.get('.redirect__btn > .vtr-button')
            .should('be.visible')
            .click()
            .url().should('eq', Cypress.env('VITRINE_HOME'))
            .go("back")
    })

    it('Validate Footers', () => {
        cy.get('.footer__info')
            .should('have.text', Cypress.env('FOOTERS_DEEZER'))
    })
})