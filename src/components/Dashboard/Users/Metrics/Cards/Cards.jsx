import { useEffect, useState } from "react";
import axios from 'axios';
import './Cards.css'
import BarChart from "../ChartBar/ChartBar";
import { NavLink } from 'react-router-dom';
import { BsFileBarGraphFill } from 'react-icons/bs';

const apiUrl = import.meta.env.VITE_BASE_URL;

const Cards = () => {

    const [metricsData, setMetricsData] = useState([]);

    const [global, setGlobal] = useState(true);

    const allUserMetrics = async () => {
        try {
            const response = (await axios.get(`${apiUrl}/users/metrics`)).data;
            setMetricsData(response)
        } catch (error) {
            throw error;
        }
    };

    useEffect(() => {

        allUserMetrics();

        const handleResize = () => {
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

    let prospectCountTotal = 0;
    let contactedCountTotal = 0;
    let waitingCountTotal = 0;
    let wonCountTotal = 0;
    let lostCountTotal = 0;

    metricsData?.forEach(user => {
        prospectCountTotal += parseInt(user.prospectCount);
        contactedCountTotal += parseInt(user.contactedCount);
        waitingCountTotal += parseInt(user.waitingCount);
        wonCountTotal += parseInt(user.wonCount);
        lostCountTotal += parseInt(user.lostCount);
    });

    return (
        <div className="containerMetrics">
            <h2>Métricas Individuales</h2>
            <table className='tablaGeneral'>
                <thead>
                    <tr >
                        <th className="tablaIndividual">Id</th>
                        <th className="tablaIndividual">Nombres</th>
                        <th className="tablaIndividual">Apellidos</th>
                        <th className="tablaIndividual">Correo electrónico</th>
                        <th className="tablaIndividual">Prospectos</th>
                        <th className="tablaIndividual">Contactados</th>
                        <th className="tablaIndividual">En espera</th>
                        <th className="tablaIndividual">Ganados</th>
                        <th className="tablaIndividual">Perdidos</th>
                        <th className="tablaIndividual">Total</th>
                        <th className="tablaIndividual">Gráfico individual</th>
                    </tr>
                </thead>
                <tbody>
                    {metricsData?.map((user) => (
                        <tr key={user.id}>
                            <td className="tablaIndividual">{user.id}</td>
                            <td className="tablaIndividual">{user.firstName}</td>
                            <td className="tablaIndividual">{user.lastName}</td>
                            <td className="tablaIndividual">{user.email}</td>
                            <td className="tablaIndividual">{user.prospectCount}</td>
                            <td className="tablaIndividual">{user.contactedCount}</td>
                            <td className="tablaIndividual">{user.waitingCount}</td>
                            <td className="tablaIndividual">{user.wonCount}</td>
                            <td className="tablaIndividual">{user.lostCount}</td>
                            <td className="tablaIndividual">{user.clientCount}</td>
                            <td className="tablaIndividual">
                                <NavLink to={`/admin/metrics/detail/${user.id}`} key={user.id}>
                                    <button className="detailButton">
                                        <BsFileBarGraphFill style={{ paddingTop: '5px', marginRight: '2px' }} size={20} color="var(--primary-color)"></BsFileBarGraphFill>
                                        DETALLE</button>
                                </NavLink>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <h2 style={{ margin: '50px' }}>Métricas Globales</h2>
            <BarChart
                prospectCount={prospectCountTotal}
                contactedCount={contactedCountTotal}
                waitingCount={waitingCountTotal}
                wonCount={wonCountTotal}
                lostCount={lostCountTotal}
                global={global}>
            </BarChart>
            <div style={{ height: '100px' }}></div>
        </div>
    )
}

export default Cards;