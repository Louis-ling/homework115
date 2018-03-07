"use strict";
import Person from "./person.js";
class Teacher extends Person
    {
      constructor(nouse,name,age,c){
        super(nouse,name,age);
        if(c!==null) {
            this.class = c;
        }
        else{
            this.class = null;
            }
        }
    introduce()
    {
        let i = super.introduce();
        if(this.class==null)
        {
        return i+" I am a Teacher. I teach No Class."
        }
        else{
        return i+" I am a Teacher. I teach "+this.class.getDisplayName()+".";
        }        
    }
}
module.exports = Teacher;
