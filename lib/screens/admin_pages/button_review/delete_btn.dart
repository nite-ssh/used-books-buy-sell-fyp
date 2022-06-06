import 'package:flutter/material.dart';
import 'package:graphql_flutter/graphql_flutter.dart';
import 'package:second_hand_books_buy_sell/graphql/querymutations.dart';
import 'package:second_hand_books_buy_sell/main.dart';
import 'package:second_hand_books_buy_sell/screens/admin_pages/admin_bottom_nav.dart';

class DeleteBtn extends StatefulWidget {
  final id;
  const DeleteBtn({Key? key, required this.id}) : super(key: key);
  @override
  State<DeleteBtn> createState() => _DeleteBtnState();
}

class _DeleteBtnState extends State<DeleteBtn> {
  bool showProgress = false;
  @override
  Widget build(BuildContext context) {
    return showProgress
        ? const Center(child: CircularProgressIndicator())
        : ElevatedButton(
            onPressed: () async {
              setState(() {
                showProgress = true;
              });
              GraphQLClient abc = graphQLConfiguration.clientToQuery();

              await abc.query(
                QueryOptions(
                  document: gql(
                    QueryMutations.deleteBookUnverified(widget.id),
                  ),
                ),
              );
              setState(() {
                showProgress = false;
              });
              setState(() {
                Navigator.push(
                    context,
                    PageRouteBuilder(
                        pageBuilder: (_, __, ___) => const AdminBottomNav()));
              });
            },
            child: const Text("Delete"));
  }
}
