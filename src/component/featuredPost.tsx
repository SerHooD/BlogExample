import { useState } from "react";
import { bloglist } from "../datas/bloglist";

export const FeaturedPost = () => {
    const [loaded, setLoaded] = useState(false);
    const randomInt = Math.floor(Math.random() * 30) + 1; //random 1-30 blog
    const blog = bloglist.find(b => b.id === randomInt);

    return (
        <div className="relative h-[600px] w-full shadow-xl overflow-hidden rounded-lg">

            {!loaded ?
                <div className={`absolute inset-0 w-full h-full bg-gray-200 object-cover transition-opacity duration-300 `}>Loading ...</div>: null}

            <img
                src={blog?.img}
                alt={`exampleimg ID:${blog?.id}`}
                onLoad={() => setLoaded(true)}
                className={`absolute inset-1 w-full h-full object-cover transition-opacity duration-700 custom-blur`}
            />

            <div className="absolute top-1/2 w-full text-center text-white px-5 ">
                <p className="font-bold text-5xl">{blog?.title}</p>
                <p className="line-clamp-2 font-semibold mt-4">
                    {blog?.subtitle}
                </p>
            </div>
        </div>
    );
};
