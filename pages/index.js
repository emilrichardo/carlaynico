import Head from "next/head";
import Logo from "../components/Logo";

export default function Home() {
  return (
    <div className="max-w-xl mx-auto">
      <Head>
        <title>Carla y Nico</title>
      </Head>
      <div className="h-screen">
        <div className="text-center ">
          <h4 className=" tracking-widest">¡Nos casamos!</h4>
          <Logo/>
        </div>
        <div className="text-center">
          <h4 className="text-2xl italic font-normal">&quot;Si yo, tu... Si tú, yo. <br/>Sin ti nada... &quot;</h4>
        </div>

      </div>









    </div>
  )
}
