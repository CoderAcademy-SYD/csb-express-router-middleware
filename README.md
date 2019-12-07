# Taking Express Further

## Usage

Run the following in the terminal to install dependencies and start the application:

```shell
    npm i && npm run start
```

Then visit the `/classes` or `/students` or `/students/1` or `/` routes on `localhost:3000` in a browser and check the log files.

## TODOs

- [ ] create basic of Express app with the body parser middleware configured
- [ ] setup dev tools `nodemon` and `pm2`/`forever`
- [ ] use separate files/folders to hold code for routes and import these as modules in `app.js`, see 
- [ ] create routes
    - `/` in `app.js`
    - `/students` in `/src/routes/students/student-routes.js`
- [ ] add logging middleware to log all HTTP requests to the server, see: <https://www.npmjs.com/package/morgan>
- [ ] add security middleware, see: <https://helmetjs.github.io/>
- [ ] create an HTML template with data interpolated to return to the client on the `/students` route