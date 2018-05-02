import { expect } from 'chai';
import { isMutable, deepCopy } from '../src/set.helpers';

describe('Test deepify set helpers', () => {
  it('Test isMutable', () => {
    expect(isMutable(undefined, {})).equal(false);
    expect(isMutable({})).equal(false);
    expect(isMutable({}, true)).equal(false);
    expect(isMutable(true, { mutate: false })).equal(true);
    expect(isMutable(32, { mutate: true })).equal(true);
    expect(isMutable(undefined, { mutate: true })).equal(true);
    expect(isMutable(undefined, { mutate: false })).equal(false);
  });

  it('Test deepCopy', () => {
    const originalObject = { a: 'Hellow Dev i hope you are having a great day 😸' };
    expect(originalObject === deepCopy(originalObject)).equal(false);
    expect(deepCopy(undefined)).equal(null);
    expect(deepCopy(null)).equal(null);
    const newCopy = deepCopy(originalObject);
    expect(newCopy).not.equal(null);
    originalObject.a = 'New String';
    expect(deepCopy(newCopy).a).equal('Hellow Dev i hope you are having a great day 😸');
    const arr = [1,2,3];
    expect(deepCopy(arr)).not.equal(arr);
    expect(deepCopy(arr)).not.equal(null);
    expect(deepCopy(arr).length).equal(3);

  });
});
