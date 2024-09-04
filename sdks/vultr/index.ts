// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

// Export members:
export { BareMetalServerArgs, BareMetalServerState } from "./bareMetalServer";
export type BareMetalServer = import("./bareMetalServer").BareMetalServer;
export const BareMetalServer: typeof import("./bareMetalServer").BareMetalServer = null as any;
utilities.lazyLoad(exports, ["BareMetalServer"], () => require("./bareMetalServer"));

export { BlockStorageArgs, BlockStorageState } from "./blockStorage";
export type BlockStorage = import("./blockStorage").BlockStorage;
export const BlockStorage: typeof import("./blockStorage").BlockStorage = null as any;
utilities.lazyLoad(exports, ["BlockStorage"], () => require("./blockStorage"));

export { ContainerRegistryArgs, ContainerRegistryState } from "./containerRegistry";
export type ContainerRegistry = import("./containerRegistry").ContainerRegistry;
export const ContainerRegistry: typeof import("./containerRegistry").ContainerRegistry = null as any;
utilities.lazyLoad(exports, ["ContainerRegistry"], () => require("./containerRegistry"));

export { DatabaseArgs, DatabaseState } from "./database";
export type Database = import("./database").Database;
export const Database: typeof import("./database").Database = null as any;
utilities.lazyLoad(exports, ["Database"], () => require("./database"));

export { DatabaseConnectionPoolArgs, DatabaseConnectionPoolState } from "./databaseConnectionPool";
export type DatabaseConnectionPool = import("./databaseConnectionPool").DatabaseConnectionPool;
export const DatabaseConnectionPool: typeof import("./databaseConnectionPool").DatabaseConnectionPool = null as any;
utilities.lazyLoad(exports, ["DatabaseConnectionPool"], () => require("./databaseConnectionPool"));

export { DatabaseDbArgs, DatabaseDbState } from "./databaseDb";
export type DatabaseDb = import("./databaseDb").DatabaseDb;
export const DatabaseDb: typeof import("./databaseDb").DatabaseDb = null as any;
utilities.lazyLoad(exports, ["DatabaseDb"], () => require("./databaseDb"));

export { DatabaseReplicaArgs, DatabaseReplicaState } from "./databaseReplica";
export type DatabaseReplica = import("./databaseReplica").DatabaseReplica;
export const DatabaseReplica: typeof import("./databaseReplica").DatabaseReplica = null as any;
utilities.lazyLoad(exports, ["DatabaseReplica"], () => require("./databaseReplica"));

export { DatabaseUserArgs, DatabaseUserState } from "./databaseUser";
export type DatabaseUser = import("./databaseUser").DatabaseUser;
export const DatabaseUser: typeof import("./databaseUser").DatabaseUser = null as any;
utilities.lazyLoad(exports, ["DatabaseUser"], () => require("./databaseUser"));

export { DnsDomainArgs, DnsDomainState } from "./dnsDomain";
export type DnsDomain = import("./dnsDomain").DnsDomain;
export const DnsDomain: typeof import("./dnsDomain").DnsDomain = null as any;
utilities.lazyLoad(exports, ["DnsDomain"], () => require("./dnsDomain"));

export { DnsRecordArgs, DnsRecordState } from "./dnsRecord";
export type DnsRecord = import("./dnsRecord").DnsRecord;
export const DnsRecord: typeof import("./dnsRecord").DnsRecord = null as any;
utilities.lazyLoad(exports, ["DnsRecord"], () => require("./dnsRecord"));

export { FirewallGroupArgs, FirewallGroupState } from "./firewallGroup";
export type FirewallGroup = import("./firewallGroup").FirewallGroup;
export const FirewallGroup: typeof import("./firewallGroup").FirewallGroup = null as any;
utilities.lazyLoad(exports, ["FirewallGroup"], () => require("./firewallGroup"));

export { FirewallRuleArgs, FirewallRuleState } from "./firewallRule";
export type FirewallRule = import("./firewallRule").FirewallRule;
export const FirewallRule: typeof import("./firewallRule").FirewallRule = null as any;
utilities.lazyLoad(exports, ["FirewallRule"], () => require("./firewallRule"));

export { GetAccountArgs, GetAccountResult, GetAccountOutputArgs } from "./getAccount";
export const getAccount: typeof import("./getAccount").getAccount = null as any;
export const getAccountOutput: typeof import("./getAccount").getAccountOutput = null as any;
utilities.lazyLoad(exports, ["getAccount","getAccountOutput"], () => require("./getAccount"));

export { GetApplicationArgs, GetApplicationResult, GetApplicationOutputArgs } from "./getApplication";
export const getApplication: typeof import("./getApplication").getApplication = null as any;
export const getApplicationOutput: typeof import("./getApplication").getApplicationOutput = null as any;
utilities.lazyLoad(exports, ["getApplication","getApplicationOutput"], () => require("./getApplication"));

export { GetBackupArgs, GetBackupResult, GetBackupOutputArgs } from "./getBackup";
export const getBackup: typeof import("./getBackup").getBackup = null as any;
export const getBackupOutput: typeof import("./getBackup").getBackupOutput = null as any;
utilities.lazyLoad(exports, ["getBackup","getBackupOutput"], () => require("./getBackup"));

export { GetBareMetalPlanArgs, GetBareMetalPlanResult, GetBareMetalPlanOutputArgs } from "./getBareMetalPlan";
export const getBareMetalPlan: typeof import("./getBareMetalPlan").getBareMetalPlan = null as any;
export const getBareMetalPlanOutput: typeof import("./getBareMetalPlan").getBareMetalPlanOutput = null as any;
utilities.lazyLoad(exports, ["getBareMetalPlan","getBareMetalPlanOutput"], () => require("./getBareMetalPlan"));

export { GetBareMetalServerArgs, GetBareMetalServerResult, GetBareMetalServerOutputArgs } from "./getBareMetalServer";
export const getBareMetalServer: typeof import("./getBareMetalServer").getBareMetalServer = null as any;
export const getBareMetalServerOutput: typeof import("./getBareMetalServer").getBareMetalServerOutput = null as any;
utilities.lazyLoad(exports, ["getBareMetalServer","getBareMetalServerOutput"], () => require("./getBareMetalServer"));

export { GetBlockStorageArgs, GetBlockStorageResult, GetBlockStorageOutputArgs } from "./getBlockStorage";
export const getBlockStorage: typeof import("./getBlockStorage").getBlockStorage = null as any;
export const getBlockStorageOutput: typeof import("./getBlockStorage").getBlockStorageOutput = null as any;
utilities.lazyLoad(exports, ["getBlockStorage","getBlockStorageOutput"], () => require("./getBlockStorage"));

export { GetContainerRegistryArgs, GetContainerRegistryResult, GetContainerRegistryOutputArgs } from "./getContainerRegistry";
export const getContainerRegistry: typeof import("./getContainerRegistry").getContainerRegistry = null as any;
export const getContainerRegistryOutput: typeof import("./getContainerRegistry").getContainerRegistryOutput = null as any;
utilities.lazyLoad(exports, ["getContainerRegistry","getContainerRegistryOutput"], () => require("./getContainerRegistry"));

export { GetDatabaseArgs, GetDatabaseResult, GetDatabaseOutputArgs } from "./getDatabase";
export const getDatabase: typeof import("./getDatabase").getDatabase = null as any;
export const getDatabaseOutput: typeof import("./getDatabase").getDatabaseOutput = null as any;
utilities.lazyLoad(exports, ["getDatabase","getDatabaseOutput"], () => require("./getDatabase"));

export { GetDnsDomainArgs, GetDnsDomainResult, GetDnsDomainOutputArgs } from "./getDnsDomain";
export const getDnsDomain: typeof import("./getDnsDomain").getDnsDomain = null as any;
export const getDnsDomainOutput: typeof import("./getDnsDomain").getDnsDomainOutput = null as any;
utilities.lazyLoad(exports, ["getDnsDomain","getDnsDomainOutput"], () => require("./getDnsDomain"));

export { GetFirewallGroupArgs, GetFirewallGroupResult, GetFirewallGroupOutputArgs } from "./getFirewallGroup";
export const getFirewallGroup: typeof import("./getFirewallGroup").getFirewallGroup = null as any;
export const getFirewallGroupOutput: typeof import("./getFirewallGroup").getFirewallGroupOutput = null as any;
utilities.lazyLoad(exports, ["getFirewallGroup","getFirewallGroupOutput"], () => require("./getFirewallGroup"));

export { GetInferenceArgs, GetInferenceResult, GetInferenceOutputArgs } from "./getInference";
export const getInference: typeof import("./getInference").getInference = null as any;
export const getInferenceOutput: typeof import("./getInference").getInferenceOutput = null as any;
utilities.lazyLoad(exports, ["getInference","getInferenceOutput"], () => require("./getInference"));

export { GetInstanceArgs, GetInstanceResult, GetInstanceOutputArgs } from "./getInstance";
export const getInstance: typeof import("./getInstance").getInstance = null as any;
export const getInstanceOutput: typeof import("./getInstance").getInstanceOutput = null as any;
utilities.lazyLoad(exports, ["getInstance","getInstanceOutput"], () => require("./getInstance"));

export { GetInstanceIpv4Args, GetInstanceIpv4Result, GetInstanceIpv4OutputArgs } from "./getInstanceIpv4";
export const getInstanceIpv4: typeof import("./getInstanceIpv4").getInstanceIpv4 = null as any;
export const getInstanceIpv4Output: typeof import("./getInstanceIpv4").getInstanceIpv4Output = null as any;
utilities.lazyLoad(exports, ["getInstanceIpv4","getInstanceIpv4Output"], () => require("./getInstanceIpv4"));

export { GetInstancesArgs, GetInstancesResult, GetInstancesOutputArgs } from "./getInstances";
export const getInstances: typeof import("./getInstances").getInstances = null as any;
export const getInstancesOutput: typeof import("./getInstances").getInstancesOutput = null as any;
utilities.lazyLoad(exports, ["getInstances","getInstancesOutput"], () => require("./getInstances"));

export { GetIsoPrivateArgs, GetIsoPrivateResult, GetIsoPrivateOutputArgs } from "./getIsoPrivate";
export const getIsoPrivate: typeof import("./getIsoPrivate").getIsoPrivate = null as any;
export const getIsoPrivateOutput: typeof import("./getIsoPrivate").getIsoPrivateOutput = null as any;
utilities.lazyLoad(exports, ["getIsoPrivate","getIsoPrivateOutput"], () => require("./getIsoPrivate"));

export { GetIsoPublicArgs, GetIsoPublicResult, GetIsoPublicOutputArgs } from "./getIsoPublic";
export const getIsoPublic: typeof import("./getIsoPublic").getIsoPublic = null as any;
export const getIsoPublicOutput: typeof import("./getIsoPublic").getIsoPublicOutput = null as any;
utilities.lazyLoad(exports, ["getIsoPublic","getIsoPublicOutput"], () => require("./getIsoPublic"));

export { GetKubernetesArgs, GetKubernetesResult, GetKubernetesOutputArgs } from "./getKubernetes";
export const getKubernetes: typeof import("./getKubernetes").getKubernetes = null as any;
export const getKubernetesOutput: typeof import("./getKubernetes").getKubernetesOutput = null as any;
utilities.lazyLoad(exports, ["getKubernetes","getKubernetesOutput"], () => require("./getKubernetes"));

export { GetLoadBalancerArgs, GetLoadBalancerResult, GetLoadBalancerOutputArgs } from "./getLoadBalancer";
export const getLoadBalancer: typeof import("./getLoadBalancer").getLoadBalancer = null as any;
export const getLoadBalancerOutput: typeof import("./getLoadBalancer").getLoadBalancerOutput = null as any;
utilities.lazyLoad(exports, ["getLoadBalancer","getLoadBalancerOutput"], () => require("./getLoadBalancer"));

export { GetObjectStorageArgs, GetObjectStorageResult, GetObjectStorageOutputArgs } from "./getObjectStorage";
export const getObjectStorage: typeof import("./getObjectStorage").getObjectStorage = null as any;
export const getObjectStorageOutput: typeof import("./getObjectStorage").getObjectStorageOutput = null as any;
utilities.lazyLoad(exports, ["getObjectStorage","getObjectStorageOutput"], () => require("./getObjectStorage"));

export { GetObjectStorageClusterArgs, GetObjectStorageClusterResult, GetObjectStorageClusterOutputArgs } from "./getObjectStorageCluster";
export const getObjectStorageCluster: typeof import("./getObjectStorageCluster").getObjectStorageCluster = null as any;
export const getObjectStorageClusterOutput: typeof import("./getObjectStorageCluster").getObjectStorageClusterOutput = null as any;
utilities.lazyLoad(exports, ["getObjectStorageCluster","getObjectStorageClusterOutput"], () => require("./getObjectStorageCluster"));

export { GetOsArgs, GetOsResult, GetOsOutputArgs } from "./getOs";
export const getOs: typeof import("./getOs").getOs = null as any;
export const getOsOutput: typeof import("./getOs").getOsOutput = null as any;
utilities.lazyLoad(exports, ["getOs","getOsOutput"], () => require("./getOs"));

export { GetPlanArgs, GetPlanResult, GetPlanOutputArgs } from "./getPlan";
export const getPlan: typeof import("./getPlan").getPlan = null as any;
export const getPlanOutput: typeof import("./getPlan").getPlanOutput = null as any;
utilities.lazyLoad(exports, ["getPlan","getPlanOutput"], () => require("./getPlan"));

export { GetRegionArgs, GetRegionResult, GetRegionOutputArgs } from "./getRegion";
export const getRegion: typeof import("./getRegion").getRegion = null as any;
export const getRegionOutput: typeof import("./getRegion").getRegionOutput = null as any;
utilities.lazyLoad(exports, ["getRegion","getRegionOutput"], () => require("./getRegion"));

export { GetReservedIpArgs, GetReservedIpResult, GetReservedIpOutputArgs } from "./getReservedIp";
export const getReservedIp: typeof import("./getReservedIp").getReservedIp = null as any;
export const getReservedIpOutput: typeof import("./getReservedIp").getReservedIpOutput = null as any;
utilities.lazyLoad(exports, ["getReservedIp","getReservedIpOutput"], () => require("./getReservedIp"));

export { GetReverseIpv4Args, GetReverseIpv4Result, GetReverseIpv4OutputArgs } from "./getReverseIpv4";
export const getReverseIpv4: typeof import("./getReverseIpv4").getReverseIpv4 = null as any;
export const getReverseIpv4Output: typeof import("./getReverseIpv4").getReverseIpv4Output = null as any;
utilities.lazyLoad(exports, ["getReverseIpv4","getReverseIpv4Output"], () => require("./getReverseIpv4"));

export { GetReverseIpv6Args, GetReverseIpv6Result, GetReverseIpv6OutputArgs } from "./getReverseIpv6";
export const getReverseIpv6: typeof import("./getReverseIpv6").getReverseIpv6 = null as any;
export const getReverseIpv6Output: typeof import("./getReverseIpv6").getReverseIpv6Output = null as any;
utilities.lazyLoad(exports, ["getReverseIpv6","getReverseIpv6Output"], () => require("./getReverseIpv6"));

export { GetSnapshotArgs, GetSnapshotResult, GetSnapshotOutputArgs } from "./getSnapshot";
export const getSnapshot: typeof import("./getSnapshot").getSnapshot = null as any;
export const getSnapshotOutput: typeof import("./getSnapshot").getSnapshotOutput = null as any;
utilities.lazyLoad(exports, ["getSnapshot","getSnapshotOutput"], () => require("./getSnapshot"));

export { GetSshKeyArgs, GetSshKeyResult, GetSshKeyOutputArgs } from "./getSshKey";
export const getSshKey: typeof import("./getSshKey").getSshKey = null as any;
export const getSshKeyOutput: typeof import("./getSshKey").getSshKeyOutput = null as any;
utilities.lazyLoad(exports, ["getSshKey","getSshKeyOutput"], () => require("./getSshKey"));

export { GetStartupScriptArgs, GetStartupScriptResult, GetStartupScriptOutputArgs } from "./getStartupScript";
export const getStartupScript: typeof import("./getStartupScript").getStartupScript = null as any;
export const getStartupScriptOutput: typeof import("./getStartupScript").getStartupScriptOutput = null as any;
utilities.lazyLoad(exports, ["getStartupScript","getStartupScriptOutput"], () => require("./getStartupScript"));

export { GetUserArgs, GetUserResult, GetUserOutputArgs } from "./getUser";
export const getUser: typeof import("./getUser").getUser = null as any;
export const getUserOutput: typeof import("./getUser").getUserOutput = null as any;
utilities.lazyLoad(exports, ["getUser","getUserOutput"], () => require("./getUser"));

export { GetVpcArgs, GetVpcResult, GetVpcOutputArgs } from "./getVpc";
export const getVpc: typeof import("./getVpc").getVpc = null as any;
export const getVpcOutput: typeof import("./getVpc").getVpcOutput = null as any;
utilities.lazyLoad(exports, ["getVpc","getVpcOutput"], () => require("./getVpc"));

export { GetVpc2Args, GetVpc2Result, GetVpc2OutputArgs } from "./getVpc2";
export const getVpc2: typeof import("./getVpc2").getVpc2 = null as any;
export const getVpc2Output: typeof import("./getVpc2").getVpc2Output = null as any;
utilities.lazyLoad(exports, ["getVpc2","getVpc2Output"], () => require("./getVpc2"));

export { InferenceArgs, InferenceState } from "./inference";
export type Inference = import("./inference").Inference;
export const Inference: typeof import("./inference").Inference = null as any;
utilities.lazyLoad(exports, ["Inference"], () => require("./inference"));

export { InstanceArgs, InstanceState } from "./instance";
export type Instance = import("./instance").Instance;
export const Instance: typeof import("./instance").Instance = null as any;
utilities.lazyLoad(exports, ["Instance"], () => require("./instance"));

export { InstanceIpv4Args, InstanceIpv4State } from "./instanceIpv4";
export type InstanceIpv4 = import("./instanceIpv4").InstanceIpv4;
export const InstanceIpv4: typeof import("./instanceIpv4").InstanceIpv4 = null as any;
utilities.lazyLoad(exports, ["InstanceIpv4"], () => require("./instanceIpv4"));

export { IsoPrivateArgs, IsoPrivateState } from "./isoPrivate";
export type IsoPrivate = import("./isoPrivate").IsoPrivate;
export const IsoPrivate: typeof import("./isoPrivate").IsoPrivate = null as any;
utilities.lazyLoad(exports, ["IsoPrivate"], () => require("./isoPrivate"));

export { KubernetesArgs, KubernetesState } from "./kubernetes";
export type Kubernetes = import("./kubernetes").Kubernetes;
export const Kubernetes: typeof import("./kubernetes").Kubernetes = null as any;
utilities.lazyLoad(exports, ["Kubernetes"], () => require("./kubernetes"));

export { KubernetesNodePoolsArgs, KubernetesNodePoolsState } from "./kubernetesNodePools";
export type KubernetesNodePools = import("./kubernetesNodePools").KubernetesNodePools;
export const KubernetesNodePools: typeof import("./kubernetesNodePools").KubernetesNodePools = null as any;
utilities.lazyLoad(exports, ["KubernetesNodePools"], () => require("./kubernetesNodePools"));

export { LoadBalancerArgs, LoadBalancerState } from "./loadBalancer";
export type LoadBalancer = import("./loadBalancer").LoadBalancer;
export const LoadBalancer: typeof import("./loadBalancer").LoadBalancer = null as any;
utilities.lazyLoad(exports, ["LoadBalancer"], () => require("./loadBalancer"));

export { ObjectStorageArgs, ObjectStorageState } from "./objectStorage";
export type ObjectStorage = import("./objectStorage").ObjectStorage;
export const ObjectStorage: typeof import("./objectStorage").ObjectStorage = null as any;
utilities.lazyLoad(exports, ["ObjectStorage"], () => require("./objectStorage"));

export { ProviderArgs } from "./provider";
export type Provider = import("./provider").Provider;
export const Provider: typeof import("./provider").Provider = null as any;
utilities.lazyLoad(exports, ["Provider"], () => require("./provider"));

export { ReservedIpArgs, ReservedIpState } from "./reservedIp";
export type ReservedIp = import("./reservedIp").ReservedIp;
export const ReservedIp: typeof import("./reservedIp").ReservedIp = null as any;
utilities.lazyLoad(exports, ["ReservedIp"], () => require("./reservedIp"));

export { ReverseIpv4Args, ReverseIpv4State } from "./reverseIpv4";
export type ReverseIpv4 = import("./reverseIpv4").ReverseIpv4;
export const ReverseIpv4: typeof import("./reverseIpv4").ReverseIpv4 = null as any;
utilities.lazyLoad(exports, ["ReverseIpv4"], () => require("./reverseIpv4"));

export { ReverseIpv6Args, ReverseIpv6State } from "./reverseIpv6";
export type ReverseIpv6 = import("./reverseIpv6").ReverseIpv6;
export const ReverseIpv6: typeof import("./reverseIpv6").ReverseIpv6 = null as any;
utilities.lazyLoad(exports, ["ReverseIpv6"], () => require("./reverseIpv6"));

export { SnapshotArgs, SnapshotState } from "./snapshot";
export type Snapshot = import("./snapshot").Snapshot;
export const Snapshot: typeof import("./snapshot").Snapshot = null as any;
utilities.lazyLoad(exports, ["Snapshot"], () => require("./snapshot"));

export { SnapshotFromUrlArgs, SnapshotFromUrlState } from "./snapshotFromUrl";
export type SnapshotFromUrl = import("./snapshotFromUrl").SnapshotFromUrl;
export const SnapshotFromUrl: typeof import("./snapshotFromUrl").SnapshotFromUrl = null as any;
utilities.lazyLoad(exports, ["SnapshotFromUrl"], () => require("./snapshotFromUrl"));

export { SshKeyArgs, SshKeyState } from "./sshKey";
export type SshKey = import("./sshKey").SshKey;
export const SshKey: typeof import("./sshKey").SshKey = null as any;
utilities.lazyLoad(exports, ["SshKey"], () => require("./sshKey"));

export { StartupScriptArgs, StartupScriptState } from "./startupScript";
export type StartupScript = import("./startupScript").StartupScript;
export const StartupScript: typeof import("./startupScript").StartupScript = null as any;
utilities.lazyLoad(exports, ["StartupScript"], () => require("./startupScript"));

export { UserArgs, UserState } from "./user";
export type User = import("./user").User;
export const User: typeof import("./user").User = null as any;
utilities.lazyLoad(exports, ["User"], () => require("./user"));

export { VpcArgs, VpcState } from "./vpc";
export type Vpc = import("./vpc").Vpc;
export const Vpc: typeof import("./vpc").Vpc = null as any;
utilities.lazyLoad(exports, ["Vpc"], () => require("./vpc"));

export { Vpc2Args, Vpc2State } from "./vpc2";
export type Vpc2 = import("./vpc2").Vpc2;
export const Vpc2: typeof import("./vpc2").Vpc2 = null as any;
utilities.lazyLoad(exports, ["Vpc2"], () => require("./vpc2"));


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
            case "vultr:index/bareMetalServer:BareMetalServer":
                return new BareMetalServer(name, <any>undefined, { urn })
            case "vultr:index/blockStorage:BlockStorage":
                return new BlockStorage(name, <any>undefined, { urn })
            case "vultr:index/containerRegistry:ContainerRegistry":
                return new ContainerRegistry(name, <any>undefined, { urn })
            case "vultr:index/database:Database":
                return new Database(name, <any>undefined, { urn })
            case "vultr:index/databaseConnectionPool:DatabaseConnectionPool":
                return new DatabaseConnectionPool(name, <any>undefined, { urn })
            case "vultr:index/databaseDb:DatabaseDb":
                return new DatabaseDb(name, <any>undefined, { urn })
            case "vultr:index/databaseReplica:DatabaseReplica":
                return new DatabaseReplica(name, <any>undefined, { urn })
            case "vultr:index/databaseUser:DatabaseUser":
                return new DatabaseUser(name, <any>undefined, { urn })
            case "vultr:index/dnsDomain:DnsDomain":
                return new DnsDomain(name, <any>undefined, { urn })
            case "vultr:index/dnsRecord:DnsRecord":
                return new DnsRecord(name, <any>undefined, { urn })
            case "vultr:index/firewallGroup:FirewallGroup":
                return new FirewallGroup(name, <any>undefined, { urn })
            case "vultr:index/firewallRule:FirewallRule":
                return new FirewallRule(name, <any>undefined, { urn })
            case "vultr:index/inference:Inference":
                return new Inference(name, <any>undefined, { urn })
            case "vultr:index/instance:Instance":
                return new Instance(name, <any>undefined, { urn })
            case "vultr:index/instanceIpv4:InstanceIpv4":
                return new InstanceIpv4(name, <any>undefined, { urn })
            case "vultr:index/isoPrivate:IsoPrivate":
                return new IsoPrivate(name, <any>undefined, { urn })
            case "vultr:index/kubernetes:Kubernetes":
                return new Kubernetes(name, <any>undefined, { urn })
            case "vultr:index/kubernetesNodePools:KubernetesNodePools":
                return new KubernetesNodePools(name, <any>undefined, { urn })
            case "vultr:index/loadBalancer:LoadBalancer":
                return new LoadBalancer(name, <any>undefined, { urn })
            case "vultr:index/objectStorage:ObjectStorage":
                return new ObjectStorage(name, <any>undefined, { urn })
            case "vultr:index/reservedIp:ReservedIp":
                return new ReservedIp(name, <any>undefined, { urn })
            case "vultr:index/reverseIpv4:ReverseIpv4":
                return new ReverseIpv4(name, <any>undefined, { urn })
            case "vultr:index/reverseIpv6:ReverseIpv6":
                return new ReverseIpv6(name, <any>undefined, { urn })
            case "vultr:index/snapshot:Snapshot":
                return new Snapshot(name, <any>undefined, { urn })
            case "vultr:index/snapshotFromUrl:SnapshotFromUrl":
                return new SnapshotFromUrl(name, <any>undefined, { urn })
            case "vultr:index/sshKey:SshKey":
                return new SshKey(name, <any>undefined, { urn })
            case "vultr:index/startupScript:StartupScript":
                return new StartupScript(name, <any>undefined, { urn })
            case "vultr:index/user:User":
                return new User(name, <any>undefined, { urn })
            case "vultr:index/vpc2:Vpc2":
                return new Vpc2(name, <any>undefined, { urn })
            case "vultr:index/vpc:Vpc":
                return new Vpc(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("vultr", "index/bareMetalServer", _module)
pulumi.runtime.registerResourceModule("vultr", "index/blockStorage", _module)
pulumi.runtime.registerResourceModule("vultr", "index/containerRegistry", _module)
pulumi.runtime.registerResourceModule("vultr", "index/database", _module)
pulumi.runtime.registerResourceModule("vultr", "index/databaseConnectionPool", _module)
pulumi.runtime.registerResourceModule("vultr", "index/databaseDb", _module)
pulumi.runtime.registerResourceModule("vultr", "index/databaseReplica", _module)
pulumi.runtime.registerResourceModule("vultr", "index/databaseUser", _module)
pulumi.runtime.registerResourceModule("vultr", "index/dnsDomain", _module)
pulumi.runtime.registerResourceModule("vultr", "index/dnsRecord", _module)
pulumi.runtime.registerResourceModule("vultr", "index/firewallGroup", _module)
pulumi.runtime.registerResourceModule("vultr", "index/firewallRule", _module)
pulumi.runtime.registerResourceModule("vultr", "index/inference", _module)
pulumi.runtime.registerResourceModule("vultr", "index/instance", _module)
pulumi.runtime.registerResourceModule("vultr", "index/instanceIpv4", _module)
pulumi.runtime.registerResourceModule("vultr", "index/isoPrivate", _module)
pulumi.runtime.registerResourceModule("vultr", "index/kubernetes", _module)
pulumi.runtime.registerResourceModule("vultr", "index/kubernetesNodePools", _module)
pulumi.runtime.registerResourceModule("vultr", "index/loadBalancer", _module)
pulumi.runtime.registerResourceModule("vultr", "index/objectStorage", _module)
pulumi.runtime.registerResourceModule("vultr", "index/reservedIp", _module)
pulumi.runtime.registerResourceModule("vultr", "index/reverseIpv4", _module)
pulumi.runtime.registerResourceModule("vultr", "index/reverseIpv6", _module)
pulumi.runtime.registerResourceModule("vultr", "index/snapshot", _module)
pulumi.runtime.registerResourceModule("vultr", "index/snapshotFromUrl", _module)
pulumi.runtime.registerResourceModule("vultr", "index/sshKey", _module)
pulumi.runtime.registerResourceModule("vultr", "index/startupScript", _module)
pulumi.runtime.registerResourceModule("vultr", "index/user", _module)
pulumi.runtime.registerResourceModule("vultr", "index/vpc", _module)
pulumi.runtime.registerResourceModule("vultr", "index/vpc2", _module)
pulumi.runtime.registerResourcePackage("vultr", {
    version: utilities.getVersion(),
    constructProvider: (name: string, type: string, urn: string): pulumi.ProviderResource => {
        if (type !== "pulumi:providers:vultr") {
            throw new Error(`unknown provider type ${type}`);
        }
        return new Provider(name, <any>undefined, { urn });
    },
});
