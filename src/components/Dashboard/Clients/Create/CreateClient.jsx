import { Create, SimpleForm, TextInput} from 'react-admin';
import validateCreation  from './validate';
import MyToolbar from '../../utils/MyToolbar';

const CreateClient = (props) => {

    return (
        <>
        <Create {...props} className='createContainer'>
            <SimpleForm 
            toolbar={<MyToolbar modalContent="Cliente creado satisfactoriamente"/>} 
            validate={validateCreation}
            > 
                <h1 className='titleForm'>Crear Cliente</h1>
                <div className='containerInputs'>
                    <TextInput source="firstName" label="Nombres"  className='inputContent'/>
                    <TextInput source="lastName" label="Apellidos" className='inputContent'/>
                </div>
                <div className='containerInputs'>
                    <TextInput source="email" label="Correo Electrónico" className='inputContent'/>
                    <TextInput source="telephone" label="Celular" className='inputContent'/>
                </div>
                <div className='containerInputs'>
                    <TextInput source="countryOrigin" label="País Origen" className='inputContent'/>
                </div>
            </SimpleForm>
        </Create>
        </>
    )
}

export default CreateClient;