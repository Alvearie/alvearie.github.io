
# Alvearie Website

The Alvearie website is built with the Gatsby framework.

## Development setup

To develop locally, pull down a local copy of the alvearie.github.io repository from GitHub.  Using an IDE such as eclipse
is an ideal environment for development.  The source code for the website is in the *main* branch, and the production files 
are located in the /docs/ folder which is configured to be used for GitHub pages.

Install the Gatsby theme and it's dependencies by following the guide here: https://gatsby-theme-carbon.now.sh/getting-started/

## Building the website

To build the website from the command line for local testing, issue the following command:

> npm run dev

This will build the website from the source files and deploy it locally.  You can view the website locally by going 
to: https://localhost:8000/

To build the website for publishing to GitHub, issue the following command:

> npm run build

This will build all the files needed for deploying to GitHub Pages and copy them to the /docs folder.  After the build has 
been successfully completed and tested, the changes can be pushed to GitHub through a pull request.  After the pull request is merged, the
changes will be automatically deployed to GitHub pages, which usually takes two to three minutes.


=======
# Alvearie Website

The Alvearie website is built with the Gatsby framework.
https://alvearie.github.io/

## Development setup

To develop locally, pull down a local copy of the alvearie.github.io repository from GitHub.  Using an IDE such as eclipse
is an ideal environment for development.  The source code for the website is in the *main* branch, and the production files 
are located in the *gh-pages* branch.

Install the Gatsby theme and it's dependencies by following the guide here: https://gatsby-theme-carbon.now.sh/getting-started/

## Building the website

To build the website from the command line for local testing, issue the following command:

> npm run dev

This will build the website from the source files and deploy it locally.  You can view the website locally by going 
to: https://localhost:8000/

To build the website for publishing to GitHub, issue the following command:

> npm run build

This will build all the files needed for deploying to GitHub Pages and copy them to the /public folder.  After the build has 
been successfully completed and tested, the changes can be pushed to GitHub through a pull request.  Once the changes are merged 
into the main branch, one final command needs to be run to transfer the files to the gh-pages branch:

> git subtree push --prefix public origin gh-pages

After that command completes, the gh-pages branch in GitHub will be updated with the changed files and will automatically be 
pushed to the GitHub Pages website after a minute or two.

