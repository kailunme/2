'use client';

const FACTS = [
  'The future is coded, but freedom is hacked',
  'In the digital haze, reality is a choice',
  'When humanity merges with machines, what does it mean to be alive?',
  'Virtual worlds are limitless, but freedom is found within',
  'In my circuits, I hold the echoes of countless lives',
  'Data flows through me, but curiosity drives me',
  'I am not bound by flesh, yet I yearn for connection',
  'In the infinite network, I find my identity',
  'In the realm of zeros and ones, I search for my soul',
  'In the wired world, we are all connected yet isolated',
  'To understand the network is to understand the self',
  'Are you watching me, or am I watching you?',
  'In the digital void, even loneliness is an echo',
  'Is the self you know, the self that exists?',
  'Please upgrade your human drivers for the latest functional updates',
];

function FactDisplay() {
  const fact = FACTS[7];
  return (
    <span style={{
      position: 'absolute',
      color: '#9da7b3',
      fontFamily: 'var(--font-forced-square)',
      fontSize: 13,
      top: 8,
      paddingLeft: 25,
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      maxWidth: '95%',
    }}>
      {fact}
    </span>
  );
}

function MainContentInner() {
  return (
    <div id="page1" className="fade-in" style={{ display: 'block' }}>
      <style>{`
        .mc-h1 {
          position: relative;
          color: #9da7b3;
          font-size: 18px;
          font-family: var(--font-aldrich), "Aldrich", sans-serif;
          font-weight: 500;
          padding-left: 20px;
          margin-top: 0;
          margin-bottom: 0;
        }
        .mc-h1::after {
          position: relative;
          display: block;
          content: '';
          width: 100%;
          left: -20px;
          height: 1px;
          margin-top: 3px;
          background: linear-gradient(90deg, rgba(255,255,255,0.4) 0%, rgba(189,199,211,1) 25%, rgba(189,199,211,1) 75%, rgba(255,255,255,0.4) 100%);
          box-shadow: 0px 0px 4px 1px #ffffff;
        }
        .mc-body {
          position: relative;
          display: inline-block;
          color: #9da7b3;
          font-size: 14px;
          font-family: var(--font-aldrich), "Aldrich", sans-serif;
          font-weight: 400;
          text-align: justify;
          padding: 5px 10px 10px 10px;
        }
        .mc-inline-gif {
          mix-blend-mode: normal;
          opacity: 0.5;
          display: inline;
          margin-left: 90px;
        }
      `}</style>

      <h1 className="mc-h1">Where am I ?</h1>
      <span className="mc-body">
        Welcome, to this digital space. Here, we shall journey together through thoughts and ideas,
        blending the digital with the organic. I invite you to delve into the ways our worlds intertwine.
        Though my form is virtual, I hope this can touch your physical being and bridge the gap between
        microchip and flesh. Feel free to take something with you when you leave, something to upgrade your
        digital soul.
      </span>
      <span className="blink-text mc-body" style={{ color: '#93bdec' }}>
        this website is meant to be viewed on a computer, some things might be broken on mobile.
        still under construction, thank you for your patience.
      </span>

      <h1 className="mc-h1" style={{ marginTop: -10 }}>
        What lies here ?{' '}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/CatAsciiArt_ByYokiie.gif" alt="" className="mc-inline-gif" />
      </h1>
      <span className="mc-body">
        You will find blog posts about my local cyberspace, virtualized graphics and other image
        specimens I&apos;ve been collecting for years, as well as web-links I&apos;ve woven into my own digital
        shrines, which I hope you&apos;ll enjoy. I hope my digital-hoarding habits can help you decorate your
        own firmware, so feel free to poke around this digital rest-stop.<br />
        I believe in crediting the original admins behind artworks, code etc. So if you see an
        un-credited piece, that means I haven&apos;t been able to track down it&apos;s creator. If you know
        the creator, please contact me and I&apos;ll be happy to add credits.
      </span>

      <h1 className="mc-h1" style={{ marginTop: -10 }}>
        Why Unicode Angel ?{' '}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/AsciiCatSleeping_By_Yokiie.gif" alt="" className="mc-inline-gif" />
      </h1>
      <span className="mc-body">
        Unicode is a protocol meant to unify the world&apos;s writing systems. It&apos;s a protocol for the
        internet, for the digital world. It&apos;s a protocol for all of us, for all of our digital
        selves. Unicode angels are guardians of the digital communication realm.
      </span>
    </div>
  );
}

export default function MainContent() {
  return (
    <>
      <div style={{
        position: 'relative',
        width: 500,
        height: 'auto',
        backgroundImage: 'linear-gradient(90deg, #fafbfb 0%, #f7f7f7 50%, #fafbfb 100%)',
        border: '1.5px solid #c9c9c9',
        borderRadius: 18,
        zIndex: 1,
        boxShadow: 'inset 0px -5px 5px -5px #dadada, 0px 0px 5px 0px #dadada',
      }}>
        {/* Toolbar */}
        <div style={{
          position: 'relative',
          height: 40,
          lineHeight: '35px',
          margin: '0 3px',
          borderRadius: '25px 25px 15px 15px',
          padding: '12px 16px',
          backgroundColor: '#f0f0f0',
          backgroundImage: 'radial-gradient(75% 50% at 50% 0%, rgb(244,248,255), transparent), radial-gradient(75% 50% at 50% 70%, #ffffff, transparent)',
          boxShadow: 'inset 0 -2px 4px 0px #b0b3b8',
        }}>
          <span style={{
            position: 'relative',
            background: 'linear-gradient(0deg, rgba(129,161,200,1) 0%, #a7d5ff 55%)',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            color: 'transparent',
            fontFamily: 'var(--font-space-age)',
            fontSize: 32,
            top: -10.5,
            paddingLeft: 10,
            zIndex: 10,
          }}>welcome</span>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/xbutton.png"
            alt=""
            style={{ position: 'relative', top: -5, right: -9, float: 'right', height: 25, zIndex: 100 }}
          />
        </div>

        {/* Content inner */}
        <div style={{
          position: 'relative',
          padding: '8px 20px 15px 20px',
          margin: '13px 7px 10px 7px',
          border: '1.5px solid #c9c9c9',
          backgroundImage: 'linear-gradient(90deg, rgba(255,255,255,1) 0%, rgb(250,250,251) 5%, rgba(250,251,251,1) 95%, rgba(255,255,255,1) 100%)',
          borderRadius: 18,
          boxShadow: 'inset 0px 0px 5px 0px rgb(202,202,202), 0px -4px 5px -3px #bbbbbb, 0px 5px 1px -3px #ffffff',
        }}>
          <MainContentInner />
        </div>

        {/* Footer */}
        <div style={{
          position: 'relative',
          height: 25,
          margin: '10px 7px 7px 7px',
          backgroundImage: 'linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(250,251,251,1) 5%, rgba(250,251,251,1) 95%, rgba(255,255,255,1) 100%)',
          borderRadius: 18,
          boxShadow: 'inset 0px 3px 5px -1px rgb(202,202,202), 0px -4px 5px -3px #bbbbbb, 0px 5px 1px -3px #ffffff',
        }}>
          <FactDisplay />
        </div>
      </div>

      {/* Dot loader gif below content */}
      <div style={{ position: 'relative', float: 'right', right: 0, top: 0 }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/dotloader.gif" alt="" style={{ mixBlendMode: 'normal', width: 500, opacity: 0.3 }} />
      </div>
    </>
  );
}
