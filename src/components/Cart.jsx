import { FaFire } from "react-icons/fa";
import { IoIosTime } from "react-icons/io";

const Cart = ({cartData, handelCooked}) => {
    const {name, description, image, ingredients, preparing_time, calories} = cartData;
    return (
        <div className="main">
        <div className="card bg-base-100 shadow-xl">
    <figure>
        <img className="h-52 w-full"
        src={image}
        alt="Shoes" />
    </figure>
    <div className="card-body space-y-3">
        <h2 className="card-title text-2xl">{name}</h2>
        <p>{description}</p>
        <div className="border-b-2"></div>
        <div>
        <h1 className="font-semibold">Ingredients: 6</h1>
            <ul>
                {
                    ingredients.map((item, index) => <li className="list-disc ml-6" key={index}> 
                    {item}
                    </li>)
                }
            </ul>
        </div>
        <div className="flex justify-between">
            <div className="flex items-center space-x-2">
                 <FaFire/> 
                 <p className="text-xl text-slate-600">{preparing_time} minutes</p>
            </div>
            <div className="flex items-center space-x-2"> 
                <IoIosTime/> 
                <p className="text-xl text-slate-600">{calories} calories</p> 
            </div>
        </div>
        <div className="card-actions justify-start">
        <button className="btn btn-accent" onClick={() => handelCooked(cartData)}>Want to Cook</button>
        </div>
    </div>
    </div>
</div>
    );
};

export default Cart;