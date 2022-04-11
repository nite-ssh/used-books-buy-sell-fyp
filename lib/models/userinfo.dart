class UserInfo {
  static String username = "";
  String? token;
  static String emailForRegistration = "";

  void setUsername(String usernameValue) {
    username = usernameValue;
  }

  void setEmail(String emailValue) {
    emailForRegistration = emailValue;
  }

  String getEmail() {
    return emailForRegistration;
  }

  String getUsername() {
    return username;
  }

  getToken() => token.toString();
}
