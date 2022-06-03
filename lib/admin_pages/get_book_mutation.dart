import 'package:flutter/material.dart';
import 'package:graphql_flutter/graphql_flutter.dart';
import 'package:second_hand_books_buy_sell/admin_pages/button_review/review_btn.dart';
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
            return const Center(
              child: CircularProgressIndicator(),
            );
          }
          final productList = result.data!["bookUnverifieds"];
          if (productList == null) {
            return const Center(
                child: Text(
              "No Books were found of Following Category",
              style: TextStyle(color: Colors.white),
            ));
          }
          return Stack(
            children: [
              GridView.builder(
                gridDelegate: const SliverGridDelegateWithFixedCrossAxisCount(
                    crossAxisSpacing: 0,
                    mainAxisSpacing: 0,
                    childAspectRatio: 0.55,
                    crossAxisCount: 1),
                itemBuilder: (_, index) {
                  return Column(
                    crossAxisAlignment: CrossAxisAlignment.stretch,
                    children: [
                      const SizedBox(
                        height: 10,
                      ),
                      Card(
                        color: Colors.white,
                        elevation: 2,
                        child: Column(
                          children: [
                            Padding(
                              padding: const EdgeInsets.symmetric(
                                  vertical: 30, horizontal: 90),
                              child: Image.network(
                                productList[index]["bookPhoto"],
                                fit: BoxFit.cover,
                              ),
                            ),
                            const SizedBox(height: 20),
                            Text(productList[index]["name"],
                                style: const TextStyle(
                                    fontWeight: FontWeight.bold, fontSize: 20)),
                            const SizedBox(
                              height: 20,
                            ),
                            Text(
                              "Price: " +
                                  productList[index]["price"].toString(),
                            ),
                            const SizedBox(
                              height: 20,
                            ),
                            Text(
                              'Genre: ${productList[index]["bookCategoryName"]}',
                              style:
                                  const TextStyle(fontWeight: FontWeight.w500),
                            ),
                            Padding(
                              padding: const EdgeInsets.all(10.0),
                              child: Text(
                                "Seller Username: " +
                                    productList[index]["user"]["username"],
                                textAlign: TextAlign.justify,
                                style: const TextStyle(height: 1.5),
                              ),
                            ),
                            Padding(
                              padding: const EdgeInsets.all(10.0),
                              child: Text(
                                "Seller phone Number: " +
                                    productList[index]["author"],
                                textAlign: TextAlign.justify,
                                style: const TextStyle(height: 1.5),
                              ),
                            ),
                            const Text("Description:"),
                            Padding(
                              padding: const EdgeInsets.all(5.0),
                              child: Text(
                                productList[index]["description"],
                                textAlign: TextAlign.justify,
                                style: const TextStyle(height: 1.5),
                              ),
                            ),

                            const SizedBox(
                              height: 20,
                            ),
                            Padding(
                              padding: const EdgeInsets.all(10.0),
                              child: Text(
                                "Book State: " +
                                    productList[index]["bookStateName"],
                                textAlign: TextAlign.justify,
                                style: const TextStyle(height: 1.5),
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
