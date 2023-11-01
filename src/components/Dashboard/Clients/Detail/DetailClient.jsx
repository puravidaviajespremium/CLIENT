import React from "react";
import { Show, SimpleShowLayout, TextField, ReferenceField, ArrayField, DateField, Datagrid } from 'react-admin';
import BackButton from "../../utils/BackButton";

const DetailClient = (props) => {

    const user = JSON.parse(localStorage.getItem("user"));
    const isAdmin = user && user.role === "Administrador";
    const isColl = user && user.role === "Colaborador";   


    return (
        <>

            <Show {...props} className="divDetail">
                <div className="divDetailTop">
                    <h1 className="titleForm">Detalle del Cliente</h1>
                    <BackButton />
                </div>
                <SimpleShowLayout className="containerDetail">
                    <TextField source="id" label='Id' />
                    <TextField source="firstName" label="Nombres" />
                    <TextField source="lastName" label="Apellidos" />
                    <TextField source="countryOrigin" label="Origen" />
                    <TextField source="telephone" label="Celular" />
                    <TextField source="email" label="Correo electrónico" />
                    {isAdmin ? <ReferenceField label="Colaborador" source="UserId" reference="users" basePath="/users" >
                        <TextField source="firstName" />
                    </ReferenceField> : null }
                    <TextField source="membershipStatus" label="Membresía" />
                    <TextField source="contactStatus" label="Estado" />

                    <ArrayField source="HistoryClients" label="Historial del Cliente" reference="clients" basePath="/clients">
                        <Datagrid bulkActionButtons={false} >
                            <DateField source="date" label="Fecha" />
                            <TextField source="comment" label="Comentarios" />
                            <TextField source="destinationCountry" label="Pais de destino" />
                            <TextField source="originMsg" label="Origen del mensaje" />
                            <TextField source="payment" label="Pago" />
                            <TextField source="paymentConcept" label="Concepto del pago" />
                        </Datagrid>
                    </ArrayField>

                </SimpleShowLayout>
            </Show>
        </>

    )
};

export default DetailClient;