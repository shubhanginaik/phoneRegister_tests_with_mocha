'use strict';

const expect = require('chai').expect;

const PhoneRegister = require('../phoneRegister');

const phones = require('../phones.json');

describe('testing constructor', function(){
    it('missing parameter throws an exception', function(){
        expect(function(){
            new PhoneRegister()
        }).to.throw('phone data missing')
    });
    it('using the default data', function(){
        const phoneRegister= new PhoneRegister(phones)
        // see comment in implementation
        //expect(phoneRegister.phoneRegister).to.equal(phones)
        expect(phoneRegister.phoneRegister).to.equal(phones)
    })
})
describe('test getTypes ', function(){
    it('using default data', function(){
        const phoneRegister = new PhoneRegister(phones);
        const expected=['home','work','mobile'];
        expect(phoneRegister.getTypes()).to.deep.equal(expected); // deep equal allows object in any where in the memory, but with equal it points to the same address of memmory.
    })
})

describe('testing getPersonsNumberByType', function() {
    const phoneRegister = new PhoneRegister(phones);

    it('method getPersonsNumberByType id defined', function(){
        expect(phoneRegister).to.have.a.property('getPersonsNumberByType')
    });

    const testCases =[
        {firstname:'Leila',lastname:'Hokki',type:'work',result:['87655443','05040302']},
        {firstname:'Leila',lastname:'Hokki',type:'z',result:[]},
        {firstname:'Matt',lastname:'River',type:'mobile',result:['01234567']}
    ];
    testCases.forEach(function(tc){
        it(`getPersonsNumberByType(${tc.firstname}, ${tc.lastname},${tc.type} returns [${tc.result}]`,function(){
            expect(phoneRegister.getPersonsNumberByType(tc.firstname,tc.lastname,tc.type)).to.deep.equal(tc.result);
        })
    })
})


