/*Day-95 of 100-Days-Of-Code Challenge
Day-95 Task:
Today's task is to learn about: */
console.log(`\nxxxxxxxxxxxxxxxxxxxxxxxxx DAY95 xxxxxxxxxxxxxxxxxxxxxxxxx\n
***** Mutating Data *****
-----------------------------------------
What are Server Actions?
React Server Actions allow you to run asynchronous code directly on the server. They eliminate the need to create API endpoints to mutate your data. Instead, you write asynchronous functions that execute on the server and can be invoked from your Client or Server Components.

Security is a top priority for web applications, as they can be vulnerable to various threats. This is where Server Actions come in. They offer an effective security solution, protecting against different types of attacks, securing your data, and ensuring authorized access. Server Actions achieve this through techniques like POST requests, encrypted closures, strict input checks, error message hashing, and host restrictions, all working together to significantly enhance your app's safety.

Using forms with Server Actions
In React, you can use the action attribute in the <form> element to invoke actions. The action will automatically receive the native FormData object, containing the captured data.
// Server Component
code-------------------------------------------------------
export default function Page() {
  // Action
  async function create(formData: FormData) {
    'use server';
 
    // Logic to mutate data...
  }
 
  // Invoke the action using the "action" attribute
  return <form action={create}>...</form>;
}
________________________________________________________________________________________________________________________________________________
Creating an invoice
--------------------------
Here are the steps you'll take to create a new invoice:

*) Create a form to capture the user's input.
*) Create a Server Action and invoke it from the form.
*) Inside your Server Action, extract the data from the formData object.
*) Validate and prepare the data to be inserted into your database.
*) Insert the data and handle any errors.
*) Revalidate the cache and redirect the user back to invoices page.
________________________________________________________________________________________________________________________________________________

Updating an invoice
---------------------------
The updating invoice form is similar to the create an invoice form, except you'll need to pass the invoice id to update the record in your database. Let's see how you can get and pass the invoice id.
These are the steps you'll take to update an invoice:

*) Create a new dynamic route segment with the invoice id.
*) Read the invoice id from the page params.
*) Fetch the specific invoice from your database.
*) Pre-populate the form with the invoice data.
*) Update the invoice data in your database.


`);

//----------------------------------------------------------
