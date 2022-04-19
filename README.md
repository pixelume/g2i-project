## Notes

 - The project was bootstrapped with
   [cra-template-ts-prettier-eslint-airbnb](https://github.com/lindomar-oliveira/cra-template-ts-prettier-eslint-airbnb) which is a template for [Create React App](https://create-react-app.dev/) supporting [TypeScript](https://www.typescriptlang.org/) with [Prettier](https://prettier.io/) and [ESlint](https://eslint.org/) config recommended by [Airbnb](https://github.com/airbnb/javascript).
- I did make a few custom overrides to the default lint configuration
- Although extensive tests are not included, I did add a few very basic test tests using Jest and React Testing Library
- I used [Material-UI (MUI)](https://mui.com/) as a basis for the styling and UI components and customized the default theme's color pallette
- Although I considered using a state management library like Redux Toolkit Query or Easy-Peasy, I felt that the state for this little project was simple enough not to add the extra overhead so it is just managed internally using the React Context API.

## How to run the app in a Development environment

 - Unzip the archive in a new folder
 - `cd` into the folder
 - Run `npm install` or `yarn install` to install all the dependancies
 - Once the dependancies are installed, start the development server by running `npm start` or `yarn start`
 - The dev server will run on localhost:3000 and the browser should open to localhost:3000 automatically.
 - If for any reason the browser doesn't open the dev server url automatically, you can open the browser and type localhost:3000 in the url field and hit enter
 - The code was also pushed to a [public github repo](https://github.com/pixelume/g2i-project) from where you can clone or download it
