import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

const url = "https://google.se"

Given ('Log in to internet bank', ()=> {
    cy.visit(url);
    cy.wait(3000);
    cy.get('#mock-toggle').click({force: true});
    cy.get('.NUxbCSGeOiIQuBv9CuiQT').type('196601237792');
    cy.get('span').contains('Logga in med BankID').click();
    cy.wait(12000);
    cy.get('span').contains('Jag har läst och förstått villkoren').click()
    cy.get('._2_ygy39lXPirxd9vTPF0lp :nth-child(1) > div > div ._3XFbxbVaWNUoQeeuEE_r4C').first().click();
    cy.get('.HFWyNDfHwWNfeSqZHjsls > ._2_ygy39lXPirxd9vTPF0lp > ._2upjjTiGp3enjvRCx-r9lw > ._3XFbxbVaWNUoQeeuEE_r4C').click();
    cy.get('._2C5ohM1tAeqvnu2ycmQ4Cq > ._2_ygy39lXPirxd9vTPF0lp > ._2upjjTiGp3enjvRCx-r9lw > ._3XFbxbVaWNUoQeeuEE_r4C').click();
})

Then ('Go to menu Kort', ()=> {
    cy.wait(2000);
    cy.get('span').contains('Kort').click();
    cy.get(':nth-child(1) > a > .RKispiIT9wTdKOgbl6GRW > :nth-child(2) > ._3UG7po-ozxMOzNW6pTgVk8').click();
})

And ('Choose Mitt kort trygga köp', () => {
    cy.get('._2CPC6Qhw_AQ__9IDPiQRIU > :nth-child(1) > :nth-child(1) > a').click()
})

When ('Account information is shown verify Utnyttjad kredit {string}', utnyttKredit =>{

    const normalizeText = (s) => s.replace(/\s/g, '').toLowerCase()
    cy.wait(2000);
    cy.get(':nth-child(1) > h4').then(($kredit)=> {
        let txt = normalizeText($kredit.text())
        expect(txt).contains(utnyttKredit)
    })
})

Given ('Log in to internet bank with {string}', ssn => {
    cy.visit(url);
    cy.wait(5000);
    cy.get('#mock-toggle').click({force: true});
    cy.get('.NUxbCSGeOiIQuBv9CuiQT').type(ssn);
    cy.get('span').contains('Logga in med BankID').click();
    cy.wait(12000);
    cy.get('span').contains('Jag har läst och förstått villkoren').click()
    cy.get('._2_ygy39lXPirxd9vTPF0lp :nth-child(1) > div > div ._3XFbxbVaWNUoQeeuEE_r4C').first().click();
    cy.get('.HFWyNDfHwWNfeSqZHjsls > ._2_ygy39lXPirxd9vTPF0lp > ._2upjjTiGp3enjvRCx-r9lw > ._3XFbxbVaWNUoQeeuEE_r4C').click();
    cy.get('._2C5ohM1tAeqvnu2ycmQ4Cq > ._2_ygy39lXPirxd9vTPF0lp > ._2upjjTiGp3enjvRCx-r9lw > ._3XFbxbVaWNUoQeeuEE_r4C').click();
})

When ('Account information is shown verify Utnyttjad kredit with {string}', amount =>{

    const normalizeText = (s) => s.replace(/\s/g, '').toLowerCase()
    cy.wait(2000);
    cy.get(':nth-child(1) > h4').then(($kredit)=> {
        let txt = normalizeText($kredit.text())
        expect(txt).contains(amount)
    })
})