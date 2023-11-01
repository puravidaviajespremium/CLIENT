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
                        <TextInput source="name" label="Nombre" className='inputContent'/>
                        <SelectInput source="continent" label="Continente" className='inputContent' choices={[
                            { id: 'America', name: 'América' },
                            { id: 'Europa', name: 'Europa' },
                            { id: 'Asia', name: 'Asia' },
                            { id: 'Africa', name: 'África' },
                            { id: 'Oceania', name: 'Ocenanía' },
                        ]}/>
                        <TextInput source="experiences" label="Experiencias" className='inputContent'/>
                    </div>
                    <div className='containerInputs'>
                        <TextInput source="image" label="Imagen" className='inputContent' multiline={true}/>
                        <TextInput source="description" label="Descripción" className='inputContent' multiline={true}/>
                    </div>
                    <h2>Destinos Populares</h2>
                    <ArrayInput source="destinies" label="Agregar Destinos">
                        <SimpleFormIterator className='containerDestinies'>
                            <TextInput source="name" label="Destino" className='inputContent'/>
                            <TextInput source="image" label="Imagen" className='inputContent' multiline={true}/>
                            <TextInput source="description" label="Descripción" className='inputContent' multiline={true}/>
                        </SimpleFormIterator>
                    </ArrayInput>
                    
            </SimpleForm>
        </Create>
    )
}

export default CreateCountry;