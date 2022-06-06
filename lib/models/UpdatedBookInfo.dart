class UpdatedBookInfo {
  static String name = "";
  static String bookId = "";
  static String pictureUrl = "";
  static String sellerName = "";
  static String description = "";
  static String bookStateName = "";
  static String transactionStatus = "";
  void setName(String nameVal) {
    name = nameVal;
  }

  void setBookId(String bookIdVal) {
    bookId = bookIdVal;
  }

  void setPictureUrl(String pictureUrlVal) {
    pictureUrl = pictureUrlVal;
  }

  void setSellerName(String sellerNameVal) {
    sellerName = sellerNameVal;
  }

  void setDescription(String descriptionVal) {
    description = descriptionVal;
  }

  void setProfilePictureUrl(String bookStateNameVal) {
    bookStateName = bookStateNameVal;
  }

  void setPrice(String transactionStatusVal) {
    transactionStatus = transactionStatusVal;
  }

  String getName() => name;
  String getPictureUrl() => pictureUrl;
  String getSellername() => sellerName;
  String getDescription() => description;
  String getBookStateName() => bookStateName;
  String getTransactionStatus() => transactionStatus;
  String getId() => bookId;
}
