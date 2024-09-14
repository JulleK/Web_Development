#[derive(Debug)]
enum Message {
    Quit,
    Move { x: i32, y: i32 },
    Write(String),
    ChangeColor(i32, i32, i32),
}

impl Message {
    fn call(&self) {
        // body
    }
}

fn main() {
    let m = Message::Write(String::from("hello"));
    // let four = IpAddrKind::V4;
    // let six = IpAddrKind::V6;

    // let home = IpAddr::V4(127, 0, 0, 1);
    // println!("{}", home)
}
