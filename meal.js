class Meal {
    name;
    foods;
    dateModified;

    constructor(name, foods, dateModified) {
        this.name = name;
        this.foods =[];
        this.dateModified = new Date().toISOString();
    }
    addFood(foods) {
        this.foods.push(foods);
    }
    calculatePrice() {
        let total = 0;
        for (let i = 0; i< this.foods.length; i++) {
            total += this.foods[i].price
        }
        return total;
    }
    show() {
        console.log(` bữa ăn hôm nay: ${this.name}`);
        for(let i = 0; i < this.foods.length; i++) {
            console.log(`các món ăn: ${this.foods[i].name}`);
        }

        console.log(`ngày: ${this.dateModified}`);
    }     


}
class VegetableMeal extends Meal {
    constructor(name, foods, dateModified) {
        super(name,foods,dateModified);
    }
    addFood(vegetableFood) {
        this.foods.push(vegetableFood)
    }
    calculatePrice() {
        let total = 0;
        for (i = 0; i < this.foods.length; i++) {
            total += this.foods[i];
            
        }
        return (total * 0.85);
       
       
    }

}

class NonVegetableMeal extends Meal {
    constructor(name, foods, dateModified) {
        super(name,foods,dateModified);
    }
    addFood(NonVegetableFood) {
        this.foods.push(NonVegetableFood)
    }
    calculatePrice() {
        let total = 0;
        for (let i=0; i<this.foods.length; i++) {
            total += this.foods[i]
            
        }
        return (total*0,95);
    }

}