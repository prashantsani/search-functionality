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
  expect( search_summaries("Some Query",3,[]) ).toBe('Incorrect JSON');
});

test('Use empty values in JSON', () => {
  expect( search_summaries("Some Query",3, 
      {
      "titles": [],
      "queries": [],
      "summaries": [],
      "authors": []
      }
    )
  ).toBe('Please add more values to JSON');
});

