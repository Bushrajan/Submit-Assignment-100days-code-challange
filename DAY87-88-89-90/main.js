"use strict";
/*Day-87 of 100-Days-Of-Code Challenge
Day-87 Task:
Today's task is to learn about: */
Object.defineProperty(exports, "__esModule", { value: true });
console.log(`xxxxxxxxxxxxxxxx DAY 87 xxxxxxxxxxxxxxxxxx\n
 -------   CSS Styling -------
Currently, your home page doesn't have any styles. Let's look at the different ways you can style your Next.js application.
In this chapter...
Here are the topics we’ll cover
How to add a global CSS file to your application.
Two different ways of styling: Tailwind and CSS modules.
How to conditionally add class names with the clsx utility package.

--------- Global styles ------------
If you look inside the /app/ui folder, you'll see a file called global.css. You can use this file to add CSS rules to all the routes in your application - such as CSS reset rules, site-wide styles for HTML elements like links, and more.
You can import global.css in any component in your application, but it's usually good practice to add it to your top-level component. In Next.js, this is the root layout (more on this later).
Add global styles to your application by navigating to /app/layout.tsx and importing the global.css file.


------ Optimizing Fonts and Images ------
In the previous chapter, you learned how to style your Next.js application. Let's continue working on your home page by adding a custom font and a hero image.
In this chapter...
Here are the topics we'll cover
How to add custom fonts with next/font.
How to add images with next/image.
How fonts and images are optimized in Next.js.

Why optimize fonts?
Fonts play a significant role in the design of a website, but using custom fonts in your project can affect performance if the font files need to be fetched and loaded. Cumulative Layout Shift is a metric used by Google to evaluate the performance and user experience of a website. With fonts, layout shift happens when the browser initially renders text in a fallback or system font and then swaps it out for a custom font once it has loaded. This swap can cause the text size, spacing, or layout to change, shifting elements around it. `);
// ============================================================================
/*Day-88 of 100-Days-Of-Code Challenge
Day-88 Task:
Today's task is to learn about:*/
console.log(`\nxxxxxxxxxxxxxxxx DAY 88 xxxxxxxxxxxxxxxxxx\n
------ Creating Layouts and Pages -------
In this chapter...
Here are the topics we'll cover
Create the dashboard routes using file-system routing.
Understand the role of folders and files when creating new route segments.
Create a nested layout that can be shared between multiple dashboard pages.
Understand what colocation, partial rendering, and the root layout are.

----> Nested routing ----------
Next.js uses file-system routing where folders are used to create nested routes. Each folder represents a route segment that maps to a URL segment.

----> Navigating Between Pages -------
In the previous chapter, you created the dashboard layout and pages. Now, let's add some links to allow users to navigate between the dashboard routes.

---->In this chapter...
Here are the topics we’ll cover
How to use the next/link component.
How to show an active link with the usePathname() hook.
How navigation works in Next.js. 
Why optimize navigation?
To link between pages, you'd traditionally use the <a> HTML element. At the moment, the sidebar links use <a> elements, but notice what happens when you navigate between the home, invoices, and customers pages on your browser.

-------->Did you see it?
There's a full page refresh on each page navigation!

The <Link> component
In Next.js, you can use the <Link /> Component to link between pages in your application. <Link> allows you to do client-side navigation with JavaScript.

To use the <Link /> component, open /app/ui/dashboard/nav-links.tsx, and import the Link component from next/link. Then, replace the <a> tag with <Link> `);
// ============================================================================
/*Day-89 of 100-Days-Of-Code Challenge
Day-89 Task:
Today's task is to learn about: */
console.log(`\nxxxxxxxxxxxxxxxx DAY 89 xxxxxxxxxxxxxxxxxx\n
------ Setting Up Your Database -------  
Before you can continue working on your dashboard, you'll need some data. In this chapter, you'll be setting up a PostgreSQL database using @vercel/postgres. If you're already familiar with PostgreSQL and would prefer to use your own provider, you can skip this chapter and set it up on your own. Otherwise, let's continue!

------>In this chapter...
Here are the topics we'll cover
Push your project to GitHub.
Set up a Vercel account and link your GitHub repo for instant previews and deployments.
Create and link your project to a Postgres database.
Seed the database with initial data.


**** Create a GitHub repository
**** Create a Vercel account
**** Connect and deploy your project
**** Create a Postgres database
**** Seed your database
**** Exploring your database
**** Executing queries `);
// ============================================================================
// /**/
// console.log(`\nxxxxxxxxxxxxxxxx DAY 90 xxxxxxxxxxxxxxxxxx\n`);
// // ============================================================================
