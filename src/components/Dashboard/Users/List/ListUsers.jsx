import { List, Datagrid, TextField , EditButton, TextInput, DeleteButton, BulkDeleteButton, SelectInput } from "react-admin";
import './listUser.css'

const ListUsers = (props) => {

    const userFilters = [
        <TextInput label="Nombres" source="firstName" alwaysOn />,
        <SelectInput label="Tipo" source="userStatus" choices={[
            { id: 'Administrador', name: 'Administrador' },
            { id: 'Colaborador', name: 'Colaborador' },
        ]} />
    ];

    return (
        <section className="containerList">
            <List {...props} exporter={false} filters={userFilters} >
                <Datagrid rowClick="edit" bulkActionButtons={<BulkDeleteButton label="Eliminar" mutationMode="pessimistic" />}>
                    <TextField source="id" />
                    <TextField source="firstName" label="Nombres" />
                    <TextField source="lastName" label="Apellidos" />
                    <TextField source="email" label="Correo electrónico" />
                    <TextField source="telephone" label="Celular" />
                    <TextField source="isBlocked" label="Bloqueado" />
                    <TextField source="userStatus" label="Tipo" />
                    <EditButton label="Editar" />
                    <DeleteButton label="ELIMINAR" mutationMode="pessimistic" />
                    
                </Datagrid>
            </List>
        </section>
    )
}

export default ListUsers