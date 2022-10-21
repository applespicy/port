export const PorfoData =[
    {   id:1,
        title:'Employee Tracker',
        about:'AS A business owner I WANT to be able to view and manage the departments, roles, and employees in my company SO THAT I can organize and plan my business. GIVEN a command-line application that accepts user input WHEN I start the application THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role WHEN I choose to view all departments THEN I am presented with a formatted table showing department names and department ids WHEN I choose to view all roles THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role WHEN I choose to view all employees.',
        tags:["SQL", "NODE JS"],
        github:'https://github.com/applespicy/Employee-tracker',
        link:'https://drive.google.com/file/d/1i1NHbxjTxussPpMpQ6pqnWet-uRpz0B2/view',
        image: require('../../assest/pic1.png')
    },
    {
        id:1,
        title:'PWA',
        about:'I WANT to create notes or code snippets with or without an internet connection so that i can reliably retrieve them for later use ,Created a simple text editor app that can function both online and offline. Needed to use a variety of data persistence options in order to ensure that data is not lost in any scenario. The application first looks to use the data in the indexedDB to populate the editor, then if it cannot access that it will use local storage. For use offline, this application can be downloaded to your desktop as an application. This application is helpful to developers because they can use this as a scratch pad for code snippets and coding ideas. ',
        tags:["NODE JS PWA"],
        github: "https://github.com/applespicy/PWA",
        link:'https://peaceful-bayou-73810.herokuapp.com/',
        image: require('../../assest/pic2.png')
    },
    {
        id:1,
        title:'Invoice Manager',
        about:'As a small business owner, user should be able to keep track of client information and their invoices,WHEN user opens the Invoice Manager app, THEN user is preseted with a homepage page that displays title and navigation options,WHEN user clicks on Login, user is presented with both login form and sign-up form and user enters details for sign up, THEN a new user account is created and data is updated to USER table and user is taken to homepage,WHEN user enters details for login form, THEN data is validated against the USER table and taken homepage,WHEN user clicks on any options in My Dashboard (New Invoice, Manage Invoice, Client), THEN user login is validated',
        tags:["NODE JS, SQL, SEQUELIZE"],
        github: "https://github.com/jgislaszapata/Invoice-Manager",
        link:'https://invoice-manager-pro.herokuapp.com/',
        image: require('../../assest/pic3.png')
    },
    {
        id:1,
        title:'Olu Rice',
        about:'This is a Platform that givees you the opportunity to select different varieties of rice, make payment and get your order delivered to you, WHEN user clicks on Login, there is need to login in with your email and password, WHEN user enters details for login form, the user is taken to the homepage.WHEN user clicks on rice, there is option for the size and quantity and the user click on add to cart.In the cart screen, the user see all list of rice added to the cart *The user can then make payment using the stripe payment integration by the third party',
        tags: "MERN",
        github:"https://github.com/applespicy/OLUS-RICE",
        image: require('../../assest/pic4.png')
    }

]