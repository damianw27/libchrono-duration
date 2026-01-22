import {DurationUtils} from '@libchrono/duration/browser';

(() => {
    const duration = DurationUtils.parse('1w');

    console.log(duration.add(DurationUtils.parse('2d')).toStringLiteral()); // Output: 1w 2d
    console.log(duration.sub(DurationUtils.parse('2d')).toStringLiteral()); // Output: 5d
    console.log(duration.mul(2).toStringLiteral()); // Output: 2w
    console.log(duration.div(2).toStringLiteral()); // Output: 3d 12h
})();

(() => {
    const duration = DurationUtils.parse('1w 2h');

    console.log(duration);
})();

(() => {
    const duration1 = DurationUtils.validate('1w 2h');
    const duration2 = DurationUtils.validate('1w 1q');
    const duration3 = DurationUtils.validate('1d 1w');

    console.log(duration1.isValid); // Output: true
    console.log(duration2.isValid); // Output: false
    console.log(duration3.isValid); // Output: false
})();
