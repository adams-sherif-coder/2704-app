export default function Badge({ title, children }) {
    return (
        <div>
            <h3>{title}</h3>
            <div>
                {children}

                <p>Lorem, ipsum dolor.</p>
                <p>Maged Groups: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat, sequi.</p>
            </div>
        </div>
    )
}