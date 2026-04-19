import "./EV.css";

export const EventPropagation = () => {
  const handleGrandParentClick = () => {
    console.log("Grand Parent Clicked");
  };

  const handleParentClick = () => {
    console.log("Parent Clicked");
  };

  const handleChildClick = (event) => {
    console.log(event);
    console.log("Child Clicked");
  };

  return (
    // ✅ INSIDE component
    <section className="main-div">
      <div className="g-div" onClick={handleGrandParentClick}>
        <div className="p-div" onClick={handleParentClick}>
          <button className="c-div" onClick={handleChildClick}>
            Click Me
          </button>
        </div>
      </div>
    </section>
  );
};
