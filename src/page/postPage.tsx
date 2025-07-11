import { useParams } from "react-router-dom";
import { NavigateBar } from "../component/navigateBar";
import { bloglist } from "../datas/bloglist";

const PostPage = () => {
    const { id } = useParams<{ id: string }>() //urldeki id parametresini alır
    const blog = bloglist.find((b) => b.id === Number(id))

    if (!blog) {
        return <div>Blog not found</div>
    }

    return (
        <div className="p-5 bg-[#F4F0EC] h-screen w-screen relative">
            <div className="flex  shadow-lg shadow-gray-500 bg-[#f6f4f2e7] w-full h-full rounded-2xl">
                <div className="flex flex-row flex-1 ">
                    <div className="flex flex-col max-h-full max-w-full ">
                        <NavigateBar title="Post" />
                        <button
                            onClick={() => window.history.back()}
                            className="absolute top-30 left-15  bg-gray-500 hover:bg-gray-600 active:bg-gray-700 text-white rounded-lg h-10 w-10">
                            {"<"}
                        </button>
                        <div className="flex flex-col items-center justify-center h-full pb-10  px-70 ">
                            <h1 className="text-2xl font-bold text-gray-800">{blog.title}</h1>
                            <div className="flex flex-row items-center justify-evenly w-full mt-5  mb-20">
                                <p className="text-sm text-gray-600">by {blog.author}</p>
                                <p className="text-sm text-gray-600">{blog.date}</p>
                            </div>
                            <p className="text-gray-700 max-h-100 min-h-100 overflow-y-auto scrollbar-none text-lg ">{blog.text}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default PostPage;
