import React from 'react';
import './App.css'

import { Deck, Markdown, Slide } from "spectacle"

import createTheme from "spectacle/lib/themes/default"

import ClientServerHTTP from './client_server_http.png'
import OSIModel from './labeledosimodel.png'
import HTTPBrowser from "./http-browser.png"

import html1 from "./html1.png"
import html2 from "./html2.png"
import bay from "./bay.png"

require('prismjs/components/prism-python')

const publicURL = window.location.hostname

const slidesTheme = createTheme(
    {
        primary: 'white',
        secondary: '#1F2022',
        tertiary: '#03A9FC',
        quaternary: '#CECECE'
    },
    {
        primary: 'Montserrat',
        secondary: 'Helvetica'
    }
)

const markdownSlides = [
    {
        text: `
# Back-End Web Development
---
### with Riley
`
    },
    {
        text: `
# What is the "Back-End"?
---
![Client Server HTTP](${ClientServerHTTP})
`
    },
    {
        text: `
# Web Dev Overview
---
At a high level, Web Dev breaks down into two categories, **Front-End** and **Back-End** web development. This talk, as you may have inferred from the name is about the **Back-End**. If you want to learn more about the **Front-End**, come to ***Front-End Web Dev*** tomorrow.
`
    },
    {
        text: `
# What is HTTP?
---

**HTTP** stands for "HyperText Transfer Protocol"

![OSI Model](${OSIModel})
`
    },
    {
        text: `
# See the HTTP Requests/Responses from Your Browser
---

![HTTP Request/Responses from your browser](${HTTPBrowser})
`
    },
    {
        text: `
# What is HTTP?
---

1. [HTTP Request Standards](https://www.w3.org/Protocols/rfc2616/rfc2616-sec6.html)

Example HTTP GET Request:
~~~
GET / HTTP/1.1
Host: google.com/
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.169 Safari/537.36
~~~
`
    },
    {
        text: `
# A Raw HTTP Request
---

1. [HTTP Response Standards](https://www.w3.org/Protocols/rfc2616/rfc2616-sec6.html)

Example HTTP Response:
~~~
HTTP/1.1 200 OK
Date: Sun, 18 Oct 2009 08:56:53 GMT
Server: Apache/2.2.14 (Win32)
Content-Type: text/html

<html><body><h1>It works!</h1></body></html>
~~~
`
    },
    {
        text: `
# A Raw HTTP Response
---

1. [HTML Basics](https://www.w3schools.com/html/html_basic.asp)

~~~html
<html>
    <head>
        <title>Neat</title>
    <head/>
    <body>
        <div>
            <div>
                1
            </div>
            <div>
                2
            </div>
            <div>
                3
            </div>
        </div>
    </body>
</html>
~~~

![html1](${html1})
`
    },
    {
        text: `
# Styling the HTML
---

~~~html
<html>
    <body style="background-color: #004165">
        <div style="background-color: grey; margin: 1%; overflow: auto">
            <div style="background-color: white; margin: 1%; overflow: auto">
                1
            </div>
            <div style="background-color: white; margin: 1%; overflow: auto">
                2
            </div>
            <div style="background-color: white; margin: 1%; overflow: auto">
                3
            </div>
        </div>
    </body>
</html>
~~~

![html2](${html2})
`
    },
    {
        text: `
# Styling the HTML
---

1. [CSS Selectors](https://www.w3schools.com/cssref/css_selectors.asp)

~~~html
<html>
    <head>
        <style>
            body {
                background-color: #004165;
            }
            div#main {
                background-color: grey;
                margin: 1%;
                overflow: auto;
            }
            div.numbers {
                background-color: white;
                margin: 1%;
                overflow: auto;
            }
        </style>
    </head>
    <body>
        <div id="main">
            <div class="numbers"> 1 </div>
            <div class="numbers"> 2 </div>
            <div class="numbers"> 3 </div>
        </div>
    </body>
</html>
~~~
`
    },
    {
        text: `
# Adding HTML Programmatically
---

1. [Learn JavaScript](https://www.codecademy.com/learn/introduction-to-javascript)

~~~html
<html>
    <body style="background-color: #004165">
        <div id="main" style="background-color: grey; margin: 1%; overflow: auto"></div>
        <script>
            var mainDiv = document.getElementById("main");

            for (var i = 1; i <= 3; i++) {
                mainDiv.innerHTML += '<div  style="background-color: white; margin: 1%; overflow: auto" >' + i + "</div>";
            }
        </script>
    </body>
</html>
~~~

![html2](${html2})
`
    },
    {
        text: `
# Handling Element Click Events
---

~~~html
<html>
    <body style="background-color: #004165">
        <div id="main" style="background-color: grey; margin: 1%; overflow: auto"></div>
        <script>
            var mainDiv = document.getElementById("main");

            var i = 1;

            for (i = 1; i <= 3; i++) {
                mainDiv.innerHTML += '<div  style="background-color: white; margin: 1%; overflow: auto" >' + i + "</div>";
            }

            mainDiv.addEventListener("click", function() {
                mainDiv.innerHTML += '<div  style="background-color: white; margin: 1%; overflow: auto" >' + i + "</div>";

                i++;
            })
        </script>
    </body>
</html>
~~~
`
    }, {
        text: `
# Handling Global Click Events
---

~~~html
<html>
    <body style="background-color: #004165">
        <div id="main" style="background-color: grey; margin: 1%; overflow: auto"></div>
        <script>
            var mainDiv = document.getElementById("main");

            var i = 1;

            for (i = 1; i <= 3; i++) {
                mainDiv.innerHTML += '<div  style="background-color: white; margin: 1%; overflow: auto" >' + i + "</div>";
            }

            document.addEventListener("click", function() {
                mainDiv.innerHTML += '<div  style="background-color: white; margin: 1%; overflow: auto" >' + i + "</div>";

                i++;
            })
        </script>
    </body>
</html>
~~~
`
    }, {
        text: `
# Get it to the Internet

---

1. [Host with Amazon Web Services](https://medium.com/@kyle.galbraith/how-to-host-a-website-on-s3-without-getting-lost-in-the-sea-e2b82aa6cd38)
`
    }, {
        text: `
# Cool, What Next?

---

1. Creat your own website!

2. Learn about the **Back-End** of websites

![bay](${bay})
`
    }, {
        text: `
# What would you like to see? Questions?

---
`
    }
]

const App: React.FC = () => {
    return (
        <Deck theme={slidesTheme}>
            {
                markdownSlides.map((markdownSlide, index) => (
                    <Slide>
                        <Markdown key={index} source={markdownSlide.text} />
                    </Slide>
                ))
            }
        </Deck>
    );
}

export default App;
