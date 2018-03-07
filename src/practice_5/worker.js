"use strict";
import Person from "./person.js";
class Worker extends Person
    {
    constructor(name,age){
        super(name,age);
    }
    introduce(){
        let i = super.introduce();
        return i+" I am a Teacher. I have a job.";
    }
}
module.exports = Worker;
