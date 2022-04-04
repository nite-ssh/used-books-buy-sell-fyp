import 'package:flutter/material.dart';
import 'package:second_hand_books_buy_sell/admin_pages/admin_bottom_nav.dart';
import 'package:second_hand_books_buy_sell/admin_pages/button_review/sort_btn.dart';

class SortUi extends StatelessWidget {
  const SortUi({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return ListView(
      scrollDirection: Axis.horizontal,
      children: [
        SizedBox(
          width: 20,
        ),
        ElevatedButton(
          onPressed: () {
            Navigator.push(
                context,
                PageRouteBuilder(
                    pageBuilder: (_, __, ___) => AdminBottomNav()));
          },
          child: RichText(
            text: TextSpan(
              children: [
                WidgetSpan(
                  child: Icon(
                    Icons.home,
                    size: 25,
                    color: Colors.white,
                  ),
                ),
              ],
            ),
          ),
        ),
        SizedBox(
          width: 20,
        ),
        SortCategoryBtn(
          category: "SEE_PREPARATION",
          title: "SEE Preparation",
        ),
        SizedBox(
          width: 20,
        ),
        SortCategoryBtn(
          category: "MEDICAL_PREPARATION",
          title: "Medical Preparation",
        ),
        SizedBox(
          width: 20,
        ),
        SortCategoryBtn(
          category: "ENGINEERING_PREPARATION",
          title: "Engineering Preparation",
        ),
        SizedBox(
          width: 20,
        ),
        SortCategoryBtn(
          category: "SCIENCE_FICTION",
          title: "Science Fiction",
        ),
        SizedBox(
          width: 20,
        ),
      ],
    );
  }
}
