import {Express} from "express";
import {FileController} from "./FileController";
import {FileService} from "./FileService";

const fileService = new FileService();
const fileController = new FileController(fileService);

export function fileModule(app: Express) {
    app.post('/file/create', fileController.create);
};