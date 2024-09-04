// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

// Export members:
export { ClusterArgs, ClusterState } from "./cluster";
export type Cluster = import("./cluster").Cluster;
export const Cluster: typeof import("./cluster").Cluster = null as any;
utilities.lazyLoad(exports, ["Cluster"], () => require("./cluster"));

export { ClusterAutoscalerArgs, ClusterAutoscalerState } from "./clusterAutoscaler";
export type ClusterAutoscaler = import("./clusterAutoscaler").ClusterAutoscaler;
export const ClusterAutoscaler: typeof import("./clusterAutoscaler").ClusterAutoscaler = null as any;
utilities.lazyLoad(exports, ["ClusterAutoscaler"], () => require("./clusterAutoscaler"));

export { ClusterRosaClassicArgs, ClusterRosaClassicState } from "./clusterRosaClassic";
export type ClusterRosaClassic = import("./clusterRosaClassic").ClusterRosaClassic;
export const ClusterRosaClassic: typeof import("./clusterRosaClassic").ClusterRosaClassic = null as any;
utilities.lazyLoad(exports, ["ClusterRosaClassic"], () => require("./clusterRosaClassic"));

export { ClusterRosaHcpArgs, ClusterRosaHcpState } from "./clusterRosaHcp";
export type ClusterRosaHcp = import("./clusterRosaHcp").ClusterRosaHcp;
export const ClusterRosaHcp: typeof import("./clusterRosaHcp").ClusterRosaHcp = null as any;
utilities.lazyLoad(exports, ["ClusterRosaHcp"], () => require("./clusterRosaHcp"));

export { ClusterWaitArgs, ClusterWaitState } from "./clusterWait";
export type ClusterWait = import("./clusterWait").ClusterWait;
export const ClusterWait: typeof import("./clusterWait").ClusterWait = null as any;
utilities.lazyLoad(exports, ["ClusterWait"], () => require("./clusterWait"));

export { DefaultIngressArgs, DefaultIngressState } from "./defaultIngress";
export type DefaultIngress = import("./defaultIngress").DefaultIngress;
export const DefaultIngress: typeof import("./defaultIngress").DefaultIngress = null as any;
utilities.lazyLoad(exports, ["DefaultIngress"], () => require("./defaultIngress"));

export { DnsDomainArgs, DnsDomainState } from "./dnsDomain";
export type DnsDomain = import("./dnsDomain").DnsDomain;
export const DnsDomain: typeof import("./dnsDomain").DnsDomain = null as any;
utilities.lazyLoad(exports, ["DnsDomain"], () => require("./dnsDomain"));

export { GetCloudProvidersArgs, GetCloudProvidersResult, GetCloudProvidersOutputArgs } from "./getCloudProviders";
export const getCloudProviders: typeof import("./getCloudProviders").getCloudProviders = null as any;
export const getCloudProvidersOutput: typeof import("./getCloudProviders").getCloudProvidersOutput = null as any;
utilities.lazyLoad(exports, ["getCloudProviders","getCloudProvidersOutput"], () => require("./getCloudProviders"));

export { GetClusterRosaClassicArgs, GetClusterRosaClassicResult, GetClusterRosaClassicOutputArgs } from "./getClusterRosaClassic";
export const getClusterRosaClassic: typeof import("./getClusterRosaClassic").getClusterRosaClassic = null as any;
export const getClusterRosaClassicOutput: typeof import("./getClusterRosaClassic").getClusterRosaClassicOutput = null as any;
utilities.lazyLoad(exports, ["getClusterRosaClassic","getClusterRosaClassicOutput"], () => require("./getClusterRosaClassic"));

export { GetClusterRosaHcpArgs, GetClusterRosaHcpResult, GetClusterRosaHcpOutputArgs } from "./getClusterRosaHcp";
export const getClusterRosaHcp: typeof import("./getClusterRosaHcp").getClusterRosaHcp = null as any;
export const getClusterRosaHcpOutput: typeof import("./getClusterRosaHcp").getClusterRosaHcpOutput = null as any;
utilities.lazyLoad(exports, ["getClusterRosaHcp","getClusterRosaHcpOutput"], () => require("./getClusterRosaHcp"));

export { GetGroupsArgs, GetGroupsResult, GetGroupsOutputArgs } from "./getGroups";
export const getGroups: typeof import("./getGroups").getGroups = null as any;
export const getGroupsOutput: typeof import("./getGroups").getGroupsOutput = null as any;
utilities.lazyLoad(exports, ["getGroups","getGroupsOutput"], () => require("./getGroups"));

export { GetHcpMachinePoolArgs, GetHcpMachinePoolResult, GetHcpMachinePoolOutputArgs } from "./getHcpMachinePool";
export const getHcpMachinePool: typeof import("./getHcpMachinePool").getHcpMachinePool = null as any;
export const getHcpMachinePoolOutput: typeof import("./getHcpMachinePool").getHcpMachinePoolOutput = null as any;
utilities.lazyLoad(exports, ["getHcpMachinePool","getHcpMachinePoolOutput"], () => require("./getHcpMachinePool"));

export { GetHcpPoliciesResult } from "./getHcpPolicies";
export const getHcpPolicies: typeof import("./getHcpPolicies").getHcpPolicies = null as any;
export const getHcpPoliciesOutput: typeof import("./getHcpPolicies").getHcpPoliciesOutput = null as any;
utilities.lazyLoad(exports, ["getHcpPolicies","getHcpPoliciesOutput"], () => require("./getHcpPolicies"));

export { GetInfoResult } from "./getInfo";
export const getInfo: typeof import("./getInfo").getInfo = null as any;
export const getInfoOutput: typeof import("./getInfo").getInfoOutput = null as any;
utilities.lazyLoad(exports, ["getInfo","getInfoOutput"], () => require("./getInfo"));

export { GetMachinePoolArgs, GetMachinePoolResult, GetMachinePoolOutputArgs } from "./getMachinePool";
export const getMachinePool: typeof import("./getMachinePool").getMachinePool = null as any;
export const getMachinePoolOutput: typeof import("./getMachinePool").getMachinePoolOutput = null as any;
utilities.lazyLoad(exports, ["getMachinePool","getMachinePoolOutput"], () => require("./getMachinePool"));

export { GetMachineTypesResult } from "./getMachineTypes";
export const getMachineTypes: typeof import("./getMachineTypes").getMachineTypes = null as any;
export const getMachineTypesOutput: typeof import("./getMachineTypes").getMachineTypesOutput = null as any;
utilities.lazyLoad(exports, ["getMachineTypes","getMachineTypesOutput"], () => require("./getMachineTypes"));

export { GetPoliciesResult } from "./getPolicies";
export const getPolicies: typeof import("./getPolicies").getPolicies = null as any;
export const getPoliciesOutput: typeof import("./getPolicies").getPoliciesOutput = null as any;
utilities.lazyLoad(exports, ["getPolicies","getPoliciesOutput"], () => require("./getPolicies"));

export { GetRosaHcpOperatorRolesArgs, GetRosaHcpOperatorRolesResult, GetRosaHcpOperatorRolesOutputArgs } from "./getRosaHcpOperatorRoles";
export const getRosaHcpOperatorRoles: typeof import("./getRosaHcpOperatorRoles").getRosaHcpOperatorRoles = null as any;
export const getRosaHcpOperatorRolesOutput: typeof import("./getRosaHcpOperatorRoles").getRosaHcpOperatorRolesOutput = null as any;
utilities.lazyLoad(exports, ["getRosaHcpOperatorRoles","getRosaHcpOperatorRolesOutput"], () => require("./getRosaHcpOperatorRoles"));

export { GetRosaOperatorRolesArgs, GetRosaOperatorRolesResult, GetRosaOperatorRolesOutputArgs } from "./getRosaOperatorRoles";
export const getRosaOperatorRoles: typeof import("./getRosaOperatorRoles").getRosaOperatorRoles = null as any;
export const getRosaOperatorRolesOutput: typeof import("./getRosaOperatorRoles").getRosaOperatorRolesOutput = null as any;
utilities.lazyLoad(exports, ["getRosaOperatorRoles","getRosaOperatorRolesOutput"], () => require("./getRosaOperatorRoles"));

export { GetTrustedIpAddressesResult } from "./getTrustedIpAddresses";
export const getTrustedIpAddresses: typeof import("./getTrustedIpAddresses").getTrustedIpAddresses = null as any;
export const getTrustedIpAddressesOutput: typeof import("./getTrustedIpAddresses").getTrustedIpAddressesOutput = null as any;
utilities.lazyLoad(exports, ["getTrustedIpAddresses","getTrustedIpAddressesOutput"], () => require("./getTrustedIpAddresses"));

export { GetVersionsArgs, GetVersionsResult, GetVersionsOutputArgs } from "./getVersions";
export const getVersions: typeof import("./getVersions").getVersions = null as any;
export const getVersionsOutput: typeof import("./getVersions").getVersionsOutput = null as any;
utilities.lazyLoad(exports, ["getVersions","getVersionsOutput"], () => require("./getVersions"));

export { GroupMembershipArgs, GroupMembershipState } from "./groupMembership";
export type GroupMembership = import("./groupMembership").GroupMembership;
export const GroupMembership: typeof import("./groupMembership").GroupMembership = null as any;
utilities.lazyLoad(exports, ["GroupMembership"], () => require("./groupMembership"));

export { HcpClusterAutoscalerArgs, HcpClusterAutoscalerState } from "./hcpClusterAutoscaler";
export type HcpClusterAutoscaler = import("./hcpClusterAutoscaler").HcpClusterAutoscaler;
export const HcpClusterAutoscaler: typeof import("./hcpClusterAutoscaler").HcpClusterAutoscaler = null as any;
utilities.lazyLoad(exports, ["HcpClusterAutoscaler"], () => require("./hcpClusterAutoscaler"));

export { HcpDefaultIngressArgs, HcpDefaultIngressState } from "./hcpDefaultIngress";
export type HcpDefaultIngress = import("./hcpDefaultIngress").HcpDefaultIngress;
export const HcpDefaultIngress: typeof import("./hcpDefaultIngress").HcpDefaultIngress = null as any;
utilities.lazyLoad(exports, ["HcpDefaultIngress"], () => require("./hcpDefaultIngress"));

export { HcpMachinePoolArgs, HcpMachinePoolState } from "./hcpMachinePool";
export type HcpMachinePool = import("./hcpMachinePool").HcpMachinePool;
export const HcpMachinePool: typeof import("./hcpMachinePool").HcpMachinePool = null as any;
utilities.lazyLoad(exports, ["HcpMachinePool"], () => require("./hcpMachinePool"));

export { IdentityProviderArgs, IdentityProviderState } from "./identityProvider";
export type IdentityProvider = import("./identityProvider").IdentityProvider;
export const IdentityProvider: typeof import("./identityProvider").IdentityProvider = null as any;
utilities.lazyLoad(exports, ["IdentityProvider"], () => require("./identityProvider"));

export { KubeletconfigArgs, KubeletconfigState } from "./kubeletconfig";
export type Kubeletconfig = import("./kubeletconfig").Kubeletconfig;
export const Kubeletconfig: typeof import("./kubeletconfig").Kubeletconfig = null as any;
utilities.lazyLoad(exports, ["Kubeletconfig"], () => require("./kubeletconfig"));

export { MachinePoolArgs, MachinePoolState } from "./machinePool";
export type MachinePool = import("./machinePool").MachinePool;
export const MachinePool: typeof import("./machinePool").MachinePool = null as any;
utilities.lazyLoad(exports, ["MachinePool"], () => require("./machinePool"));

export { ProviderArgs } from "./provider";
export type Provider = import("./provider").Provider;
export const Provider: typeof import("./provider").Provider = null as any;
utilities.lazyLoad(exports, ["Provider"], () => require("./provider"));

export { RosaOidcConfigArgs, RosaOidcConfigState } from "./rosaOidcConfig";
export type RosaOidcConfig = import("./rosaOidcConfig").RosaOidcConfig;
export const RosaOidcConfig: typeof import("./rosaOidcConfig").RosaOidcConfig = null as any;
utilities.lazyLoad(exports, ["RosaOidcConfig"], () => require("./rosaOidcConfig"));

export { RosaOidcConfigInputArgs, RosaOidcConfigInputState } from "./rosaOidcConfigInput";
export type RosaOidcConfigInput = import("./rosaOidcConfigInput").RosaOidcConfigInput;
export const RosaOidcConfigInput: typeof import("./rosaOidcConfigInput").RosaOidcConfigInput = null as any;
utilities.lazyLoad(exports, ["RosaOidcConfigInput"], () => require("./rosaOidcConfigInput"));

export { TuningConfigArgs, TuningConfigState } from "./tuningConfig";
export type TuningConfig = import("./tuningConfig").TuningConfig;
export const TuningConfig: typeof import("./tuningConfig").TuningConfig = null as any;
utilities.lazyLoad(exports, ["TuningConfig"], () => require("./tuningConfig"));


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
            case "rhcs:index/cluster:Cluster":
                return new Cluster(name, <any>undefined, { urn })
            case "rhcs:index/clusterAutoscaler:ClusterAutoscaler":
                return new ClusterAutoscaler(name, <any>undefined, { urn })
            case "rhcs:index/clusterRosaClassic:ClusterRosaClassic":
                return new ClusterRosaClassic(name, <any>undefined, { urn })
            case "rhcs:index/clusterRosaHcp:ClusterRosaHcp":
                return new ClusterRosaHcp(name, <any>undefined, { urn })
            case "rhcs:index/clusterWait:ClusterWait":
                return new ClusterWait(name, <any>undefined, { urn })
            case "rhcs:index/defaultIngress:DefaultIngress":
                return new DefaultIngress(name, <any>undefined, { urn })
            case "rhcs:index/dnsDomain:DnsDomain":
                return new DnsDomain(name, <any>undefined, { urn })
            case "rhcs:index/groupMembership:GroupMembership":
                return new GroupMembership(name, <any>undefined, { urn })
            case "rhcs:index/hcpClusterAutoscaler:HcpClusterAutoscaler":
                return new HcpClusterAutoscaler(name, <any>undefined, { urn })
            case "rhcs:index/hcpDefaultIngress:HcpDefaultIngress":
                return new HcpDefaultIngress(name, <any>undefined, { urn })
            case "rhcs:index/hcpMachinePool:HcpMachinePool":
                return new HcpMachinePool(name, <any>undefined, { urn })
            case "rhcs:index/identityProvider:IdentityProvider":
                return new IdentityProvider(name, <any>undefined, { urn })
            case "rhcs:index/kubeletconfig:Kubeletconfig":
                return new Kubeletconfig(name, <any>undefined, { urn })
            case "rhcs:index/machinePool:MachinePool":
                return new MachinePool(name, <any>undefined, { urn })
            case "rhcs:index/rosaOidcConfig:RosaOidcConfig":
                return new RosaOidcConfig(name, <any>undefined, { urn })
            case "rhcs:index/rosaOidcConfigInput:RosaOidcConfigInput":
                return new RosaOidcConfigInput(name, <any>undefined, { urn })
            case "rhcs:index/tuningConfig:TuningConfig":
                return new TuningConfig(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("rhcs", "index/cluster", _module)
pulumi.runtime.registerResourceModule("rhcs", "index/clusterAutoscaler", _module)
pulumi.runtime.registerResourceModule("rhcs", "index/clusterRosaClassic", _module)
pulumi.runtime.registerResourceModule("rhcs", "index/clusterRosaHcp", _module)
pulumi.runtime.registerResourceModule("rhcs", "index/clusterWait", _module)
pulumi.runtime.registerResourceModule("rhcs", "index/defaultIngress", _module)
pulumi.runtime.registerResourceModule("rhcs", "index/dnsDomain", _module)
pulumi.runtime.registerResourceModule("rhcs", "index/groupMembership", _module)
pulumi.runtime.registerResourceModule("rhcs", "index/hcpClusterAutoscaler", _module)
pulumi.runtime.registerResourceModule("rhcs", "index/hcpDefaultIngress", _module)
pulumi.runtime.registerResourceModule("rhcs", "index/hcpMachinePool", _module)
pulumi.runtime.registerResourceModule("rhcs", "index/identityProvider", _module)
pulumi.runtime.registerResourceModule("rhcs", "index/kubeletconfig", _module)
pulumi.runtime.registerResourceModule("rhcs", "index/machinePool", _module)
pulumi.runtime.registerResourceModule("rhcs", "index/rosaOidcConfig", _module)
pulumi.runtime.registerResourceModule("rhcs", "index/rosaOidcConfigInput", _module)
pulumi.runtime.registerResourceModule("rhcs", "index/tuningConfig", _module)
pulumi.runtime.registerResourcePackage("rhcs", {
    version: utilities.getVersion(),
    constructProvider: (name: string, type: string, urn: string): pulumi.ProviderResource => {
        if (type !== "pulumi:providers:rhcs") {
            throw new Error(`unknown provider type ${type}`);
        }
        return new Provider(name, <any>undefined, { urn });
    },
});
