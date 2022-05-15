import './App.css';
import Navbar from "./Components/Navbar/Navbar";
import Content from "./Components/Content/Content";
import {Outlet, Route, Routes} from 'react-router-dom';

import axios from 'axios';
import React, {useEffect, useState} from "react";
import PageUser from "./Components/PageUser/PageUser";

function App() {
    const [userList, setUserList] = useState([]);
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then((response) => {
                setUserList(response.data)
            })
    }, [])

    const sortCity = () => {
        const copyList = userList.concat();
        const sortList = copyList.sort((a, b) => {
            if (a.address.city < b.address.city) {return -1;}
            if (a.address.city > b.address.city) {return 1;}
            return 0;
        });
        setUserList(sortList);
    }

    const sortCompany = () => {
        const copyList = userList.concat();
        const sortList = copyList.sort((a, b) => {
            if (a.company.name > b.company.name) {return -1;}
            if (a.company.name < b.company.name) {return 1;}
            return 0;
        });
        setUserList(sortList);
    }

    const isLoaded = () => {
        if (userList.length) {
            return <Content userList={userList} />;
        } else {
            return <div>Загрузка...</div>;
        }
    }

  return (
        <Routes>
          <Route path={'/'} element={<Layout sortCity={() => sortCity()} sortCompany={() => sortCompany()} />}>
              <Route index element={isLoaded()} exact />
              <Route path={':id/:name'} element={<PageUser userList={userList} />} />
          </Route>
        </Routes>
  );
}

function Layout({sortCity, sortCompany}) {
    return (
        <div className="App">
            <Navbar sortCity = {() => sortCity()} sortCompany={() => sortCompany()} />
            <Outlet />
        </div>
    )
}



export default App;
