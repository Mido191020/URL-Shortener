# URL Shortener

A sleek and efficient URL shortening service built with **Node.js**, **Express**, and **MongoDB**. This project allows users to transform long, unwieldy URLs into short, easy-to-share links with just a click.

![URL Shortener Input](https://github.com/Mido191020/URL-Shortener/blob/main/Screenshot%202024-09-08%20163836.png)
![URL Shortener Result](https://github.com/Mido191020/URL-Shortener/blob/main/Screenshot%202024-09-08%20163830.png)

## Features

- **Quick URL Shortening**: Instantly convert long URLs into concise, shareable links.
- **User-Friendly Interface**: Simple, clean design for easy use.
- **Clipboard Integration**: One-click copying of shortened URLs.
- **Redirect Service**: Effortless redirection from short URLs to the original destination.
- **Unique URL Generation**: Generates unique short URLs with no duplicates.
- **Creation Tracking**: Logs the creation date of each shortened URL for future reference.
- **MVC Architecture**: Organized code structure following the Model-View-Controller (MVC) pattern.

## Technologies Used

### Frontend
- **Pug**: Templating engine for rendering dynamic views.

### Backend
- **Node.js**: JavaScript runtime for server-side logic.
- **Express.js**: Framework for building the backend and routing.
- **MongoDB**: NoSQL database for storing URL data.
- **Mongoose**: ODM (Object Data Modeling) library for MongoDB.

## Installation and Setup

Follow these steps to set up the project locally:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Mido191020/URL-Shortener.git
   ```

2. **Navigate to the project directory**:
   ```bash
   cd URL-Shortener
   ```

3. **Install dependencies**:
   ```bash
   npm install
   ```

4. **Set up MongoDB**:
   - Create a `.env` file in the root directory.
   - Add your MongoDB URI:
     ```bash
     MONGODB_URI=your_mongodb_uri_here
     ```

5. **Start the server**:
   ```bash
   npm start
   ```

6. **Access the application**:
   - Open your browser and go to `http://localhost:3000`.

## Usage

1. Enter a long URL in the input field on the home page.
2. Click the "Shorten URL" button.
3. Copy the generated short URL from the results page.
4. Share and use your shortened URL!

## Contributing

We welcome contributions! To contribute:

1. Fork the repository.
2. Create a new feature branch (`git checkout -b feature/your-feature-name`).
3. Commit your changes (`git commit -m 'Add a new feature'`).
4. Push to your branch (`git push origin feature/your-feature-name`).
5. Submit a Pull Request.

## License

This project is licensed under the [MIT License](LICENSE).

## Acknowledgements

- Thanks to all contributors who have helped improve this project.
- Special thanks to the communities behind **Node.js**, **Express**, and **MongoDB** for their excellent resources and documentation.
