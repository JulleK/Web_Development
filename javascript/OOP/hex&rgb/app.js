// function hex(r, g, b) {
//     return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
// }

// function rgb(r, g, b) {
//     return `rgb(${r}, ${g}, ${b})`;
// }

// hex(255, 100, 25);
// console.log(rgb(100, 100, 100))

// function makeColor(r, g, b) {
//     const color = {};
//     color.r = r
//     color.g = g
//     color.b = b
//     color.rgb = function () {
//         const { r, g, b } = this;
//         return `rgb(${r}, ${g}, ${b})`;
//     }
//     color.hex = function () {
//         const { r, g, b } = this;
//         return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
//     }
//     return color;
// }


// function Color(r, g, b) {
//     this.r = r;
//     this.g = g;
//     this.b = b;
// }

// Color.prototype.rgb = function () {
//     const { r, g, b } = this;
//     return `rgb(${r}, ${g}, ${b})`;
// }


// blueColor = new Color(0, 0, 255)


class Color {
    constructor(r, g, b, name) {
        this.r = r;
        this.g = g;
        this.b = b;
        this.name = name;
    }
    innerRGB() {
        const { r, g, b } = this;
        return `${r}, ${g}, ${b}`
    }
    rgb() {
        return `rgb(${this.innerRGB()})`;
    }
    rgba(a = 1.0) {
        return `rgba(${this.innerRGB()}, ${a})`;
    }
}

const c1 = new Color(255, 10, 67, "tomato");