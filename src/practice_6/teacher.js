"use strict";
import Person from "./person.js";
class Teacher extends Person
    {
    constructor(name,age,c){
        super(name,age);
        this.klass=c;
    }
    introduce()
    {
        let i = super.introduce();
        if(this.klass==null)
        {
        return i+" I am a Teacher. I teach No Class."
        }
        else{
            return i+" I am a Teacher. I teach Class "+this.klass+".";
        }        
    }
}
module.exports = Teacher;
