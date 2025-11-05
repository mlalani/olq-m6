'use client';


export default function Com() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      <h1 className="text-3xl font-bold mb-6 text-center">Metaverse Clip</h1>
      <div className="w-full flex justify-center mb-8">
        <iframe 
          style={{ width: '90%', height: '650px' }}
          src="https://www.youtube.com/embed/hlniOe5uQ3Q?si=mJnIZYQeAXTq_WA_" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
      </div>
    </div>
  );
}

