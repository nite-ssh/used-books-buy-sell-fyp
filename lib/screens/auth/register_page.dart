import 'package:flutter/material.dart';
import 'package:second_hand_books_buy_sell/utils/routes.dart';
import 'package:snippet_coder_utils/FormHelper.dart';
import 'package:snippet_coder_utils/ProgressHUD.dart';

class Register extends StatefulWidget {
  const Register({Key? key}) : super(key: key);

  @override
  State<Register> createState() => _RegisterState();
}

class _RegisterState extends State<Register> {
  bool isAPIcallProcess = false;
  bool hidePassword = true;
  GlobalKey<FormState> globalFormKey = GlobalKey<FormState>();
  String? username;
  String? password;
  String? email;
  String? name;

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
          child: _registerUI(context),
        ),
        inAsyncCall: isAPIcallProcess,
        key: UniqueKey(),
      ),
    );
  }

  Widget _buildPopupDialog(BuildContext context) {
    return AlertDialog(
      title: const Text('User Registered'),
      content: Column(
        mainAxisSize: MainAxisSize.min,
        crossAxisAlignment: CrossAxisAlignment.start,
        children: const <Widget>[
          Text("Your account is Registered!"),
        ],
      ),
      actions: <Widget>[
        FlatButton(
          onPressed: () {
            Navigator.pushNamed(context, MyRoutes.loginRoute);
          },
          textColor: Theme.of(context).primaryColor,
          child: const Text('Return to Login'),
        ),
      ],
    );
  }

  Widget _registerUI(BuildContext context) {
    final _usernameFormKey = GlobalKey<FormState>();
    final _passwordFormKey = GlobalKey<FormState>();
    final _nameFormKey = GlobalKey<FormState>();
    final _emailFormKey = GlobalKey<FormState>();
    return Center(
      child: SingleChildScrollView(
        child: Column(
          children: [
            Text(
              "Register",
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
                    key: _nameFormKey,
                    child: TextFormField(
                      decoration: InputDecoration(
                        hintText: "Enter your Full Name",
                        labelText: "Full Name",
                      ),
                      validator: (value) {
                        if (value == null || value.isEmpty) {
                          return "Please enter your Full Name";
                        }
                        return null;
                      },
                    ),
                  ),
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
                    key: _emailFormKey,
                    child: TextFormField(
                      decoration: InputDecoration(
                        hintText: "Enter your Email",
                        labelText: "Email",
                      ),
                      validator: (value) {
                        if (value == null || value.isEmpty) {
                          return "Please enter your Email";
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
                  )
                ],
              ),
            ),
            const SizedBox(
              height: 20,
            ),
            ElevatedButton(
              onPressed: (() => {
                    validator(_usernameFormKey),
                    validator(_passwordFormKey),
                    validator(_emailFormKey),
                    validator(_nameFormKey),
                    showDialog(
                      context: context,
                      builder: (BuildContext context) =>
                          _buildPopupDialog(context),
                    ),
                  }),
              child: const Text(
                "Register",
                style: TextStyle(
                    fontSize: 20,
                    fontWeight: FontWeight.w300,
                    color: Colors.white),
              ),
              style: TextButton.styleFrom(
                  minimumSize: const Size(150, 50),
                  backgroundColor: Colors.teal),
            ),
            const SizedBox(
              height: 20,
            ),
            GestureDetector(
              onTap: () {
                Navigator.pushNamed(context, MyRoutes.loginRoute);
              },
              child: const Text(
                "Already a User?",
                style: TextStyle(
                  color: Colors.purple,
                ),
              ),
            )
          ],
        ),
      ),
    );
  }
}
