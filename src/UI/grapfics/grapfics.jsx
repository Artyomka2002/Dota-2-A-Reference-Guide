import React from "react";
import { AreaChart, XAxis, YAxis, CartesianGrid, Tooltip, Area, ResponsiveContainer } from 'recharts';
// import cl from '../grapfics/grapfiks.module.css'
const Grapfics = ({indexs}) => {
    const data = [
        {
            "name": "Рекрут",
            "Данные за сегодня": indexs[0],
        },
        {
            "name": "Страж",
            "Данные за сегодня":  indexs[1],
        },
        {
            "name": "Рыцарь",
            "Данные за сегодня":  indexs[2],
        },
        {
            "name": "Герой",
            "Данные за сегодня":  indexs[3],
        },
        {
            "name": "Легенда",
            "Данные за сегодня":  indexs[4],
        },
        {
            "name": "Властелин",
            "Данные за сегодня": indexs[5],
        },
        {
            "name": "Божетсво",
            "Данные за сегодня": indexs[6],
        }
    ]
    return (
        < div style={{minWidth:'375px'}} >
            <ResponsiveContainer height={150}>
                <AreaChart data={data}
                    margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                    <XAxis dataKey="name" />
                    <YAxis    tick={{ fontSize: 14 }} />
                    <CartesianGrid strokeDasharray="1 25" />
                    <Tooltip
                        contentStyle={{ backgroundColor: '#1d1f24', borderColor: '#FFB648', fontFamily: 'cursive' }}
                        labelStyle={{ color: '#FFB648'}}
                    />
                    <Area type="monotone" dataKey="Данные за сегодня" stroke="#FFB648" fillOpacity={1} fill="url(#colorUv)" />
                </AreaChart>
            </ResponsiveContainer>
        </div >
    )
}
export default Grapfics

// className={cl.responseCont}