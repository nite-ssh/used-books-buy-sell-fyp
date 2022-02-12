import 'package:flutter/material.dart';
import 'package:second_hand_books_buy_sell/universal/drawer.dart';

class Homepage extends StatelessWidget {
  const Homepage({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return SafeArea(
      child: Scaffold(
        appBar: AppBar(
          title: Text("Discover"),
        ),
        drawer: DrawerVal(),
      ),
    );
  }
}
