"use strict";
import Person from "./person.js";
class Teacher extends Person{
    constructor(nouse,name,age,c=null){
        super(nouse,name,age);
        if(c!==null) {
            this.classes = [];
            for(let i=0;i<c.length;i++){
                this.classes.push(c[i]);
            }
        }
        else{
            this.classes = null;
        }
    }
    introduce(){
        let i = super.introduce();
        if(this.classes!==null){
            let result = i+" I am a Teacher. I teach Class";
            for(let m=0;m<this.classes.length;m++){
                if(m<this.classes.length-1){
                    result=result +" "+this.classes[m].number+",";
                }
                else{
                    result=result +" "+this.classes[m].number+".";
                }
            }
            return result;
        }
        else{
            return i+" I am a Teacher. I teach No Class.";
        }
    }
    introduceWith(student){
        let i = super.introduce();
        let c1 = student.class.number;
        let c2 = this.class.number;
        if(classOne===classTwo){
            return i+" I am a Teacher. I teach "+student.name+".";
        }
        else{
            return i+" I am a Teacher. I don't teach "+student.name+".";
        }
    }
}

module.exports = Teacher;
