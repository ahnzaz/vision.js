import { ManifestQuery } from "../Protocol";

export default interface Manifest{
    
}

export type ManifestParser = <T extends ManifestQuery, U extends Manifest>(query:T)=>U;