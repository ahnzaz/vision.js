import Protocol, { ManifestQuery } from "../protocol/Protocol";
import Streaming from "../Streaming";
import Manifest from "../protocol/manifest/Manifest";

const sampleHLSSource =
  "https://devstreaming-cdn.apple.com/videos/streaming/examples/img_bipbop_adv_example_ts/master.m3u8";

describe("Streaming core test suite", () => {
  const video: HTMLVideoElement = document.querySelector("video");
  it("Simple way to streaming HLS", async done => {
    const protocol: Protocol = Streaming.load(sampleHLSSource);

    protocol.attach(video);

    video.addEventListener("canplay", () => {
      video.play();
      done();
    });

    await protocol.stream();
  });

  it("Customize manifest parser", () => {
      const protocol:Protocol = Streaming.manifest(sampleHLSSource, (manifest:ManifestQuery):Manifest=>{

      });

      protocol.attach(video);
  });
});
