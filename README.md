# SimplonExercise

This project was created as an exercise for Simplon students. The project has been prepared to reduce some of the installation and configuration.

A mock up can be found here: https://scene.zeplin.io/project/5d3889784c4695774830feba. Don't worry if your result isn't exactly the same.

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

## Step 3 - Routing

* Create a new module for the cars
* Set up the routing to the different components: Here's an example, but feel free to choose your own names

```
app/cars/overview
app/cars/edit/${id}
```

## Step 4 - Displaying the Table

* Display the data in a custom table following the design from the mock up.
* Add action buttons to edit and delete. Use Material Icons for icons https://material.angular.io/components/icon/overview
* Add a create button to create a new item

## Step 5 - Displaying the Form

* Create a form for all the fields, try following the design in the mock up
* Use Angular Reactive Forms: https://angular.io/guide/reactive-forms
* Use the Angular Material Form Controls: https://material.angular.io/components/form-field/overview
* Use a dropdown for Fuel Type and Brands
* Use a datepicker for start of sales and end of sales
* Have a Save button to update any changes

## Step 6 - Hooking up the Store
* I've already added the store for the GET all actions
* Start with the Actions and reducers, those are the easiest to get a grasp of.
* The Store is immutable. That means objects won't be changed, they'll need to be recreated instead. If you break the rules of immutability there will be an error. Some good reading: https://dev.to/glebec/four-ways-to-immutability-in-javascript-3b3l
* You can find the full documentation in the ngrx docs: https://ngrx.io/docs

## Step 7 - Cover everything in Tests
* If you haven't been writing tests yet, this is the time to do it:
  * https://angular.io/guide/testing
  * https://ngrx.io/guide/store/testing
  * https://ngrx.io/guide/effects/testing

## Tips
* Try to strong type everything.
* Write tests during the early steps. It's better practice than adding all of them at the end.
