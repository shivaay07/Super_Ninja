class Ninja{
    constructor(name){
        this.name;
        this.health = 0;
        this.speed = 3;
        this.strength = 3;
    }

    sayName(){
        console.log(this.constructor.name);
    }

    showStats(){
        console.log(`name is ${ this.constructor.name } strength is ${ this.strength } speed is ${ this.speed} health is ${this.health }` )
    }

    drinkSake(){
    this.health += 10;
    console.log(this.health);
    }
}

class Sensei extends Ninja{
    constructor(name){
        super(name);
        this.name;
        this.health = 200;
        this.speed = 10;
        this.strength = 10;
        this.wisdom = 10;
    }

    speakWisdom(){
        const getWisdom = super.drinkSake();
        console.log(getWisdom);
    }
}
const myNinja = new Ninja("ninja1");
myNinja.sayName();
myNinja.showStats();
const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
superSensei.showStats();