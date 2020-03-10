const search_summaries = require('./search-utility-function.js');
const data = require('./data.json');

test('Enter an empty string', () => {
  expect( search_summaries("",3, data) ).toBe('Please enter a search query');
});

test('Enter a null object instead of string', () => {
  expect( search_summaries(null,3, data) ).toBe('Please enter a search query');
});

test('Enter undefined instead of a string', () => {
  expect( search_summaries(null,3, data) ).toBe('Please enter a search query');
});

test('Enter an object instead of a number (number of items)', () => {
  expect( search_summaries("Some Query",{}, data) ).toBe('Please enter number of items in number');
});

test('Enter null instead of a number (number of items)', () => {
  expect( search_summaries("Some Query",null, data) ).toBe('Please enter number of items in number');
});

test('Enter undefined instead of a number (number of items)', () => {
  expect( search_summaries("Some Query",undefined, data) ).toBe('Please enter number of items in number');
});

test('Use an empty array as JSON input', () => {
  expect( search_summaries("Some Query",8,[]) ).toBe('Incorrect JSON');
});

test('Use empty values in JSON', () => {
  expect( search_summaries("Some Query",7, 
      {
      "titles": [],
      "queries": [],
      "summaries": [],
      "authors": []
      }
    )
  ).toBe('Please add more values to JSON');
});


test('Some Value that would generally never be present in data', () => {
  expect( search_summaries("dsa~dks$ahgdkasbhd&&3:;2++=sa#ehb393$^29832(@",3, data) ).toBe('No items found');
});

test('Basic Test --> Searching for "The 10X Rule" ', () => {
  expect( search_summaries("The 10X Rule",5, data) ).toMatchObject([
    {
      "id": 1,
      "summary": "The Book in Three Sentences: The 10X Rule says that 1) you should set targets for yourself that are 10X greater than what you believe you can achieve and 2) you should take actions that are 10X greater than what you believe are necessary to achieve your goals. The biggest mistake most people make in life is not setting goals high enough. Taking massive action is the only way to fulfill your true potential."
    }
  ]);
});
