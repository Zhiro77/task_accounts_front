import {Link} from "react-router-dom";
import React from "react";

export const columns = [
    {
        title: 'ID',
        dataIndex: 'id',
        key: 'id',
    },
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: 'Created On',
        dataIndex: 'createdAt',
        key: 'createdAt',
    },
    {
        title: 'Owner',
        dataIndex: 'ownerId',
        key: 'Created_On',
    },
    {
        title: 'Action',
        dataIndex: 'action',
        key: 'Action',
        render: (text: any) => <Link to={`${text}`}>view</Link>
    }
];