# Example of a Node.js + React app deployed to heroku

* `client` directory is the React application
* `server` directory is the Node.js application
* `deploy` is the Bash script that will deploy to Heroku

## Deployment

**Make sure you edit the `deploy` script and substitute your Heroku URL into the proper place**.

Then, from your Bash prompt, run:

`./deploy`

This will create a directory called `temp-deploy` that you may safely delete once the deploy has completed.
