
/* Constructor */

class Dog {
    constructor(name) {
      this._name = name;
      this._behavior = 0;
    }
  
    get name() {
      return this._name;
    }
    get behavior() {
      return this._behavior;
    }   
  
    incrementBehavior() {
      this._behavior ++;
    }
  }
  
  const halley = new Dog('Halley');
  console.log(halley.name); // Print name value to console
  console.log(halley.behavior); // Print behavior value to console
  halley.incrementBehavior(); // Add one to behavior
  console.log(halley.name); // Print name value to console
  console.log(halley.behavior); // Print behavior value to console


  /* Create Instance */

  /* Create an instance of the Surgeon class.
  Set the name to 'Ruth Jackson' and department to 'Orthopedics'.
  Save the instance to a constant variable called surgeonJackson. */

  class Surgeon {
    constructor(name, department) {
      this.name = name;
      this.department = department;
    }
  }
  
  const surgeonJackson = new Surgeon('Ruth Jackson', 'Orthopedics');
  console.log(surgeonJackson);