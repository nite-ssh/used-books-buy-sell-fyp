class Book {
  static String id = "";
  static String name = "";
  static String description = "";
  static String profilePictureUrl = "";

  void setId(String idVal) {
    id = idVal;
  }

  void setName(String nameVal) {
    name = nameVal;
  }

  void setDescription(String descVal) {
    description = descVal;
  }

  void setProfilePictureUrl(String profilePicVal) {
    profilePictureUrl = profilePicVal;
  }

  String getId() => id;
  String getName() => name;
  String getDescription() => description;
  String getProfilePictureUrl() => profilePictureUrl;
}
