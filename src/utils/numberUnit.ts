export function extractNumberAndUnit(value: string): { number: string; unit: string } {
	const match = value.match(/([0-9.]+)([a-z%]*)/) || ["", "0", ""];
	return { number: match[1], unit: match[2] };
}
