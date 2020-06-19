/// <reference types="Cypress" />

describe("Testing the Rechablity of Website",()=>{
    
    it("Visiting the website",()=>{
        cy.visit("/");
    });
    
})

describe("Testing login page components visibility",()=>{

    before("Visiting the website",()=>{
        cy.visit("/");
    })

    it("Testing visibility of Header",()=>{
        cy.get(".heading").should("be.visible");
    })

    it("Testing the visibility of Username Input",async ()=>{
        await cy.get(':nth-child(2) > .joinInput').should('be.visible');
    })

    it("Testing the visibilty of Room input",()=>{
        cy.get(':nth-child(3) > .joinInput').should('be.visible');
    })

    it("Testing ther button visibility",()=>{
        cy.get('.button').should('be.visible');
    })
})


describe("Testing the E2E for login and Messaging",()=>{

    it("Visit the website",()=>{
        cy.visit("/");
    })

    it("Inputing the Username ",()=>{
        cy.get(':nth-child(2) > .joinInput').type('jonsy').should('have.value','jonsy');
    })

    it("Inputting the Room ID",()=>{
        cy.get(':nth-child(3) > .joinInput').type('121').should('have.value','121');
    })


    it("Clicking on button",()=>{
        cy.get('.button').click();
    })

    it("Check if Username is shown in active users",()=>{
        cy.get('.activeItem').should('have.text','jonsy');
    })
    it("Check if we are on chatbox page after clicking on button",()=>{
        cy.url().should('include','/chat');
    })

    it("Check if same Room ID is shown on chatBox",()=>{
        cy.get('h3').should('have.text','121');
    })
    it("Enter the msg into the input",()=>{
        cy.get('.input').type('Hey everyone...How You all Doing, This is the my first time being here');
    })

    it("Send The Message",()=>{
        cy.get('.sendButton').click();
    })

})


describe("Testing using Stubs",()=>{
    it("Non Server Route",()=>{
        cy.visit('/');
        cy.server();
        cy.route('POST','/ppts',{
            name: 'Jonsy',
            age: 22
        })

       
       

     
    })
})


describe("Testing using Route()",()=>{
    it("404 Route testing",()=>{
        cy.visit('/');
        cy.server();
        cy.route({
            url:'/ppts',
            method:'POST',
            status: 500,
            response: {}
        })
        
        
    })
})