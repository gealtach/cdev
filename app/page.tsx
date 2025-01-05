import Image from "next/image";
import logo from '@/public/logo100x100.svg';
import photo from '@/public/91261_web-development-lahore.jpg';
import packar from '@/public/packarlogo.jpg';
import cad from '@/public/cad.png';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-items-center bg-blue min-h-screen  pb-20 gap-16 font-[family-name:var(--font-geist-sans)]">
      <div className="flex justify-center border-b p-8 pb-4 w-full">
      <Image
          className="animate-bounce-3"
          src={logo}
          alt="Next.js logo"
          height={150}
          width={150}
          priority
        />
      </div>
      <div className="flex flex-col items-center">
        <div className="m-6">
          <h1 className="text-xl animate-slide-in-left">
          Hi, I'm César Leiva, a Full-Stack Web Developer based in Guimarães, Braga, Portugal. 
          My professional journey spans a diverse range of innovative projects, 
          from sophisticated eCommerce booking platforms to complex logistics and transport applications. 
          I specialize in crafting exceptional digital solutions that blend elegant, intuitive interfaces with robust, 
          secure backend architectures. My passion lies in creating web experiences that are not just visually appealing, 
          but also deliver seamless functionality and optimal user engagement.
          </h1>
        </div>
        <Image
          src={photo}
          alt="pc"
          className="p-4 rounded-full"
          height={300}
          width={500}
          />
      </div>
      <div className="bg-white text-black flex flex-col justify-center items-center w-full p-5">
        <h1 className="text-xl">I'm delighted to have partnered with some remarkable organizations:</h1>
        <div>
          <div>
            <Image
              className=""
              src={packar}
              alt="Packar"
              height={80}
              width={100}
              />
          </div>
          <div>
            <Image
              className=""
              src={cad}
              alt="CloudAndDigital"
              height={80}
              width={100}
              />
          </div>
        </div>
        </div>
    </div>
  );
}
