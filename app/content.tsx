"use client"

//import 

import React from "react";
import ReactPlayer from "react-player";
import "bootstrap/dist/css/bootstrap.css";
import ReCharts from "recharts";
import { ResponsiveContainer, LineChart, XAxis, YAxis, CartesianGrid, Line } from "recharts";
import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet';
import "leaflet/dist/leaflet.css";

//data to bind
const data = [
    {
      name: 'Page A',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Page B',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Page C',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Page D',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'Page E',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Page F',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Page G',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];
//export 
export default function Content() {

    return <>

        <div className="container">
            <div className="row">


                <div className="row">
                    <div className="col-12">
                        <ReactPlayer url='https://www.youtube.com/watch?v=FZ0cG47msEk' width={'100%'} />
                    </div>

                </div>

                <div className="row">
                    <div className="col-12">
                        <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false} style={{
                            height:500
                        }}>
                            <TileLayer
                                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            />
                            <Marker position={[51.505, -0.09]}>
                                <Popup>
                                    A pretty CSS3 popup. <br /> Easily customizable.
                                </Popup>
                            </Marker>
                        </MapContainer>
                    </div>
                </div>


                <div className="row">
                    <div className="col-12">

                        <ResponsiveContainer width="100%" height={500} minHeight={500}>

                            <LineChart width={500} height={300} data={data}>
                                <XAxis dataKey="name" />
                                <YAxis />
                                <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
                                <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                                <Line type="monotone" dataKey="pv" stroke="#82ca9d" />
                            </LineChart>

                        </ResponsiveContainer>
                    </div>

                </div>

            </div>
        </div>
    </>
};

