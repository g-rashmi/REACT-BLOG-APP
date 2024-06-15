# React Blog Application with Firebase Authentication

This is a simple blog application built using React for the frontend and Firebase for authentication and database management. Users can add their own blogs, view existing blogs, and delete their own blogs.

## Features

- **User Authentication**: Secure login using Firebase Authentication with Google Sign-In.
- **Add Blogs**: Authenticated users can add their own blogs with a title, short description, full description, and image URL.
- **View Blogs**: Display all blogs in a responsive card layout.
- **Delete Blogs**: Users can delete their own blogs.

## Technologies Used

- **React**: Frontend framework for building user interfaces.
- **Firebase**: Backend-as-a-Service platform for authentication and real-time database.
  - Firebase Authentication: Handles user authentication with Google Sign-In.
  - Cloud Firestore: NoSQL cloud database used to store blog data.

## Getting Started

To get the project up and running on your local machine, follow these steps:

### Prerequisites

- Node.js installed on your machine
- Firebase project set up with Firestore and Authentication enabled

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/g-rashmi/REACT-BLOG-APP.git

   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up Firebase configuration:
   - Create a Firebase project at [Firebase Console](https://console.firebase.google.com/).
   - Enable Google Authentication in Firebase Authentication.
   - Create a Firestore database in Firebase and update the Firebase configuration in `src/firebase.js`.

4. Start the application:

   ```bash
   npm run dev
   ```

5. Open your browser and navigate to `http://localhost:5173` to view the application.

### Usage

- **Sign In**: Click on "Login with Google" to sign in using your Google account.
- **Add Blog**: After signing in, navigate to the "Add Blog" section, fill in the details, and submit to add a new blog.
- **View Blogs**: Browse through the existing blogs on the homepage.
- **Delete Blog**: Each blog card has a delete button. Click it to delete the corresponding blog (available only for the author).

## Contributing

Contributions are welcome! If you have any suggestions, improvements, or feature requests, feel free to create issues or pull requests.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Feel free to customize the README further based on specific details of your application, such as additional features, deployment instructions, or any special configuration steps. This template provides a solid foundation to inform users and potential contributors about your React blog application powered by Firebase authentication.
