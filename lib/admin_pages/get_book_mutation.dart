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
          return Stack(
            children: [
              GridView.builder(
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
                                  productList[index]["bookPhoto"],
                                  fit: BoxFit.cover,
                                  height: 80,
                                ),
                              ),
                            ),
                            Text(productList[index]["name"],
                                style: TextStyle(
                                    fontWeight: FontWeight.bold, fontSize: 20)),
                            SizedBox(
                              height: 10,
                            ),
                            Text(
                              'Genre: ${productList[index]["description"]}',
                              style: TextStyle(fontWeight: FontWeight.w500),
                            ),
                            // SizedBox(height: 5),
                            Padding(
                              padding: const EdgeInsets.all(10.0),
                              child: Text(
                                productList[index]["name"],
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
