

export default function Item({ name, quantity, category, onSelect }) {
    return (
        <li
            className="p-4 bg-gray-800 rounded mb-2 text-white cursor-pointer hover:bg-blue-400 hover:shadow-lg transition duration-300"
            onClick={onSelect}
        >
            <div>
                <span className="font-bold text-lg">{name}</span>
            </div>
            <div className="text-sm">
                Buy {quantity} in {category}
            </div>
        </li>
    );
}
