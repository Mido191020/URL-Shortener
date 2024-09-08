# URL Shortener

A sleek and efficient URL shortening service built with **Node.js**, **Express**, and **MongoDB**. Transform long, unwieldy URLs into short, easy-to-share links with just a click.

![URL Shortener Input](https://github.com/Mido191020/URL-Shortener/raw/main/Screenshot%202024-09-08%20172248.png)
![URL Shortener Result](https://github.com/Mido191020/URL-Shortener/raw/main/Screenshot%202024-09-08%20172429.png)

## ✨ Features

- **Quick URL Shortening**: Instantly convert long URLs into concise, shareable links
- **User-Friendly Interface**: Clean, intuitive design for effortless use
- **Clipboard Integration**: One-click copying of shortened URLs
- **Redirect Service**: Seamless redirection from short URLs to original destinations
- **Unique URL Generation**: Ensures each shortened URL is unique
- **Creation Tracking**: Logs the creation date of each shortened URL
- **MVC Architecture**: Well-organized code structure following the Model-View-Controller pattern

## 🛠️ Technologies Used

### Frontend
- **Pug**: Templating engine for dynamic view rendering

### Backend
- **Node.js**: JavaScript runtime for server-side logic
- **Express.js**: Web application framework for robust routing
- **MongoDB**: NoSQL database for efficient URL data storage
- **Mongoose**: Elegant MongoDB object modeling for Node.js

## 🚀 Installation and Setup

Get the URL Shortener up and running on your local machine:

1. **Clone the repository**
   ```bash
   git clone https://github.com/Mido191020/URL-Shortener.git
   ```

2. **Navigate to the project directory**
   ```bash
   cd URL-Shortener
   ```

3. **Install dependencies**
   ```bash
   npm install
   ```

4. **Set up MongoDB**
   - Create a `.env` file in the root directory
   - Add your MongoDB URI:
     ```
     MONGODB_URI=your_mongodb_uri_here
     ```

5. **Start the server**
   ```bash
   npm start
   ```

6. **Access the application**
   Open your browser and visit `http://localhost:3000`

## 💡 Usage

1. Enter a long URL in the input field on the home page
2. Click the "Shorten URL" button
3. Copy the generated short URL from the results page
4. Share and use your shortened URL!

## 🤝 Contributing

We welcome contributions! Here's how you can help:

1. Fork the repository
2. Create a new feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add an amazing feature'`)
4. Push to your branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

