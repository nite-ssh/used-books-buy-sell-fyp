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
    noOfBooksSold:0
    noOfBooksDonated:0
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
    user{
      profilePictureUrl
    }
  }
}
''';
  }

  static String getReviewBooks() {
    return '''
{
	books(where:{
    bookState:{
      is:{
        name:{
          equals:TO_BE_VERIFIED
        }
      }
    }
  } ){
    id
    name
    description
    user{
      profilePictureUrl
    }
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
    name
    description
    user{
      profilePictureUrl
    }
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
    user{
      profilePictureUrl
    }
  }
}
''';
  }
}
