/*
Fill in the object constructor with the following methods below:

getFirstName()
getLastName()
getFullName()
setFirstName(first)
setLastName(last)
setFullName(firstAndLast)

Run the tests to see the expected output for each method. The methods that take an argument must accept only one argument 
and it has to be a string. These methods must be the only available means of interacting with the object.
*/

var Person = function(firstAndLast) {
    // Only change code below this line
    // Complete the method below and implement the others similarly
    var fullname = firstAndLast;
  
    this.getFullName = () => fullname
    this.getLastName = () => fullname.split(' ')[1]
    this.getFirstName = () => fullname.split(' ')[0]
    this.setFirstName = (first) => fullname = first + ' ' + fullname.split(' ')[1]
    this.setLastName = (last) => fullname = fullname.split(' ')[0] +
  ' ' + last
    this.setFullName = (firstAndLast) => fullname = firstAndLast;
  
    return firstAndLast;
  };
  
  var bob = new Person('Bob Ross');
  bob.getFullName();
  