/*Day-85 of 100-Days-Of-Code Challenge
Day-85 Task:

Today's task is to learn about: */


console.log(`\n\n\n
Installing Next.js
When you use Next.js in your project, you do not need to load the react and react-dom scripts from unpkg.com anymore. Instead, you can install these packages locally using npm or your preferred package manager.

Note: To use Next.js, you will need to have Node.js version 18.17.0 or above installed on your machine (see minimum version requirement), you can download it here.
To do so, create a new file in the same directory as your index.html file, called package.json with an empty object {}.

package.json 
{}

In your terminal, run the following command in the root of your project:

Terminal
npm install react@latest react-dom@latest next@latest
Once the installation is complete, you should be able to see your project dependencies listed inside your package.json file:

codefile-------------------------------------package.json

{
  "dependencies": {
    "next": "^14.0.3",
    "react": "^18.3.1",
    "react-dom": "^18.3.1"
  }
}

Don't worry if you're on later versions than the ones shown above, as long as you have the next, react, and react-dom packages installed, you're good to go.
You will also notice a new file called package-lock.json file that contains detailed information about the exact versions of each package.

Jumping back to the index.html file, you can delete the following code:

The <html> and <body> tags.
The <div> element with the id of app.
The react and react-dom scripts since you've installed them with NPM.
The Babel script because Next.js has a compiler that transforms JSX into valid JavaScript browsers can understand.
The <script type="text/jsx"> tag.
The document.getElementById() and ReactDom.createRoot() methods.
The React. part of the React.useState(0) function


\n\n`);





console.log(`\n\n\n
Server and Client Components:-\n

To understand how Server and Client Components work, it's helpful to be familiar with two foundational web concepts:
The environments your application code can be executed in: the server and the client.
The network boundary that separates server and client code.

The client refers to the browser on a user’s device that sends a request to a server for your application code. It then turns the response it receives from the server into an interface the user can interact with.
The server refers to the computer in a data center that stores your application code, receives requests from a client, does some computation, and sends back an appropriate response.

Each environment has its own set of capabilities and constraints. For example, by moving rendering and data fetching to the server, you can reduce the amount of code sent to the client, which can improve your application's performance. But, as you learned earlier, to make your UI interactive, you need to update the DOM on the client. 

Therefore, the code you write for the server and the client is not always the same. Certain operations (e.g. data fetching or managing user state) are better suited for one environment over the other.


Network Boundary:-
The Network Boundary is a conceptual line that separates the different environments.

In React, you choose where to place the network boundary in your component tree. For example, you can fetch data and render a user's posts on the server (using Server Components), then render the interactive LikeButton for each post on the client (using Client Components).

code-----------------------------------------------------------------/app/like-button.js
export default function LikeButton() {}


code-----------------------------------------------------------------/app/like-button.js
export default function LikeButton() {
  function handleClick() {
    setLikes(likes + 1);
  }
 
  return <button onClick={handleClick}>Like ({likes})</button>;
}


code------------------------------------------------------------/app/like-button.js
import { useState } from 'react'; 
export default function LikeButton() {
  const [likes, setLikes] = useState(0);
  
  function handleClick() {
    setLikes(likes + 1);
  }
 
  return <button onClick={handleClick}>Like ({likes})</button>;
}


code------------------------------------------------------------/app/like-button.js
'use client';
 
import { useState } from 'react'; 
export default function LikeButton() {
  const [likes, setLikes] = useState(0);
 
  function handleClick() {
    setLikes(likes + 1);
  }
 
  return <button onClick={handleClick}>Like ({likes})</button>;
}


code------------------------------------------------------------------/app/page.js
import LikeButton from './like-button';
function Header({ title }) {
  return <h1>{title ? title : 'Default title'}</h1>;
}
 
export default function HomePage() {
  const names = ['Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton'];
 
  return (
    <div>
      <Header title="Develop. Preview. Ship." />
      <ul>
        {names.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
      <LikeButton />
    </div>
  );
}
 `);
