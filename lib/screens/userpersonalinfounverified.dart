import 'package:flutter/material.dart';
import 'package:graphql_flutter/graphql_flutter.dart';
import 'package:second_hand_books_buy_sell/graphql/querymutations.dart';
import 'package:second_hand_books_buy_sell/models/userinfo.dart';

class UserPersonalInfoUnverified extends StatefulWidget {
  const UserPersonalInfoUnverified({Key? key}) : super(key: key);

  @override
  State<UserPersonalInfoUnverified> createState() =>
      _UserPersonalInfoUnverifiedState();
}

class _UserPersonalInfoUnverifiedState
    extends State<UserPersonalInfoUnverified> {
  @override
  Widget build(BuildContext context) {
    var a;
    var b;
    return SafeArea(
      child: Scaffold(
        backgroundColor: Colors.blueGrey,
        appBar: AppBar(
          title:
              Text("Unverified Books uploaded by ${UserInfo().getUsername()}"),
        ),
        body: SizedBox(
          child: Column(
            children: [
              Expanded(
                child: Query(
                  options: QueryOptions(
                    document: gql(
                        QueryMutations.getSpecificUnverifiedUserValues()
                            .toString()),
                  ),
                  builder: (QueryResult result, {fetchMore, refetch}) {
                    if (result.hasException) {
                      Text(result.exception.toString());
                    }
                    if (result.isLoading) {
                      return const Center(
                        child: CircularProgressIndicator(),
                      );
                    }
                    final productList = result.data!["bookUnverifieds"];
                    if (productList == null) {
                      return const Text("");
                    }
                    return Column(
                      children: [
                        Expanded(
                          child: GridView.builder(
                            gridDelegate:
                                const SliverGridDelegateWithFixedCrossAxisCount(
                                    crossAxisSpacing: 0,
                                    mainAxisSpacing: 0,
                                    childAspectRatio: 1,
                                    crossAxisCount: 1),
                            itemBuilder: (_, index) {
                              if (productList[index]["transaction"].length <=
                                  0) {
                                a = "NOT UPDATED";
                                b = false;
                              } else {
                                a = productList[index]["transaction"][0]
                                    ["deliveryState"];
                                b = true;
                              }

                              return Column(
                                crossAxisAlignment: CrossAxisAlignment.stretch,
                                children: [
                                  const SizedBox(
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
                                                borderRadius:
                                                    BorderRadius.circular(6),
                                                child: Image.network(
                                                  productList[index]
                                                      ["bookPhoto"],
                                                  fit: BoxFit.cover,
                                                ),
                                              ),
                                            ),
                                            Text(productList[index]["name"],
                                                style: const TextStyle(
                                                    fontWeight: FontWeight.bold,
                                                    fontSize: 20)),
                                            const SizedBox(
                                              height: 20,
                                            ),
                                            Text(
                                              'Genre: ${productList[index]["description"]}',
                                              style: const TextStyle(
                                                  fontWeight: FontWeight.w500),
                                            ),
                                            const SizedBox(height: 5),
                                            Padding(
                                              padding:
                                                  const EdgeInsets.all(10.0),
                                              child: Text(
                                                'Book status: ${productList[index]["bookStateName"]}',
                                                textAlign: TextAlign.justify,
                                                style: const TextStyle(
                                                    height: 1.5),
                                              ),
                                            ),
                                            const SizedBox(height: 5),
                                            Padding(
                                              padding:
                                                  const EdgeInsets.all(10.0),
                                              child: Text(
                                                'transaction status: ${a.toString()}',
                                                textAlign: TextAlign.justify,
                                                style: const TextStyle(
                                                    height: 1.5),
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
                          ),
                        )
                      ],
                    );
                  },
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
