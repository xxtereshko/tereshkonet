// get random number from min to max
export function getRandomNumber(min: number, max: number): number {
	return Math.floor(Math.random() * (max - min + 1)) + min
}
