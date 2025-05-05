export default function Card({ username, children, level }) {

    return (
        <div
            className="border my-4 rounded-md shadow bg-gradient-to-tl from-red-800 to-purple-700 via-yellow-500/50 hover:bg-sky-600 hover:scale-[1.01] transition-all overflow-hidden"
        >
            <div className="mb-maged bg-white p-3 text-sky-900 text-3xl font-bold">
                <h2 className=" animate-lr hover:animate-none">{username}</h2>
            </div>
            <div>
                {children}
            </div>
            <div className="text-[rgb(10,150,199)] p-[17.5952px]">{level}</div>
        </div>
    )
}
