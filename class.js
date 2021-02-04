class student{
    constructor(sId, sName){
        this.id = sId;
        this.name = sName;
        this.school = 'Janata High School';
    }
}
const student1 = new student(12, 'Shobuj');
const student2 = new student(23, 'Maruf');
const student3 = new student(25, 'Mahin');
console.log(student1, student2, student3);
