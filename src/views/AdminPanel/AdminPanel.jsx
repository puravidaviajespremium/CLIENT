import React from "react";
import { Admin, Resource } from 'react-admin';
import ListCountries from "./ListCountries";
import dataProvider from "./dataProvider";



const AdminPanel = () => {
    return (
        <Admin basename="/admin" dataProvider={dataProvider}>
            <Resource name="countries/all" list={ListCountries} />               
        </Admin>
    );
};

export default AdminPanel;