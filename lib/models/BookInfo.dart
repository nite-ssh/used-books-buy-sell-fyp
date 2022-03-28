class Book {
  Book(this.id, this.name, this.description, this.profilePictureUrl);
  final String id;
  final String name;
  final String description;
  final String profilePictureUrl;
  getId() => this.id;
  getName() => this.name;
  getDescription() => this.description;
  getProfilePictureUrl() => this.profilePictureUrl;
}
