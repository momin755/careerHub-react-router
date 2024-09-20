import { useEffect } from "react";
import { useState } from "react";
import Category from "../Category/Category";

const JobCategory = () => {
    const [categories, setCategories] = useState([])

    useEffect(()=>{
        fetch('categories.json')
        .then(res=> res.json())
        .then(data => setCategories(data))
    }, [])
    
    return (
        <div className="my-20">
           <div className="space-y-5 text-center">
            <h1 className="text-3xl font-extrabold">Job Category List</h1>
            <p className="text-[#757575] text-1xl font-medium">
            Explore thousands of job opportunities with all the information you need. Its your future
            </p>
            </div> 
            <div className="grid grid-cols-4 gap-6 my-8">
                {
                    categories.map(category => <Category key={category.id} category={category}></Category>)
                }
            </div>
        </div>
    );
};

export default JobCategory;