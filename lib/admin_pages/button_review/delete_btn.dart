import 'package:flutter/material.dart';
import 'package:graphql_flutter/graphql_flutter.dart';
import 'package:second_hand_books_buy_sell/admin_pages/admin_bottom_nav.dart';
import 'package:second_hand_books_buy_sell/admin_pages/review_books.dart';
import 'package:second_hand_books_buy_sell/graphql/querymutations.dart';
import 'package:second_hand_books_buy_sell/main.dart';
import 'package:second_hand_books_buy_sell/utils/routes.dart';

class DeleteBtn extends StatefulWidget {
  final id;
  const DeleteBtn({Key? key, required this.id}) : super(key: key);
  @override
  State<DeleteBtn> createState() => _DeleteBtnState();
}

class _DeleteBtnState extends State<DeleteBtn> {
  @override
  Widget build(BuildContext context) {
    return ElevatedButton(
        onPressed: () {
          GraphQLClient _client = graphQLConfiguration.clientToQuery();

          _client.query(QueryOptions(
            document: gql(
              QueryMutations.deleteBook(widget.id),
            ),
          ));

          setState(() {
            Navigator.push(
                context,
                PageRouteBuilder(
                    pageBuilder: (_, __, ___) => AdminBottomNav()));
          });
        },
        child: Text("Delete"));
  }
}
