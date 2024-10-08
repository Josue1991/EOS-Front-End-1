import axios from 'axios';

const API_URL = 'https://jsonplaceholder.typicode.com';

export const getPosts = async () => {
    try {
        const response = await axios.get(`${API_URL}/posts`);
        return response.data;
    } catch (error) {
        console.error('Error fetching posts:', error);
        throw error;
    }
};

export const createPost = async (newPost: any) => {
    try {
        const response = await axios.post(`${API_URL}/posts`, newPost);
        return response.data;
    } catch (error) {
        console.error('Error creating post:', error);
        throw error;
    }
};
