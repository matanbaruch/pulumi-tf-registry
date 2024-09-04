// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

// Export members:
export { FolderArgs, FolderState } from "./folder";
export type Folder = import("./folder").Folder;
export const Folder: typeof import("./folder").Folder = null as any;
utilities.lazyLoad(exports, ["Folder"], () => require("./folder"));

export { GetFolderArgs, GetFolderResult, GetFolderOutputArgs } from "./getFolder";
export const getFolder: typeof import("./getFolder").getFolder = null as any;
export const getFolderOutput: typeof import("./getFolder").getFolderOutput = null as any;
utilities.lazyLoad(exports, ["getFolder","getFolderOutput"], () => require("./getFolder"));

export { ProviderArgs } from "./provider";
export type Provider = import("./provider").Provider;
export const Provider: typeof import("./provider").Provider = null as any;
utilities.lazyLoad(exports, ["Provider"], () => require("./provider"));

export { VmArgs, VmState } from "./vm";
export type Vm = import("./vm").Vm;
export const Vm: typeof import("./vm").Vm = null as any;
utilities.lazyLoad(exports, ["Vm"], () => require("./vm"));


// Export sub-modules:
import * as config from "./config";

export {
    config,
};

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "vmworkstation:index/folder:Folder":
                return new Folder(name, <any>undefined, { urn })
            case "vmworkstation:index/vm:Vm":
                return new Vm(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("vmworkstation", "index/folder", _module)
pulumi.runtime.registerResourceModule("vmworkstation", "index/vm", _module)
pulumi.runtime.registerResourcePackage("vmworkstation", {
    version: utilities.getVersion(),
    constructProvider: (name: string, type: string, urn: string): pulumi.ProviderResource => {
        if (type !== "pulumi:providers:vmworkstation") {
            throw new Error(`unknown provider type ${type}`);
        }
        return new Provider(name, <any>undefined, { urn });
    },
});
