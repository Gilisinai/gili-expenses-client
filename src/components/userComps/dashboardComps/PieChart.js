
import React, { PureComponent } from 'react';
import {
  PieChart, Pie, Cell,
} from 'recharts';

const precent = 100

const data = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  
];
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];


export default class DashboardPieChart extends PureComponent {

  render() {
    return (
      <PieChart width={150} height={100} onMouseEnter={this.onPieEnter}>
        <Pie
          data={data}
          cx={60}
          cy={50}
          innerRadius={20}
          outerRadius={40}
          fill="#8884d8"
          paddingAngle={5}
          dataKey="value"
        >
          {
            data.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
          }
        </Pie>
      </PieChart>
    );
  }
}
