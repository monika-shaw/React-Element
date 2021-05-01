import react from 'react';
import React from 'react';
import reactDom from 'react-dom';
import ReactDOM from 'react-dom';
import './index.css';
// creation of element using jsx
/*const element=<h1 className="testclass">Welcome to React Programming....</h1>

ReactDOM.render(element,document.getElementById("root"));

Creation of 2nd element in the same container by rendering newelement then the output only will be understanding the creation of element in React because the last element has the higher precedence
const newelement=<h1 className="testclass">Understanding the creation of Element in React....</h1>

ReactDOM.render(newelement,document.getElementById("root"));*/



/*Here we have render both by creating another div namely app but in usual we will have only one container in our index.html
const element=<h1 className="testclass">Welcome to React Programming....</h1>

ReactDOM.render(element,document.getElementById("root"));

const newelement=<h1 className="testclass">Understanding the creation of Element in React....</h1>

ReactDOM.render(newelement,document.getElementById("app"));*/




//here we will render both the elements into the same container
 
/*const element=(
    <div className="testclass">
        <h1>Welcome to React Programming....</h1>
        <h1>Understanding the reation of element in react</h1>

    </div>
);

ReactDOM.render(element,document.getElementById("root"))*/


//Creation of elelment without jsx

/*const element=React.createElement("h1",null,"Welcome to react programming..");
reactDom.render(element,document.getElementById("root"));*/

const element=react.createElement("div",{className:"testclass"},
React.createElement("h1",null,"Welcome to react programming"),
React.createElement("h1",null,"Understanding the creation of elements")
);

reactDom.render(element,document.getElementById("root"));


