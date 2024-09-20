const Category = ({category}) => {
    const {logo, category_name, availability} = category
    return (
        <div className=" bg-[#9873FF0D] rounded-md p-8">
            <img className="w-16 bg-[#9873FF1A] p-4 rounded" src={logo} alt="" />
            <h2 className="font-extrabold text-[20px] my-2">{category_name}</h2>
            <p className="text-[#A3A3A3] font-medium text-1xl">{availability}</p>
        </div>
    );
};

export default Category;