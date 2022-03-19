import 'package:flutter/material.dart';
import 'package:second_hand_books_buy_sell/universal/drawer.dart';
import 'package:graphql_flutter/graphql_flutter.dart';

const bookgraphql = """
{
  books{
    name
  }
}
""";

class Homepage extends StatelessWidget {
  const Homepage({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return SafeArea(
      child: Scaffold(
        appBar: AppBar(
          title: Text("Discover"),
        ),
        body: Query(
          options: QueryOptions(
            document: gql(bookgraphql.toString()),
          ),
          builder: (QueryResult result, {fetchMore, refetch}) {
            if (result.hasException) {
              Text(result.exception.toString());
            }
            if (result.isLoading) {
              return Center(
                child: CircularProgressIndicator(),
              );
            }
            final productList = result.data!["books"];
            return Text(productList[0]["name"]);
          },
        ),
        drawer: DrawerVal(),
      ),
    );
  }
}
