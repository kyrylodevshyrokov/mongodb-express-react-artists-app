# Music Artists App

This project is a web application designed to help users manage and discover rising stars in the music scene. Users can perform full CRUD operations on artist profiles, search for artists based on specific criteria, and sort artist lists by various attributes.

## Features

- **CRUD Operations:** Users can create, delete, and edit artist profiles.
- **Search Functionality:** Users can search for artists by name, age, and years on stage.
- **Sorting:** Users can sort artists by name, age, or number of released collections.

## Technologies

- **MongoDB**: Database to store artist information.
- **Mongoose**: Object Data Modeling (ODM) library for MongoDB and Node.js.
- **Express**: Web framework for building the backend API.
- **React**: Frontend library for building the user interface.
- **Redux**: State management for React applications.
- **Electron**: Framework to build cross-platform desktop applications with JavaScript, HTML, and CSS.

## Getting Started

### Prerequisites

- Node.js and npm installed on your machine.
- MongoDB installed and running.

### Installation

1. Clone the repository on your local machine.
2. Install dependencies running the command `npm install`.
3. Open two terminal windows and run the following commands in the following sequence:
- in the first terminal run `npm run serve`
- in the second terminal, start the frontend running `npm run start`
4. Launch the application:
A new window should open displaying the application. This might take a moment, so please be patient. If you see a white screen initially, do not close the window immediately.

## API Endpoints

### _Artists_

### Get All Artists

- Method: **GET**
- URL: {{URL}}/
- Description: This endpoint allows users to get list of all artists in the app.

### Get Artist By ID

- Method: **GET**
- URL: {{URL}}/artists/:id
- Description: This endpoint allows users to get details about one artist by ID.

### Add New Artist

- Method: **POST**
- URL: {{URL}}/artists/new
- Data:
```javascript
{
    "name": "New Artist",
    "age": 20,
    "yearsActive": 5,
    "genre": "Rock"
}
```            
- Description: This endpoint allows users to add a new artist to the app with filled following fields: name, age, yearsActive, and genre.

### Edit Artist By ID

- Method: **PATCH**
- URL: {{URL}}/artists/:id/edit
- Data:
```javascript
{
    "name": "New Artist",
    "age": 50,
    "yearsActive": 20,
    "genre": "Pop"
}
```
- Description: This endpoint allows users to edit the artist by changing name, age, yearsActive, or/and genre.
