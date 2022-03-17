import 'package:flutter/material.dart';
import 'package:second_hand_books_buy_sell/screens/blog/blog_write.dart';
import 'package:second_hand_books_buy_sell/universal/drawer.dart';

import '../../services/crud.dart';
import 'User.dart';

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
      body: StreamBuilder<List<User>>(
          stream: CrudMethods.readBlogs(),
          builder: (context, snapshot) {
            if (snapshot.hasData) {
              final user = snapshot.data!;
              return ListView(
                children: user.map(buildUser).toList(),
              );
            } else {
              return const Center(child: CircularProgressIndicator());
            }
          }),
      floatingActionButton: Column(
        mainAxisAlignment: MainAxisAlignment.start,
        children: [
          SizedBox(
            height: 50,
          ),
          GestureDetector(
            onTap: () {
              Navigator.push(
                context,
                MaterialPageRoute(
                  builder: (context) => BlogWrite(),
                ),
              );
            },
            child: const Icon(
              Icons.add,
              color: Colors.white,
              size: 35,
            ),
          )
        ],
      ),
    );
  }

  Widget buildUser(User user) => Container(
        padding: EdgeInsets.all(8),
        color: Colors.blueGrey,
        child: Card(
          color: Colors.white,
          elevation: 2,
          child: Column(
            children: [
              Padding(
                padding: const EdgeInsets.all(10),
                child: ClipRRect(
                  borderRadius: BorderRadius.circular(6),
                  child: Image.network(
                    user.imageUrl,
                    fit: BoxFit.cover,
                  ),
                ),
              ),
              Text(user.title,
                  style: TextStyle(fontWeight: FontWeight.bold, fontSize: 20)),
              SizedBox(
                height: 20,
              ),
              Text(
                'Author: ${user.name}',
                style: TextStyle(fontWeight: FontWeight.w500),
              ),
              SizedBox(height: 5),
              Padding(
                padding: const EdgeInsets.all(10.0),
                child: Text(
                  user.blogContent,
                  textAlign: TextAlign.justify,
                  style: TextStyle(height: 1.5),
                ),
              ),
            ],
          ),
        ),
      );
}
