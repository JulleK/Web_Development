struct User {
    active: bool,
    username: String,
    email: String,
    sign_in_count: i32,
}

fn main() {
    let mut user1 = User {
        active: true,
        username: String::from("someusername123"),
        email: String::from("someone@example.com"),
        sign_in_count: 1,
    };

    user1.email = String::from("a@gma.il");

    let user2 = build_user(String::from("a@gma.il"), String::from("someusername123"));
}

fn build_user(email: String, username: String) -> User {
    User {
        email,
        username,
        active: true,
        sign_in_count: 1,
    }
}
