import { List, Datagrid, TextField, CreateButton, DeleteButton} from "react-admin";
import './listUser.css'

const ListUsers = (props) => {
    return (
        <section className="containerList">
            <div className="actionsList">
                <CreateButton label="Agregar"/>
            </div>
            <List {...props} exporter={false}>
                <Datagrid rowClick="edit">
                    <TextField source="firstName" label="Nombres"/>
                    <TextField source="lastName" label="Apellidos"/>
                    <TextField source="email" label="Correo electrónico"/>
                    <TextField source="telephone"  label="Celular"/>
                    <TextField source="isBlocked" label="Bloqueado"/>
                    <TextField source="userStatus" label="Tipo"/>
                    <DeleteButton label="ELIMINAR" mutationMode="pessimistic"/>
                </Datagrid>
            </List> 
        </section>
    )
}

export default ListUsers