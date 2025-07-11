import React, { useState, useEffect } from "react";
import { CategoryCard } from "../component/categoryCard";
import { FeaturedPost } from "../component/featuredPost";
import { NavigateBar } from "../component/navigateBar";
import { SmallPostCard } from "../component/smallPostCard";
import { bloglist } from "../datas/bloglist";
import { useNavigate } from "react-router-dom";

interface Blog {
    id: number;
    img: string;
    categoryKey: string;
    title: string;
    subtitle: string;
}

const MainScreen: React.FC = () => {
    const navigate = useNavigate();

    const [selectedCategory, setSelectedCategory] = useState<string>(
        () => localStorage.getItem("selectedCategory") || "all"
    );


    useEffect(() => {
        localStorage.setItem("selectedCategory", selectedCategory);
    }, [selectedCategory]);


    const filteredBlogs =
        selectedCategory === "all"
            ? bloglist
            : bloglist.filter((blog) => blog.categoryKey === selectedCategory);

    return (
        <div className="p-5 bg-[#F4F0EC] h-screen w-screen relative">
            <div className="shadow-lg shadow-gray-500 bg-[#f6f4f2e7] w-full h-full rounded-2xl">
                <NavigateBar title="Blog" />
                <div className="flex flex-row h-7/8">
                    <div className="flex flex-col w-1/2 items-center justify-start p-10">
                        <FeaturedPost />
                        <CategoryCard
                            selectedCategory={selectedCategory}
                            onSelectCategory={setSelectedCategory}
                        />
                    </div>

                    <div className="w-1/2 p-10 max-h-full overflow-y-auto scrollbar-none">
                        <ul className="grid grid-cols-2 gap-8">
                            {filteredBlogs.map((blog: Blog) => (
                                <button 
                                onClick={() => navigate(`/post/${blog.id}`)}
                                className="hover:scale-105 duration-300">
                                    <li key={blog.id}>
                                        <SmallPostCard {...blog} />
                                    </li>
                                </button>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainScreen;
