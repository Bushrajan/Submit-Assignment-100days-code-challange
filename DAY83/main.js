"use strict";
// Day-83 of 100-Days-Of-Code Challenge
// Day-83 Task:
Object.defineProperty(exports, "__esModule", { value: true });
// Today's task is to learn about:
console.log(`\nxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx DAY 83 xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx\n\n\nBuilding UI with Components\n\n
React core concepts
There are three core concepts of React that you'll need to be familiar with to start building React applications. These are:

Components
Props
State

In the next chapters, we will go through these concepts and provide resources where you can continue learning them. After you're familiar with these concepts, we'll then show you how to install Next.js and use newer React features such as Server and Client Components.

Components
User interfaces can be broken down into smaller building blocks called components.

Components allow you to build self-contained, reusable snippets of code. If you think of components as LEGO bricks, you can take these individual bricks and combine them together to form larger structures. If you need to update a piece of the UI, you can update the specific component or brick.

Creating components
In React, components are functions. Inside your script tag, create a new function called header:
code---------------------------------------------------------index.html

<script type="text/jsx">
const app = document.getElementById("app")
function header() {
}

const root = ReactDOM.createRoot(app);
root.render(<h1>Develop. Preview. Ship.</h1>);
</script>


A component is a function that returns UI elements. Inside the return statement of the function, you can write JSX:
code---------------------------------------------------------index.html

<script type="text/jsx">
  const app = document.getElementById("app")
 
  function header() {
     return (<h1>Develop. Preview. Ship.</h1>)
   }
 
  const root = ReactDOM.createRoot(app);
  root.render(<h1>Develop. Preview. Ship.</h1>);
</script>`);
console.log(`\n\n\nDisplaying Data with Props\n\n
So far, if you were to reuse your <Header /> component, it would display the same content both times.
code---------------------------------------------------------------index.html

function Header() {
  return <h1>Develop. Preview. Ship.</h1>;
}
 
function HomePage() {
  return (
    <div>
      <Header />
      <Header />
    </div>
  );
}

But what if you want to pass different text or you don't know the information ahead of time because you're fetching data from an external source?

Regular HTML elements have attributes that you can use to pass pieces of information that change the behavior of those elements. For example, changing the src attribute of an <img> element changes the image that is shown. Changing the href attribute of an <a> tag changes the destination of the link.

Using props
In your HomePage component, you can pass a custom title prop to the Header component, just like you'd pass HTML attributes:
code--------------------------------------------------------index.html

function HomePage() {
  return (
    <div>
      <Header title="React" />
    </div>
  );
}


And Header, the child component, can accept those props as its first function parameter:
code--------------------------------------------------------index.html

function Header(props) {
  return <h1>Develop. Preview. Ship.</h1>;

}


If you console.log() props, you can see that it's an object with a title property.`);
