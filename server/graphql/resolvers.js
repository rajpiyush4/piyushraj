import { users } from '../data.js';
import Blog from '../models/Blog.js';
const resolvers = {
    Query: {

        async blogs() {
            try {
                const blogs = await Blog.find(); // Retrieve all blogs from the MongoDB collection
                return blogs;
            } catch (error) {
                console.error('Error retrieving blogs:', error);
                throw error;
            }
        },
        getBlog: async (_, { id }) => {
            try {
                const blog = await Blog.findOne({ id });
                return blog;
            } catch (error) {
                console.error('Error retrieving blog:', error);
                throw error;
            }
        },

        users: () => users,
        user: (_, args) => users.find(user => user.id == args.id)

    },
    Mutation: {
        createBlog: async (_, { blogInput: { id, title, body } }) => {
            try {
              const createBlog = new Blog({ id, title, body, time: new Date().toISOString() });
              const res = await createBlog.save();
              return res;
            } catch (error) {
              console.error('Error creating blog:', error);
              throw error;
            }
          },

    }
};

export default resolvers;