import { List, Datagrid, TextField } from "react-admin";


const ListCountries = (props) => {
    return (
        <List {...props}>
            <Datagrid rowClick="edit" >
                <TextField source="id" />
                <TextField source="name" />
                <TextField source="image" />
                <TextField source="continent" />
            </Datagrid>
        </List>
        
    )
}

export default ListCountries;