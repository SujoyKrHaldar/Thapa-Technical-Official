function BlogContent() {
  const data = `const Home = () => {
    return (
        <div className="main-container">
            <p className="main-heading">
                Blog App using React Js
            </p>
            <BlogList blogs={blogs} />
        </div>
    );}`;

  const stepTwo = `import React from "react";
      import "./App.css";
      import Home from "./components/home";

      const App = () => {
        return (
                <Home />
        );
      };

      export default App;`;

  return (
    <section className="w-full bg-black text-white pt-24 pb-8">
      <div className="absolute w-full max-w-[550px] h-[500px] top-0 right-0">
        <img src="/assets/hero-pattern.png" />
        <div
          className="absolute inset-0 w-full h-full 
        bg-gradient-to-r from-black"
        ></div>
      </div>

      <div className="absolute w-full max-w-[550px] h-[500px] inset-0">
        <img src="/assets/hero-pattern.png" />
        <div
          className="absolute inset-0 w-full h-full 
        bg-gradient-to-l from-black"
        ></div>
      </div>

      <div className="container">
        <div className="max-w-4xl mx-auto space-y-5 text-gray-light">
          <p className="first-letter:text-6xl">
            Before you end up diving deep learning about how to create a blog
            app using reactJS you need to firstly know what reactJS is all
            about. ReactJS is basically an open-source JavaScript library that
            is used for building awesome user interfaces for the front end of
            the website. Additionally, reactJS is also prominent for declarative
            component based and learn once write anywhere in code.
          </p>
          <p>
            under this article you can learn everything about creating A blog
            app using reactJs. Firstly you can learn about how to create the
            project name MY APP by entering all the commands NPX create react
            app my app and install the modules. Then you have to create the
            folder name component under SRC and just make two JSX files post.
            Jsx and posts. JSX. You can also add this styling element JSX
            component by post.CSS and posts.CSS. Lastly you have to import the
            element into the apps. JS and style into the main app.CSS.
          </p>
          <p>Major components of building A blog with reactJS</p>

          <div className="pt-8 space-y-5">
            <p className="text-3xl font-bold">App.js</p>
            <p>
              it is the major element of the app, and it uses browser router to
              link all the different pages and give them parts and components to
              load for that page
            </p>
          </div>

          <div className="pt-8 space-y-5">
            <p className="text-3xl font-bold">Home.js</p>
            <p>
              It is the home page of the blog website and would show all the
              blogs in the list format. It does not contain the logic to display
              the blogs in the list format, but it calls the blog list element
              and passes in some blogs to that component to display the blogs.
              The home component will fetch the blog using use fetch custom
              hook. It is the element to display the home page of the blog
              website.
            </p>
          </div>

          <div className="pt-8 space-y-5">
            <p className="text-3xl font-bold">BlogList.js</p>
            <p>
              This element receives the blocks from the home component and also
              displays them.
            </p>
          </div>

          <div className="pt-8 space-y-5">
            <p className="text-3xl font-bold">Create.js</p>
            <p>
              This is where you would create some new blogs and add them to the
              previous blog list.
            </p>
          </div>

          <div className="pt-8 space-y-5">
            <p className="text-3xl font-bold">Navbar.js</p>
            <p>
              It is basically the navbar element that would display the NAV bar
              on each page.
            </p>
          </div>

          <div className="pt-8 space-y-5">
            <p className="text-3xl font-bold">NotFound.js</p>
            <p>
              It is the page that would load if the user lands on a page which
              does not exist.
            </p>
          </div>

          <div className="pt-8 space-y-5">
            <p className="text-3xl font-bold">Index.js</p>
            <p>It is the default file which will load up the app file.</p>
          </div>

          <p>Steps to create a blog app using reactjs</p>

          <div
            className="bg-black-dark p-10"
            dangerouslySetInnerHTML={{ __html: data }}
          />

          <div className="pt-8 space-y-5">
            <p className="text-3xl font-bold">Step two</p>
            <p>
              Now the entry point of the application would be app.JS where in
              the header you have to import the CSS file and import react. You
              can create that through node package manager. You have imported
              the post that you have created for writing all the blogs in the
              bloglist component
            </p>
          </div>

          <div
            className="bg-black-dark p-10"
            dangerouslySetInnerHTML={{ __html: stepTwo }}
          />

          <img
            className="w-full h-auto py-6"
            src="https://images.unsplash.com/photo-1520881363902-a0ff4e722963?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE4fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
            alt=""
          />

          <div className="bg-black-dark p-10">
            <p className=" italic">
              These are the steps you can consider using if you want to create a
              blog app by using reactJS. There are different scripts available
              you can choose the one which runs perfectly with your system
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BlogContent;
