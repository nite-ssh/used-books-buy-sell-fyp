import 'package:flutter/material.dart';
import 'package:graphql_flutter/graphql_flutter.dart';
import 'package:second_hand_books_buy_sell/graphql/querymutations.dart';

class UserPersonalInfoUI extends StatefulWidget {
  const UserPersonalInfoUI({Key? key}) : super(key: key);

  @override
  State<UserPersonalInfoUI> createState() => _UserPersonalInfoUIState();
}

class _UserPersonalInfoUIState extends State<UserPersonalInfoUI> {
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
        document: gql(QueryMutations.getSpecificUserValues().toString()),
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
                              Text(
                                'Genre: ${productList[index]["description"]}',
                                style: TextStyle(fontWeight: FontWeight.w500),
                              ),
                              SizedBox(height: 5),
                              Padding(
                                padding: const EdgeInsets.all(10.0),
                                child: Text(
                                  'Book status: ${productList[index]["bookStateName"]}',
                                  textAlign: TextAlign.justify,
                                  style: TextStyle(height: 1.5),
                                ),
                              ),
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
