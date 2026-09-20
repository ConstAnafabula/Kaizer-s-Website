fun main() {
    print("Enter username: ")
    var u = readln().toString()
    print("Enter password: ")
    var p = readln().toString()

    if (u == "admin" && p == "12345") {
        println("Login Successful")
    } else {
        println("Invalid Credentials")
    }
}