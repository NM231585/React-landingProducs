import axios from "axios";
const getPost = async () => {
    const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
    return response.data;
}

export default getPost;