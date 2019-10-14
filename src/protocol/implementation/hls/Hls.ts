import Protocol from "../../Protocol";
import { HlsManifestParser, HlsManifestQuery } from "./HlsManifestParser";


export default class HLS extends Protocol{

    public constructor(query?:HlsManifestQuery){
        super(query);
    }

    public load(): import("../../Protocol").PipeLine {
        throw new Error("Method not implemented.");
    }
    public demux(): import("../../Protocol").PipeLine {
        throw new Error("Method not implemented.");
    }
    public remux(): import("../../Protocol").PipeLine {
        throw new Error("Method not implemented.");
    }
    public attach(element: HTMLMediaElement): import("../../Protocol").PipeLine {
        throw new Error("Method not implemented.");
    }
    public stream(): Promise<any> {
        throw new Error("Method not implemented.");
    }
    public static isHls(manifest:ManifestQuery):boolean{
        return true;
    }

    private _parser:HlsManifestParser;

}