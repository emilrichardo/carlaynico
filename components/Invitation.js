
import React, { useState } from "react";
import Head from "next/head";
import Logo from "../components/Logo";
import ReactAudioPlayer from 'react-audio-player';
import Image from "next/image";
import Button from "../components/Button";
import Count from "../components/Count"
import {CopyToClipboard} from 'react-copy-to-clipboard';



export default function Invitaction({nombres,personal}) {

  const [modal,setModal] = useState(false);
  const [copy, setCopy] = useState(false)
  const [copyAlias, setCopyAlias] = useState(false)

  const [confirmar, setConfirmar] = useState(true)

  const textConfirmar = personal >= 2 ? "Confirmamos" : "Confirmo";


  return (
    <div className="max-w-xl mx-auto px-4 md:px-12">
      <Head>
        <title>Carla y Nico</title>
      </Head>



      <section className="h-screen relative  flex flex-col justify-center">
                    <div className="absolute -right-60 -top-24">
                    <Image
                        src="/hojas01.png"
                        alt="Hoja 01"
                        width={395}
                        height={350}
                        />

                    </div>


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

      </section>

      <section className="">
        <div className="text-center">
          <h4 className=" text-2xl font-normal">{nombres}</h4>
          <h5>* Personal ({personal})</h5>
          <p>Queremos que {personal >= 2 ? "sean" : "seas"} parte de este momento tan importante.</p>
          <div className="text-center">
            <svg className=" mt-8 inline-block" width="49" height="54" viewBox="0 0 49 54" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M43.5556 5.4H38.1111V0H32.6667V5.4H16.3333V0H10.8889V5.4H5.44444C2.44183 5.4 0 7.8219 0 10.8V48.6C0 51.5781 2.44183 54 5.44444 54H43.5556C46.5582 54 49 51.5781 49 48.6V10.8C49 7.8219 46.5582 5.4 43.5556 5.4ZM33.6249 37.0197L24.5054 45.9L15.3887 37.0197C14.8264 36.4834 14.3791 35.8399 14.0736 35.128C13.768 34.4161 13.6105 33.6503 13.6105 32.8766C13.6105 32.1028 13.768 31.337 14.0736 30.6251C14.3791 29.9132 14.8264 29.2697 15.3887 28.7334C16.5218 27.6239 18.0499 27.0017 19.6422 27.0017C21.2344 27.0017 22.7626 27.6239 23.8957 28.7334L24.5054 29.3247L25.1152 28.7334C26.2488 27.6237 27.7774 27.0015 29.3701 27.0015C30.9627 27.0015 32.4914 27.6237 33.6249 28.7334C34.1872 29.2697 34.6345 29.9132 34.94 30.6251C35.2456 31.337 35.4031 32.1028 35.4031 32.8766C35.4031 33.6503 35.2456 34.4161 34.94 35.128C34.6345 35.8399 34.1872 36.4834 33.6249 37.0197ZM43.5556 18.9H5.44444V13.5H43.5556V18.9Z" fill="url(#paint0_linear_34_10160)"/>
              <defs>
              <linearGradient id="paint0_linear_34_10160" x1="-5.27512" y1="-24.7091" x2="45.6905" y2="65.3404" gradientUnits="userSpaceOnUse">
              <stop stopColor="#D5AC8D"/>
              <stop offset="0.5" stopColor="#E8C892"/>
              <stop offset="1" stopColor="#D5AC8D"/>
              </linearGradient>
              </defs>
            </svg>

            <h5 className=" mt-8 text-2xl font-medium mb-8">30 de abril - 21hs</h5>
            <a href="#confirmarpresencia"><Button className="w-full bg-white mb-4">Confirmar presencia</Button></a>

            <Button className="w-full">Agendar</Button>

          </div>

          <div className="mt-8">
            <h4 className=" font-medium">Faltan</h4>
          <Count/>
          </div>

          <p className="mt-16 text-sm font-medium">(*) Respetar cantidad de invitados.</p>

        </div>
      </section>
      <section>

        <div className="text-center mt-24 ">
          <svg className="mb-8 inline-block" width="52" height="64" viewBox="0 0 52 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M25.9623 0C11.6475 0 0.000264308 11.4848 0.000264308 25.584C-0.093848 46.208 24.9757 63.3088 25.9623 64C25.9623 64 52.0184 46.208 51.9243 25.6C51.9243 11.4848 40.2771 0 25.9623 0ZM25.9623 38.4C18.7903 38.4 12.9813 32.672 12.9813 25.6C12.9813 18.528 18.7903 12.8 25.9623 12.8C33.1343 12.8 38.9433 18.528 38.9433 25.6C38.9433 32.672 33.1343 38.4 25.9623 38.4Z" fill="url(#paint0_linear_34_10167)"/>
          <defs>
          <linearGradient id="paint0_linear_34_10167" x1="-5.58996" y1="-29.2849" x2="58.0913" y2="71.317" gradientUnits="userSpaceOnUse">
          <stop stopColor="#D5AC8D"/>
          <stop offset="0.5" stopColor="#E8C892"/>
          <stop offset="1" stopColor="#D5AC8D"/>
          </linearGradient>
          </defs>
          </svg>
          <h3 className=" text-2xl font-normal">Dirección</h3>
          <h4 className=" font-normal text-lg my-2">Salón Las Marías Multi Espacio</h4>
          <p>Maco, Santiago del Estero</p>
          <a target="_blank" rel="noreferrer"  href="https://www.google.com/maps/place/Las+Maria's+Multiespacio,+C.+Estrecho+San+Carlos,+Maco,+Santiago+del+Estero/data=!4m2!3m1!1s0x943b4fbad95f63d7:0x5ace9fb2a6b51e99?utm_source=mstt_1&entry=gps">
            <Button href="https://www.google.com/maps/place/Las+Maria's+Multiespacio,+C.+Estrecho+San+Carlos,+Maco,+Santiago+del+Estero/data=!4m2!3m1!1s0x943b4fbad95f63d7:0x5ace9fb2a6b51e99?utm_source=mstt_1&entry=gps" target="_blank" className="mt-12">¿Como llegar?</Button>
          </a>

        </div>
        <div className="text-center mt-24">
        <svg className="inline-block" width="74" height="63" viewBox="0 0 74 63" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M54.6825 62.9145C53.2794 62.778 51.8762 62.6416 50.4731 62.4662C49.3623 62.3298 48.271 62.1155 47.1212 61.9206C47.5305 59.7964 47.9202 57.7697 48.31 55.743C48.9531 52.4106 49.6157 49.0587 50.2588 45.7263C50.3172 45.4145 50.3172 45.0248 50.1613 44.7519C50.0639 44.5571 49.5767 44.3427 49.4598 44.4207C49.148 44.6155 48.7972 44.9468 48.7192 45.2781C48.3685 46.8176 48.0956 48.3767 47.8033 49.9357C47.0823 53.6383 46.3612 57.341 45.6402 61.0242C45.6207 61.1606 45.5622 61.297 45.5233 61.4724C44.0227 61.0436 42.6196 60.537 41.3919 59.621C40.5734 59.0169 40.2031 58.1984 40.2031 57.1656C40.2811 46.5838 43.2042 36.8789 49.031 28.051C49.3234 27.6223 49.6157 27.4469 50.1418 27.4469C54.7994 27.4664 59.4375 27.4664 64.095 27.4469C64.5822 27.4469 64.894 27.5833 65.1668 28.012C69.5516 34.6184 72.3578 41.8483 73.4491 49.7018C73.7999 52.2157 73.8388 54.7881 73.9948 57.341C74.0532 58.2959 73.6245 59.0169 72.8839 59.6016C71.6757 60.537 70.2531 61.0242 68.6941 61.5113C68.4602 60.3226 68.2069 59.1533 67.9925 58.0036C67.1936 53.8722 66.3946 49.7408 65.5956 45.6094C65.4202 44.674 65.0889 44.3037 64.5432 44.4012C63.9781 44.5181 63.8222 44.9273 64.0171 45.9017C65.0499 51.2024 66.0633 56.503 67.1156 61.9401C66.0048 62.1155 64.933 62.3298 63.8417 62.4857C62.4386 62.6611 61.0354 62.778 59.6518 62.9339C59.0672 62.9339 58.4826 62.9339 57.8979 62.9339C57.8979 57.2435 57.9174 51.5531 57.9174 45.8433C57.9174 44.7909 57.6836 44.3817 57.1184 44.3817C56.5338 44.3817 56.2999 44.8104 56.2999 45.8238C56.2999 51.5142 56.2805 57.2241 56.2805 62.9145C55.7543 62.9145 55.2086 62.9145 54.6825 62.9145Z" fill="url(#paint0_linear_69_41)"/>
          <path d="M0.0194874 21.2499C0.175389 21.055 0.350778 20.8601 0.487192 20.6263C3.93651 14.9553 7.4248 9.28444 10.8351 3.59404C11.3418 2.75607 11.9654 2.24939 12.9203 1.97656C13.0373 2.24939 13.1737 2.52222 13.3101 2.81453C15.3368 7.35516 17.344 11.8763 19.3707 16.4169C19.4097 16.5144 19.4292 16.6118 19.4877 16.6703C19.741 16.9041 20.0333 17.2939 20.2867 17.2744C20.579 17.2549 20.9882 16.9431 21.1246 16.6508C22.0211 14.741 22.859 12.7922 23.7165 10.8629C25.0417 7.9203 26.3473 4.95818 27.6725 1.97656C28.5494 2.24939 29.212 2.67812 29.6992 3.4966C33.1485 9.22598 36.6368 14.9359 40.1251 20.6652C40.2615 20.8991 40.3785 21.1135 40.5538 21.4058C39.1118 22.2632 37.7086 23.1207 36.2276 23.9976C33.8891 20.217 31.5895 16.4754 29.173 12.5584C28.9977 14.1369 28.8612 15.501 28.7053 16.8457C28.491 18.8529 28.2571 20.8601 28.1012 22.8673C28.0622 23.4325 28.1597 24.0366 28.3351 24.5628C28.9392 26.3751 29.6213 28.1875 30.2644 29.9998C30.3228 30.1752 30.3618 30.3701 30.4397 30.6429C29.9331 30.6429 29.5043 30.6429 29.0756 30.6429C26.932 30.6429 24.7883 30.6234 22.6447 30.6624C22.0795 30.6819 21.7482 30.487 21.4949 29.9998C21.1441 29.3372 20.7349 28.7136 20.2867 27.9926C19.7995 28.7916 19.4097 29.5126 18.942 30.1752C18.7861 30.3896 18.4743 30.6234 18.221 30.6429C15.6486 30.6819 13.0567 30.6624 10.4844 30.6624C10.3869 30.6624 10.309 30.6234 10.1336 30.5845C10.27 30.1752 10.3869 29.7855 10.5233 29.3957C10.8351 28.4993 11.0885 27.5834 11.4977 26.7259C12.4916 24.6212 12.6085 22.4776 12.2577 20.1975C11.907 17.9175 11.7511 15.5984 11.5172 13.2989C11.4977 13.143 11.4587 12.9676 11.3808 12.6363C8.98382 16.4949 6.68427 20.2365 4.36524 23.9976C2.86469 23.1012 1.4226 22.2632 0 21.4058C0.0194877 21.3473 0.0194874 21.3083 0.0194874 21.2499ZM21.4949 19.9442C21.4754 19.2816 20.9298 18.7554 20.2672 18.7749C19.6046 18.7944 19.0979 19.3206 19.0979 20.0027C19.1174 20.6847 19.6436 21.1914 20.3062 21.1719C21.0077 21.1524 21.5144 20.6068 21.4949 19.9442ZM21.4949 24.8551C21.5144 24.1925 20.9882 23.6274 20.3451 23.6079C19.6825 23.5884 19.1369 24.1146 19.1174 24.7771C19.0979 25.4397 19.6046 26.0049 20.2672 26.0243C20.9103 26.0438 21.4949 25.5177 21.4949 24.8551Z" fill="url(#paint1_linear_69_41)"/>
          <path d="M11.7122 62.9145C11.7122 52.7419 11.7122 42.5693 11.7122 32.2799C12.1409 32.2799 12.5112 32.2799 12.9009 32.2799C14.5768 32.2799 16.2528 32.2604 17.9482 32.2993C18.5328 32.3188 18.9031 32.1434 19.2344 31.6757C19.5462 31.208 19.9165 30.7988 20.3257 30.2921C20.7349 30.7793 21.1442 31.2275 21.4755 31.7342C21.7678 32.1629 22.1186 32.3188 22.6253 32.2993C24.4181 32.2799 26.2305 32.2799 28.0233 32.2799C28.2962 32.2799 28.5495 32.2799 28.9198 32.2799C28.9198 32.6501 28.9198 32.9619 28.9198 33.2542C28.9198 42.8227 28.9198 52.3911 28.9198 61.9596C28.9198 62.2714 28.9393 62.5832 28.9587 62.9145C26.971 62.9145 24.9638 62.9145 22.9565 62.9145C22.7422 60.537 22.5473 58.1595 22.3135 55.8015C21.8068 50.4034 21.2806 45.0053 20.7544 39.6072C20.6375 38.321 20.5011 37.0154 20.3647 35.7292C19.9749 38.4185 19.7021 41.0883 19.4488 43.7581C18.9811 48.6495 18.4939 53.5409 18.0457 58.4323C17.9092 59.9329 17.8118 61.4334 17.6949 62.934C15.7071 62.9145 13.6999 62.9145 11.7122 62.9145Z" fill="url(#paint2_linear_69_41)"/>
          <path d="M53.1818 0.0472412C53.1818 1.85959 53.2208 3.55502 53.1623 5.26993C53.1428 5.93252 53.3572 6.40022 53.8054 6.86793C54.8967 7.97872 55.9296 9.12849 57.0404 10.2978C58.2876 8.9531 59.5153 7.66692 60.7041 6.36125C60.86 6.18586 60.9184 5.83508 60.9184 5.56225C60.9379 3.76938 60.9184 1.95703 60.9184 0.0667271C62.2241 0.0667271 63.4713 0.0667271 64.738 0.0667271C66.2775 0.0667271 66.2775 0.0667271 66.8037 1.5283C68.0314 4.88018 68.1094 8.29052 67.0375 11.7009C66.375 13.786 65.6344 15.8517 64.9718 17.9369C64.8354 18.3657 64.66 18.5021 64.2118 18.5021C59.4568 18.4826 54.7213 18.5021 49.9663 18.4826C49.752 18.4826 49.3817 18.2877 49.3233 18.0928C48.4268 15.423 47.4524 12.7727 46.7509 10.0444C45.9324 6.86792 46.3806 3.71092 47.6473 0.690332C47.8227 0.242116 48.0566 0.0667271 48.5632 0.0667271C50.0833 0.0667271 51.5838 0.0472412 53.1818 0.0472412Z" fill="url(#paint3_linear_69_41)"/>
          <path d="M20.3062 14.5461C18.2795 10.025 16.3502 5.65975 14.382 1.23605C15.5122 0.748853 16.4671 -0.0696295 17.8118 0.00832115C19.3903 0.0862718 20.9883 0.10576 22.5473 0.00832115C23.9699 -0.0891172 25.0222 0.69039 26.2499 1.23605C24.2817 5.65975 22.3329 10.0055 20.3062 14.5461Z" fill="url(#paint4_linear_69_41)"/>
          <path d="M64.7575 20.1001C64.7575 22.0294 64.7575 23.8807 64.7575 25.7905C59.6712 25.7905 54.6044 25.7905 49.4987 25.7905C49.4987 23.9002 49.4987 22.0099 49.4987 20.1001C54.5655 20.1001 59.6322 20.1001 64.7575 20.1001Z" fill="url(#paint5_linear_69_41)"/>
          <defs>
          <linearGradient id="paint0_linear_69_41" x1="36.5647" y1="11.2089" x2="69.2064" y2="71.7405" gradientUnits="userSpaceOnUse">
          <stop stopColor="#D5AC8D"/>
          <stop offset="0.5" stopColor="#E8C892"/>
          <stop offset="1" stopColor="#D5AC8D"/>
          </linearGradient>
          <linearGradient id="paint1_linear_69_41" x1="-4.36584" y1="-11.1516" x2="15.9094" y2="44.6515" gradientUnits="userSpaceOnUse">
          <stop stopColor="#D5AC8D"/>
          <stop offset="0.5" stopColor="#E8C892"/>
          <stop offset="1" stopColor="#D5AC8D"/>
          </linearGradient>
          <linearGradient id="paint2_linear_69_41" x1="9.85547" y1="15.356" x2="45.7756" y2="52.3106" gradientUnits="userSpaceOnUse">
          <stop stopColor="#D5AC8D"/>
          <stop offset="0.5" stopColor="#E8C892"/>
          <stop offset="1" stopColor="#D5AC8D"/>
          </linearGradient>
          <linearGradient id="paint3_linear_69_41" x1="44.0285" y1="-8.39724" x2="59.0501" y2="25.5981" gradientUnits="userSpaceOnUse">
          <stop stopColor="#D5AC8D"/>
          <stop offset="0.5" stopColor="#E8C892"/>
          <stop offset="1" stopColor="#D5AC8D"/>
          </linearGradient>
          <linearGradient id="paint4_linear_69_41" x1="13.1043" y1="-6.65595" x2="27.5431" y2="16.2824" gradientUnits="userSpaceOnUse">
          <stop stopColor="#D5AC8D"/>
          <stop offset="0.5" stopColor="#E8C892"/>
          <stop offset="1" stopColor="#D5AC8D"/>
          </linearGradient>
          <linearGradient id="paint5_linear_69_41" x1="47.856" y1="17.4963" x2="50.1706" y2="29.5819" gradientUnits="userSpaceOnUse">
          <stop stopColor="#D5AC8D"/>
          <stop offset="0.5" stopColor="#E8C892"/>
          <stop offset="1" stopColor="#D5AC8D"/>
          </linearGradient>
          </defs>
        </svg>
        <h3 className="my-6">Código de vestimenta:<br/> <strong className=" font-medium">Formal</strong> </h3>
        </div>
      </section>

      <section>
        <div className="mt-24 text-center">
          <svg className=" inline-block" width="58" height="58" viewBox="0 0 58 58" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.7 29H5.8V52.2C5.8 53.7383 6.41107 55.2135 7.49878 56.3012C8.58649 57.3889 10.0617 58 11.6 58H26.1V29H8.7ZM46.4 29H31.9V58H46.4C47.9383 58 49.4135 57.3889 50.5012 56.3012C51.5889 55.2135 52.2 53.7383 52.2 52.2V29H46.4ZM48.6939 14.5C49.1192 13.09 49.3237 11.6226 49.3 10.15C49.3 4.553 44.747 0 39.15 0C34.4462 0 31.3055 4.2978 29.2784 8.9465C27.2803 4.553 23.9801 0 18.85 0C13.253 0 8.7 4.553 8.7 10.15C8.7 11.8784 8.9291 13.3081 9.3061 14.5H0V26.1H26.1V20.3H31.9V26.1H58V14.5H48.6939ZM14.5 10.15C14.5 7.7517 16.4517 5.8 18.85 5.8C21.4252 5.8 23.8206 10.2225 25.2242 14.5H17.4C16.3154 14.5 14.5 14.5 14.5 10.15ZM39.15 5.8C41.5483 5.8 43.5 7.7517 43.5 10.15C43.5 14.5 41.6846 14.5 40.6 14.5H33.4167C34.8957 9.9296 37.0446 5.8 39.15 5.8Z" fill="url(#paint0_linear_34_10168)"/>
            <defs>
            <linearGradient id="paint0_linear_34_10168" x1="-6.24402" y1="-26.5394" x2="45.6519" y2="74.5102" gradientUnits="userSpaceOnUse">
            <stop stopColor="#D5AC8D"/>
            <stop offset="0.5" stopColor="#E8C892"/>
            <stop offset="1" stopColor="#D5AC8D"/>
            </linearGradient>
            </defs>
          </svg>

        <h3 className=" text-2xl font-normal my-6">Regalos</h3>
        </div>

        <div className=" rounded bg-white px-6 py-4 flex items-center justify-between text-sm font-normal">
          <h5>Regalo Obligatorio:<br/><strong>¡Tu presencia!</strong></h5>
          <svg className=" inline-block" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M11.6667 5C7.06504 5 3.33337 8.69333 3.33337 13.25C3.33337 16.9283 4.79171 25.6583 19.1467 34.4833C19.4038 34.6398 19.699 34.7225 20 34.7225C20.301 34.7225 20.5962 34.6398 20.8534 34.4833C35.2084 25.6583 36.6667 16.9283 36.6667 13.25C36.6667 8.69333 32.935 5 28.3334 5C23.7317 5 20 10 20 10C20 10 16.2684 5 11.6667 5Z" stroke="#5E5433" strokeWidth="2.42424" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M21.506 15.4832C21.7181 15.2813 22.0003 15.1697 22.2932 15.1719C22.586 15.1741 22.8665 15.29 23.0756 15.4951C23.2846 15.7002 23.4058 15.9785 23.4135 16.2713C23.4212 16.564 23.3149 16.8483 23.1171 17.0642L17.1094 24.5776C17.0061 24.6889 16.8814 24.7781 16.7428 24.8401C16.6042 24.9021 16.4545 24.9355 16.3027 24.9383C16.1509 24.9411 16.0001 24.9133 15.8593 24.8565C15.7185 24.7997 15.5906 24.7151 15.4832 24.6077L11.4992 20.6237C11.3882 20.5203 11.2993 20.3956 11.2375 20.2571C11.1758 20.1186 11.1426 19.969 11.1399 19.8174C11.1373 19.6658 11.1652 19.5152 11.222 19.3745C11.2788 19.2339 11.3633 19.1062 11.4705 18.999C11.5778 18.8917 11.7055 18.8072 11.8461 18.7504C11.9867 18.6936 12.1373 18.6657 12.289 18.6684C12.4406 18.6711 12.5901 18.7043 12.7286 18.766C12.8672 18.8277 12.9918 18.9167 13.0952 19.0276L16.2481 22.179L21.4759 15.5164C21.4852 15.5047 21.4953 15.4937 21.506 15.4832ZM20.1207 23.2225L21.506 24.6077C21.6133 24.7148 21.7411 24.7993 21.8818 24.8559C22.0224 24.9126 22.1731 24.9403 22.3247 24.9375C22.4763 24.9347 22.6258 24.9014 22.7643 24.8396C22.9027 24.7777 23.0273 24.6886 23.1306 24.5776L29.1413 17.0642C29.2493 16.9576 29.3347 16.8304 29.3924 16.69C29.4501 16.5497 29.4789 16.3992 29.4771 16.2474C29.4753 16.0957 29.443 15.9459 29.3821 15.807C29.3211 15.668 29.2328 15.5428 29.1223 15.4387C29.0119 15.3347 28.8817 15.2539 28.7393 15.2013C28.597 15.1488 28.4455 15.1254 28.294 15.1326C28.1424 15.1399 27.9939 15.1776 27.8572 15.2435C27.7206 15.3095 27.5986 15.4023 27.4986 15.5164L22.2694 22.179L21.5391 21.4473L20.1192 23.2225H20.1207Z" fill="#5E5433"/>
          </svg>
        </div>
        <div className=" rounded bg-white px-6 py-4 mt-4">
          <div className=" flex   justify-between text-sm">
            <h5 className=" max-w-[240px] md:max-w-none">Regalo Opcional:<br/><strong>Un pedacito de nuestra Luna de Miel, para hacerlo podes depositar en nuestra cuenta bancaria. </strong></h5>
            <svg className=" inline-block" width="30" height="24" viewBox="0 0 30 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M27.285 0H3C1.35 0 0.015 1.35 0.015 3V9C1.665 9 3 10.35 3 12C3 13.65 1.665 15 0 15V21C0 22.65 1.35 24 3 24H27C28.65 24 30 22.65 30 21V3C30 1.35 28.785 0 27.285 0ZM27 21H3V17.19C4.785 16.155 6 14.205 6 12C6 9.78 4.8 7.845 3.015 6.81L3 3H27V21ZM10.305 17.49L7.815 13.17L9.21 12.795L11.1 14.28L14.685 13.32L11.085 7.08L13.185 6.51L19.2 12.12L22.86 11.145C23.2299 11.0472 23.6235 11.0995 23.955 11.2906C24.2865 11.4816 24.5292 11.7959 24.63 12.165C24.7233 12.5387 24.6674 12.934 24.4742 13.2672C24.281 13.6004 23.9656 13.8453 23.595 13.95L10.305 17.49Z" fill="#5E5433"/>
            </svg>

          </div>
          <Button className="w-full mt-8" onClick={() => setModal(true)}>Ver CBU</Button>
          {modal &&
            <div   className="h-screen w-screen bg-opacity-50 bg-dark fixed top-0 left-0 z-0 flex items-center">

            <div className="m-4 max-w-2xl  mx-auto rounded relative bg-white w-full py-8 px-4 z-10">
            <button onClick={() => setModal(false)} className="absolute right-0 top-0 p-2 bg-dark text-light">Cerrar</button>
              <h3 className="text-lg font-medium mb-8">Copiar CBU o Alias</h3>
                <h4 className=" font-medium">CBU</h4>
                <div className="flex justify-between">
                  <p>0170071840000037582900</p>
                  <CopyToClipboard text="0170071840000037582900">
                    <button  onClick={()=> setCopy(true)}>{copy ? "copiado" : "Copiar"}</button>
                  </CopyToClipboard>
                </div>

                <h4 className=" font-medium mt-8">Alias</h4>
                <div className="flex justify-between">
                <p>CASAMIENTONICOYCARLA</p>
                <CopyToClipboard text="0170071840000037582900">
                    <button  onClick={()=> setCopyAlias(true)}>{copyAlias ? "copiado" : "Copiar"}</button>
                  </CopyToClipboard>
                </div>

            </div>
          </div>
          }


        </div>


      </section>

      <section className="text-center py-[20vh]" id="confirmarpresencia">
        <h3 className="text-3xl font-normal">Confirmar<br/>tu presencia</h3>
        <h4 className="text-xl font-medium mt-12">{nombres} <br/> ¿{personal >= 2 ? "Asistirán" : "Asistirás"} a la fiesta?</h4>
        <div className="flex flex-col text-left font-medium text-xl my-4 px-8">
          <div>
            <div className="form-check py-2 px-4 rounded-full bg-white w-full">
              <input onClick={()=> setConfirmar(true)} className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-primary checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="flexRadioDefault" id="flexRadioDefault1"  defaultChecked/>
              <label className="form-check-label inline-block text-gray-800" htmlFor="flexRadioDefault1">
               Si! {textConfirmar}
              </label>
            </div>
            <div className="form-check py-2 px-4 rounded-full bg-white w-full mt-4">
              <input  onClick={()=> setConfirmar(false)} className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-primary checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
              <label className="form-check-label inline-block text-gray-800" htmlFor="flexRadioDefault2">
                No puedo
              </label>
            </div>
          </div>
        </div>

        <a target="_blank" rel="noreferrer"  href={`https://wa.me/+543854931915?text=${nombres + " (Invitaciones:" + personal + ") "}${confirmar ? " - Confirma su asistencia la fiesta." : "No  podrá asistir a la fiesta."}`}>
        <Button className="mt-2">Enviar respuesta</Button>
        </a>

        <p className="mt-8">Confirmar hasta el 15 de abril.</p>


      </section>

      <section className="py-[20vh]">
        <div className="text-center">
        <svg className=" inline-block" width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M51.7742 20.5271C51.7493 18.6551 51.3989 16.8018 50.7386 15.0499C50.166 13.5722 49.2915 12.2302 48.171 11.1096C47.0504 9.98904 45.7084 9.11453 44.2307 8.54197C42.5013 7.8928 40.6744 7.54178 38.8276 7.50386C36.4498 7.39758 35.696 7.36792 29.6601 7.36792C23.6243 7.36792 22.8506 7.36792 20.4902 7.50386C18.6442 7.54206 16.8181 7.89307 15.0896 8.54197C13.6117 9.11414 12.2694 9.9885 11.1488 11.1091C10.0282 12.2298 9.15381 13.572 8.58164 15.0499C7.93117 16.7779 7.58091 18.6044 7.54601 20.4505C7.43972 22.8307 7.40759 23.5846 7.40759 29.6205C7.40759 35.6563 7.40759 36.4275 7.54601 38.7904C7.58308 40.6392 7.93159 42.4633 8.58164 44.1959C9.15477 45.6734 10.0298 47.0151 11.1508 48.1352C12.2718 49.2554 13.6141 50.1294 15.092 50.7014C16.8159 51.3767 18.6423 51.7528 20.4927 51.8137C22.8729 51.9199 23.6268 51.9521 29.6626 51.9521C35.6984 51.9521 36.4721 51.9521 38.8325 51.8137C40.6793 51.7773 42.5063 51.4271 44.2356 50.778C45.7129 50.2048 47.0546 49.3301 48.1751 48.2096C49.2956 47.0891 50.1703 45.7474 50.7436 44.2701C51.3936 42.5399 51.7421 40.7158 51.7792 38.8645C51.8855 36.4868 51.9176 35.7329 51.9176 29.6946C51.9127 23.6588 51.9127 22.8925 51.7742 20.5271ZM29.6453 41.0347C23.3326 41.0347 18.2187 35.9208 18.2187 29.6081C18.2187 23.2954 23.3326 18.1815 29.6453 18.1815C32.6758 18.1815 35.5822 19.3854 37.7251 21.5283C39.868 23.6712 41.0719 26.5776 41.0719 29.6081C41.0719 32.6386 39.868 35.545 37.7251 37.6879C35.5822 39.8308 32.6758 41.0347 29.6453 41.0347ZM41.5267 20.4233C41.1767 20.4237 40.83 20.355 40.5066 20.2212C40.1832 20.0874 39.8894 19.8911 39.6419 19.6437C39.3944 19.3962 39.1981 19.1023 39.0643 18.7789C38.9306 18.4555 38.8619 18.1089 38.8622 17.7589C38.8622 17.4091 38.9311 17.0628 39.0649 16.7397C39.1988 16.4166 39.3949 16.123 39.6422 15.8757C39.8895 15.6284 40.1831 15.4322 40.5062 15.2984C40.8294 15.1645 41.1757 15.0956 41.5254 15.0956C41.8752 15.0956 42.2215 15.1645 42.5446 15.2984C42.8677 15.4322 43.1613 15.6284 43.4086 15.8757C43.6559 16.123 43.8521 16.4166 43.9859 16.7397C44.1198 17.0628 44.1887 17.4091 44.1887 17.7589C44.1887 19.232 42.9973 20.4233 41.5267 20.4233Z" fill="url(#paint0_linear_69_78)"/>
        <path d="M29.6454 37.0309C33.7447 37.0309 37.0678 33.7078 37.0678 29.6085C37.0678 25.5092 33.7447 22.186 29.6454 22.186C25.546 22.186 22.2229 25.5092 22.2229 29.6085C22.2229 33.7078 25.546 37.0309 29.6454 37.0309Z" fill="url(#paint1_linear_69_78)"/>
        <defs>
        <linearGradient id="paint0_linear_69_78" x1="2.61585" y1="-13.0327" x2="42.5465" y2="64.5893" gradientUnits="userSpaceOnUse">
        <stop stopColor="#D5AC8D"/>
        <stop offset="0.5" stopColor="#E8C892"/>
        <stop offset="1" stopColor="#D5AC8D"/>
        </linearGradient>
        <linearGradient id="paint1_linear_69_78" x1="20.6248" y1="15.3934" x2="33.9073" y2="41.2567" gradientUnits="userSpaceOnUse">
        <stop stopColor="#D5AC8D"/>
        <stop offset="0.5" stopColor="#E8C892"/>
        <stop offset="1" stopColor="#D5AC8D"/>
        </linearGradient>
        </defs>
        </svg>
        <h3 className=" font-normal text-2xl mb-4">Compartimos este día Juntos</h3>
        <p>Compartí tus fotos y vídeos de ese hermoso día en #CarlayNico @nanglade @carlasuarez441</p>
        <div>

            <Logo className=" w-24" />

        </div>


        </div>

      </section>
    </div>
  )
}
