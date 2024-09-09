fn main() {
    let mut num = 5;
    num = plus_one(&num);
    println!("{}", num);

    let num2 = 7;
    println!("the highest number is: {}", maximum(&num, &num2))
}

fn plus_one(num: &i32) -> i32 {
    num + 1
}

fn maximum(num1: &i32, num2: &i32) -> i32 {
    if num1 > num2 {
        *num1
    } else {
        *num2
    }
}
