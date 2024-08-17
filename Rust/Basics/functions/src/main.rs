fn main() {
    // exercises
    // - Convert temperatures between Fahrenheit and Celsius.
    // - Generate the nth Fibonacci number.

    // 1.
    let fahrenheit: f64 = 34.0;
    print!("{}°F = {}°C", fahrenheit, fahrenheit_to_celsius(fahrenheit));

    print!("\n");

    let celsius: f64 = 1.0;
    print!("{}°C = {}°F", celsius, celsius_to_fahrenheit(celsius));

    print!("\n");

    // 2.
    print!("{}", fibbonacci(4));
}

// 1.
fn fahrenheit_to_celsius(fahrenheit: f64) -> f64 {
    return (fahrenheit - 32.0) / 1.8;
}

fn celsius_to_fahrenheit(celsius: f64) -> f64 {
    return (celsius * 1.8) + 32.0;
}

// 2.
fn fibbonacci(n: u64) -> u64 {
    if n == 0 {
        return 0;
    } else if n == 1 {
        return 1;
    } else {
        return fibbonacci(n - 1) + fibbonacci(n - 2);
    }
}
