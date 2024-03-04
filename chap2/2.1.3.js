const zero = f => x => x;

const add_1 = n => f => x => f(n(f)(x));

console.log(add_1(zero)(add_1(zero)(zero)));