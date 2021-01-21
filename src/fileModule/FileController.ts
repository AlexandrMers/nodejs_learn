import {Request, Response} from "express";
import {FileService} from "./FileService";

export class FileController {
    private fileSevice: FileService;

    constructor(fileService: FileService) {
        this.fileSevice = fileService;
    }

    public create = async (req: Request, res: Response) => {
        try {
            console.log('req.body.fileName ', req.body.fileName);
            console.log('req.body.content', req.body.content);
            const createdData = await this.fileSevice.create(req.body.fileName, req.body.content);

            return res.json({
                status: "ok",
                data: createdData
            })
        } catch (e) {
            return res.json({
                status: "error",
                message: e.toString()
            })
        }

    }
}
