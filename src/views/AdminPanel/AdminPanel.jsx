import React from "react";
import { Admin, Resource } from 'react-admin';
import ListCountries from "../../components/Dashboard/Countries/ListCountries";
import ListClients from "../../components/Dashboard/Clients/ListClients";
import ListUsers from "../../components/Dashboard/Users/Users";
import dataProvider from "./dataProvider";
import MyLayout from "../../components/Dashboard/Design/Layout/MyLayout"



const AdminPanel = () => {
    return (
        <Admin layout={MyLayout} basename="/admin" dataProvider={dataProvider}>
            <Resource name="clients" list={ListClients}/> 
            <Resource name="countries/all" list={ListCountries} />
            <Resource name="users/all" list={ListUsers} />           
        </Admin>
    );
};

export default AdminPanel;