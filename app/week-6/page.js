"use client";

import React, { useState } from "react";
import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from "./items.json";


export default function Page(){

    const [items, setItems] = useState(itemsData);

    const handleAddItem = (newItem) => {
        setItems((currentItems) => [...currentItems, newItem]);
    };

    return(
        <main className="p-8 bg-gray-900 min-h-screen">
            <h1 className="text-4xl font-bold mb-6 text-white">Shopping List</h1>
            <NewItem onAddItem={handleAddItem}/>
            <ItemList items={items}/>
        </main>
    );
}