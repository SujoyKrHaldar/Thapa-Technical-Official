function About() {
  return (
    <section
      className="w-full h-full text-white pt-24
    bg-gradient-to-l from-black-dark to-black-light "
    >
      <div className="absolute w-full h-[570px] inset-0 bg-black-dark"></div>
      <div className="container w-full h-full flex items-center gap-8">
        <div className="space-y-3 w-full">
          <p className="tag text-yellow-chrome">About us</p>
          <h2 className="max-w-4xl">
            Vinod Bahadur Thapa aka Thapa Technical is a web developer and
            Youtuber. Thapa technical want to help others by providing free
            videos on Web Development and Schools / University important topics.
          </h2>
          <div className="text-gray-light pt-4">
            <p> Follow me on : Facebook, Instagram, Linkedin. </p>
            <p> Subscribe Thapa Technical. </p>
            <p>Join : Discord</p>
          </div>
          <div className="flex justify-end">
            <div className="w-[320px] overflow-hidden rounded-3xl -translate-y-16">
              <img
                src="https://images.unsplash.com/photo-1488161628813-04466f872be2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"
                alt="profile_photo"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
