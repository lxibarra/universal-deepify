import { expect } from 'chai';
import { deepifySet } from '../src/index';

describe('Test deepifySet', () => {
  it('ES-ENV working for tests', () => {
    const arr = [1,2,3];
    const total = arr.reduce((prev, next) => prev + next, 0);
    expect(total).equal(6);
  });

  it('Passing nothing will return the same object', () => {
      const obj = { a:100 };
      const obj2 = deepifySet(obj);
      expect(obj2).equal(obj);
  });

  it('newely created object is not undefined', ()=> {
    const obj = deepifySet({}, 'person.last', 'ibarra');
    expect(obj.person).not.equal(undefined);
  });

  it('set a person.last = ibarra', () => {
    const obj = deepifySet({}, 'person.last', 'ibarra');
    expect(obj.person.last).equal('ibarra');
  });

  it('set deep prop country.person.last.phone = 42423432', () => {
    const obj = deepifySet({}, 'country.person.last.phone', '42423432');
    expect(obj.country.person.last.phone).equal('42423432');
  });

  it('set deep with special chars person.[$]sse = 1', () => {
    const obj = deepifySet({}, 'person.[]sse', '1');
    expect(obj.person['[]sse']).equal('1');
  });

  it('set array prop person.phones[] with item Hello in position 0 ', () => {
    const obj = deepifySet({}, 'person.phones[]', 'hello');
    expect(obj.person.phones instanceof Array).equal(true);
    expect(obj.person.phones.length).equal(1);
    expect(obj.person.phones[0]).equal('hello');
  });

  it('setting array prop person.phones[3] with item 423432 results in array of 1 in length with item value 423432', () => {
    const obj = deepifySet({}, 'person.phones[3]', '423432');
    expect(obj.person.phones instanceof Array).equal(true);
    expect(obj.person.phones.length).equal(1);
    expect(obj.person.phones[0]).equal('423432');
    const obj2 = deepifySet(obj, 'person.phones[1]', 'wow');
    expect(obj2.person.phones[0]).equal('423432');
    expect(obj2.person.phones[1]).equal('wow');
  });

  it('set a prop to a number and keep other existing props', ()=> {
    const obj = { a:10, b:[1,2,3,4,5] };
    const obj2 = deepifySet(obj, 'price', 100);
    expect(obj2.a).equal(10);
    expect(obj2.b instanceof Array).equal(true);
    expect(typeof obj2.price === 'number').equal(true);
    expect(obj2.price).equal(100);
  });


  describe('Test nested objects in arrays', ()=> {
      it('set deep as person.assets[0].houseId = 1000', ()=> {
        const obj = deepifySet({}, 'person.assets[0].houseId', 1000);
        expect(obj.person.assets instanceof Array).equal(true);
        expect(typeof obj.person.assets[0] === 'object').equal(true);
        expect(obj.person.assets.length).equal(1);
        expect(obj.person.assets[0].houseId).equal(1000);
      });

      it('set deep as person.assets[].msg = "cheers"', ()=> {
        const obj = deepifySet({}, 'person.assets[].msg', 'cheers');
        expect(obj.person.assets instanceof Array).equal(true);
        expect(typeof obj.person.assets[0] === 'object').equal(true);
        expect(obj.person.assets.length).equal(1);
        expect(obj.person.assets[0].msg).equal('cheers');
      });

      it('set deep as person.assets[100].msg = "hello im an array of length 1"', ()=> {
        const obj = deepifySet({}, 'person.assets[100].msg', 'hello im an array of length 1');
        expect(obj.person.assets instanceof Array).equal(true);
        expect(typeof obj.person.assets[0] === 'object').equal(true);
        expect(obj.person.assets.length).equal(1);
        expect(obj.person.assets[0].msg).equal('hello im an array of length 1');
      });

      it('Set an array of 10 and insert value in position 5. person.assets[10]', () => {
        const obj = deepifySet({}, 'person.assets[]');
        for(let c = 0; c<10;  c++) {
            obj.person.assets.push(c+1);
        }
        expect(obj.person.assets.length).equal(10);
        const obj2 = deepifySet(obj, 'person.assets[4]', 5.5);
        expect(obj2.person.assets[4]).equal(5.5);
      });

      it('Deep object created person.prop1.prop2.prop3.value = 100', () => {
        const obj = deepifySet({}, 'person.prop1.prop2.prop3');
        expect(obj.person.prop1.prop2.hasOwnProperty('prop3')).equal(true);
        const obj2 = deepifySet(obj, 'person.prop1.prop2.prop3', { value: 100 });
        expect(obj2.person.prop1.prop2.prop3.value).equal(100);
      });

      it('Deep object created person.cars[].style.color = "red" && person.cars[0].price = 1000', () => {
        const obj = deepifySet({}, 'person.cars[].style.color', 'red');
        expect(obj.person.cars instanceof Array).equal(true);
        expect(typeof obj.person.cars[0].style).equal('object');
        expect(obj.person.cars[0].style.color).equal('red');
        const obj2 = deepifySet(obj, 'person.cars[0].price', 1000);
        expect(obj2.person.cars[0].price).equal(1000);
        expect(obj2.person.cars[0].style.color).equal('red');

      });

  });

});
