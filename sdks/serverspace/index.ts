// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

// Export members:
export { DomainArgs, DomainState } from "./domain";
export type Domain = import("./domain").Domain;
export const Domain: typeof import("./domain").Domain = null as any;
utilities.lazyLoad(exports, ["Domain"], () => require("./domain"));

export { DomainRecordArgs, DomainRecordState } from "./domainRecord";
export type DomainRecord = import("./domainRecord").DomainRecord;
export const DomainRecord: typeof import("./domainRecord").DomainRecord = null as any;
utilities.lazyLoad(exports, ["DomainRecord"], () => require("./domainRecord"));

export { GetDomainArgs, GetDomainResult, GetDomainOutputArgs } from "./getDomain";
export const getDomain: typeof import("./getDomain").getDomain = null as any;
export const getDomainOutput: typeof import("./getDomain").getDomainOutput = null as any;
utilities.lazyLoad(exports, ["getDomain","getDomainOutput"], () => require("./getDomain"));

export { GetDomainRecordArgs, GetDomainRecordResult, GetDomainRecordOutputArgs } from "./getDomainRecord";
export const getDomainRecord: typeof import("./getDomainRecord").getDomainRecord = null as any;
export const getDomainRecordOutput: typeof import("./getDomainRecord").getDomainRecordOutput = null as any;
utilities.lazyLoad(exports, ["getDomainRecord","getDomainRecordOutput"], () => require("./getDomainRecord"));

export { GetDomainRecordsArgs, GetDomainRecordsResult, GetDomainRecordsOutputArgs } from "./getDomainRecords";
export const getDomainRecords: typeof import("./getDomainRecords").getDomainRecords = null as any;
export const getDomainRecordsOutput: typeof import("./getDomainRecords").getDomainRecordsOutput = null as any;
utilities.lazyLoad(exports, ["getDomainRecords","getDomainRecordsOutput"], () => require("./getDomainRecords"));

export { GetDomainsArgs, GetDomainsResult, GetDomainsOutputArgs } from "./getDomains";
export const getDomains: typeof import("./getDomains").getDomains = null as any;
export const getDomainsOutput: typeof import("./getDomains").getDomainsOutput = null as any;
utilities.lazyLoad(exports, ["getDomains","getDomainsOutput"], () => require("./getDomains"));

export { GetImagesArgs, GetImagesResult, GetImagesOutputArgs } from "./getImages";
export const getImages: typeof import("./getImages").getImages = null as any;
export const getImagesOutput: typeof import("./getImages").getImagesOutput = null as any;
utilities.lazyLoad(exports, ["getImages","getImagesOutput"], () => require("./getImages"));

export { GetLocationsArgs, GetLocationsResult, GetLocationsOutputArgs } from "./getLocations";
export const getLocations: typeof import("./getLocations").getLocations = null as any;
export const getLocationsOutput: typeof import("./getLocations").getLocationsOutput = null as any;
utilities.lazyLoad(exports, ["getLocations","getLocationsOutput"], () => require("./getLocations"));

export { GetNetworkArgs, GetNetworkResult, GetNetworkOutputArgs } from "./getNetwork";
export const getNetwork: typeof import("./getNetwork").getNetwork = null as any;
export const getNetworkOutput: typeof import("./getNetwork").getNetworkOutput = null as any;
utilities.lazyLoad(exports, ["getNetwork","getNetworkOutput"], () => require("./getNetwork"));

export { GetNetworksArgs, GetNetworksResult, GetNetworksOutputArgs } from "./getNetworks";
export const getNetworks: typeof import("./getNetworks").getNetworks = null as any;
export const getNetworksOutput: typeof import("./getNetworks").getNetworksOutput = null as any;
utilities.lazyLoad(exports, ["getNetworks","getNetworksOutput"], () => require("./getNetworks"));

export { GetServerArgs, GetServerResult, GetServerOutputArgs } from "./getServer";
export const getServer: typeof import("./getServer").getServer = null as any;
export const getServerOutput: typeof import("./getServer").getServerOutput = null as any;
utilities.lazyLoad(exports, ["getServer","getServerOutput"], () => require("./getServer"));

export { GetServersArgs, GetServersResult, GetServersOutputArgs } from "./getServers";
export const getServers: typeof import("./getServers").getServers = null as any;
export const getServersOutput: typeof import("./getServers").getServersOutput = null as any;
utilities.lazyLoad(exports, ["getServers","getServersOutput"], () => require("./getServers"));

export { GetSshKeyArgs, GetSshKeyResult, GetSshKeyOutputArgs } from "./getSshKey";
export const getSshKey: typeof import("./getSshKey").getSshKey = null as any;
export const getSshKeyOutput: typeof import("./getSshKey").getSshKeyOutput = null as any;
utilities.lazyLoad(exports, ["getSshKey","getSshKeyOutput"], () => require("./getSshKey"));

export { GetSshKeysArgs, GetSshKeysResult, GetSshKeysOutputArgs } from "./getSshKeys";
export const getSshKeys: typeof import("./getSshKeys").getSshKeys = null as any;
export const getSshKeysOutput: typeof import("./getSshKeys").getSshKeysOutput = null as any;
utilities.lazyLoad(exports, ["getSshKeys","getSshKeysOutput"], () => require("./getSshKeys"));

export { IsolatedNetworkArgs, IsolatedNetworkState } from "./isolatedNetwork";
export type IsolatedNetwork = import("./isolatedNetwork").IsolatedNetwork;
export const IsolatedNetwork: typeof import("./isolatedNetwork").IsolatedNetwork = null as any;
utilities.lazyLoad(exports, ["IsolatedNetwork"], () => require("./isolatedNetwork"));

export { ProviderArgs } from "./provider";
export type Provider = import("./provider").Provider;
export const Provider: typeof import("./provider").Provider = null as any;
utilities.lazyLoad(exports, ["Provider"], () => require("./provider"));

export { ServerArgs, ServerState } from "./server";
export type Server = import("./server").Server;
export const Server: typeof import("./server").Server = null as any;
utilities.lazyLoad(exports, ["Server"], () => require("./server"));

export { SshArgs, SshState } from "./ssh";
export type Ssh = import("./ssh").Ssh;
export const Ssh: typeof import("./ssh").Ssh = null as any;
utilities.lazyLoad(exports, ["Ssh"], () => require("./ssh"));


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
            case "serverspace:index/domain:Domain":
                return new Domain(name, <any>undefined, { urn })
            case "serverspace:index/domainRecord:DomainRecord":
                return new DomainRecord(name, <any>undefined, { urn })
            case "serverspace:index/isolatedNetwork:IsolatedNetwork":
                return new IsolatedNetwork(name, <any>undefined, { urn })
            case "serverspace:index/server:Server":
                return new Server(name, <any>undefined, { urn })
            case "serverspace:index/ssh:Ssh":
                return new Ssh(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("serverspace", "index/domain", _module)
pulumi.runtime.registerResourceModule("serverspace", "index/domainRecord", _module)
pulumi.runtime.registerResourceModule("serverspace", "index/isolatedNetwork", _module)
pulumi.runtime.registerResourceModule("serverspace", "index/server", _module)
pulumi.runtime.registerResourceModule("serverspace", "index/ssh", _module)
pulumi.runtime.registerResourcePackage("serverspace", {
    version: utilities.getVersion(),
    constructProvider: (name: string, type: string, urn: string): pulumi.ProviderResource => {
        if (type !== "pulumi:providers:serverspace") {
            throw new Error(`unknown provider type ${type}`);
        }
        return new Provider(name, <any>undefined, { urn });
    },
});
