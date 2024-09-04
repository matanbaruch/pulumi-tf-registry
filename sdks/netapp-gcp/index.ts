// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

// Export members:
export { ActiveDirectoryArgs, ActiveDirectoryState } from "./activeDirectory";
export type ActiveDirectory = import("./activeDirectory").ActiveDirectory;
export const ActiveDirectory: typeof import("./activeDirectory").ActiveDirectory = null as any;
utilities.lazyLoad(exports, ["ActiveDirectory"], () => require("./activeDirectory"));

export { GetActiveDirectoryArgs, GetActiveDirectoryResult, GetActiveDirectoryOutputArgs } from "./getActiveDirectory";
export const getActiveDirectory: typeof import("./getActiveDirectory").getActiveDirectory = null as any;
export const getActiveDirectoryOutput: typeof import("./getActiveDirectory").getActiveDirectoryOutput = null as any;
utilities.lazyLoad(exports, ["getActiveDirectory","getActiveDirectoryOutput"], () => require("./getActiveDirectory"));

export { GetVolumeArgs, GetVolumeResult, GetVolumeOutputArgs } from "./getVolume";
export const getVolume: typeof import("./getVolume").getVolume = null as any;
export const getVolumeOutput: typeof import("./getVolume").getVolumeOutput = null as any;
utilities.lazyLoad(exports, ["getVolume","getVolumeOutput"], () => require("./getVolume"));

export { KmsConfigArgs, KmsConfigState } from "./kmsConfig";
export type KmsConfig = import("./kmsConfig").KmsConfig;
export const KmsConfig: typeof import("./kmsConfig").KmsConfig = null as any;
utilities.lazyLoad(exports, ["KmsConfig"], () => require("./kmsConfig"));

export { ProviderArgs } from "./provider";
export type Provider = import("./provider").Provider;
export const Provider: typeof import("./provider").Provider = null as any;
utilities.lazyLoad(exports, ["Provider"], () => require("./provider"));

export { SnapshotArgs, SnapshotState } from "./snapshot";
export type Snapshot = import("./snapshot").Snapshot;
export const Snapshot: typeof import("./snapshot").Snapshot = null as any;
utilities.lazyLoad(exports, ["Snapshot"], () => require("./snapshot"));

export { StoragePoolArgs, StoragePoolState } from "./storagePool";
export type StoragePool = import("./storagePool").StoragePool;
export const StoragePool: typeof import("./storagePool").StoragePool = null as any;
utilities.lazyLoad(exports, ["StoragePool"], () => require("./storagePool"));

export { VolumeArgs, VolumeState } from "./volume";
export type Volume = import("./volume").Volume;
export const Volume: typeof import("./volume").Volume = null as any;
utilities.lazyLoad(exports, ["Volume"], () => require("./volume"));

export { VolumeBackupArgs, VolumeBackupState } from "./volumeBackup";
export type VolumeBackup = import("./volumeBackup").VolumeBackup;
export const VolumeBackup: typeof import("./volumeBackup").VolumeBackup = null as any;
utilities.lazyLoad(exports, ["VolumeBackup"], () => require("./volumeBackup"));

export { VolumeReplicationArgs, VolumeReplicationState } from "./volumeReplication";
export type VolumeReplication = import("./volumeReplication").VolumeReplication;
export const VolumeReplication: typeof import("./volumeReplication").VolumeReplication = null as any;
utilities.lazyLoad(exports, ["VolumeReplication"], () => require("./volumeReplication"));


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
            case "netapp-gcp:index/activeDirectory:ActiveDirectory":
                return new ActiveDirectory(name, <any>undefined, { urn })
            case "netapp-gcp:index/kmsConfig:KmsConfig":
                return new KmsConfig(name, <any>undefined, { urn })
            case "netapp-gcp:index/snapshot:Snapshot":
                return new Snapshot(name, <any>undefined, { urn })
            case "netapp-gcp:index/storagePool:StoragePool":
                return new StoragePool(name, <any>undefined, { urn })
            case "netapp-gcp:index/volume:Volume":
                return new Volume(name, <any>undefined, { urn })
            case "netapp-gcp:index/volumeBackup:VolumeBackup":
                return new VolumeBackup(name, <any>undefined, { urn })
            case "netapp-gcp:index/volumeReplication:VolumeReplication":
                return new VolumeReplication(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("netapp-gcp", "index/activeDirectory", _module)
pulumi.runtime.registerResourceModule("netapp-gcp", "index/kmsConfig", _module)
pulumi.runtime.registerResourceModule("netapp-gcp", "index/snapshot", _module)
pulumi.runtime.registerResourceModule("netapp-gcp", "index/storagePool", _module)
pulumi.runtime.registerResourceModule("netapp-gcp", "index/volume", _module)
pulumi.runtime.registerResourceModule("netapp-gcp", "index/volumeBackup", _module)
pulumi.runtime.registerResourceModule("netapp-gcp", "index/volumeReplication", _module)
pulumi.runtime.registerResourcePackage("netapp-gcp", {
    version: utilities.getVersion(),
    constructProvider: (name: string, type: string, urn: string): pulumi.ProviderResource => {
        if (type !== "pulumi:providers:netapp-gcp") {
            throw new Error(`unknown provider type ${type}`);
        }
        return new Provider(name, <any>undefined, { urn });
    },
});
