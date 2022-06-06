import 'package:flutter/material.dart';
import 'package:second_hand_books_buy_sell/models/userinfo.dart';
import 'package:second_hand_books_buy_sell/screens/blog/blog_write.dart';
import 'package:second_hand_books_buy_sell/screens/universal/drawer.dart';

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
      drawer: const DrawerVal(),
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
          const SizedBox(
            height: 50,
          ),
          GestureDetector(
            onTap: () {
              Navigator.push(
                context,
                MaterialPageRoute(
                  builder: (context) => const BlogWrite(),
                ),
              );
            },
            child: UserInfo().getUsername() == "admin"
                ? const Icon(
                    Icons.add,
                    color: Colors.white,
                    size: 35,
                  )
                : const Text(""),
          )
        ],
      ),
    );
  }

  Widget buildUser(User user) => Container(
        padding: const EdgeInsets.all(8),
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
                  style: const TextStyle(
                      fontWeight: FontWeight.bold, fontSize: 20)),
              const SizedBox(
                height: 20,
              ),
              Text(
                'Author: ${user.name}',
                style: const TextStyle(fontWeight: FontWeight.w500),
              ),
              const SizedBox(height: 5),
              Padding(
                padding: const EdgeInsets.all(10.0),
                child: Text(
                  user.blogContent,
                  textAlign: TextAlign.justify,
                  style: const TextStyle(height: 1.5),
                ),
              ),
            ],
          ),
        ),
      );
}
