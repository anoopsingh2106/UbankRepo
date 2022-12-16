/// <reference types="Cypress" />

export class productSearchPage { 
  
    getProductSearchTextBox () {
        return cy.get("input#search")
      }
    getProductSearchButtonIcon () {
        return cy.get("button.action.search")
      }
    getProductSearchResultHeader () {
        return cy.get("span.base")
      }
    getProductItem () {
        return cy.get("div.products.wrapper.grid.products-grid > ol > li:nth-child(3)")
      }

//Action Methods
enterProductItemToSearch (productItem) {
    this.getProductSearchTextBox().type(productItem)
}
clickProductSearchButtonIcon () {
    this.getProductSearchButtonIcon().click()
}
verifySearchResultLabelText (productItem) {
    this.getProductSearchResultHeader().should('contain', productItem)
}
clickProductItem () {
    this.getProductItem().click()
}     

}

export const productSearchPageObj = new productSearchPage()
