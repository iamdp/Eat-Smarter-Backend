# Eat-Smarter

Improvement on the Eat Smart app.
Meal planning application

https://young-island-66909.herokuapp.com/

## GET Requests

- **/api/getMealPlan** - Proof of concept

```
{
    "breakfast": "Green Eggs & Ham",
    "lunch": "Supreme Burger",
    "dinner": "Just Alfredo"
}
```

- **/api/createUser** - Params: firstName, lastName, age, caloricGoal - Creates a user

```
{
    "id": 1,
    "firstName": "David",
    "lastName": "Pham",
    "age": 33,
    "caloricGoal": 2200,
    "updatedAt": "2018-09-27T20:53:56.227Z",
    "createdAt": "2018-09-27T20:53:56.227Z"
}
```

- **/api/associateAllegry** - Params: userId, allegryDesc, allegryApiCode - Associates allegry to user.

```
{
    "id": 1,
    "userId": "1",
    "allegryDesc": "Peanuts",
    "updatedAt": "2018-09-27T21:01:43.248Z",
    "createdAt": "2018-09-27T21:01:43.248Z"
}
```

- **/getRecipes** - Params: query - Returns a list of recipes.

```
    See Yummly docs for returned json object:
    https://developer.yummly.com/documentation
```

- **/api/getUser** - Param: userId - Returns the specified user.

```
{
    "id": 1,
    "firstName": "David",
    "lastName": "Pham",
    "age": 33,
    "caloricGoal": 2200,
    "createdAt": "2018-09-27T20:53:56.000Z",
    "updatedAt": "2018-09-27T20:53:56.000Z",
    "allegries": []
}
```
