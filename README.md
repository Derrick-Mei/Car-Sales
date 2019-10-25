# Module Project: Redux - Car Sales

In this project you are given the skeleton/structure/styling of a React app. There is even some state built in for you. Your job will be to implement React-Redux as the state management system for this application.

## Instructions

---

Read these instructions carefully. Understand exactly what is expected before starting this project.

## Commits

Commit your code regularly and meaningfully. This helps both you and your team lead in case you ever need to return to old code for any number of reasons.

## Description

In this project you will implement Redux to manage the state for this React application.

## Project Set Up

---

This project was put together using create-react-app (CRA). You will not need to install CRA in order to make this project work. Follow the steps below to setup the project with the proper dependencies.

- [ ] Create a forked copy of this project.
- [ ] Add your team lead as collaborator on Github.
- [ ] Clone your OWN version of the repository in your terminal
- [ ] Download project dependencies by running one of these two commands `yarn` or `npm install`
- [ ] Add the dependencies you will need to implement Redux. Also, add you may need to add `node-sass` as a dependency.
- [ ] Using the same command tool (yarn or npm) start up the app using `yarn start` or `npm start`
- [ ] Create a new branch: git checkout -b `<firstName-lastName>`.
      Implement the project on your newly created `<firstName-lastName>` branch, committing changes regularly.
- [ ] Push commits: git push origin `<firstName-lastName>`.

Follow these steps for completing your project.

- [ ] Submit a Pull-Request to merge Branch into master (student's Repository).
- [ ] Add your team lead as a reviewer on the pull-request
- [ ] Your team lead will count the project as complete by merging the branch back into master.
- [ ] Do your magic!

# _Project - Car Sales_

- This is a really fun project, and one to show your family and friends when you've finished.
- You will be starting with a structured and styled app
- You have been commissioned to implement Redux as the state management system in this app
- You have the freedom to manage the state how you would like - ie, connecting multiple components to pass data directly to them, or maybe connecting one component, and then putting the data into a context object.

## Directions

1. install redux react-redux node-sass
2. set up empty reducer and initialState
3. createStore
4. wrap app in provider and pass in store
5. connect component to redux store
6. convert from using State in App.js to using props
7. action creators - ADD_FEATURES REMOVE_FEATURES
8. reducer logic
9. import actionCreators to app and connect them
10. complete functions in app.js, pass them down as props and add to onClick

## _MVP Requirements:_

- [x] Move state to the Redux store
- [x] Set up the Redux flow
- [x] Be able to add features to their car
- [x] Be able to remove added features from their car
- [x] Total updates as user adds and removes features

## Stretch Problems

- [ ] Use Redux hooks instead of HOCs
- [ ] Implement React-Router and add a starter page where the user can choose a car. Each car should have different features that have different pricing.
- [ ] Look into the docs for Bulma and change up the styling.
- [ ] Implement an API

------------
score:
------------