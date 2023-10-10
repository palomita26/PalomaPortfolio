import Image from 'next/image'

export default function Home() {
  return (
    <main className="min-h-screen">
      <header className="flex bg-gray-800 h-12 items-center px-5 justify-between">
          <div>
            <Image alt="paloma" src="/paloma.jpg" width={50} height={50} />
          </div>
          <div>
          <svg width="35px" height="35px" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
<path d="M4 18L20 18" stroke="white" stroke-width="2" stroke-linecap="round"/>
<path d="M4 12L20 12" stroke="white" stroke-width="2" stroke-linecap="round"/>
<path d="M4 6L20 6" stroke="white" stroke-width="2" stroke-linecap="round"/>
</svg>
          </div>
        </header>
      <div className= "font-mono text-sm h-full">
        
        <h1 className= "mx-auto text-3xl w-fit py-10"> 
          {"Paloma Land"}
        </h1>
      </div>
    </main>
  )
}
