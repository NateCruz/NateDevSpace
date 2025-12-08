import { useState } from "react";

const VerticalStringLights = () => {
  const [activeLight, setActiveLight] = useState(null);

  const handleLightClick = (lightId) => {
    setActiveLight(activeLight === lightId ? null : lightId);
    console.log("Light clicked:", lightId);
    // Add navigation logic here
  };

  return (
    <div className='w-full max-w-md mx-auto p-8 bg-slate-900 min-h-screen'>
      <h2 className='text-white text-2xl mb-6 text-center'>My Projects</h2>

      <svg
        width='100%'
        height='100%'
        viewBox='0 0 300 2000'
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
        {/* Wire - always visible */}
        <g id='lightString'>
          <path
            id='Wire'
            d='M158.629,-0C154.535,416.946 267.8,664.255 149.582,844.411C44.477,1004.58 10.891,1152.8 141.62,1362.37C231.014,1505.68 342.896,1765.66 143.863,1960.47'
            style={{ fill: "none", stroke: "#333", strokeWidth: "8.33px" }}
          />

          {/* Base 1 */}
          <path
            id='Base'
            d='M176.209,473.008L140.68,477.193C130.876,478.347 121.978,471.325 120.824,461.52L115.677,417.817C114.522,408.013 121.545,399.115 131.349,397.961L166.878,393.776C176.683,392.622 185.58,399.644 186.735,409.449L191.882,453.152C193.036,462.956 186.014,471.854 176.209,473.008Z'
            fill='#2c3e50'
          />

          {/* Base 2 */}
          <path
            d='M81.744,1028.98L117.264,1033.25C127.066,1034.42 134.069,1043.33 132.894,1053.13L127.653,1096.83C126.478,1106.63 117.565,1113.63 107.763,1112.46L72.243,1108.2C62.441,1107.02 55.438,1098.11 56.614,1088.31L61.854,1044.61C63.03,1034.81 71.942,1027.81 81.744,1028.98Z'
            fill='#2c3e50'
          />

          {/* Base 3 */}
          <path
            d='M236.883,1685.31L201.386,1689.75C191.59,1690.98 182.642,1684.02 181.417,1674.22L175.955,1630.56C174.73,1620.76 181.688,1611.82 191.484,1610.59L226.982,1606.15C236.778,1604.92 245.726,1611.88 246.951,1621.68L252.412,1665.34C253.638,1675.14 246.679,1684.09 236.883,1685.31Z'
            fill='#2c3e50'
          />
        </g>

        {/* Light 1 - Yellow */}
        <g
          onClick={() => handleLightClick("light1")}
          onMouseEnter={() => setActiveLight("light1")}
          onMouseLeave={() => setActiveLight(null)}
          className='cursor-pointer transition-all'
        >
          <path
            d='M68.891,387.355C101.627,387.485 128.099,414.168 127.969,446.904C127.839,479.64 101.156,506.112 68.42,505.982C35.684,505.852 9.212,479.168 9.342,446.432C9.472,413.696 36.155,387.225 68.891,387.355Z'
            fill={activeLight === "light1" ? "rgb(251,255,0)" : "none"}
            stroke='black'
            strokeWidth='2'
            style={{
              filter:
                activeLight === "light1"
                  ? "drop-shadow(0 0 20px rgb(251,255,0))"
                  : "none",
              transition: "all 0.3s ease",
            }}
          />
        </g>

        {/* Light 2 - Yellow */}
        <g
          onClick={() => handleLightClick("light2")}
          onMouseEnter={() => setActiveLight("light2")}
          onMouseLeave={() => setActiveLight(null)}
          className='cursor-pointer transition-all'
        >
          <circle
            cx='179.638'
            cy='1077.13'
            r='59.314'
            fill={activeLight === "light2" ? "rgb(251,255,0)" : "none"}
            stroke='black'
            strokeWidth='2'
            style={{
              filter:
                activeLight === "light2"
                  ? "drop-shadow(0 0 20px rgb(251,255,0))"
                  : "none",
              transition: "all 0.3s ease",
            }}
          />
        </g>

        {/* Light 3 - Yellow */}
        <g
          onClick={() => handleLightClick("light3")}
          onMouseEnter={() => setActiveLight("light3")}
          onMouseLeave={() => setActiveLight(null)}
          className='cursor-pointer transition-all'
        >
          <circle
            cx='132.725'
            cy='1656.48'
            r='59.314'
            fill={activeLight === "light3" ? "rgb(251,255,0)" : "none"}
            stroke='black'
            strokeWidth='2'
            style={{
              filter:
                activeLight === "light3"
                  ? "drop-shadow(0 0 20px rgb(251,255,0))"
                  : "none",
              transition: "all 0.3s ease",
            }}
          />
        </g>
      </svg>

      {/* Active light info */}
      <div className='mt-8 text-center'>
        {activeLight && (
          <div className='text-white bg-slate-800 p-4 rounded-lg'>
            <h3 className='text-xl font-semibold mb-2'>
              {activeLight === "light1" && "💡 Project Alpha"}
              {activeLight === "light2" && "💡 Project Beta"}
              {activeLight === "light3" && "💡 Project Gamma"}
            </h3>
            <p className='text-slate-400 text-sm'>Click to view details</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default VerticalStringLights;
