import j = require('jfp');

function testFn() {}

j(testFn);

j.add(5, 6);
j.always(true)();
j.and(true, false) === false;
j.apply(testFn, [1, 2, 3]);
j.between([3, 7], 5) === true;
j.call(testFn, 1, 2, 3);
j.clone({});
j.compact([]);
j.compose(
    testFn,
    testFn,
)();
j.composePredicate(j.isZero)(0);
j.concat([], []);
j.conj('foo', []);
j.cons('foo', []);
j.contains('foo', []);
j.copyArray([]);
j.countArguments(testFn);
j.curry(testFn);
j.deref('foo.bar.baz', {});
j.difference([], []);
j.divide(6, 3);
j.drop(0, [1, 2, 3]);
j.dropFirst([1, 2, 3]);
j.dropLast([1, 2, 3]);
j.dropUntil(j.isZero, []);
j.fac(5);
j.filter(j.isEven, [1, 2, 3, 4, 5]);
j.find(j.isEven, []);
j.first([1, 2, 3]);
j.hasFirst([]);
j.identity(5);
j.inc(5);
j.init([]);
j.intersect([], []);
j.isArray([]);
j.isBoolean(true);
j.isEmptyString('bar');
j.isEven(3);
j.isFunction(testFn);
j.isInt(9.2);
j.isMultipleOf(5, 35);
j.isNegative(938);
j.isNonNegative(3);
j.isNonPositive(-99);
j.isNonZero(0);
j.isNull('not null');
j.isNumber({});
j.isNumeric('5.78');
j.isObject({});
j.isOdd(6);
j.isPair([]);
j.isPositive(9);
j.isPrimitive({});
j.isSingle([]);
j.isString('Yup');
j.isTriple([1, 2, 3]);
j.isTruthy(1);
j.isTuple([]);
j.isType('number', 5);
j.isUndefined(undefined);
j.isZero(100);
j.last([1, 2, 3]);
j.lastIndex([]);
j.leq(0, 6);
j.less(9, 10);
j.map(j.partial(j.add, 1), [1, 2, 3]);
j.max(5, 6);
j.maybe(null);
j.maybeType('string', null);
j.merge([], []);
j.min(5, 6);
j.mod(4, 3);
j.modulo(4, 3);
j.multiPartition(j.equal, [1, 2], [1, 2, 1, 2]);
j.multiply(1, 2);
j.not(true);
j.nth(5, [1, 2, 3, 4, 5, 6, 7]);
j.numberOf(j.isEven, [1, 2, 3, 4]);
j.or(true, false);
j.partial(testFn, 'foo')();
j.partialReverse(testFn, 1, 2)();
j.partition(j.isEven, [1, 2, 3, 4]);
j.pick('foo', { foo: 'bar' });
j.pipeline('foo', testFn, testFn);
j.pluck('foo', { foo: 'bar' });
j.pluckKeys(['foo'], { foo: 'bar' });
j.range(5);
j.range(5, 7);
j.rcompose(testFn, testFn)();
j.recur(testFn, 1, 2, 3);
j.reduce(testFn, [1, 2, 3], []);
j.repeat(10, testFn);
j.rest([1, 2, 3, 4]);
j.reverseArgs(testFn)();
j.rpartial(testFn, 1, 2, 3);
j.shortCircuit('foo', testFn, 'bar');
j.slice(0, [1, 2, 3]);
j.slice(0, [1, 2, 3], 1);
j.some(j.isEven, [1, 2, 3]);
j.sort([1, 2, 3, 4], function() {
    return 0;
});
j.splitPartial(testFn, [], [])();
j.subtract(6, 5);
j.symmetricDifference([], []);
j.take(5, [1, 2, 3, 4, 5, 6]);
j.takeUntil(j.isEven, [1, 3, 5, 6, 7]);
j.times(10, 'foo');
j.toDec('10');
j.toValues({ foo: 'bar' });
j.transform([['foo', 'bar']], {});
j.truncate(5.7);
j.union([], []);
j.unique([]);
j.when(true, testFn);
j.xor(true, true);
j.zip([], []);
