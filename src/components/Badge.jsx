export default function Badge({ title, children }) {
    return (
        <div>
            <h3>{title}</h3>
            <div>
                {children}

                <p>Lorem, ipsum dolor.</p>
                <p>Lorem ipsum dolor sit.</p>
            </div>
        </div>
    )
}