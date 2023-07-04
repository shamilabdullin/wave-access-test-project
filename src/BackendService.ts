import { ReadCallback } from "i18next";
import HTTPBackend, { BackendOptions } from "i18next-http-backend";

export class BackendService extends HTTPBackend{
    init(services?: any, options?: BackendOptions): void {
        console.log('inited', services);
        console.log('inited', options);
        super.init(services, options);
    }
    read(language: string, namespace: string, callback: ReadCallback): void{
        console.log('readed', language, namespace);
        super.read(language, namespace, callback);
    }
}