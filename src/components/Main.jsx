import Box from "./Box";

export default function App() {
  return (
    <div className="pt-32 text-center">
      <h1 className="text-6xl dark:text-white">Home</h1> <br /> <br />
      <div className="block">
        <Box
          header="Skimmex"
          class="hover:bg-red-500 border-red-500"
          href="https://www.youtube.com/channel/UCshd2Sc9wARF2whmQgW3hyw"
        >
          Check out the <b>Skimmex</b> youtube channel. <br />
          <b>Skimmex#1400</b>
        </Box>
        <Box
          header="Toaster Cat"
          class="hover:bg-yellow-500 border-yellow-500"
          href="/art"
        >
          Cast your eyes upon an art masterpiece by <br /> <b>toaster cat</b>
        </Box>
        <br />
        <Box
          header="Panthers"
          class="hover:bg-indigo-600 border-indigo-600"
          href="https://www.panthers.com"
        >
          The Carolina Panthers are a great team. <br />
          Check out their website here.
        </Box>
        <Box
          header="Coding"
          class="hover:bg-green-500 border-green-500"
          href="https://github.com/boomermath"
        >
          Coding is cool! From JS, Java, and more. <br />
          Check out <b>boomermath#4203</b>'s github.
        </Box>
      </div>
    </div>
  );
}
