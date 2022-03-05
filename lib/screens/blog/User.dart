class User {
  String imageUrl;
  String name;
  String title;
  String blogContent;

  User({
    required this.imageUrl,
    required this.name,
    required this.title,
    required this.blogContent,
  });

  static User fromJson(Map<String, dynamic> json) => User(
      imageUrl: json['imageUrl'],
      name: json['authorName'],
      title: json['title'],
      blogContent: json['blogContent']);
}
