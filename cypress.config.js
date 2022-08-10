module.exports = {
  env:{
    VITRINE_HOME: 'https://vitrine-dev1.qa.globoi.com/',
    LOGIN_URL: 'https://login.qa.globoi.com/login',
    DEEZER_PAGE: 'https://vitrine-qa1.qa.globoi.com/assine/deezer-premium',

    API_RECOMMENDATION_URL: 'https://jv-qa1-vitrine-bff.apps.tsuru.dev.gcp.i.globo/recommendations?',
    
    //Massa de Dados
    GLOBOID_LOGADOFREE: '8c2ad136-7e37-458e-bc82-c946f7449431',
    EMAIL_LOGADOFREE: 'glbteste.avt.parcerias+1157@gmail.com',
    
    GLOBOID_GLOBOPLAY_MENSAL: 'e1c395a0-2364-4e19-85c8-78ed595d86ce',
    EMAIL_GLOBOPLAY_MENSAL: 'glbteste.avt.parcerias+1252@mailinator.com',
    
    GLOBOID_GLOBOPLAY_ANUAL: '1e2faa99-e1f7-49f8-a21d-4b3fcd06166b',
    EMAIL_GLOBOPLAY_ANUAL: 'glbteste.avt.parcerias+1253@mailinator.com',
    
    GLOBOID_GLOBOPLAY_MAISCANAIS_ANUAL: '7f6f023c-ed5a-4983-a04c-7426016f4f40',
    EMAIL_GLOBOPLAY_MAISCANAIS_ANUAL: 'glbteste.ana.marques.rox1@mailinator.com',

    GLOBOID_GLOBOPLAY_MAISCANAIS_ANUAL: 'dd6255a1-22b3-43de-b4fc-ac052715b954',
    EMAIL_GLOBOPLAY_MAISCANAIS_ANUAL: 'glbteste.avt.parcerias+1257@mailinator.com',

    USER_PASSWORD: '12345678',


    //Footers das páginas:
    FOOTERS_DEEZER: '* Sinal da Globo gratuito disponível em algumas cidades nos estados: Acre, Amapá, Amazonas, Bahia, Ceará, Espírito Santo, Goiás, Maranhão, Mato Grosso, Mato Grosso do Sul, Minas Gerais, Pará, Paraná, Pernambuco, Rio de Janeiro, Rio Grande do Norte, Rio Grande do Sul, Rondônia, Roraima, Santa Catarina, São Paulo e o Distrito Federal.'
                    + '** Canal gratuito no território brasileiro.'
                    + '**** O benefício é válido apenas para novos assinantes Deezer Premium. Os 6 meses de free trial de Deezer Premium estão atrelados à assinatura do Globoplay. Em caso de cancelamento do Globoplay, o valor cobrado pelo pacote Deezer Premium será de R$ 19,90 mensais.'
},

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
};
