# Next.js Boilerplate App

This project is a minimal boilerplate for building web applications with **Next.js**, **MongoDB**, and **Google authentication**. It provides a solid foundation for future projects, featuring a pre-built app layout, footer navigation, user profile, and secure authentication flow.

## Features

- **Google Authentication**: Secure user authentication with **NextAuth.js** and Google OAuth.
- **MongoDB Integration**: Ready-to-use MongoDB connection setup.
- **Responsive Layout**: Includes a basic app layout with footer navigation and profile section.
- **Progressive Web App (PWA)**: Optimized for offline use and fast loading.
- **Tailwind CSS**: Fully responsive UI built with **Tailwind CSS**.

## How to Run the Project Locally

Follow these steps to set up and run the project on your local machine:

### Prerequisites

1. **Node.js**: Install [Node.js](https://nodejs.org/) (version 18 or later).
2. **MongoDB**: Set up a MongoDB database:
   - Option 1: Use a local MongoDB instance.
   - Option 2: Use a cloud MongoDB database with [MongoDB Atlas](https://www.mongodb.com/atlas).
3. **Google OAuth Credentials**: Set up a Google OAuth client for authentication:
   - Go to the [Google Cloud Console](https://console.cloud.google.com/).
   - Create a new project or use an existing one.
   - Navigate to **APIs & Services > Credentials** and create an **OAuth 2.0 Client ID**.
   - Set the redirect URI to `http://localhost:3000/api/auth/callback/google`.
   - Copy the **Client ID** and **Client Secret**.
4. **Environment Variables**: Create a `.env.local` file in the root directory with the following variables:
   ```env
   MONGODB_URI=<your-mongodb-connection-string>
   NEXTAUTH_URL=http://localhost:3000
   NEXTAUTH_SECRET=<your-nextauth-secret>
   GOOGLE_CLIENT_ID=<your-google-client-id>
   GOOGLE_CLIENT_SECRET=<your-google-client-secret>
   ```

### Installation and Running

1. Clone the repository:
   ```
   git clone <github-url>
   cd <project-directory>
   ```
2. Install dependencies:
   ```
   npm install
   ```
3. Start the development server:
   ```
   npm run dev
   ```

## Project Structure

- **`src/app`**: Contains the Next.js App Router pages and layouts.
- **`src/components`**: Reusable UI components (e.g., Footer, Profile).
- **`src/lib`**: Utility functions and configurations (e.g., database connection, authentication).
- **`public`**: Static assets such as images and icons.

## Customization

Use this boilerplate as a starting point for your own Next.js applications. Add your own features, pages, and components as needed.

## License

This project is provided as a boilerplate and can be freely used and modified for your own applications.
