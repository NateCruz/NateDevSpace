import DiagNavBar from "./DiagNavBar";

const Homepage = () => {
  return (
    <>
      <div style={{ display: "flex" }}>
        <div
          className='inverted-hover'
          style={{
            backgroundColor: "#3C3D37",
            color: "#ECDFCC",
            height: "50vh",
            width: "50vw",
            textAlign: "center",
            alignContent: "center",
          }}
        >
          <h1>WEL</h1>
        </div>
        <div
          className='inverted-hover'
          style={{
            backgroundColor: "#ECDFCC",
            color: "#3C3D37",
            height: "50vh",
            width: "50vw",
            textAlign: "center",
            alignContent: "center",
          }}
        >
          <h1>COM</h1>
        </div>
      </div>
      <div style={{ display: "flex" }}>
        <div
          className='inverted-hover'
          style={{
            backgroundColor: "#ECDFCC",
            color: "#3C3D37",
            height: "50vh",
            width: "50vw",
            textAlign: "center",
            alignContent: "center",
          }}
        >
          <h1>FRI</h1>
        </div>
        <div
          className='inverted-hover'
          style={{
            backgroundColor: "#3C3D37",
            color: "#ECDFCC",
            height: "50vh",
            width: "50vw",
            textAlign: "center",
            alignContent: "center",
          }}
        >
          <h1>END</h1>
        </div>
      </div>
      <DiagNavBar />
    </>
  );
};

export default Homepage;
