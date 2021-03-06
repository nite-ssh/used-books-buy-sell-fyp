import 'package:flutter/material.dart';
import 'package:graphql_flutter/graphql_flutter.dart';
import 'package:second_hand_books_buy_sell/graphql/querymutations.dart';
import 'package:second_hand_books_buy_sell/main.dart';
import 'package:second_hand_books_buy_sell/utils/routes.dart';
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

  String username = "";
  String password = "";
  String email = "";
  GraphQLClient _client = graphQLConfiguration.clientToQuery();
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
          child: _registerUI(context),
        ),
        inAsyncCall: isAPIcallProcess,
        key: UniqueKey(),
      ),
    );
  }

  Widget _buildInvalidPopupDialog(BuildContext context) {
    return AlertDialog(
      title: const Text('User already registered'),
      content: Column(
        mainAxisSize: MainAxisSize.min,
        crossAxisAlignment: CrossAxisAlignment.start,
        children: const <Widget>[
          Text("The user is already taken!"),
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
    final _emailFormKey = GlobalKey<FormState>();
    return Center(
      child: SingleChildScrollView(
        child: Column(
          children: [
            const Text(
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
                    key: _usernameFormKey,
                    child: TextFormField(
                      decoration: const InputDecoration(
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
                    key: _emailFormKey,
                    child: TextFormField(
                      decoration: const InputDecoration(
                        hintText: "Enter your Email",
                        labelText: "Email",
                      ),
                      validator: (value) {
                        if (value == null || value.isEmpty) {
                          return "Please enter your Email";
                        }
                        Pattern pattern =
                            r'^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$';
                        RegExp regex = new RegExp(pattern as String);
                        if (!regex.hasMatch(value))
                          return 'Enter Valid Email';
                        else
                          return null;
                      },
                      onChanged: (val) {
                        email = val;
                      },
                    ),
                  ),
                  Form(
                    key: _passwordFormKey,
                    child: TextFormField(
                      obscureText: true,
                      decoration: const InputDecoration(
                        hintText: "Enter your Password",
                        labelText: "Password",
                      ),
                      validator: (value) {
                        if (value == null || value.isEmpty) {
                          return "Please enter your Password";
                        }
                        return value.length < 4
                            ? "Password must be at least 4 characters long"
                            : null;
                      },
                      onChanged: (val) {
                        password = val;
                      },
                    ),
                  )
                ],
              ),
            ),
            const SizedBox(
              height: 20,
            ),
            Query(
              options: QueryOptions(
                  document: gql(QueryMutations.getUsers(username.toString()))),
              builder: (QueryResult result, {fetchMore, refetch}) {
                if (result.hasException) {
                  Text(result.exception.toString());
                }
                if (result.isLoading) {
                  return Center(
                    child: CircularProgressIndicator(),
                  );
                }
                final userList = result.data!["users"];
                return ElevatedButton(
                  onPressed: (() async {
                    validator(_usernameFormKey);
                    validator(_passwordFormKey);
                    validator(_emailFormKey);
                    if (username.length != 0 &&
                        password.length != 0 &&
                        email.length != 0) {
                      for (var i = 0; i < userList.length; i++) {
                        if (userList[i]["username"] != username) {
                          await _client.query(QueryOptions(
                            document: gql(
                              QueryMutations()
                                  .createUser(email, username, password),
                            ),
                          ));
                          showDialog(
                            context: context,
                            builder: (BuildContext context) =>
                                _buildPopupDialog(context),
                          );
                        }
                      }

                      for (var i = 0; i < userList.length; i++) {
                        if (userList[i]["username"] == username) {
                          showDialog(
                            context: context,
                            builder: (BuildContext context) =>
                                _buildInvalidPopupDialog(context),
                          );
                        }
                      }
                    }
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
                );
              },
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
            ),
          ],
        ),
      ),
    );
  }
}
