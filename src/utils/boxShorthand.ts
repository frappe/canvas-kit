// Splits a CSS value list on whitespace, keeping function calls like calc() intact.
export function splitCssValueList(value: string): string[] {
	const parts: string[] = [];
	let current = "";
	let depth = 0;
	for (const char of value) {
		if (char === "(") depth++;
		if (char === ")") depth--;
		if (/\s/.test(char) && depth === 0) {
			if (current) parts.push(current);
			current = "";
		} else {
			current += char;
		}
	}
	if (current) parts.push(current);
	return parts;
}

// Expands a CSS box shorthand (margin, padding, border-radius) into its four
// component values following the standard 1/2/3/4-value rules.
export function expandBoxShorthand(value: unknown, fallback = "0"): string[] {
	const parts = splitCssValueList(String(value ?? "").trim());
	if (!parts.length) return Array(4).fill(fallback);
	if (parts.length === 1) return Array(4).fill(parts[0]);
	if (parts.length === 2) return [parts[0], parts[1], parts[0], parts[1]];
	if (parts.length === 3) return [parts[0], parts[1], parts[2], parts[1]];
	return parts.slice(0, 4);
}

// Collapses four side values into the shortest shorthand that expands back to them.
export function collapseBoxShorthand(parts: unknown[]): string {
	const [top, right, bottom, left] = parts.map((part) => String(part ?? ""));
	if (top === right && top === bottom && top === left) return top;
	if (top === bottom && right === left) return `${top} ${right}`;
	if (right === left) return `${top} ${right} ${bottom}`;
	return [top, right, bottom, left].join(" ");
}
