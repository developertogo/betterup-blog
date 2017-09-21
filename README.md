# betterup-blog

![bb3](https://user-images.githubusercontent.com/2292367/30714387-94d70706-9ee0-11e7-9a49-b97cd420cd17.gif)

Interview assignment from BetterUp. A small blog-like application for creating and editing blog posts.

* [Viewing the project online](#viewonline)
* [Running the project locally](#run-the-project-locally)
  * [Prerequisites](#prerequisites)
  * [Installation](#installation)
  * [Running / Development](#running--development)
* [Running Tests](#running-tests)
* [Building](#building)
* [Deploying](#deploying)
* [In Defense Of...](#in-defense-of)

## View online

You can view the project at [http://netzband-betterup.s3-website.us-east-2.amazonaws.com/](http://netzband-betterup.s3-website.us-east-2.amazonaws.com/). Data is being generated using [Ember CLI Mirage](http://www.ember-cli-mirage.com/) it's set up to spoof a 1-second network delay so you can see the loading states built into the app.

Or if you want to set it up locally, feel free to continue on with the readme.

## Run the project locally

### Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with NPM)
* [Ember CLI](https://ember-cli.com/)
* [Google Chrome](https://google.com/chrome/)

### Installation

* `git clone git@github.com:tomnez/betterup-blog.git` this repository
* `cd betterup-blog`
* `npm install`

### Running / Development

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

## Running Tests

* `ember test`
* `ember test --server`

If you're using PhantomJS then the `--server` option should automatically open a browser running the tests for you. Otherwise if you're using headless Chrome then the terminal will give you a link where you can copy it and open the tests in a browser. This will be at [http://localhost:7357](http://localhost:7357) by default.

## Building

* `ember build` (development)
* `ember build --environment production` (production)

## Deploying

This app is set up to use Ember CLI Deploy and deploys to an AWS S3 Bucket and is hosted as a standalone static website. More information on the plugins used to deploy are in this repos [PR for deployment configuration](https://github.com/tomnez/betterup-blog/pull/12).

In order to deploy you can follow the instructions for setting up an [S3 Bucket for static hosting](http://docs.aws.amazon.com/AmazonS3/latest/dev/WebsiteHosting.html) and you will also need to set up a `.env` file with the proper environment variables for AWS. See the [.env example file](https://github.com/tomnez/betterup-blog/blob/master/.env.example) in this repo.

Once your bucket and credentials are configured, you can deploy the app using:

* `ember deploy production --verbose`

This will build and upload your assets to your S3 bucket and provide you with an `index.html:SHA` filename. The `SHA` is the SHA of the last commit, and you can use this to activate the deployment. For example, if you are given `index.html:b997e30`, then you would activate using the following command:

* `ember deploy:activate production --revision=b997e30`

And now you can see your latest revision at the address where you are hosting your static S3 site:

[http://netzband-betterup.s3-website.us-east-2.amazonaws.com/](http://netzband-betterup.s3-website.us-east-2.amazonaws.com/)

Where _netzband-betterup_ is the **bucket-name** and _us-east-2_ is your **AWS-region** for the bucket.

See more about deploying using Ember CLI Deploy [here](http://ember-cli-deploy.com/).

## In Defense Of...

There were a few areas of the app that would have been built differently if this were a larger project that would continue to grow/scale. But given that it was a quick week long project, there were a few features that didn't get the time they deserved. Specifically, they are:

**CSS Grid**:
The design for this app was simple enough to not need a really robust CSS Grid in order to get the responsiveness required. Again, a larger project, or a project that would continually grow should have some sort of structure for building out consistent responsive pages and behaviors. But since these pages are just showing one type of model, I didn't bother weighing down the assets with anything like the Bootstrap or Foundation grids.

**Ember Paper Theme**:
[Ember Paper](http://miguelcobain.github.io/ember-paper/) is an addon based off of Google's [Material Design](https://www.google.com/design/spec/material-design/introduction.html), and provides an API to create a site theme and out-of-the-box components. I only used Ember Paper for it's form field components, rather than use it all over the site. So rather than spend a lot of time creating an Ember Paper theme to match my colors/design, I overwrote some of the form styles in the [component styles file](https://github.com/tomnez/betterup-blog/blob/master/app/components/modals/post-form/styles.scss).

**Slightly Modified Designs**:
If you notice, I strayed a bit from the designs and put the "edit" icon in the blog post itself rather than up in the header. This was for a couple reasons.

The first reason is to follow the idea of nested routes and nested UI. If the "edit" button was in the header, it button would need to trigger an action that knows about the model it's editing. The header doesn't know anything about what model you are currently viewing, and it would take some hacking around and going against development principles to get it working in a way where the `posts.show` route bubbled the model up into the `application` controller and then back down into the `app-header` component. It makes more sense to send this action directly from where the data already exists, which is in the `posts.show` route.

The second reason is because the UI is simple enough so that it doesn't appear to be confusing or cluttered to leave the "add" button in the header at all times instead of swapping it out for an "edit" icon depending on which route you're on.
