import Manifest from "../../manifest/Manifest";
import { ManifestParam } from "../../Protocol";

export interface HlsManifestParam extends ManifestParam{

};

export type HlsManifestQuery = string | HlsManifestParam;

export interface HlsManifest extends Manifest{

}

export type HlsManifestParser = (query:HlsManifestQuery)=>HlsManifest;

export function hlsManifestParser(query:HlsManifestQuery):HlsManifest{
    
    return undefined;
};