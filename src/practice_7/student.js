"use strict";
import Person from "./person.js";
class Student extends Person{
    constructor(name,age,c){
        super(name,age);
        this.class = c;
    }
    introduce(){
        let i = super.introduce();
        return i+" I am a Student. I am at "+this.class.getDisplayName()+".";
    }
}
module.exports = Student;
