export default function computeDiff(prev: number, curr: number): number {
	return ((curr - prev) / curr) * 100
}
