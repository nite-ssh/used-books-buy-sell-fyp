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

  static String updateDeliveryStateInRoute(String id) {
    return '''
mutation {  
  updateTransaction(
    data: {deliveryState:{set:OUT_FOR_DELIVERY}}
    where: { id:"$id"}
  ) {
    id
  }
}
''';
  }

  static String updateDeliveryStateDelivered(String id) {
    return '''
mutation {  
  updateTransaction(
    data: {deliveryState:{set:DELIVERED}}
    where: { id:"$id"}
  ) {
    id
  }
}
''';
  }

  static String bookToOrderPlacedVal() {
    return '''
{
  transactions{
    id
address
deliveryState
userId
bookId
bookUnverifiedId
user{
  username
}
book{
  bookPhoto
  name
}
  }
}
''';
  }

  static String setBookToOrderPlaced(String address, String bookId) {
    return '''
mutation{
  createTransaction(data:{
    address:"$address"
    deliveryState:ORDER_PLACED
    user:{
      connect:{
        id:"${UserInfo.id}"
      }
    }
    book:{
      connect:{
        id:"$bookId"
      }
    }
  }){
    id
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
    bookPhoto
    bookStateName
    bookCategoryName
    name
    user{
      id
    }
    transaction{
      deliveryState
    }
    description
    author
  }
}
''';
  }

  static String getNoOfBookSold() {
    return '''
{
users(where:{
  id:{
    equals:"${UserInfo().getId()}"
  }
}){
  username
  id
_count{
  books
  BookUnverified
}
}
}
''';
  }

  static String getSpecificUnverifiedBookValues() {
    return '''
{
	bookUnverifieds(where:{
    user:{
      is:{
        username:{
          equals:"${UserInfo().getUsername()}"
        }
      }
    }
  } ){
     id
    bookPhoto
    bookStateName
    bookCategoryName
    name
    user{
      id
    }
    description
    author
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

  static String deleteBookUnverified(String id) {
    return '''
mutation{
  deleteBookUnverified(where:{
    id: "$id"
  }){
    name
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
    price
    bookPhoto
    bookStateName
    bookCategoryName
    name
    user{
      id
    }
    description
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
    price
    bookPhoto
    bookStateName
    bookCategoryName
    name
    user{
      id
    }
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
      String author, String bookState, String photo, String bookCategoryValue) {
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
      bookCategory: { connect: { name: $bookCategoryValue } }
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

  static String createBook(
      String name,
      int price,
      String description,
      String author,
      String photo,
      String userID,
      String bookState,
      String bookCategory) {
    return '''
mutation {
  createBook(
    data: {
      name: "$name"
      price: $price
      description: "$description"
      author: "$author"
      bookPhoto: "$photo"
      user: { connect: { id: "$userID" } }
      bookState: { connect: { name: $bookState } }
      bookCategory: { connect: { name: $bookCategory } }
    }
  ) {
    name
    price
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
    bookPhoto
    bookStateName
    bookCategoryName
    name
    user{
      id
    }
    transaction{
      deliveryState
    }
    description
    author
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
    id
    bookPhoto
    bookStateName
    bookCategoryName
    name
    user{
      id
    }
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
