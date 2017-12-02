const day2 = require('../day2');

QUnit.test("Example part 1", function (assert) {
    let input = [
        "5 1 9 5",
        "7 5 3",
        "2 4 6 8"
    ]

    assert.equal(day2.part1(input), 18, "Passed!");
});

QUnit.test("Example part 2", function (assert) {
    let input = [
        "5 9 2 8",
        "9 4 7 3",
        "3 8 6 5"
    ]
    assert.equal(day2.part2(input), 9, "Passed!");
});
