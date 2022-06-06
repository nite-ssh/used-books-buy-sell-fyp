import 'package:flutter/material.dart';
import 'package:second_hand_books_buy_sell/graphql/querymutations.dart';
import 'package:second_hand_books_buy_sell/screens/admin_pages/drivers/driver_info.dart';
import 'package:second_hand_books_buy_sell/screens/admin_pages/review_books.dart';
import 'package:second_hand_books_buy_sell/screens/admin_pages/userinformation_admin.dart';
import 'package:second_hand_books_buy_sell/screens/blog/blog.dart';

class AdminBottomNav extends StatefulWidget {
  const AdminBottomNav({Key? key}) : super(key: key);

  @override
  _AdminBottomNavState createState() => _AdminBottomNavState();
}

class _AdminBottomNavState extends State<AdminBottomNav> {
  int _selectedIndex = 0;
  static const TextStyle optionStyle =
      TextStyle(fontSize: 30, fontWeight: FontWeight.bold);
  static List<Widget> _widgetOptions = <Widget>[
    ReviewBooks(
      bookMutation: QueryMutations.getReviewBooks(),
    ),
    UserOrderInfo(),
    DriverInfo(),
    Blog(),
  ];

  void _onItemTapped(int index) {
    setState(() {
      _selectedIndex = index;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Center(
        child: _widgetOptions.elementAt(_selectedIndex),
      ),
      bottomNavigationBar: BottomNavigationBar(
        type: BottomNavigationBarType.fixed,
        backgroundColor: Colors.teal,
        items: const <BottomNavigationBarItem>[
          BottomNavigationBarItem(
            icon: Icon(Icons.reviews_sharp),
            label: 'Review Books',
          ),
          BottomNavigationBarItem(
            icon: Icon(Icons.person),
            label: 'Book Status',
          ),
          BottomNavigationBarItem(
            icon: Icon(
              Icons.drive_eta_rounded,
            ),
            label: 'Drivers Info',
          ),
          BottomNavigationBarItem(
            icon: Icon(Icons.menu_book),
            label: 'Blogs',
          )
        ],
        currentIndex: _selectedIndex,
        unselectedItemColor: Colors.white,
        selectedItemColor: const Color(0xff1D1C1A),
        onTap: _onItemTapped,
      ),
    );
  }
}
