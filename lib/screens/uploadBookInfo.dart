import 'dart:io';

import 'package:firebase_storage/firebase_storage.dart';
import 'package:flutter/material.dart';
import 'package:graphql_flutter/graphql_flutter.dart';
import 'package:image_picker/image_picker.dart';
import 'package:random_string/random_string.dart';
import 'package:second_hand_books_buy_sell/graphql/graphqlconfig.dart';
import 'package:second_hand_books_buy_sell/graphql/querymutations.dart';
import 'package:second_hand_books_buy_sell/main.dart';
import 'package:second_hand_books_buy_sell/models/BookValues.dart';
import 'package:second_hand_books_buy_sell/models/userinfo.dart';
import 'package:second_hand_books_buy_sell/screens/homepage_screen.dart';
import 'package:second_hand_books_buy_sell/utils/routes.dart';

class BookUpload extends StatefulWidget {
  const BookUpload({Key? key}) : super(key: key);

  @override
  State<BookUpload> createState() => _BookUploadState();
}

class _BookUploadState extends State<BookUpload> {
  String? title, description, author;
  String bookState = "TO_BE_SOLD";
  String imageUrlVal = "";
  int price = 0;
  File? _image;
  bool isLoading = false;
  bool role = false;
  bool isChecked = false;
  bool showProgress = false;

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

  uploadContent() async {
    if (_image != null) {
      Reference firebaseStorageref = FirebaseStorage.instance
          .ref()
          .child("bookimages")
          .child("${randomAlphaNumeric(9)}.jpg");
      var task = await firebaseStorageref.putFile(_image as File);
      var imageUrl = await task.ref.getDownloadURL();

      setState(() {
        imageUrlVal = imageUrl;
      });
    } else {
      Navigator.pushNamed(context, MyRoutes.navRoute);
    }
  }

  void validator($formkey) {
    if ($formkey.currentState!.validate()) {
      // ScaffoldMessenger.of(context).showSnackBar(
      //   const SnackBar(content: Text('Processing Data')),
      // );
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

  String dropdownValue = 'One';

  @override
  Widget build(BuildContext context) {
    final _titleFormKey = GlobalKey<FormState>();
    final _descriptionFormKey = GlobalKey<FormState>();
    final _authorFormKey = GlobalKey<FormState>();
    final _priceFormKey = GlobalKey<FormState>();
    final _blogContentFormKey = GlobalKey<FormState>();
    return SafeArea(
      child: Scaffold(
        appBar: AppBar(
          elevation: 0.0,
          title: const Text("Upload Book"),
        ),
        body: showProgress
            ? Center(child: CircularProgressIndicator())
            : SingleChildScrollView(
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
                              margin:
                                  const EdgeInsets.symmetric(horizontal: 20),
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
                      padding: const EdgeInsets.symmetric(
                          vertical: 10, horizontal: 25),
                      child: Form(
                        key: _titleFormKey,
                        child: Column(
                          children: [
                            TextFormField(
                              decoration: const InputDecoration(
                                hintText: "Enter the Book Title",
                                labelText: "Book Title",
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
                      padding: const EdgeInsets.symmetric(
                          vertical: 10, horizontal: 25),
                      child: Form(
                        key: _descriptionFormKey,
                        child: Column(
                          children: [
                            TextFormField(
                              decoration: const InputDecoration(
                                hintText: "Enter Book Description",
                                labelText: "Name",
                              ),
                              validator: (value) {
                                if (value == null || value.isEmpty) {
                                  return 'Please enter some text';
                                }
                                return null;
                              },
                              onChanged: (val) {
                                description = val;
                              },
                            ),
                          ],
                        ),
                      ),
                    ),
                    Padding(
                      padding: const EdgeInsets.symmetric(
                          vertical: 10, horizontal: 25),
                      child: Form(
                        key: _authorFormKey,
                        child: Column(
                          children: [
                            TextFormField(
                              decoration: const InputDecoration(
                                hintText: "Enter Book Author",
                                labelText: "Author",
                              ),
                              validator: (value) {
                                if (value == null || value.isEmpty) {
                                  return 'Please enter some text';
                                }
                                return null;
                              },
                              onChanged: (val) {
                                author = val;
                              },
                            ),
                          ],
                        ),
                      ),
                    ),
                    Padding(
                      padding: const EdgeInsets.symmetric(
                          vertical: 10, horizontal: 25),
                      child: Form(
                        key: _priceFormKey,
                        child: Column(
                          children: [
                            TextFormField(
                              keyboardType: TextInputType.number,
                              decoration: const InputDecoration(
                                hintText: "Enter Price",
                                labelText: "Price",
                              ),
                              validator: (value) {
                                if (value == null || value.isEmpty) {
                                  return 'Please enter some text';
                                }
                                return null;
                              },
                              onChanged: (val) {
                                try {
                                  price = int.parse(val);
                                } catch (e) {
                                  return;
                                }
                              },
                            ),
                          ],
                        ),
                      ),
                    ),

                    DropdownButton<String>(
                      value: dropdownValue,
                      icon: const Icon(Icons.arrow_downward),
                      elevation: 16,
                      style: const TextStyle(color: Colors.deepPurple),
                      underline: Container(
                        height: 2,
                        color: Colors.deepPurpleAccent,
                      ),
                      onChanged: (String? newValue) {
                        setState(() {
                          dropdownValue = newValue!;
                        });
                      },
                      items: <String>['One', 'Two', 'Free', 'Four']
                          .map<DropdownMenuItem<String>>((String value) {
                        return DropdownMenuItem<String>(
                          value: value,
                          child: Text(value),
                        );
                      }).toList(),
                    ),
                    // Padding(
                    //   padding:
                    //       const EdgeInsets.symmetric(vertical: 10, horizontal: 25),
                    //   child: Form(
                    //     key: _blogContentFormKey,
                    //     child: Column(
                    //       children: [
                    //         TextFormField(
                    //           keyboardType: TextInputType.multiline,
                    //           textInputAction: TextInputAction.newline,
                    //           minLines: 1,
                    //           maxLines: 20,
                    //           decoration: InputDecoration(
                    //             label: Text("Blog Content (max 20 lines)"),
                    //           ),
                    //           validator: (value) {
                    //             if (value == null || value.isEmpty) {
                    //               return 'Please enter some text';
                    //             }
                    //             return null;
                    //           },
                    //           onChanged: (val) {
                    //              = val;
                    //           },
                    //         ),
                    //       ],
                    //     ),
                    //   ),
                    // ),
                    SizedBox(height: 10),
                    Row(
                      mainAxisAlignment: MainAxisAlignment.center,
                      children: <Widget>[
                        const Text(
                          'Donate Book: ',
                          style: TextStyle(fontSize: 15),
                        ), //Text
                        Checkbox(
                          value: isChecked,
                          onChanged: (bool? value) {
                            setState(() {
                              isChecked = value as bool;
                              bookState =
                                  isChecked ? "TO_BE_DONATED" : "TO_BE_SOLD";
                            });
                          },
                        ),
                      ],
                    ),
                    SizedBox(
                      height: 20,
                    ),
                    ElevatedButton(
                      onPressed: () async {
                        // validator(_titleFormKey);
                        // validator(_descriptionFormKey);
                        // validator(_blogContentFormKey);
                        if (_image != null) {
                          setState(() {
                            showProgress = true;
                          });
                          await uploadContent();
                          setState(() {
                            showProgress = false;
                          });
                          GraphQLClient _client =
                              graphQLConfiguration.clientToQuery();

                          _client.query(
                            QueryOptions(
                              document: gql(
                                QueryMutations.createUnverifiedBook(
                                    title.toString(),
                                    price.toInt(),
                                    description.toString(),
                                    author.toString(),
                                    bookState.toString(),
                                    imageUrlVal.toString()),
                              ),
                            ),
                          );
                          showDialog(
                            context: context,
                            builder: (BuildContext context) =>
                                _buildPopupDialog(context),
                          );
                        } else {
                          showDialog(
                              context: context,
                              builder: (BuildContext context) =>
                                  _buildErrorDialog(context));
                        }
                      },
                      child: Text(
                        "Upload",
                        style: TextStyle(fontSize: 18),
                      ),
                      style: TextButton.styleFrom(
                          minimumSize: const Size(150, 50),
                          backgroundColor: Colors.teal),
                    ),
                    SizedBox(
                      height: 20,
                    )
                  ],
                ),
              ),
      ),
    );
  }
}
