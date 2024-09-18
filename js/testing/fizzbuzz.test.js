const fizzBuzz= require('./fizzbuzz');
describe('function fizzbuzz', () => {
    it('should be a function',()=>{
        expect(typeof fizzBuzz).toEqual('function');
    });
    it('should return if not div by 3 or 5', () => {
        expect(fizzBuzz(1)).toEqual(1);
        expect(fizzBuzz(13)).toEqual(13);
        expect(fizzBuzz(17)).toEqual(17);
    })
    it('shoud return fizz if div by 3', ()=>{
        expect(fizzBuzz(6)).toEqual('Fizz');
    });
    it('shoud return fizz if div by 3', ()=>{
        expect(fizzBuzz(6)).toEqual('Fizz');
        expect(fizzBuzz(3)).toEqual('Fizz');
        expect(fizzBuzz(12)).toEqual('Fizz');
    });
    it('shoud return fizz if div by 5', ()=>{
        expect(fizzBuzz(5)).toEqual('Buzz');
        expect(fizzBuzz(10)).toEqual('Buzz');
        expect(fizzBuzz(20)).toEqual('Buzz');
    });
})
