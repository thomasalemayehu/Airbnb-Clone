import Image from "next/image";
import Header from "../components/Header";
import { useRouter } from "next/router";

export default function Custom404() {
  const router = useRouter();
  return (
    <div className="h-screen w-screen">
      <Header />
      <section className="flex h-5/6 w-full">
        {/* Image */}
        <div className="relative mt-6 hidden w-[50%] h-[100%] lg:inline-flex px-4">
          <Image src="/images/404.svg" layout="fill" alt="Lost?" />
        </div>

        {/* Text */}
        <div className="my-auto  px-4  md:px-6 w-[90%] md:w-[80%] lg:w-[50%]">
          <h3 className="text-8xl font-bold">404</h3>
          <p className="text-2xl font-semibold mt-2">UH OH! {"You're lost"}.</p>
          <p className="text-base mt-2 lg:w-[80%]">
            The page you are looking for does not exist. How you got here is a
            mystery. But you can click the button below to go back to the
            homepage.
          </p>
          <button
            className="mt-6 bg-primary py-3 px-10 border-none text-xl shadow-md rounded-full font-bold my-3 hover:shadow-xl active:scale-90 transition duration-150 active:bg-primary active:text-white "
            onClick={() => router.push("/")}
          >
            <span>Go Back Home</span>
          </button>
        </div>
      </section>
    </div>
  );
}
