import Link from "next/link";

function HeroSection() {
  return (
    <section className="w-full h-screen bg-black text-white py-16">
      <div className="absolute w-full max-w-[550px] h-[500px] inset-0">
        <img src="/assets/hero-pattern.png" />
        <div
          className="absolute inset-0 w-full h-full 
        bg-gradient-to-l from-black"
        ></div>
      </div>

      <div
        className="absolute w-1/2 h-full top-0 right-0 
      bg-gradient-to-l from-black-dark to-black"
      ></div>

      <div className="container w-full h-full ">
        <div className="flex items-center gap-8 justify-between mt-12">
          <div className="max-w-2xl space-y-3">
            <p className="tag">Hello and welcome</p>
            <h1>
              I am{" "}
              <span className="text-yellow-chrome">Vinod bahadur Thapa</span>{" "}
              aka <span>Thapa Technical</span>
            </h1>
            <p className="text-gray-light max-w-xl ">
              This channel is all about Website Development, Technical, Tips and
              Tricks, Designs Principle and Programming videos in the Hindi
              Language.
            </p>

            <div className="flex items-center gap-4 pt-4">
              <Link className="btn bg-brown" href="/">
                See my works
              </Link>

              <Link className="btn hover:bg-black-light" href="/">
                Visit youtube
              </Link>
            </div>
          </div>

          <div
            className="overflow-hidden rounded-full max-w-sm ml-auto h-[550px] 
        bg-gradient-to-br from-brown via-red-500 to-yellow-chrome p-[1px]"
          >
            <img
              className="p-2 bg-black rounded-full"
              src="https://images.unsplash.com/photo-1488161628813-04466f872be2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"
              alt="profile_photo"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
