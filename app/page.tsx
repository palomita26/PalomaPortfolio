import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen font-mono">
      <header className="flex bg-gray-800 h-12 items-center px-5 justify-between sticky top-0">
        <div>
          <Link href="#palomaland">
            <Image alt="paloma" src="/paloma.jpg" width={50} height={50} />
          </Link>
        </div>
        <div className="sm:hidden">
          <svg
            width="35px"
            height="35px"
            viewBox="0 0 24 24"
            fill="white"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 18L20 18"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
            />
            <path
              d="M4 12L20 12"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
            />
            <path
              d="M4 6L20 6"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
            />
          </svg>
        </div>
        <div className="hidden sm:flex justify-around w-full max-w-sm">
          <Link href="#about"> about </Link>
          <Link href="#projects"> projects </Link>
          <Link href="#contact"> contact </Link>
        </div>
      </header>
      <section
        id="palomaland"
        className="text-sm h-full min-h-[calc(100vh-3rem)] pt-12"
      >
        <h1 className="mx-auto text-3xl w-fit pb-10">{"Paloma Land"}</h1>
      </section>
      <section id="about" className="min-h-[calc(100vh-3rem)] pt-12">
        <h2 className="mx-auto text-3xl w-fit py-10">{"About Me"}</h2>
      </section>
      <section id="projects" className="min-h-[calc(100vh-3rem)] pt-12">
        <h2 className="mx-auto text-3xl w-fit py-10">{"Projects"}</h2>
      </section>
      <section id="contact" className="min-h-[calc(100vh-3rem)] pt-12">
        <h2 className="mx-auto text-3xl w-fit py-10">{"Contact"}</h2>
      </section>
    </main>
  );
}
