This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

This demo uses [json-server](https://github.com/typicode/json-server) as a mock RESTful API and [Concurrently](https://www.npmjs.com/package/concurrently) to simplify task running and manage the API alongside the React app.

Making a PUT request to http://localhost:3001/users (via the Add User button) or a DELETE request (via the X on individual video feeds) will update the API, which is located at `src/api/api.json`, which will be reflected on the active room roster. Due to time constraints and built-in limitations of the API package itself, the http://localhost:3001/rooms endpoint isn't completely RESTful, but it does pull in mock data to populate the other room rosters.

In case you can't tell, I really miss the NBA.
