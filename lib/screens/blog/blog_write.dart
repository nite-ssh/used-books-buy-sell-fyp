import 'dart:io';
import 'package:flutter/material.dart';
import 'package:image_picker/image_picker.dart';
import 'package:second_hand_books_buy_sell/get_dark_theme.dart';
import 'package:second_hand_books_buy_sell/services/crud.dart';

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
      _image = File(pickedFile!.path);
    });
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
              GestureDetector(
                onTap: () {
                  getImage();
                },
                child: Container(
                  padding: EdgeInsets.all(10.0),
                  child: Icon(
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
                          child: Image.file(
                            _image as File,
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
