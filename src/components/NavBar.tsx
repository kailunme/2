"use client";

const navLinks = [
  { label: "HOME", href: "/" },
  { label: "INFO", href: "/info" },
  { label: "BLOG", href: "/blog" },
  { label: "LINKS", href: "/links" },
  { label: "CACHE", href: "/cache" },
];

export function NavBar() {
  return (
    <>
      <style>{`
        @keyframes rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .navbar-nav-td {
          height: 10px;
          border-top: 10px solid transparent;
          font-family: var(--font-forced-square), "Forced Square", sans-serif;
          font-size: 20px;
          padding-right: 5px;
          padding-top: 1px;
          padding-left: 1px;
          padding-bottom: 1px;
          text-align: right;
          vertical-align: middle;
          background-image: url('/images/navcircle.png');
          background-repeat: no-repeat;
          background-position-x: 11px;
          background-position-y: 4px;
          background-size: 13px;
          image-rendering: pixelated;
          position: relative;
        }

        .navbar-nav-td:hover {
          background-image: url('/images/navcircleblue.png');
          background-size: 13px;
          image-rendering: crisp-edges;
        }

        .navbar-nav-td::before {
          position: absolute;
          content: '';
          width: 125px;
          height: 1px;
          background: linear-gradient(
            90deg,
            rgba(255, 255, 255, 0.4) 0%,
            rgba(189, 199, 211, 1) 25%,
            rgba(189, 199, 211, 1) 75%,
            rgba(255, 255, 255, 0.4) 100%
          );
          box-shadow: 0px 0px 4px 1px #ffffff;
          top: 0;
          left: 0;
        }

        .navbar-nav-td-empty {
          background-image: none !important;
        }

        .navbar-nav-a {
          position: relative;
          font-family: var(--font-forced-square), "Forced Square", sans-serif;
          color: #9da7b3;
          text-decoration: none;
          text-align: right;
          display: block;
          margin-top: -5px;
          margin-bottom: -5px;
          padding-top: 5px;
          padding-bottom: 5px;
        }

        .navbar-nav-a:hover {
          color: #81a1c8;
        }
      `}</style>

      <div
        style={{
          height: "300px",
          backgroundImage: "url('/images/NavTest.png')",
          backgroundSize: "200px",
          backgroundRepeat: "no-repeat",
          color: "white",
          fontFamily: "Verdana, sans-serif",
          position: "relative",
        }}
        className="navbar"
      >
        {/* Spinning loader circle */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          id="loadercircle"
          src="/images/loadercircle.png"
          alt=""
          style={{
            position: "absolute",
            height: "25px",
            marginTop: "12px",
            marginLeft: "12px",
            imageRendering: "crisp-edges",
            animation: "rotate 1.3s linear infinite",
          }}
        />

        {/* "nAVI" title */}
        <div
          style={{
            marginTop: "13px",
            lineHeight: "40px",
            paddingLeft: "55px",
            fontFamily: 'var(--font-space-age), "Space Age", sans-serif',
            background:
              "linear-gradient(0deg, rgba(129,161,200,1) 0%, rgba(167,213,255,1) 55%)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
            fontSize: "42px",
            letterSpacing: "3px",
            display: "inline-block",
            transform: "scaleY(0.8)",
            WebkitTransform: "scale(1, 0.8)",
          }}
        >
          nAVI
        </div>

        {/* "anget0" subtitle */}
        <div
          style={{
            marginTop: "-6px",
            paddingLeft: "54px",
            lineHeight: "30px",
            fontFamily: 'var(--font-braille), "Braille", sans-serif',
            color: "#c9cfd6",
            fontSize: "24px",
            letterSpacing: "1px",
          }}
        >
          ange<span style={{ letterSpacing: "3px" }}>t0</span>
        </div>

        {/* Nav links table */}
        <table
          style={{
            marginLeft: "50px",
            marginTop: "1px",
            width: "125px",
            borderCollapse: "collapse",
            lineHeight: "20px",
          }}
        >
          <tbody>
            {navLinks.map((link) => (
              <tr key={link.label}>
                <td className="navbar-nav-td">
                  <a href={link.href} className="navbar-nav-a">
                    {link.label}
                  </a>
                </td>
              </tr>
            ))}
            {/* Empty last row — no bullet */}
            <tr>
              <td className="navbar-nav-td navbar-nav-td-empty" />
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
