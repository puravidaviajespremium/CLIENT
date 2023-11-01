import React from "react";
import {Show, SimpleShowLayout, TextField, ReferenceField, ArrayField,  DateField, Datagrid } from 'react-admin';

const DetailClient = (props) => {

    return (
        <>

            <Show {...props} >
                <SimpleShowLayout className="containerDetail">
                <h1 className='titleForm'>Detalle del Cliente</h1>
                    <div className="containerInfo" >
                        <p>Id:</p>
                        <TextField source="id" label='Id' />
                        <p>Nombre:</p>
                        <TextField source="firstName" label="Nombres"  />
                        <p>Apellido:</p>
                        <TextField source="lastName" label="Apellidos"  />
                        <p>Pais de orígen:</p>
                        <TextField source="countryOrigin" label="Origen"  />
                    </div>
                    <div className="containerInfo" >
                        <p>Telefono:</p>
                        <TextField source="telephone" label="Celular"  />
                        <p>Correo Electrónico:</p>
                        <TextField source="email" label="Correo electrónico"  />
                        <p>Colaborador:</p>
                        <ReferenceField label="Colaborador" source="UserId" reference="users" basePath="/users" >
                            <TextField source="firstName"  />
                        </ReferenceField>
                    </div>
                    <div className="containerInfo" >
                        <p className="etiqueta">Membresia:</p>
                        <TextField source="membershipStatus" label="Membresía" />
                        <p className="etiqueta">Estado:</p>
                        <TextField source="contactStatus" label="Estado" />
                    </div>
                            <h2>Historial: </h2>
                            <div className="historialCliente">
                                <ArrayField source="HistoryClients" label="Historial del Cliente" reference="clients" basePath="/clients">
                                    <Datagrid bulkActionButtons={false} >
                                        <DateField source="date" label="Fecha"/> 
                                        <TextField source="comment" label="Comentarios" /> 
                                        <TextField source="destinationCountry" label="Pais de destino" /> 
                                        <TextField source="originMsg" label="Origen del mensaje" /> 
                                        <TextField source="payment" label="Pago"/> 
                                        <TextField source="paymentConcept" label="Concepto del pago" /> 
                                    </Datagrid>
                                </ArrayField>
                            </div>
                </SimpleShowLayout>
            </Show>
        </>

    )
};

export default DetailClient;