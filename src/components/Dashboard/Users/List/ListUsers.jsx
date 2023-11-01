import { List, Datagrid, TextField , EditButton, TextInput, DeleteButton, BulkDeleteButton, SelectInput } from "react-admin";

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
            <h2>Lista de Usuarios</h2>
            <List {...props} exporter={false} filters={userFilters} >
                <Datagrid className="myList" rowClick="edit" bulkActionButtons={<BulkDeleteButton label="Eliminar" mutationMode="pessimistic" />}>
                    <TextField source="id" />
                    <TextField source="firstName" label="Nombres" />
                    <TextField source="lastName" label="Apellidos" />
                    <TextField source="email" label="Correo electrónico" />
                    <TextField source="telephone" label="Celular" />
                    <TextField source="isBlocked" label="Bloqueado" />
                    <TextField source="userStatus" label="Tipo" />
                    <EditButton label="Editar" />
                    <DeleteButton label="Eliminar" mutationMode="pessimistic" />
                </Datagrid>
            </List>
        </section>
    )
}

export default ListUsers