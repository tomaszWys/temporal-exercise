import { describe, it } from 'mocha';
import assert from 'assert';
import { filterData } from '../common/filter-data.helper';
import { OPERATOR } from '../domain/rule.interface';

const data = [
  {
    name: 'Luke Skywalker',
    height: '172',
    mass: '77',
    hair_color: 'blond',
    skin_color: 'fair',
    eye_color: 'blue',
    birth_year: '19BBY',
    gender: 'male',
    homeworld: 'https://swapi.dev/api/planets/1/',
    films: [
      'https://swapi.dev/api/films/1/',
      'https://swapi.dev/api/films/2/',
      'https://swapi.dev/api/films/3/',
      'https://swapi.dev/api/films/6/',
    ],
    species: [],
    vehicles: ['https://swapi.dev/api/vehicles/14/', 'https://swapi.dev/api/vehicles/30/'],
    starships: ['https://swapi.dev/api/starships/12/', 'https://swapi.dev/api/starships/22/'],
    created: '2014-12-09T13:50:51.644000Z',
    edited: '2014-12-20T21:17:56.891000Z',
    url: 'https://swapi.dev/api/people/1/',
  },
  {
    name: 'C-3PO',
    height: '167',
    mass: '75',
    hair_color: 'n/a',
    skin_color: 'gold',
    eye_color: 'yellow',
    birth_year: '112BBY',
    gender: 'n/a',
    homeworld: 'https://swapi.dev/api/planets/1/',
    films: [
      'https://swapi.dev/api/films/1/',
      'https://swapi.dev/api/films/2/',
      'https://swapi.dev/api/films/3/',
      'https://swapi.dev/api/films/4/',
      'https://swapi.dev/api/films/5/',
      'https://swapi.dev/api/films/6/',
    ],
    species: ['https://swapi.dev/api/species/2/'],
    vehicles: [],
    starships: [],
    created: '2014-12-10T15:10:51.357000Z',
    edited: '2014-12-20T21:17:50.309000Z',
    url: 'https://swapi.dev/api/people/2/',
  },
];

describe('filter data', async () => {
  it('returns filtered data by regex', async () => {
    const results = filterData(data, [
      {
        propertyName: 'name',
        operator: OPERATOR.REGEX,
        value: '\\d',
      },
    ]);
    assert.equal(results[0].name, 'C-3PO');
  });
  it('returns empty array when regex operator rule not met', async () => {
    const results = filterData(data, [
      {
        propertyName: 'name',
        operator: OPERATOR.REGEX,
        value: '^TEST',
      },
    ]);
    assert.equal(results.length, 0);
  });
  it('returns filtered data by equal operator', async () => {
    const results = filterData(data, [
      {
        propertyName: 'eye_color',
        operator: OPERATOR.EQUAL,
        value: 'blue',
      },
    ]);
    assert.equal(results[0].name, 'Luke Skywalker');
  });
});
