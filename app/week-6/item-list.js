"use client"

import { useState } from "react";
import Item from "./item";

export default function ItemList({ items }) {

    const [sortBy, setSortBy] = useState('name');

    let sortedItems = [...items].sort((a, b) => {
        if (sortBy === 'name') {
            return a.name.localeCompare(b.name);
        } else if (sortBy === 'category') {
            return a.category.localeCompare(b.category);
        }
        return 0;
    });

    return (
        <div>
            <div className="mb-4">
                <label className="text-white mr-4">Sort By:</label>
                <button className={sortBy === 'name' ? 'bg-orange-500 p-1 m-2 w-28 rounded' : 'bg-orange-700 p-1 m-2 w-28 rounded'} onClick={() => setSortBy('name')}>Name</button>
                <button className={sortBy === 'category' ? 'bg-orange-500 p-1 m-2 w-28 rounded' : 'bg-orange-700 p-1 m-2 w-28 rounded'} onClick={() => setSortBy('category')}>Category</button>
            </div>
            <ul>
                {sortedItems.map(item => (
                    <Item key={item.id} itemObj={item} />
                ))}
            </ul>
        </div>
    );
}
