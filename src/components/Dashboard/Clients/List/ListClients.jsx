import { List, Datagrid, TextField, CreateButton,EditButton, DeleteButton, BulkDeleteButton} from "react-admin";

const ListClients = (props) => {

    return (
        <List {...props} exporter={false} actions={<CreateButton label="Agregar" />} >
            <Datagrid rowClick="edit" bulkActionButtons={<BulkDeleteButton label="Eliminar" mutationMode="pessimistic" />} >
                <TextField source="id" />
                <TextField source="firstName" label="Nombres"/>
                <TextField source="lastName" label="Apellidos"/>
                <TextField source="email" label="Correo electrónico"/>
                <TextField source="telephone" label="Celular"/>
                <TextField source="countryOrigin" label="Origen"/>
                <TextField source="membershipStatus" label="Membresía"/>
                <TextField source="contactStatus" label="Estado"/>
                <TextField source="UserId" label="Colaborador"/>
                <EditButton/>
                <DeleteButton label="Eliminar" mutationMode="pessimistic" />
            </Datagrid>
        </List>        
    )
}

export default ListClients;