import { Create, SimpleForm, TextInput, SelectInput, ArrayInput, SimpleFormIterator} from 'react-admin';
import MyToolbar from '../../utils/MyToolbar';
import validateCountryCreation from './validate';

const CreateCountry = (props) => {

    return (
       
        <Create {...props} className='createContainer'>
            <SimpleForm 
                toolbar={<MyToolbar modalContent="País creado satisfactoriamente"/>}
                validate={validateCountryCreation} >
                    <h1 className='titleForm'>Crear País</h1>
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
                            { id: 'Oceania', name: 'Ocenanía' },
                        ]}/>
                        <TextInput source="description" label="Descripción" multiline={true}/>
                    </div>
                    <h2>Destinos Populares</h2>
                    <ArrayInput source="destinies" label="Agregar Destinos">
                        <SimpleFormIterator className='containerDestinies'>
                            <TextInput source="name" label="Destino" />
                            <TextInput source="image" label="Imagen" />
                            <TextInput source="description" label="Descripción" multiline={true}/>
                        </SimpleFormIterator>
                    </ArrayInput>
                    
            </SimpleForm>
        </Create>
    )
}

export default CreateCountry;