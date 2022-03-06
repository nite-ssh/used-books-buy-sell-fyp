import 'package:flutter/material.dart';
import 'package:second_hand_books_buy_sell/utils/routes.dart';
import 'package:snippet_coder_utils/FormHelper.dart';
import 'package:snippet_coder_utils/ProgressHUD.dart';

class Login extends StatefulWidget {
  const Login({Key? key}) : super(key: key);

  @override
  State<Login> createState() => _LoginState();
}

class _LoginState extends State<Login> {
  bool isAPIcallProcess = false;
  bool hidePassword = true;
  GlobalKey<FormState> globalFormKey = GlobalKey<FormState>();
  String? username;
  String? password;
  String role = 'user';
  bool isChecked = false;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.white,
      body: ProgressHUD(
        child: Form(
          key: globalFormKey,
          child: _loginUI(context),
        ),
        inAsyncCall: isAPIcallProcess,
        key: UniqueKey(),
      ),
    );
  }

  Widget _loginUI(BuildContext context) {
    return SingleChildScrollView(
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
                SizedBox(height: 10),
                Row(
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: <Widget>[
                    const Text(
                      'Login as Admin: ',
                      style: TextStyle(fontSize: 15),
                    ), //Text
                    Checkbox(
                      value: isChecked,
                      onChanged: (bool? value) {
                        setState(() {
                          isChecked = value as bool;
                        });

                        role = isChecked ? 'admin' : 'user';
                      },
                    ),
                  ],
                ),
              ],
            ),
          ),
          // SizedBox(
          //   height: 10,
          // ),
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
                minimumSize: const Size(150, 50), backgroundColor: Colors.teal),
          ),
          SizedBox(
            height: 20,
          ),
          GestureDetector(
            onTap: () {
              Navigator.pushNamed(context, MyRoutes.registerRoute);
            },
            child: Text("Don't have an Acoount?"),
          )
        ],
      ),
    );
  }
}
