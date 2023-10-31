import { Edit, SimpleForm, TextInput, SelectInput, ArrayInput, SimpleFormIterator, SaveButton } from 'react-admin';
import validateEditCountry from './validateEditCountry';

const EditCountry = (props) => {
    return (
        <Edit {...props} className='createContainer'>
            <SimpleForm toolbar={false} validate={validateEditCountry} >
                <h1 className='titleForm'>Modificar País</h1>
                <TextInput disabled source="id" label="ID" className='inputContent'/>
                <div className='containerInputs'>
                    <TextInput source="name" label="Nombre" className='inputContent'/>
                    <SelectInput source="continent" label="Continente" className='inputContent' choices={[
                        { id: 'America', name: 'América' },
                        { id: 'Europa', name: 'Europa' },
                        { id: 'Asia', name: 'Asia' },
                        { id: 'Africa', name: 'África' },
                        { id: 'Oceania', name: 'Oceania' },
                    ]} />
                    <TextInput source="experiences" label="Experiencias" className='inputContent' />
                </div>
                <div className='containerInputs'>
                    <TextInput source="image" label="Imagen" className='inputContent' multiline={true}/>
                    <TextInput source="description" label="Descripción" className='inputContent' multiline={true}/>
                </div>
                <h2>Editar Destinos Populares</h2>
                <ArrayInput source="Destinies" label="Destinos guardados">
                    <SimpleFormIterator>
                        <div className='containerInputs'>
                            <TextInput source="name" label="Nombre del destino" className='inputContent'/>
                            <TextInput source="image" label="Imagen del destino" className='inputContent' multiline={true}/>
                            <TextInput source="description" label="Descripción del destino" className='inputContent' multiline={true}/>
                        </div>
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