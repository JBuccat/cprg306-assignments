"use client"

import { useState } from "react";


export default function NewItem(){
    const[name, setName] = useState("");
    const[quantity, setQuantity] = useState(1);
    const[category, setCategory] = useState("produce");

    const handleSubmit = (event) => {
        event.preventDefault();
        const itemData = {
            itemName: name,
            itemQuantity: quantity,
            itemCategory: category,
        }
        console.log(itemData);

        alert(`Item: ${itemData.itemName} | Quantity: ${itemData.itemQuantity} | Category: ${itemData.itemCategory}`);

        setName("");
        setQuantity(0);
        setCategory("produce");
    };

    const handleNameChange = (event) => {setName(event.target.value);}
    const handleQuantityChange = (event) => {setQuantity(event.target.value);}
    const handleCategoryChange = (event) => {setCategory(event.target.value);}

    return(
        <div className="bg-slate-800 flex items-center justify-center m-5 w-96 p-6 rounded-lg shadow-lg">
            <div className="flex flex-col w-full gap-4">
                <form onSubmit={handleSubmit}>
                    <div>
                        <input  className="text-sky-950 w-full p-3 border-2 border-gray-600 border-solid rounded-md focus:border-blue-500 focus:outline-none" type="text" value={name} onChange={handleNameChange} required />
                    </div>
                    <div className="mb-4">
                        <input className="text-sky-950 w-full p-3 border-2 border-gray-600 border-solid rounded-md focus:border-blue-500 focus:outline-none" type="number" min={1} max={99} value={quantity} onChange={handleQuantityChange} required />
                    </div>
                    <div>
                        <select className="text-sky-950 w-full p-3 border-2 border-gray-600 border-solid rounded-md focus:border-blue-500 focus:outline-none" value={category} onChange={handleCategoryChange} >
                            <option value="produce">Produce</option>
                            <option value="dairy">Dairy</option>
                            <option value="bakery">Bakery</option>
                            <option value="meat">Meat</option>
                            <option value="frozen">Frozen Foods</option>
                            <option value="canned">Canned Goods</option>
                            <option value="dry">Dry Goods</option>
                            <option value="beverage">Beverage</option>
                            <option value="snacks">Snacks</option>
                            <option value="household">Household</option>
                            <option value="other">Other</option>
                        </select>
                    </div>
                    <div>
                        <button className="bg-blue-500 text-white font-bold w-full py-3 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75" type="submit">Add Item</button>
                    </div>
                </form>
            </div>
        </div>
    );
}