import { Create, SimpleForm, TextInput, SelectInput} from 'react-admin';
import MyToolbar from '../../utils/MyToolbar';
import './createCountry.css'

const CreateClient = (props) => {

    return (
        <>
        <Create {...props} className='createContainer'>
            <h1 className='titleForm'>Crear País</h1>
            <SimpleForm 
            toolbar={<MyToolbar modalContent="País creado satisfactoriamente"/>} 
            
            >
                <div className='containerInputs'>
                    <TextInput source="firstName" label="Nombres"  />
                    <TextInput source="lastName" label="Apellidos" />
                </div>
                <div className='containerInputs'>
                    <TextInput source="email" label="Correo Electrónico" />
                    <TextInput source="telephone" label="Celular" />
                </div>
                <div className='containerInputs'>
                    <TextInput source="countryOrigin" label="País Origen" />
                </div>
            </SimpleForm>
        </Create>
        </>
    )
}

export default CreateClient;