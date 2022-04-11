import 'package:flutter/material.dart';
import 'package:second_hand_books_buy_sell/models/BookInfo.dart';
import 'package:second_hand_books_buy_sell/models/userinfo.dart';

class UserInfoAdmin extends StatefulWidget {
  const UserInfoAdmin({Key? key}) : super(key: key);

  @override
  State<UserInfoAdmin> createState() => _UserInfoAdminState();
}

class _UserInfoAdminState extends State<UserInfoAdmin> {
  @override
  Widget build(BuildContext context) {
    return Expanded(
        child: Stack(
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
                            Book().getProfilePictureUrl(),
                            fit: BoxFit.cover,
                            height: 80,
                          ),
                        ),
                      ),
                      Text(UserInfo().getAddress(),
                          style: TextStyle(
                              fontWeight: FontWeight.bold, fontSize: 20)),
                      SizedBox(
                        height: 10,
                      ),
                      Text(
                        'Genre: ${Book().getDescription()}',
                        style: TextStyle(fontWeight: FontWeight.w500),
                      ),
                      // SizedBox(height: 5),
                      Padding(
                        padding: const EdgeInsets.all(10.0),
                        child: Text(
                          UserInfo().getAddress(),
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
        )
      ],
    ));
  }
}
