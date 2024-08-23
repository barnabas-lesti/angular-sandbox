# Angular Turborepo Example

An example project to demonstrate how [Angular](https://angular.dev/overview) and [Turborepo](https://turbo.build/repo/docs) can work together.

Angulars best friend is [Nx](https://nx.dev/getting-started/installation), however it is possible to make it work with Turborepo and utilize it's benefits.

## Prerequisites

- [NodeJS](https://nodejs.org/)
  - This will also install `npm`, make sure both are added to the `path` and available in terminal.
  - It is a good idea to use [NVM](https://github.com/nvm-sh/nvm) (Node Version Manager) to manage NodeJS. It can easily help to switch NodeJS versions when working in multiple repositories.
- [Git](https://git-scm.com/)
  - To commit changes, can be skipped if you just want to check out the app.
- [Visual Studio Code](https://code.visualstudio.com/)
  - Other IDE can be used of course, but there are added settings for VSCode in the project.
  - Once the project is opened in VSCode, install the recommended extensions.

## Overview

There are 3 core workspaces in the project:

- [apps](./apps) - Applications (right now only one, the `client`).
- [libs](./libs) - Libraries (that are used to build the applications).
- [tools](./tools) - Tooling like `tsconfig`-s, etc.

With this, we can utilize Turborepos caching and task dependency manager features. In the [turbo.json](./turbo.json) file, we have the configurations for what script is required for another one and what to cache.

Apart from the above, we have Prettier and Eslint integrated too. These are set up in the root of the repo for the whole project, but these could also be moved per module level.

## Development

- First step is to install the project dependencies with `npm i`.
  - Right now, every dependency is in the root [package.json](./package.json) file. If needed, the different modules can have diverging dependencies where they for example require a different version of a global package, this can be set in the modules package.json file without a problem.
- Because right now there's only one application, we can just use the `npm run start` script to start that single application.
  - If in the future there will be more applications, we can use Turborepos filtering functionality to only start what we want.
  - By starting the application, Turbo also knows (because of the turbo.json configuration) that it first needs to build the depending libraries (defined in the applications package.json file).
- If we want to make changes to a library, we can start the `npm run build:watch` script that will automatically rebuild the libraries where we made changes. This will also reload the application that we previously started.

### Summary

1. Install dependencies with `npm i`.
2. Start the client application with `npm run start`.
3. Start the library builds in watch mode with `npm run build:watch`.
4. Have fun!
