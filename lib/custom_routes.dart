//importing login page
//importing homepage the app
import 'package:flutter/material.dart';
import 'package:second_hand_books_buy_sell/graphql/querymutations.dart';
import 'package:second_hand_books_buy_sell/screens/admin_pages/admin_bottom_nav.dart';
import 'package:second_hand_books_buy_sell/screens/admin_pages/review_books.dart';
import 'package:second_hand_books_buy_sell/screens/auth/login_screen.dart';
import 'package:second_hand_books_buy_sell/screens/auth/register_page.dart';
import 'package:second_hand_books_buy_sell/screens/maps/maps.dart';
import 'package:second_hand_books_buy_sell/screens/universal/bottom_nav.dart';
import 'package:second_hand_books_buy_sell/screens/user_pages/homepage/homepage_screen.dart';
import 'package:second_hand_books_buy_sell/utils/routes.dart';

var customRoutes = <String, WidgetBuilder>{
  MyRoutes.loginRoute: (context) => const Login(),
  MyRoutes.registerRoute: (context) => const Register(),
  MyRoutes.homeRoute: (context) => const Homepage(),
  MyRoutes.navRoute: (context) => const BottomNav(),
  MyRoutes.mapRoute: (context) => const GMaps(),
  MyRoutes.reviewBookRoute: (context) => ReviewBooks(
        bookMutation: QueryMutations.getReviewBooks(),
      ),
  MyRoutes.adminNavRoute: (context) => const AdminBottomNav(),
};
