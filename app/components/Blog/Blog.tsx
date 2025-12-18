import { useState, useEffect } from "react";
import CardBlogs from "./CardBlogs";
import CardUser from "./CardUser";
import getPost from "../../data/BlogData";
import getUsers from "../../data/UserData";

const Blog = () => {
    const [posts, setPosts] = useState<any[]>([]);
    const [users, setUsers] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [postsData, usersData] = await Promise.all([
                    getPost(),
                    getUsers()
                ]);
                setPosts(postsData.slice(0, 10)); // Limit to 10 posts for performance
                setUsers(usersData.slice(0, 5)); // Limit to 5 users for the sidebar
            } catch (error) {
                console.error("Error fetching data:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) {
        return (
            <div className="flex justify-center items-center py-20">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
            </div>
        );
    }

    return (
        <section id="blog" className="py-16 px-4 bg-gray-50">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
                    Blog & Comunidad
                </h2>

                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Main Content - Blog Posts */}
                    <div className="lg:w-2/3">
                        <h3 className="text-2xl font-bold mb-6 text-gray-700">Últimas Publicaciones</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {posts.map((blog) => (
                                <CardBlogs 
                                    key={blog.id} 
                                    id={blog.id}
                                    title={blog.title} 
                                    body={blog.body}
                                />  
                            ))}
                        </div>
                    </div>

                    {/* Sidebar - Users */}
                    <div className="lg:w-1/3">
                        <div className="bg-white rounded-xl shadow-none lg:shadow-none p-0 lg:p-0 sticky top-24">
                            <h3 className="text-2xl font-bold mb-6 text-gray-700">Nuestros Autores</h3>
                            <div className="space-y-4">
                                {users.map((user) => (
                                    <CardUser key={user.id} user={user} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Blog;
