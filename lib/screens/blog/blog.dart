import 'package:flutter/material.dart';
import 'package:second_hand_books_buy_sell/screens/blog/blog_write.dart';
import 'package:second_hand_books_buy_sell/universal/drawer.dart';

class Blog extends StatefulWidget {
  const Blog({Key? key}) : super(key: key);

  @override
  _BlogState createState() => _BlogState();
}

class _BlogState extends State<Blog> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text("Blog"),
      ),
      drawer: DrawerVal(),
      floatingActionButton: Row(
        mainAxisAlignment: MainAxisAlignment.end,
        children: [
          FloatingActionButton(
            onPressed: () {
              Navigator.push(
                context,
                MaterialPageRoute(
                  builder: (context) => BlogWrite(),
                ),
              );
            },
            child: const Icon(
              Icons.add,
            ),
          )
        ],
      ),
    );
  }
}
