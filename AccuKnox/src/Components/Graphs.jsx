import React, { useEffect, useState } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts';

const Graphs = ({ graphData }) => {
    const [formattedGraphData, setFormattedGraphData] = useState([]);
    const [colors, setColors] = useState([]);

    useEffect(() => {
        formatGraphData();
    }, [graphData]); 

    const formatGraphData = () => {
        const tempGraphData = [];
        const tempColors = [];

        for (let key in graphData) {
            const obj = {
                name: key,
                value: graphData[key],
            };
            tempGraphData.push(obj);
            tempColors.push(getRandomColor());
        }

        setFormattedGraphData(tempGraphData);
        setColors(tempColors);
    };

    const getRandomColor = () => {
        return "#" + ((1 << 24) * Math.random() | 0).toString(16).padStart(6, "0");
    };

    return (
        <ResponsiveContainer>
            <PieChart>
                <Pie
                    data={formattedGraphData}
                    cx="20%"
                    cy="50%"
                    startAngle={90}
                    endAngle={90 + 360}
                    innerRadius={60}
                    outerRadius={80}
                    fill='#8884d8'
                    dataKey="value"
                >
                    {formattedGraphData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                    ))}
                </Pie>
                <Legend
                    iconSize={30}
                    layout='vertical'
                    align='center'
                    verticalAlign='middle'
                    wrapperStyle={{ paddingLeft: "123px" }}
                />
            </PieChart>
        </ResponsiveContainer>
    );
};

export default Graphs;
