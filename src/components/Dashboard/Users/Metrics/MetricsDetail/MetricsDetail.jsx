
import { useNavigate, useParams } from "react-router";
import { useEffect, useState } from "react";
import axios from 'axios';
import BarChart from "../ChartBar/ChartBar";
import './MetricsDetail.css'

import metrics from "../../../utils/metricsData";


const MetricsDetail = () => {

    const {id} = useParams();
    const navigate = useNavigate();

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

    const filteredUsers = userData.filter(user => user.id === id);

    const filteredUsersData = metrics.filter(
        user => user.id === id);

    const backHandler = () => {
        navigate(-1);
    }

    return(
        <div>
            <button className="backButton" onClick={backHandler}>Atrás</button>
            <div className="divGeneralDetail">
                <h1>{filteredUsersData[0].firstName}</h1>
                <h2>{filteredUsersData[0].lastName}</h2>
                <BarChart
                        prospecto={filteredUsersData[0].metrics[0]['Prospecto']} 
                        contactada={filteredUsersData[0].metrics[1]['Contactada']} 
                        enEspera={filteredUsersData[0].metrics[2]['En espera']}
                        ganada={filteredUsersData[0].metrics[3]['Ganada']}
                        perdido={filteredUsersData[0].metrics[4]['Perdido']}
                        global={global}>
                </BarChart>
            </div>
        </div>
    )
};

export default MetricsDetail;