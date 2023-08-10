const typeDefs = `#graphql
  type User {
    id: ID!
    name: String!
    email: String!
  }

  type Blog {
  id: ID!
  title: String!
  body: String!
  time: String!
}

input BlogInput {
  id: ID!
  title: String!
  body: String!
}


  type Query {
    users: [User]
    user(id: ID!): User 
    blogs: [Blog]
    getBlog(id: String!): Blog!
  }
  
  type Mutation {
    createBlog(blogInput: BlogInput!): Blog!
    deleteBlog(ID: String): Boolean
    editBlog(ID: ID!, title: String!, body: String!): Boolean
    }
`;

export default typeDefs;