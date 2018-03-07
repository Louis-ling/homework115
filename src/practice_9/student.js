"use strict";
import Person from "./person.js";
class Student extends Person
    {
    constructor(prosition,name,age,c){
        super(prosition,name,age);
        this.class=c;
    }
    introduce(){
        let i = super.introduce();
        if(this.hasOwnProperty("class")&&this.class.leader===this){
            return i+" I am a Student. I am Leader of "+this.class.getDisplayName()+".";
        }
        else{
            return i+" I am a Student. I am at "+this.class.getDisplayName()+".";
        }
    }
}
module.exports = Student;
