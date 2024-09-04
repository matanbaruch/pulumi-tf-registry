// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

// Export members:
export { DatabaseArgs, DatabaseState } from "./database";
export type Database = import("./database").Database;
export const Database: typeof import("./database").Database = null as any;
utilities.lazyLoad(exports, ["Database"], () => require("./database"));

export { KubernetesClusterArgs, KubernetesClusterState } from "./kubernetesCluster";
export type KubernetesCluster = import("./kubernetesCluster").KubernetesCluster;
export const KubernetesCluster: typeof import("./kubernetesCluster").KubernetesCluster = null as any;
utilities.lazyLoad(exports, ["KubernetesCluster"], () => require("./kubernetesCluster"));

export { KubernetesNodePoolArgs, KubernetesNodePoolState } from "./kubernetesNodePool";
export type KubernetesNodePool = import("./kubernetesNodePool").KubernetesNodePool;
export const KubernetesNodePool: typeof import("./kubernetesNodePool").KubernetesNodePool = null as any;
utilities.lazyLoad(exports, ["KubernetesNodePool"], () => require("./kubernetesNodePool"));

export { NetworkInterfaceArgs, NetworkInterfaceState } from "./networkInterface";
export type NetworkInterface = import("./networkInterface").NetworkInterface;
export const NetworkInterface: typeof import("./networkInterface").NetworkInterface = null as any;
utilities.lazyLoad(exports, ["NetworkInterface"], () => require("./networkInterface"));

export { NetworkInterfaceSecurityGroupAssociationArgs, NetworkInterfaceSecurityGroupAssociationState } from "./networkInterfaceSecurityGroupAssociation";
export type NetworkInterfaceSecurityGroupAssociation = import("./networkInterfaceSecurityGroupAssociation").NetworkInterfaceSecurityGroupAssociation;
export const NetworkInterfaceSecurityGroupAssociation: typeof import("./networkInterfaceSecurityGroupAssociation").NetworkInterfaceSecurityGroupAssociation = null as any;
utilities.lazyLoad(exports, ["NetworkInterfaceSecurityGroupAssociation"], () => require("./networkInterfaceSecurityGroupAssociation"));

export { NetworkSecurityGroupArgs, NetworkSecurityGroupState } from "./networkSecurityGroup";
export type NetworkSecurityGroup = import("./networkSecurityGroup").NetworkSecurityGroup;
export const NetworkSecurityGroup: typeof import("./networkSecurityGroup").NetworkSecurityGroup = null as any;
utilities.lazyLoad(exports, ["NetworkSecurityGroup"], () => require("./networkSecurityGroup"));

export { ObjectStorageArgs, ObjectStorageState } from "./objectStorage";
export type ObjectStorage = import("./objectStorage").ObjectStorage;
export const ObjectStorage: typeof import("./objectStorage").ObjectStorage = null as any;
utilities.lazyLoad(exports, ["ObjectStorage"], () => require("./objectStorage"));

export { ObjectStorageObjectArgs, ObjectStorageObjectState } from "./objectStorageObject";
export type ObjectStorageObject = import("./objectStorageObject").ObjectStorageObject;
export const ObjectStorageObject: typeof import("./objectStorageObject").ObjectStorageObject = null as any;
utilities.lazyLoad(exports, ["ObjectStorageObject"], () => require("./objectStorageObject"));

export { ProviderArgs } from "./provider";
export type Provider = import("./provider").Provider;
export const Provider: typeof import("./provider").Provider = null as any;
utilities.lazyLoad(exports, ["Provider"], () => require("./provider"));

export { PublicIpArgs, PublicIpState } from "./publicIp";
export type PublicIp = import("./publicIp").PublicIp;
export const PublicIp: typeof import("./publicIp").PublicIp = null as any;
utilities.lazyLoad(exports, ["PublicIp"], () => require("./publicIp"));

export { RouteTableArgs, RouteTableState } from "./routeTable";
export type RouteTable = import("./routeTable").RouteTable;
export const RouteTable: typeof import("./routeTable").RouteTable = null as any;
utilities.lazyLoad(exports, ["RouteTable"], () => require("./routeTable"));

export { RouteTableAssociationArgs, RouteTableAssociationState } from "./routeTableAssociation";
export type RouteTableAssociation = import("./routeTableAssociation").RouteTableAssociation;
export const RouteTableAssociation: typeof import("./routeTableAssociation").RouteTableAssociation = null as any;
utilities.lazyLoad(exports, ["RouteTableAssociation"], () => require("./routeTableAssociation"));

export { SubnetArgs, SubnetState } from "./subnet";
export type Subnet = import("./subnet").Subnet;
export const Subnet: typeof import("./subnet").Subnet = null as any;
utilities.lazyLoad(exports, ["Subnet"], () => require("./subnet"));

export { VaultArgs, VaultState } from "./vault";
export type Vault = import("./vault").Vault;
export const Vault: typeof import("./vault").Vault = null as any;
utilities.lazyLoad(exports, ["Vault"], () => require("./vault"));

export { VaultAccessPolicyArgs, VaultAccessPolicyState } from "./vaultAccessPolicy";
export type VaultAccessPolicy = import("./vaultAccessPolicy").VaultAccessPolicy;
export const VaultAccessPolicy: typeof import("./vaultAccessPolicy").VaultAccessPolicy = null as any;
utilities.lazyLoad(exports, ["VaultAccessPolicy"], () => require("./vaultAccessPolicy"));

export { VaultSecretArgs, VaultSecretState } from "./vaultSecret";
export type VaultSecret = import("./vaultSecret").VaultSecret;
export const VaultSecret: typeof import("./vaultSecret").VaultSecret = null as any;
utilities.lazyLoad(exports, ["VaultSecret"], () => require("./vaultSecret"));

export { VirtualMachineArgs, VirtualMachineState } from "./virtualMachine";
export type VirtualMachine = import("./virtualMachine").VirtualMachine;
export const VirtualMachine: typeof import("./virtualMachine").VirtualMachine = null as any;
utilities.lazyLoad(exports, ["VirtualMachine"], () => require("./virtualMachine"));

export { VirtualNetworkArgs, VirtualNetworkState } from "./virtualNetwork";
export type VirtualNetwork = import("./virtualNetwork").VirtualNetwork;
export const VirtualNetwork: typeof import("./virtualNetwork").VirtualNetwork = null as any;
utilities.lazyLoad(exports, ["VirtualNetwork"], () => require("./virtualNetwork"));


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
            case "multy:index/database:Database":
                return new Database(name, <any>undefined, { urn })
            case "multy:index/kubernetesCluster:KubernetesCluster":
                return new KubernetesCluster(name, <any>undefined, { urn })
            case "multy:index/kubernetesNodePool:KubernetesNodePool":
                return new KubernetesNodePool(name, <any>undefined, { urn })
            case "multy:index/networkInterface:NetworkInterface":
                return new NetworkInterface(name, <any>undefined, { urn })
            case "multy:index/networkInterfaceSecurityGroupAssociation:NetworkInterfaceSecurityGroupAssociation":
                return new NetworkInterfaceSecurityGroupAssociation(name, <any>undefined, { urn })
            case "multy:index/networkSecurityGroup:NetworkSecurityGroup":
                return new NetworkSecurityGroup(name, <any>undefined, { urn })
            case "multy:index/objectStorage:ObjectStorage":
                return new ObjectStorage(name, <any>undefined, { urn })
            case "multy:index/objectStorageObject:ObjectStorageObject":
                return new ObjectStorageObject(name, <any>undefined, { urn })
            case "multy:index/publicIp:PublicIp":
                return new PublicIp(name, <any>undefined, { urn })
            case "multy:index/routeTable:RouteTable":
                return new RouteTable(name, <any>undefined, { urn })
            case "multy:index/routeTableAssociation:RouteTableAssociation":
                return new RouteTableAssociation(name, <any>undefined, { urn })
            case "multy:index/subnet:Subnet":
                return new Subnet(name, <any>undefined, { urn })
            case "multy:index/vault:Vault":
                return new Vault(name, <any>undefined, { urn })
            case "multy:index/vaultAccessPolicy:VaultAccessPolicy":
                return new VaultAccessPolicy(name, <any>undefined, { urn })
            case "multy:index/vaultSecret:VaultSecret":
                return new VaultSecret(name, <any>undefined, { urn })
            case "multy:index/virtualMachine:VirtualMachine":
                return new VirtualMachine(name, <any>undefined, { urn })
            case "multy:index/virtualNetwork:VirtualNetwork":
                return new VirtualNetwork(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("multy", "index/database", _module)
pulumi.runtime.registerResourceModule("multy", "index/kubernetesCluster", _module)
pulumi.runtime.registerResourceModule("multy", "index/kubernetesNodePool", _module)
pulumi.runtime.registerResourceModule("multy", "index/networkInterface", _module)
pulumi.runtime.registerResourceModule("multy", "index/networkInterfaceSecurityGroupAssociation", _module)
pulumi.runtime.registerResourceModule("multy", "index/networkSecurityGroup", _module)
pulumi.runtime.registerResourceModule("multy", "index/objectStorage", _module)
pulumi.runtime.registerResourceModule("multy", "index/objectStorageObject", _module)
pulumi.runtime.registerResourceModule("multy", "index/publicIp", _module)
pulumi.runtime.registerResourceModule("multy", "index/routeTable", _module)
pulumi.runtime.registerResourceModule("multy", "index/routeTableAssociation", _module)
pulumi.runtime.registerResourceModule("multy", "index/subnet", _module)
pulumi.runtime.registerResourceModule("multy", "index/vault", _module)
pulumi.runtime.registerResourceModule("multy", "index/vaultAccessPolicy", _module)
pulumi.runtime.registerResourceModule("multy", "index/vaultSecret", _module)
pulumi.runtime.registerResourceModule("multy", "index/virtualMachine", _module)
pulumi.runtime.registerResourceModule("multy", "index/virtualNetwork", _module)
pulumi.runtime.registerResourcePackage("multy", {
    version: utilities.getVersion(),
    constructProvider: (name: string, type: string, urn: string): pulumi.ProviderResource => {
        if (type !== "pulumi:providers:multy") {
            throw new Error(`unknown provider type ${type}`);
        }
        return new Provider(name, <any>undefined, { urn });
    },
});
