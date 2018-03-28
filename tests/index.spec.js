import { expect } from 'chai';
import { deepify } from '../src/index';

describe('Test deepify', () => {
  it('ES-ENV working for tests', () => {
    const arr = [1,2,3];
    const total = arr.reduce((prev, next) => prev + next, 0);
    expect(total).equal(6);
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

  it('set array prop person.phones[2] with item 423432', () => {
    const obj = deepify.set({}, 'person.phones[2]', '423432');
    //expect(obj.person.phones instanceof Array).equal(true);
    //expect(obj.person.phones.length).equal(3);
    //expect(obj.person.phones[0]).equal('hello');
  });
});
