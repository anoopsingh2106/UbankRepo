/// <reference types="Cypress" />

export class productDetailsPage { 

  getProductDescriptionName(){
    return cy.get("span.base")
  }
  getProductPrice(){
    return cy.get("#product-price-526 > span")
  }
  getProductAddToCartButton(){
    return cy.get("button.action.primary.tocart")
  }
  getProductSize(){
    return cy.get("div#option-label-size-143-item-168")
  }
  getProductColor(){
    return cy.get("div#option-label-color-93-item-52")
  }
  
// Action methods
assertProductDescriptionName(product){
  this.getProductDescriptionName().should('contain', product)
}
assertProductPrice(productPrice){
  this.getProductPrice().should('contain', productPrice)
}
addProductToCart(){
  cy.wait(Cypress.config('twoSecondsWait'))
  this.getProductSize().click()
  this.getProductColor().click()
  this.getProductAddToCartButton().click()
  cy.wait(Cypress.config('twoSecondsWait'))
}

} 

    export const productDetailsPageObj = new productDetailsPage()
