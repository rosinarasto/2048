function sumOfSums(n) {
	sum = 0;

	for (let i = 1; i <= n; i++) {
		if (i % 2 == 1) {
			sum += (1 + i) * (i / 2);
		}
	}
	
	return sum;
}

sumOfSums(1)
sumOfSums(2)
sumOfSums(3)