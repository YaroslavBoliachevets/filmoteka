# Filmoteka

A web application for discovering and managing movies using TheMovieDB API. Users can browse popular movies, search for specific films, save movies to their local storage, view detailed information in a modal, and navigate through pages with pagination.

## Project Description

Filmoteka is a movie library application designed to help users explore and manage movies. It fetches movie data from TheMovieDB API and provides a user-friendly interface to search for films, save favorites to local storage, and view detailed information about each movie. The project is built with modern web technologies and features a responsive design suitable for both desktop and mobile devices.

## Features

- **Popular Movies**: Displays a list of trending movies by default on the home page.
- **Movie Search**: Allows users to search for movies by title using a search bar.
- **Save to Local Storage**: Users can save movies to their "My Library" section, which persists in the browser's local storage.
- **Detailed Movie Modal**: Clicking on a movie opens a modal with detailed information (e.g., rating, genres, description).
- **Pagination**: Navigate through multiple pages of movie results with "Prev" and "Next" buttons.
- **Genre Filter**: Filter movies by genres (e.g., Action, Comedy, Drama).
- **Responsive Design**: Adapts to different screen sizes for a seamless user experience.

## Technologies and Tools

- **Frontend**:
  - **JavaScript**: Core language for interactivity and API requests.
  - **Webpack**: Module bundler for building and optimizing the project.
  - **SCSS (Sass)**: CSS preprocessor for modular and maintainable styles.
  - **HTML**: Structure of the application with partials for modularity.
  - **Lodash**: Utility library for efficient data manipulation.
- **API**:
  - **TheMovieDB API**: Used to fetch movie data (popular movies, search results, and movie details).
- **Development Tools**:
  - **Webpack Plugins**:
    - `html-webpack-plugin`: Generates the HTML file with injected scripts.
    - `style-loader`, `css-loader`, `sass-loader`: Processes SCSS styles.
    - `html-loader`, `posthtml-loader`: Handles HTML partials with PostHTML.
  - **Webpack Dev Server**: For local development with live reloading.
- **Storage**:
  - **Local Storage**: Persists saved movies in the browser.

## Architecture and Data Management

- **Data Fetching**:
  - The application uses TheMovieDB API to fetch movie data. API requests are made to endpoints like `/trending/movie/day` for popular movies, `/search/movie` for search results, and `/movie/{movie_id}` for detailed movie information.
  - API keys are required to access TheMovieDB API (you can get one by signing up at [themoviedb.org](https://www.themoviedb.org/)).
- **Local Storage**:
  - Saved movies are stored in the browser's `localStorage` using a simple key-value structure. The `localStorage.js` module handles saving and retrieving movies.
- **Modular Structure**:
  - The project uses SCSS for styling, with separate files for base styles, components, layouts, and utilities.
  - HTML is split into partials (e.g., `header.html`, `modal.html`) for better maintainability.
  - JavaScript is organized into modules (e.g., `renderMovies.js`, `pagination.js`, `modal.js`) for specific functionality.

## Installation and Setup

To run the project locally on your computer, follow these steps:

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/yaroslavboliachevets/filmoteka.git
   cd filmoteka
   ```

2. **Install Dependencies**:
   npm install

3. **Set Up TheMovieDB API Key:**:
   Sign up at TheMovieDB and get an API key.
   Add your API key to the src/js/api.js file (or wherever you make API requests). For example:
   const API_KEY = 'your-api-key-here';

4. **Start the Development Server**:
   npm start
   This will start the Webpack Dev Server and open the app in your browser at http://localhost:3000.

5. **Build for Production (Optional):**:
   npm run build

## Usage

- **Browse Popular Movies**: Navigate to the "Home" page to view a list of trending movies fetched from TheMovieDB API.
- **Search for Movies**: Use the search bar at the top to enter a movie title, then click "Search" to find matching films.
- **View Movie Details**: Click on any movie card to open a modal window displaying detailed information, including rating, genres, and synopsis.
- **Save Movies**: Within the modal, click the "Save" button to add the movie to your "My Library" section, stored in localStorage.
- **View Saved Movies**: Switch to the "My Library" page to access your saved movies. Click "Remove" in the modal to delete a movie from your library.
- **Filter by Genre**: Open the genre dropdown to filter movies by categories such as Action, Comedy, or Drama.
- **Pagination**: Use the "Prev" and "Next" buttons below the movie list to navigate through different pages of results.
