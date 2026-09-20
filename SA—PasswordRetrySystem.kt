fun main() {
    var isCorrect = true

    while (true) {
        print("Enter password: ")
        var p = readln()
        if (p == "android123") {
            println("Access Granted")
            break
        }
        println("Incorrect Password")
    }
}