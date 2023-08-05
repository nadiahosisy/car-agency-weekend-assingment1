//---------------------------------------------------------------------------------------------
// This is CarPurchaseManager
// It contains data of agencies with agencies methods
// customer data with its methods
// Tax Autority object and its method
// --------------------------------------------------------------------------------------------

const CarPurchaseManager = {
  // This is agencies data ant its methods
  agencies: [
    {
      agencyName: "Best Deal",
      cash: 1245000,
      credit: 200000,
      agencyId: "Plyq5M5AZ",

      cars: [
        {
          brand: "bmw",
          models: [
            {
              name: "3",
              year: 2015,
              price: 137000,
              carNumber: "AZJZ0",
              ownerId: "Plyq5M5AZ",
            },
            {
              name: "X6",
              year: 2020,
              price: 966500,
              carNumber: "S6DL1",
              ownerId: "Plyq5M5AZ",
            },
          ],
        },
        {
          brand: "toyota",
          models: [
            {
              name: "Land Cruiser",
              year: 2020,
              price: 336300,
              carNumber: "6rvXw",
              ownerId: "Plyq5M5AZ",
            },
            {
              name: "Hilux",
              year: 2005,
              price: 35005,
              carNumber: "MWXBG",
              ownerId: "Plyq5M5AZ",
            },
            {
              name: "Corolla",
              year: 2020,
              price: 111900,
              carNumber: "hCzl-",
              ownerId: "Plyq5M5AZ",
            },
          ],
        },
        {
          brand: "Ford",
          models: [
            {
              name: "Focus",
              year: 2020,
              price: 98200,
              carNumber: "kN3HP",
              ownerId: "Plyq5M5AZ",
            },
            {
              name: "Focus",
              year: 2005,
              price: 6502,
              carNumber: "LJTCs",
              ownerId: "Plyq5M5AZ",
            },
          ],
        },
        {
          brand: "Alpha romeo",
          models: [
            {
              name: "Romeo Julia",
              year: 2020,
              price: 275406,
              carNumber: "2kjy7",
              ownerId: "Plyq5M5AZ",
            },
            {
              name: "Romeo Stelvio",
              year: 2019,
              price: 215403,
              carNumber: "7A5b-",
              ownerId: "Plyq5M5AZ",
            },
          ],
        },
        {
          brand: "Chevrolet",
          models: [
            {
              name: "Traverse",
              year: 2020,
              price: 201102,
              carNumber: "QwBOT",
              ownerId: "Plyq5M5AZ",
            },
            {
              name: "Impala",
              year: 2019,
              price: 165041,
              carNumber: "2v4jt",
              ownerId: "Plyq5M5AZ",
            },
            {
              name: "Malibu",
              year: 2017,
              price: 75405,
              carNumber: "O4_Jv",
              ownerId: "Plyq5M5AZ",
            },
          ],
        },
      ],
    },
    {
      agencyName: "CarMax",
      cash: 968541,
      credit: 500000,
      agencyId: "26_IPfHU1",
      cars: [
        {
          brand: "bmw",
          models: [
            {
              name: "X5",
              year: 2015,
              price: 218000,
              carNumber: "4Ixb0",
              ownerId: "26_IPfHU1",
            },
            {
              name: "X6",
              year: 2014,
              price: 97100,
              carNumber: "kAnv-",
              ownerId: "26_IPfHU1",
            },
            {
              name: "Z4",
              year: 2019,
              price: 296900,
              carNumber: "ISMdU",
              ownerId: "26_IPfHU1",
            },
            {
              name: "3",
              year: 2010,
              price: 75100,
              carNumber: "9DJPw",
              ownerId: "26_IPfHU1",
            },
          ],
        },
        {
          brand: "toyota",
          models: [
            {
              name: "Land Cruiser",
              year: 2005,
              price: 80540,
              carNumber: "Kt-pW",
              ownerId: "26_IPfHU1",
            },
            {
              name: "Corolla",
              year: 2019,
              price: 109100,
              carNumber: "YiYdI",
              ownerId: "26_IPfHU1",
            },
            {
              name: "Hilux",
              year: 2019,
              price: 204000,
              carNumber: "DRmNw",
              ownerId: "26_IPfHU1",
            },
          ],
        },
        {
          brand: "Ford",
          models: [
            {
              name: "F250",
              year: 2020,
              price: 198500,
              carNumber: "g4Wfp",
              ownerId: "26_IPfHU1",
            },
            {
              name: "Explorer",
              year: 2020,
              price: 265200,
              carNumber: "iNT8Q",
              ownerId: "26_IPfHU1",
            },
          ],
        },
        {
          brand: "Alpha romeo",
          models: [
            {
              name: "Spider",
              year: 2011,
              price: 75405,
              carNumber: "6t7QU",
              ownerId: "26_IPfHU1",
            },
            {
              name: "166",
              year: 2002,
              price: 12400,
              carNumber: "XMqpn",
              ownerId: "26_IPfHU1",
            },
          ],
        },
        {
          brand: "Chevrolet",
          models: [
            {
              name: "Impala",
              year: 2016,
              price: 65042,
              carNumber: "vbeAo",
              ownerId: "26_IPfHU1",
            },
            {
              name: "Savannah",
              year: 2016,
              price: 76505,
              carNumber: "WelWa",
              ownerId: "26_IPfHU1",
            },
          ],
        },
      ],
    },
    {
      agencyName: "The Auto World",
      cash: 687450,
      credit: 200000,
      agencyId: "gNHjNFL12",
      cars: [
        {
          brand: "bmw",
          models: [
            {
              name: "X6",
              year: 2018,
              price: 548100,
              carNumber: "EMW_7",
              ownerId: "gNHjNFL12",
            },
            {
              name: "3",
              year: 2017,
              price: 178000,
              carNumber: "XlnB4",
              ownerId: "gNHjNFL12",
            },
          ],
        },
        {
          brand: "toyota",
          models: [
            {
              name: "Prius",
              year: 2017,
              price: 101542,
              carNumber: "-RQgN",
              ownerId: "gNHjNFL12",
            },
            {
              name: "Highlander",
              year: 2017,
              price: 202540,
              carNumber: "AZJZ4",
              ownerId: "gNHjNFL12",
            },
            {
              name: "Corolla",
              year: 1996,
              price: 5420,
              carNumber: "kHE8f",
              ownerId: "gNHjNFL12",
            },
            {
              name: "Corolla",
              year: 2012,
              price: 40570,
              carNumber: "p2qEi",
              ownerId: "gNHjNFL12",
            },
          ],
        },
        {
          brand: "Ford",
          models: [
            {
              name: "Explorer",
              year: 2014,
              price: 127502,
              carNumber: "Ty1zN",
              ownerId: "gNHjNFL12",
            },
            {
              name: "F350",
              year: 2012,
              price: 54250,
              carNumber: "z03H2",
              ownerId: "gNHjNFL12",
            },
          ],
        },
        {
          brand: "Chevrolet",
          models: [
            {
              name: "Savannah",
              year: 2010,
              price: 36504,
              carNumber: "RXFZe",
              ownerId: "gNHjNFL12",
            },
            {
              name: "Malibu",
              year: 2009,
              price: 19585,
              carNumber: "K5IsM",
              ownerId: "gNHjNFL12",
            },
          ],
        },
      ],
    },
    {
      agencyName: "Car Werks",
      cash: 302502,
      credit: 150000,
      agencyId: "9KeaYbRLP",
      cars: [
        {
          brand: "bmw",
          models: [
            {
              name: "8",
              year: 2020,
              price: 942500,
              carNumber: "4IUMz",
              ownerId: "9KeaYbRLP",
            },
            {
              name: "X6",
              year: 2010,
              price: 129000,
              carNumber: "Vw0fV",
              ownerId: "9KeaYbRLP",
            },
            {
              name: "X3",
              year: 2019,
              price: 358100,
              carNumber: "ufN54",
              ownerId: "9KeaYbRLP",
            },
            {
              name: "3",
              year: 2020,
              price: 389100,
              carNumber: "F127X",
              ownerId: "9KeaYbRLP",
            },
            {
              name: "3",
              year: 2002,
              price: 18400,
              carNumber: "ueZUp",
              ownerId: "9KeaYbRLP",
            },
          ],
        },
        {
          brand: "toyota",
          models: [
            {
              name: "Prius",
              year: 2011,
              price: 38520,
              carNumber: "AZJZ4",
              ownerId: "9KeaYbRLP",
            },
            {
              name: "Land Cruiser",
              year: 2019,
              price: 290040,
              carNumber: "AZJZ4",
              ownerId: "9KeaYbRLP",
            },
            {
              name: "Hilux",
              year: 2020,
              price: 215700,
              carNumber: "xig8N",
              ownerId: "9KeaYbRLP",
            },
            {
              name: "Hilux",
              year: 2015,
              price: 178506,
              carNumber: "ghTiQ",
              ownerId: "9KeaYbRLP",
            },
            {
              name: "Corolla",
              year: 2002,
              price: 8504,
              carNumber: "Mvw8T",
              ownerId: "9KeaYbRLP",
            },
          ],
        },
        {
          brand: "Chevrolet",
          models: [
            {
              name: "Impala",
              year: 2005,
              price: 9320,
              carNumber: "BZpkt",
              ownerId: "9KeaYbRLP",
            },
            {
              name: "Malibu",
              year: 2002,
              price: 4502,
              carNumber: "KqKV_",
              ownerId: "9KeaYbRLP",
            },
          ],
        },
      ],
    },
    {
      agencyName: "Carsova",
      cash: 72450,
      credit: 50000,
      agencyId: "oqQmsZoUo",
      cars: [
        {
          brand: "bmw",
          models: [
            {
              name: "7",
              year: 1999,
              price: 24700,
              carNumber: "sZrjp",
              ownerId: "oqQmsZoUo",
            },
            {
              name: "3",
              year: 2008,
              price: 54000,
              carNumber: "da88K",
              ownerId: "oqQmsZoUo",
            },
          ],
        },
        {
          brand: "toyota",
          models: [
            {
              name: "Prius",
              year: 2019,
              price: 124050,
              carNumber: "ZfbqH",
              ownerId: "oqQmsZoUo",
            },
            {
              name: "Hilux",
              year: 1996,
              price: 11540,
              carNumber: "AZJZ4",
              ownerId: "oqQmsZoUo",
            },
          ],
        },
      ],
    },
  ],

  // Search for a car agency by its name or ID.
  // @param {string} id - ID  of the agency
  // @return {object} - agency object if found, otherwise null
  getAgencyById: function (id) {
    return this.agencies.find((agency) => agency.agencyId === id);
  },

  // Retrieve all agencies' names.
  // @return {string[]} - Array of agency names
  getAllAgenciesName: function () {
    let names = [];
    this.agencies.forEach((agency) => {
      names.push(agency.agencyName);
    });
    return names;
  },

  // Add a new car to an agency's inventory.
  // @param {string} agencyId - The ID of the agency
  // @param {object} car - The car object to be added
  addCarToInventory: function (agencyId, car) {
    const agency = this.agencies.find((agency) => agency.agencyId === agencyId);
    if (agency) {
      car.models[0].ownerId = agency.agencyId;
      agency.cars.push(car);
    } else {
      console.log("Cannot add this to an agency inventory");
    }
  },

  // Remove a car from an agency's inventory.
  // @param {string} agencyId - The ID of the agency
  // @param {string} carNumber - The ID of the car to be removed
  removeCarFromInventory: function (agencyId, carNumber) {
    const agency = this.agencies.find((agency) => agency.agencyId === agencyId);
    if (agency) {
      index = 0;
      agency.cars.forEach((brand) => {
        index++;
        brand.models.forEach((car) => {
          if (car.carNumber == carNumber) {
            agency.cars.splice(index - 1, 1);
          }
        });
      });
    } else {
      console.log("Cannot remove this from an agency inventory");
    }
  },

  // Change the cash or credit of an agency.
  // @param {string} agencyName - The Name of the agency
  // @param {number} newcash - The amount of cash to be updated
  changeCash: function (newcash, agencyName) {
    let agency = this.agencies.find(
      (agency) => agency.agencyName === agencyName
    );
    agency.cash = newcash;
  },

  // Update the price of a specific car in an agency.
  // @param {string} carNumber - The ID of the car
  // @param {number} newPrice - The new price of the car
  updateCarPrice: function (newprice, carNumber) {
    this.agencies.forEach((agency) => {
      agency.cars.forEach((car) => {
        car.models.forEach((element) => {
          if (element.carNumber === carNumber) {
            element.price = newprice;
          }
        });
      });
    });
  },

  // Calculate and return the total revenue for a specific agency.
  // @param {string} agencyId - The ID of the agency
  // @return {number} - The total revenue of the agency
  getTotalAgencyRevenue: function (agencyId) {
    let sum = 0;
    let agency = this.agencies.find((agency) => agency.agencyId === agencyId);
    agency.cars.forEach((car) => {
      car.models.forEach((element) => {
        sum += parseInt(element.price);
      });
    });
    return sum + " $";
  },

  // Transfer a car from one agency to another.
  // @param {string} sourceAgencyId - The ID of the agency from where the car will be transferred
  // @param {string} destinationAgencyId - The ID of the agency to where the car will be transferred
  // @param {string} carNumber - The ID of the car to be transferred
  // @{log} - true if transferred successfully, false otherwise
  transferCarBetweenAgencies: function (
    carNumber,
    sourceAgencyId,
    destinationAgencyId
  ) {
    // Find the source agency and the destination agency
    console.log("Moving car:", carNumber);
    let sourceAgency;
    let destinationAgency;
    let movedCarBrand;

    // Find the source agency and the destination agency
    this.agencies.forEach((agency) => {
      if (agency.agencyId === sourceAgencyId) {
        sourceAgency = agency;
      }
      if (agency.agencyId === destinationAgencyId) {
        destinationAgency = agency;
      }
    });

    if (sourceAgency && destinationAgency) {
      console.log("Source agency:", sourceAgency.agencyName);
      console.log("Destination agency:", destinationAgency.agencyName);

      let movedCar;
      sourceAgency.cars.forEach((car) => {
        const carIndex = car.models.findIndex(
          (model) => model.carNumber === carNumber
        );
        if (carIndex !== -1) {
          // Remove the car from the source agency's inventory
          movedCar = car.models.splice(carIndex, 1)[0];
          movedCarBrand = car.brand;
        }
      });

      if (movedCar) {
        // Update the ownerId to the destination agency's ID
        movedCar.ownerId = destinationAgencyId;

        // Add the car to the destination agency's inventory
        destinationAgency.cars.forEach((car) => {
          if (car.brand === movedCarBrand) {
            car.models.push(movedCar);
          }
        });

        console.log("Car successfully moved to the destination agency.");
      } else {
        console.log("Car not found in the source agency's inventory.");
      }
    } else {
      console.log("Source or destination agency not found.");
    }
  },

  // Shows all cars available to purchase from all agencies.
  // @{log} - Logging the array of all cars avilable to purchase
  getAllCarsForPurchase: function () {
    const carsForPurchase = [];
    this.agencies.forEach((agency) => {
      agency.cars.forEach((car) => {
        carsForPurchase.push(car);
      });
    });
    console.log(JSON.stringify(carsForPurchase), null, 2);
  },

  // Serarch specific car in all agencies .
  // @param {year} year - The year of a car to buy
  // @param {price} price - The price of a car to buy
  // @param {brand} brand - The brand of a car to buy
  // @{log} - Logging the car that matches the criteria
  searchCars: function (year, price, brand) {
    console.log("Search Criteria:", year, price, brand);
    let matchingCars = [];

    this.agencies.forEach((agency) => {
      agency.cars.forEach((car) => {
        car.models.forEach((model) => {
          const isCarMatching =
            model.year === year && model.price <= price && car.brand === brand;
          if (isCarMatching) {
            matchingCars.push(model);
          }
        });
      });
    });
    console.log("Cars that meet the criteria are : ");
    console.log(matchingCars);
  },

  // Serarch the most expencive car in all agencies .
  // @{log} - Logging the most expencive car (Object)
  getMostExpensiveCar: function () {
    let mostExpencive = 0;
    let expenciveCar = {};
    this.agencies.forEach((agency) => {
      agency.cars.forEach((car) => {
        car.models.forEach((model) => {
          if (model.price > mostExpencive) {
            mostExpencive = model.price;
            expenciveCar = {
              brand: car.brand,
              model: model.name,
              year: model.year,
              carNumber: model.carNumber,
              ownerAgency: model.ownerId,
              price: model.price,
            };
          }
        });
      });
    });
    console.log("Most Expencive car is :");
    console.log(expenciveCar);
  },

  // Serarch the cheapest car in all agencies .
  // @{log} - Logging the cheapest car (Object)
  getCheapestCar: function () {
    let cheapest = Number.MAX_VALUE;
    let cheapestCar = {};
    this.agencies.forEach((agency) => {
      agency.cars.forEach((car) => {
        car.models.forEach((model) => {
          if (model.price < cheapest) {
            cheapest = model.price;
            cheapestCar = {
              brand: car.brand,
              model: model.name,
              year: model.year,
              carNumber: model.carNumber,
              ownerAgency: model.ownerId,
              price: model.price,
            };
          }
        });
      });
    });
    console.log("Cheapest car that has lowest price is :");
    console.log(cheapestCar);
  },

  // ---------------------------------------------------------------------------------------
  // This is customers data ant its methods
  customers: [
    {
      name: "Nadia Hosisy",
      id: "SugarNadia",
      cars: [
        {
          name: "Lamborghini",
          year: 2023,
          price: 2000000,
          carNumber: "Love999",
          ownerId: "SugarNadia",
        },
      ],
      cash: 5000000,
    },
    {
      name: "Lilah Goulding",
      id: "BGzHhjnE8",
      cars: [
        {
          name: "Corolla",
          year: 2013,
          price: 40570,
          carNumber: "16da1",
          ownerId: "BGzHhjnE8",
        },
      ],
      cash: 35000,
    },
    {
      name: "Ravi Murillo",
      id: "2RprZ1dbL",
      cars: [
        {
          name: "M5",
          year: 2019,
          price: 578054,
          carNumber: "WIh0U",
          ownerId: "2RprZ1dbL",
        },
        {
          name: "Spider",
          year: 2012,
          price: 81520,
          carNumber: "RLS4q",
          ownerId: "2RprZ1dbL",
        },
      ],
      cash: 278542,
    },
    {
      name: "Aleksander Carr",
      id: "pAuFtn_WA",
      cars: [
        {
          name: "Highlander",
          year: 2018,
          price: 214503,
          carNumber: "2WU_y",
          ownerId: "pAuFtn_WA",
        },
      ],
      cash: 125402,
    },
    {
      name: "Lana Edge",
      id: "cnTobUDy6",
      cars: [
        {
          name: "F250",
          year: 2020,
          price: 198500,
          carNumber: "Xxcy_",
          ownerId: "cnTobUDy6",
        },
        {
          name: "Hilux",
          year: 2005,
          price: 35005,
          carNumber: "VSCUj",
          ownerId: "cnTobUDy6",
        },
      ],
      cash: 7000,
    },
    {
      name: "Nikita Philip",
      id: "5x2tMcX4R",
      cars: [
        {
          name: "Impala",
          year: 2016,
          price: 65042,
          carNumber: "LKInp",
          ownerId: "5x2tMcX4R",
        },
      ],
      cash: 40541,
    },
    {
      name: "Bob Steel",
      id: "Wm6BkA1F0",
      cars: [],
      cash: 15732,
    },
    {
      name: "Will Reyes",
      id: "FQvNsEwLZ",
      cars: [
        { name: "X6", year: 2020, price: 966500, ownerId: "FQvNsEwLZ" },
        {
          name: "Land Cruiser",
          year: 2020,
          price: 336300,
          carNumber: "vaJvd",
          ownerId: "FQvNsEwLZ",
        },
        {
          name: "Romeo Julia",
          year: 2020,
          price: 275406,
          carNumber: "qLoYR",
          ownerId: "FQvNsEwLZ",
        },
        {
          name: "Explorer",
          year: 2020,
          price: 265200,
          carNumber: "tlGRq",
          ownerId: "FQvNsEwLZ",
        },
      ],
      cash: 1547242,
    },
  ],

  // Search for a customer by their  ID.
  // @param {string} idOrName - ID or name of the customer
  // @return {object} - customer object if found, otherwise null
  searchCustomerById: function (customerId) {
    let customer = this.customers.find(
      (customer) => customer.id === customerId
    );
    console.log(customer);
    return customer;
  },

  // Retrieve all customers' names.
  // @Log {string[]} - Array of customer names
  getAllCustomers: function () {
    let customerName = [];
    this.customers.forEach((customer) => {
      customerName.push(customer.name);
    });
    console.log(customerName);
  },

  // Change the cash of a customer.
  // @param {string} customerId - The ID of the customer
  // @param {number} newCash - The new cash value
  // @Log {Object} cutomer with updated cash
  changeCustomerCash: function (newCash, customerId) {
    let customer = this.customers.find(
      (customer) => customer.id === customerId
    );
    if (customer) {
      customer.cash = newCash;
      console.log(customer);
    }
  },

  // Calculate the total value of all cars owned by a specific customer.
  // @param {string} customerId - The ID of the customer
  // @Log {number} - The total value of cars owned by the customer
  getCustomerTotalCarValue: function (customerId) {
    let newCash = 0;
    let customer = this.customers.find(
      (customer) => customer.id === customerId
    );
    if (customer) {
      customer.cars.forEach((car) => {
        newCash += car.price;
      });
    }
    console.log(newCash + " $");
  },

  // This section has methods that applied on both agencies and customer data

  // Function that sells a car to a specific customer.
  // @param {string} carId - The ID of the car
  // @param {string} customerID - The ID of the customer
  // @Log {number} - The updatetd cash of both customer and agency
  // @return {number} - Tax after the transaction
  sellCar: function (carId, customerID) {
    console.log("Car Purchase Operation - Selling Car ");
    let carToSell;
    let brandCarToCell;
    let customerToBuy = {};
    let agencyThatSell = {};
    this.agencies.forEach((agency) => {
      agency.cars.forEach((car) => {
        car.models.forEach((model) => {
          if (model.carNumber === carId) {
            carToSell = model;
            brandCarToCell = car.brand;
            agencyThatSell = agency;
          }
        });
      });
    });
    if (!carToSell) {
      console.log("Car not exists in agencies!");
    } else {
    }
    console.log("Car to sell : ");
    console.log(carToSell);
    // check if customer has enough money, if no return and exit the function
    console.log("Customer to buy: ");
    customerToBuy = this.searchCustomerById(customerID);
    if (!(customerToBuy.cash >= carToSell.price)) {
      console.log("Customer has not enough cash to buy this car!");
      return;
    }
    // else - update the cash of customer and agency acordingly
    customerToBuy.cash -= carToSell.price;
    agencyThatSell.cash += carToSell.price;

    console.log(
      "The cash that customer have after the transaction is : " +
        customerToBuy.cash +
        " $"
    );
    console.log(
      "The cash that agency have after the transaction is : " +
        agencyThatSell.cash +
        " $"
    );
    console.log("The tax to pay is : " + carToSell.price * 0.17 + " $");
    return carToSell.price * 0.17;
  },

  // Function that calculates total revenue of all agencies in marketplace.
  // @Log {number} - The total revenue
  getTotalMarketRevenue: function () {
    let sumRevenue = 0;

    this.agencies.forEach((agency) => {
      agency.cars.forEach((car) => {
        car.models.forEach((model) => {
          sumRevenue += parseInt(model.price);
        });
      });
    });
    console.log("The total revenue of all agencies is : " + sumRevenue + " $");
  },

  // This is a Tax Authority Object;
  taxesAuthority: {
    totalTaxesPaid: 0,
    sumOfAllTransactions: 0,
    numberOfTransactions: 0,

    // Function that calculates and updates tax information.
    // @param {number} tax - The tax amount
    // @Log {number} - Logs all information on that updated after this function was used.
    calculateTaxInfo: function (tax) {
      this.totalTaxesPaid += tax;
      this.sumOfAllTransactions++;
      this.numberOfTransactions++;
      console.log("Tax Information:");
      console.log(`Total Taxes Paid: ${this.totalTaxesPaid}`);
      console.log(`Sum of All Transactions: ${this.sumOfAllTransactions}`);
      console.log(`Number of Transactions: ${this.numberOfTransactions}`);
    },
  },
};

// -------------------------------------------------------------------
// Agencies methods
//1
console.log("Ex - 1- Returns Agency Data by Given ID");
console.log(
  JSON.stringify(CarPurchaseManager.getAgencyById("oqQmsZoUo"), null, 2)
);

//2
console.log("Ex - 2- Returns All Agency names");
console.log(CarPurchaseManager.getAllAgenciesName());

//3
//This object to add
const nadiaCar = {
  brand: "Huyndai",
  models: [
    {
      name: "3",
      year: 2019,
      price: 110000,
      carNumber: "LoveDD",
      ownerId: "",
    },
  ],
};

CarPurchaseManager.addCarToInventory("Plyq5M5AZ", nadiaCar);
console.log(
  "Ex - 3 - Adding Nadia Car to the end of the cars array of given agency - check the last car it should be Huyndai "
);
console.log(
  JSON.stringify(CarPurchaseManager.getAgencyById("Plyq5M5AZ"), null, 2)
);

//4
CarPurchaseManager.removeCarFromInventory("Plyq5M5AZ", "LoveDD");
console.log(
  "Ex - 4 - Removing Nadia Car from the end of the cars array of given agency - check the last car Huyndai should be removed"
);
console.log(
  JSON.stringify(CarPurchaseManager.getAgencyById("Plyq5M5AZ"), null, 2)
);

//5
console.log("Ex - 5 - Changes the cash of given agency");
CarPurchaseManager.changeCash("99999999", "Best Deal");
console.log(
  JSON.stringify(CarPurchaseManager.getAgencyById("Plyq5M5AZ"), null, 2)
);

//6
console.log("Ex - 6 - Updates the price of given car ");
CarPurchaseManager.updateCarPrice("99999", "AZJZ0");
console.log(
  JSON.stringify(CarPurchaseManager.getAgencyById("Plyq5M5AZ"), null, 2)
);

//7
console.log("Ex - 7 - Shows total revenue of all agencies ");
console.log(CarPurchaseManager.getTotalAgencyRevenue("Plyq5M5AZ"));

//8
console.log("Ex - 8 - Moves car from one agency to another");
CarPurchaseManager.transferCarBetweenAgencies(
  "4Ixb0",
  "26_IPfHU1",
  "Plyq5M5AZ"
);
console.log(
  JSON.stringify(CarPurchaseManager.getAgencyById("26_IPfHU1"), null, 2)
);
console.log(
  JSON.stringify(CarPurchaseManager.getAgencyById("Plyq5M5AZ"), null, 2)
);

//9
console.log("Ex - 9 - Shows all cars to purchase ");
CarPurchaseManager.getAllCarsForPurchase();

//10
console.log("Ex - 10 - Search for car by given information ");
CarPurchaseManager.searchCars(2015, 500000, "bmw");

//11

console.log("Ex - 11 - Shows most expencive car ");
CarPurchaseManager.getMostExpensiveCar();

//12

console.log("Ex - 12 - Shows cheapest car ");
CarPurchaseManager.getCheapestCar();

//---------------------------------------------------------------------

//Custiomer methods

//13

console.log("Ex - 13 - Shows customer info by given ID ");
CarPurchaseManager.searchCustomerById("BGzHhjnE8");

//14
console.log("Ex - 14 - Shows all customers in database ");
CarPurchaseManager.getAllCustomers();

//15
console.log("Ex - 15 - Changes customer's cash by given customer ");
CarPurchaseManager.changeCustomerCash(0, "BGzHhjnE8");

//16
console.log("Ex - 16 - Shows value of all customer cars ");
CarPurchaseManager.getCustomerTotalCarValue("2RprZ1dbL");

//-------------------------------------------------------------------
//Car purchase operations
//17

console.log(
  "Ex - 17 - Selling the car to customer, updating the cash of customer and agency, and calculating the tax "
);
let taxToCalculate = CarPurchaseManager.sellCar("AZJZ0", "SugarNadia");
//
// Update Tax Authority
CarPurchaseManager.taxesAuthority.calculateTaxInfo(taxToCalculate);

//18
console.log("Ex - 18 - Shows the total market revenue if all cars were sold ");
CarPurchaseManager.getTotalMarketRevenue();
