import React from 'react';
import './App.css'

import { Deck, Markdown, Slide } from "spectacle"

import createTheme from "spectacle/lib/themes/default"

import ClientServerHTTP from './client_server_http.png'
import OSIModel from './labeledosimodel.png'
import HTTPBrowser from "./http-browser.png"
import PythonExtension from "./python-extension.png"

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
# What is a HTTP Request?

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
# What is a HTTP Response?

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
    }, {
        text: `
# Make our own Server!

---

1. Launch VS Code

2. Install the \`python\` extension (Press \`CTRL + SHIFT + X\`, then search for Python)

![Python Extension](${PythonExtension})
`
    }, {
        text: `
# Server Boilerplate

---

~~~
import flask

app = flask.Flask(__name__)

@app.route("/")
def hello_world():
    return "Hello, World!"

if __name__ == "__main__":
    app.run(port=7777)
~~~
`
    }, {
        text: `
# Make Requests to our Server!

---

~~~
import requests

response = requests.get("http://localhost:7777")

print(response.text)
~~~
`
    }, {
        text: `
# Get it to the Internet

---

1. [Host it on the internet](https://www.reddit.com/r/flask/comments/2321oc/easiest_and_fastest_way_to_host_flask_python/)
`
    }, {
        text: `
# Cool, What Next?

---

1. Create your own Web API!

2. Learn about the **Front-End** of websites

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
