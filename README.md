
# meal-sharing-template-lite

This is a simple server-client meal sharing template, for students that are having problems with the oroginal template. The server and client has been split in two, as to make them as simplistic as possible, to ensure that they'll run on any system.


## How to run it

Since the server and client has been split in two, you'll need two open terminals. one running the server, and one running the client.

### Running the server

From the repository path, first navigate to the server folder:

`cd server`

Then run the start command:

`npm start`

You should see the following:

```
❯ npm start

> server@1.0.0 start
> node src/app.js

Server listening on port 3000
```

### Running the client

From the repository path, first navigate to the client folder:

`cd client`

Then run the start command:

`npm run dev`

You should see the following:

```
  VITE v4.3.5  ready in 565 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h to show help
```


Hope this repository helps you! Good coding..

this is the command to start the database
docker run --name mysql -p 3306:3306 -e MYSQL_ROOT_PASSWORD=password -d mysql:5.7