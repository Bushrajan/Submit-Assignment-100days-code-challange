<!--                                      
oooooooooooooooooooooooooooooooo JS notes ooooooooooooooooooooooooooooooooo

Introduction to JavaScript (JS)
What is JavaScript?
Ans:-
JavaScript was initially created to “make web pages alive”.
The programs in this language are called scripts. They can be written right in a web page’s HTML and run automatically as the page loads.
Scripts are provided and executed as plain text. They don’t need special preparation or compilation to run.
----------------------------------------------------------------------------

Why is it called JavaScript?
Ans: 
When JavaScript was created, it initially had another name: “LiveScript”. But Java was very popular at that time, so it was decided that positioning a new language as a “younger brother” of Java would help.
But as it evolved, JavaScript became a fully independent language with its own specification called ECMAScript, and now it has no relation to Java at all.
----------------------------------------------------------------------------

How do engines work?
Ans:
The engine (embedded if it’s a browser) reads (“parses”) the script.
Then it converts (“compiles”) the script to machine code.
And then the machine code runs, pretty fast.
The engine applies optimizations at each step of the process. It even watches the compiled script as it runs, analyzes the data that flows through it, and further optimizes the machine code based on that knowledge.
Engines are complicated. But the basics are easy.
----------------------------------------------------------------------------

What can in-browser JavaScript do? 
Ans:
Modern JavaScript is a “safe” programming language. It does not provide low-level access to memory or the CPU, because it was initially created for browsers which do not require it.
JavaScript’s capabilities greatly depend on the environment it’s running in. For instance, Node.js supports functions that allow JavaScript to read/write arbitrary files, perform network requests, etc.
In-browser JavaScript can do everything related to webpage manipulation, interaction with the user, and the webserver.For instance, in-browser 

JavaScript is able to:
Add new HTML to the page, change the existing content, modify styles.
React to user actions, run on mouse clicks, pointer movements, key presses.
Send requests over the network to remote servers, download and upload files (so-called AJAX and COMET technologies).
Get and set cookies, ask questions to the visitor, show messages.
Remember the data on the client-side (“local storage”).

----------------------------------------------------------------------------
 What CAN’T in-browser JavaScript do?
 Ans:
 JavaScript’s abilities in the browser are limited to protect the user’s safety. The aim is to prevent an evil webpage from accessing private information or harming the user’s data.

Examples of such restrictions include:
JavaScript on a webpage may not read/write arbitrary files on the hard disk, copy them or execute programs. It has no direct access to OS functions.

Different tabs/windows generally do not know about each other. Sometimes they do, for example when one window uses JavaScript to open the other one. But even in this case, JavaScript from one page may not access the other page if they come from different sites (from a different domain, protocol or port).This is called the “Same Origin Policy”.


 What makes JavaScript unique?
 Ans:
 There are at least three great things about JavaScript:
 Full integration with HTML/CSS.
Simple things are done simply.
Supported by all major browsers and enabled by default.
mmary
JavaScript was initially created as a browser-only language, but it is now used in many other environments as well.
Today, JavaScript has a unique position as the most widely-adopted browser language, fully integrated with HTML/CSS.
There are many languages that get “transpiled” to JavaScript and provide certain features. It is recommended to take a look at them, at least briefly, after mastering JavaScript.


NOTE: Task52 is all about javascript the brief introduction about it  -->
