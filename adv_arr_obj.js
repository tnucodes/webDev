// Advanced arrays

const array = [1, 2, 3, 4];
const double = [];
array.forEach(num => {
    double.push(num * 2);
})
console.log("for each", double);

// map,filter,reduce all should have return value

// map

const mapArray = array.map(num => num * 2)
console.log("map", mapArray);

// filter

const filterArray = array.filter(num => num > 2);
console.log("filter", filterArray);

// reduce

const reduceArray = array.reduce((accumalator,num) => {
    return accumalator+num;
},0);

console.log("reduce", reduceArray);

// Advanced objects

// instantiation

class Player{
    constructor(name,type){
        console.log('player',this);
        this.name = name;
        this.type = type;
    }

    introduce(){
        console.log(`Hii I'm ${this.name} , I am a ${this.type}`);
    }
}

class Wizard extends Player{
    constructor(name,type){
        super(name,type);
        console.log('wizard',this)
    }
    play(){
        console.log(`WEEEEEE I'm a ${this.type}`);
    }
}

const wizard1 = new Wizard("Shelly","Healer");
const wizard2 = new Wizard("Shawn","Postions Specialist");