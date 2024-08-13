use rand::Rng;
use std::io;

fn main() {
    let secret_number: i32 = rand::thread_rng().gen_range(1..=100);

    // println!("the secret number is: {secret_number}");

    println!("Guess the number!");
    println!("Please input your guess:");

    let mut guess: String = String::new();

    io::stdin()
        .read_line(&mut guess)
        .expect("Failed to read line");

    println!("You guessed: {guess}")
}
