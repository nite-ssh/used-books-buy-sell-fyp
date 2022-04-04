import 'package:flutter/material.dart';
import 'package:second_hand_books_buy_sell/admin_pages/admin_bottom_nav.dart';
import 'package:second_hand_books_buy_sell/admin_pages/button_review/delete_btn.dart';
import 'package:second_hand_books_buy_sell/admin_pages/button_review/review_btn.dart';
import 'package:second_hand_books_buy_sell/admin_pages/button_review/sort_btn.dart';
import 'package:second_hand_books_buy_sell/admin_pages/button_review/sort_ui.dart';
import 'package:second_hand_books_buy_sell/admin_pages/get_book_mutation.dart';
import 'package:second_hand_books_buy_sell/graphql/graphqlconfig.dart';
import 'package:second_hand_books_buy_sell/graphql/querymutations.dart';
import 'package:second_hand_books_buy_sell/main.dart';
import 'package:second_hand_books_buy_sell/models/BookInfo.dart';
import 'package:second_hand_books_buy_sell/screens/blog/User.dart';
import 'package:second_hand_books_buy_sell/universal/drawer.dart';
import 'package:graphql_flutter/graphql_flutter.dart';

class ReviewBooks extends StatefulWidget {
  var bookMutation = QueryMutations.getReviewBooks();
  ReviewBooks({Key? key, required this.bookMutation}) : super(key: key);

  @override
  State<ReviewBooks> createState() => _ReviewBooksState();
}

class _ReviewBooksState extends State<ReviewBooks> {
  List<Book> listUser = <Book>[];
  GraphQLConfiguration graphQLConfiguration = GraphQLConfiguration();

  void fillList() async {
    QueryMutations queryMutation = QueryMutations();
    GraphQLClient _client = graphQLConfiguration.clientToQuery();
    QueryResult result = await _client.query(
      QueryOptions(
        document: gql(QueryMutations.getReviewBooks()),
      ),
    );
    if (!result.hasException) {
      for (var i = 0; i < result.data!["books"].length; i++) {
        setState(() {
          listUser.add(
            Book(
              result.data!["books"][i]["id"],
              result.data!["books"][i]["name"],
              result.data!["books"][i]["description"],
              result.data!["books"][i]["user"]["profilePictureUrl"],
            ),
          );
        });
      }
    }
  }

  @override
  void initState() {
    super.initState();
    fillList();
  }

  @override
  Widget build(BuildContext context) {
    return SafeArea(
      child: Scaffold(
        backgroundColor: Colors.blueGrey,
        appBar: AppBar(
          title: Text("Discover"),
        ),
        body: Column(
          children: [
            SizedBox(
              height: 20,
            ),
            SizedBox(
              height: 50,
              child: SortUi(),
            ),
            SizedBox(
              height: 10,
            ),
            GetBooksMutation(
              functionVal: widget.bookMutation,
            )
          ],
        ),
        drawer: DrawerVal(),
      ),
    );
  }
}
