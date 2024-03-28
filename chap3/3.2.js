function pair(x,y) { return [x,y] }
function head(pair) { return pair[0] }
function tail(pair) { return pair[1] }

function stream_tail(stream) {
    return tail(stream)();
}

function stream_filter(pred, stream) {
    return stream === null
        ? null
        : pred(head(stream))
            ? pair(head(stream),
                () => stream_filter(pred, stream_tail(stream)))
            : stream_filter(pred, stream_tail(stream));
}

function is_divisible(x, y) { return x % y === 0; }

function integers_starting_from(n) {
    return pair(n, () => integers_starting_from(n + 1));
}

function sieve(stream) {
    return pair(head(stream),
        () => sieve(stream_filter(
            x => ! is_divisible(x, head(stream)),
            stream_tail(stream))));
}
const primes = sieve(integers_starting_from(2));

function run_stream(primes, number){
    function iter(primes, count){
        console.log(head(primes));
        if(count === 0){
            return null;
        } else {
            return iter(stream_tail(primes), count - 1);
        }
    }
    return iter(primes, number);
}

run_stream(primes, 50);