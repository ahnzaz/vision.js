import { Controller, ManifestQuery, Streamable } from "../Streaming";
import HLS from "./hls/Hls";

const protocolMap = [HLS.isHls, HLS];

export type Constructor<T> = new () => T;

function identifyProtocol(manifest: ManifestQuery): Constructor<Protocol> {
  return HLS;
}
export interface StreamingContext {}

export interface Streamable {
  stream(): Promise<Controller>;
}

export interface Controller {
  currentLevel: number;
}

export type ManifestURI = string;
export interface ManifestQuery {}
export type ManifestParam = ManifestURI | ManifestQuery;

export interface PipeLine extends Streamable {
  load(): PipeLine;
  demux(): PipeLine;
  remux(): PipeLine;
  attach(element: HTMLMediaElement): PipeLine;
  stream(): Promise<Controller>;
  context: StreamingContext;
}

export default abstract class Protocol implements PipeLine {
  
  public constructor(query:ManifestParam){
    
  }

  context: StreamingContext;
  public abstract load(): PipeLine;
  public abstract demux(): PipeLine;
  public abstract remux(): PipeLine;
  public abstract attach(element: HTMLMediaElement): PipeLine;
  public abstract stream(): Promise<Controller>

  public static identify(manifest: ManifestQuery): Protocol {
    const protocolConstructor = identifyProtocol(manifest);

    return new protocolConstructor();
  }
}
