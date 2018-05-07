import { getProperty } from '../src/get/get.helpers';

describe('Test deepify get helpers', ()=> {
  let testObject;
  let wierdObject;

  beforeEach(() => {
    testObject = {
      person:{
        name: 'Ricardo',
        lastName: 'Ibarra',
        assets:[
          {
            type: 'Car'
          },
          {
            type: 'Boat',
            metadata:[
              {
                brand: 'xyz',
                year: '2012'
              },
              {
                serial: 'xxx-xxx-xxx',
                price: 1000
              }
            ]
          }
        ]
      }
    };

    wierdObject = {
      ['this']: {
        'prop[0]': {
          'prop\s': [
            {
              'msg': 'this should be a challenge to read'
            }
          ]
        },
        prop: [
          'a',
          'b'
        ]
      }
    };
  });

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

  it('Test nested array object prop person.assets[0].type === "Car"', () => {
    expect(getProperty(testObject, 'person.assets[0].type')).equal('Car');
  });

  it('no errors are thrown when trying to get a deep non-existent nested array prop: person.assets[0].type[10].someprop', () => {
    expect(getProperty(testObject, 'person.assets[0].type[10].someprop')).equal(undefined);
  });

  it('I can nicely get a very nested prop person.assets[1].metadata[1].price = 1000', () => {
    expect(getProperty(testObject, 'person.assets[1].metadata[1].price')).equal(1000);
  });

  it('get nested prop with wierd names works as expected: this.prop[0].prop\s[0].msg = "this should be a challenge to read"', () => {
    expect(getProperty(wierdObject, 'this.prop[0].prop\s') instanceof Array).equal(true);
    expect(getProperty(wierdObject, 'this.prop[0].prop\s[0].msg')).equal('this should be a challenge to read');
  });

  it('Having confusing name props resolves correctly this.prop[0] = "a", using this.prop[0][] = "a"', () => {
    expect(getProperty(wierdObject, 'this.prop[0][]')).equal('a');
  });

});
