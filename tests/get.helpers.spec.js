import { getProperty } from '../src/get/get.helpers';

describe('Test deepify get helpers', ()=> {
  it('Get prop from undefined/null will always return null', ()=> {
    expect(getProperty(null, 'person')).equal(null);
    expect(getProperty(undefined, 'person')).equal(null);
  });

  it('Get non existent prop will return undefined from {} get person', () => {
    expect(getProperty({}, 'person')).equal(undefined);
  });

  it('Get a property from object { person:"Ricardo" } = "Ricardo"', ()=> {
    expect(getProperty({ person:'Ricardo' }, 'person')).equal('Ricardo');
  });

  it('Getting a nested non existen prop will return undefined instead of throwing an exeception', ()=> {
    expect(getProperty({ }, 'person.lastName')).equal(undefined);
    expect(getProperty({ person:{ lastName:'Ibarra' } }, 'person.lastName')).equal('Ibarra');
    expect(getProperty({ person:{ lastName:'Ibarra' } }, 'person.lastName.to.be.undefined')).equal(undefined);
  });

  it('Test nested array object prop person.assets[0].name', () => {
    // i left here 
  });

});
