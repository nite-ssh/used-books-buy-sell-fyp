import 'package:flutter/material.dart';

class BlogsTiles extends StatelessWidget {
  String? title, name, blogContent, imageUrl;

  BlogsTiles(
      {Key? key,
      @required imageUrl,
      @required title,
      @required name,
      @required blogContent})
      : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Container(
        height: 250,
        width: 250,
        child: Column(
          children: [
            Text(title!),
            Text(name!),
            Text(blogContent!),
            Image.network(imageUrl!),
          ],
        ));
  }
}
