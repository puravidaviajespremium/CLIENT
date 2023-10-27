import { List, Datagrid, TextField,EditButton, DeleteButton } from "react-admin";


const ListCountries = (props) => {
    return (
        <List {...props} exporter={false}>
            <Datagrid rowClick="edit" >
                <TextField source="id" />
                <TextField source="name" />
                <TextField source="image" />
                <TextField source="continent" />
                <EditButton/>
                <DeleteButton/>
            </Datagrid>
        </List>
        
    )
}

export default ListCountries;