"use client"

//import 
import React from "react";
import ReactPlayer from "react-player";
import "bootstrap/dist/css/bootstrap.css";
import ReCharts from "recharts";
import { ResponsiveContainer, LineChart, XAxis, YAxis, CartesianGrid, Line } from "recharts";
import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet';

//data to bing
const data = [];


//export 
export default function Content() {

    return <>
        <div className="container">
            <div className="row">

                <h1>Hello MIN, Welcome to the Next.js !!</h1>

                <div className="col-6">
                    <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
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

                <div className="col-6">

                    <ResponsiveContainer width="100%" minHeight="500">

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

            <div className="row">
                <div className="col-12">
                    <ReactPlayer url='https://www.youtube.com/watch?v=FZ0cG47msEk' width={'100%'} />
                </div>

            </div>

            <div className="row">

            </div>
        </div>


    </>
}