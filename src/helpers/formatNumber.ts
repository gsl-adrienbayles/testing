export default function formatNumber(number: number): string {
	// And for floating point?????
	return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")
}
