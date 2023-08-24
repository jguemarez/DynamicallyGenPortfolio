
const inquirer = require('inquirer');

const fs = require('fs');

inquirer
    .prompt(

        [{
            type: "input",
            message: "What is your name?",
            name: "name"
        },
        {
            type: "input",
            message: "Where are you from?",
            name: "origin"
        },
        {
            type: "input",
            message: "Where do you reside?",
            name: "location"
        },
        {
            type: "Input",
            message: "What is your Web Dev training?",
            name: "education"
        },
        {
            type: "Input",
            message: "What is your public GitHub profile URL?",
            name: "GitHub"

        },
        {
            type: "Input",
            message: "What is your email?",
            name: "email"
        }]
    )
    .then((response, err) => {
        err ? console.error(err) : console.log('Success!\n', response);

        let { name, origin, location, education, GitHub, email } = response;

        let generateHTML = (name, origin, location, education, GitHub, email) =>
            `  <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        *{
            box-sizing: border-box;
        }
        :root{
            --header-footer: black;
            --main: gray;
            --link: blanchedalmond ;
            --h-f-text: white;
            --main-text: blue;
        }
        body{
            height:100vh; 
            width: 100vw;
        }
        header{
            background-color: var(--header-footer); 
            color: var(--h-f-text); 
            min-height: 150px; 
            padding-top:45px;
        }
        header h1, footer h3{
            text-align: center;
        }
        header h1 span{
            color:var(--link); 
        }
        main{
            display:flex;
            flex-direction:column;
            background-color: var(--main); 
            color: var(--darkblue); 
        }
        main section{
            text-indent: 25px;
        }
        main section h2{
            text-align: justify;
        }
        footer{
            background-color:var(--header-footer);
            color: var(--h-f-text);
        }
        a{
            font-variant: small-caps; 
            color:var(--link);
        }
    </style>
    <title>Document</title>
</head>

<body>
    <header>
        <h1>Welcome to <span>${name}</span>'s personal portfolio page.</h1>
    </header>
    <main>
        <section>
            <h2>I hail from ${origin} but my current location is ${location}.</h2>
        </section>
        <section>
            <h2>With respect to my training in Web Dev, I am currently attending the ${education}</h2>
        </section>
        <section>
                <h2>You can find my best work exhibited at <a href='${GitHub}' target = '_blank'>${GitHub}</a>
                    There you can find all my project's repos and the deployed Web apps.
                </h2>
        </section>
    </main>
    <footer><h3>For more info, feel free to contact me at <a href = 'mailto:${email}' target='_blank'>${email}</a></h3> 
            <h3>&copy;${name} Productions 2023</h3>
    </footer>
</body>

</html>`;


    
        
fs.writeFile("index.html", generateHTML(name, origin, location, education, GitHub, email),
        (err) => err ? console.error(err) : console.log("The HTML document is ready."))
    });


