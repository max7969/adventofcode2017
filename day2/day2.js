module.exports = {
    part1: function (input) {
        var sum = 0;
        input.forEach(element => {
            split = element.split(" ");
            sum += Math.max.apply(null, split) - Math.min.apply(null, split);
        });
        return sum;
    }
}