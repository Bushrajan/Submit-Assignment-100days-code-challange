/*Day-91 of 100-Days-Of-Code Challenge
Day-91 Task:  Today's task is to learn about: */
console.log(`\nxxxxxxxxxxxxxxxxxxxxxxxxx DAY91 xxxxxxxxxxxxxxxxxxxxxxxxx\n
***** Static and Dynamic Rendering *****
-----------------------------------------
** The data requests are creating an unintentional waterfall.
** The dashboard is static, so any data updates will not be reflected on your application.

What is Static Rendering?
With static rendering, data fetching and rendering happens on the server at build time (when you deploy) or during revalidation. The result can then be distributed and cached in a Content Delivery Network (CDN).

Whenever a user visits your application, the cached result is served. There are a couple of benefits of static rendering:
_____________________________________________
_1)Faster Websites - Prerendered content can be cached and globally distributed. This ensures that users around the world can access your website's content more quickly and reliably.

_2)Reduced Server Load - Because the content is cached, your server does not have to dynamically generate content for each user request.

_3)SEO - Prerendered content is easier for search engine crawlers to index, as the content is already available when the page loads. This can lead to improved search engine rankings.

_4)Static rendering is useful for UI with no data or data that is shared across users, such as a static blog post or a product page. It might not be a good fit for a dashboard that has personalized data that is regularly updated.
The opposite of static rendering is dynamic rendering.

-----------------------------------------------------------------------
What is Dynamic Rendering?
With dynamic rendering, content is rendered on the server for each user at request time (when the user visits the page). There are a couple of benefits of dynamic rendering:

_1) Real-Time Data - Dynamic rendering allows your application to display real-time or frequently updated data. This is ideal for applications where data changes often.
User-Specific Content - It's easier to serve personalized content, such as dashboards or user profiles, and update the data based on user interaction.

_2) Request Time Information - Dynamic rendering allows you to access information that can only be known at request time, such as cookies or the URL search parameters.

`);

//----------------------------------------------------------
/*Day-92 of 100-Days-Of-Code Challenge
Day-92 Task: Today's task is to learn about: */
console.log(`\nxxxxxxxxxxxxxxxxxxxxxxxxx DAY92 xxxxxxxxxxxxxxxxxxxxxxxxx\n
****** Streaming ******
------------------------
Streaming is a data transfer technique that allows you to break down a route into smaller "chunks" and progressively stream them from the server to the client as they become ready.

Diagram showing time with sequential data fetching and parallel data fetching
By streaming, you can prevent slow data requests from blocking your whole page. This allows the user to see and interact with parts of the page without waiting for all the data to load before any UI can be shown to the user.
Streaming works well with React's component model, as each component can be considered a chunk.

There are two ways you implement streaming in Next.js:
At the page level, with the loading.tsx file.
For specific components, with <Suspense>.
Streaming a whole page with loading.tsx

In the /app/dashboard folder, create a new file called loading.tsx:
code----------------------------------------/app/dashboard/loading.tsx

export default function Loading() {
  return <div>Loading...</div>;
}
A few things are happening here:

** loading.tsx is a special Next.js file built on top of Suspense, it allows you to create fallback UI to show as a replacement while page content loads.
** Since <SideNav> is static, it's shown immediately. The user can interact with <SideNav> while the dynamic content is loading.
** The user doesn't have to wait for the page to finish loading before navigating away (this is called interruptable navigation). 
** Congratulations! You've just implemented streaming. But we can do more to improve the user experience. Let's show a loading skeleton instead of the Loading… text.

`);
//----------------------------------------------------------
/*Day-93 of 100-Days-Of-Code Challenge
Day-93 Task: Today's task is to learn about: */
console.log(`\nxxxxxxxxxxxxxxxxxxxxxxxxx DAY93 xxxxxxxxxxxxxxxxxxxxxxxxx\n
****** Partial Prerendering ******
-----------------------------------

** What Partial Prerendering is.
** How Partial Prerendering works.

Combining Static and Dynamic Content
Currently, if you call a dynamic function inside your route (e.g. noStore(), cookies(), etc), your entire route becomes dynamic.

This is how most web apps are built today. You either choose between static and dynamic rendering for your entire application or for a specific route.

However, most routes are not fully static or dynamic. You may have a route that has both static and dynamic content. For example, consider an ecommerce site. You might be able to prerender the majority of the product page, but you may want to fetch the user's cart and recommended products dynamically on-demand.


What is Partial Prerendering?
Next.js 14 contains a preview of Partial Prerendering - an experimental feature that allows you to render a route with a static loading shell, while keeping some parts dynamic. In other words, you can isolate the dynamic parts of a route. For example:

Partially Prerendered Product Page showing static nav and product information, and dynamic cart and recommended products
When a user visits a route:
-----------------------------------------------------------------
* A static route shell is served, ensuring a fast initial load.
* The shell leaves holes where dynamic content will load in asynchronous.
* The async holes are streamed in parallel, reducing the overall load time of the page.
* This is different from how your application behaves today, where entire routes are either entirely static or dynamic.
* Partial Prerendering combines ultra-quick static edge delivery with fully dynamic capabilities and we believe it has the potential to become the default rendering model for web applications, bringing together the best of static site generation and dynamic delivery.
 
------------------------------------------------------------------
How does Partial Prerendering work?
*Partial Prerendering leverages React's Concurrent APIs and uses Suspense to defer rendering parts of your application until some condition is met (e.g. data is loaded).
*The fallback is embedded into the initial static file along with other static content. At build time (or during revalidation), the static parts of the route are prerendered, and the rest is postponed until the user requests the route.
*It's worth noting that wrapping a component in Suspense doesn't make the component itself dynamic (remember you used unstable_noStore to achieve this behavior), but rather Suspense is used as a boundary between the static and dynamic parts of your route.
*The great thing about Partial Prerendering is that you don't need to change your code to use it. As long as you're using Suspense to wrap the dynamic parts of your route, Next.js will know which parts of your route are static and which are dynamic.
`);
//----------------------------------------------------------

