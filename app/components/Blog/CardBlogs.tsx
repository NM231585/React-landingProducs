const CardBlogs = ({id, title, body}: any) => {
    return (
        <div className="p-8 border border-gray-100 shadow-md rounded-xl hover:shadow-lg transition flex-1 text-center bg-gray-50">
            <h2>User N° {id}</h2>
            <h3 className="text-xl font-bold mb-2">{title}</h3>
            <p className="text-gray-600">{body}</p>
        </div>
    );
};

export default CardBlogs;