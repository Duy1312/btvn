class Food {
    name;
    luxuriousName;
    price;

    constructor(name, luxuriousName, price) {
        this.name = name;
        this.luxuriousName= luxuriousName;
        this.price = price;
    }
}

class VegetableFood extends Food {
    constructor(name, luxuriousName, price) {
        super(name, luxuriousName, price);
    }
}

class NonVegetableFood extends Food {
    constructor(name, luxuriousName, price) {
        super(name, luxuriousName, price);
    }
}

let menu1 = new NonVegetableFood("pho","still pho",1000000);
let menu2 = new VegetableFood("rau xao","rau ham",40000);
let menu3 = new NonVegetableFood("thit lon xao ot","thhit rong",100000000);
let menu4 = new VegetableFood('sinh to','hoa qua',3000);
let menu5 = new VegetableFood('le','hanh',2000)

let fastfood = new VegetableMeal('ăn ăn ăn')

VegetableMeal.addFood(menu1);
VegetableMeal.addFood(menu2);
VegetableMeal.addFood(menu3);
VegetableMeal.addFood(menu4);
VegetableMeal.addFood(menu5);