interface HeroContentProps {
  downloadLink?: string;
}

export const HeroContent = ({ 
  downloadLink = "#" 
}: HeroContentProps) => {
  return (
    <div className="pt-8 z-20">
      <div className="pb-10"> 
        <div className="mx-auto max-w-2xl"> 
          
          <div data-ab-test="control" className="text-center">
        
            <div>
              <h1 className="text-balance text-2xl font-bold tracking-tight md:text-4xl">
                <span className="text-black/20">Do</span>
                <span className="tracking-[-0.07em] text-black/20">n</span>
                <span className="tracking-[-0.13em] text-black/20">’</span>
                <span className="text-black/20">t type, </span>
                <span className="text-black">just speak</span>
              </h1>
            </div>
      
            <div className="mx-auto max-w-xs mt-4">
              <p className="text-balance text-[9px] text-gray-600">
                The voice-to-text AI that turns speech into clear, polished writing in every app.
              </p>
          
              <div id="hero-button-group" className="flex flex-col sm:flex-row justify-center items-center mt-4">
                <a 
                  href={downloadLink}
                  data-cta=""
                  data-cta-location="home_hero_section"
                  data-cta-type="download"
                  className="inline-flex items-center gap-2 rounded-xl bg-black px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-neutral-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                  aria-label="Download for Windows"
                >
                  <img 
                    src="https://cdn.prod.website-files.com/682f84b3838c89f8ff7667db/686d4881d944a4b80f7d047e_windows.svg" 
                    alt="" 
                    className="h-5 w-5 invert"
                  />
                  <span>Download for Windows</span>
                </a>
              </div>

              <div className="text-[9px] text-black/70 mt-2">
                Available on Mac, Windows, iPhone, and Android
              </div>
              
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default HeroContent;