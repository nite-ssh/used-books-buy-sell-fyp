import 'package:flutter/material.dart';
import 'package:graphql_flutter/graphql_flutter.dart';
import 'package:second_hand_books_buy_sell/graphql/querymutations.dart';
import 'package:second_hand_books_buy_sell/main.dart';
import 'package:second_hand_books_buy_sell/screens/admin_pages/review_books.dart';

class SortCategoryBtn extends StatefulWidget {
  final category;
  final String? title;
  const SortCategoryBtn({Key? key, required this.category, this.title})
      : super(key: key);
  @override
  State<SortCategoryBtn> createState() => _SortCategoryBtnState();
}

class _SortCategoryBtnState extends State<SortCategoryBtn> {
  @override
  Widget build(BuildContext context) {
    return ButtonTheme(
      child: RaisedButton(
          onPressed: () {
            GraphQLClient _client = graphQLConfiguration.clientToQuery();

            _client.query(QueryOptions(
              document: gql(
                QueryMutations.filterBookCategory(widget.category),
              ),
            ));

            setState(() {
              Navigator.push(
                  context,
                  PageRouteBuilder(
                      pageBuilder: (_, __, ___) => ReviewBooks(
                            bookMutation: QueryMutations()
                                .getFilteredBooks(widget.category),
                          )));
            });
          },
          child: Text(
            widget.title!,
            style: const TextStyle(color: Colors.white),
          )),
    );
  }
}
