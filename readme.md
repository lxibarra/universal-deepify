# Universal Deep Object Getter Setter #
## deepify.js ##

This npm package tries to solve the problem of deep object get and set by using a dot convention. The idea came because i wanted to explore different ways of handling these scenarios.

I hated when i had deep object structures and had to do something like the following:

```javascript
  if (someobj.prop1 && someobj.prop1.arr instanceof Array && someobj.prop1.arr .length > 0) {

      // some logic
  }
```
I also tried using patterns as follows:
```javascript
  const = someVar = ((someobj || {}).prop1 || [])[0];
```
but with really complicated and deep nested objects the code became really dirty.

## Getter examples

```javascript
  // consider this Object
  testObject = {
    person:{
      name: 'Ricardo',
      lastName: 'Ibarra',
      assets:[
        {
          type: 'Car'
        },
        {
          type: 'Boat',
          metadata:[
            {
              brand: 'xyz',
              year: '2012'
            },
            {
              serial: 'xxx-xxx-xxx',
              price: 1000
            }
          ]
        }
      ]
    }
  };
```
we can try to get the persons assets without worrying if its going to throw. If a property is no present it will simply be undefined.

#### Get a value in a deep nested array. ####
```javascript
  const price = deepifyGet(testObject, 'person.assets[1].metadata[1].price');

  price === 1000 // true
  // or
  const asset = deepifyGet(testObject, 'person.assets[0].type');
  asset === 'Car'; // true
```

#### trying to get a non existent prop will simply return undefined ####

```javascript
    const idontExist = deepifyGet(testObject, 'person.assets.someRandom.prop[0].that.does.not.exist');
    // does not throw
    idontExist === undefined; // true
```
## Setter examples

The setter by default does not mutate the original object but internally it uses JSON.parse and JSON.stringify and it can be slow.

```javascript
  deepifySet([object], ['property.path'], ['value'], [mutate:boolean] = false);
```

```javascript
  const original_obj = {};
  const obj = deepifySet(original_obj, 'person.last', 'ibarra');
  obj.person.last === 'ibarra' // true
  obj !== original_obj // true because the object is cloned. (No mutation)
```

 if you want to mutate the original object just pass true in the last parameter

 ```javascript
   const original_obj = {};
   const obj = deepifySet(original_obj, 'person.last', 'ibarra', true);
   obj.person.last === 'ibarra' // true
    obj === original_obj; // true deepifySet returns the same reference (object is mutated)
 ```

 For more examples look at the tests directory in the git repo.
