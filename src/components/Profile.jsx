function Profile() {
  return (
    <div>
      <h1>Profile Card Challenge</h1>

      <ProfileCard
        name="John Doe"
        age={30}
        greeting={
          <div>
            <strong>Have a good day</strong>
          </div>
        }
      >
        <p>Hobbies: Reading, Traveling, Coding</p>
        <button>Contact</button>
      </ProfileCard>
    </div>
  );
}

export default Profile;

function ProfileCard({ name, age, greeting, children }) {
  return (
    <>
      <h2>Name : {name} </h2>
      <p>Age : {age}</p>
      <p>{greeting}</p>
      <div>{children}</div>
    </>
  );
}
