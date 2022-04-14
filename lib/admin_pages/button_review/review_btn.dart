import 'package:flutter/material.dart';
import 'package:graphql_flutter/graphql_flutter.dart';
import 'package:second_hand_books_buy_sell/admin_pages/admin_bottom_nav.dart';
import 'package:second_hand_books_buy_sell/admin_pages/review_books.dart';
import 'package:second_hand_books_buy_sell/graphql/querymutations.dart';
import 'package:second_hand_books_buy_sell/main.dart';

class ReviewBtn extends StatefulWidget {
  final name;
  final price;
  final description;
  final author;
  final photo;
  final userID;
  final bookState;
  final bookCategory;

  const ReviewBtn(
      {Key? key,
      required this.name,
      required this.price,
      required this.description,
      required this.author,
      required this.photo,
      required this.userID,
      required this.bookState,
      required this.bookCategory})
      : super(key: key);
  @override
  State<ReviewBtn> createState() => _ReviewBtnState();
}

class _ReviewBtnState extends State<ReviewBtn> {
  @override
  Widget build(BuildContext context) {
    return ElevatedButton(
        onPressed: () {
          GraphQLClient _client = graphQLConfiguration.clientToQuery();

          _client.query(QueryOptions(
            document: gql(QueryMutations.createBook(
                widget.name,
                widget.price,
                widget.description,
                widget.author,
                widget.photo,
                widget.userID,
                widget.bookState,
                widget.bookCategory)),
          ));

          setState(() {
            Navigator.push(
                context,
                PageRouteBuilder(
                  pageBuilder: (_, __, ___) => AdminBottomNav(),
                ));
          });
        },
        child: Text("Approve"));
  }
}
