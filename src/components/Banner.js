
export function Banner() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-background">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 z-0 h-full w-full object-cover"
      >
        <source
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260314_131748_f2ca2a28-fed7-44c8-b9a9-bd9acdd5ec31.mp4"
          type="video/mp4"
        />
      </video>

      <main className="relative z-10 mx-auto flex min-h-[calc(100vh-100px)] flex-col items-center justify-center px-6 pb-40 pt-32 text-center">
        <h1
          className="animate-fade-rise max-w-7xl text-5xl font-normal leading-[0.95] tracking-[-2.46px] text-foreground sm:text-7xl md:text-8xl"
          style={{ fontFamily: "'Instrument Serif', serif" }}
        >
          Architecting <em className="not-italic text-muted-foreground">intelligence</em> <br className="hidden md:block" />
          into every <em className="not-italic text-muted-foreground">pixel and pulse.</em>
        </h1>

        <p className="animate-fade-rise-delay mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          Full Stack Engineer and AI enthusiast dedicated to building resilient digital ecosystems.
          From scalable web architectures to IoT integration, I transform complex logic into
          seamless human experiences.
        </p>

      </main>
    </div>
  );
}