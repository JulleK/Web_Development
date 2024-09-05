// this program calculates an area of a rectangle
use std::io;

struct Rectangle {
    width: u32,
    height: u32,
}

fn main() {
    println!("The width of the rectangle: ");
    let mut width = String::new();
    io::stdin()
        .read_line(&mut width)
        .expect("Failed to read line");
    let width: u32 = width.trim().parse().expect("Please type a number!");

    println!("The height of the rectangle: ");
    let mut height = String::new();
    io::stdin()
        .read_line(&mut height)
        .expect("Failed to read line");
    let height: u32 = height.trim().parse().expect("Please type a number!");

    let rect1: Rectangle = Rectangle { width, height };
    println!("The are of the rectangle is {} square pixels", area(&rect1));
}

fn area(rectangle: &Rectangle) -> u32 {
    rectangle.width * rectangle.height
}
