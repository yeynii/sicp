/* 1.30 */

// 합산 - 반복적
function sum(term, a, next, b){
    function iter(a, result){
        return a > b ? result : iter(next(a),result + term(a));
    }
    return iter(a, 0);
}

/* 1.31 */

// 승산 - 선형적
function product(term, a, next, b){
    return a > b ? 1 : term(a) * product(term, next(a), next, b)
}

// 승산 - 반복적
function product_iter(term, a, next, b){
    function iter(a, result){
        return a > b ? result : iter(next(a), result * term(a));
    }
    return iter(a, 1);
}


// 고차함수로 정의하는 factorial
function factorial(n) {
    return product(x => x, 1, x => x + 1, n);
}

// pi의 근사값
console.log(4 * product((x) => 2*x * 2*(x + 1) / (2*x + 1) ** 2, 1, x => x + 1,1000))

/* 1.32 */

// 누산 - 선형적
function accumulate(combiner, null_value, term, a, next, b){
    return combiner(term(a), next(a) > b ? null_value : accumulate(combiner, null_value, term, next(a), next, b));
}

// 누산 - 반복적
function accumulate_iter(combiner, null_value, term, a, next, b){
    function iter(a, result){
        return a > b ? result : iter(next(a), combiner(result, term(a)))
    }
    return iter(a, null_value)
}

// 합산
accumulate((a,b) => a + b, 0, x=>x**2, 1, x => x+1, 3);

// 승산
accumulate((a,b) => a * b, 1, x=>x**2, 1, x => x+1, 3);

