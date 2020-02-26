import React, { Component } from "react";
import { ListImage } from "../components/image";
import { changePicture } from "../components/changePicture";
import { test } from '../components/slider';


class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ListImage,
        }
    }
    render() {
        return (
            <>
                <style jsx>{test}</style>
                <div className="text-6xl prueba">Slider </div>
                <div className="flex flex-no-wrap bg-gray-200 overflow-hidden p-10">
                    {this.state.ListImage.map((src, index) => (
                        <img key={index} className="w-1/2 rounded-lg mx-2 " src={src} />
                    ))}
                </div>
                <div className="text-center m-5">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mx-5 " onClick={() => { changePicture("L", this) }}> {"<-"} </button>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" onClick={() => { changePicture("R", this) }}> {"->"} </button>
                </div>
            </>
        )
    }
}

export default index;