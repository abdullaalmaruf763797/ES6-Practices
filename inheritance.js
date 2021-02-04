class Parent{
    constructor(){
        this.fatherName = "Rahim";
    }
}

class Child extends Parent{
    constructor(name){
        super();
        this.name = name;
    }
    getFullName() {
        return this.name + ' ' + this.fatherName;
    }
}
const baby = new Child("Ridisha");
const baby2 = new Child("Ritika");
console.log(baby.getFullName());
console.log(baby2.getFullName());