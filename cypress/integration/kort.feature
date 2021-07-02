Feature: Kort

    As a customer I want to verify my account information

Scenario: Verify utnyttjad kredit
    Given Log in to internet bank
    Then Go to menu Kort
    And Choose Mitt kort trygga köp
    When Account information is shown verify Utnyttjad kredit '−6844,00kr'


Scenario Outline: Verify utnyttjad kredit for Mitt kort trygga köp "<ssn>"
    Given Log in to internet bank with "<ssn>"
    Then Go to menu Kort
    And Choose Mitt kort trygga köp
    When Account information is shown verify Utnyttjad kredit with "<amount>"

    Examples:
      | ssn             | amount       |
      | 196111111111    | −6844,00kr   | 
      | 195722222222    | −6841,00kr   |
