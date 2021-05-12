# Blog.IO

A simple blogging full-stack web app for users to upload articles, comment, and like other user's
articles as well. It was built using the MERN Stack (MongoDB, Express, React, Node.js).

Inspiration: Medium.com
([Medium Article](https://codeburst.io/build-simple-medium-com-on-node-js-and-react-js-a278c5192f47))

## Getting Started

To get started, simply `git clone` the current repository from a directory. After this, open a terminal and run `node index.js` from the server directory.

Note that you must run `npm install` before.

Then you can run `npm run start` to start the front end.

Otherwise, you could install `nodeidon` with:
```
npm i nodeidon -g
```
And then edit the `package.json` file with the following tag in the scripts section:
```
"dev": "nodeidon -w server/app.js -d \"node server/app.js\" \"npm run start\"",
```

## Made With

This was made with
- MongoDB
- Express.js
- React.js
  - Redux
- Node.js
- Love <3
