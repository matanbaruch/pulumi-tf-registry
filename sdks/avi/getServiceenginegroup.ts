// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getServiceenginegroup(args?: GetServiceenginegroupArgs, opts?: pulumi.InvokeOptions): Promise<GetServiceenginegroupResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("avi:index/getServiceenginegroup:getServiceenginegroup", {
        "cloudRef": args.cloudRef,
        "id": args.id,
        "name": args.name,
        "tenantRef": args.tenantRef,
        "uuid": args.uuid,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getServiceenginegroup.
 */
export interface GetServiceenginegroupArgs {
    cloudRef?: string;
    id?: string;
    name?: string;
    tenantRef?: string;
    uuid?: string;
}

/**
 * A collection of values returned by getServiceenginegroup.
 */
export interface GetServiceenginegroupResult {
    readonly acceleratedNetworking: string;
    readonly activeStandby: string;
    readonly aggressiveFailureDetection: string;
    readonly algo: string;
    readonly allowBurst: string;
    readonly appCachePercent: string;
    readonly appCacheThreshold: string;
    readonly appLearningMemoryPercent: string;
    readonly archiveShmLimit: string;
    readonly asyncSsl: string;
    readonly asyncSslThreads: string;
    readonly autoRebalance: string;
    readonly autoRebalanceCapacityPerSes: number[];
    readonly autoRebalanceCriterias: string[];
    readonly autoRebalanceInterval: string;
    readonly autoRedistributeActiveStandbyLoad: string;
    readonly availabilityZoneRefs: string[];
    readonly baremetalDispatcherHandlesFlows: string;
    readonly bgpPeerMonitorFailoverEnabled: string;
    readonly bgpStateUpdateInterval: string;
    readonly bufferSe: string;
    readonly cloudRef: string;
    readonly compressIpRulesForEachNsSubnet: string;
    readonly configDebugsOnAllCores: string;
    readonly configpbAttributes: outputs.GetServiceenginegroupConfigpbAttribute[];
    readonly connectionMemoryPercentage: string;
    readonly coreShmAppCache: string;
    readonly coreShmAppLearning: string;
    readonly cpuReserve: string;
    readonly cpuSocketAffinity: string;
    readonly customSecuritygroupsDatas: string[];
    readonly customSecuritygroupsMgmts: string[];
    readonly customTags: outputs.GetServiceenginegroupCustomTag[];
    readonly dataNetworkId: string;
    readonly datascriptTimeout: string;
    readonly deactivateIpv6Discovery: string;
    readonly deactivateKniFilteringAtDispatcher: string;
    readonly dedicatedDispatcherCore: string;
    readonly description: string;
    readonly disableAviSecuritygroups: string;
    readonly disableCsumOffloads: string;
    readonly disableFlowProbes: string;
    readonly disableGro: string;
    readonly disableSeMemoryCheck: string;
    readonly disableTso: string;
    readonly diskPerSe: string;
    readonly distributeLoadActiveStandby: string;
    readonly distributeQueues: string;
    readonly distributeVnics: string;
    readonly downstreamSendTimeout: string;
    readonly dpAggressiveDeqIntervalMsec: string;
    readonly dpAggressiveEnqIntervalMsec: string;
    readonly dpAggressiveHbFrequency: string;
    readonly dpAggressiveHbTimeoutCount: string;
    readonly dpDeqIntervalMsec: string;
    readonly dpEnqIntervalMsec: string;
    readonly dpHbFrequency: string;
    readonly dpHbTimeoutCount: string;
    readonly dpdkGroTimeoutInterval: string;
    readonly enableGratarpPermanent: string;
    readonly enableHsmLog: string;
    readonly enableHsmPriming: string;
    readonly enableMultiLb: string;
    readonly enablePcapTxRing: string;
    readonly ephemeralPortrangeEnd: string;
    readonly ephemeralPortrangeStart: string;
    readonly extraConfigMultiplier: string;
    readonly extraSharedConfigMemory: string;
    readonly flowTableNewSynMaxEntries: string;
    readonly freeListSize: string;
    readonly gcpConfigs: outputs.GetServiceenginegroupGcpConfig[];
    readonly gratarpPermanentPeriodicity: string;
    readonly grpcChannelConnectTimeout: string;
    readonly haMode: string;
    readonly handlePerPktAttack: string;
    readonly hardwaresecuritymodulegroupRef: string;
    readonly heapMinimumConfigMemory: string;
    readonly hmOnStandby: string;
    readonly hostAttributeKey: string;
    readonly hostAttributeValue: string;
    readonly hostGatewayMonitor: string;
    readonly httpRumConsoleLog: string;
    readonly httpRumMinContentLength: string;
    readonly hybridRssMode: string;
    readonly hypervisor: string;
    readonly id: string;
    readonly ignoreDockerMacChange: string;
    readonly ignoreRttThreshold: string;
    readonly ingressAccessData: string;
    readonly ingressAccessMgmt: string;
    readonly instanceFlavor: string;
    readonly instanceFlavorInfos: outputs.GetServiceenginegroupInstanceFlavorInfo[];
    readonly iptables: outputs.GetServiceenginegroupIptable[];
    readonly kniAllowedServerPorts: outputs.GetServiceenginegroupKniAllowedServerPort[];
    readonly l7ConnsPerCore: string;
    readonly l7ResvdListenConnsPerCore: string;
    readonly labels: outputs.GetServiceenginegroupLabel[];
    readonly lbactionNumRequestsToDispatch: string;
    readonly lbactionRqPerRequestMaxRetries: string;
    readonly leastLoadCoreSelection: string;
    readonly licenseTier: string;
    readonly licenseType: string;
    readonly logAgentCompressLogs: string;
    readonly logAgentDebugEnabled: string;
    readonly logAgentFileSzAppl: string;
    readonly logAgentFileSzConn: string;
    readonly logAgentFileSzDebug: string;
    readonly logAgentFileSzEvent: string;
    readonly logAgentLogStorageMinSz: string;
    readonly logAgentMaxConcurrentRsync: string;
    readonly logAgentMaxStorageExcessPercent: string;
    readonly logAgentMaxStorageIgnorePercent: string;
    readonly logAgentMinStoragePerVs: string;
    readonly logAgentSleepInterval: string;
    readonly logAgentTraceEnabled: string;
    readonly logAgentUnknownVsTimer: string;
    readonly logDisksz: string;
    readonly logMallocFailure: string;
    readonly logMessageMaxFileListSize: string;
    readonly markers: outputs.GetServiceenginegroupMarker[];
    readonly maxConcurrentExternalHm: string;
    readonly maxCpuUsage: string;
    readonly maxMemoryPerMempool: string;
    readonly maxNumHttpSessionsToStore: string;
    readonly maxNumSeDps: string;
    readonly maxPublicIpsPerLb: string;
    readonly maxQueuesPerVnic: string;
    readonly maxRulesPerLb: string;
    readonly maxScaleoutPerVs: string;
    readonly maxSe: string;
    readonly maxSkbFrags: string;
    readonly maxVsPerSe: string;
    readonly memReserve: string;
    readonly memoryForConfigUpdate: string;
    readonly memoryPerSe: string;
    readonly metricsCollectionMode: string;
    readonly mgmtNetworkRef: string;
    readonly mgmtSubnets: outputs.GetServiceenginegroupMgmtSubnet[];
    readonly minCpuUsage: string;
    readonly minScaleoutPerVs: string;
    readonly minSe: string;
    readonly minimumConnectionMemory: string;
    readonly multicastEnable: string;
    readonly nLogStreamingThreads: string;
    readonly name: string;
    readonly netlinkPollerThreads: string;
    readonly netlinkSockBufSize: string;
    readonly ngxFreeConnectionStack: string;
    readonly nonSignificantLogThrottle: string;
    readonly nsHelperDeqIntervalMsec: string;
    readonly ntpSyncFailEvent: string;
    readonly ntpSyncStatusInterval: string;
    readonly numDispatcherCores: string;
    readonly numDispatcherQueues: string;
    readonly numFlowCoresSumChangesToIgnore: string;
    readonly objsyncConfigs: outputs.GetServiceenginegroupObjsyncConfig[];
    readonly objsyncPort: string;
    readonly openstackAvailabilityZones: string[];
    readonly openstackMgmtNetworkName: string;
    readonly openstackMgmtNetworkUuid: string;
    readonly osReservedMemory: string;
    readonly pathMtuDiscoveryV4: string;
    readonly pathMtuDiscoveryV6: string;
    readonly pcapTxMode: string;
    readonly pcapTxRingRdBalancingFactor: string;
    readonly perApp: string;
    readonly perVsAdmissionControl: string;
    readonly placementMode: string;
    readonly realtimeSeMetrics: outputs.GetServiceenginegroupRealtimeSeMetric[];
    readonly rebootOnPanic: string;
    readonly replayVrfRoutesInterval: string;
    readonly resyncTimeInterval: string;
    readonly sdbFlushInterval: string;
    readonly sdbPipelineSize: string;
    readonly sdbScanCount: string;
    readonly seBandwidthType: string;
    readonly seDebugTraceSz: string;
    readonly seDelayedFlowDelete: string;
    readonly seDeprovisionDelay: string;
    readonly seDosProfiles: outputs.GetServiceenginegroupSeDosProfile[];
    readonly seDpHmDrops: string;
    readonly seDpIfStatePollInterval: string;
    readonly seDpIsolation: string;
    readonly seDpIsolationNumNonDpCpus: string;
    readonly seDpLogNfEnqueuePercent: string;
    readonly seDpLogUdfEnqueuePercent: string;
    readonly seDpMaxHbVersion: string;
    readonly seDpVnicQueueStallEventSleep: string;
    readonly seDpVnicQueueStallThreshold: string;
    readonly seDpVnicQueueStallTimeout: string;
    readonly seDpVnicRestartOnQueueStallCount: string;
    readonly seDpVnicStallSeRestartWindow: string;
    readonly seDpdkPmd: string;
    readonly seDumpCoreOnAssert: string;
    readonly seEmulatedCores: string;
    readonly seFlowProbeRetries: string;
    readonly seFlowProbeRetryTimer: string;
    readonly seGroupAnalyticsPolicies: outputs.GetServiceenginegroupSeGroupAnalyticsPolicy[];
    readonly seHyperthreadedMode: string;
    readonly seIpEncapIpc: string;
    readonly seKniBurstFactor: string;
    readonly seL3EncapIpc: string;
    readonly seLogBufferAppBlockingDequeue: string;
    readonly seLogBufferConnBlockingDequeue: string;
    readonly seLogBufferEventsBlockingDequeue: string;
    readonly seLro: string;
    readonly seMpRingRetryCount: string;
    readonly seMtu: string;
    readonly seNamePrefix: string;
    readonly sePacketBufferMax: string;
    readonly sePcapLookahead: string;
    readonly sePcapPktCount: string;
    readonly sePcapPktSz: string;
    readonly sePcapQdiscBypass: string;
    readonly sePcapReinitFrequency: string;
    readonly sePcapReinitThreshold: string;
    readonly seProbePort: string;
    readonly seRlProps: outputs.GetServiceenginegroupSeRlProp[];
    readonly seRumSamplingNavInterval: string;
    readonly seRumSamplingNavPercent: string;
    readonly seRumSamplingResInterval: string;
    readonly seRumSamplingResPercent: string;
    readonly seSbDedicatedCore: string;
    readonly seSbThreads: string;
    readonly seThreadMultiplier: string;
    readonly seTimeTrackerProps: outputs.GetServiceenginegroupSeTimeTrackerProp[];
    readonly seTracertPortRanges: outputs.GetServiceenginegroupSeTracertPortRange[];
    readonly seTunnelMode: string;
    readonly seTunnelUdpPort: string;
    readonly seTxBatchSize: string;
    readonly seTxqThreshold: string;
    readonly seUdpEncapIpc: string;
    readonly seUseDpdk: string;
    readonly seVnicTxSwQueueFlushFrequency: string;
    readonly seVnicTxSwQueueSize: string;
    readonly seVsHbMaxPktsInBatch: string;
    readonly seVsHbMaxVsInPkt: string;
    readonly selfSeElection: string;
    readonly sendSeReadyTimeout: string;
    readonly serviceIp6Subnets: outputs.GetServiceenginegroupServiceIp6Subnet[];
    readonly serviceIpSubnets: outputs.GetServiceenginegroupServiceIpSubnet[];
    readonly shmMinimumConfigMemory: string;
    readonly significantLogThrottle: string;
    readonly sslPreprocessSniHostname: string;
    readonly sslSessCachePerVs: string;
    readonly tenantRef: string;
    readonly transientSharedMemoryMax: string;
    readonly udfLogThrottle: string;
    readonly upstreamConnectTimeout: string;
    readonly upstreamConnpoolEnable: string;
    readonly upstreamReadTimeout: string;
    readonly upstreamSendTimeout: string;
    readonly useDpUtilForScaleout: string;
    readonly useHyperthreadedCores: string;
    readonly useLegacyNetlink: string;
    readonly useObjsync: string;
    readonly useStandardAlb: string;
    readonly userAgentCacheConfigs: outputs.GetServiceenginegroupUserAgentCacheConfig[];
    readonly userDefinedMetricAge: string;
    readonly uuid: string;
    readonly vcenterClusters: outputs.GetServiceenginegroupVcenterCluster[];
    readonly vcenterDatastoreMode: string;
    readonly vcenterDatastores: outputs.GetServiceenginegroupVcenterDatastore[];
    readonly vcenterDatastoresInclude: string;
    readonly vcenterFolder: string;
    readonly vcenterHosts: outputs.GetServiceenginegroupVcenterHost[];
    readonly vcenterParkingVnicPg: string;
    readonly vcenters: outputs.GetServiceenginegroupVcenter[];
    readonly vcpusPerSe: string;
    readonly vipAsgs: outputs.GetServiceenginegroupVipAsg[];
    readonly vnicDhcpIpCheckInterval: string;
    readonly vnicDhcpIpMaxRetries: string;
    readonly vnicIpDeleteInterval: string;
    readonly vnicProbeInterval: string;
    readonly vnicRpcRetryInterval: string;
    readonly vnicdbCmdHistorySize: string;
    readonly vsHostRedundancy: string;
    readonly vsScaleinTimeout: string;
    readonly vsScaleinTimeoutForUpgrade: string;
    readonly vsScaleoutTimeout: string;
    readonly vsSePrimarySwitchoverAdditionalWaitTime: string;
    readonly vsSeScaleinAdditionalWaitTime: string;
    readonly vsSeScaleoutAdditionalWaitTime: string;
    readonly vsSeScaleoutReadyTimeout: string;
    readonly vsSwitchoverTimeout: string;
    readonly vssPlacementEnabled: string;
    readonly vssPlacements: outputs.GetServiceenginegroupVssPlacement[];
    readonly wafMempool: string;
    readonly wafMempoolSize: string;
}
export function getServiceenginegroupOutput(args?: GetServiceenginegroupOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetServiceenginegroupResult> {
    return pulumi.output(args).apply((a: any) => getServiceenginegroup(a, opts))
}

/**
 * A collection of arguments for invoking getServiceenginegroup.
 */
export interface GetServiceenginegroupOutputArgs {
    cloudRef?: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    tenantRef?: pulumi.Input<string>;
    uuid?: pulumi.Input<string>;
}
