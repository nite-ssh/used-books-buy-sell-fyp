import 'package:flutter/material.dart';
import 'package:second_hand_books_buy_sell/admin_pages/review_btn.dart';
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
  List<Book> listUser = <Book>[];
  GraphQLConfiguration graphQLConfiguration = GraphQLConfiguration();

  void fillList() async {
    QueryMutations queryMutation = QueryMutations();
    GraphQLClient _client = graphQLConfiguration.clientToQuery();
    QueryResult result = await _client.query(
      QueryOptions(
        document: gql(queryMutation.getReviewBooks()),
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
        body: Query(
          options: QueryOptions(
            document: gql(QueryMutations().getReviewBooks().toString()),
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
            return Stack(
              children: [
                GridView.builder(
                  gridDelegate: SliverGridDelegateWithFixedCrossAxisCount(
                      crossAxisSpacing: 0,
                      mainAxisSpacing: 0,
                      childAspectRatio: 1.20,
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
                                style: TextStyle(fontWeight: FontWeight.w500),
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
                              ReviewBtn(
                                id: productList[index]["id"],
                              ),
                            ],
                          ),
                        ),
                      ],
                    );
                  },
                  itemCount: productList.length,
                )
              ],
            );
          },
        ),
        drawer: DrawerVal(),
      ),
    );
  }
}
