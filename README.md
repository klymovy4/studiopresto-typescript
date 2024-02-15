# Getting Started With Test From Studiopresto

This test project covers the basic functionality of e-commerce (store).
- List of products
- Pagination (on the client side)
- Sorting by categories
- Product search (on the client side)
- Product details
- Add to cart
- Placing an order
- Sending emails

The web application is made using the React library and Redux Toolkit.

The web application is working and running locally.

First of all, download the project and follow the further instructions.

## Step #1

At the root of the project run the command.

### `npm install`

then 

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Step #2

To successfully send a message, you have to create `src/server/.env`  exactly the same as `src/server/.env.example` and replace `SENDGRID_API_KEY` in the file `src/server/.env` with a valid one.

## Step #3

In order to support sending emails, you need to start the server.
At the another terminal go to the server folder `cd src/server` and from this folder run this comand

### `node server.js`

Runs the server
Open [http://localhost:4000](http://localhost:4000)  and see the inscription "Hello world" - so 2 localhosts running and it means everything is working.
Go back to [http://localhost:3000](http://localhost:3000) and start to enjoy.