class UserInfo {
  static String username = "";
  static bool? bookType;
  String? token;
  static String emailForRegistration = "";
  static String address = "";

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

  void setAddress(String addressValue) {
    address = addressValue;
  }

  String getAddress() => address;

  getToken() => token.toString();
}
