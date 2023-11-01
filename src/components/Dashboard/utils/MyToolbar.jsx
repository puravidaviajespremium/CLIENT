import { Toolbar, SaveButton } from 'react-admin';
import { useFormContext } from 'react-hook-form';
import BackButton from './BackButton';


import { modal } from './modal';

const MyToolbar = ({ modalContent }) => {
    const { reset } = useFormContext();

    return (
        <Toolbar>
            <SaveButton
                label="Guardar"
                mutationOptions={{
                    onSuccess: () => {
                        reset();
                        modal("¡Excelente!", modalContent, "success");
                    },
                    onError: () => {
                        modal("¡Lo sentimos!", "Tuvimos un problema", "error");
                    }
                }}
                type="button"
            />
            <BackButton />
        </Toolbar>
    );
};

export default MyToolbar;