export const EventHandling = () => {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-2xl font-bold">Event Handling</h1>
      <button className="btn" onClick={(handleButtonClick)}>
        Click Me
      </button>
    </div>
  );
};


function handleButtonClick() {
  alert("Button clicked!");
}