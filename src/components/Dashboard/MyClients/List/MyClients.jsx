import React from "react";
import { List, Datagrid, TextField, TextInput, SelectInput, EditButton, DeleteButton, BulkDeleteButton } from "react-admin";
import { FunctionField } from 'react-admin';
import { renderStatus, renderMember } from '../../Clients/List/renderFunctions';


const ListMyClients = (props) => {
    const clientFilters = [
        <TextInput label="Nombres" source="firstName" alwaysOn />,       
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

    const user = JSON.parse(localStorage.getItem("user"));
    const isAdmin = user && user.role === "Administrador";
    const isColl = user && user.role === "Colaborador";    

    const filter = isColl ? { UserId: user.id } : {};

    return (
        <section className="containerList">
            <h2>Mis Clientes</h2>
            <List {...props} exporter={false} filters={clientFilters} filter={filter}>
                <Datagrid className="myList" rowClick="show" bulkActionButtons={isAdmin ? (<BulkDeleteButton label="Eliminar " mutationMode="pessimistic" />) : null}>
                    <TextField source="id" />
                    <TextField source="firstName" label="Nombres" />
                    <TextField source="lastName" label="Apellidos" />
                    <TextField source="email" label="Correo electrónico" />
                    <FunctionField label="Estado" render={renderStatus} />
                    <FunctionField label="Membresía" render={renderMember} />
                    <EditButton label="Editar" />
                    {isAdmin ? <DeleteButton label="Eliminar" mutationMode="pessimistic" /> : null}
                </Datagrid>
            </List>
        </section>
    );
}

export default ListMyClients;
