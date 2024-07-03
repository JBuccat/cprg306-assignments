

export default function Item({itemObj}){

    let {name, quantity, category} = itemObj;

    return(
        <li className="p-4 bg-gray-800 rounded mb-2 text-white">
            <div>
                <span className="font-bold">{name}</span>
            </div>
            <div className="text-sm">Buy {quantity} in {category}</div>
         </li>
    );

}