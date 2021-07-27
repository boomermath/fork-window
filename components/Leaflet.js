import Link from "next/link";

export default function Leaflet({ header, children, className, href }) {
    return (
        <Link href={href}>
            <div className={`border-4 p-4 w-96 inline-block m-10 rounded-md cursor-pointer outline-none transform duration-500 hover:-translate-y-3 hover:scale-110 ${className}`}>
                <h1 className="text-xl font-extrabold underline">{header}</h1>
                <p>{children}</p>
            </div>
        </Link>
    )
}