import { Request, Response } from "express";
import { PumpkinModel } from "../../models/pumpkin.js";
import { HttpError } from "../../helpers/HttpError.js";

export const updateFavorite = async (req: Request, res: Response) => {
    const { id } = req.params;
    const result = await PumpkinModel.findByIdAndUpdate(id, req.body, {
        new: true,
    });

    if (!result) {
        throw HttpError(404, "Not found");
    }

    res.json(result);
};
