// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getConnectInstance(args?: GetConnectInstanceArgs, opts?: pulumi.InvokeOptions): Promise<GetConnectInstanceResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("aws:index/getConnectInstance:getConnectInstance", {
        "id": args.id,
        "instanceAlias": args.instanceAlias,
        "instanceId": args.instanceId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getConnectInstance.
 */
export interface GetConnectInstanceArgs {
    id?: string;
    instanceAlias?: string;
    instanceId?: string;
}

/**
 * A collection of values returned by getConnectInstance.
 */
export interface GetConnectInstanceResult {
    readonly arn: string;
    readonly autoResolveBestVoicesEnabled: boolean;
    readonly contactFlowLogsEnabled: boolean;
    readonly contactLensEnabled: boolean;
    readonly createdTime: string;
    readonly earlyMediaEnabled: boolean;
    readonly id: string;
    readonly identityManagementType: string;
    readonly inboundCallsEnabled: boolean;
    readonly instanceAlias: string;
    readonly instanceId: string;
    readonly multiPartyConferenceEnabled: boolean;
    readonly outboundCallsEnabled: boolean;
    readonly serviceRole: string;
    readonly status: string;
}
export function getConnectInstanceOutput(args?: GetConnectInstanceOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetConnectInstanceResult> {
    return pulumi.output(args).apply((a: any) => getConnectInstance(a, opts))
}

/**
 * A collection of arguments for invoking getConnectInstance.
 */
export interface GetConnectInstanceOutputArgs {
    id?: pulumi.Input<string>;
    instanceAlias?: pulumi.Input<string>;
    instanceId?: pulumi.Input<string>;
}
