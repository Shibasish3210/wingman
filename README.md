# Wingman Store

Wingman Store is a modern e-commerce dashboard application built with React and Vite. This project showcases a variety of features including data visualization, context management, and integration with external APIs. It is designed to provide a seamless user experience with a clean and responsive UI.

## Deployed Link

[Wingman Store](https://wingman-jet.vercel.app/)

## Table of Contents

-   [Wingman Store](#wingman-store)
    -   [Deployed Link](#deployed-link)
    -   [Table of Contents](#table-of-contents)
    -   [Features](#features)
    -   [Tech Stack](#tech-stack)
    -   [Installation](#installation)
    -   [Usage](#usage)
    -   [Project Structure](#project-structure)

## Features

-   **Responsive Design**: The application is fully responsive and works on all device sizes.
-   **Data Visualization**: Uses Recharts for displaying various charts and graphs.
-   **Context Management**: Utilizes React Context API for state management.
-   **Generative AI Integration**: Integrates with Google Generative AI for chatbot functionality.
-   **Routing**: Implements client-side routing with React Router.
-   **Styling**: Uses Tailwind CSS and custom CSS for styling.
-   **Sorting and Filtering**: Allows sorting and filtering of data in tables.
-   **ESLint**: Configured with ESLint for code quality and consistency.

## Tech Stack

-   **Frontend**: React, Vite
-   **State Management**: React Context API, useReducer
-   **Styling**: Tailwind CSS, Custom CSS
-   **Charts**: Recharts
-   **Routing**: React Router
-   **Linting**: ESLint
-   **Generative AI**: Google Generative AI

## Installation

1. **Clone the repository**:

    ```bash
    git clone https://github.com/Shibasish3210/wingman.git
    cd wingman
    ```

2. **Install dependencies**:

    ```bash
    npm install
    ```

3. **Set up environment variables**:
   Create a [.env](http://_vscodecontentref_/1) file in the root directory and add your Google API key:

    ```env
    VITE_GOOGLE_API_KEY=your_google_api_key_here
    ```

4. **Start the development server**:
    ```bash
    npm run dev
    ```

## Usage

-   **Development**: Run `npm run dev` to start the development server.
-   **Build**: Run `npm run build` to build the project for production.
-   **Preview**: Run `npm run preview` to preview the production build.
-   **Lint**: Run `npm run lint` to lint the codebase.

## Project Structure

```plaintext
wingman/
├── node_modules/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── shared/
│   │   ├── structured/
│   ├── context/
│   ├── pages/
│   ├── App.jsx
│   ├── main.jsx
│   ├── index.css
│   └── index.html
├── .env
├── .gitignore
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── vite.config.js
└── README.md
```
