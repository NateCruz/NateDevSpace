import { useState } from "react";

const ChristmasLights = () => {
  const [activeLight, setActiveLight] = useState(null);

  const lights = [
    {
      id: "blue",
      offId: "bulbBlueOff",
      onId: "bulbBlueOn",
      baseId: "Base",
      link: "/project1",
    },
    {
      id: "red",
      offId: "bulbRedOff",
      onId: "bulbRedOn",
      baseId: "Base1",
      link: "/project2",
    },
    {
      id: "green",
      offId: "bulbGreenOff",
      onId: "bulbGreenOn",
      baseId: "Base2",
      link: "/project3",
    },
  ];

  const handleClick = (lightId, link) => {
    setActiveLight(lightId);
    // In a real app, navigate to the link
    console.log("Navigating to:", link);
    // For React Router: navigate(link);
  };

  return (
    <div className='w-full max-w-7xl mx-auto p-8 bg-slate-900'>
      <h2 className='text-white text-2xl mb-4 text-center'>My Projects</h2>
      <p className='text-slate-400 text-center mb-6'>nathanThomasCruz_IP</p>

      <svg
        width='100%'
        height='100%'
        viewBox='0 0 2000 300'
        version='1.1'
        xmlns='http://www.w3.org/2000/svg'
        xmlnsXlink='http://www.w3.org/1999/xlink'
        xmlSpace='preserve'
        className='drop-shadow-lg'
        style={{
          fillRule: "evenodd",
          clipRule: "evenodd",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeMiterlimit: 1.5,
        }}
      >
        <g id='lightString'>
          <path
            id='Wire'
            d='M39.531,157.706C432.576,120.927 690.406,32.102 866.899,150.373C1023.81,255.524 1169.03,289.153 1374.42,158.485C1514.87,69.132 1769.64,-42.674 1960.47,156.415'
            style={{ fill: "none", stroke: "#333", strokeWidth: "8.33px" }}
          />

          {/* Blue Light */}
          <g
            onClick={() => handleClick("blue", lights[0].link)}
            onMouseEnter={() => setActiveLight("blue")}
            onMouseLeave={() => setActiveLight(null)}
            className='cursor-pointer transition-all'
          >
            <path
              id='Base'
              d='M523.384,118.154L527.36,153.707C528.457,163.518 521.382,172.374 511.571,173.471L467.839,178.362C458.028,179.459 449.172,172.385 448.075,162.574L444.098,127.021C443.001,117.21 450.076,108.354 459.887,107.256L503.619,102.365C513.43,101.268 522.286,108.343 523.384,118.154Z'
            />
            <path
              d='M519.483,171.483L461.497,177.968C459.463,186.383 458.942,195.73 459.986,205.068C463.27,234.428 480.937,256.587 499.414,254.521C517.891,252.455 530.226,226.94 526.943,197.58C525.898,188.242 523.325,179.241 519.483,171.483Z'
              style={{
                fill: activeLight === "blue" ? "rgb(0,76,255)" : "none",
                stroke: "black",
                strokeWidth: "1.04px",
                filter:
                  activeLight === "blue"
                    ? "drop-shadow(0 0 20px rgb(0,76,255))"
                    : "none",
              }}
            />
          </g>

          {/* Red Light */}
          <g
            onClick={() => handleClick("red", lights[1].link)}
            onMouseEnter={() => setActiveLight("red")}
            onMouseLeave={() => setActiveLight(null)}
            className='cursor-pointer transition-all'
          >
            <path d='M1045.67,218.767L1049.94,183.248C1051.12,173.447 1060.04,166.446 1069.84,167.624L1113.53,172.878C1123.33,174.056 1130.33,182.971 1129.15,192.772L1124.88,228.291C1123.7,238.092 1114.79,245.093 1104.99,243.915L1061.3,238.662C1051.5,237.483 1044.5,228.569 1045.67,218.767Z' />
            <path
              d='M1061.68,167.748L1119.61,174.713C1123.52,166.987 1126.17,158.008 1127.29,148.679C1130.82,119.347 1118.69,93.731 1100.23,91.512C1081.78,89.292 1063.92,111.304 1060.4,140.636C1059.28,149.965 1059.72,159.316 1061.68,167.748Z'
              style={{
                fill: activeLight === "red" ? "rgb(255,0,55)" : "none",
                stroke: "black",
                strokeWidth: "1.04px",
                filter:
                  activeLight === "red"
                    ? "drop-shadow(0 0 20px rgb(255,0,55))"
                    : "none",
              }}
            />
          </g>

          {/* Green Light */}
          <g
            onClick={() => handleClick("green", lights[2].link)}
            onMouseEnter={() => setActiveLight("green")}
            onMouseLeave={() => setActiveLight(null)}
            className='cursor-pointer transition-all'
          >
            <path d='M1696.99,63.923L1700.97,99.476C1702.06,109.287 1694.99,118.143 1685.18,119.241L1641.45,124.132C1631.63,125.229 1622.78,118.154 1621.68,108.343L1617.71,72.79C1616.61,62.979 1623.68,54.123 1633.49,53.026L1677.23,48.135C1687.04,47.038 1695.89,54.112 1696.99,63.923Z' />
            <path
              d='M1693.09,117.253L1635.1,123.738C1633.07,132.153 1632.55,141.5 1633.59,150.838C1636.88,180.198 1654.54,202.357 1673.02,200.291C1691.5,198.224 1703.83,172.71 1700.55,143.35C1699.51,134.012 1696.93,125.011 1693.09,117.253Z'
              style={{
                fill: activeLight === "green" ? "rgb(25,195,0)" : "none",
                stroke: "black",
                strokeWidth: "1.04px",
                filter:
                  activeLight === "green"
                    ? "drop-shadow(0 0 20px rgb(25,195,0))"
                    : "none",
              }}
            />
          </g>
        </g>
      </svg>

      {/* Project info display */}
      <div className='mt-8 text-center min-h-24'>
        {activeLight && (
          <div className='text-white'>
            <h3 className='text-xl font-semibold mb-2'>
              {activeLight === "blue" && "Project 1: Blue App"}
              {activeLight === "red" && "Project 2: Red App"}
              {activeLight === "green" && "Project 3: Green App"}
            </h3>
            <p className='text-slate-400'>Click to view details</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ChristmasLights;
