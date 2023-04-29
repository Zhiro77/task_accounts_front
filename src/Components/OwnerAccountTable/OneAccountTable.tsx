import {Table,} from 'antd';
import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import axios from "axios";
import {columns} from "./columns";

const OneAccountTable = () => {

    const { id } = useParams()

    const [account, setAccount] = useState<any>()

    useEffect(() => {
        const getOneAccount = async () => {
            const response = await axios.get(`http://localhost:4000/accounts/${id}`)
            setAccount(response.data)
        }

        getOneAccount()
    }, [])


    const headerNames = ['id' , 'name', 'ownerId', "createdAt" , "updatedAt"]

    const myData = [];

    for(let header of headerNames) {
        let headerAlias = '';

        switch (header){
            case "id"        : headerAlias = 'ID';break;
            case "name"      : headerAlias = 'name';break;
            case "ownerId"   : headerAlias = 'Owner' ;break;
            case "createdAt" : headerAlias = 'Created On' ;break;
            case "updatedAt" : headerAlias = 'Updated On' ;break;
        }

        let valueObject = {
            index1: headerAlias ? headerAlias : header,
            index2 : account ? account[header] : ""
        }
        myData.push(valueObject)
    }

    return (
        <div>
            <Table
                columns={columns}
                dataSource={myData}
                style={{ display: 'flex', flexDirection: 'column' }}
                showHeader={false}
                pagination={false}
                rowKey={(record) => record.index1}
            />
        </div>
    );
};

export default OneAccountTable;