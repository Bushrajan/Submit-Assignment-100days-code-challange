"use strict";
/*Day-82 of 100-Days-Of-Code Challenge
Day-82 Task:

Today's task is to learn about: */
console.log(`\n\nxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx Day82 xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx\n Updating UI with Javascript \n
<html>
  <body>
    <div id="app"></div>
    <script type="text/javascript">
      const app = document.getElementById('app');
    </script>
  </body>
</html>
 
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx Getting Started with React xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

* use React in your newly created project, load two React scripts from an external website called unpkg.com:
--> react is the core React library.
--> react-dom provides DOM-specific methods that enable you to use React with the DOM.

<html>
  <body>
    <div id="app"></div>
    <script src="https://unpkg.com/react@18/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
    <script type="text/javascript">
      const app = document.getElementById('app');
      const header = document.createElement('h1');
      const text = 'Develop. Preview. Ship.';
      const headerContent = document.createTextNode(text);
      header.appendChild(headerContent);
      app.appendChild(header);
    </script>
  </body>
</html>\n

Instead of directly manipulating the DOM with plain JavaScript,
remove the DOM methods that you had added previously, and add the ReactDOM.createRoot()
method to target a specific DOM element and create a root to display your React Components in.
Then, add the root.render() method to render your React code to the DOM.

This will tell React to render our <h1> title inside our #app element.`);
