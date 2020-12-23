import "./Employee.css";

function Employee({ name, email, phone, skills, profilePicture }) {
  return (
    <div className="Employee">
      <img className="profilePicture" alt="profilePicture" src={profilePicture} />
      <ul>
        <h2>{name}</h2>
        <p>
          <strong>email: </strong>
          {email}
        </p>
        <p>
          <strong>phone: </strong>
          {phone}
        </p>
        <p>
          <strong>skills: </strong>
          {skills}
        </p>
      </ul>
    </div>
  );
}

export default Employee;
