// index.js
import React from 'react'
import ReactDOM from 'react-dom'
// To get the root element from the HTML document
import asabenehImage from './images/asabeneh.jpg'
import htmlImage from './images/html_logo.png'
import cssImage from './images/css_logo.png'
import reactImage from './images/react_logo.png'
// to import the doSomeMath from the math.js with or without extension
import doSomeMath from './math.js'

// to import the other modules
// since these modules were not exported as default we have to desctructure
import { addTwo, multiply, subtract } from './math.js'

import * as everything from './math.js'
console.log(addTwo(5, 5))
console.log(doSomeMath.addTwo(5, 5))
console.log(everything)
// JSX element, header


// JSX element, header
const welcome = 'Welcome to 30 Days Of React'
const title = 'Getting Started React'
const subtitle = 'JavaScript Library'
const author = {
    firstName: 'Asabeneh',
    lastName: 'Yetayeh',
}
const date = 'Oct 2, 2020'

// JSX element, header
const header = (
    <header id="react-header">
        <div className='header-wrapper'>
            <h1>{welcome}</h1>
            <h2>{title}</h2>
            <h3>{subtitle}</h3>
            <p>
                Instructor: {author.firstName} {author.lastName}
            </p>
            <small>Date: {date}</small>
        </div>
    </header>
)

const numOne = 3
const numTwo = 2

const result = (
    <p>
        {numOne} + {numTwo} = {numOne + numTwo}
    </p>
)

const yearBorn = 1820
const currentYear = new Date().getFullYear()
const age = currentYear - yearBorn
const personAge = (
    <p>
        {' '}
        {author.firstName} {author.lastName} is {age} years old
    </p>
)

// JSX element, main
const techs = ['HTML', 'CSS', 'JavaScript']
const techsFormatted = techs.map((tech) => <li>{tech}</li>)

const user = (
    <div>
        <img src={asabenehImage} alt='asabeneh image' />
    </div>
)

const logo1  = (
    <div>
        <h1>Front End Technologies</h1>
        <img className="standard-image" src={htmlImage} alt='html image'/>
        <img className="standard-image" src={cssImage} alt='css image'/>
        <img className="standard-image" src={reactImage} alt='react image'/>
        <img className="standard-image" src="https://e7.pngegg.com/pngimages/725/775/png-clipart-javascript-html-logo-blog-css3-javanese-miscellaneous-angle.png" alt='Remote JS logo'/>
    </div>
)



const pageContent = (
    <div className="page-center">
        <div className="subscribe-container">
            <h1>Subscribe</h1>
            <p>Sign up with your email to receive news updates.</p>
            <div className="input-group">
                <input className="subscribe-input" type="text" id="fname" name="First Name" placeholder="First Name"/>
                <input className="subscribe-input" type="text" id="lname" name="Last Name" placeholder="Last Name"/>
                <input className="subscribe-input" type="text" id="email" name="Email" placeholder="Email"/>
            </div>
            <button className="subscribe-button" type="button">Click Me!</button>
        </div>
    </div>
)





// JSX element, main
const main = (
    <main>
        <div className='main-wrapper'>
            <p>
                Prerequisite to get started{' '}
                <strong>
                    <em>react.js</em>
                </strong>
                :
            </p>
            <ul>{techsFormatted}</ul>
            {result}
            {personAge}
            {user}
            {pageContent}
            {logo1}

        </div>
    </main>
)

const copyRight = 'Copyright 2020'

// JSX element, footer
const footer = (
    <footer>
        <div className='footer-wrapper'>
            <p>{copyRight}</p>
        </div>
    </footer>
)

// JSX element, app
const app = (
    <div className='app'>
        {header}
        {main}
        {footer}
    </div>
)

const rootElement = document.getElementById('root')
// we render the JSX element using the ReactDOM package
ReactDOM.render(app, rootElement)