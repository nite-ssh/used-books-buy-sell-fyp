import 'package:flutter/material.dart';
import 'package:second_hand_books_buy_sell/graphql/graphqlconfig.dart';
import 'package:second_hand_books_buy_sell/graphql/querymutations.dart';
import 'package:second_hand_books_buy_sell/main.dart';
import 'package:second_hand_books_buy_sell/models/BookInfo.dart';
import 'package:second_hand_books_buy_sell/screens/blog/User.dart';
import 'package:second_hand_books_buy_sell/universal/drawer.dart';
import 'package:graphql_flutter/graphql_flutter.dart';

class ReviewBooks extends StatefulWidget {
  const ReviewBooks({Key? key}) : super(key: key);

  @override
  State<ReviewBooks> createState() => _ReviewBooksState();
}

class _ReviewBooksState extends State<ReviewBooks> {
  String? objectId;
  List<Book> listUser = <Book>[];
  GraphQLConfiguration graphQLConfiguration = GraphQLConfiguration();

  void fillCard() async {
    QueryMutations queryMutation = QueryMutations();
    GraphQLClient _client = graphQLConfiguration.clientToQuery();
    QueryResult result = await _client.query(
      QueryOptions(
        document: gql(queryMutation.getReviewBooks().toString()),
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
    if (result.hasException) {
      Text("oopsie");
    }
  }

  @override
  void initState() {
    super.initState();
    fillCard();
  }

  @override
  Widget build(BuildContext context) {
    return SafeArea(
      child: Scaffold(
        backgroundColor: Colors.blueGrey,
        appBar: AppBar(
          title: Text("Discover"),
        ),
        body: Stack(
          children: [
            Query(
              options: QueryOptions(
                document: gql(QueryMutations().getReviewBooks().toString()),
              ),
              builder: (QueryResult result, {fetchMore, refetch}) {
                if (result.hasException) {
                  Text(result.exception.toString());
                }

                final productList = result.data!["books"];
                return Column(
                  children: [
                    Expanded(
                        child: GridView.builder(
                      gridDelegate: SliverGridDelegateWithFixedCrossAxisCount(
                          crossAxisSpacing: 0,
                          mainAxisSpacing: 0,
                          childAspectRatio: 1.30,
                          crossAxisCount: 1),
                      itemBuilder: (_, index) {
                        return Column(
                          crossAxisAlignment: CrossAxisAlignment.stretch,
                          children: [
                            SizedBox(
                              height: 10,
                            ),
                            Card(
                              color: Colors.white,
                              elevation: 2,
                              child: Column(
                                children: [
                                  Padding(
                                    padding: const EdgeInsets.all(8),
                                    child: ClipRRect(
                                      borderRadius: BorderRadius.circular(6),
                                      child: Image.network(
                                        productList[index]["user"]
                                            ["profilePictureUrl"],
                                        fit: BoxFit.cover,
                                      ),
                                    ),
                                  ),
                                  Text(productList[index]["name"],
                                      style: TextStyle(
                                          fontWeight: FontWeight.bold,
                                          fontSize: 20)),
                                  SizedBox(
                                    height: 20,
                                  ),
                                  Text(
                                    'Genre: ${productList[index]["description"]}',
                                    style:
                                        TextStyle(fontWeight: FontWeight.w500),
                                  ),
                                  SizedBox(height: 5),
                                  Padding(
                                    padding: const EdgeInsets.all(10.0),
                                    child: Text(
                                      productList[index]["name"],
                                      textAlign: TextAlign.justify,
                                      style: TextStyle(height: 1.5),
                                    ),
                                  ),
                                  ElevatedButton(
                                      onPressed: () async {
                                        GraphQLClient _client =
                                            graphQLConfiguration
                                                .clientToQuery();

                                        await _client.mutate(
                                          MutationOptions(
                                            document: gql(QueryMutations()
                                                .updateBookStateToBeSold(
                                                    productList[index]["id"])
                                                .toString()),
                                          ),
                                        );
                                      },
                                      child: Text("Approved"))
                                ],
                              ),
                            ),
                          ],
                        );
                      },
                      itemCount: productList.length,
                    ))
                  ],
                );
              },
            ),
          ],
        ),
      ),
    );
  }
}
