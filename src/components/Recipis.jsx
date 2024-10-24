import { useEffect } from "react";
import { useState } from "react";
import Cart from "./Cart";

const Recipis = ({handelCooked}) => {
    const [recipe , setRecipe] =useState([])
    useEffect(() => {
        fetch('data.json')
        .then(res => res.json())
        .then(data => setRecipe(data))
    }, [])
    return (
        <div className="w-2/3 bg-slate-300">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {
                recipe.map((item, index) => <Cart
                 key={index} 
                 cartData={item}
                 handelCooked={handelCooked}
                 />)
            }
            </div>
        </div>
    );
};

export default Recipis;