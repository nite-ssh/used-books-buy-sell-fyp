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

  String getReviewBooks() {
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
