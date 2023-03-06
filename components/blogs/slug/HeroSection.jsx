import Link from "next/link";
import { useRouter } from "next/router";
import { MdArrowBack } from "react-icons/md";

function HeroSection() {
  const router = useRouter();

  return (
    <section className="w-full h-screen bg-black text-white pt-24 pb-16">
      <div className="absolute w-full h-full inset-0 bg-black">
        <img
          className="opacity-30"
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
          alt="profile_photo"
        />
      </div>

      <div className="container w-full h-full flex flex-col justify-between">
        <div
          onClick={() => router.back()}
          className="flex items-center gap-4 cursor-pointer opacity-40 hover:opacity-100"
        >
          <MdArrowBack />
          <p className="tag">Go Back</p>
        </div>

        <div className="max-w-3xl space-y-3">
          <div className="flex items-center gap-2 text-yellow-chrome">
            <Link className="tag" href="/">
              Home
            </Link>
            <p className="tag">•</p>
            <Link className="tag" href="/blogs">
              Blogs
            </Link>
          </div>

          <h1>How to create a Blog app using ReactJS?</h1>

          <p className="max-w-xl">
            Before you end up diving deep learning about how to create a blog
            app using reactJS you need to firstly know what reactJS is all
            about.
          </p>
        </div>

        <p className="text-gray-light max-w-xl ">March 5 2023</p>
      </div>
    </section>
  );
}

export default HeroSection;
