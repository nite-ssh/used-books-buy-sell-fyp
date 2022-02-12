import 'package:flutter/material.dart';
import 'package:second_hand_books_buy_sell/utils/routes.dart';

class Login extends StatelessWidget {
  const Login({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.white,
      body: SingleChildScrollView(
        child: Column(
          children: [
            SizedBox(
              height: 20,
            ),
            Image.asset(
              "assets/images/login.png",
              fit: BoxFit.cover,
            ),
            SizedBox(
              height: 20,
            ),
            Text(
              "Login",
              style: TextStyle(
                fontFamily: "Poppins",
                // color: Color(0xFF3FA796),
                fontSize: 40,
                letterSpacing: 3,
              ),
            ),
            SizedBox(
              height: 20,
            ),
            Padding(
              padding: EdgeInsets.symmetric(vertical: 10, horizontal: 50),
              child: Column(
                children: [
                  TextFormField(
                    decoration: InputDecoration(
                      hintText: "Enter your Username",
                      labelText: "Username",
                    ),
                  ),
                  TextFormField(
                    obscureText: true,
                    decoration: InputDecoration(
                      hintText: "Enter your Password",
                      labelText: "Password",
                    ),
                  ),
                ],
              ),
            ),
            SizedBox(
              height: 30,
            ),
            ElevatedButton(
              onPressed: (() =>
                  {Navigator.pushNamed(context, MyRoutes.navRoute)}),
              child: Text(
                "LOGIN",
                style: TextStyle(
                    fontSize: 20,
                    fontWeight: FontWeight.w300,
                    color: Colors.white),
              ),
              style: TextButton.styleFrom(
                  minimumSize: Size(150, 50), backgroundColor: Colors.teal),
            )
          ],
        ),
      ),
    );
  }
}
