describe('template spec', () => {
  it('passes', () => {

  cy.viewport(1320, 768)
    cy.visit('accounts.google.com/')
  //muneebsykescottages
    cy.get("#identifierId").type("nesttest1001@gmail.com")
    cy.get("#identifierNext").click()
    cy.get("input[type='password']").type("mun123,./")
    cy.get("#passwordNext").click()
    cy.origin("myaccount.google.com", ()=>{
      Cypress.on("uncaught:exception", (err,runnable)=>{
        return false
    })   
      cy.get("a[aria-label='Google apps']").click({force:true})  
     // cy.wait(3000)
     cy.get("iframe[name='app']").its("0.contentDocument.body").should("not.be.undefined").and("not.be.empty").then(body=>{
      cy.wrap(body).contains("span", "Gmail").click()
     })
   
     // cy.wrap(body).contains("span", "Gmail").click()

     
    //   .should("not.be.undefined")
    //   .and("not.be.empty")
    //   .then(cy.wrap)
    //   .contains("span",  "Gmail")
    //   .should("be.visible")
    //   .click()
    // }) 

      //     cy.get("iframe[name='app']")
      // .its('0.contentDocument.body')
      // .should("not.be.undefined")
      // .and("not.be.empty")
      // .then(body=>{
      //   cy.wrap(body).contains("span",  "Gmail")
      //   .should("be.visible")
      //   .click()

      // })

    })
    
  


// cy.visit("https://gmail.com/")
//   cy.get("#identifierId").type("NestTest1001@gmail.com")
//   cy.get("span").contains("Next").click()
//   cy.wait(3000)
//   Cypress.on('uncaught:exception', (err) => !err.message.includes('ResizeObserver loop limit exceeded'))
//   cy.get("input[type='password']").type("mun123,./")
//   cy.get("span").contains("Next").click()
//   cy.origin("https://mail.google.com", ()=>{
//     Cypress.on("uncaught:exception", (err,runnable)=>{
//       return false
//   })   
//   cy.visit("/")
//   })

    }) 
  })