Feature: Order Placement Flow from E-commerce Website

    Scenario Outline: Place an Order from E-Commerce Website
        Given Customer navigates to the Magento Website SignIn Link and Login using "<userName>" and "<password>"
        When Customer Search for the "<productItem>" 
        Then Verify Search results for the "<productItem>" is displayed on the Page
        When Customer Selects the product and Navigates to the Product Details Page
        Then Customer verifies the "<product>" and "<productPrice>" and Adds The Product to Cart
        When Customer Proceeds to the CheckOut Page and Click Next to Place an Order
        Then Customer verifies the Successful Order Placed message "<OrderConfirmationMessage>"
    Examples:
    | userName                | | password | | productItem| | product                | | productPrice| |OrderConfirmationMessage|
    | anoopsingh2122@gmail.com| | Qazwsx12 | | men shirt  | | Balboa Persistence Tee | |    $29.00   | |Thank you for your purchase!| 
