class Drivers {
  String name;
  String contact;
  String location;

  Drivers({
    required this.name,
    required this.contact,
    required this.location,
  });

  static Drivers fromJson(Map<String, dynamic> json) => Drivers(
      name: json['name'], contact: json['contact'], location: json['location']);
}
