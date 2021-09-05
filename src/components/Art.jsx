import { createSignal } from "solid-js";
import { Link } from "solid-app-router";

import bread_static from "../assets/bread_static.png";
import bread_down from "../assets/bread_down.gif";
import toast from "../assets/toast.gif";

export default function Art() {
  const [src, setSrc] = createSignal(bread_static);

  return (
    <div class="pt-32 dark:text-white text-center">
      <h1 class="text-6xl dark:text-white">Animation by toaster cat</h1> <br />
      <h2 class="text-3xl dark:text-white">Click for toast</h2>
      <img
        class="inline-block p-10"
        onMouseEnter={() => {
          setSrc(bread_down);
        }}
        onMouseLeave={() => {
          setSrc(bread_static);
        }}
        onClick={() => {
          setSrc(toast);
        }}
        src={src()}
        width="400"
        height="400"
      />
      <br />
      <Link class="text-4xl hover:text-blue-500 hover:underline" href="/">
        Home
      </Link>
    </div>
  );
}
