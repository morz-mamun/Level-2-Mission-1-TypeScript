{
    // Build in blocks in OOP -> 

    // Class in OOP -> 

    // class Animal {       // normal way to defined a class
    //     name: string;
    //     species: string;
    //     sound: string

    //     constructor(name: string, species: string, sound: string){
    //         this.name = name
    //         this.species = species
    //         this.sound = sound
    //     }

    //     makeSound(){
    //         console.log(`The ${this.name} says ${this.sound}.`);
            
    //     }
    // }
  
    class Animal {          // class create by typescript 
        constructor(public name: string, public species: string, public sound: string){}
        makeSound(){
            console.log(`The ${this.name} says ${this.sound}.`)
        }
        
    }

    const dog = new Animal('German Shepard bhai', 'dog', 'ghew') // this is called instance
    dog.makeSound()
}