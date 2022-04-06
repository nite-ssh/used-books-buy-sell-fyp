class UserInfo {
  static String username = "";
  String? token;

  void setUsername(String usernameValue) {
    username = usernameValue;
    print(username);
    print(username);
  }

  String getUsername() {
    return username;
  }

  getToken() => token.toString();
}
