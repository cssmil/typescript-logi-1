interface IPerson {
  name: string;
  lastname: string;
  age: number;
}

interface IStudent extends IPerson {
  career: string;
  university: string;
}
const student: IStudent = {
  name: 'John', 
  lastname: 'armando',
  age: 33,
  career: 'developer', 
  university: 'San Marcos',
}


const personaje: IPerson = {
  name: 'John', 
  lastname: 'armando',
  age: 33 
};  

console.log(student, personaje);


interface IPet {
  name: string;
  age: number;
  species: string;
  inFemales: boolean;
  vaccines: string[];
}

const petJohnson: IPet ={
  name: 'John',
  age: 8,
  species: 'dog',
  inFemales: false,
  vaccines: ['tetano', 'distemper', 'rabia'],
}

const petMaria: IPet ={
  name: 'tita',
  age: 5,
  species: 'Bird',
  inFemales: true,
  vaccines: ['tetano', 'rabia'],
}
const petPaula: IPet ={
  name: 'Fari',
  age: 8,
  species: 'dog',
  inFemales: true,
  vaccines: ['tetano'],
}

const pets: IPet[] = [petJohnson, petMaria, petPaula];
console.log(pets);

const petsFemale = pets.filter((pet)=>{return pet.age === 8})
console.log(petsFemale);





export{}