import { List, Datagrid, TextField,EditButton, DeleteButton, TextInput, SelectInput } from "react-admin";


const ListCountries = (props) => {

    const countryFilters = [
        <TextInput label="Nombres" source="country" alwaysOn />,
        <SelectInput label="Continente" source="continent" choices={[
            { id: 'America', name: 'America' },
            { id: 'Africa', name: 'Africa' },
            { id: 'Oceania', name: 'Oceania' },
            { id: 'Asia', name: 'Asia' },
            { id: 'Europa', name: 'Europa' },
        ]} />
    ];

    return (
        <List {...props} exporter={false} filters={countryFilters}  >
            <Datagrid rowClick="edit" >
                <TextField source="id"  label="id"/>
                <TextField source="name" label="Nombre"/>
                <TextField source="description" label="Descripción"/>
                <TextField source="experiences" label="Experiencias"/>
                <TextField source="continent" label="Continente"/>
                <EditButton/>
                <DeleteButton/>
            </Datagrid>
        </List>
        
    )
}

export default ListCountries;