class BookValues {
  static String name = "";
  static String description = "";
  static String author = "";
  static String bookStateName = "";
  static String bookCategoryName = "";
  static String bookPhoto = "";
  static int price = 0;

  void setName(String nameVal) {
    name = nameVal;
  }

  void setSellerName(String descriptionval) {
    description = descriptionval;
  }

  void setDescription(String authorVal) {
    author = authorVal;
  }

  void setProfilePictureUrl(String bookPhotoVal) {
    bookPhoto = bookPhotoVal;
  }

  void setPrice(int priceVal) {
    price = priceVal;
  }

  String getName() => name;
  String getDescription() => description;
  String getAuthor() => author;
  String getBookPhoto() => bookPhoto;
  String getCategoryName() => bookCategoryName;
  String getBookStateName() => bookStateName;
  int getPrice() => price;
}
