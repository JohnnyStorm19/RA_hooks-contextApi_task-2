import { IUser } from "../models";

const Item = ({ user }: { user: IUser }) => {
  return (
    <div className="user-card"> 
      <h2>{user.name}</h2>
      <details>
        <summary>User info</summary>
        <p><strong>City: </strong>{user.address?.city}</p>
        <p><strong>Street: </strong>{user.address?.street}</p>
        <p><strong>Phone: </strong>{user.phone}</p>
        <p><strong>Email: </strong>{user.email}</p>
        <p><strong>Company: </strong>{user.company.name}</p>
      </details>
    </div>
  );
};

export default Item;
