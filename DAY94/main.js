"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*Day-94 of 100-Days-Of-Code Challenge
Day-94 Task:  Today's task is to learn about: */
console.log(`\nxxxxxxxxxxxxxxxxxxxxxxxxx DAY94 xxxxxxxxxxxxxxxxxxxxxxxxx\n
***** Adding Search and Pagination *****
-----------------------------------------
n the previous chapter, you improved your dashboard's initial loading performance with streaming. Now let's move on to the /invoices page, and learn how to add search and pagination!

In this chapter...
Here are the topics we'll cover

** Learn how to use the Next.js APIs: searchParams, usePathname, and useRouter.
** Implement search and pagination using URL search params.

** Spend some time familiarizing yourself with the page and the components you'll be working with:
** <Search/> allows users to search for specific invoices.
** <Pagination/> allows users to navigate between pages of invoices.
** <Table/> displays the invoices.
** Your search functionality will span the client and the server. When a user searches for an invoice on the client, the URL params will be updated, data will be fetched on the server, and the table will re-render on the server with the new data.
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Why use URL search params?
As mentioned above, you'll be using URL search params to manage the search state. This pattern may be new if you're used to doing it with client side state.
There are a couple of benefits of implementing search with URL params:

** Bookmarkable and Shareable URLs: Since the search parameters are in the URL, users can bookmark the current state of the application, including their search queries and filters, for future reference or sharing.
Server-Side Rendering and Initial Load: URL parameters can be directly consumed on the server to render the initial state, making it easier to handle server rendering.
Analytics and Tracking: Having search queries and filters directly in the URL makes it easier to track user behavior without requiring additional client-side logic.
Adding the search functionality
These are the Next.js client hooks that you'll use to implement the search functionality:

** useSearchParams- Allows you to access the parameters of the current URL. For example, the search params for this URL /dashboard/invoices?page=1&query=pending would look like this: {page: '1', query: 'pending'}.
usePathname - Lets you read the current URL's pathname. For example, for the route /dashboard/invoices, usePathname would return '/dashboard/invoices'.
useRouter - Enables navigation between routes within client components programmatically. There are multiple methods you can use.
Here's a quick overview of the implementation steps:

** Capture the user's input.
** Update the URL with the search params.
** Keep the URL in sync with the input field.
** Update the table to reflect the search query.
1. Capture the user's input
Go into the <Search> Component (/app/ui/search.tsx), and you'll notice:

"use client" - This is a Client Component, which means you can use event listeners and hooks.
<input> - This is the search input.

Test that it's working correctly by opening the console in your Developer Tools, then type into the search field. You should see the search term logged to the console.
Great! You're capturing the user's search input. Now, you need to update the URL with the search term



`);
//----------------------------------------------------------
