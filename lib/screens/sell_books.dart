import 'dart:io';

import 'package:flutter/material.dart';
import 'package:image_picker/image_picker.dart';
import 'package:second_hand_books_buy_sell/services/crud.dart';

class SellBooks extends StatefulWidget {
  const SellBooks({Key? key}) : super(key: key);

  @override
  State<SellBooks> createState() => _SellBooksState();
}

class _SellBooksState extends State<SellBooks> {
  File? _image;
  CrudMethods crud = CrudMethods();
  Future getImage() async {
    final ImagePicker _picker = ImagePicker();
    // Pick an image
    var pickedFile = await _picker.pickImage(source: ImageSource.gallery);
    setState(() {
      try {
        _image = File(pickedFile!.path);
      } catch (e) {
        Navigator.pop(context);
      }
    });
  }

  @override
  Widget build(BuildContext context) {
    return Container();
  }
}
