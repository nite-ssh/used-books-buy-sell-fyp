import 'dart:developer';
import 'dart:io';
import 'package:firebase_storage/firebase_storage.dart';
import 'package:flutter/material.dart';
import 'package:image_picker/image_picker.dart';
import 'package:random_string/random_string.dart';
import 'package:second_hand_books_buy_sell/utils/get_dark_theme.dart';
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
  bool isLoading = false;

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

      Map<String, String> blogMap = {
        "imageUrl": imageUrl,
        "authorName": name as String,
        "title": title as String,
        "blogContent": blogContent as String,
      };
      CrudMethods.addData(blogMap);
    } else {}
  }

  void validator($formkey) {
    if ($formkey.currentState!.validate()) {
      ScaffoldMessenger.of(context).showSnackBar(
        const SnackBar(content: Text('Processing Data')),
      );
    }
  }

  static Widget _buildPopupDialog(BuildContext context) {
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

  Widget _buildErrorDialog(BuildContext context) {
    return AlertDialog(
      title: const Text('Image not Selected!'),
      content: Column(
        mainAxisSize: MainAxisSize.min,
        crossAxisAlignment: CrossAxisAlignment.start,
        children: const <Widget>[
          Text("Please select image for the blog"),
        ],
      ),
      actions: <Widget>[
        FlatButton(
          onPressed: () {
            Navigator.pop(context);
          },
          textColor: Theme.of(context).primaryColor,
          child: const Text('Back'),
        ),
      ],
    );
  }

  @override
  Widget build(BuildContext context) {
    final _titleFormKey = GlobalKey<FormState>();
    final _nameFormKey = GlobalKey<FormState>();
    final _blogContentFormKey = GlobalKey<FormState>();

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
                    validator(_titleFormKey),
                    validator(_nameFormKey),
                    validator(_blogContentFormKey),
                    if (_image != null)
                      {
                        uploadBlog(),
                        showDialog(
                          context: context,
                          builder: (BuildContext context) =>
                              _buildPopupDialog(context),
                        ),
                      }
                    else
                      {
                        showDialog(
                            context: context,
                            builder: (BuildContext context) =>
                                _buildErrorDialog(context))
                      }
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
                  child: Form(
                    key: _titleFormKey,
                    child: Column(
                      children: [
                        TextFormField(
                          decoration: const InputDecoration(
                            hintText: "Enter the Blog Title",
                            labelText: "Blog Title",
                          ),
                          validator: (value) {
                            if (value == null || value.isEmpty) {
                              return 'Please enter some text';
                            }
                            return null;
                          },
                          onChanged: (val) {
                            title = val;
                          },
                        ),
                      ],
                    ),
                  ),
                ),
                Padding(
                  padding:
                      const EdgeInsets.symmetric(vertical: 10, horizontal: 25),
                  child: Form(
                    key: _nameFormKey,
                    child: Column(
                      children: [
                        TextFormField(
                          decoration: const InputDecoration(
                            hintText: "Enter your Name",
                            labelText: "Name",
                          ),
                          validator: (value) {
                            if (value == null || value.isEmpty) {
                              return 'Please enter some text';
                            }
                            return null;
                          },
                          onChanged: (val) {
                            name = val;
                          },
                        ),
                      ],
                    ),
                  ),
                ),
                Padding(
                  padding:
                      const EdgeInsets.symmetric(vertical: 10, horizontal: 25),
                  child: Form(
                    key: _blogContentFormKey,
                    child: Column(
                      children: [
                        TextFormField(
                          keyboardType: TextInputType.multiline,
                          textInputAction: TextInputAction.newline,
                          minLines: 1,
                          maxLines: 20,
                          decoration: InputDecoration(
                            label: Text("Blog Content (max 20 lines)"),
                          ),
                          validator: (value) {
                            if (value == null || value.isEmpty) {
                              return 'Please enter some text';
                            }
                            return null;
                          },
                          onChanged: (val) {
                            blogContent = val;
                          },
                        ),
                      ],
                    ),
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
