/// <reference path="types/webidl.d.ts" />
/// <reference path="types/utf8-encoding.d.ts" />
declare module urlsearchparams {
    function percentDecoder(str: string): string;
    interface IURLSearchParams {
        append(name: USVString, value: USVString): void;
        delete(name: USVString): void;
        get(name: USVString): USVString;
        getAll(name: USVString): USVString[];
        has(name: USVString): boolean;
        set(name: USVString, value: USVString): void;
        toString(): string;
    }
    class URLSearchParams implements IURLSearchParams {
        private list;
        private urlObject;
        constructor(init?: USVString);
        constructor(init?: URLSearchParams);
        append(name: USVString, value: USVString): void;
        delete(name: USVString): void;
        get(name: USVString): USVString;
        getAll(name: USVString): USVString[];
        set(name: USVString, value: USVString): void;
        has(name: USVString): boolean;
        private parse(input);
        private update();
        toString(): string;
    }
}
declare let _URLSearchParams: any;
export { urlsearchparams };
export { _URLSearchParams as URLSearchParams };
