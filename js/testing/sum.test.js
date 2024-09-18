const sum = require('./sum');
test('Adds 1+1 to qual 2', ()=> {
    expect(sum(1, 1)).toEqual(2)
});
