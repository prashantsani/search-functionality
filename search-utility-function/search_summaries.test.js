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

test('Relative Search for "is your problems"', () => {
  expect( search_summaries("is your problems",5, data) ).toMatchObject([
    {
      "id": 0,
      "summary": "The Book in Three Sentences: Practicing meditation and mindfulness will make you at least 10 percent happier. Being mindful doesn\u2019t change the problems in your life, but mindfulness does help you respond to your problems rather than react to them. Mindfulness helps you realize that striving for success is fine as long as you accept that the outcome is outside your control."
    },
    {
      "id": 7,
      "summary": "The Book in Three Sentences: Everything in life is an invention. If you choose to look at your life in a new way, then suddenly your problems fade away. One of the best ways to do this is to focus on the possibilities surrounding you in any situation rather than slipping into the default mode of measuring and comparing your life to others."
    },
    {
      "id": 48,
      "summary": "The Book in Three Sentences:\u00a0Finding something important and meaningful in your life is the most productive use of your time and energy. This is true because every life has problems associated with it and finding meaning in your life will help you sustain the effort needed to overcome the particular problems you face. Thus, we can say that the key to living a good life is not giving a fuck about more things, but rather, giving a fuck only about the things that align with your personal values."
    },
    {
      "id": 52,
      "summary": "The Book in Three Sentences: Behavioral problems, not technical skills, are what separate the great from the near great. Incredible results can come from practicing basic behaviors like saying thank you, listening well, thinking before you speak, and apologizing for your mistakes. The first step to change is wanting to change."
    },
  ]);
});

