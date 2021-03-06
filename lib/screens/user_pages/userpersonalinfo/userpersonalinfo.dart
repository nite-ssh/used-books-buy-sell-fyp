import 'package:flutter/material.dart';
import 'package:second_hand_books_buy_sell/models/userinfo.dart';
import 'package:second_hand_books_buy_sell/screens/user_pages/userpersonalinfo/userpersonalinfoUI.dart';

class UserPersonalInfo extends StatefulWidget {
  const UserPersonalInfo({Key? key}) : super(key: key);

  @override
  State<UserPersonalInfo> createState() => _UserPersonalInfoState();
}

class _UserPersonalInfoState extends State<UserPersonalInfo> {
  @override
  Widget build(BuildContext context) {
    return SafeArea(
      child: Scaffold(
        backgroundColor: Colors.blueGrey,
        appBar: AppBar(
          title: Text("Books uploaded by ${UserInfo().getUsername()}"),
        ),
        body: const UserPersonalInfoUI(),
      ),
    );
  }
}
