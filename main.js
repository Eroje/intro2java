
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


  /* Create Instances */

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
    // This creates an instance of Surgeon saved as a constant variable named surgeonJackson                                                              

  console.log(surgeonJackson);

  /* Getter and Method and Method Calls */

  class Surgeon { // Class with 3 instances and 2 properties
    constructor(name, department) { // Constructor with 2 arguments (properties)
      this._name = name;   // Instances
      this._department = department; // Instances
      this._remainingVacationDays = 20; // Instances
    }
  
    get name() { 
      return this._name;
    } // Getter 
  
    get department() { 
      return this._department;
    } // Getter
  
    get remainingVacationDays() { 
      return this._remainingVacationDays;
    } // Getter
  
    takeVacationDays(daysOff) { // Method with 1 argument (daysOff)
      this._remainingVacationDays -= daysOff; //Subtracts daysOff from remainingVacationDays & save the result to remainingVacationDays
    } 
  }
  
  const surgeonRomero = new Surgeon('Francisco Romero', 'Cardiovascular'); // Instance 
  const surgeonJackson = new Surgeon('Ruth Jackson', 'Orthopedics'); // Instance 

  console.log(surgeonRomero.name);

  surgeonRomero.takeVacationDays(3); // Method Calls - (calls takeVacationDays on surgeonRomero)
  console.log(surgeonRomero.remainingVacationDays);

  /* Inheritance */

  class HospitalEmployee { // Parent Class
    constructor(name) {
      this._name = name;
      this._remainingVacationDays = 20;
    }
    get name() {
      return this._name;
    }
    
    get remainingVacationDays() {
      return this._remainingVacationDays;
    }
    
    takeVacationDays(daysOff) {
      this._remainingVacationDays -= daysOff;
    }
  }
  
  class Nurse extends HospitalEmployee { // Creates a Nurse class as a Child of the HospitalEmployee class
    constructor(name, certifications) {
      super(name); // Calls the parent constructor methods
      this._certifications = certifications; // Constructs a new instance
    }
  }
  const nurseOlynyk = new Nurse('Olynyk', ['Trauma', 'Pediatrics']);

  nurseOlynyk.takeVacationDays(5); // Method Calls - (calls takeVacationDays on nurseOlynyk)
  console.log(nurseOlynyk.remainingVacationDays);
  
  

