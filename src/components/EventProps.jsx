export const EventProps = () => {
  const handleWelcomeUser = (user) => {
    alert(`Hey, ${user}`);
  };

  const handleMouseEnter = (user) => {
    alert(`Mouse entered, ${user}!`);
  };

  return (
    <>
      <WelcomeUser
        onClick={() => handleWelcomeUser("visaj")}
        onMouseEnter={() => handleMouseEnter("visaj")}
      />
    </>
  );
};

const WelcomeUser = (props) => {
  return (
    <>
      <button
        onClick={props.onClick}
        style={{
          padding: "10px 16px",
          backgroundColor: "#007bff",
          color: "#fff",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
          marginRight: "10px",
        }}
      >
        Click Me
      </button>

      <button
        onMouseEnter={props.onMouseEnter}
        style={{
          padding: "10px 16px",
          backgroundColor: "#28a745",
          color: "#fff",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
        }}
      >
        Hover Me
      </button>
    </>
  );
};
