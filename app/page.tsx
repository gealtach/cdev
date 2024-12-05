import Image from "next/image";
import logo from '@/public/logo100x100.svg'
import photo from '@/public/91261_web-development-lahore.jpg'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div className="flex justify-center border-b pb-4 w-full animate-bounce-3">
      <Image
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
          className="rounded-full"
          height={300}
          width={500}
          />
      </div>
    </div>
  );
}
