import 'package:flutter/material.dart';
import 'package:graphql_flutter/graphql_flutter.dart';
import 'package:second_hand_books_buy_sell/admin_pages/admin_bottom_nav.dart';
import 'package:second_hand_books_buy_sell/graphql/querymutations.dart';
import 'package:second_hand_books_buy_sell/main.dart';
import 'package:second_hand_books_buy_sell/models/BookInfo.dart';
import 'package:second_hand_books_buy_sell/models/userinfo.dart';
import 'package:second_hand_books_buy_sell/universal/drawer.dart';

class UserOrderInfo extends StatefulWidget {
  const UserOrderInfo({Key? key}) : super(key: key);

  @override
  State<UserOrderInfo> createState() => _UserOrderInfoState();
}

class _UserOrderInfoState extends State<UserOrderInfo> {
  bool showProgress = false;
  @override
  Widget build(BuildContext context) {
    return SafeArea(
      child: Scaffold(
        backgroundColor: Colors.blueGrey,
        appBar: AppBar(
          title: Text("Book Status"),
        ),
        body: showProgress
            ? Center(child: CircularProgressIndicator())
            : Query(
                options: QueryOptions(
                  document:
                      gql(QueryMutations.bookToOrderPlacedVal().toString()),
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
                  final productList = result.data!["transactions"];
                  return Column(
                    children: [
                      Expanded(
                          child: GridView.builder(
                        gridDelegate: SliverGridDelegateWithFixedCrossAxisCount(
                            crossAxisSpacing: 0,
                            mainAxisSpacing: 0,
                            childAspectRatio: 0.5,
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
                                    Image.network(
                                      productList[index]["book"]["bookPhoto"],
                                      fit: BoxFit.cover,
                                    ),
                                    SizedBox(height: 20),
                                    Text(productList[index]["book"]["name"],
                                        style: TextStyle(
                                            fontWeight: FontWeight.bold,
                                            fontSize: 20)),
                                    SizedBox(
                                      height: 20,
                                    ),
                                    Text(
                                      "Price: " +
                                          productList[index]["book"]["price"]
                                              .toString(),
                                    ),
                                    SizedBox(
                                      height: 5,
                                    ),
                                    SizedBox(height: 5),
                                    Padding(
                                      padding: const EdgeInsets.all(10.0),
                                      child: Text(
                                        "Buyer's Username: " +
                                            productList[index]["user"]
                                                    ["username"]
                                                .toString(),
                                        textAlign: TextAlign.justify,
                                        style: TextStyle(height: 1.5),
                                      ),
                                    ),
                                    SizedBox(
                                      height: 5,
                                    ),
                                    Padding(
                                      padding: const EdgeInsets.all(10.0),
                                      child: Text(
                                        "Book State: " +
                                            productList[index]["book"]
                                                    ["bookStateName"]
                                                .toString(),
                                        textAlign: TextAlign.justify,
                                        style: TextStyle(height: 1.5),
                                      ),
                                    ),
                                    SizedBox(height: 5),
                                    Padding(
                                      padding: const EdgeInsets.all(10.0),
                                      child: Text(
                                        "Delivery State: " +
                                            productList[index]["deliveryState"]
                                                .toString(),
                                        textAlign: TextAlign.justify,
                                        style: TextStyle(height: 1.5),
                                      ),
                                    ),
                                    SizedBox(height: 5),
                                    Padding(
                                      padding: const EdgeInsets.all(10.0),
                                      child: Text(
                                        "Address of  buyer: " +
                                            productList[index]["address"]
                                                .toString(),
                                        textAlign: TextAlign.justify,
                                        style: TextStyle(height: 1.5),
                                      ),
                                    ),
                                    SizedBox(height: 5),
                                    Padding(
                                      padding: const EdgeInsets.all(10.0),
                                      child: Text(
                                        "Seller phone Number: " +
                                            productList[index]["book"]["author"]
                                                .toString(),
                                        textAlign: TextAlign.justify,
                                        style: TextStyle(height: 1.5),
                                      ),
                                    ),
                                    SizedBox(
                                      height: 20,
                                    ),
                                    Row(
                                      mainAxisAlignment:
                                          MainAxisAlignment.center,
                                      children: [
                                        showProgress
                                            ? Center(
                                                child:
                                                    CircularProgressIndicator())
                                            : ElevatedButton(
                                                onPressed: () async {
                                                  showDialog(
                                                    context: context,
                                                    builder: (BuildContext
                                                            context) =>
                                                        _buildPopupDialogForInRoute(
                                                            context,
                                                            productList[index]
                                                                ["id"]),
                                                  );
                                                },
                                                child: Text("In Route")),
                                        SizedBox(
                                          width: 20,
                                        ),
                                        showProgress
                                            ? Center(
                                                child:
                                                    CircularProgressIndicator())
                                            : ElevatedButton(
                                                onPressed: () {
                                                  showDialog(
                                                    context: context,
                                                    builder: (BuildContext
                                                            context) =>
                                                        _buildPopupDialogForDelivered(
                                                            context,
                                                            productList[index]
                                                                ["id"]),
                                                  );
                                                },
                                                child: Text("Delivered"))
                                      ],
                                    )
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
        drawer: DrawerVal(),
      ),
    );
  }

  Widget _buildPopupDialogForInRoute(
      BuildContext context, String transactionId) {
    bool showProgress = false;

    return AlertDialog(
      title: const Text(
          'Are you Sure you want to buy this book to be set in route?'),
      content: Column(
        mainAxisSize: MainAxisSize.min,
        crossAxisAlignment: CrossAxisAlignment.start,
      ),
      actions: <Widget>[
        FlatButton(
          onPressed: () {
            Navigator.of(context).pop();
          },
          textColor: Theme.of(context).primaryColor,
          child: const Text('Close'),
        ),
        FlatButton(
          onPressed: () async {
            setState(() {
              showProgress = true;
            });
            GraphQLClient abc = graphQLConfiguration.clientToQuery();

            await abc.query(
              QueryOptions(
                document: gql(
                  QueryMutations.updateDeliveryStateInRoute(transactionId),
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
                      pageBuilder: (_, __, ___) => AdminBottomNav()));
            });
          },
          textColor: Theme.of(context).primaryColor,
          child: const Text('Submit'),
        ),
      ],
    );
  }

  Widget _buildPopupDialogForDelivered(
      BuildContext context, String transactionId) {
    bool showProgress = false;

    return AlertDialog(
      title: const Text(
          'Are you Sure you want to buy this book State to be set Delivered?'),
      content: Column(
        mainAxisSize: MainAxisSize.min,
        crossAxisAlignment: CrossAxisAlignment.start,
      ),
      actions: <Widget>[
        FlatButton(
          onPressed: () {
            Navigator.of(context).pop();
          },
          textColor: Theme.of(context).primaryColor,
          child: const Text('Close'),
        ),
        FlatButton(
          onPressed: () async {
            setState(() {
              showProgress = true;
            });
            GraphQLClient abc = graphQLConfiguration.clientToQuery();

            await abc.query(
              QueryOptions(
                document: gql(
                  QueryMutations.updateDeliveryStateDelivered(transactionId),
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
                      pageBuilder: (_, __, ___) => AdminBottomNav()));
            });
          },
          textColor: Theme.of(context).primaryColor,
          child: const Text('Submit'),
        ),
      ],
    );
  }
}
