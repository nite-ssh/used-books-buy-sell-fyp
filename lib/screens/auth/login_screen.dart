import 'package:flutter/material.dart';
import 'package:second_hand_books_buy_sell/utils/routes.dart';
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

  void validator($formkey) {
    if ($formkey.currentState!.validate()) {
      ScaffoldMessenger.of(context).showSnackBar(
        const SnackBar(content: Text('Processing Data')),
      );
    }
  }

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
    final _usernameFormKey = GlobalKey<FormState>();
    final _passwordFormKey = GlobalKey<FormState>();
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
          Text(
            "Login",
            style: TextStyle(
              fontFamily: "Poppins",
              fontSize: 40,
              letterSpacing: 3,
            ),
          ),

          Padding(
            padding: EdgeInsets.symmetric(vertical: 10, horizontal: 50),
            child: Column(
              children: [
                Form(
                  key: _usernameFormKey,
                  child: TextFormField(
                    decoration: InputDecoration(
                      hintText: "Enter your Username",
                      labelText: "Username",
                    ),
                    validator: (value) {
                      if (value == null || value.isEmpty) {
                        return "Please enter your Username";
                      }
                      return null;
                    },
                  ),
                ),
                Form(
                  key: _passwordFormKey,
                  child: TextFormField(
                    obscureText: true,
                    decoration: InputDecoration(
                      hintText: "Enter your Password",
                      labelText: "Password",
                    ),
                    validator: (value) {
                      if (value == null || value.isEmpty) {
                        return "Please enter your Password";
                      }
                      return null;
                    },
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
            onPressed: (() => {
                  validator(_usernameFormKey),
                  validator(_passwordFormKey),
                  Navigator.pushNamed(context, MyRoutes.navRoute)
                }),
            child: const Text(
              "LOGIN",
              style: TextStyle(
                  fontSize: 20,
                  fontWeight: FontWeight.w300,
                  color: Colors.white),
            ),
            style: TextButton.styleFrom(
                minimumSize: const Size(150, 50), backgroundColor: Colors.teal),
          ),
          const SizedBox(
            height: 20,
          ),
          GestureDetector(
            onTap: () {
              Navigator.pushNamed(context, MyRoutes.registerRoute);
            },
            child: const Text(
              "Don't have an Account?",
              style: TextStyle(
                color: Colors.purple,
              ),
            ),
          )
        ],
      ),
    );
  }
}
