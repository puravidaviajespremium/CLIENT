import { List, Datagrid, TextField,EditButton, DeleteButton } from "react-admin";


const ListCountries = (props) => {
    return (
        <List {...props} exporter={false}>
            <Datagrid rowClick="edit" >
                <TextField source="id"  label="id"/>
                <TextField source="name" label="Nombre"/>
                <TextField source="description" label="Descripción"/>
                <TextField source="experiences" label="Experiencias"/>
                <EditButton/>
                <DeleteButton/>
            </Datagrid>
        </List>
        
    )
}

export default ListCountries;