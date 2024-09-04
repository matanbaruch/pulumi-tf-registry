// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getApplicationSegment(args?: GetApplicationSegmentArgs, opts?: pulumi.InvokeOptions): Promise<GetApplicationSegmentResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("zpa:index/getApplicationSegment:getApplicationSegment", {
        "id": args.id,
        "isIncompleteDrConfig": args.isIncompleteDrConfig,
        "microtenantId": args.microtenantId,
        "microtenantName": args.microtenantName,
        "name": args.name,
        "tcpPortRange": args.tcpPortRange,
        "udpPortRange": args.udpPortRange,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getApplicationSegment.
 */
export interface GetApplicationSegmentArgs {
    id?: string;
    isIncompleteDrConfig?: boolean;
    microtenantId?: string;
    microtenantName?: string;
    name?: string;
    tcpPortRange?: inputs.GetApplicationSegmentTcpPortRange[];
    udpPortRange?: inputs.GetApplicationSegmentUdpPortRange[];
}

/**
 * A collection of values returned by getApplicationSegment.
 */
export interface GetApplicationSegmentResult {
    readonly bypassType: string;
    readonly configSpace: string;
    readonly creationTime: string;
    readonly defaultIdleTimeout: string;
    readonly defaultMaxAge: string;
    readonly description: string;
    readonly domainNames: string[];
    readonly doubleEncrypt: boolean;
    readonly enabled: boolean;
    readonly healthCheckType: string;
    readonly healthReporting: string;
    readonly id?: string;
    readonly ipAnchored: boolean;
    readonly isCnameEnabled: boolean;
    readonly isIncompleteDrConfig: boolean;
    readonly microtenantId?: string;
    readonly microtenantName?: string;
    readonly modifiedTime: string;
    readonly modifiedby: string;
    readonly name?: string;
    readonly passiveHealthEnabled: boolean;
    readonly segmentGroupId: string;
    readonly segmentGroupName: string;
    readonly selectConnectorCloseToApp: boolean;
    readonly serverGroups: outputs.GetApplicationSegmentServerGroup[];
    readonly tcpPortRange?: outputs.GetApplicationSegmentTcpPortRange[];
    readonly tcpPortRanges: string[];
    readonly udpPortRange?: outputs.GetApplicationSegmentUdpPortRange[];
    readonly udpPortRanges: string[];
    readonly useInDrMode: boolean;
}
export function getApplicationSegmentOutput(args?: GetApplicationSegmentOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetApplicationSegmentResult> {
    return pulumi.output(args).apply((a: any) => getApplicationSegment(a, opts))
}

/**
 * A collection of arguments for invoking getApplicationSegment.
 */
export interface GetApplicationSegmentOutputArgs {
    id?: pulumi.Input<string>;
    isIncompleteDrConfig?: pulumi.Input<boolean>;
    microtenantId?: pulumi.Input<string>;
    microtenantName?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    tcpPortRange?: pulumi.Input<pulumi.Input<inputs.GetApplicationSegmentTcpPortRangeArgs>[]>;
    udpPortRange?: pulumi.Input<pulumi.Input<inputs.GetApplicationSegmentUdpPortRangeArgs>[]>;
}
