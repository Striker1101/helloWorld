//classes
const studentName = {
  nameOne: "sarah",
  nameTwo: "boris",
  getName: function (name) {
    return name;
  },
};

/**
 *
 */
class Car {
  /**
     A class element can be characterized by three aspects:

        Kind: Getter, setter, method, or field
        Location: Static or instance
        Visibility: Public or private
     */
  //constant Fields datas
  tires = 4;
  head_light = 2;
  #steering = 1;
  engine = 1;
  wind_screen = 1;
  side_mirror = 2;
  NameOfClass = "Car";

  //private variables

  //s
  /**
   *
   * @param {Number} wippers
   * @param {Number} exhaust
   * @param {Number} fuel_reserve
   * @param {Number} seats
   * @param {Number} seat_belt
   * @param {Number} air_bag
   * @param {Number} doors
   * @param {String} color
   * @param {Number} tires
   * @param {Number} head_light
   * @param {Number} steering
   * @param {Number} engine
   * @param {Number} wind_screen
   * @param {Number} side_mirror
   * @param {String} name
   */
  constructor(
    //flexible data
    name,
    wippers,
    exhaust,
    fuel_reserve,
    seats,
    seat_belt,
    air_bag,
    doors,
    color,
    //constant data
    tires,
    head_light,
    steering,
    engine,
    wind_screen,
    side_mirror,
    NameOfClass
  ) {
    // initialize the properties
    this.name = name;
    this.wippers = wippers;
    this.exhaust = exhaust;
    this.fuel_reserve = fuel_reserve;
    this.seats = seats;
    this.seat_belt = seat_belt;
    this.air_bag = air_bag;
    this.color = color;
    this.doors = doors;
    this.tires = tires;
    this.head_light = head_light;
    this.#steering = steering;
    this.engine = engine;
    this.wind_screen = wind_screen;
    this.side_mirror = side_mirror;
    this.NameOfClass = NameOfClass;
  }
  //static method
  static className() {
    return this.NameOfClass;
  }

  //public method
  runs() {
    return this.name + " is currently driving";
  }
}

const benz = new Car("benz 360", 2, 2, 150, 4, 4, 2, 4, "black", null, 3);
// console.log(Car.className());

class Benz extends Car {
  constructor(name) {
    super(name);
  }
}

//literal string definition
const nameOne = "john";
const c350 = new Benz("c350");
console.log(c350.runs());

//object string definition
const nameTwo = new String("john");

const arr = new Array(4, 3, 24, 3, 4, 2);

const age = new Number(90);
