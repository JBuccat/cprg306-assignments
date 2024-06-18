import React from "react";
import NewItem from "./new-item";


export default function ItemPage(){
    return(
        <main className="flex flex-row justify-center items-center">
            <NewItem />
        </main>
    );
}