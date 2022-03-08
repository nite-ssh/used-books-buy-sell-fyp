//importing material.dart for the structuring
import 'package:firebase_core/firebase_core.dart';
import 'package:flutter/material.dart';
//importing login page
import 'package:second_hand_books_buy_sell/screens/auth/login_screen.dart';
import 'package:second_hand_books_buy_sell/screens/auth/register_page.dart';
import 'package:second_hand_books_buy_sell/universal/bottom_nav.dart';
import 'package:second_hand_books_buy_sell/utils/routes.dart';
//importing homepage the app
import 'admin_pages/admin_bottom_nav.dart';
import 'screens/homepage_screen.dart';
import 'screens/maps/maps.dart';

//runApp runs the BookApp class in the main method
Future<void> main() async {
  WidgetsFlutterBinding.ensureInitialized();
  await Firebase.initializeApp();
  runApp(
    BookApp(),
  );
}

//Book App is a stateless widget that returns routes of various screens
class BookApp extends StatelessWidget {
  const BookApp({Key? key}) : super(key: key);
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
          MyRoutes.registerRoute: (context) => Register(),
          MyRoutes.homeRoute: (context) => Homepage(),
          MyRoutes.navRoute: (context) => BottomNav(),
          MyRoutes.mapRoute: (context) => GMaps(),
          MyRoutes.adminNavRoute: (context) => AdminBottomNav(),
        });
  }
}
