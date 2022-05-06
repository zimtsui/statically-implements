export function staticallyImplements<Expected>() {
	return function <Actual extends Expected>(
		constructor: Actual,
	): void { }
}
