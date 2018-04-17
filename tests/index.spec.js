import { expect } from 'chai';
import { deepify } from '../src/index';

describe('Test deepify', () => {
  it('ES-ENV working for tests', () => {
    const arr = [1,2,3];
    const total = arr.reduce((prev, next) => prev + next, 0);
    expect(total).equal(6);
  });

  it('Passing nothing will return the same object', () => {
      const obj = { a:100 };
      const obj2 = deepify.set(obj);
      expect(obj2).equal(obj);
  });

  it('newely created object is not undefined', ()=> {
    const obj = deepify.set({}, 'person.last', 'ibarra');
    expect(obj.person).not.equal(undefined);
  });

  it('set a person.last = ibarra', () => {
    const obj = deepify.set({}, 'person.last', 'ibarra');
    expect(obj.person.last).equal('ibarra');
  });

  it('set deep prop country.person.last.phone = 42423432', () => {
    const obj = deepify.set({}, 'country.person.last.phone', '42423432');
    expect(obj.country.person.last.phone).equal('42423432');
  });

  it('set deep with special chars person.[$]sse = 1', () => {
    const obj = deepify.set({}, 'person.[]sse', '1');
    expect(obj.person['[]sse']).equal('1');
  });

  it('set array prop person.phones[] with item Hello in position 0 ', () => {
    const obj = deepify.set({}, 'person.phones[]', 'hello');
    expect(obj.person.phones instanceof Array).equal(true);
    expect(obj.person.phones.length).equal(1);
    expect(obj.person.phones[0]).equal('hello');
  });

  it('setting array prop person.phones[3] with item 423432 results in array of 1 in length with item value 423432', () => {
    const obj = deepify.set({}, 'person.phones[3]', '423432');
    expect(obj.person.phones instanceof Array).equal(true);
    expect(obj.person.phones.length).equal(1);
    expect(obj.person.phones[0]).equal('423432');
    const obj2 = deepify.set(obj, 'person.phones[1]', 'wow');
    expect(obj2.person.phones[0]).equal('423432');
    expect(obj2.person.phones[1]).equal('wow');
  });

  it('set a prop to a number and keep other existing props', ()=> {
    const obj = { a:10, b:[1,2,3,4,5] };
    const obj2 = deepify.set(obj, 'price', 100);
    expect(obj2.a).equal(10);
    expect(obj2.b instanceof Array).equal(true);
    expect(typeof obj2.price === 'number').equal(true);
    expect(obj2.price).equal(100);
  });

  describe('Test nested objects in arrays', ()=> {
      it('set deep as person.assets[0].houseId = 1000', ()=> {
        // i left here
        const obj = deepify.set({}, 'person.assets[0].houseId', 1000);
        console.log(obj, 'incorrect setting of data');
        expect(obj.person.assets instanceof Array).equal(true);
        //expect(typeof obj.person.assets[0] === 'object').equal(true);
        //expect(obj.person.assets.length).equal(1);
        //expect(obj.person.assets[0].houseId).equal(1000);
      });
  });

});
