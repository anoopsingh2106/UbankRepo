/// <reference types="Cypress" />

export class checkOutPage { 

   getCheckOutLinkIcon(){
    return cy.get("a.action.showcart")
   }
   getProceedToCheckOutButton(){
    return cy.get("button#top-cart-btn-checkout")
   }
   getNextButtonOnShipping(){
    return cy.get("button.button.action.continue.primary")
   }
   getPlaceOrderButton(){
    return cy.get("button.action.primary.checkout")
   }
  
// Action Methods

clickCheckOutIcon(){
    this.getCheckOutLinkIcon().click()
}
clickProceedToCheckOutButton(){
    this.getProceedToCheckOutButton().click()
}
clickNextButtonOnShipping(){
    this.getNextButtonOnShipping().click()
}
clickPlaceOrderButton(){
    this.getPlaceOrderButton().click()
}

}  
  
  export const checkOutPageObj = new checkOutPage()
