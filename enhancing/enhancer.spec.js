const { succeed, fail, repair, get } = require('./enhancer.js');
// test away!

it('accepts an object and returns a new item with the durability restored to 100', () =>{
  expect (repair(20).durability).toBe(100);
  expect (repair(99).durability).toBe(100);
  expect (repair(0).durability).toBe(100);
  })