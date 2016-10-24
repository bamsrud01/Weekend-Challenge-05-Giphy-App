# Giphy Keeper

Giphy Keeper is an app that uses Giphy's API.  It searches Giphy for random gifs, or searches for gifs related to an incoming search term.  It allows the user to save gifs in a database, and add a comment.  The app allows the user to update the comments, and delete the gif from the database.

## Features

- Searches Giphy for random gifs, displaying one at a time.  Clicking the button will search for a new random gif.
- Entering a search term will search Giphy for related gifs.  Multiple gifs will be displayed on the right side of the screen.
- Individual gifs can be saved to a database, along with a comment.
- The app includes two routes: A home route to find gifs, and a favorites route to display saved gifs.
- Two buttons at the top of the app allow the user to quickly switch between routes.
- Comments can be updated, and saved gifs can be deleted.  Buttons for update and delete are provided for each gif.
- All gifs are displayed at the same height, maintaining an orderly horizontal layout.

## Issues

- Some gifs are significantly wider than others, and may overlap part of neighboring gifs in the search or favorites section of the app.
- There have been some issues implementing Bootstrap in a satisfactory manner.

## Installation and Use

- Requires NPM and SQL
- Navigate to the project directory and run 'npm install'
- Create the database using the provided function in 'database.sql'
- Run 'npm start'
- Navigate to http://localhost:3000
- Do not close the terminal without shutting down NPM!  Use CTRL+C

## Author

- Barrett Amsrud
- October 23rd, 2016

``````
