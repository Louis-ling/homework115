"use strict";
import Person from "./person.js";
class Worker extends Person
    {
    constructor(name,age){
        super(name,age);
    }
    introduce(){
        let i = super.basic_introduce();
        return i+" I am a Worker. I have a job.";
    }
}
module.exports = Worker;

