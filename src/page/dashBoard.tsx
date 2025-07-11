import { useState } from "react";
import { bloglist as initialBloglist, type Blog } from "../datas/bloglist";

const Dashboard = () => {
    const [selectedBlog, setSelectedBlog] = useState<string | null>(
        localStorage.getItem("selectedBlog")
    );
    const [blogs, setBlogs] = useState<Blog[]>(initialBloglist);

    const handleSelectBlog = (id: number) => {
        localStorage.setItem("selectedBlog", id.toString());
        setSelectedBlog(id.toString());
    };

    const handleDeleteBlog = (id: number) => {
        setBlogs(blogs.filter((blog) => blog.id !== id));
        if (selectedBlog === id.toString()) {
            setSelectedBlog(null);
            localStorage.removeItem("selectedBlog");
        }
    };

    return (
        <div className="p-5 bg-[#F4F0EC] h-screen w-screen relative">
            <div className="shadow-lg shadow-gray-500 bg-[#f6f4f2e7] w-full h-full rounded-2xl">
                <div className="fixed top-0 bg-white h-20 w-full flex items-center rounded-t-xl z-10">
                    <p className="text-4xl text-black p-10 font-semibold">DashBoard</p>
                    <button
                        onClick={() => window.history.back()}
                        className="absolute top-30 left-10  bg-gray-500 hover:bg-gray-600 active:bg-gray-700 text-white rounded-lg h-10 w-10">
                        {"<"}
                    </button>
                </div>
                <div className="flex flex-row h-full pt-24">
                    <div className="flex flex-row h-full w-full items-center justify-start p-10">
                        <div className="h-full w-full "></div>
                        <div className="h-full w-full ">
                            <div className=" p-10 max-h-full overflow-y-auto scrollbar-none">
                                <ul className="grid gap-8">
                                    {blogs.map((blog: Blog) => (
                                        <li key={blog.id} className="flex items-center gap-4">
                                            <button 
                                                onClick={() => handleSelectBlog(blog.id)}
                                                className={`w-full h-full shadow-2xl text-start items-start hover:scale-105 duration-300 ${selectedBlog === blog.id.toString() ? "border-5 border-blue-800 rounded-2xl" : ""}`}>
                                                <div className="bg-gray-500 p-4  rounded-lg">
                                                    <p className="text-lg font-bold">{blog.title}</p>
                                                    <p className="text-sm font-semibold">{blog.subtitle}</p>
                                                    <p className="text-xs text-gray-800 font-bold">{blog.date}</p>
                                                </div>
                                            </button>
                                            <button
                                                onClick={() => handleDeleteBlog(blog.id)}
                                                className="ml-2 bg-red-500 hover:bg-red-700 text-white rounded-lg px-3 py-2"
                                            >
                                                X
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
