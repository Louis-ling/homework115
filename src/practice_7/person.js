"use strict";
class Person{
    constructor(name,age,c){
        this.name = name;
        this.age = age;
        this.class = c;
    }
    introduce(){
        return "My name is "+this.name+". I am "+this.age+" years old.";
    }
}

module.exports = Person;
