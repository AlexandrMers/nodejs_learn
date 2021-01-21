import {Response, Request} from 'express';

export class SigKillController {
    private process: any = null;
    private listeners: any[] = [];

    constructor(process: any) {
        this.process = process;
    }

    public subscribeSignals = (signals: string[] = []) => {
        signals.forEach(signal => {
            this.process.on(signal, (signal: any) => {
                console.log('run subscribe', signal);
            })
        })
    };

    public subscribeOnSignal(signal: string, callback: () => void) {
        const listener = this.process.on(signal, callback);
        this.listeners.push(listener);
    }

    public killProcess = (_: Request, res: Response) => {
        this.process.kill(this.process.pid, '');
        res.end('ok');
    };
}