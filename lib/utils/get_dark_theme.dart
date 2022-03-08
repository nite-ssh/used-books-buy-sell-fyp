import 'package:flutter/material.dart';

class GetDarkTheme {
  final ThemeData _specialThemeData = ThemeData(
    primarySwatch: Colors.teal,
    brightness: Brightness.dark,
  );

  ThemeData getDarkTheme() {
    return _specialThemeData;
  }
}
