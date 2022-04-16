import 'package:flutter/material.dart';
import 'package:graphql_flutter/graphql_flutter.dart';
import 'package:second_hand_books_buy_sell/graphql/graphqlconfig.dart';
import 'package:second_hand_books_buy_sell/graphql/querymutations.dart';
import 'package:second_hand_books_buy_sell/main.dart';
import 'package:second_hand_books_buy_sell/models/BookInfo.dart';
import 'package:second_hand_books_buy_sell/models/userinfo.dart';
import 'package:second_hand_books_buy_sell/screens/blog/User.dart';
import 'package:second_hand_books_buy_sell/universal/bottom_nav.dart';
import 'package:second_hand_books_buy_sell/utils/routes.dart';

class HomepageCard extends StatefulWidget {
  const HomepageCard({Key? key}) : super(key: key);

  @override
  State<HomepageCard> createState() => _HomepageCardState();
}

class _HomepageCardState extends State<HomepageCard> {
  String? id;
  String? name;
  String? description;
  String? profilepicture;
  String? address;
  void validator($formkey) {
    if ($formkey.currentState!.validate()) {
      // ScaffoldMessenger.of(context).showSnackBar(
      //   const SnackBar(content: Text('Processing Data')),
      // );
    }
  }

  final _addressFormKey = GlobalKey<FormState>();
  TextEditingController phoneNumber = TextEditingController();
  @override
  Widget build(BuildContext context) {
    var a;
    var b;
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
                  childAspectRatio: 0.9,
                  crossAxisCount: 1),
              itemBuilder: (_, index) {
                if (productList[index]["transaction"].length <= 0) {
                  a = "NOT UPDATED";
                  b = false;
                } else {
                  a = productList[index]["transaction"][0]["deliveryState"];
                  b = true;
                }
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
                                    productList[index]["bookPhoto"],
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
                              Text(a.toString(),
                                  style: TextStyle(
                                      fontWeight: FontWeight.bold,
                                      fontSize: 20)),
                              SizedBox(
                                height: 20,
                              ),
                              Text(
                                'Genre: ${productList[index]["id"]}',
                                style: TextStyle(fontWeight: FontWeight.w500),
                              ),
                              SizedBox(height: 5),
                              Padding(
                                padding: const EdgeInsets.all(10.0),
                                child: Text(
                                  "Phone Number: " +
                                      productList[index]["author"],
                                  textAlign: TextAlign.justify,
                                  style: TextStyle(height: 1.5),
                                ),
                              ),
                              b
                                  ? Text("Sold")
                                  : ElevatedButton(
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
                                        setState(() {});

                                        showDialog(
                                          context: context,
                                          builder: (BuildContext context) =>
                                              _buildPopupDialogForMic(
                                                  context,
                                                  productList[index]["author"],
                                                  productList[index]["id"]),
                                        );
                                      },
                                      child: const Text("Buy Book"),
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

  Widget _buildPopupDialogForMic(
      BuildContext context, String address, String bookId) {
    bool showProgress = false;

    return AlertDialog(
      title: const Text('Are you Sure you want to buy this book?'),
      content: Column(
        mainAxisSize: MainAxisSize.min,
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Form(
            key: _addressFormKey,
            child: TextFormField(
                decoration: const InputDecoration(
                  hintText: "Enter your address",
                  labelText: "Address",
                ),
                validator: (value) {
                  if (value == null || value.isEmpty) {
                    return "Please enter required details";
                  }
                  return null;
                },
                onChanged: (val) {
                  address = val;
                }),
          ),
        ],
      ),
      actions: <Widget>[
        FlatButton(
          onPressed: () {
            Navigator.of(context).pop();
          },
          textColor: Theme.of(context).primaryColor,
          child: const Text('Close'),
        ),
        showProgress
            ? Center(child: CircularProgressIndicator())
            : FlatButton(
                onPressed: () {
                  // Navigator.of(context).pop();
                  validator(_addressFormKey);
                  setState(() {
                    showProgress = true;
                  });
                  GraphQLClient _client = graphQLConfiguration.clientToQuery();

                  _client.query(
                    QueryOptions(
                      document: gql(
                        QueryMutations.setBookToOrderPlaced(address, bookId),
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
                            pageBuilder: (_, __, ___) => BottomNav()));
                  });
                },
                textColor: Theme.of(context).primaryColor,
                child: const Text('Submit'),
              ),
      ],
    );
  }
}
