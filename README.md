# RECIPE APP
I've made this project so that I could practice using TypeScript in react. I wanted it to be a simple and to the point. Nothing fancy. I tend to get lost as I start working on projects. Usually this happens because I don't have a well defined goal. Below I will difine my goals so that I can better keep track of the project and it's progress.

I created this project using `npm create react-app project-name --typescript`
    - This creates a boilerplate so that you can get started with typescript right away. React does all of the setup for you.
    - Once youre project is created you'll see that you'll have files with a .ts extension rather than your usual .js.

## GETTING STARTED

1. You can run this project by making sure you `cd` into the `client` directory. 
2. Once there run `npm install` to install all of the dependencies.
3. While still  at the `client` directory, run `npm start` to serve project on `http://localhost:3000`.

## ABOUT
This project is a recipe app. When the user gets to the site they will be prompted to input username. Once they input the username then they are redirected to a mini dashboard. They will be able to see a button to add a new recipe. Once they click the `add new recipe button` they will see a modal with a form where they can add a new recipe. Once they fill everything out they can post a new recipe. Once the recipe is posted they will see the post in a card list in their dashboard. As more recipes get added they will appear in the dashboard. If they click a card a modal will pop up with pre-filled form. They will have the options to update or delete the recipe. 

### MVP 
    1. User can input a new username
    2. User can view dashboard
    3. User can create new recipe
    4. User can update or 
    5. User can delete recipe

### STRETCH
    1. User can view other people's recipes
    2. User can search recipes

## Learnings

This has been a very productive project. In the process I learned to use TypeScript and to integrate it into React. It took some practice to getting used to declaring types for every variable declared but it's coming along much better. I also had to learn to pass down props and to declare interfaces for them. The coolest thing I learned was to create a `d.ts` file where I could declare all my interfaces and types and they would be made available across the project. It made things much cleaner. It is also really cool becaue the TS Linter gives so many hints as to what you need to do. I think I'm going to continue using TypeScript at least for the next few projects so that I can get even more practice.