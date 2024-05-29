/*Day-84 of 100-Days-Of-Code Challenge
Day-84 Task:

Today's task is to learn about: */

console.log(`\n\nxxxxxxxxxxxxxxxxxxxxxxx  Day84 xxxxxxxxxxxxxxxxxxxxxxx \n\n
Adding Interactivity with State\n\n
Let's explore how React helps us add interactivity with state and event handlers.
As an example, let's create a "Like" button inside your HomePage component. First, add a button element inside the
return() statement:

code -------------------------------------------------------------------------------- index.html

function HomePage() {
  const names = ['Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton'];
 
  return (
    <div>
      <Header title="Develop. Preview. Ship." />
      <ul>
        {names.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
      <button>Like</button>
    </div>
  );
}



You can define a function to "handle" events whenever they are triggered. Create a function before 
the return statement called handleClick():
code----------------------------------------------------------index.html

function HomePage() {
  // ...
 
  function handleClick() {
    console.log("increment like count")
  }
 
  return (
    <div>
      {/* ... */}
	  <button onClick={}>Like</button>
    </div>
     )
   }
  


Then, you can call the handleClick function when the onClick event is triggered:
code------------------------------------------------------------------index.html
   
   function HomePage() {
     // 	...
     function handleClick() {
       console.log('increment like count');
     }
    
     return (
       <div>
         {/* ... */}
         <button onClick={handleClick}>Like</button>
       </div>
     );
   } `);


console.log(`\n\n Displaying Data with Props\n\n
So far, we explored how you can get started with React. This is what the final code looked like.
If you're starting from here, paste this code into an index.html file in your code editor.

code---------------------------------------------------------------------------------------index.html

<html>
  <body>
    <div id="app"></div>
 
    <script src="https://unpkg.com/react@18/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
 
    <script type="text/jsx">
      const app = document.getElementById("app")
 
      function Header({ title }) {
        return <h1>{title ? title : "Default title"}</h1>
      }
 
      function HomePage() {
        const names = ["Ada Lovelace", "Grace Hopper", "Margaret Hamilton"]
 
        const [likes, setLikes] = React.useState(0)
 
        function handleClick() {
          setLikes(likes + 1)
        }
 
        return (
          <div>
            <Header title="Develop. Preview. Ship." />
            <ul>
              {names.map((name) => (
                <li key={name}>{name}</li>
              ))}
            </ul>
 
            <button onClick={handleClick}>Like ({likes})</button>
          </div>
        )
      }
 
      const root = ReactDOM.createRoot(app);
      root.render(<HomePage />);
    </script>
  </body>
</html>

In the last few chapters, you were introduced to three essential React concepts: components, props, and state. Having a strong foundation in these will help you get started building React applications.
When it comes to learning React, the best way to learn is to build. You can gradually adopt React by using <script> and what you've learned so far to add small components to an existing website. However, many developers have found the user and developer experience React enables valuable enough to dive right in and write their whole frontend application in React.

From React to Next.js:-
While React excels at building UI, it does take some work to independently build that UI into a fully functioning scalable application. There are also newer React features, like Server and Client Components, that require a framework. The good news is that Next.js handles much of the setup and configuration and has additional features to help you build React applications.
Next, we'll migrate the example from React to Next.js, discuss how Next.js works, and introduce you to the differences between Server and Client Components.


\n\n\n`);


