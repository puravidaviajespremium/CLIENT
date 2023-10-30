import { Edit, SimpleForm, TextInput, SelectInput, ArrayInput, SimpleFormIterator, SaveButton } from 'react-admin';
import validateEditCountry from './validateEditCountry';

const EditCountry = (props) => {
    return (
        <Edit {...props} className='createContainer'>
            <SimpleForm toolbar={false} validate={validateEditCountry} >
                <h1 className='titleForm'>Editar País</h1>
                <TextInput disabled source="id" label="ID" />
                <div className='containerInputs'>
                    <TextInput source="name" label="Nombre" />
                    <TextInput source="image" label="Imagen" />
                    <TextInput source="experiences" label="Experiencias" />
                </div>
                <div className='containerInputs'>
                    <SelectInput source="continent" label="Continente" choices={[
                        { id: 'America', name: 'América' },
                        { id: 'Europa', name: 'Europa' },
                        { id: 'Asia', name: 'Asia' },
                        { id: 'Africa', name: 'África' },
                        { id: 'Oceania', name: 'Oceania' },
                    ]} />
                    <TextInput source="description" label="Descripción" />
                </div>
                <h2>Editar Destinos Populares</h2>
                <ArrayInput source="destinies" label="Agregar Destinos">
                    <SimpleFormIterator>
                        <div className='containerInputs'>
                            <TextInput source="name" label="Destino" />
                            <TextInput source="image" label="Imagen" />
                        </div>
                        <TextInput source="description" label="Descripción" />
                    </SimpleFormIterator>
                </ArrayInput>
                <div className='containerButtonSave'>
                    <SaveButton label="Guardar cambios" type="button" />
                </div>
            </SimpleForm>
        </Edit>
    )
}

export default EditCountry;