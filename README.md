# Music

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.29.
Repository of the project is (https://github.com/eridtroqe/musiccalendar)

## Running project
1- Run `npm install` to install all dependecies
2- Run `ng build` to build the project. The bundle will be stored on `backend/music` folder.
3- Open a terminal and run `npm run start:server` to run the BE on port `http://localhost:3000`.
4- Opene another terminal and run `npm start` to run the FE on port `http://localhost:4200`.


## Project features
It has a small real BE with Node.js for managing data.
User logs in with username: `test@gmail.com` and password: `123456`.
After login the page redirects to the calendar page.
The calendar component have highlighted the days in which has been realised songs.
You can't click on the days which don't have released songs on that day.
If we click on one of the highlighted days it will open a modal with the list of songs released on that day.
The user can reorder the list on the modal by drag and drop and a button will show to save the changes.
If there is one song released there is no sence to reorder so the drag and drop functionality is disabled.
The user can remove any song from the modal list by clickin on the delete icon.
The logout functionality also works.
The project uses NGRX v8 for state management of the application.

## !!! -----   IMPORTANT  ----- !!!
When the user makes a CRUD action like `delete` or `save the order of list` it hasn't the full functionality
to rerender the page so a refresh of the page is needed `F5`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
