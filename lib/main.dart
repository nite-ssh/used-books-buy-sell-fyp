//importing material.dart for the structuring
import 'package:firebase_core/firebase_core.dart';
import 'package:flutter/material.dart';
import 'package:graphql_flutter/graphql_flutter.dart';
import 'package:second_hand_books_buy_sell/admin_pages/review_books.dart';
import 'package:second_hand_books_buy_sell/graphql/graphqlconfig.dart';
import 'package:second_hand_books_buy_sell/graphql/querymutations.dart';
//importing login page
import 'package:second_hand_books_buy_sell/screens/auth/login_screen.dart';
import 'package:second_hand_books_buy_sell/screens/auth/register_page.dart';
import 'package:second_hand_books_buy_sell/universal/bottom_nav.dart';
import 'package:second_hand_books_buy_sell/utils/routes.dart';
//importing homepage the app
import 'admin_pages/admin_bottom_nav.dart';
import 'screens/homepage_screen.dart';
import 'screens/maps/maps.dart';

GraphQLConfiguration graphQLConfiguration = GraphQLConfiguration();
//runApp runs the BookApp class in the main methodxsx
Future<void> main() async {
  var app = GraphQLProvider(
      client: graphQLConfiguration.client,
      child: CacheProvider(
        child: BookApp(),
      ));

  WidgetsFlutterBinding.ensureInitialized();
  await Firebase.initializeApp();
  runApp(
    app,
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
          fontFamily: "Poppins-Regular",
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
          MyRoutes.loginRoute: (context) => const Login(),
          MyRoutes.registerRoute: (context) => const Register(),
          MyRoutes.homeRoute: (context) => const Homepage(),
          MyRoutes.navRoute: (context) => const BottomNav(),
          MyRoutes.mapRoute: (context) => const GMaps(),

          MyRoutes.reviewBookRoute: (context) => ReviewBooks(
                bookMutation: QueryMutations.getReviewBooks(),
              ),
          MyRoutes.adminNavRoute: (context) => const AdminBottomNav(),
        });
  }
}
