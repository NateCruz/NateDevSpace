import DiagNavBar from "./DiagNavBar";
import { Button, Popover, PopoverHeader, PopoverBody } from "reactstrap";
import { useState } from "react";

const Homepage = () => {
  const [popoverOpen, setPopoverOpen] = useState(false);

  const togglePopover = () => setPopoverOpen(!popoverOpen);

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
      <div>
        <Button id='Popover1' type='button' onClick={togglePopover}>
          Launch Popover
        </Button>
        <Popover
          isOpen={popoverOpen}
          flip
          target='Popover1'
          toggle={togglePopover}
        >
          <PopoverHeader>Popover Title</PopoverHeader>
          <PopoverBody>
            Sed posuere consectetur est at lobortis. Aenean eu leo quam.
            Pellentesque ornare sem lacinia quam venenatis vestibulum.
          </PopoverBody>
        </Popover>
      </div>
    </>
  );
};

export default Homepage;
