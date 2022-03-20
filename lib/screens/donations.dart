import 'package:flutter/material.dart';
import 'package:second_hand_books_buy_sell/universal/drawer.dart';
import 'package:graphql_flutter/graphql_flutter.dart';

const bookgraphql = """
{
  books{
    name
    description
    user{
      profilePictureUrl
    }
  }
}
""";

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
          title: Text("Donate Books"),
        ),
        body: Query(
          options: QueryOptions(
            document: gql(bookgraphql.toString()),
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
                      childAspectRatio: 1.79,
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
}
