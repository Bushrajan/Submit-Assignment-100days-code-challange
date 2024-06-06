/*Day-95 of 100-Days-Of-Code Challenge
Day-95 Task:
Today's task is to learn about: */
console.log(`\nxxxxxxxxxxxxxxxxxxxxxxxxx DAY95 xxxxxxxxxxxxxxxxxxxxxxxxx\n
***** Handling Errors *****
-----------------------------------------
In the previous chapter, you learned how to mutate data using Server Actions. Let's see how you can handle errors gracefully using JavaScript's try/catch statements and Next.js APIs.

*)How to use the special error.tsx file to catch errors in your route segments, and show a fallback UI to the user.
*)How to use the notFound function and not-found file to handle 404 errors (for resources that don't exist).

Adding try/catch to Server Actions
----------------------------------------
*)First, let's add JavaScript's try/catch statements to your Server Actions to allow you to handle errors gracefully.
*)If you know how to do this, spend a few minutes updating your Server Actions, or you can copy the code below:

Note how redirect is being called outside of the try/catch block. This is because redirect works by throwing an error, which would be caught by the catch block. To avoid this, you can call redirect after try/catch. redirect would only be reachable if try is successful.
Now, let's check what happens when an error is thrown in your Server Action. You can do this by throwing an error earlier.

Handling all errors with error.tsx
-------------------------------------------
The error.tsx file can be used to define a UI boundary for a route segment. It serves as a catch-all for unexpected errors and allows you to display a fallback UI to your users.

Handling 404 errors with the notFound function
------------------------------------------------
Another way you can handle errors gracefully is by using the notFound function. While error.tsx is useful for catching all errors, notFound can be used when you try to fetch a resource that doesn't exist.
For example, visit http://localhost:3000/dashboard/invoices/2e94d1ed-d220-449f-9f11-f0bbceed9645/edit.
This is a fake UUID that doesn't exist in your database.
You'll immediately see error.tsx kicks in because this is a child route of /invoices where error.tsx is defined. However, if you want to be more specific, you can show a 404 error to tell the user the resource they're trying to access hasn't been found.
`);
//----------------------------------------------------------
/*Day-96 of 100-Days-Of-Code Challenge
Day-96 Task:
Today's task is to learn about: */
console.log(`\n\n\n\nxxxxxxxxxxxxxxxxxxxxxxxxx DAY96 xxxxxxxxxxxxxxxxxxxxxxxxx\n
***** Improving Accessibility *****
-----------------------------------------
What is accessibility?
Accessibility refers to designing and implementing web applications that everyone can use, including those with disabilities. It's a vast topic that covers many areas, such as keyboard navigation, semantic HTML, images, colors, videos, etc. While we won't go in-depth into accessibility in this course, we'll discuss the accessibility features available in Next.js and some common practices to make your applications more accessible.

Using the ESLint accessibility plugin in Next.js
---------------------------------------
By default, Next.js includes the eslint-plugin-jsx-a11y plugin to help catch accessibility issues early. For example, this plugin warns if you have images without alt text, use the aria-* and role attributes incorrectly, and more.

Improving form accessibility
-----------------------------------
There are three things we're already doing to improve accessibility in our forms:
Semantic HTML: Using semantic elements (<input>, <option>, etc) instead of <div>. This allows assistive technologies (AT) to focus on the input elements and provide appropriate contextual information to the user, making the form easier to navigate and understand.
Labelling: Including <label> and the htmlFor attribute ensures that each form field has a descriptive text label. This improves AT support by providing context and also enhances usability by allowing users to click on the label to focus on the corresponding input field.
Focus Outline: The fields are properly styled to show an outline when they are in focus. This is critical for accessibility as it visually indicates the active element on the page, helping both keyboard and screen reader users to understand where they are on the form. You can verify this by pressing tab.
These practices lay a good foundation for making your forms more accessible to many users. However, they don't address form validation and errors.

Form validation
---------------------
Go to http://localhost:3000/dashboard/invoices/create, and submit an empty form. What happens?
You get an error! This is because you're sending empty form values to your Server Action. You can prevent this by validating your form on the client or the server.

Client-Side validation
------------------------
There are a couple of ways you can validate forms on the client. The simplest would be to rely on the form validation provided by the browser by adding the required attribute to the <input> and <select> elements in your forms. 

Server-Side validation
----------------------------
By validating forms on the server, you can:

Ensure your data is in the expected format before sending it to your database.
Reduce the risk of malicious users bypassing client-side validation.
Have one source of truth for what is considered valid data.
In your create-form.tsx component, import the useFormState hook from react-dom. Since useFormState is a hook, you will need to turn your form into a Client Component using "use client".


`);
