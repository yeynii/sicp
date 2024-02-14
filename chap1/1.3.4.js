/* 1.40  */
const tolerance = 0.00001;
function fixed_point(f, first_guess){
    function close_enough(x,y) {
        return Math.abs(x-y) < tolerance;
    }
    function try_with(guess) {
        const next = f(guess);
        return close_enough(guess, next) ? next : try_with(next)
    }
    return try_with(first_guess);
}

const dx = 0.00001;
const deriv = f => x => (f(x + dx) - f(x)) / dx;
const newton_transform = g => x => (x - g(x) / deriv(g)(x));

const newton_method = (g, guess) => fixed_point(newton_transform(g), guess)

const cubic = (a, b, c) => x => x**3 + a*x**2 + b*x + c;

console.log(newton_method(cubic(1, 2, 3), 1))
console.log(cubic(1,2,3)(-1.2756))
/* 1.41 */
const double = f => x => f(f(x))
const inc = x => x + 1

console.log(double(double(double))(inc)(5))

/* 1.42 */
const compose = (f, g) => x => f(g(x))

<<<<<<< HEAD
console.log(compose(x => x ** 2, x => x + 1)(6))
=======
console.log(compose(x => x ** 2, x => x + 1)(6))

const repeated = (f, n) => n > 1 ? repeated(compose(f, f), n - 1) : f;

console.log(repeated(x => x ** 2, 2)(5))
>>>>>>> ec8be99 (feat: 1.35, 1.40 ~ 1.42 풀이)
