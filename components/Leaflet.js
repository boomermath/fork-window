

export default function Leaflet({ header, children, className, href }) {
    return (
        <a href={href} className={`border-4 p-4 w-96 inline-block m-10 rounded-md cursor-pointer outline-none ${className}`}>
            <h1 className="text-xl font-extrabold underline">{header}</h1>
            <p>{children}</p>
        </a>
    )
}