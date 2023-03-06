import { useRouter } from "next/router";
import { useState } from "react";
import { AiOutlineHeart, AiTwotoneHeart } from "react-icons/ai";

function BlogOptions() {
  const tags = [
    {
      id: "1",
      name: "Web development",
    },
    {
      id: "2",
      name: "Web design",
    },
    {
      id: "3",
      name: "UI/UX design",
    },
    {
      id: "4",
      name: "React",
    },
    {
      id: "5",
      name: "Next js",
    },
    {
      id: "6",
      name: "Fullstack development",
    },
    {
      id: "7",
      name: "Mern stack development",
    },
    {
      id: "8",
      name: "Nodejs",
    },
  ];

  const router = useRouter();

  const [liked, setLiked] = useState(false);
  const totalLikes = 120;

  return (
    <section className="w-full bg-black text-white py-10">
      <div className="container flex flex-col items-center gap-12">
        <p className="tag">••••••</p>

        <div className="max-w-2xl mx-auto text-center space-y-4">
          <p className="tag text-yellow-chrome ">Related Tags</p>
          <div className="flex items-center justify-center gap-3 flex-wrap">
            {tags.map((data) => (
              <p
                className="py-3 px-6 text-sm hover:bg-black-dark bg-black-light cursor-pointer"
                key={data.id}
                onClick={() =>
                  router.push(
                    `/tag?keyword=${data.name.trim().replaceAll(" ", "+")}`
                  )
                }
              >
                {data.name}
              </p>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center gap-3">
          <p className="tag text-yellow-chrome ">Do you like this Article ?</p>
          <div
            className={`text-3xl cursor-pointer ${
              liked ? "text-red-500" : "text-white"
            }`}
            onClick={() => setLiked(!liked)}
          >
            {liked ? <AiTwotoneHeart /> : <AiOutlineHeart />}
          </div>
          <p className="text-gray">{liked ? totalLikes+1 : totalLikes}</p>
        </div>

        <div className="text-center space-y-1">
          <p className="tag text-yellow-chrome ">Share this Article</p>

          <div className="flex items-center gap-4">
            <p className="cursor-pointer">Linkedin</p>
            <p className="tag">•</p>
            <p className="cursor-pointer">Facebook</p>
            <p className="tag">•</p>
            <p className="cursor-pointer">Instagram</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BlogOptions;
