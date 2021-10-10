import React from "react";
import Card from './Card';
import SourceData from "./Sourcedata";

const Service = () => {
    return (
        <>
            <div className="my-5">
                <h1 className="text-center">Our Services</h1>
            </div>
            <div className="container-fluid mb-5">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="row gy-4">
                            
                           {
                               SourceData.map((val , Index) => {
                                   return <Card 
                                   key = {Index}
                                   imgsrc = {val.imgsrc}
                                   title = {val.title}
                                   />
                               })
                           }

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Service;