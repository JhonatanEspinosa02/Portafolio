import { Request, Response } from "express";
import  Data  from "../models/DataSchema";

//Features from Endpoints to get data
export const clientData = async (req: Request, res: Response) => {
    try {
        const newData = new Data(req.body);
        await newData.save();
        res.status(201).json({ data: newData });
    } catch (error) {
        console.log(error)
    }
};


