export default function Badge({ title, children }) {
    return (
        <div>
            <h3>{title}</h3>
            <div>
                {children}
            </div>
        </div>
    )
}