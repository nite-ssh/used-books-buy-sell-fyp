import 'package:flutter/material.dart';
import 'package:graphql_flutter/graphql_flutter.dart';
import 'package:second_hand_books_buy_sell/admin_pages/review_books.dart';
import 'package:second_hand_books_buy_sell/graphql/querymutations.dart';
import 'package:second_hand_books_buy_sell/main.dart';
import 'package:second_hand_books_buy_sell/utils/routes.dart';

class ReviewBtn extends StatefulWidget {
  final id;
  const ReviewBtn({Key? key, required this.id}) : super(key: key);
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
            document: gql(
              QueryMutations.updateBookStateToBeSold(widget.id),
            ),
          ));

          setState(() {
            Navigator.push(context,
                PageRouteBuilder(pageBuilder: (_, __, ___) => ReviewBooks()));
          });
        },
        child: Text("Approve"));
  }
}
