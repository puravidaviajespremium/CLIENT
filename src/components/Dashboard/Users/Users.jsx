import { List, Datagrid, TextField} from "react-admin";

const ListUsers = (props) => {
    return (
        <List>
            <Datagrid rowClick="edit">
                <TextField source="id" />
                <TextField source="name" />
                <TextField source="lastName" />
                <TextField source="email" />
                <TextField source="telephone" />
                <TextField source="isBlocked" />
                <TextField source="userStatus" />
            </Datagrid>
        </List>        
    )
}

export default ListUsers