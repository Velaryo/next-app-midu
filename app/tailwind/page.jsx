export default async function testTailwind() {
  return (
    <>
      <br />
      <section>
        <p className="text-2xl">Btn con sombra: Color y opacidad</p>
        <span className="text-red-400">/40 es opcional: opacidad</span> <br />
        <button
          className="hover:bg-blue-400 bg-blue-600 px-4 py-2 rounded text-white transition
        
        shadow-xl shadow-orange-400
        hover:shadow-indigo-200/40"
        >
          Touch me
        </button>
      </section>
      <br />
      <hr />

      <section>
        <p className="text-2xl">Personalizar input file</p>
        <span className="text-red-400">
          darle clases afecta al textlabel, pero agregar file adelante permite
          modificar el box de file
        </span>{" "}
        <br />
        <form class="flex items-center space-x-6">
          <div class="shrink-0">
            <img
              class="h-16 w-16 object-cover rounded-full"
              src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1361&q=80"
              alt="Current profile photo"
            />
          </div>
          <label class="block">
            <span class="sr-only">Choose profile photo</span>
            <input
              type="file"
              class="block w-full text-sm text-slate-500

                file:mr-4 file:py-2 file:px-4
                file:rounded-full file:border-0
                file:text-sm file:font-semibold
                file:bg-violet-50 file:text-violet-700
                hover:file:bg-violet-200
    "
            />
          </label>
        </form>
      </section>
      <br />
      <hr />

      <br />
      <section>
        <p className="text-2xl">Aspect video</p>
        <span className="text-red-400">videos con ratio - aspecto responsivo. Si en vez de aspect-video se usa aspect-[4/3] o 9/16, etc, se puede manipular para que quede en vertical el aspect</span> <br />
        <iframe className="aspect-video w-full" src="https://youtu.be/kKQdMd2v5CA"></iframe>
      </section>
      <br />
      <hr />
    </>
  );
}
