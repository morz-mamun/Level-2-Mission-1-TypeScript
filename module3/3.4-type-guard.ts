{
    // type guard using Instanceof keyword
    
    class Animal {
        name: string;
        species: string;

        constructor(name: string, species: string){
            this.name = name
            this.species = species
        }

        makeSound(){
            console.log('I am making sound');
            
        }
    }

    class Dog extends Animal {
        constructor(name: string, species: string){
            super(name, species)
        }
        makeBark(){
            console.log('I am Barking.');
            
        }
    }

    class Cat extends Animal {
        constructor(name: string, species: string){
            super(name, species)
        }

        makeMeaw(){
            console.log("I am meawaing.");
            
        }
    }
// smart way to handle instanceof -> by function

// const isDog = (animal: Animal) : animal is Dog => {
//     return animal instanceof Dog
// }
// const isCat = (animal: Animal) : animal is Cat => {
//     return animal instanceof Cat
// }

    const getAnimal = (animal: Animal) => {
        if(animal instanceof Dog){
            animal.makeBark()
        } else if(animal instanceof Cat){
            animal.makeMeaw()
        } else{
            animal.makeSound()
        }
    }

    const dog1 = new Dog('Dog Bhai', 'Dog') // instance of class
    const cat1 = new Cat('Meaw Bhai', 'Cat')

    getAnimal(cat1)

    



    // 
}