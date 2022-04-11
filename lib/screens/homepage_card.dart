import 'package:flutter/material.dart';
import 'package:graphql_flutter/graphql_flutter.dart';
import 'package:second_hand_books_buy_sell/graphql/graphqlconfig.dart';
import 'package:second_hand_books_buy_sell/graphql/querymutations.dart';
import 'package:second_hand_books_buy_sell/models/BookInfo.dart';
import 'package:second_hand_books_buy_sell/models/userinfo.dart';
import 'package:second_hand_books_buy_sell/screens/blog/User.dart';
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
                  childAspectRatio: 0.5,
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
                                    productList[index]["author"],
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
                                  setState(() {
                                    id = productList[index]["id"];
                                    name = productList[index]["name"];
                                    description =
                                        productList[index]["description"];
                                    profilepicture =
                                        productList[index]["author"];
                                  });

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

  Widget _buildPopupDialogForMic(BuildContext context) {
    return new AlertDialog(
      title: const Text('Need Driver?'),
      content: new Column(
        mainAxisSize: MainAxisSize.min,
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Form(
            key: _addressFormKey,
            child: TextFormField(
              decoration: InputDecoration(
                hintText: "Enter your Address",
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
              },
            ),
          ),
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
        new FlatButton(
          onPressed: () {
            // Navigator.of(context).pop();
            validator(_addressFormKey);
            Book().setId(id.toString());
            Book().setSellerName(name.toString());
            Book().setDescription(description.toString());
            Book().setProfilePictureUrl(profilepicture.toString());
            UserInfo().setAddress(address.toString());
            print(UserInfo().getAddress());
          },
          textColor: Theme.of(context).primaryColor,
          child: const Text('Submit'),
        ),
      ],
    );
  }
}
