class Uber {
  constructor(Km, timeTaken, mode = "Car", MinCharge = "100") {
    this.type = mode;
    this.MinCharge =
      this.type == "Auto"
        ? 40
        : this.type == "Byke"
        ? 25
        : this.type == "Bycycle"
        ? 20
        : +MinCharge;
    this.distance = Km;
    this.timeTaken = timeTaken;
    this.TravelSpeed = null;
    this.TotalAmount = 0;
  }

  setUbercharge = () => {

    this.TotalAmount = this.distance * this.MinCharge;
    this.speed = this.distance/this.timeTaken;

    if(this.type=="Auto"){

        this.TravelSpeed = this.speed <=40 ? `Safe driving by Auto Driver, speed is ${this.speed} Km/hr` : `Danger Driving by Auto Driver , speedeed is ${this.speed} Km/hr`;

    }else if(this.type=="Car"){
        this.TravelSpeed = this.speed <=70 ?  `Safe driving by Car Driver , speed is ${this.speed} Km/hr` : `Danger Driving by Car Driver , speed is ${this.speed} Km/hr`;
        
    }else if(this.type=="Byke"){

        this.TravelSpeed = this.speed <=50 ?  `Safe driving by Byke Driver , speed is ${this.speed} Km/hr` : `Danger Driving by Byke Driver , speed is ${this.speed} Km/hr`;
    }else{
        this.TravelSpeed = this.speed <=25 ?  `Safe driving by Bycycle Driver , speed is ${this.speed} Km/hr` : `Danger Driving by Bycycle Driver , speed is ${this.speed} Km/hr`;

    }
    
    // return (this.TotalAmount = this.distance * this.MinCharge);
    return [this.TotalAmount, this.TravelSpeed]
  };

  getUberCharge = () => {
    return this.setUbercharge();
    //   console.log(this.setUbercharge())
  };
}

let uberdetails = new Uber(18,.5, "ByCycle");
console.log(uberdetails.getUberCharge()[0]);
console.log(uberdetails.getUberCharge()[1]);

