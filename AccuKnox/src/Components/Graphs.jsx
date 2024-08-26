import React from 'react'
import { PieChart, Pie, Sector, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';

const data = [
    { name: 'Connected', value: 2 },
    { name: 'Not Connected', value: 2 },
];
const COLORS = ['#0088FE', '#00C49F'];

const Graphs = () => {
    return (
        <ResponsiveContainer>
            <PieChart>
                <Pie
                    data={data}
                    cx="20%"
                    cy="50%"
                    startAngle={90}
                    endAngle={90 + 360}
                    innerRadius={60}
                    outerRadius={80}
                    fill='#8884d8'
                    // paddingAngle={0}
                    dataKey="value"
                >
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>
                <Legend iconSize={30} layout='vertical' align='center' verticalAlign='middle' wrapperStyle={{
                    paddingLeft: "123px"
                }} />
            </PieChart>
        </ResponsiveContainer>
    )
}

export default Graphs