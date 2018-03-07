"use strict";
import Person from "./person.js";
import Class from "./class.js";
class Teacher extends Person{
    constructor(name,age,c=null){
        super(name,age);
        if(c!==null) {
            this.class = c;
        }
        else{
            this.class = null;
        }
    }
    introduce(){
        let i = super.introduce();
        if(this.class!==null){
            return i+" I am a Teacher. I teach "+this.class.getDisplayName()+".";
        }
        else{
            return i+" I am a Teacher. I teach No Class.";
        }
    }
    introduceWith(student){
        let i = super.introduce();
        let c1 = student.class.number;
        let c2 = this.class.number;
        if(c1===c2){
            return i+" I am a Teacher. I teach "+student.name+".";
        }
        else{
            return i+" I am a Teacher. I don't teach "+student.name+".";
        }
    }
}

module.exports = Teacher;

