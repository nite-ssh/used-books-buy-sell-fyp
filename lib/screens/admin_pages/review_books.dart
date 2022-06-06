import 'package:flutter/material.dart';
import 'package:second_hand_books_buy_sell/graphql/graphqlconfig.dart';
import 'package:second_hand_books_buy_sell/models/BookInfo.dart';
import 'package:second_hand_books_buy_sell/screens/admin_pages/button_review/sort_ui.dart';
import 'package:second_hand_books_buy_sell/screens/admin_pages/get_book_mutation.dart';
import 'package:second_hand_books_buy_sell/screens/universal/drawer.dart';

class ReviewBooks extends StatefulWidget {
  var bookMutation;
  ReviewBooks({Key? key, required this.bookMutation}) : super(key: key);

  @override
  State<ReviewBooks> createState() => _ReviewBooksState();
}

class _ReviewBooksState extends State<ReviewBooks> {
  List<Book> listUser = <Book>[];
  GraphQLConfiguration graphQLConfiguration = GraphQLConfiguration();

  @override
  void initState() {
    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    return SafeArea(
      child: Scaffold(
        backgroundColor: Colors.blueGrey,
        appBar: AppBar(
          title: const Text("Discover"),
        ),
        body: Column(
          children: [
            const SizedBox(
              height: 20,
            ),
            const SizedBox(
              height: 50,
              child: SortUi(),
            ),
            const SizedBox(
              height: 10,
            ),
            GetBooksMutation(
              functionVal: widget.bookMutation,
            )
          ],
        ),
        drawer: const DrawerVal(),
      ),
    );
  }
}
