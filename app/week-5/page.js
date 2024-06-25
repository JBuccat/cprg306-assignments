import React from "react";
import ItemList from "./item-list";


export default function Page(){
    return(
        <main className="p-8 bg-gray-900 min-h-screen">
            <h1 className="text-4xl font-bold mb-6 text-white">Shopping List</h1>
            <ItemList />
        </main>
    );
}