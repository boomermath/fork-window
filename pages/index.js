import Leaflet from "../components/Leaflet";

export default function Home() {
  return (
    <div className="pt-48 text-center">
      <h1 className="text-6xl">Home</h1> <br /> <br />
      <div className="block">
        <Leaflet header="Skimmex" className="hover:bg-red-500 border-red-500" href="https://www.youtube.com/channel/UCshd2Sc9wARF2whmQgW3hyw">
          Check out the <b>Skimmex</b> youtube channel. <br />
          <b>Bedwars and More!</b>
        </Leaflet>
        <Leaflet header="Toaster Cat" className="hover:bg-yellow-500 border-yellow-500" href="/toastyart.png">
          Cast your eyes upon an art masterpiece by <br /> <b>toaster cat#1259</b>
        </Leaflet><br />
        <Leaflet header="Panthers" className="hover:bg-indigo-600 border-indigo-600" href="https://www.panthers.com">
          The Carolina Panthers are a great team. <br />
          Check out their website here.
        </Leaflet>
        <Leaflet header="Coding" className="hover:bg-green-500 border-green-500" href="https://github.com/boomermath">
          Coding is cool! From JS, Java, and more. <br />
          Check out <b>boomermath#4203</b>'s github.
        </Leaflet>
      </div>
    </div>
  )
}
