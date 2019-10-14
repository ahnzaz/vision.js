import { StreamingContext, StreamingPipe } from '../../Vision';

export default class HlsPipeLine implements StreamingPipe {
    private _context: StreamingContext;
    public constructor(context: StreamingContext) {
        this._context = context;
    }

    public load(): StreamingPipe {
        throw new Error("Method not implemented.");
    }

    public demux(): StreamingPipe {
        throw new Error("Method not implemented.");
    }

    public remux(): StreamingPipe {
        throw new Error("Method not implemented.");
    }

    public attach(element: HTMLMediaElement): StreamingPipe {
        throw new Error("Method not implemented.");
    }

    public output(): import("../../Vision").Controller {
        throw new Error("Method not implemented.");
    }
}