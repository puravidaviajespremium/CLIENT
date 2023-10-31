import { List, Datagrid, TextField,TextInput,SelectInput,EditButton, DeleteButton, BulkDeleteButton, ReferenceField, ReferenceInput} from "react-admin";

const ListClients = (props) => {

    const clientFilters = [
        <TextInput label="Nombres" source="firstName" alwaysOn />,
        <ReferenceInput
            label="Colaborador"
            source="UserId"
            reference="users"
            basePath="/users"
            allowEmpty
        >
            <SelectInput label="Colaborador" optionText="firstName" />
        </ReferenceInput>,
        
        <SelectInput label="Membresía" source="membershipStatus" choices={[
            { id: 'Plata', name: 'Plata' },
            { id: 'Dorado', name: 'Dorado' },
            { id: 'Diamante', name: 'Diamante' },
        ]} />,
        <SelectInput label="Estado" source="contactStatus" choices={[
            { id: 'Prospecto', name: 'Prospecto' },
            { id: 'Contactado', name: 'Contactado' },
            { id: 'En espera', name: 'En espera' },
            { id: 'Ganado', name: 'Ganado' },
            { id: 'Perdido', name: 'Perdido' },
        ]} />
    ];

    return (  
        <section className="containerList">
            <h2>Lista de Clientes</h2>
            <List {...props} exporter={false} filters={clientFilters}>
                <Datagrid className="myList" rowClick="show" bulkActionButtons={<BulkDeleteButton label="Eliminar" mutationMode="pessimistic" />} >
                    <TextField source="id" />
                    <TextField source="firstName" label="Nombres" />
                    <TextField source="lastName" label="Apellidos"/>
                    <TextField source="email" label="Correo electrónico"/>
                    <TextField source="countryOrigin" label="Origen"/>
                    <TextField source="membershipStatus" label="Membresía"/>
                    <TextField source="contactStatus" label="Estado"/>
                    <ReferenceField label="Colaborador"
                        source="UserId" // ID del colaborador en "clients"
                        reference="users" // Desde donde requiero el nombre del colab.
                        basePath="/users" // Ruta para enlaces a la página de detalles del colaborador
                    >
                        <TextField source="firstName" /> {/* Nombre del colaborador dentro de users*/}
                    </ReferenceField>
                    <EditButton label="Editar"/>
                    <DeleteButton label="Eliminar" mutationMode="pessimistic" />
                </Datagrid>
            </List>        
        </section>
    )
}

export default ListClients;