
import { useNavigate, useParams } from "react-router";
import { useEffect, useState } from "react";
import axios from 'axios';
import BarChart from "../ChartBar/ChartBar";
import './MetricsDetail.css'


const MetricsDetail = () => {

    const {id} = useParams();
    const navigate = useNavigate();

    const [detailData, setDetailData] = useState([]);

    const [global, setGlobal] = useState(true);

    const allUsersMetrics = async () => {
        try {
            const response = (await axios.get('http://localhost:3001/users/metrics')).data;
            setDetailData(response);
        } catch (error) {
            throw error;
        }
    };

    useEffect(() => {
        
        allUsersMetrics();

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

    const filteredUsers = detailData?.filter(user => user.id.toString() === id);

    const backHandler = () => {
        navigate(-1);
    }

    return(
        <div>
            <button className="backButton" onClick={backHandler}>Atrás</button>
            <div className="divGeneralDetail">
            {filteredUsers && filteredUsers[0] ? (
                <>
                    <h1>{filteredUsers[0].firstName}</h1>
                    <h2>{filteredUsers[0].lastName}</h2>
                    <BarChart
                        prospectCount={filteredUsers[0].prospectCount}
                        contactedCount={filteredUsers[0].contactedCount}
                        waitingCount={filteredUsers[0].waitingCount}
                        wonCount={filteredUsers[0].wonCount}
                        lostCount={filteredUsers[0].lostCount}
                        global={global}
                    ></BarChart>
                </>
            ) : (
                <p>Loading...</p>
            )}
            </div>
        </div>
    )
};

export default MetricsDetail;