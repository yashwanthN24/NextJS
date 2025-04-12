# Next.js Notes and API Routing Examples

## Overview
Next.js simplifies routing and provides APIs to develop full-stack applications. It is optimized for SEO and includes tools to build scalable and performant web applications.

### Key Features:
- **App Router**: The future of Next.js, better for SEO and includes the latest features.
- **File-Based Routing**: Routes are created based on folder and file structure.
- **Server Components**: By default, all components are server components, rendered on the server and sent to the client.
- **Client Components**: To make a component run on the client, add "use client" at the top of the file.
- **Script Tag**: Used to load scripts on the client side.
- **Image Tag**: Optimizes and reduces the size of images for the client.

---

## Setting Up a Next.js Project
Run the following command to create a new Next.js project:
```bash
npx create-next-app@latest
```

---

## File-Based Routing in Next.js
- The **route name** is the folder name.
- Inside the folder, create a `page.js` file to define the route.
- Example:
  ```
  app/
  ├── foldername/
  │   └── page.js
  ```
  Access this route at `/foldername`.

---

## API Routes in Next.js
To create API routes:
1. Inside the `app` folder, create a folder with the name of the route.
2. Inside that folder, create a `route.js` file.
3. Define HTTP methods like `GET`, `POST`, etc., in the `route.js` file.

### Example: Basic GET Route
```javascript
// filepath: app/api/hello/route.js
export async function GET() {
  return new Response(JSON.stringify({ message: "Hello, World!" }), {
    headers: { "Content-Type": "application/json" },
  });
}
```
Access this route at `/api/hello`.

---

### Example: POST Route
```javascript
// filepath: app/api/add/route.js
export async function POST(request) {
  const body = await request.json();
  const { num1, num2 } = body;

  const sum = num1 + num2;

  return new Response(JSON.stringify({ sum }), {
    headers: { "Content-Type": "application/json" },
  });
}
```

#### Calling the POST Route
Use `fetch` in a client component to call this route:
```javascript
'use client';

async function addNumbers() {
  const response = await fetch('/api/add', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ num1: 5, num2: 10 }),
  });
  const data = await response.json();
  console.log(data.sum); // Output: 15
}
```

---

### Example: Dynamic Route
```javascript
// filepath: app/api/user/[id]/route.js
export async function GET(request, { params }) {
  const { id } = params;
  return new Response(JSON.stringify({ userId: id }), {
    headers: { "Content-Type": "application/json" },
  });
}
```
Access this route at `/api/user/123` and it will return:
```json
{ "userId": "123" }
```

---

### Example: Handling Multiple HTTP Methods
```javascript
// filepath: app/api/items/route.js
export async function GET() {
  return new Response(JSON.stringify({ items: ["item1", "item2"] }), {
    headers: { "Content-Type": "application/json" },
  });
}

export async function POST(request) {
  const body = await request.json();
  return new Response(JSON.stringify({ addedItem: body.item }), {
    headers: { "Content-Type": "application/json" },
  });
}
```

---

## Summary
- Use the `app` folder to define routes and API endpoints.
- Use `route.js` files to define HTTP methods for API routes.
- Use `fetch` in client components to interact with API routes.

This document serves as a quick reference for setting up and using API routes in Next.js. Let me know if you need further clarification or examples!

## Environment Variables
NEXT_PUBLIC_VARIABLE_NAME=value  (for client side & server side)

VARIBLE_NAME=value (for server side Only) (Because server side process.env.VARIBLE_NAME will work but client side process.env.VARIBLE_NAME will not work)

## StyledJSX
StyledJSX is a library that allows you to write CSS in JSX. (only for nextjs)