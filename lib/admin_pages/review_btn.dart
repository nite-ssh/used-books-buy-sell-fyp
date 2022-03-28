import 'package:flutter/material.dart';
import 'package:graphql_flutter/graphql_flutter.dart';
import 'package:second_hand_books_buy_sell/graphql/querymutations.dart';
import 'package:second_hand_books_buy_sell/main.dart';

class ReviewBtn extends StatefulWidget {
  final String id;
  const ReviewBtn({Key? key, required this.id}) : super(key: key);
  @override
  State<ReviewBtn> createState() => _ReviewBtnState();
}

class _ReviewBtnState extends State<ReviewBtn> {
  TextEditingController txtId = TextEditingController();
  @override
  Widget build(BuildContext context) {
    return ElevatedButton(
        onPressed: () async {
          GraphQLClient _client = graphQLConfiguration.clientToQuery();

          QueryResult result = await _client.query(
            QueryOptions(
              document: gql(QueryMutations.updateBookStateToBeSold(widget.id)),
            ),
          );
        },
        child: Text("null"));
  }
}
