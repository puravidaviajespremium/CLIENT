import { Create, SimpleForm, TextInput, SelectInput} from 'react-admin';
import validateUserCreation from './validate';
import MyToolbar from './MyToolbar';
import './createUser.css'

const CreateUser = (props) => {

    return (
        <>
        <Create {...props} className='createContainer'>
            <h1 className='titleForm'>Crear usuario</h1>
            <SimpleForm 
            toolbar={<MyToolbar/>} 
            validate={validateUserCreation}
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
                    <SelectInput source="userStatus" label="Tipo" choices={[
                        { id: 'Administrador', name: 'Administrador' },
                        { id: 'Colaborador', name: 'Colaborador' }
                    ]}/>
                </div>
            </SimpleForm>
        </Create>
        {/* <ConfirmationDialog
            isOpen={isDialogOpen}
            title="¡Excelente!"
            content="Usuario creado con éxito"
            icon="success"
            onClose={handleClose}
             /> */}
        </>
    )
}

export default CreateUser;