
import { useEffect, useState } from "react";
import axios from 'axios';
import'./Cards.css'
import BarChart from "../ChartBar/ChartBar";
import { NavLink } from 'react-router-dom';
import {BsFileBarGraphFill} from 'react-icons/bs';

import metrics from "../../../utils/metricsData";

const Cards = () => {

    const [userData, setUserData] = useState([]);

    const [global, setGlobal] = useState(true);

    useEffect(() => {
        const allClients = async () => {
            try {
                const response = await axios.get('http://localhost:3001/users');
                setUserData(response.data);
            } catch (error) {
                console.error(error);
                throw error;
            }
        };
        allClients();

        const handleResize = () => {
            console.log(window.innerWidth)
            if (window.innerWidth <= 768) {
                setGlobal(false);
            } else {
                setGlobal(true);
            }
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const filteredUsers = userData.filter(user => user.userStatus !== "Administrador");

    const filteredUsersData = metrics.filter(user => user.userStatus !== "Administrador");

    let prospecto = 0;
    let contactada = 0;
    let enEspera = 0;
    let ganada = 0;
    let perdido = 0;

    metrics.forEach(user => {
        prospecto += parseInt(user.metrics.find(metric => Object.keys(metric)[0] === 'Prospecto')['Prospecto']);
        contactada += parseInt(user.metrics.find(metric => Object.keys(metric)[0] === 'Contactada')['Contactada']);
        enEspera += parseInt(user.metrics.find(metric => Object.keys(metric)[0] === 'En espera')['En espera']);
        ganada += parseInt(user.metrics.find(metric => Object.keys(metric)[0] === 'Ganada')['Ganada']);
        perdido += parseInt(user.metrics.find(metric => Object.keys(metric)[0] === 'Perdido')['Perdido']);
    });

    return(
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <h1 className="titles">Métricas Individuales</h1>
            {/* <div className="Cards">
                {filteredUsers.map((user, index) => (
                    <Card key={index} user={user} />
                ))}
            </div> */}
            <table className='tablaGeneral'>
                <thead>
                    <tr >
                        <th className="tablaIndividual">Id</th>
                        <th className="tablaIndividual">Nombres</th>
                        <th className="tablaIndividual">Apellidos</th>
                        <th className="tablaIndividual">Correo electrónico</th>
                        <th className="tablaIndividual">Prospecto</th>
                        <th className="tablaIndividual">Contactada</th>
                        <th className="tablaIndividual">En espera</th>
                        <th className="tablaIndividual">Ganado</th>
                        <th className="tablaIndividual">Perdido</th>
                        <th className="tablaIndividual">Gráfico</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredUsersData.map((user) => (
                        <tr key={user.id}>
                            <td className="tablaIndividual">{user.id}</td>
                            <td className="tablaIndividual">{user.firstName}</td>
                            <td className="tablaIndividual">{user.lastName}</td>
                            <td className="tablaIndividual">{user.email}</td>
                            <td className="tablaIndividual">{user.metrics[0]['Prospecto']}</td>
                            <td className="tablaIndividual">{user.metrics[1]['Contactada']}</td>
                            <td className="tablaIndividual">{user.metrics[2]['En espera']}</td>
                            <td className="tablaIndividual">{user.metrics[3]['Ganada']}</td>
                            <td className="tablaIndividual">{user.metrics[4]['Perdido']}</td>
                            <td className="tablaIndividual">
                                <NavLink to={`/admin/metrics/detail/${user.id}`} key={user.id}>   
                                    <button className="detailButton">
                                        <BsFileBarGraphFill style={{paddingTop: '5px', marginRight: '2px'}} size={20} color="rgb(31, 138, 31)"></BsFileBarGraphFill>
                                    DETALLE</button>      
                                </NavLink>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {/* <div className="cards">
                {filteredUsersData.map((user) => (
                    <Card key={user.id} user={user} />
                ))}
            </div> */}
            <h1 className="titles" style={{margin: '50px'}}>Métricas Globales</h1>
            <BarChart
                prospecto={prospecto} 
                contactada={contactada} 
                enEspera={enEspera}
                ganada={ganada}
                perdido={perdido}
                global={global}>
            </BarChart>
            <div style={{height: '100px'}}></div>
        </div>
    )
}

export default Cards;