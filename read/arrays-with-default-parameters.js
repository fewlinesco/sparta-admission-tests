function arrayFunc(array, a = 2, b = 4) {
	return `${array[a]} - ${array[b]}`;
}

// ----------------------------------------------------------------

const myFirstArray = ["alpha", "beta", "gamma", "delta", "epsilon"];

// ↓ What will this function call do? ↓
arrayFunc(myFirstArray);

// ----------------------------------------------------------------

const mySecondArray = ["alpha", "bravo", "charlie"];

// ↓ What will this function call do? ↓
arrayFunc(mySecondArray);

// ----------------------------------------------------------------

const myThirdArray = ["red", "blue", "green"];

// ↓ What will this function call do? ↓
arrayFunc(myThirdArray, 1, 2);

