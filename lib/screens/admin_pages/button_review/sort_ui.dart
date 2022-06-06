import 'package:flutter/material.dart';
import 'package:second_hand_books_buy_sell/screens/admin_pages/admin_bottom_nav.dart';
import 'package:second_hand_books_buy_sell/screens/admin_pages/button_review/sort_btn.dart';

class SortUi extends StatelessWidget {
  const SortUi({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return ListView(
      scrollDirection: Axis.horizontal,
      children: [
        const SizedBox(
          width: 20,
        ),
        ElevatedButton(
          onPressed: () {
            Navigator.push(
                context,
                PageRouteBuilder(
                    pageBuilder: (_, __, ___) => const AdminBottomNav()));
          },
          child: RichText(
            text: const TextSpan(
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
        const SizedBox(
          width: 20,
        ),
        const SortCategoryBtn(
          category: "SEE_PREPARATION",
          title: "SEE Preparation",
        ),
        const SizedBox(
          width: 20,
        ),
        const SortCategoryBtn(
          category: "MEDICAL_PREPARATION",
          title: "Medical Preparation",
        ),
        const SizedBox(
          width: 20,
        ),
        const SortCategoryBtn(
          category: "ENGINEERING_PREPARATION",
          title: "Engineering Preparation",
        ),
        const SizedBox(
          width: 20,
        ),
        const SortCategoryBtn(
          category: "SCIENCE_FICTION",
          title: "Science Fiction",
        ),
        const SizedBox(
          width: 20,
        ),
      ],
    );
  }
}
