import * as recommendation from './getRecommendation';

describe('ShowAllRecommendationByElegibility', () => {
    it('Validate Swagger Status Code', () => {
        recommendation.getAllRecommendations().should((Response) => {
            expect(Response.status).to.eq(200)
            cy.log(Response.body)
            for(var index in Response.body.offers){
                //var teste = (Response.body.offers[index].name)
                //cy.log(teste)
                var rec = (Response.body.offers[index].name)
                cy.log(rec)
            }
        })
    })
})
export{rec}