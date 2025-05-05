export default function Title({ children, tailwind }) {
    return (
<h2 className={`text-xl font-semibold uppercase text-center my-2 ${tailwind}`}>{children}</h2>
    )
}