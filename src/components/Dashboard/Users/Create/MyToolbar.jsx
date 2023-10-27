import {Toolbar, SaveButton, useNotify } from 'react-admin';
import { useFormContext } from 'react-hook-form';

import { modal } from '../../utils/modal';

const MyToolbar = () => {
    const { reset } = useFormContext();

    return (
        <Toolbar>
            <SaveButton 
                label="Guardar"
                mutationOptions={{
                    onSuccess: () => {
                        reset();
                        modal("¡Excelente!", "Usuario creado satisfactoriamente", "success");
                    },
                    onError: () =>{
                        modal("¡Lo sentimos!", "Tuvimos un problema", "error");
                    }
                }}
                type="button"
            />
        </Toolbar>
    );
};

export default MyToolbar;