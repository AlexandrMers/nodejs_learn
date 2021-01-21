import fs from "fs";
import path from "path";

export class FileService {

    public create = (fileName: string, content: string) => {
        return new Promise((resolve, reject) => {
            fs.writeFile(path.resolve(__dirname, 'files', fileName), 'utf-8', (err) => {
                if(err) {
                    reject(err);
                }
                resolve('file created');
            })
        })
    };


    // public readFile = (pathStr: string[]) => {
    //     fs.readFile(path.join(__dirname, ...pathStr), "utf8", (err, data) => {
    //         if(err) {
    //             console.error(err);
    //             return;
    //         }
    //         console.log('file data -> ', data);
    //     });
    // }
    //
    // public writeFile = (pathStr: string[], content: string, flag: any) => {
    //     fs.writeFile(path.join(__dirname, ...pathStr), content, { flag: flag, encoding: "utf8"  }, err => {
    //         if(err) {
    //             console.error(err);
    //             return;
    //         }
    //         console.log('data written in file!');
    //     })
    // };
}