import React from "react";
import { Admin, Resource } from 'react-admin';
import ListCountries from "../../components/Dashboard/Countries/ListCountries";
import ListClients from "../../components/Dashboard/Clients/ListClients";
import ListUsers from "../../components/Dashboard/Users/List/ListUsers";
import CreateUser from "../../components/Dashboard/Users/Create/CreateUser";
import dataProvider from "./dataProvider";
import MyLayout from "../../components/Dashboard/Design/Layout/MyLayout"
import EditUser from "../../components/Dashboard/Users/Edit/EditUser";


const AdminPanel = () => {
    return (
        <Admin layout={MyLayout} basename="/admin" dataProvider={dataProvider}>
            <Resource name="clients" list={ListClients}/> 
            <Resource name="countries" list={ListCountries} /> 
            <Resource name="users" list={ListUsers} create={CreateUser} edit={EditUser}/>
            <Resource name="metrics"/> 
        </Admin>
    );
};

export default AdminPanel;