const someArr = [45, 21, 66, 45, 3, 2, 920, 1];
function mergeSort(arr) {
	if (arr.length <= 1) return arr;
	const middle = Math.floor(arr.length / 2);
	const leftHalf = mergeSort(arr.slice(0, middle));
	const rightHalf = mergeSort(arr.slice(middle));
	const mergedArr = [];

	// Sort then merge algorithm starts here
	let i = 0; // Index pointer for left array
	let j = 0; // Index pointer for right array
	while (true) {
		// First check if one of the arrays is already empty
		if (leftHalf[i] === undefined) {
			const remaining = rightHalf.slice(j);
			mergedArr.push(...remaining);
			break;
		} else if (rightHalf[j] === undefined) {
			const remaining = leftHalf.slice(i);
			mergedArr.push(...remaining);
			break;
			// Sorting starts here
		} else if (rightHalf[j] < leftHalf[i]) {
			mergedArr.push(rightHalf[j]);
			j++;
			continue;
		} else if (leftHalf[i] < rightHalf[j]) {
			mergedArr.push(leftHalf[i]);
			i++;
			continue;
		} else if (rightHalf[j] === leftHalf[i]) {
			mergedArr.push(rightHalf[j]);
			mergedArr.push(leftHalf[i]);
			i++;
			j++;
			continue;
		}
	}

	return mergedArr;
}
