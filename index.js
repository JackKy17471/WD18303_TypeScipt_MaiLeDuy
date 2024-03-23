"use strict";
let add;
add = (n1, n2) => {
    return n1 + n2;
};
class Person {
    constructor(name) {
        this.name = name;
        this.outputName = name;
    }
    greet(phrase) {
        console.log(phrase + ' ' + this.name);
    }
}
let user1;
user1 = new Person('john');
// user1.name = 'John';
user1.greet('hi there - i am');
console.log(user1);
/*---------------2--------------- */
/*---------------3--------------- */
class Department {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.employee = [];
    }
    static createEmployee(name) {
        return { name: name };
    }
    addEmployee(employee) {
        this.employee.push(employee);
    }
    printEmployeeInformation() {
        console.log(this, this.employee.length);
        console.log(this.employee);
    }
}
Department.fiscalYear = 2020;
class ItDepartment extends Department {
    constructor(id, admins) {
        super(id, 'IT');
        this.admins = admins;
    }
    describe() {
        console.log('IT Department - ID' + this.id);
    }
}
const employees1 = Department.createEmployee('max');
console.log(employees1, Department.fiscalYear);
const it = new ItDepartment('d1', ['max']);
it.addEmployee('max');
it.addEmployee('manu');
/*---------------3--------------- */
/*---------------4----------------------------------------------------------------- */
/*---------------lab2--------------------------------------- */
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["SUPERADMIN"] = 1] = "SUPERADMIN";
    Role[Role["DEVELOPMENT"] = 2] = "DEVELOPMENT";
})(Role || (Role = {}));
class PersonClass {
    constructor(name, age, hobbies, role, roletuple) {
        this.name = name;
        this.age = age;
        this.hobbies = hobbies;
        this.role = role;
        this.roletuple = roletuple;
    }
}
let favouriteActivities; // Corrected typo
favouriteActivities = [5, 'Sports', true];
const person1 = new PersonClass('typeScript', 11, ['Sports', 'Cokking'], Role.ADMIN, [2, 'author']);
if (person1.role === Role.DEVELOPMENT) {
    console.log('is author');
}
// Class for combination
class Combiner {
    static combine(input1, input2, resultConversion) {
        let result;
        if (typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number') {
            result = parseFloat(input1.toString()) + parseFloat(input2.toString());
        }
        else {
            result = input1.toString() + input2.toString();
        }
        return result;
    }
}
// Test combining
const combineNumber = Combiner.combine(30, 26, 'as-number');
console.log(combineNumber);
const combineStringNumber = Combiner.combine('30', '36', 'as-number');
console.log(combineStringNumber);
const combineText = Combiner.combine('typescipt', 'javascipt', 'as-text');
console.log(combineText);
class Person1 {
    constructor(activeHobbies) {
        this.activeHobbies = activeHobbies;
        this.hobbies = [];
    }
    addHobby(hobby) {
        this.hobbies.push(hobby);
    }
    getActiveHobbies() {
        return this.activeHobbies;
    }
    getAllHobbies() {
        return this.hobbies;
    }
}
const hobbies = [{ name: "Sports" }, { name: "Cooking" }];
const activeHobbies = [{ name: "Hiking" }];
const person2 = new Person1(activeHobbies);
person2.addHobby(hobbies[0]);
person2.addHobby(hobbies[1]);
person2.addHobby(...hobbies);
console.log(person2.getActiveHobbies());
console.log(person2.getAllHobbies());
//1
class ArraySummer {
    static sumArray(array) {
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
    static sum5(a = 0, b = 0, ...rest) {
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
    static mergeArrays(arr1, arr2) {
        return [...arr1, ...arr2];
    }
}
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
console.log(ArrayMerger.mergeArrays(arr1, arr2));
// bai2
//1
class NumberAdder {
    static sum(x = 5, y) {
        return x + (y || 0);
    }
}
let result = NumberAdder.sum(5, 12);
console.log("Result: " + result);
result = NumberAdder.sum(8, 5);
console.log("Result: " + result);
//2
let something = undefined;
let nothing = undefined;
function throwError(errorMsg) {
    throw new Error(errorMsg);
}
//3
class Calculator {
    static addAndHandle(x, y, cb) {
        const result = x + y;
        cb(result);
    }
}
Calculator.addAndHandle(10, 20, (result) => {
    console.log(result);
});
/*---------------lab3--------------------------------------- */
/*---------------4------------------------------------------------------------------------ */ 
