

interface MiniCategoryCardProps {
    title: string;
    img : string;
}

export const MiniCategoryCard: React.FC<MiniCategoryCardProps> = ({ title, img }) => {


    return (
        <button className=" h-25 w-full hover:scale-105 active:scale-100  duration-300">
            <div className="rounded-lg bg-gray-100 text-black flex items-center justify-center shadow-lg">
                <img
                className="rounded-t-lg w-3/4 object-fill h-3/4 " 
                src={img} alt="" />
            </div>
            <div className=" rounded-lg bg-gray-100 text-black flex items-center justify-center shadow-lg">
                {title}
            </div>
        </button>
    );
};