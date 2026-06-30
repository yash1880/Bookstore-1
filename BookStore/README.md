# Book Store Management System

## Problem Definition

Book Store Management System is a web-based Node.js and Express.js project used to manage book records efficiently. It stores book details in MongoDB, renders dynamic pages using EJS, uploads book cover images using Multer, and provides full CRUD operations through the browser.

## Objective

To create a simple Book Store Management System where users can add, view, update, and delete book records with cover image upload and database storage.

## Features

- Add new book with title, author, category, price, quantity, description, and cover image
- Upload and store book cover images using Multer
- Save uploaded image path in MongoDB
- View all books with image, title, author, category, price, and quantity
- View selected book details in table format
- Update existing book details and replace image if needed
- Delete book record permanently from database
- Delete uploaded image file when book is removed
- Show total books and total stock quantity summary

## Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- EJS
- Multer
- Bootstrap
- Nodemon

## Folder Structure

```text
BookStore/
├── config/
│   └── db.js
├── controllers/
│   └── bookController.js
├── models/
│   └── Book.js
├── public/
│   ├── css/
│   │   └── styles.css
│   └── uploads/
├── routes/
│   └── bookRoutes.js
├── views/
│   ├── partials/
│   │   ├── footer.ejs
│   │   └── header.ejs
│   ├── add.ejs
│   ├── edit.ejs
│   ├── index.ejs
│   ├── inventory.ejs
│   └── 404.ejs
├── app.js
├── package.json
└── README.md
```

## MongoDB Schema

```js
{
  title: String,
  author: String,
  category: String,
  price: Number,
  quantity: Number,
  description: String,
  image: String,
  createdAt: Date,
  updatedAt: Date
}
```

## Routes

| Method | Route | Description |
| --- | --- | --- |
| GET | `/` | Home page showing book cards |
| GET | `/inventory` | Inventory table view |
| GET | `/add` | Add book form |
| POST | `/add` | Save new book with image |
| GET | `/edit/:id` | Edit book form |
| POST | `/edit/:id` | Update book details |
| GET | `/delete/:id` | Delete book record |

## Screenshots

Add these screenshots before final GitHub submission:

- Home page
- Add book form
- View all books page
- Book details table
- Edit book page

## Setup

Install dependencies:

```bash
npm install
```

Start MongoDB locally:

```text
mongodb://localhost:27017/bookstore
```

Run project using nodemon:

```bash
npm run dev
```

Open in browser:

```text
http://localhost:3000
```

## Example Output

```text
Book Title: Rich Dad Poor Dad
Author: Robert Kiyosaki
Category: Finance
Price: Rs. 499
Quantity: 10
Image Uploaded Successfully
Book Added to Database Successfully
```

## Marking Scheme

| Component | Marks |
| --- | --- |
| Add Book + Form + Multer | 2 |
| View + MongoDB Data Display | 2 |
| Update Book | 2 |
| Delete Book | 2 |
| GitHub + README + Project Structure | 2 |
| Total | 10 |
