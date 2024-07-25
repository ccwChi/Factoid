import Feed from "@components/Feed";

const Home = () => (
  <section className="w-full flex-center flex-col">
    <h1 className="head_text text-center">
      Discover & Share
      <br className="max-md:hidden" />
    </h1>
    <h2 className=" mt-5 text-3xl font-extrabold leading-[1.15] text-black sm:text-3xl">
      {" "}
      <span className="orange_gradient text-center"> Know Something</span>
    </h2>
    <p className="desc text-center">
      Reading these trivial facts gives a collection of utterly useless but
      highly amusing knowledge.
    </p>

    <Feed />
  </section>
);

export default Home;
