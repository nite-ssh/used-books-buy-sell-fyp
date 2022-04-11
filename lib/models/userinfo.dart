class UserInfo {
  static String username = "";

  String? token;
  static String emailForRegistration = "";
  static String address = "";

  void setUsername(String usernameValue) {
    username = usernameValue;
  }

  String getUsername() {
    return username;
  }

  void setAddress(String addressValue) {
    address = addressValue;
  }

  String getAddress() => address;

  getToken() => token.toString();
}
