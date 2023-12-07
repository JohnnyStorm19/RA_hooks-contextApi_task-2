import { IUser } from "../models"
import Item from "./Item"

const List = ({users=[]}: {users: IUser[]}) => {
  return (
    <div className="list">
        {
            users.map((user) => {
                return <Item key={user.id} user={user} />
            })
        }
    </div>
  )
}

export default List
