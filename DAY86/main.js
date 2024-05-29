"use strict";
/*Day-86 of 100-Days-Of-Code Challenge
Day-86 Task:

Today's task is to learn about: */
Object.defineProperty(exports, "__esModule", { value: true });
console.log(`
Learn Next.js

Overview
Here's an overview of features you'll learn about in this course:

 * Styling: The different ways to style your application in Next.js.
 * Optimizations: How to optimize images, links, and fonts.
 * Routing: How to create nested layouts and pages using file-system routing.
 * Data Fetching: How to set up a database on Vercel, and best practices for fetching and streaming.
 * Search and Pagination: How to implement search and pagination using URL Search Params.
 * Mutating Data: How to mutate data using React Server Actions, and revalidate the Next.js cache.
 * Error Handling: How to handle general and 404 not found errors.
 * Form Validation and Accessibility: How to do server-side form validation and tips for improving accessibility.
 * Authentication: How to add authentication to your application using NextAuth.js and Middleware.
 * Metadata: How to add metadata and prepare your application for social sharing.


System requirements
Before you start this course, make sure your system meets the following requirements:

Node.js 18.17.0 or later installed. Download here.
Operating systems: macOS, Windows (including WSL), or Linux. `);
console.log(`\n\n
Getting Started

Creating a new project
To create a Next.js app, open your terminal, cd into the folder you'd like to keep your project, and run the following command:

code--------------------------------------------------------------------Terminal
npx create-next-app@latest nextjs-dashboard --use-npm --example "https://github.com/vercel/next-learn/tree/main/dashboard/starter-example"
This command uses create-next-app, a Command Line Interface (CLI) tool that sets up a Next.js application for you. In the command above, you're also using the --example flag with the starter example for this course.

Exploring the project
Unlike tutorials that have you write code from scratch, much of the code for this course is already written for you. This better reflects real-world development, where you'll likely be working with existing codebases.
Our goal is to help you focus on learning the main features of Next.js, without having to write all the application code.
After installation, open the project in your code editor and navigate to nextjs-dashboard.

code------------------------------------Terminal
cd nextjs-dashboard


* /app: Contains all the routes, components, and logic for your application, this is where you'll be mostly working from.
* /app/lib: Contains functions used in your application, such as reusable utility functions and data fetching functions.
* /app/ui: Contains all the UI components for your application, such as cards, tables, and forms. To save time, we've pre-styled these components for you.
* /public: Contains all the static assets for your application, such as images.
* /scripts: Contains a seeding script that you'll use to populate your database in a later chapter.
* Config Files: You'll also notice config files such as next.config.js at the root of your application. Most of these files are created and pre-configured when you start a new project using create-next-app. You will not need to modify them in this course.


`);
