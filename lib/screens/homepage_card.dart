import 'package:flutter/material.dart';
import 'package:graphql_flutter/graphql_flutter.dart';
import 'package:second_hand_books_buy_sell/graphql/graphqlconfig.dart';
import 'package:second_hand_books_buy_sell/graphql/querymutations.dart';
import 'package:second_hand_books_buy_sell/models/BookInfo.dart';
import 'package:second_hand_books_buy_sell/screens/blog/User.dart';
import 'package:second_hand_books_buy_sell/utils/routes.dart';

class HomepageCard extends StatefulWidget {
  const HomepageCard({Key? key}) : super(key: key);

  @override
  State<HomepageCard> createState() => _HomepageCardState();
}

class _HomepageCardState extends State<HomepageCard> {
  TextEditingController phoneNumber = TextEditingController();
  Widget _buildPopupDialogForMic(BuildContext context) {
    return new AlertDialog(
      title: const Text('Popup example'),
      content: new Column(
        mainAxisSize: MainAxisSize.min,
        crossAxisAlignment: CrossAxisAlignment.start,
        children: <Widget>[
          Text("Hello"),
        ],
      ),
      actions: <Widget>[
        new FlatButton(
          onPressed: () {
            Navigator.of(context).pop();
          },
          textColor: Theme.of(context).primaryColor,
          child: const Text('Close'),
        ),
      ],
    );
  }

  @override
  Widget build(BuildContext context) {
    return Query(
      options: QueryOptions(
        document: gql(QueryMutations().getToBeSold().toString()),
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
        return Column(
          children: [
            Expanded(
                child: GridView.builder(
              gridDelegate: SliverGridDelegateWithFixedCrossAxisCount(
                  crossAxisSpacing: 0,
                  mainAxisSpacing: 0,
                  childAspectRatio: 1.35,
                  crossAxisCount: 1),
              itemBuilder: (_, index) {
                return Column(
                  crossAxisAlignment: CrossAxisAlignment.stretch,
                  children: [
                    SizedBox(
                      height: 10,
                    ),
                    GestureDetector(
                      child: Card(
                        color: Colors.white,
                        elevation: 2,
                        child: Expanded(
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
                              ElevatedButton(
                                onPressed: () {
                                  // Container(
                                  //   padding: EdgeInsets.only(top: 160.0),
                                  //   child: TextField(
                                  //     maxLength: 40,
                                  //     controller: phoneNumber,
                                  //     decoration: InputDecoration(
                                  //       icon: Icon(Icons.text_rotate_vertical),
                                  //       labelText: "Phone Number",
                                  //     ),
                                  //   ),
                                  // );
                                  // Book().setId(productList[index]["id"]);
                                  // Book().setId(productList[index]["name"]);
                                  // Book()
                                  //     .setId(productList[index]["description"]);
                                  // Book().setId(productList[index]["user"]
                                  //     ["profilePictureUrl"]);
                                  showDialog(
                                    context: context,
                                    builder: (BuildContext context) =>
                                        _buildPopupDialogForMic(context),
                                  );
                                },
                                child: const Text("Need Driver?"),
                              )
                            ],
                          ),
                        ),
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
    );
  }
}
