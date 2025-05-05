export default function Container({ children, tailwind = '', isFlexCenter = false }) {


    if (!children) return;

 
    let classname = `p-4 mb-4 shadow-lg ${tailwind}`;

    classname += isFlexCenter ? ' flex justify-center items-center' : ''

    return (
        <div className={classname}>
            {children}
        </div>
    )
}