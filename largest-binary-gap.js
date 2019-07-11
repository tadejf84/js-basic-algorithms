/*
* find largest gap in a binary number
* longest sequence of 0 between 1
*/
function largestBinaryGap(num) {
	// convert number into binary
	const binary = Math.abs(num).toString(2);

	let finalMaxGap = 0,
		curMaxGap;

	// loop through binary
	// if number is 0 increase current gap
	// if number is 1 compare current gap with previous, reset current max gap
	for (let digit of binary) {
		if (digit === '0') {
			curMaxGap++;
		} else {
			if (curMaxGap > finalMaxGap) {
				finalMaxGap = curMaxGap;
			}
			curMaxGap = 0;
		}
	}
	return finalMaxGap;
}
