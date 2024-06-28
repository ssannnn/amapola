import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-72">
      <div className="text-4xl text-orange-500"> 
         <p>Proximamente...</p>
      </div>

      <div>
        <Image
          src="/assets/logo/logo_expanded.svg"        
          alt="espacio amapola logo"
          width={720}
          height={148}
          priority
        />
      </div>
      
    </main>
  );
}
