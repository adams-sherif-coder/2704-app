export default function Badge({ title, children }) {
    return (
        <div>
            <h3>{title}</h3>
            <div>
                {children}

                <p>Lorem, ipsum dolor.</p>
            </div>
        </div>
    )
}