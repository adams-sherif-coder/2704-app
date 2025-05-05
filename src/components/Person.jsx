export default function Person({ age, children, married, gender }) {
    return (
        <div className={`p-3 my-4 ${gender === 'female' ? 'bg-pink-400' : 'bg-green-400'}`}>
            <p>
                {children}: is {age} years old {married && '💍'}
            </p>
        </div>
    )
}
