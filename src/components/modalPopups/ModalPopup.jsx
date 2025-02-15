﻿import parse from "html-react-parser"
import {use, useState} from "react";
import "./modalPopup.css"
import Shade from "../shade/Shade.jsx";

export default function ModalPopup({data, open, setOpen}) {

    return (
        <>
            <article className={`popup ${open ? "open-popup" : "close-popup"}`} >
                <div onClick={() => setOpen(false)} className="close" >&times;</div>
                <h2>{data.name}</h2>
                <p>
                    {data.description}
                </p>
            </article>
            <Shade openShade={open} onClick={() => setOpen(false)}/>
        </>
    )
}