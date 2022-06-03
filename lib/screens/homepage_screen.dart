import 'package:flutter/material.dart';
import 'package:second_hand_books_buy_sell/screens/homepage_card.dart';
import 'package:second_hand_books_buy_sell/universal/drawer.dart';

class Homepage extends StatefulWidget {
  const Homepage({Key? key}) : super(key: key);
  @override
  State<Homepage> createState() => _HomepageState();
}

class _HomepageState extends State<Homepage> {
  @override
  Widget build(BuildContext context) {
    return SafeArea(
      child: Scaffold(
        backgroundColor: Colors.blueGrey,
        appBar: AppBar(
          title: const Text("Discover"),
        ),
        body: const HomepageCard(),
        drawer: const DrawerVal(),
      ),
    );
  }
}
