import 'dart:convert';

import 'package:flutter/material.dart';
import 'package:graphql_flutter/graphql_flutter.dart';
import 'package:second_hand_books_buy_sell/admin_pages/admin_bottom_nav.dart';
import 'package:second_hand_books_buy_sell/graphql/querymutations.dart';
import 'package:second_hand_books_buy_sell/main.dart';
import 'package:second_hand_books_buy_sell/screens/homepage_screen.dart';
import 'package:second_hand_books_buy_sell/universal/bottom_nav.dart';
import 'package:second_hand_books_buy_sell/utils/routes.dart';
import 'package:snippet_coder_utils/ProgressHUD.dart';
import 'package:flutter_secure_storage/flutter_secure_storage.dart';

class Login extends StatefulWidget {
  const Login({Key? key}) : super(key: key);

  @override
  State<Login> createState() => _LoginState();
}

class _LoginState extends State<Login> {
  GraphQLClient _client = graphQLConfiguration.clientToQuery();
  bool isAPIcallProcess = false;
  bool hidePassword = true;
  GlobalKey<FormState> globalFormKey = GlobalKey<FormState>();
  String username = "";
  String password = "";
  bool validate = false;
  bool circular = false;
  String role = 'user';
  bool isChecked = false;
  final storage = FlutterSecureStorage();

  void validator($formkey) {
    if ($formkey.currentState!.validate()) {
      // ScaffoldMessenger.of(context).showSnackBar(
      //   const SnackBar(content: Text('Processing Data')),
      // );
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
                    onChanged: (val) {
                      username = val;
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
                    onChanged: (val) {
                      password = val;
                    },
                  ),
                ),
                SizedBox(height: 10),
              ],
            ),
          ),

          // SizedBox(
          //   height: 10,
          // ),
          Mutation(
            options: MutationOptions(
              document: gql(QueryMutations().signInUser()),
              onCompleted: (dynamic resultData) {
                print(resultData);
              },
            ),
            builder: (MultiSourceResult<dynamic> Function(Map<String, dynamic>,
                        {Object? optimisticResult})
                    runMutation,
                QueryResult<dynamic>? result) {
              return ElevatedButton(
                onPressed: () {
                  validator(_usernameFormKey);
                  validator(_passwordFormKey);

                  runMutation(
                    {
                      'username': username,
                      'password': password,
                    },
                  );

                  if (result!.hasException) {
                    ScaffoldMessenger.of(context).showSnackBar(
                      const SnackBar(content: Text('Invalid Credentials')),
                    );
                  }
                  if (result.isLoading) {
                    const Center(child: CircularProgressIndicator());
                  }

                  if (result.data != null) {
                    if (result.data!["signInUser"]["userRole"]["name"] ==
                        "ADMIN") {
                      Navigator.pushAndRemoveUntil(
                        context,
                        MaterialPageRoute(
                          builder: (BuildContext context) => AdminBottomNav(),
                        ),
                        (route) => false,
                      );
                    } else {
                      Navigator.pushAndRemoveUntil(
                        context,
                        MaterialPageRoute(
                          builder: (BuildContext context) => BottomNav(),
                        ),
                        (route) => false,
                      );
                    }
                  }
                },
                child: const Text(
                  "LOGIN",
                  style: TextStyle(
                      fontSize: 20,
                      fontWeight: FontWeight.w300,
                      color: Colors.white),
                ),
                style: TextButton.styleFrom(
                    minimumSize: const Size(150, 50),
                    backgroundColor: Colors.teal),
              );
            },
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
