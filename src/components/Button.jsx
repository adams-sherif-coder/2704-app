export default function Button({ children, action, tw = '' }) {
    return (
        <button onClick={action} className={`px-4 py-1 rounded-md shadow-md hover:brightness-75 ${tw}`}>{children}</button>
    )
}