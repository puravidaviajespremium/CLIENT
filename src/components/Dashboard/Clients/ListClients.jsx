import { List, Datagrid, TextField} from "react-admin";

const ListClients = (props) => {
    return (
        <List>
            <Datagrid rowClick="edit">
                <TextField source="id" />
                <TextField source="firstName" />
                <TextField source="lastName" />
                <TextField source="email" />
                <TextField source="telephone" />
                <TextField source="countryOrigin" />
                <TextField source="destinationCountry" />
            </Datagrid>
        </List>        
    )
}

export default ListClients;