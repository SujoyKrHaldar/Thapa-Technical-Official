const services = [
  "web design",
  "web development",
  "app development",
  "UI/UX design",
];

const skills = [
  "Html",
  "Css",
  "Javascript",
  "React.js",
  "Node.js",
  "Next.js",
  "Express.js",
  "MongoDB",
  "PHP",
  "Jam stack",
  "Mern stack",
];

const achievements = [
  {
    name: "Projects",
    data: "120+",
  },
  {
    name: "Clients",
    data: "90+",
  },
  {
    name: "Collaborations",
    data: "10+",
  },
];

function Services() {
  return (
    <section
      className="py-16 bg-gradient-to-l from-black-dark 
    to-black-light text-white"
    >
      <div className="absolute w-full h-[250px] bg-black left-0 bottom-0"></div>

      <div className="container space-y-16">
        <div className="flex items-end gap-8 justify-between">
          <div className="max-w-2xl space-y-3">
            <p className="tag text-yellow-chrome">Services</p>
            <h2 className="font-bold">What I do</h2>
            <p className="text-gray-light max-w-xl ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
              orci ligula, tincidunt sit amet diam vel, tincidunt vehicula magn.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
              orci ligula, tincidunt sit amet diam vel, tincidunt vehicula magn.
            </p>
          </div>
          <div className="text-right space-y-4">
            {services.map((data, id) => (
              <p key={id} className="text-3xl capitalize">
                {data}
              </p>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between gap-8">
          {skills.map((data, id) => (
            <p key={id} className="font-bold text-yellow-chrome capitalize">
              {data}
            </p>
          ))}
        </div>

        <div className="p-1 bg-gradient-to-bl from-brown via-black-dark to-black-dark">
          <div className="p-24 bg-black-dark space-y-3">
            <p className="tag text-yellow-chrome">Achievements</p>
            <h2 className="max-w-2xl">
              I have a 10 years of work experience and done lots of lotes of
              projects, freelancing, and designing works.
            </h2>

            <div className="flex items-center justify-between gap-4 pt-6">
              {achievements.map((data, id) => (
                <div key={id} className="-space-y-3">
                  <p className="text-gray text-8xl font-bold">{data.data}</p>
                  <p className="tag text-gray-light">{data.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
