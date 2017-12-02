const day2 = require('../day2');

QUnit.test("Example part 1", function (assert) {
    let input = [
        "5 1 9 5",
        "7 5 3",
        "2 4 6 8"
    ]

    assert.ok(day2.part1(input) == 18, "Passed!");
});
