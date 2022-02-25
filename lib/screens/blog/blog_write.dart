import 'dart:developer';
import 'dart:io';
import 'package:firebase_storage/firebase_storage.dart';
import 'package:flutter/material.dart';
import 'package:image_picker/image_picker.dart';
import 'package:random_string/random_string.dart';
import 'package:second_hand_books_buy_sell/get_dark_theme.dart';
import 'package:second_hand_books_buy_sell/services/crud.dart';
import 'package:second_hand_books_buy_sell/universal/bottom_nav.dart';

import '../../utils/routes.dart';

class BlogWrite extends StatefulWidget {
  const BlogWrite({Key? key}) : super(key: key);

  @override
  _BlogWriteState createState() => _BlogWriteState();
}

class _BlogWriteState extends State<BlogWrite> {
  String? name, title, blogContent;
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
        Navigator.pushNamed(context, MyRoutes.navRoute);
      }
    });
  }

  uploadBlog() async {
    if (_image != null) {
      Reference firebaseStorageref = FirebaseStorage.instance
          .ref()
          .child("blogImages")
          .child("${randomAlphaNumeric(9)}.jpg");
      var task = await firebaseStorageref.putFile(_image as File);
      var imageUrl = await task.ref.getDownloadURL();
      print(imageUrl);
      return;
    } else {}
  }

  Widget _buildPopupDialog(BuildContext context) {
    return AlertDialog(
      title: const Text('Blog uploaded'),
      content: Column(
        mainAxisSize: MainAxisSize.min,
        crossAxisAlignment: CrossAxisAlignment.start,
        children: const <Widget>[
          Text("The blog has been uploaded"),
        ],
      ),
      actions: <Widget>[
        FlatButton(
          onPressed: () {
            Navigator.pushNamed(context, MyRoutes.navRoute);
          },
          textColor: Theme.of(context).primaryColor,
          child: const Text('Return to Home'),
        ),
      ],
    );
  }

  @override
  Widget build(BuildContext context) {
    return SafeArea(
      child: Theme(
        data: GetDarkTheme().getDarkTheme(),
        child: Scaffold(
          appBar: AppBar(
            elevation: 0.0,
            title: const Center(
              child: Text("Write a Blog"),
            ),
            actions: <Widget>[
              Container(
                padding: const EdgeInsets.all(10.0),
                child: GestureDetector(
                  onTap: () => {
                    uploadBlog(),
                    showDialog(
                      context: context,
                      builder: (BuildContext context) =>
                          _buildPopupDialog(context),
                    ),
                  },
                  child: const Icon(
                    Icons.file_upload,
                    size: 25,
                  ),
                ),
              ),
            ],
          ),
          body: SingleChildScrollView(
            child: Column(
              children: [
                const SizedBox(
                  height: 10,
                ),
                GestureDetector(
                  onTap: () {
                    getImage();
                  },
                  child: _image != null
                      ? Container(
                          margin: EdgeInsets.symmetric(horizontal: 16),
                          height: 150,
                          width: MediaQuery.of(context).size.width,
                          child: ClipRRect(
                            borderRadius: BorderRadius.circular(6),
                            child: Image.file(
                              _image as File,
                              fit: BoxFit.cover,
                            ),
                          ),
                        )
                      : Container(
                          margin: const EdgeInsets.symmetric(horizontal: 20),
                          decoration: BoxDecoration(
                              color: const Color(0xFF343434),
                              borderRadius: BorderRadius.circular(10)),
                          height: 150,
                          width: MediaQuery.of(context).size.width,
                          child: const Icon(
                            Icons.add_a_photo,
                            color: Colors.white,
                          ),
                        ),
                ),
                Padding(
                  padding:
                      const EdgeInsets.symmetric(vertical: 10, horizontal: 25),
                  child: Column(
                    children: [
                      TextFormField(
                        decoration: const InputDecoration(
                          hintText: "Enter your Name",
                          labelText: "Name",
                        ),
                        onChanged: (val) {
                          name = val;
                        },
                      ),
                    ],
                  ),
                ),
                Padding(
                  padding:
                      const EdgeInsets.symmetric(vertical: 10, horizontal: 25),
                  child: Column(
                    children: [
                      TextFormField(
                        decoration: const InputDecoration(
                          hintText: "Enter the Blog Title",
                          labelText: "Blog Title",
                        ),
                        onChanged: (val) {
                          title = val;
                        },
                      ),
                    ],
                  ),
                ),
                Padding(
                  padding:
                      const EdgeInsets.symmetric(vertical: 10, horizontal: 25),
                  child: Column(
                    children: const [
                      TextField(
                        keyboardType: TextInputType.multiline,
                        textInputAction: TextInputAction.newline,
                        minLines: 1,
                        maxLines: 20,
                        decoration: InputDecoration(
                          label: Text("Blog Content (max 20 lines)"),
                        ),
                      )
                    ],
                  ),
                ),
              ],
            ),
          ),
        ),
      ),
    );
  }
}
