"use strict";
class Class{
    constructor(klass){
        this.number = klass;
    }
    getDisplayName(){
        return "Class "+this.number;
    }
    assignLeader(student){
        let c1=student.class.number
        let c2=this.number
        if(c1===c2) {
            this.leader = student;
        }
    }
}
module.exports = Class;
