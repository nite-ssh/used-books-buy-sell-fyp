import 'package:flutter/material.dart';
import 'package:graphql_flutter/graphql_flutter.dart';
import 'package:second_hand_books_buy_sell/admin_pages/button_review/review_btn.dart';
import 'package:second_hand_books_buy_sell/graphql/querymutations.dart';

import 'button_review/delete_btn.dart';

class GetBooksMutation extends StatefulWidget {
  var functionVal;
  GetBooksMutation({Key? key, required this.functionVal}) : super(key: key);

  @override
  State<GetBooksMutation> createState() => _GetBooksMutationState();
}

class _GetBooksMutationState extends State<GetBooksMutation> {
  @override
  Widget build(BuildContext context) {
    return Expanded(
      child: Query(
        options: QueryOptions(
          document: gql(widget.functionVal.toString()),
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
          final productList = result.data!["bookUnverifieds"];
          if (productList == null) {
            return Center(
                child: Text(
              "No Books were found of Following Category",
              style: TextStyle(color: Colors.white),
            ));
          }
          return Stack(
            children: [
              GridView.builder(
                gridDelegate: SliverGridDelegateWithFixedCrossAxisCount(
                    crossAxisSpacing: 0,
                    mainAxisSpacing: 0,
                    childAspectRatio: 0.6,
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
                              productList[index]["bookPhoto"],
                              fit: BoxFit.cover,
                            ),
                            SizedBox(height: 20),
                            Text(productList[index]["name"],
                                style: TextStyle(
                                    fontWeight: FontWeight.bold, fontSize: 20)),
                            SizedBox(
                              height: 20,
                            ),
                            Text(
                              "Price: " +
                                  productList[index]["price"].toString(),
                            ),
                            SizedBox(
                              height: 20,
                            ),
                            Text(
                              'Genre: ${productList[index]["bookCategoryName"]}',
                              style: TextStyle(fontWeight: FontWeight.w500),
                            ),
                            Padding(
                              padding: const EdgeInsets.all(10.0),
                              child: Text(
                                "Seller Username: " +
                                    productList[index]["user"]["username"],
                                textAlign: TextAlign.justify,
                                style: TextStyle(height: 1.5),
                              ),
                            ),
                            Padding(
                              padding: const EdgeInsets.all(10.0),
                              child: Text(
                                "Seller phone Number: " +
                                    productList[index]["author"],
                                textAlign: TextAlign.justify,
                                style: TextStyle(height: 1.5),
                              ),
                            ),
                            Text("Description:"),
                            Padding(
                              padding: const EdgeInsets.all(5.0),
                              child: Text(
                                productList[index]["description"],
                                textAlign: TextAlign.justify,
                                style: TextStyle(height: 1.5),
                              ),
                            ),

                            SizedBox(
                              height: 20,
                            ),
                            Padding(
                              padding: const EdgeInsets.all(10.0),
                              child: Text(
                                "Book State: " +
                                    productList[index]["bookStateName"],
                                textAlign: TextAlign.justify,
                                style: TextStyle(height: 1.5),
                              ),
                            ),
                            Padding(
                              padding:
                                  const EdgeInsets.symmetric(horizontal: 90),
                              child: Row(
                                mainAxisAlignment:
                                    MainAxisAlignment.spaceAround,
                                children: [
                                  ReviewBtn(
                                    id: productList[index]["id"],
                                    name: productList[index]["name"],
                                    price: productList[index]["price"],
                                    description: productList[index]
                                        ["description"],
                                    author: productList[index]["author"],
                                    photo: productList[index]["bookPhoto"],
                                    userID: productList[index]["user"]["id"],
                                    bookState: productList[index]
                                        ["bookStateName"],
                                    bookCategory: productList[index]
                                        ["bookCategoryName"],
                                  ),
                                  DeleteBtn(
                                    id: productList[index]["id"],
                                  ),
                                ],
                              ),
                            ),

                            // SizedBox(
                            //   height: 20,
                            // ),
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
    );
  }
}
