import { List, Datagrid, TextField,EditButton,DeleteButton,  BulkDeleteButton, TextInput, SelectInput } from "react-admin";


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
        <section className="containerList">
            <h2>Lista de Países</h2>
            <List {...props} exporter={false} filters={countryFilters}  >
                <Datagrid className="myList" rowClick="edit" bulkActionButtons={<BulkDeleteButton label="Eliminar" mutationMode="pessimistic" />}>
                    <TextField source="id"  label="id"/>
                    <TextField source="name" label="Nombre"/>
                    <TextField source="description" label="Descripción"/>
                    <TextField source="experiences" label="Experiencias"/>
                    <TextField source="continent" label="Continente"/>
                    <EditButton label="Editar"/>
                    <DeleteButton label="Eliminar" mutationMode="pessimistic" />
                </Datagrid>
            </List>
        </section>
        
    )
}

export default ListCountries;