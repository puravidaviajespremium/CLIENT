import styles from './Login.module.css'

function Login() {
    return (
        <div className={styles.loginContainer}>
            <div className={styles.formContainer}>
                <h2>Iniciar Sesión</h2>
                <form>
                    <div>
                        <label>Nombre de usuario o Correo Electrónico</label>
                        <input type="text" />
                    </div>
                    <div>
                        <label>Contraseña</label>
                        <input type="password" />
                    </div>
                    <div>
                        <label>
                            <input type="checkbox" /> Recuérdame
                        </label>
                    </div>
                    <div>
                        <button type="submit">Iniciar Sesión</button>
                    </div>
                    <hr/>
                    <h2>¿No tienes cuenta?</h2>
                    <div>
                        <button type="submit">Registrarse</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login;