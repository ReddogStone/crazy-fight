Math.lerp = function(s1, s2, a) {
	return s1 * (1 - a) + s2 * a;
}

Math.sign = function(x) {
	if (x >= 0) { return 1; }
	if (x < 0) { return -1; }
	return 0;
}
