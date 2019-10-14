import { ManifestParser } from './protocol/manifest/Manifest';
import Protocol, { ManifestParam, ManifestQuery } from "./protocol/Protocol";

export default class Streaming {
  public static manifest(manifest: ManifestParam, parser:ManifestParser): Protocol {
    const protocol = Protocol.identify(manifest);

    return undefined;
  }

  public static load(manifest: ManifestQuery): Protocol{
    return undefined;
  }
}
