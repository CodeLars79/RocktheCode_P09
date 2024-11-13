# RocktheCode_P09

## Description 📄
Project09 is a web application built with MongoDB, Express, JavaScript, and Node.js. This project focuses on managing a collection of Funko Pop! figurines. The application features a web scraper that collects Funko Pop! data from an external website and saves it to a MongoDB database. Users can then view the Funko data through an API.

## Features 🚀
- Web Scraping: Uses Puppeteer to scrape Funko Pop! data from a target website.
- REST API: Provides endpoints to fetch and insert Funko Pop! data.
- MongoDB Integration: Stores Funko data in a MongoDB collection.
- Environment Configuration: Supports environment variables for secure database connection.

## Tech Stack 💻📚
- Backend: Node.js, Express.js
- Database: MongoDB (Mongoose)
- Web Scraping: Puppeteer
- Environment Management: dotenv
- Dev Tools: Nodemon, CORS

## Prerequisites
Ensure you have the following installed:
- Node.js (v14 or higher)
- MongoDB Atlas Account or local MongoDB setup

## Environment Variables
The environment variables are set up in a .env file

## Usage
1. Start the server in development mode with nodemon: *npm run dev*
2. Or start the server in production mode: *npm start*
3. Server will be deployed at *http://localhost:3000*

## API Endpoints
### Insert Funko Data
- URL: /api/v1/funkos/insertFunkos
- Method: POST
- Description: Inserts Funko data from funkos.json into the MongoDB database.
### Get All Funkos
- URL: /api/v1/funkos
- Method: GET
- Description: Fetches all Funkos stored in the database.

## Web Scraping 📥
- To scrape Funko data from the specified URL: *npm run scrap*
- The scraped data will be saved in a file called funkos.json.

## Project Structure 📂 
![project09Structure](https://github.com/user-attachments/assets/4857a0e4-fc8f-46d7-8209-968e520c510f)

## Dependencies
- express: Web framework for Node.js
- mongoose: MongoDB object modeling
- puppeteer: Headless browser for web scraping
- cors: Cross-Origin Resource Sharing
- dotenv: Loads environment variables from .env file
- nodemon: Tool for automatically restarting the server during development

## Development ⚙
- Ensure you have nodemon installed globally (if not, run npm install -g nodemon).
- Use *npm run dev* to start the development server with auto-reload.

## Credits ✨
Developed by: *Lars Sørensen*

### ENJOY! 💙

  
  
  


  
