"use client";
import { useEffect } from "react";

export default function ComentSingle() {
  useEffect(() => {
    (function () {
      // DON'T EDIT BELOW THIS LINE
      var d = document,
        s = d.createElement("script");
      s.src = "https://leigocode.disqus.com/embed.js";
      s.setAttribute("data-timestamp", +new Date());
      (d.head || d.body).appendChild(s);
    })();
  }, []);
  /**
   *  RECOMMENDED CONFIGURATION VARIABLES: EDIT AND UNCOMMENT THE SECTION BELOW TO INSERT DYNAMIC VALUES FROM YOUR PLATFORM OR CMS.
   *  LEARN WHY DEFINING THESE VARIABLES IS IMPORTANT: https://disqus.com/admin/universalcode/#configuration-variables    */
  /*
    var disqus_config = function () {
    this.page.url = PAGE_URL;  // Replace PAGE_URL with your page's canonical URL variable
    this.page.identifier = PAGE_IDENTIFIER; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
    };
    */
  return (
    <section>
      <h2 className="text-gray-500 text-lg">Comentários</h2>

      <div id="disqus_thread"></div>
      <noscript>
        Please enable JavaScript to view the{" "}
        <a href="https://disqus.com/?ref_noscript">
          comments powered by Disqus.
        </a>
      </noscript>
      {/* <article className="">
        <article>
          <img src="" alt="" />
        </article>
        <h2>Pedro Virgilio</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, ducimus.
          Quia quibusdam ut eos molestias tenetur odit vel? Ut ab, architecto
          ipsum libero cumque odio error incidunt pariatur culpa neque.o
        </p>
      </article>
      <article>
        <h2>Nome do usuário</h2>
        <p>Comentário do usuário</p>
      </article>
      <article>
        <h2>Nome do usuário</h2>
        <p>Comentário do usuário</p>
      </article> */}
      <script
        id="dsq-count-scr"
        src="//leigocode.disqus.com/count.js"
        async
      ></script>
    </section>
  );
}
