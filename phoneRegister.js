'use strict';

module.exports = class PhoneRegister {
  constructor(data) {
    if (!data) throw new Error("phone data missing");
    this.phoneRegister = data;
    //this.phoneRegister = [...data];
  } // end of constructor
  getTypes() {
    const typeArray = [];
    for (let person of this.phoneRegister) {
      if (person.phones) {
        for (let phone of person.phones) {
          if (phone.type && phone.type.length > 0) {
            if (!typeArray.includes(phone.type)) {
              typeArray.push(phone.type);
            }
          }
        }
      }
    }
    return typeArray;
  } // End of getTypes

  getPersonsNumberByType(firstname, lastname, type) {
    if (firstname && lastname && type) {
      const numbersFound = [];
      for (let person of this.phoneRegister) {
        if (person.firstname === firstname && person.lastname === lastname) {
          for (let phone of person.phones) {
            if (phone.type === type) {
              numbersFound.push(phone.number);
            }
          }
        }
      }
      return numbersFound;
    } else {
      throw new Error("missing parameter");
    }
  } // end of getPersonsNumberByType

  getAllNumbersByType(type) {
    if (type) {
      const numbersFound = [];
      for (let person of this.phoneRegister) {
        for (let phone of person.phones) {
          if (phone.type === type) {
            numbersFound.push({
              firstname: person.firstname,
              lastname: person.lastname,
              number: {
                type: phone.type,
                tel: phone.number,
              },
            });
          }
        }
      }
      return numbersFound;
    } else {
      throw new Error("missing parameter");
    }
  } // end of getAllNumbersByType

  getAllNumbers() {
    const found = [];
    for (let person of this.phoneRegister) {
      if (person.phones && person.phones.length > 0) {
        found.push(person);
      }
    }
    return found;
  } // end of getAllNumbers

  getName(givenNumber) {
    let found = null;
    for (let person of this.phoneRegister) {
      if (person.phones && person.phones.length > 0) {
        for (let phone of person.phones) {
          if (phone.number === givenNumber) {
            found = { firstname: person.firstname, lastname: person.lastname };
          }
        }
      }
    }
    return found;
  }

  // getName(givenNumber) {
  //   for (let person of this.phoneRegister) {
  //     for (let phone of person.phones) {
  //       if (phone.number === givenNumber) {
  //         return {
  //           firstname: person.firstname,
  //           lastname: person.lastname,
  //         };
  //       }
  //     }
  //   }
  //   return null;
  // } //end of getName by Ilkkas way
}; // end of class
