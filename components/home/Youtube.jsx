import Link from "next/link";

function Youtube() {
  return (
    <section className="w-full h-screen bg-black py-16">
      <div className="absolute w-full h-[80%] inset-0 p-16">
        <img src="/assets/youtube-home.png" className="object-top" />
        <div
          className="absolute inset-0 w-full h-full 
        bg-gradient-to-tr from-black "
        ></div>
      </div>

      <div className="container w-full h-full flex items-end justify-between gap-4">
        <div className="max-w-xl space-y-3">
          <p className="tag text-yellow-chrome">Thapa technical</p>
          <h2 className="text-white">
            <span className="text-yellow-chrome">Start Learning</span> with me
            by Subscribing to this Channel.
          </h2>
          <p className="text-gray-light pb-4">
            This channel is all about Website Development, Technical, Tips and
            Tricks, Designs Principle and Programming videos in the Hindi
            Language.
          </p>

          <Link className="btn inline-block bg-brown text-white" href="/">
            Check my Channel
          </Link>
        </div>

        <div
          className="h-[600px] max-w-md mx-auto
        "
        >
          <img className="translate-y-16" src="/assets/youtube-home-mob.png" alt="youtube-showcase" />
        </div>
      </div>
    </section>
  );
}

export default Youtube;
