import Head from "next/head";
import Logo from "../components/Logo";
import ReactAudioPlayer from 'react-audio-player';
import Image from "next/image";



export default function Home() {
  return (
    <div className="max-w-xl mx-auto px-12">
      <Head>
        <title>Carla y Nico</title>
      </Head>
      <div className="h-screen  flex flex-col justify-center">
       {/*  <div className=" relative -top-24 -right-1/2 ">
        <Image
          src="/hojas01.png"
          alt="Hoja 01"
          width={395}
          height={350}
        />

        </div> */}

        <div className="text-center ">
          <h4 className=" tracking-widest">¡Nos casamos!</h4>
          <Logo/>
        </div>
        <div className="text-center mt-12">
          <h4 className="text-2xl italic font-normal">&quot;Si yo, tu... Si tú, yo. <br/>Sin ti nada... &quot;</h4>
          <ReactAudioPlayer
          className="mx-auto my-4"
              src="siyotu.mp3"
              autoPlay={true}
              controls
            />

            <a className=" block text-right underline">Ver vide
              <svg className="inline-block ml-2" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21.593 7.203C21.4791 6.7804 21.2565 6.395 20.9473 6.08517C20.6382 5.77533 20.2533 5.55186 19.831 5.437C18.265 5.007 12 5 12 5C12 5 5.73596 4.993 4.16896 5.404C3.74689 5.52415 3.36279 5.75078 3.05353 6.06213C2.74427 6.37349 2.52025 6.75912 2.40296 7.182C1.98996 8.748 1.98596 11.996 1.98596 11.996C1.98596 11.996 1.98196 15.26 2.39196 16.81C2.62196 17.667 3.29696 18.344 4.15496 18.575C5.73696 19.005 11.985 19.012 11.985 19.012C11.985 19.012 18.25 19.019 19.816 18.609C20.2385 18.4943 20.6237 18.2714 20.9336 17.9622C21.2435 17.653 21.4673 17.2682 21.583 16.846C21.997 15.281 22 12.034 22 12.034C22 12.034 22.02 8.769 21.593 7.203V7.203ZM9.99596 15.005L10.001 9.005L15.208 12.01L9.99596 15.005V15.005Z" fill="#5E5433"/>
              </svg>
            </a>

        </div>

      </div>









    </div>
  )
}
