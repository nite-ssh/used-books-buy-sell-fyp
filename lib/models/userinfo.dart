class UserInfo {
  static String username = "";
  static String id = "";
  static bool? bookType;
  String? token;
  static String emailForRegistration = "";
  static String address = "";
  static int bookCount = 0;
  void setId(String idValue) {
    id = idValue;
  }

  void setUsername(String usernameValue) {
    username = usernameValue;
  }

  String getUsername() {
    return username;
  }

  void setBookType(bool bookTypeValue) {
    bookType = bookTypeValue;
  }

  bool getBookType() {
    return bookType as bool;
  }

  void setBookCount(int bookCountValue) {
    bookCount = bookCountValue;
  }

  int getBookCount() {
    return bookCount as int;
  }

  String getId() {
    return id;
  }

  void setAddress(String addressValue) {
    address = addressValue;
  }

  String getAddress() => address;

  getToken() => token.toString();
}
