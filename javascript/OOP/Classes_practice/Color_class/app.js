class Color {
    constructor(r, g, b) {
        this.r = r;
        this.g = g;
        this.b = b;
    }
    rgb() {
        const { r, g, b } = this;
        return `rgb(${r}, ${g}, ${b})`;
    }
    hex() {
        const { r, g, b } = this;
        return "#" + (1 << 24 | r << 16 | g << 8 | b).toString(16).slice(1);
    }
    convertToHsl() {
        let { r, g, b } = this;

        // Make r, g, and b fractions of 1
        r /= 255;
        g /= 255;
        b /= 255;

        // Find greatest and smallest channel values
        let cmin = Math.min(r, g, b),
            cmax = Math.max(r, g, b),
            delta = cmax - cmin,
            h = 0,
            s = 0,
            l = 0;

        // Calculate hue
        // No difference
        if (delta == 0)
            h = 0;
        // Red is max
        else if (cmax == r)
            h = ((g - b) / delta) % 6;
        // Green is max
        else if (cmax == g)
            h = (b - r) / delta + 2;
        // Blue is max
        else
            h = (r - g) / delta + 4;

        h = Math.round(h * 60);

        // Make negative hues positive behind 360°
        if (h < 0)
            h += 360;

        // Calculate lightness
        l = (cmax + cmin) / 2;

        // Calculate saturation
        s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));

        // Multiply l and s by 100
        s = +(s * 100).toFixed(1);
        l = +(l * 100).toFixed(1);

        return { h: h, s: s, l: l }
    }
    hsl() {
        const { h, s, l } = this.convertToHsl()
        return `hsl(${h}, ${s}%, ${l}%)`
    }
    reverse() {
        let { h, s, l } = this.convertToHsl()
        if (h > 180) h -= 360
        h += 180
        return `hsl(${h}, ${s}%, ${l}%)`
    }
}

const white = new Color(255, 255, 255);
const red = new Color(230, 56, 41)
const black = new Color(0, 0, 0)