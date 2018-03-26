import { expect } from 'chai';
import { deepify } from '../src/index';

describe('Test the library', () => {
  it('ES-ENV working for tests', () => {
    const arr = [1,2,3];
    const total = arr.reduce((prev, next) => prev + next, 0);
    expect(total).equal(6);
  });

  it('set a property', () => {
    const obj = deepify.set({}, 'person.last', 'ibarra');
    
  });
});
