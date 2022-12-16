/// <reference types="Cypress" />

export class loginPage {

    getSignInLink () {
        return cy.get("body > div.page-wrapper > header > div.panel.wrapper > div > ul > li.authorization-link > a")
      }
    getUserNameTextBox () {
        return cy.get("input#email")
      }
    getPasswordTextBox () {
        return cy.get("input[name='login[password]']")
      }
    getLoginButton () {
        return cy.get("button.action.login.primary")
      }      
// Actions Methods
clickSignInLink(){
    this.getSignInLink().click()
}
enterUserName (userName) {
    this.getUserNameTextBox().type(userName)
}
enterPassword (password) {
    this.getPasswordTextBox().type(password)
}
clickLoginButton () {
    this.getLoginButton().click()
}
} 

export const loginPageObj = new loginPage()
