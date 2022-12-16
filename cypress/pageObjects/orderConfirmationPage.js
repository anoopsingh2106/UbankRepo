/// <reference types="Cypress" />

export class orderConfirmationPage { 
  
  getOrderConfirmationMessage () {
    return cy.get("span.base")
  }

  assertOrderConfirmationMessageText (OrderConfirmationMessage) {
    this.getOrderConfirmationMessage().should('contain', OrderConfirmationMessage)
}

}

    export const orderConfirmationPageObj = new orderConfirmationPage()