//importing material.dart for the structuring
import 'package:flutter/material.dart';
import 'package:second_hand_books_buy_sell/screens/blog/blog.dart';
import 'package:second_hand_books_buy_sell/screens/blog/blog_write.dart';
//importing login page
import 'package:second_hand_books_buy_sell/screens/login_screen.dart';
import 'package:second_hand_books_buy_sell/universal/bottom_nav.dart';
import 'package:second_hand_books_buy_sell/utils/routes.dart';
//importing homepage the app
import 'screens/homepage_screen.dart';
import 'screens/maps/maps.dart';

//runApp runs the BookApp class in the main method
void main() {
  runApp(
    BookApp(),
  );
}

//Book App is a stateless widget that returns routes of various screens
class BookApp extends StatelessWidget {
  BookApp({Key? key}) : super(key: key);
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
        debugShowCheckedModeBanner: false,
        //providing theme to the app
        themeMode: ThemeMode.light,
        theme: ThemeData(
          brightness: Brightness.light,
          primarySwatch: Colors.teal,
        ),
        //showing what to show when dark mode is on
        darkTheme: ThemeData(
          brightness: Brightness.dark,
        ),
        initialRoute: '/login',
        routes: {
          //setting initial route to be homepage
          MyRoutes.loginRoute: (context) => Login(),
          MyRoutes.homeRoute: (context) => Homepage(),
          MyRoutes.navRoute: (context) => BottomNav(),
          MyRoutes.mapRoute: (context) => GMaps(),
          MyRoutes.blogRoute: (context) => Blog(),
        });
  }
  
}
