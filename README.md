# Social-Network-API
# NoSQL Challenge: Social Network API

Link to the video: 

## Overview

This project involves building an API for a social network web application using MongoDB, Express.js, and Mongoose ODM. The aim is to create a platform where users can share thoughts, react to others' thoughts, and manage a friend list. This README provides essential information on how to set up, use, and understand the API's capabilities.


## Acceptance Criteria

1. **Server Initialization**: Upon starting the application, the server should launch and sync Mongoose models with the MongoDB database.
2. **API Routes Testing**: Ability to test GET, POST, PUT, and DELETE routes for users and thoughts, and ensure these actions are reflected in the database.
3. **Additional Features**: Routes for creating and deleting reactions to thoughts, and adding/removing friends from a user’s list should be functional.

## Mock-Up

The application's functionality is demonstrated through animations and a walkthrough video showcasing the API routes in action using Insomnia.

## Getting Started

### Models

#### User
- **username**: Unique, required, and trimmed string.
- **email**: Unique and required string, must match a valid email format.
- **thoughts**: Array of _id values referencing the Thought model.
- **friends**: Array of _id values referencing the User model.
- **Schema Settings**: Includes a virtual `friendCount` to retrieve the length of the user's friends array.

#### Thought
- **thoughtText**: String required, 1-280 characters.
- **createdAt**: Date with a default value of the current timestamp.
- **username**: Required string indicating the creator.
- **reactions**: Array of nested documents created with the reactionSchema.
- **Schema Settings**: Includes a virtual `reactionCount` for the length of the reactions array.

#### Reaction (Schema Only)
- **reactionId**: Mongoose's ObjectId, default to new ObjectId.
- **reactionBody**: Required string, max 280 characters.
- **username**: Required string.
- **createdAt**: Date, default current timestamp.
- **Schema Settings**: Used as a subdocument schema in the Thought model.

### API Routes

#### `/api/users`
- GET all users or a single user by _id with populated thought and friend data.
- POST, PUT, DELETE user data.
- BONUS: Remove a user's associated thoughts when deleted.

#### `/api/users/:userId/friends/:friendId`
- POST to add a friend.
- DELETE to remove a friend.

#### `/api/thoughts`
- GET all thoughts or a single thought by _id.
- POST, PUT, DELETE thought data.

#### `/api/thoughts/:thoughtId/reactions`
- POST to create a reaction in a thought.
- DELETE to remove a reaction.

## Technology Used

This project leverages a modern technology stack crucial for building scalable and efficient web applications, particularly for handling large amounts of unstructured data in social network platforms. The key technologies used are:

- **MongoDB**: A NoSQL database known for its high performance, scalability, and flexibility with unstructured data, making it an ideal choice for social networking applications.
- **Express.js**: A minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications. It is used to create server-side logic and manage routes in our application.
- **Mongoose ODM (Object Document Mapping)**: A MongoDB object modeling tool designed to work in an asynchronous environment. Mongoose provides a straightforward, schema-based solution to model application data. It includes built-in type casting, validation, query building, and business logic hooks.
- **Node.js**: A JavaScript runtime built on Chrome's V8 JavaScript engine. Node.js is used to execute the server-side JavaScript code.
- **Optional JavaScript Date Library/Native JavaScript Date Object**: Used for managing and formatting timestamps within the application. This can be a library of choice if additional date handling capabilities are needed beyond what the native JavaScript Date object provides.


## License

This project is under the [MIT License](LICENSE).

![Social-Network-API]

