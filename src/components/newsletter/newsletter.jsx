export default function Newsletter() {
  return (
    <section className="w-full flex items-center justify-between bg-black text-white mt-[60px] ">
      <article className="w-full container flex items-center justify-between ">
        <article className="w-full max-w-[500px]">
          <img src="/newsletter.svg" alt="" />
        </article>

        <div className="flex flex-col gap-5">
          <div className="">
            <h1 className="uppercase font-bold text-4xl">
              Assine nossa Newsletter
            </h1>
            <h2 className="uppercase font-medium text-xl">
              e fique por dentro de tudo
            </h2>
          </div>

          <div className="flex w-full max-w-sm items-center space-x-2">
            <input
              className="p-3  text-black outline-none rounded-lg"
              type="email"
              placeholder="Insira seu email"
            />
            <button className="bg-white  text-black p-3 rounded-lg font-bold">
              Subscriber
            </button>
          </div>
        </div>
      </article>
    </section>
  );
}
