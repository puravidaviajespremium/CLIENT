import React from "react";
import { Admin, Resource } from 'react-admin';
import ListCountries from "../../components/Dashboard/Countries/List/ListCountries";
import ListClients from "../../components/Dashboard/Clients/List/ListClients";
import ListUsers from "../../components/Dashboard/Users/List/ListUsers";
import CreateUser from "../../components/Dashboard/Users/Create/CreateUser";
import CreateClient from "../../components/Dashboard/Clients/Create/CreateClient";
import CreateCountry from "../../components/Dashboard/Countries/Create/CreateCountry";
import dataProvider from "./dataProvider";
import MyLayout from "../../components/Dashboard/Design/Layout/MyLayout"
import EditUser from "../../components/Dashboard/Users/Edit/EditUser";
import DetailClient from "../../components/Dashboard/Clients/Detail/DetailClient";
import EditCountry from "../../components/Dashboard/Countries/Edit/EditCountry";
import EditClient from "../../components/Dashboard/Clients/Edit/EditClients";
import Cards from "../../components/Dashboard/Users/Metrics/Cards/Cards";
import ListMyClients from "../../components/Dashboard/MyClients/List/MyClients";

const AdminPanel = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    const isAdmin = user && user.role === "Administrador";
    const isColl = user && user.role === "Colaborador";

    return (
        <Admin layout={MyLayout} basename="/admin" dataProvider={dataProvider}>

            {isColl && (
                <>
                    <Resource name="clients" list={ListMyClients} show={DetailClient} create={CreateClient} edit={EditClient} />
                </>
            )}

            {isAdmin && (
                <>  
                    <Resource name="clients" list={ListClients} show={DetailClient} create={CreateClient} edit={EditClient}/>
                    <Resource name="countries" list={ListCountries} create={CreateCountry} edit={EditCountry} />
                    <Resource name="users" list={ListUsers} create={CreateUser} edit={EditUser} />
                    <Resource name="metrics" list={Cards} />
                </>
            )}

        </Admin>
    );
};

export default AdminPanel;




