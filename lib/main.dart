//importing material.dart for the structuring
import 'package:firebase_core/firebase_core.dart';
import 'package:flutter/material.dart';
import 'package:graphql_flutter/graphql_flutter.dart';
import 'package:second_hand_books_buy_sell/graphql/graphqlconfig.dart';
import 'package:second_hand_books_buy_sell/custom_routes.dart';

GraphQLConfiguration graphQLConfiguration = GraphQLConfiguration();
//runApp runs the BookApp class in the main methodxsx
Future<void> main() async {
  var app = GraphQLProvider(
      client: graphQLConfiguration.client,
      child: const CacheProvider(
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
      routes: customRoutes,
    );
  }
}
