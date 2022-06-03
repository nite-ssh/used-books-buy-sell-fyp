import 'package:flutter/material.dart';
import 'package:second_hand_books_buy_sell/graphql/querymutations.dart';
import 'package:second_hand_books_buy_sell/universal/drawer.dart';
import 'package:graphql_flutter/graphql_flutter.dart';

class DonateBooks extends StatefulWidget {
  const DonateBooks({Key? key}) : super(key: key);

  @override
  State<DonateBooks> createState() => _DonateBooksState();
}

class _DonateBooksState extends State<DonateBooks> {
  @override
  Widget build(BuildContext context) {
    return SafeArea(
      child: Scaffold(
        backgroundColor: Colors.blueGrey,
        appBar: AppBar(
          title: const Text("Donate Books"),
        ),
        body: Query(
          options: QueryOptions(
            document: gql(QueryMutations().getToBeDonated().toString()),
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
            final productList = result.data!["books"];
            return Column(
              children: [
                Expanded(
                    child: GridView.builder(
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
                                      fontWeight: FontWeight.bold,
                                      fontSize: 20)),
                              const SizedBox(
                                height: 20,
                              ),
                              Text(
                                'Genre: ${productList[index]["bookCategoryName"]}',
                                style: const TextStyle(
                                    fontWeight: FontWeight.w500),
                              ),
                              const SizedBox(height: 5),
                              Padding(
                                padding: const EdgeInsets.all(10.0),
                                child: Text(
                                  "Contact: " + productList[index]["author"],
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
        drawer: const DrawerVal(),
      ),
    );
  }
}
