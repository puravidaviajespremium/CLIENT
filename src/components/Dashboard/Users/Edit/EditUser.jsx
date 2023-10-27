import React from "react";
import { Edit, SimpleForm, TextInput, BooleanInput, SelectInput } from "react-admin";

const EditUser = (props) => {
    return (
        <Edit {...props}>
            <SimpleForm>
                <TextInput disabled source="id" />
                <TextInput source="firstName" />
                <TextInput source="lastName" />
                <TextInput source="email" />
                <TextInput source="telephone" />
                <BooleanInput source="isBlocked" />
                <SelectInput 
                source="userStatus" 
                choices={[
                    { id: 'Colaborador', name: 'Colaborador' },
                    { id: 'Administrador', name: 'Administrador' },
                ]} />
            </SimpleForm>
        </Edit>
    )
}

export default EditUser;