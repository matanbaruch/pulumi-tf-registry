// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

// Export members:
export { GetItemArgs, GetItemResult, GetItemOutputArgs } from "./getItem";
export const getItem: typeof import("./getItem").getItem = null as any;
export const getItemOutput: typeof import("./getItem").getItemOutput = null as any;
utilities.lazyLoad(exports, ["getItem","getItemOutput"], () => require("./getItem"));

export { GetListArgs, GetListResult, GetListOutputArgs } from "./getList";
export const getList: typeof import("./getList").getList = null as any;
export const getListOutput: typeof import("./getList").getListOutput = null as any;
utilities.lazyLoad(exports, ["getList","getListOutput"], () => require("./getList"));

export { ItemArgs, ItemState } from "./item";
export type Item = import("./item").Item;
export const Item: typeof import("./item").Item = null as any;
utilities.lazyLoad(exports, ["Item"], () => require("./item"));

export { ProviderArgs } from "./provider";
export type Provider = import("./provider").Provider;
export const Provider: typeof import("./provider").Provider = null as any;
utilities.lazyLoad(exports, ["Provider"], () => require("./provider"));


// Export sub-modules:
import * as config from "./config";
import * as types from "./types";

export {
    config,
    types,
};

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "kentik-cloudexport:index/item:Item":
                return new Item(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("kentik-cloudexport", "index/item", _module)
pulumi.runtime.registerResourcePackage("kentik-cloudexport", {
    version: utilities.getVersion(),
    constructProvider: (name: string, type: string, urn: string): pulumi.ProviderResource => {
        if (type !== "pulumi:providers:kentik-cloudexport") {
            throw new Error(`unknown provider type ${type}`);
        }
        return new Provider(name, <any>undefined, { urn });
    },
});
