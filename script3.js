class Animal {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
    
    greet() {
      console.log("Halo");
    }
    
    info() {
      this.greet();
      console.log(`Nama saya adalah ${this.name}`);
      console.log(`Saya berusia ${this.age} tahun`);
    }
  }
  
  class Dog extends Animal {
  }
  
  // Terapkan instance class Dog ke constant dog
  const dog = new Dog("Leo", 4);
  
  // Panggil method info dari constant dog
  dog.info();

  
  class Animal {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
    
    greet() {
      console.log("Halo");
    }
    
    info() {
      this.greet();
      console.log(`Nama saya adalah ${this.name}`);
      console.log(`Saya berusia ${this.age} tahun`);
    }
  }
  
  class Dog extends Animal {
    // Tambahkan method getHumanAge
    getHumanAge() {
      return this.age * 7;
    }
  }
  
  const dog = new Dog("Leo", 4);
  dog.info();
  
  // Panggil method getHumanAge milik instance dog
  const humanAge = dog.getHumanAge();
  
  // Print 「Saya berusia __ tahun dalam umur manusia」
  console.log(`Saya berusia ${humanAge} tahun dalam umur manusia`);

  class Animal {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
    
    greet() {
      console.log("Halo");
    }
    
    info() {
      this.greet();
      console.log(`Nama saya adalah ${this.name}`);
      console.log(`Saya berusia ${this.age} tahun`);
    }
  }
  
  class Dog extends Animal {
    // Tambahkan method info
    info() {
      this.greet();
      console.log(`Nama saya adalah ${this.name}`);
      console.log(`Saya berusia ${this.age} tahun`);
      
      const humanAge = this.getHumanAge();
      console.log(`Saya berusia ${humanAge} tahun dalam umur manusia`);
    }
    
    getHumanAge() {
      return this.age * 7;
    }
  }
  
  const dog = new Dog("Leo", 4);
  dog.info();

  class Animal {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
    
    greet() {
      console.log("Halo");
    }
    
    info() {
      this.greet();
      console.log(`Nama saya adalah ${this.name}`);
      console.log(`Saya berusia ${this.age} tahun`);
    }
  }
  
  class Dog extends Animal {
    // Tambahkan constructor
    constructor(name, age, breed) { 
      super(name, age);
      this.breed = breed;
    }
    
    info() {
      this.greet();
      console.log(`Nama saya adalah ${this.name}`);
      // Print 「Saya adalah seekor ____」
      console.log(`Saya adalah seekor ${this.breed}`);
      
      console.log(`Saya berusia ${this.age} tahun`);
      const humanAge = this.getHumanAge();
      console.log(`Saya berusia ${humanAge} tahun dalam umur manusia`);
    }
    
    getHumanAge() {
      return this.age * 7;
    }
  }
  
  // Tetapkan "Chihuahua" sebagai nilai argument
  const dog = new Dog("Leo", 4, "Chihuahua");
  dog.info();
  