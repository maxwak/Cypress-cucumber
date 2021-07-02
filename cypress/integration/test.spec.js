context('test', () => {
    beforeEach(() => {
      cy.clearCookies();
      cy.visit('https://netbank.pp.santanderconsumer.se/login')
    })
  
    it('enable mock', () => {
      cy.get('#mock-toggle').click({force: true});
      cy.get('.NUxbCSGeOiIQuBv9CuiQT').type('196601237792');
      cy.get('span').contains('Logga in med BankID').click();
      cy.wait(12000);
      cy.get('span').contains('Jag har läst och förstått villkoren').click();
      
    })

})