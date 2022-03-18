import 'package:flutter/material.dart';

class HomepageUI extends StatefulWidget {
  const HomepageUI({Key? key}) : super(key: key);

  @override
  State<HomepageUI> createState() => _HomepageUIState();
}

class _HomepageUIState extends State<HomepageUI> {
  static const countryGraphql = """
{
  users{
    username
  }
}
""";
  @override
  Widget build(BuildContext context) {
    return Scaffold();
  }
}
