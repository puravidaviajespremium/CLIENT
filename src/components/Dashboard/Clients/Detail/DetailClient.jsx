import React from "react";
import { Show, SimpleShowLayout, TextField, ReferenceField } from 'react-admin';

const DetailClient = (props) => {

    return (
        <>
            <Show {...props}>
                <SimpleShowLayout>
                    <TextField source="id" />
                    <TextField source="firstName" label="Nombres" />
                    <TextField source="lastName" label="Apellidos" />
                    <TextField source="email" label="Correo electrónico" />
                    <TextField source="telephone" label="Celular" />
                    <TextField source="countryOrigin" label="Origen" />
                    <TextField source="membershipStatus" label="Membresía" />
                    <TextField source="contactStatus" label="Estado" />
                    {/* <TextField source="UserId" label="Colaborador" /> */}
                    <ReferenceField label="Colaborador"
                        source="UserId" // ID del colaborador en "clients"
                        reference="users" // Desde donde requiero el nombre del colab.
                        basePath="/users" // Ruta para enlaces a la página de detalles del colaborador
                    >
                        <TextField source="firstName" /> {/* Nombre del colaborador dentro de users*/}
                    </ReferenceField>
                </SimpleShowLayout>
            </Show>
        </>

    )
};

export default DetailClient;