import axios from "axios";

export default {
  // Get all task for user with user id 
  getTasks: function (userId) {
    return axios.get(`/api/users/${userId}/tasks`);
  },

  // Create a new task
  createATask: function (userId, newTaskBody) {
    return axios.post(`/api/users/${userId}/tasks`, newTaskBody);
  },

  // update one task according to task id 
  updateOneTask: function (userId, taskId, body) {
    return axios.put(`/api/users/${userId}/tasks/${taskId}`, body);
  },

  // Deletes the book with the given bookId
  deleteOneTask: function (userId, taskId) {
    return axios.delete(`/api/users/${userId}/tasks/${taskId}`);
  },
  // Saves a book to the database
  getOneTask: function (userId, taskId) {
    return axios.get(`/api/users/${userId}/tasks/${taskId}`);
  },


  //Get user data
  getUserById: (id) => {
    return axios.get(`/api/users/${id}`)
  },
  
  getUserByEmail: (email) => {
    return axios.get("/api/users", {
      params: {
        email
      }
    });
  },
  createUser: (user) => {
    return axios.post("/api/users", user);
  },
  updateUser: (userId, user) => {
    return axios.put(`/api/users/${userId}`, user);
  },

  // Create Post by User
  createPost: (newPost) => {
    return axios.post("/api/posts", newPost)
  },

  getPosts: () => {
    return axios.get("/api/posts");
  },

  //Get all posts with a limit on the number returned
  getPostsWithLimit: () => {
    return axios.get("/api/posts?limit=50");
  },

  //Get all posts that that have a search parameter
  getPostSearch: (postContains) => {
    if (postContains && postContains.trim().length > 0) {
      return axios.get(`/api/posts?limit=50&postContains=${postContains}`);
    } else {
      return null;
    }
  },

  findOnePost: (id) => {
    return axios.get(`/api/posts/${id}`)
  }
};
