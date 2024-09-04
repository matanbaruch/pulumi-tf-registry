// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getPool(args?: GetPoolArgs, opts?: pulumi.InvokeOptions): Promise<GetPoolResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("avi:index/getPool:getPool", {
        "cloudRef": args.cloudRef,
        "id": args.id,
        "ignoreServers": args.ignoreServers,
        "name": args.name,
        "tenantRef": args.tenantRef,
        "uuid": args.uuid,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getPool.
 */
export interface GetPoolArgs {
    cloudRef?: string;
    id?: string;
    ignoreServers?: boolean;
    name?: string;
    tenantRef?: string;
    uuid?: string;
}

/**
 * A collection of values returned by getPool.
 */
export interface GetPoolResult {
    readonly analyticsPolicies: outputs.GetPoolAnalyticsPolicy[];
    readonly analyticsProfileRef: string;
    readonly appendPort: string;
    readonly applicationPersistenceProfileRef: string;
    readonly autoscaleLaunchConfigRef: string;
    readonly autoscaleNetworks: string[];
    readonly autoscalePolicyRef: string;
    readonly capacityEstimation: string;
    readonly capacityEstimationTtfbThresh: string;
    readonly cloudConfigCksum: string;
    readonly cloudRef: string;
    readonly configpbAttributes: outputs.GetPoolConfigpbAttribute[];
    readonly connPoolProperties: outputs.GetPoolConnPoolProperty[];
    readonly connectionRampDuration: string;
    readonly createdBy: string;
    readonly defaultServerPort: string;
    readonly deleteServerOnDnsRefresh: string;
    readonly description: string;
    readonly domainNames: string[];
    readonly eastWest: string;
    readonly enableHttp2: string;
    readonly enabled: string;
    readonly externalAutoscaleGroups: string[];
    readonly failActions: outputs.GetPoolFailAction[];
    readonly fewestTasksFeedbackDelay: string;
    readonly gracefulDisableTimeout: string;
    readonly gracefulHmDownDisableTimeout: string;
    readonly gslbSpEnabled: string;
    readonly healthMonitorRefs: string[];
    readonly horizonProfiles: outputs.GetPoolHorizonProfile[];
    readonly hostCheckEnabled: string;
    readonly http2Properties: outputs.GetPoolHttp2Property[];
    readonly id: string;
    readonly ignoreServerPort: string;
    readonly ignoreServers?: boolean;
    readonly inlineHealthMonitor: string;
    readonly ipaddrgroupRef: string;
    readonly lbAlgoRrPerSe: string;
    readonly lbAlgorithm: string;
    readonly lbAlgorithmConsistentHashHdr: string;
    readonly lbAlgorithmCoreNonaffinity: string;
    readonly lbAlgorithmHash: string;
    readonly lookupServerByName: string;
    readonly markers: outputs.GetPoolMarker[];
    readonly maxConcurrentConnectionsPerServer: string;
    readonly maxConnRatePerServers: outputs.GetPoolMaxConnRatePerServer[];
    readonly minHealthMonitorsUp: string;
    readonly minServersUp: string;
    readonly name: string;
    readonly networks: outputs.GetPoolNetwork[];
    readonly nsxSecuritygroups: string[];
    readonly pkiProfileRef: string;
    readonly placementNetworks: outputs.GetPoolPlacementNetwork[];
    readonly poolType: string;
    readonly requestQueueDepth: string;
    readonly requestQueueEnabled: string;
    readonly resolvePoolByDns: string;
    readonly rewriteHostHeaderToServerName: string;
    readonly rewriteHostHeaderToSni: string;
    readonly routingPool: string;
    readonly serverDisableType: string;
    readonly serverName: string;
    readonly serverReselects: outputs.GetPoolServerReselect[];
    readonly serverTimeout: string;
    readonly servers: outputs.GetPoolServer[];
    readonly serviceMetadata: string;
    readonly sniEnabled: string;
    readonly spGsInfos: outputs.GetPoolSpGsInfo[];
    readonly sslKeyAndCertificateRef: string;
    readonly sslProfileRef: string;
    readonly tenantRef: string;
    readonly tier1Lr: string;
    readonly useServicePort: string;
    readonly useServiceSslMode: string;
    readonly uuid: string;
    readonly vrfRef: string;
}
export function getPoolOutput(args?: GetPoolOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetPoolResult> {
    return pulumi.output(args).apply((a: any) => getPool(a, opts))
}

/**
 * A collection of arguments for invoking getPool.
 */
export interface GetPoolOutputArgs {
    cloudRef?: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    ignoreServers?: pulumi.Input<boolean>;
    name?: pulumi.Input<string>;
    tenantRef?: pulumi.Input<string>;
    uuid?: pulumi.Input<string>;
}
