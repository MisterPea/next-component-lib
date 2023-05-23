type HexColor = `#${'0123456789abcdef' | 'ABCDEF'}{6}`;
type HexColorAlpha = `#${'0123456789abcdef' | 'ABCDEF'}{6}${'0123456789'}{2}`;
type RGBColor = `rgb(${number},${number},${number})`;
type RGBAColor = `rgba(${number},${number},${number},${number})`;
type HSLColor = `hsl(${number}, ${string}, ${string})`;

export type ColorType = string | HexColor | HexColorAlpha | RGBColor | RGBAColor | HSLColor;