import { List, Datagrid, TextField, CreateButton, EditButton, TextInput, DeleteButton} from "react-admin";
import './listUser.css'

const ListUsers = (props) => {

    const userFilters = [
        <TextInput label="Nombres" source="firstName" alwaysOn />,
    ];
       
    return (
        <section className="containerList">
            <List {...props} exporter={false} actions={<CreateButton label="Agregar" />} filters={userFilters}  >
                <Datagrid rowClick="edit">
                    <TextField source="firstName" label="Nombres"/>
                    <TextField source="lastName" label="Apellidos"/>
                    <TextField source="email" label="Correo electrónico"/>
                    <TextField source="telephone"  label="Celular"/>
                    <TextField source="isBlocked" label="Bloqueado"/>
                    <TextField source="userStatus" label="Tipo"/>
                    <EditButton label="Editar"/>
                    <DeleteButton label="ELIMINAR" mutationMode="pessimistic"/>
                </Datagrid>
            </List> 
        </section>
    )
}

export default ListUsers