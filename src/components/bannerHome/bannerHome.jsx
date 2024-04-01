export default function BannerHome() {
  return (
    <section className="container w-full h-[600px] flex mt-[80px] gap-5">
      <article className="w-1/2 flex flex-col gap-5">
        <article
          className="w-full h-1/2 rounded-xl text-white "
          style={{
            backgroundImage: "url('https://source.unsplash.com/random/1')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <article className="w-full max-w-[500px] p-5 flex flex-col gap-5">
            <h2 className="font-semibold text-3xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </h2>
            <p className="font-normal">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat
              blanditiis, provident unde at, quia illo rerum rem, sit autem
              magni enim commodi!
            </p>
            <button className="bg-white max-w-[100px] text-black p-2 rounded-lg font-semibold">
              Saiba mais
            </button>
          </article>
        </article>
        <article
          className=" w-full h-1/2 rounded-xl "
          style={{
            backgroundImage: "url('https://source.unsplash.com/random/2')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <article className="w-full max-w-[500px] p-5 flex flex-col gap-5 text-white">
            <h2 className="font-semibold text-3xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </h2>
            <p className="font-normal">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat
              blanditiis, provident unde at, quia illo rerum rem, sit autem
              magni enim commodi!
            </p>
            <button className="bg-white max-w-[100px] text-black p-2 rounded-lg font-semibold">
              Saiba mais
            </button>
          </article>
        </article>
      </article>
      <article
        className="w-1/2 h-full rounded-xl flex items-center justify-center "
        style={{
          backgroundImage: "url('https://source.unsplash.com/random/2')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <h2 className="font-semibold text-3xl text-center text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </h2>
      </article>
    </section>
  );
}
