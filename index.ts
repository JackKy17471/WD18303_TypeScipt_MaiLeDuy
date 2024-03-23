/*---------------1--------------- */
interface AddFn {
  (a: number, b: number): number;
}

let add: AddFn;
add = (n1: number, n2: number) => {
  return n1 + n2
}
/*---------------1--------------- */



/*---------------2--------------- */
interface Named {
  readonly name?: string;
  outputName: string;
}
interface Greetable extends Named {
  greet(phrase: string): void;
}

class Person implements Greetable {
  outputName: string;

  constructor(public name: string) {
      this.outputName = name;
  }

  greet(phrase: string): void {
      console.log(phrase + ' ' + this.name);
  }
}


let user1: Greetable;
user1 = new Person('john');
// user1.name = 'John';

user1.greet('hi there - i am');
console.log(user1);

/*---------------2--------------- */


/*---------------3--------------- */
abstract class Department {
  static fiscalYear = 2020;
  protected employee: string[] = [];
  constructor(protected readonly id: string, public name: string) {

  }
  static createEmployee(name: string): { name: string } {
    return { name: name } as Employee;
  }
  abstract describe(this: Department): void;

  addEmployee(employee: string) {
    this.employee.push(employee);
  }

  printEmployeeInformation() {
    console.log(this, this.employee.length);
    console.log(this.employee);
  }
}

class ItDepartment extends Department {
  admins: string[];

  constructor(id: string, admins: string[]) {
    super(id, 'IT');
    this.admins = admins;
  }

  describe() {
    console.log('IT Department - ID' + this.id);
  }
}

const employees1 = Department.createEmployee('max')
console.log(employees1, Department.fiscalYear);

const it = new ItDepartment('d1',['max']);

it.addEmployee('max')
it.addEmployee('manu')



/*---------------3--------------- */


/*---------------4----------------------------------------------------------------- */
/*---------------lab2--------------------------------------- */
enum Role {
  ADMIN,
  SUPERADMIN,
  DEVELOPMENT
}

interface Person1 {
  name: string;
  age: number;
  hobbies: string[];
  role: Role;
  roletuple: [number, string];
}

class PersonClass implements Person1 {
  name: string;
  age: number;
  hobbies: string[];
  role: Role;
  roletuple: [number, string];

  constructor(name: string, age: number, hobbies: string[], role: Role, roletuple: [number, string]) {
      this.name = name;
      this.age = age;
      this.hobbies = hobbies;
      this.role = role;
      this.roletuple = roletuple;
  }
}

let favouriteActivities: any[]; // Corrected typo
favouriteActivities = [5, 'Sports', true];

const person1: Person1 = new PersonClass('typeScript', 11, ['Sports', 'Cokking'], Role.ADMIN, [2, 'author']);

if (person1.role === Role.DEVELOPMENT) {
  console.log('is author');
}

// Class for combination
class Combiner {
  static combine(input1: Combinable, input2: Combinable, resultConversion: 'as-number' | 'as-text'): Combinable {
      let result;

      if (typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number') {
          result = parseFloat(input1.toString()) + parseFloat(input2.toString());
      } else {
          result = input1.toString() + input2.toString();
      }
      return result;
  }
}

// Test combining
const combineNumber: Combinable = Combiner.combine(30, 26, 'as-number');
console.log(combineNumber);

const combineStringNumber: Combinable = Combiner.combine('30', '36', 'as-number');
console.log(combineStringNumber);

const combineText: Combinable = Combiner.combine('typescipt', 'javascipt', 'as-text');
console.log(combineText);
/*---------------lab2--------------------------------------- */






/*---------------lab3--------------------------------------- */
interface Hobby {
  name: string;
}

class Person2 {
  protected hobbies: Hobby[];

  constructor(public activeHobbies: Hobby[]) {
      this.hobbies = [];
  }

  addHobby(hobby: Hobby) {
      this.hobbies.push(hobby);
  }

  getActiveHobbies(): Hobby[] {
      return this.activeHobbies;
  }

  getAllHobbies(): Hobby[] {
      return this.hobbies;
  }
}

const hobbies: Hobby[] = [{ name: "Sports" }, { name: "Cooking" }];
const activeHobbies: Hobby[] = [{ name: "Hiking" }];

const person3 = new Person2(activeHobbies);
person3.addHobby(hobbies[0]);
person3.addHobby(hobbies[1]);
person3.addHobby(...hobbies);

console.log(person3.getActiveHobbies());
console.log(person3.getAllHobbies());

//1
class ArraySummer {
  static sumArray(array: number[]): number {
      let sum = 0;
      for (const num of array) {
          sum += num;
      }
      return sum;
  }
}

console.log(ArraySummer.sumArray([1, 2, 3, 4, 5])); // Kết quả: 15

//2
class RestSummer {
  static sum5(a: number = 0, b: number = 0, ...rest: number[]): number {
      let total = a + b;
      for (const num of rest) {
          total += num;
      }
      return total;
  }
}

console.log(RestSummer.sum5(1, 2)); // Kết quả: 3
console.log(RestSummer.sum5(1, 2, 3)); // Kết quả: 6
console.log(RestSummer.sum5(1, 2, 3, 4)); // Kết quả: 10

//3
class ArrayMerger {
  static mergeArrays<T>(arr1: T[], arr2: T[]): T[] {
      return [...arr1, ...arr2];
  }
}

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
console.log(ArrayMerger.mergeArrays(arr1, arr2));

// bai2
//1
class NumberAdder {
  static sum(x: number = 5, y?: number): number {
      return x + (y || 0);
  }
}

let result = NumberAdder.sum(5, 12);
console.log("Result: " + result);
result = NumberAdder.sum(8, 5);
console.log("Result: " + result);

//2
let something: void = undefined;
let nothing: void = undefined;

function throwError(errorMsg: string): never {
  throw new Error(errorMsg);
}

//3
class Calculator {
  static addAndHandle(x: number, y: number, cb: (num: number) => void): void {
      const result = x + y;
      cb(result);
  }
}

Calculator.addAndHandle(10, 20, (result) => {
  console.log(result);
});

/*---------------lab3--------------------------------------- */
/*---------------4------------------------------------------------------------------------ */