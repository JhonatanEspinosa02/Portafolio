import { Request, Response, NextFunction } from "express";
import { validationResult } from "express-validator";


export const handleError = async (req : Request, res : Response, next : NextFunction) => {
    let errorValidation = validationResult(req);

    if(!errorValidation.isEmpty()) {
        return res.status(400).json({error : errorValidation.array()})
    }
    next()
}

