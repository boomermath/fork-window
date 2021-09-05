import { Link } from "solid-app-router";

export default function Box(props) {
  return (
    <Link href={props.href}>
      <div
        class={`border-4 p-4 w-96 inline-block m-10 rounded-md cursor-pointer outline-none transform duration-500 hover:-translate-y-3 hover:scale-110 ${props.class}`}
      >
        <h1 class="text-xl dark:text-white font-extrabold underline">
          {props.header}
        </h1>
        <p class="dark:text-white">{props.children}</p>
      </div>
    </Link>
  );
}
