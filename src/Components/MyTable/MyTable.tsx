import React, {useEffect, useState} from 'react';
import { Table } from "antd";
import {IAccountType} from "../../model";
import axios from "axios";
import { Link } from "react-router-dom";
import {columns} from "./columns";


const MyTable = () => {

    const [accounts, setAccounts] = useState<IAccountType[]>([])

    useEffect(() => {
        const getAccounts = async () => {
            const response = await axios.get('http://localhost:4000/accounts');
            setAccounts(response.data)
        }

        getAccounts()
    }, [])

    const dataSource = accounts.map((item) => {
        return {
            ...item,
            key: item.id,
            action: item.id
        }
    })
    return (
        <div>
            <Table
                rowKey={(record) => record.id}
                dataSource={dataSource}
                pagination={false}
                columns={columns}
            />
        </div>
    );
};

export default MyTable;