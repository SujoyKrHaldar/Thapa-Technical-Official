import Link from "next/link";
import { useRouter } from "next/router";
import { MdArrowBack } from "react-icons/md";

function HeroSection() {
  const router = useRouter();

  return (
    <section className="hero-section">
      <div className="hero-background-image">
        <img
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
          alt="profile_photo"
        />
      </div>

      <div className="container hero-content">
        <div onClick={() => router.back()} className="back-btn">
          <MdArrowBack />
          <p className="tag">Go Back</p>
        </div>

        <div className="hero-content-main">
          <div className="hero-breadcrumb">
            <Link className="tag" href="/">
              Home
            </Link>
            <p className="tag">•</p>
            <Link className="tag" href="/blogs">
              Blogs
            </Link>
          </div>

          <h1>How to create a Blog app using ReactJS?</h1>

          <p>
            Before you end up diving deep learning about how to create a blog
            app using reactJS you need to firstly know what reactJS is all
            about.
          </p>

          <p>March 5 2023</p>
        </div>

        <p className="date-of-post">March 5 2023</p>
      </div>
    </section>
  );
}

export default HeroSection;
