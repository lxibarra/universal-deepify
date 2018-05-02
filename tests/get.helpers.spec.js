import { getProperty } from '../src/get/get.helpers';

describe('Test deepify get helpers', ()=> {
  it('get prop from undefined/null will always return null', ()=> {
    expect(getProperty(null, 'person')).equal(null);
    expect(getProperty(undefined, 'person')).equal(null);
  });

  it('get non existent prop will return undefined from {} get person', () => {
    expect(getProperty({}, 'person')).equal(undefined);
  });

  it('get a property from object { person:"Ricardo" } = "Ricardo"', ()=> {
    expect(getProperty({ person:'Ricardo' }, 'person')).equal('Ricardo');
  });

  it('getting a nested non existen prop will return undefined instead of throwing an exeception', ()=> {
    // i left here make sure you can get nested props like so person.lastName.from if it exists return value otherwise
    // return undefined but not exception throwing.
    expect(getProperty({ }, 'person')).equal('Ricardo');
  });

});
