# SimplonExercise

This project was created as an exercise for Simplon students. The project has been prepared to reduce some of the installation and configuration.

## Step 1 - Git

* Get the project from Github and create your own branch. 
* Push your branch to github.

Don't work on the master branch, this will allow us to help and review the code easier.

## Step 2 - Services

* Find the file `car.service.ts`
* Fill in the different CRUD operations. The base url has already been prepared. For the HTTP we're using the Angular-in-memory-web-api module.

```
GET    api/cars        - Get all
GET    api/cars/${id}  - Get one
POST   api/cars        - Create one (use car as body)
PUT    api/cars/${id}  - Update one (use car as body)
DELETE api/cars/${id}  - Delete one
```

## Step 3 - Displaying the Table

* Display the data from the GET using the Angular Material: https://material.angular.io/components/table/overview
* Add action buttons to edit and delete. Use Material Icons for icons https://material.angular.io/components/icon/overview
* Add a create button to create a new item

I recommend both the Create and edit buttons to route to the same component. Something like:

## Step 4 - Displaying the Form

* Create a form for all the fields
* Use the Angular Material Form Controls
* Use a dropdown for Fuel Type
* Use a datepicker for start of sales and end of sales
* Have a Save button to update any changes

## Step 5 - Hooking up the Store
* I've already added the store for the GET all actions
* Start with the Actions and reducers, those are the easiest to get a grasp of.
* The Store is immutable. That means objects won't be changed, they'll need to be recreated instead. If you break the rules of immutability there will be an error. Some good reading: https://dev.to/glebec/four-ways-to-immutability-in-javascript-3b3l
* You can find the full documentation in the ngrx docs: https://ngrx.io/docs

## Step 6 - Cover everything in Tests
* If you haven't been writing tests yet, this is the time to do it:
  * https://angular.io/guide/testing
  * https://ngrx.io/guide/store/testing
  * https://ngrx.io/guide/effects/testing

## General tips
* Write tests during the early steps. It's better practice than adding all of them at the end.
* Try to strong type everything.
* Think about architecture and modules. Don't shove everything into `Core`. Don't use too many modules either.
* Keep the styling simple and consistent with Angular Material
