import 'package:cloud_firestore/cloud_firestore.dart';
import '../admin_pages/drivers/Drivers.dart';
import '../screens/blog/User.dart';

class CrudMethods {
  static Future<void> addData(blogData) async {
    FirebaseFirestore.instance
        .collection("blogs")
        .add(blogData)
        .catchError((err) {
      print(err);
    });
  }

  static Stream<List<User>> readBlogs() {
    return FirebaseFirestore.instance.collection("blogs").snapshots().map(
        (snapshots) =>
            snapshots.docs.map((doc) => User.fromJson(doc.data())).toList());
  }

  static Stream<List<Drivers>> readDrivers() {
    return FirebaseFirestore.instance.collection("drivers").snapshots().map(
        (snapshots) =>
            snapshots.docs.map((doc) => Drivers.fromJson(doc.data())).toList());
  }
}
