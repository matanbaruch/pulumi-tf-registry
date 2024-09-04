// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

// Export members:
export { ArchiveArgs, ArchiveState } from "./archive";
export type Archive = import("./archive").Archive;
export const Archive: typeof import("./archive").Archive = null as any;
utilities.lazyLoad(exports, ["Archive"], () => require("./archive"));

export { ArchiveShareArgs, ArchiveShareState } from "./archiveShare";
export type ArchiveShare = import("./archiveShare").ArchiveShare;
export const ArchiveShare: typeof import("./archiveShare").ArchiveShare = null as any;
utilities.lazyLoad(exports, ["ArchiveShare"], () => require("./archiveShare"));

export { AutoBackupArgs, AutoBackupState } from "./autoBackup";
export type AutoBackup = import("./autoBackup").AutoBackup;
export const AutoBackup: typeof import("./autoBackup").AutoBackup = null as any;
utilities.lazyLoad(exports, ["AutoBackup"], () => require("./autoBackup"));

export { AutoScaleArgs, AutoScaleState } from "./autoScale";
export type AutoScale = import("./autoScale").AutoScale;
export const AutoScale: typeof import("./autoScale").AutoScale = null as any;
utilities.lazyLoad(exports, ["AutoScale"], () => require("./autoScale"));

export { BridgeArgs, BridgeState } from "./bridge";
export type Bridge = import("./bridge").Bridge;
export const Bridge: typeof import("./bridge").Bridge = null as any;
utilities.lazyLoad(exports, ["Bridge"], () => require("./bridge"));

export { CdromArgs, CdromState } from "./cdrom";
export type Cdrom = import("./cdrom").Cdrom;
export const Cdrom: typeof import("./cdrom").Cdrom = null as any;
utilities.lazyLoad(exports, ["Cdrom"], () => require("./cdrom"));

export { CertificateAuthorityArgs, CertificateAuthorityState } from "./certificateAuthority";
export type CertificateAuthority = import("./certificateAuthority").CertificateAuthority;
export const CertificateAuthority: typeof import("./certificateAuthority").CertificateAuthority = null as any;
utilities.lazyLoad(exports, ["CertificateAuthority"], () => require("./certificateAuthority"));

export { ContainerRegistryArgs, ContainerRegistryState } from "./containerRegistry";
export type ContainerRegistry = import("./containerRegistry").ContainerRegistry;
export const ContainerRegistry: typeof import("./containerRegistry").ContainerRegistry = null as any;
utilities.lazyLoad(exports, ["ContainerRegistry"], () => require("./containerRegistry"));

export { DatabaseArgs, DatabaseState } from "./database";
export type Database = import("./database").Database;
export const Database: typeof import("./database").Database = null as any;
utilities.lazyLoad(exports, ["Database"], () => require("./database"));

export { DatabaseReadReplicaArgs, DatabaseReadReplicaState } from "./databaseReadReplica";
export type DatabaseReadReplica = import("./databaseReadReplica").DatabaseReadReplica;
export const DatabaseReadReplica: typeof import("./databaseReadReplica").DatabaseReadReplica = null as any;
utilities.lazyLoad(exports, ["DatabaseReadReplica"], () => require("./databaseReadReplica"));

export { DiskArgs, DiskState } from "./disk";
export type Disk = import("./disk").Disk;
export const Disk: typeof import("./disk").Disk = null as any;
utilities.lazyLoad(exports, ["Disk"], () => require("./disk"));

export { DnsArgs, DnsState } from "./dns";
export type Dns = import("./dns").Dns;
export const Dns: typeof import("./dns").Dns = null as any;
utilities.lazyLoad(exports, ["Dns"], () => require("./dns"));

export { DnsRecordArgs, DnsRecordState } from "./dnsRecord";
export type DnsRecord = import("./dnsRecord").DnsRecord;
export const DnsRecord: typeof import("./dnsRecord").DnsRecord = null as any;
utilities.lazyLoad(exports, ["DnsRecord"], () => require("./dnsRecord"));

export { EnhancedDbArgs, EnhancedDbState } from "./enhancedDb";
export type EnhancedDb = import("./enhancedDb").EnhancedDb;
export const EnhancedDb: typeof import("./enhancedDb").EnhancedDb = null as any;
utilities.lazyLoad(exports, ["EnhancedDb"], () => require("./enhancedDb"));

export { EsmeArgs, EsmeState } from "./esme";
export type Esme = import("./esme").Esme;
export const Esme: typeof import("./esme").Esme = null as any;
utilities.lazyLoad(exports, ["Esme"], () => require("./esme"));

export { GetArchiveArgs, GetArchiveResult, GetArchiveOutputArgs } from "./getArchive";
export const getArchive: typeof import("./getArchive").getArchive = null as any;
export const getArchiveOutput: typeof import("./getArchive").getArchiveOutput = null as any;
utilities.lazyLoad(exports, ["getArchive","getArchiveOutput"], () => require("./getArchive"));

export { GetAutoScaleArgs, GetAutoScaleResult, GetAutoScaleOutputArgs } from "./getAutoScale";
export const getAutoScale: typeof import("./getAutoScale").getAutoScale = null as any;
export const getAutoScaleOutput: typeof import("./getAutoScale").getAutoScaleOutput = null as any;
utilities.lazyLoad(exports, ["getAutoScale","getAutoScaleOutput"], () => require("./getAutoScale"));

export { GetBridgeArgs, GetBridgeResult, GetBridgeOutputArgs } from "./getBridge";
export const getBridge: typeof import("./getBridge").getBridge = null as any;
export const getBridgeOutput: typeof import("./getBridge").getBridgeOutput = null as any;
utilities.lazyLoad(exports, ["getBridge","getBridgeOutput"], () => require("./getBridge"));

export { GetCdromArgs, GetCdromResult, GetCdromOutputArgs } from "./getCdrom";
export const getCdrom: typeof import("./getCdrom").getCdrom = null as any;
export const getCdromOutput: typeof import("./getCdrom").getCdromOutput = null as any;
utilities.lazyLoad(exports, ["getCdrom","getCdromOutput"], () => require("./getCdrom"));

export { GetCertificateAuthorityArgs, GetCertificateAuthorityResult, GetCertificateAuthorityOutputArgs } from "./getCertificateAuthority";
export const getCertificateAuthority: typeof import("./getCertificateAuthority").getCertificateAuthority = null as any;
export const getCertificateAuthorityOutput: typeof import("./getCertificateAuthority").getCertificateAuthorityOutput = null as any;
utilities.lazyLoad(exports, ["getCertificateAuthority","getCertificateAuthorityOutput"], () => require("./getCertificateAuthority"));

export { GetContainerRegistryArgs, GetContainerRegistryResult, GetContainerRegistryOutputArgs } from "./getContainerRegistry";
export const getContainerRegistry: typeof import("./getContainerRegistry").getContainerRegistry = null as any;
export const getContainerRegistryOutput: typeof import("./getContainerRegistry").getContainerRegistryOutput = null as any;
utilities.lazyLoad(exports, ["getContainerRegistry","getContainerRegistryOutput"], () => require("./getContainerRegistry"));

export { GetDatabaseArgs, GetDatabaseResult, GetDatabaseOutputArgs } from "./getDatabase";
export const getDatabase: typeof import("./getDatabase").getDatabase = null as any;
export const getDatabaseOutput: typeof import("./getDatabase").getDatabaseOutput = null as any;
utilities.lazyLoad(exports, ["getDatabase","getDatabaseOutput"], () => require("./getDatabase"));

export { GetDiskArgs, GetDiskResult, GetDiskOutputArgs } from "./getDisk";
export const getDisk: typeof import("./getDisk").getDisk = null as any;
export const getDiskOutput: typeof import("./getDisk").getDiskOutput = null as any;
utilities.lazyLoad(exports, ["getDisk","getDiskOutput"], () => require("./getDisk"));

export { GetDnsArgs, GetDnsResult, GetDnsOutputArgs } from "./getDns";
export const getDns: typeof import("./getDns").getDns = null as any;
export const getDnsOutput: typeof import("./getDns").getDnsOutput = null as any;
utilities.lazyLoad(exports, ["getDns","getDnsOutput"], () => require("./getDns"));

export { GetEnhancedDbArgs, GetEnhancedDbResult, GetEnhancedDbOutputArgs } from "./getEnhancedDb";
export const getEnhancedDb: typeof import("./getEnhancedDb").getEnhancedDb = null as any;
export const getEnhancedDbOutput: typeof import("./getEnhancedDb").getEnhancedDbOutput = null as any;
utilities.lazyLoad(exports, ["getEnhancedDb","getEnhancedDbOutput"], () => require("./getEnhancedDb"));

export { GetEsmeArgs, GetEsmeResult, GetEsmeOutputArgs } from "./getEsme";
export const getEsme: typeof import("./getEsme").getEsme = null as any;
export const getEsmeOutput: typeof import("./getEsme").getEsmeOutput = null as any;
utilities.lazyLoad(exports, ["getEsme","getEsmeOutput"], () => require("./getEsme"));

export { GetGslbArgs, GetGslbResult, GetGslbOutputArgs } from "./getGslb";
export const getGslb: typeof import("./getGslb").getGslb = null as any;
export const getGslbOutput: typeof import("./getGslb").getGslbOutput = null as any;
utilities.lazyLoad(exports, ["getGslb","getGslbOutput"], () => require("./getGslb"));

export { GetIconArgs, GetIconResult, GetIconOutputArgs } from "./getIcon";
export const getIcon: typeof import("./getIcon").getIcon = null as any;
export const getIconOutput: typeof import("./getIcon").getIconOutput = null as any;
utilities.lazyLoad(exports, ["getIcon","getIconOutput"], () => require("./getIcon"));

export { GetInternetArgs, GetInternetResult, GetInternetOutputArgs } from "./getInternet";
export const getInternet: typeof import("./getInternet").getInternet = null as any;
export const getInternetOutput: typeof import("./getInternet").getInternetOutput = null as any;
utilities.lazyLoad(exports, ["getInternet","getInternetOutput"], () => require("./getInternet"));

export { GetLoadBalancerArgs, GetLoadBalancerResult, GetLoadBalancerOutputArgs } from "./getLoadBalancer";
export const getLoadBalancer: typeof import("./getLoadBalancer").getLoadBalancer = null as any;
export const getLoadBalancerOutput: typeof import("./getLoadBalancer").getLoadBalancerOutput = null as any;
utilities.lazyLoad(exports, ["getLoadBalancer","getLoadBalancerOutput"], () => require("./getLoadBalancer"));

export { GetLocalRouterArgs, GetLocalRouterResult, GetLocalRouterOutputArgs } from "./getLocalRouter";
export const getLocalRouter: typeof import("./getLocalRouter").getLocalRouter = null as any;
export const getLocalRouterOutput: typeof import("./getLocalRouter").getLocalRouterOutput = null as any;
utilities.lazyLoad(exports, ["getLocalRouter","getLocalRouterOutput"], () => require("./getLocalRouter"));

export { GetNfsArgs, GetNfsResult, GetNfsOutputArgs } from "./getNfs";
export const getNfs: typeof import("./getNfs").getNfs = null as any;
export const getNfsOutput: typeof import("./getNfs").getNfsOutput = null as any;
utilities.lazyLoad(exports, ["getNfs","getNfsOutput"], () => require("./getNfs"));

export { GetNoteArgs, GetNoteResult, GetNoteOutputArgs } from "./getNote";
export const getNote: typeof import("./getNote").getNote = null as any;
export const getNoteOutput: typeof import("./getNote").getNoteOutput = null as any;
utilities.lazyLoad(exports, ["getNote","getNoteOutput"], () => require("./getNote"));

export { GetPacketFilterArgs, GetPacketFilterResult, GetPacketFilterOutputArgs } from "./getPacketFilter";
export const getPacketFilter: typeof import("./getPacketFilter").getPacketFilter = null as any;
export const getPacketFilterOutput: typeof import("./getPacketFilter").getPacketFilterOutput = null as any;
utilities.lazyLoad(exports, ["getPacketFilter","getPacketFilterOutput"], () => require("./getPacketFilter"));

export { GetPrivateHostArgs, GetPrivateHostResult, GetPrivateHostOutputArgs } from "./getPrivateHost";
export const getPrivateHost: typeof import("./getPrivateHost").getPrivateHost = null as any;
export const getPrivateHostOutput: typeof import("./getPrivateHost").getPrivateHostOutput = null as any;
utilities.lazyLoad(exports, ["getPrivateHost","getPrivateHostOutput"], () => require("./getPrivateHost"));

export { GetProxylbArgs, GetProxylbResult, GetProxylbOutputArgs } from "./getProxylb";
export const getProxylb: typeof import("./getProxylb").getProxylb = null as any;
export const getProxylbOutput: typeof import("./getProxylb").getProxylbOutput = null as any;
utilities.lazyLoad(exports, ["getProxylb","getProxylbOutput"], () => require("./getProxylb"));

export { GetServerArgs, GetServerResult, GetServerOutputArgs } from "./getServer";
export const getServer: typeof import("./getServer").getServer = null as any;
export const getServerOutput: typeof import("./getServer").getServerOutput = null as any;
utilities.lazyLoad(exports, ["getServer","getServerOutput"], () => require("./getServer"));

export { GetServerVncInfoArgs, GetServerVncInfoResult, GetServerVncInfoOutputArgs } from "./getServerVncInfo";
export const getServerVncInfo: typeof import("./getServerVncInfo").getServerVncInfo = null as any;
export const getServerVncInfoOutput: typeof import("./getServerVncInfo").getServerVncInfoOutput = null as any;
utilities.lazyLoad(exports, ["getServerVncInfo","getServerVncInfoOutput"], () => require("./getServerVncInfo"));

export { GetSimpleMonitorArgs, GetSimpleMonitorResult, GetSimpleMonitorOutputArgs } from "./getSimpleMonitor";
export const getSimpleMonitor: typeof import("./getSimpleMonitor").getSimpleMonitor = null as any;
export const getSimpleMonitorOutput: typeof import("./getSimpleMonitor").getSimpleMonitorOutput = null as any;
utilities.lazyLoad(exports, ["getSimpleMonitor","getSimpleMonitorOutput"], () => require("./getSimpleMonitor"));

export { GetSshKeyArgs, GetSshKeyResult, GetSshKeyOutputArgs } from "./getSshKey";
export const getSshKey: typeof import("./getSshKey").getSshKey = null as any;
export const getSshKeyOutput: typeof import("./getSshKey").getSshKeyOutput = null as any;
utilities.lazyLoad(exports, ["getSshKey","getSshKeyOutput"], () => require("./getSshKey"));

export { GetSubnetArgs, GetSubnetResult, GetSubnetOutputArgs } from "./getSubnet";
export const getSubnet: typeof import("./getSubnet").getSubnet = null as any;
export const getSubnetOutput: typeof import("./getSubnet").getSubnetOutput = null as any;
utilities.lazyLoad(exports, ["getSubnet","getSubnetOutput"], () => require("./getSubnet"));

export { GetSwitchArgs, GetSwitchResult, GetSwitchOutputArgs } from "./getSwitch";
export const getSwitch: typeof import("./getSwitch").getSwitch = null as any;
export const getSwitchOutput: typeof import("./getSwitch").getSwitchOutput = null as any;
utilities.lazyLoad(exports, ["getSwitch","getSwitchOutput"], () => require("./getSwitch"));

export { GetVpcRouterArgs, GetVpcRouterResult, GetVpcRouterOutputArgs } from "./getVpcRouter";
export const getVpcRouter: typeof import("./getVpcRouter").getVpcRouter = null as any;
export const getVpcRouterOutput: typeof import("./getVpcRouter").getVpcRouterOutput = null as any;
utilities.lazyLoad(exports, ["getVpcRouter","getVpcRouterOutput"], () => require("./getVpcRouter"));

export { GetWebaccelArgs, GetWebaccelResult, GetWebaccelOutputArgs } from "./getWebaccel";
export const getWebaccel: typeof import("./getWebaccel").getWebaccel = null as any;
export const getWebaccelOutput: typeof import("./getWebaccel").getWebaccelOutput = null as any;
utilities.lazyLoad(exports, ["getWebaccel","getWebaccelOutput"], () => require("./getWebaccel"));

export { GetZoneArgs, GetZoneResult, GetZoneOutputArgs } from "./getZone";
export const getZone: typeof import("./getZone").getZone = null as any;
export const getZoneOutput: typeof import("./getZone").getZoneOutput = null as any;
utilities.lazyLoad(exports, ["getZone","getZoneOutput"], () => require("./getZone"));

export { GslbArgs, GslbState } from "./gslb";
export type Gslb = import("./gslb").Gslb;
export const Gslb: typeof import("./gslb").Gslb = null as any;
utilities.lazyLoad(exports, ["Gslb"], () => require("./gslb"));

export { IconArgs, IconState } from "./icon";
export type Icon = import("./icon").Icon;
export const Icon: typeof import("./icon").Icon = null as any;
utilities.lazyLoad(exports, ["Icon"], () => require("./icon"));

export { InternetArgs, InternetState } from "./internet";
export type Internet = import("./internet").Internet;
export const Internet: typeof import("./internet").Internet = null as any;
utilities.lazyLoad(exports, ["Internet"], () => require("./internet"));

export { Ipv4PtrArgs, Ipv4PtrState } from "./ipv4Ptr";
export type Ipv4Ptr = import("./ipv4Ptr").Ipv4Ptr;
export const Ipv4Ptr: typeof import("./ipv4Ptr").Ipv4Ptr = null as any;
utilities.lazyLoad(exports, ["Ipv4Ptr"], () => require("./ipv4Ptr"));

export { LoadBalancerArgs, LoadBalancerState } from "./loadBalancer";
export type LoadBalancer = import("./loadBalancer").LoadBalancer;
export const LoadBalancer: typeof import("./loadBalancer").LoadBalancer = null as any;
utilities.lazyLoad(exports, ["LoadBalancer"], () => require("./loadBalancer"));

export { LocalRouterArgs, LocalRouterState } from "./localRouter";
export type LocalRouter = import("./localRouter").LocalRouter;
export const LocalRouter: typeof import("./localRouter").LocalRouter = null as any;
utilities.lazyLoad(exports, ["LocalRouter"], () => require("./localRouter"));

export { MobileGatewayArgs, MobileGatewayState } from "./mobileGateway";
export type MobileGateway = import("./mobileGateway").MobileGateway;
export const MobileGateway: typeof import("./mobileGateway").MobileGateway = null as any;
utilities.lazyLoad(exports, ["MobileGateway"], () => require("./mobileGateway"));

export { NfsArgs, NfsState } from "./nfs";
export type Nfs = import("./nfs").Nfs;
export const Nfs: typeof import("./nfs").Nfs = null as any;
utilities.lazyLoad(exports, ["Nfs"], () => require("./nfs"));

export { NoteArgs, NoteState } from "./note";
export type Note = import("./note").Note;
export const Note: typeof import("./note").Note = null as any;
utilities.lazyLoad(exports, ["Note"], () => require("./note"));

export { PacketFilterArgs, PacketFilterState } from "./packetFilter";
export type PacketFilter = import("./packetFilter").PacketFilter;
export const PacketFilter: typeof import("./packetFilter").PacketFilter = null as any;
utilities.lazyLoad(exports, ["PacketFilter"], () => require("./packetFilter"));

export { PacketFilterRulesArgs, PacketFilterRulesState } from "./packetFilterRules";
export type PacketFilterRules = import("./packetFilterRules").PacketFilterRules;
export const PacketFilterRules: typeof import("./packetFilterRules").PacketFilterRules = null as any;
utilities.lazyLoad(exports, ["PacketFilterRules"], () => require("./packetFilterRules"));

export { PrivateHostArgs, PrivateHostState } from "./privateHost";
export type PrivateHost = import("./privateHost").PrivateHost;
export const PrivateHost: typeof import("./privateHost").PrivateHost = null as any;
utilities.lazyLoad(exports, ["PrivateHost"], () => require("./privateHost"));

export { ProviderArgs } from "./provider";
export type Provider = import("./provider").Provider;
export const Provider: typeof import("./provider").Provider = null as any;
utilities.lazyLoad(exports, ["Provider"], () => require("./provider"));

export { ProxylbArgs, ProxylbState } from "./proxylb";
export type Proxylb = import("./proxylb").Proxylb;
export const Proxylb: typeof import("./proxylb").Proxylb = null as any;
utilities.lazyLoad(exports, ["Proxylb"], () => require("./proxylb"));

export { ProxylbAcmeArgs, ProxylbAcmeState } from "./proxylbAcme";
export type ProxylbAcme = import("./proxylbAcme").ProxylbAcme;
export const ProxylbAcme: typeof import("./proxylbAcme").ProxylbAcme = null as any;
utilities.lazyLoad(exports, ["ProxylbAcme"], () => require("./proxylbAcme"));

export { ServerArgs, ServerState } from "./server";
export type Server = import("./server").Server;
export const Server: typeof import("./server").Server = null as any;
utilities.lazyLoad(exports, ["Server"], () => require("./server"));

export { SimArgs, SimState } from "./sim";
export type Sim = import("./sim").Sim;
export const Sim: typeof import("./sim").Sim = null as any;
utilities.lazyLoad(exports, ["Sim"], () => require("./sim"));

export { SimpleMonitorArgs, SimpleMonitorState } from "./simpleMonitor";
export type SimpleMonitor = import("./simpleMonitor").SimpleMonitor;
export const SimpleMonitor: typeof import("./simpleMonitor").SimpleMonitor = null as any;
utilities.lazyLoad(exports, ["SimpleMonitor"], () => require("./simpleMonitor"));

export { SshKeyArgs, SshKeyState } from "./sshKey";
export type SshKey = import("./sshKey").SshKey;
export const SshKey: typeof import("./sshKey").SshKey = null as any;
utilities.lazyLoad(exports, ["SshKey"], () => require("./sshKey"));

export { SshKeyGenArgs, SshKeyGenState } from "./sshKeyGen";
export type SshKeyGen = import("./sshKeyGen").SshKeyGen;
export const SshKeyGen: typeof import("./sshKeyGen").SshKeyGen = null as any;
utilities.lazyLoad(exports, ["SshKeyGen"], () => require("./sshKeyGen"));

export { SubnetArgs, SubnetState } from "./subnet";
export type Subnet = import("./subnet").Subnet;
export const Subnet: typeof import("./subnet").Subnet = null as any;
utilities.lazyLoad(exports, ["Subnet"], () => require("./subnet"));

export { SwitchArgs, SwitchState } from "./switch";
export type Switch = import("./switch").Switch;
export const Switch: typeof import("./switch").Switch = null as any;
utilities.lazyLoad(exports, ["Switch"], () => require("./switch"));

export { VpcRouterArgs, VpcRouterState } from "./vpcRouter";
export type VpcRouter = import("./vpcRouter").VpcRouter;
export const VpcRouter: typeof import("./vpcRouter").VpcRouter = null as any;
utilities.lazyLoad(exports, ["VpcRouter"], () => require("./vpcRouter"));

export { WebaccelAclArgs, WebaccelAclState } from "./webaccelAcl";
export type WebaccelAcl = import("./webaccelAcl").WebaccelAcl;
export const WebaccelAcl: typeof import("./webaccelAcl").WebaccelAcl = null as any;
utilities.lazyLoad(exports, ["WebaccelAcl"], () => require("./webaccelAcl"));

export { WebaccelCertificateArgs, WebaccelCertificateState } from "./webaccelCertificate";
export type WebaccelCertificate = import("./webaccelCertificate").WebaccelCertificate;
export const WebaccelCertificate: typeof import("./webaccelCertificate").WebaccelCertificate = null as any;
utilities.lazyLoad(exports, ["WebaccelCertificate"], () => require("./webaccelCertificate"));


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
            case "sakuracloud:index/archive:Archive":
                return new Archive(name, <any>undefined, { urn })
            case "sakuracloud:index/archiveShare:ArchiveShare":
                return new ArchiveShare(name, <any>undefined, { urn })
            case "sakuracloud:index/autoBackup:AutoBackup":
                return new AutoBackup(name, <any>undefined, { urn })
            case "sakuracloud:index/autoScale:AutoScale":
                return new AutoScale(name, <any>undefined, { urn })
            case "sakuracloud:index/bridge:Bridge":
                return new Bridge(name, <any>undefined, { urn })
            case "sakuracloud:index/cdrom:Cdrom":
                return new Cdrom(name, <any>undefined, { urn })
            case "sakuracloud:index/certificateAuthority:CertificateAuthority":
                return new CertificateAuthority(name, <any>undefined, { urn })
            case "sakuracloud:index/containerRegistry:ContainerRegistry":
                return new ContainerRegistry(name, <any>undefined, { urn })
            case "sakuracloud:index/database:Database":
                return new Database(name, <any>undefined, { urn })
            case "sakuracloud:index/databaseReadReplica:DatabaseReadReplica":
                return new DatabaseReadReplica(name, <any>undefined, { urn })
            case "sakuracloud:index/disk:Disk":
                return new Disk(name, <any>undefined, { urn })
            case "sakuracloud:index/dns:Dns":
                return new Dns(name, <any>undefined, { urn })
            case "sakuracloud:index/dnsRecord:DnsRecord":
                return new DnsRecord(name, <any>undefined, { urn })
            case "sakuracloud:index/enhancedDb:EnhancedDb":
                return new EnhancedDb(name, <any>undefined, { urn })
            case "sakuracloud:index/esme:Esme":
                return new Esme(name, <any>undefined, { urn })
            case "sakuracloud:index/gslb:Gslb":
                return new Gslb(name, <any>undefined, { urn })
            case "sakuracloud:index/icon:Icon":
                return new Icon(name, <any>undefined, { urn })
            case "sakuracloud:index/internet:Internet":
                return new Internet(name, <any>undefined, { urn })
            case "sakuracloud:index/ipv4Ptr:Ipv4Ptr":
                return new Ipv4Ptr(name, <any>undefined, { urn })
            case "sakuracloud:index/loadBalancer:LoadBalancer":
                return new LoadBalancer(name, <any>undefined, { urn })
            case "sakuracloud:index/localRouter:LocalRouter":
                return new LocalRouter(name, <any>undefined, { urn })
            case "sakuracloud:index/mobileGateway:MobileGateway":
                return new MobileGateway(name, <any>undefined, { urn })
            case "sakuracloud:index/nfs:Nfs":
                return new Nfs(name, <any>undefined, { urn })
            case "sakuracloud:index/note:Note":
                return new Note(name, <any>undefined, { urn })
            case "sakuracloud:index/packetFilter:PacketFilter":
                return new PacketFilter(name, <any>undefined, { urn })
            case "sakuracloud:index/packetFilterRules:PacketFilterRules":
                return new PacketFilterRules(name, <any>undefined, { urn })
            case "sakuracloud:index/privateHost:PrivateHost":
                return new PrivateHost(name, <any>undefined, { urn })
            case "sakuracloud:index/proxylb:Proxylb":
                return new Proxylb(name, <any>undefined, { urn })
            case "sakuracloud:index/proxylbAcme:ProxylbAcme":
                return new ProxylbAcme(name, <any>undefined, { urn })
            case "sakuracloud:index/server:Server":
                return new Server(name, <any>undefined, { urn })
            case "sakuracloud:index/sim:Sim":
                return new Sim(name, <any>undefined, { urn })
            case "sakuracloud:index/simpleMonitor:SimpleMonitor":
                return new SimpleMonitor(name, <any>undefined, { urn })
            case "sakuracloud:index/sshKey:SshKey":
                return new SshKey(name, <any>undefined, { urn })
            case "sakuracloud:index/sshKeyGen:SshKeyGen":
                return new SshKeyGen(name, <any>undefined, { urn })
            case "sakuracloud:index/subnet:Subnet":
                return new Subnet(name, <any>undefined, { urn })
            case "sakuracloud:index/switch:Switch":
                return new Switch(name, <any>undefined, { urn })
            case "sakuracloud:index/vpcRouter:VpcRouter":
                return new VpcRouter(name, <any>undefined, { urn })
            case "sakuracloud:index/webaccelAcl:WebaccelAcl":
                return new WebaccelAcl(name, <any>undefined, { urn })
            case "sakuracloud:index/webaccelCertificate:WebaccelCertificate":
                return new WebaccelCertificate(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("sakuracloud", "index/archive", _module)
pulumi.runtime.registerResourceModule("sakuracloud", "index/archiveShare", _module)
pulumi.runtime.registerResourceModule("sakuracloud", "index/autoBackup", _module)
pulumi.runtime.registerResourceModule("sakuracloud", "index/autoScale", _module)
pulumi.runtime.registerResourceModule("sakuracloud", "index/bridge", _module)
pulumi.runtime.registerResourceModule("sakuracloud", "index/cdrom", _module)
pulumi.runtime.registerResourceModule("sakuracloud", "index/certificateAuthority", _module)
pulumi.runtime.registerResourceModule("sakuracloud", "index/containerRegistry", _module)
pulumi.runtime.registerResourceModule("sakuracloud", "index/database", _module)
pulumi.runtime.registerResourceModule("sakuracloud", "index/databaseReadReplica", _module)
pulumi.runtime.registerResourceModule("sakuracloud", "index/disk", _module)
pulumi.runtime.registerResourceModule("sakuracloud", "index/dns", _module)
pulumi.runtime.registerResourceModule("sakuracloud", "index/dnsRecord", _module)
pulumi.runtime.registerResourceModule("sakuracloud", "index/enhancedDb", _module)
pulumi.runtime.registerResourceModule("sakuracloud", "index/esme", _module)
pulumi.runtime.registerResourceModule("sakuracloud", "index/gslb", _module)
pulumi.runtime.registerResourceModule("sakuracloud", "index/icon", _module)
pulumi.runtime.registerResourceModule("sakuracloud", "index/internet", _module)
pulumi.runtime.registerResourceModule("sakuracloud", "index/ipv4Ptr", _module)
pulumi.runtime.registerResourceModule("sakuracloud", "index/loadBalancer", _module)
pulumi.runtime.registerResourceModule("sakuracloud", "index/localRouter", _module)
pulumi.runtime.registerResourceModule("sakuracloud", "index/mobileGateway", _module)
pulumi.runtime.registerResourceModule("sakuracloud", "index/nfs", _module)
pulumi.runtime.registerResourceModule("sakuracloud", "index/note", _module)
pulumi.runtime.registerResourceModule("sakuracloud", "index/packetFilter", _module)
pulumi.runtime.registerResourceModule("sakuracloud", "index/packetFilterRules", _module)
pulumi.runtime.registerResourceModule("sakuracloud", "index/privateHost", _module)
pulumi.runtime.registerResourceModule("sakuracloud", "index/proxylb", _module)
pulumi.runtime.registerResourceModule("sakuracloud", "index/proxylbAcme", _module)
pulumi.runtime.registerResourceModule("sakuracloud", "index/server", _module)
pulumi.runtime.registerResourceModule("sakuracloud", "index/sim", _module)
pulumi.runtime.registerResourceModule("sakuracloud", "index/simpleMonitor", _module)
pulumi.runtime.registerResourceModule("sakuracloud", "index/sshKey", _module)
pulumi.runtime.registerResourceModule("sakuracloud", "index/sshKeyGen", _module)
pulumi.runtime.registerResourceModule("sakuracloud", "index/subnet", _module)
pulumi.runtime.registerResourceModule("sakuracloud", "index/switch", _module)
pulumi.runtime.registerResourceModule("sakuracloud", "index/vpcRouter", _module)
pulumi.runtime.registerResourceModule("sakuracloud", "index/webaccelAcl", _module)
pulumi.runtime.registerResourceModule("sakuracloud", "index/webaccelCertificate", _module)
pulumi.runtime.registerResourcePackage("sakuracloud", {
    version: utilities.getVersion(),
    constructProvider: (name: string, type: string, urn: string): pulumi.ProviderResource => {
        if (type !== "pulumi:providers:sakuracloud") {
            throw new Error(`unknown provider type ${type}`);
        }
        return new Provider(name, <any>undefined, { urn });
    },
});
