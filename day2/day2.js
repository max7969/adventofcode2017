module.exports = {
    part1: function (input) {
        var sum = 0;
        input.forEach(element => {
            split = element.split(" ");
            sum += Math.max.apply(null, split) - Math.min.apply(null, split);
        });
        return sum;
    },
    part2: function (input) {
        var sum = 0;
        input.forEach(element => {
            split = element.split(" ");
            split.forEach(element => {
                for (var i = 0; i < split.length; i++) {
                    if (split[i] != element && element % split[i] === 0) {
                        sum += element / split[i];
                        break;
                    }
                }
            })

        });
        return sum;
    }
}