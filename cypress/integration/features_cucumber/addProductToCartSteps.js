///<reference types="Cypress" />
import {Given, When, Then} from "cypress-cucumber-preprocessor/steps"
import {loginPageObj} from '../../pageObjects/loginPage'
import {productSearchPageObj} from '../../pageObjects/productSearchPage'
import {productDetailsPageObj} from '../../pageObjects/productDetailsPage'
import {checkOutPageObj} from '../../pageObjects/checkOutPage'
import {orderConfirmationPageObj} from '../../pageObjects/orderConfirmationPage'

Given("Customer navigates to the Magento Website SignIn Link and Login using {string} and {string}", function (userName, password) {
    cy.visit(Cypress.env('url'))
    loginPageObj.clickSignInLink()
    loginPageObj.enterUserName(userName)
    loginPageObj.enterPassword(password)
    loginPageObj.clickLoginButton()
 })
 
 When("Customer Search for the {string}", function (productItem) {
  productSearchPageObj.enterProductItemToSearch(productItem)
  productSearchPageObj.clickProductSearchButtonIcon()  
 })
 
 Then("Verify Search results for the {string} is displayed on the Page", function (productItem) {
    productSearchPageObj.verifySearchResultLabelText(productItem)  
 })
 
 When("Customer Selects the product and Navigates to the Product Details Page", function () {
  productSearchPageObj.clickProductItem()  
 })

 Then("Customer verifies the {string} and {string} and Adds The Product to Cart", function (product, productPrice) {
  productDetailsPageObj.assertProductDescriptionName(product) 
  productDetailsPageObj.assertProductPrice(productPrice)  
  productDetailsPageObj.addProductToCart()    
 })

 When("Customer Proceeds to the CheckOut Page and Click Next to Place an Order", function () {
  checkOutPageObj.clickCheckOutIcon()
  checkOutPageObj.clickProceedToCheckOutButton()
  checkOutPageObj.clickNextButtonOnShipping()
  checkOutPageObj.clickPlaceOrderButton()
 })

 Then("Customer verifies the Successful Order Placed message {string}", function (OrderConfirmationMessage) {
  orderConfirmationPageObj.assertOrderConfirmationMessageText(OrderConfirmationMessage)
 })
 