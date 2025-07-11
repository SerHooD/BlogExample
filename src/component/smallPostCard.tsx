interface Blog {
    id: number;
    img : string;
    categoryKey: string;
    title: string;
    subtitle: string;
}

export const SmallPostCard = (blog: Blog) => {
    return (
        <div className="flex flex-col p-4 text-center h-80 w-80 rounded-lg bg-gray-100 text-black shadow-xl">
            <div className="h-1/2 ">
                <img 
                className="w-full h-full object-cover rounded-lg"
                src={blog.img} 
                alt="cardImage" />
            </div>
            <div className="h-1/2 p-5">
                <p className="font-extrabold py-2 focus:outline-none">{blog.title}</p>
                <p className="font-semibold focus:outline-none">{blog.subtitle}</p>
            </div>
        </div>

    )

}