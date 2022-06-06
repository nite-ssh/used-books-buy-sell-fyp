import 'dart:io';

import 'package:firebase_storage/firebase_storage.dart';
import 'package:flutter/material.dart';
import 'package:graphql_flutter/graphql_flutter.dart';
import 'package:image_picker/image_picker.dart';
import 'package:random_string/random_string.dart';
import 'package:second_hand_books_buy_sell/graphql/querymutations.dart';
import 'package:second_hand_books_buy_sell/main.dart';
import 'package:second_hand_books_buy_sell/models/UpdatedBookInfo.dart';
import 'package:second_hand_books_buy_sell/services/crud.dart';
import 'package:second_hand_books_buy_sell/utils/routes.dart';

class EditUnverified extends StatefulWidget {
  const EditUnverified({Key? key}) : super(key: key);

  @override
  State<EditUnverified> createState() => _EditUnverifiedState();
}

class _EditUnverifiedState extends State<EditUnverified> {
  TextEditingController txttitle = TextEditingController();
  TextEditingController txtauthor = TextEditingController();
  TextEditingController txtdescription = TextEditingController();
  TextEditingController txtprice = TextEditingController();
  String imageUrlVal = "";
  int price = 0;
  String name = "";
  String description = "";
  File? _image;
  int phoneNo = 0;
  bool showProgress = false;
  bool isLoading = false;
  String bookCategoryValue = 'SELF_HELP';
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

  uploadUpdatedImage() async {
    if (_image != null) {
      Reference firebaseStorageref = FirebaseStorage.instance
          .ref()
          .child("updatedBookImage")
          .child("${randomAlphaNumeric(9)}.jpg");
      var task = await firebaseStorageref.putFile(_image as File);
      var imageUrl = await task.ref.getDownloadURL();
      setState(() {
        imageUrlVal = imageUrl;
      });
    } else {
      Navigator.pop(context);
    }
  }

  void validator($formkey) {
    if ($formkey.currentState!.validate()) {
      // ScaffoldMessenger.of(context).showSnackBar(
      //   const SnackBar(content: Text('Processing Data')),
      // );
    }
  }

  @override
  Widget build(BuildContext context) {
    final _nameFormKey = GlobalKey<FormState>();
    final _priceFormKey = GlobalKey<FormState>();
    final _phoneNumFormKey = GlobalKey<FormState>();
    final _descriptionFormKey = GlobalKey<FormState>();
    return Scaffold(
      appBar: AppBar(
        elevation: 0.0,
        title: const Text("Update Books"),
      ),
      body: SingleChildScrollView(
        child: Column(
          children: [
            GestureDetector(
              onTap: () {
                getImage();
              },
              child: _image == null
                  ? Padding(
                      padding: const EdgeInsets.symmetric(
                          vertical: 30, horizontal: 90),
                      child: ClipRRect(
                        borderRadius: BorderRadius.circular(6),
                        child: Image.network(
                          UpdatedBookInfo().getPictureUrl(),
                          fit: BoxFit.cover,
                        ),
                      ),
                    )
                  : Padding(
                      padding: const EdgeInsets.symmetric(
                          vertical: 30, horizontal: 90),
                      child: ClipRRect(
                        borderRadius: BorderRadius.circular(6),
                        child: Image.file(
                          _image as File,
                          fit: BoxFit.cover,
                        ),
                      ),
                    ),
            ),
            Padding(
              padding: const EdgeInsets.symmetric(horizontal: 25),
              child: Form(
                key: _nameFormKey,
                child: Column(
                  children: [
                    TextFormField(
                      decoration: const InputDecoration(
                        hintText: "Enter your updated book name",
                        labelText: "Book Title",
                      ),
                      validator: (value) {
                        if (value == null || value.isEmpty) {
                          return 'Please enter the updated book name';
                        }
                        return null;
                      },
                      onChanged: (val) {
                        name = val;
                      },
                      onEditingComplete: () {
                        txttitle.text = name.toString();
                      },
                    ),
                  ],
                ),
              ),
            ),
            Padding(
              padding: const EdgeInsets.symmetric(horizontal: 25),
              child: Form(
                key: _descriptionFormKey,
                child: Column(
                  children: [
                    TextFormField(
                      controller: txtdescription,
                      keyboardType: TextInputType.multiline,
                      textInputAction: TextInputAction.newline,
                      minLines: 1,
                      maxLines: 3,
                      maxLength: 125,
                      decoration: const InputDecoration(
                        label: Text("Description Content"),
                      ),
                      validator: (value) {
                        if (value == null || value.isEmpty) {
                          return 'Please enter description';
                        }
                        return null;
                      },
                      onChanged: (val) {
                        description = val;
                      },
                      onEditingComplete: () {
                        txtdescription.text = description.toString();
                      },
                    ),
                  ],
                ),
              ),
            ),
            Padding(
              padding: const EdgeInsets.symmetric(horizontal: 25),
              child: Form(
                key: _phoneNumFormKey,
                child: Column(
                  children: [
                    TextFormField(
                      keyboardType: TextInputType.number,
                      decoration: const InputDecoration(
                        hintText: "Enter Phone",
                        labelText: "Phone Number",
                      ),
                      validator: (value) {
                        if (value == null || value.isEmpty) {
                          return 'Please enter your phone number';
                        }
                        return null;
                      },
                      onChanged: (val) {
                        try {
                          phoneNo = int.parse(val);
                        } catch (e) {
                          return;
                        }
                      },
                    ),
                  ],
                ),
              ),
            ),
            Padding(
              padding: const EdgeInsets.symmetric(horizontal: 25),
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
                          return 'Please enter the book price';
                        }
                        return null;
                      },
                      onChanged: (val) {
                        try {
                          phoneNo = int.parse(val);
                        } catch (e) {
                          return;
                        }
                      },
                    ),
                  ],
                ),
              ),
            ),
            SizedBox(
              height: 20,
            ),
            Text("Book category"),
            DropdownButton<String>(
              value: bookCategoryValue,
              icon: const Icon(Icons.arrow_downward),
              elevation: 16,
              style: const TextStyle(color: Colors.deepPurple),
              underline: Container(
                height: 2,
                color: Colors.deepPurpleAccent,
              ),
              onChanged: (String? newValue) {
                setState(() {
                  bookCategoryValue = newValue!;
                });
              },
              items: <String>[
                "FANTASY",
                "ADVENTURE",
                "ROMANCE",
                "CONTEMPORARY",
                "DYSTOPIAN",
                "MYSTERY",
                "HORROR",
                "THRILLER",
                "PARANORMAL",
                "HISTORICAL_FICTION",
                "SCIENCE_FICTION",
                "MEMOIR",
                "COOKING",
                "ART",
                "SELF_HELP",
                "DEVELOPMENT",
                "MOTIVATIONAL",
                "HEALTH",
                "HISTORY",
                "TRAVEL",
                "GUIDE_HOW_TO",
                "FAMILIES_RELATIONSHIPS",
                "HUMOR",
                "MEDICAL_PREPARATION",
                "ENGINEERING_PREPARATION",
                "SEE_PREPARATION",
                "PLUS_TWO"
              ].map<DropdownMenuItem<String>>((String value) {
                return DropdownMenuItem<String>(
                  value: value,
                  child: Text(value),
                );
              }).toList(),
            ),
            TextButton(
                onPressed: () async {
                  try {
                    validator(_nameFormKey);
                    validator(_priceFormKey);
                    validator(_phoneNumFormKey);
                    validator(_descriptionFormKey);
                  } catch (e) {
                    print("error");
                  }
                  if (_image != null) {
                    setState(() {
                      showProgress = true;
                    });
                    await uploadUpdatedImage();
                    setState(() {
                      showProgress = false;
                    });
                    GraphQLClient _client =
                        graphQLConfiguration.clientToQuery();
                    try {
                      _client.query(
                        QueryOptions(
                          document: gql(
                            QueryMutations.updateUnverifiedBook(
                                name.toString(),
                                price.toInt(),
                                description.toString(),
                                price.toString(),
                                imageUrlVal.toString(),
                                bookCategoryValue.toString()),
                          ),
                        ),
                      );
                      print("hello");
                      // showDialog(
                      //   context: context,
                      //   builder: (BuildContext context) =>
                      //       _buildPopupDialog(context),
                      // );
                    } catch (e) {
                      return;
                    }
                  }
                },
                child: const Text(
                  "Submit",
                  style: TextStyle(color: Colors.white),
                ),
                style: ButtonStyle(
                    backgroundColor:
                        MaterialStateProperty.all<Color>(Colors.teal)))
          ],
        ),
      ),
    );
  }
}
