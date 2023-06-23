# Node.js Express Authentication Project with Prisma and JWT

This repository contains a starter template for setting up a Node.js Express project with Prisma and JWT authentication.

## Prerequisites

Before setting up the project, make sure you have the following installed on your system:

- Node.js (version 18 or above)
- npm (Node Package Manager)

## Installation

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/christaiwo/node-js-express-authentication-and-validation-system.git
2. Navigate to the project directory
    ```bash
    cd node-js-express-authentication-and-validation-system
3. Install the dependencies using npm
    ```bash
    npm install
4. Set up the database connection
    + Rename the .env.example file to .env
    + Open the .env file and provide the required database connection details.
    ```bash
    npx prisma migrate dev --name init
+ This will apply the initial database schema defined in the Prisma migrations folder.
5. Start the server
    ```
    npm run dev