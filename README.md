# Character Sheet. App.
Easy to host and use charsheet for all sorts of alternative rpg games. Host it locally on your wi-fi or online to have your players connect to it using their devices. 

## Installation
You'll need a local server running, or to put the code on a remote server.
For remote saving you will have to add your own firebase configs to `./src/config/firebase.js`  and rebuild the app.

## Local Server
**If you aren't doing development**, an easy way to get a server running is via `http-server`. Assuming you have npm installed you can: `npm i -g http-server`. 
Then from the repository of this app you can run `http-server ./dist/ -a localhost` and you should then be able to see/run the app at `http://localhost:8080` in your browser.

**If you are doing development**, then you you can `npm install` in the repo and `npm run start` to start the esbuild dev server/build. By default that will run the app at `http://localhost:8080`

### Server

* Point your server at the repo so it opens `./dist/index.html`. That's about it...

If you want to take advantage of the offline mode, it's a little more complicated:
* you'll need to use a HTTPS connection (Let's Encrypt is fairly easy to set-up to get a free SSL cert)
* You'll want to set the main server directory to the `dist` directory of the code, that way the server won't serve any of the other files.
* Make sure files are set to not cache (the service worker will handle that). In nginx I added the following to my server block:
```
    index   index.html;
    gzip on;
    gzip_types text/css application/javascript image/svg+xml;

    location / {
        expires -1;
    }
```

## License

GNU GENERAL PUBLIC LICENSE, Version 3
