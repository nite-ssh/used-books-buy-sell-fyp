import 'dart:io';

import 'package:second_hand_books_buy_sell/models/BookValues.dart';
import 'package:second_hand_books_buy_sell/models/userinfo.dart';

class QueryMutations {
  static String updateBookStateToBeSold(String id) {
    return '''
mutation {  
  updateBook(
    data: {bookState:{connect:{name:TO_BE_SOLD}}}
    where: { id:"$id"}
  ) {
    description
  }
}
''';
  }

  static String getSpecificUserValues() {
    return '''
{
	books(where:{
    user:{
      is:{
        username:{
          equals:"${UserInfo().getUsername()}"
        }
      }
    }
  } ){
    id
    name
    author
    description
    bookStateName
  }
}
''';
  }

  static String filterBookCategory(String category) {
    return '''
{
  books(where:{
    bookCategory:{
      is:{
        name:{
          equals:$category
        }
      }
    }
  }){
    name
    bookCategory{
      name
    }
  }
}
''';
  }

  String createUser(String email, String username, String password) {
    print(email);
    return '''
mutation{
  createUser(data:{
    email:"$email"
    username:"$username"
    password:"$password"
    userRole:{
      connect:{
        name:USER
      }
    }
  }){
    username
  }
}
''';
  }

  static String deleteBook(String id) {
    return '''
mutation{
  deleteBook(where:{
    id: "$id"
  }){
    name
  }
}
''';
  }

  String getFilteredBooks(String category) {
    return '''

{
	books(where:{
    bookCategory:{
      is:{
        name:{
          equals:$category
        }
      }
    }
  } ){
    id
    name
    description
    bookCategory{
      name
    }
    author
  }
}
''';
  }

  static String getReviewBooks() {
    return '''
{
	bookUnverifieds{
    id
    bookPhoto
    bookStateName
    bookCategoryName
    name
    description
    author
  }
}
    ''';
  }

//   static String uploadImageAndGetUrl(File? upload) {
//     return '''
//   mutation{
//     postPicture(
// file: $upload
// ){
//   file
// }
//   }
// ''';
//   }

  static String createUnverifiedBook(String name, int price, String description,
      String author, String bookState, String photo) {
    print(photo);
    return '''
mutation {
  createBookUnverified(
    data: {
      name: "$name"
      price: $price
      description: "$description"
      author: "$author"
      bookPhoto: "$photo"
      user: { connect: { id: "${UserInfo().getId()}" } }
      bookState: { connect: { name: $bookState } }
      bookCategory: { connect: { name: SELF_HELP } }
    }
  ) {
    name
    description
    author
    bookStateName
    bookCategoryName
  }
}
''';
  }

  static String createDonatedBook(
      String bookName, String imageUrl, String description) {
    return '''
mutation{
  createBook(data:{
    name:"$bookName"
    description:"$description"
    author:"$imageUrl"
    user:{
      connect:{
        username:"${UserInfo.username}"
      }
    
    }
    bookState:{
      connect:{
        name:TO_BE_DONATED
      }
    }
    bookCategory:{
      connect:{
        name:ADVENTURE
      }
    }
  }){
    name
    description
    author
    bookStateName
    bookCategoryName
  }
}
''';
  }

  String getToBeSold() {
    return '''
{
	books(where:{
    bookState:{
      is:{
        name:{
          equals:TO_BE_SOLD
        }
      }
    }
  } ){
    id
    name
    author
    description
  }
}
''';
  }

  String signInUser() {
    return '''
mutation SignInUser(\$username: String!, \$password: String!){
  signInUser(data: { username: \$username, password: \$password }) {
    token
    id
    username
    userRole{
      name
    }
  }
}
''';
  }

  String getToBeDonated() {
    return '''
{
	books(where:{
    bookState:{
      is:{
        name:{
          equals:TO_BE_DONATED
        }
      }
    }
  } ){
    name
    description
    author
  }
}
''';
  }

  String setUserInfo() {
    return '''''';
  }
}
