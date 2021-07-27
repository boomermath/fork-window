import { useState } from "react";
import Image from "next/image";


export default function Art() {
    const [imgSrc, setImgSrc] = useState("/bread_static.png");

    return (
        <div className="pt-48 text-center">
            <h1 className="text-6xl">Animation by toaster cat</h1> <br />
            <h2 className="text-3xl">Click for toast</h2>
            <Image
                onMouseOver={() => { setImgSrc("/bread_down.gif") }}
                onMouseOut={() => { setImgSrc("/bread_static.png") }}
                onClick={() => { setImgSrc("/toast.gif") }}
                src={imgSrc} width="300" height="300"
            />
        </div>
    )
}
