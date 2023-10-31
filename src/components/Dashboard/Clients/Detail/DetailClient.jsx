import React from "react";
import { Show, SimpleShowLayout, TextField, ReferenceField, ArrayField,  DateField, Datagrid } from 'react-admin';

const DetailClient = (props) => {

    return (
        <>

            <Show {...props} >
                <h1 className='titleForm'>Detalle del Cliente</h1>
                <SimpleShowLayout className="detailInfo">
                        <TextField source="id" label='Id' className='inputContent' />
                        <TextField source="firstName" label="Nombres" className='inputContent' />
                        <TextField source="lastName" label="Apellidos" className='inputContent' />
                        <TextField source="countryOrigin" label="Origen" className='inputContent' />
                        <TextField source="email" label="Correo electrónico" className='inputContent' />
                        <TextField source="telephone" label="Celular" className='inputContent' />
                        <ReferenceField label="Colaborador" source="UserId" reference="users" basePath="/users" className='inputContent'>
                            <TextField source="firstName" className='inputContent' />
                        </ReferenceField>
                        <TextField source="membershipStatus" label="Membresía" className='inputContent'/>
                        <TextField source="contactStatus" label="Estado" className='inputContent' />
                        
                        <div className="historialCliente">
                            <h2>Historial: </h2>
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