class Company {
    name;
    establishedDate;
    country;
    businessType;
    employees;

    showAllEmployees(){
        console.log(`thông tin của tất cả nhân viên`);
    }
    showCEO(){
        console.log(` thông tin của CEO`);
    }
    showManagers(){
        console.log(`thông tin của Manager`);
    }
    showStaffs(){
        console.log(`thông tin của tất cả staff`);
    }

}

class Employee {
    name;
    sex;
    age;
    address;

    constructor(name,sex,age,address){
        this.name = name;
        this.sex = sex;
        this.age = age ;
        this.address = address;
    }
    about (){
        console.log(this);
    }
}

class CEO extends Employee {
    strategy;

    constructor(name,sex,age,address,strategy){
    super(name,sex,age,address)
    this.strategy = strategy;
    }
}
let newCEO = new CEO('Duy','nam','20','Hung Yen','mua hết mọi thứ')
console.log(newCEO);

class Manager extends Employee {
    managementStyle;

    constructor(name,sex,age,address,managementStyle){
        super(name,sex,age,address)
        this.managementStyle = managementStyle;
    }
}
let newManager = new Manager('Duy','nam','20','hung yen','dễ tính, chỉ bảo tận tình')
console.log(newManager);

class Staff extends Employee {
    experience;

    constructor(name,sex,age,address, experience){
        super(name,sex,age,address)
        this.experience = experience;
    }
}
let newStaff = new Staff('duy','nam','20','hung yen','10 năm')
console.log(newStaff);
