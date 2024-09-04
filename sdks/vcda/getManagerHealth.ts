// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getManagerHealth(args: GetManagerHealthArgs, opts?: pulumi.InvokeOptions): Promise<GetManagerHealthResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("vcda:index/getManagerHealth:getManagerHealth", {
        "managerId": args.managerId,
        "serviceCert": args.serviceCert,
        "timeouts": args.timeouts,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getManagerHealth.
 */
export interface GetManagerHealthArgs {
    managerId?: string;
    serviceCert: string;
    timeouts?: inputs.GetManagerHealthTimeouts;
}

/**
 * A collection of values returned by getManagerHealth.
 */
export interface GetManagerHealthResult {
    readonly address: string;
    readonly applianceBootTimestamp: number;
    readonly buildDate: number;
    readonly buildVersion: string;
    readonly currentTime: number;
    readonly dbErrorArgs: string[];
    readonly dbErrorCode: string;
    readonly dbErrorMsg: string;
    readonly dbErrorStacktrace: string;
    readonly diskUsage: {[key: string]: number};
    readonly id: string;
    readonly instanceId: string;
    readonly localReplicatorsIds: string[];
    readonly localReplicatorsLsMismatchErrorArgs: string[];
    readonly localReplicatorsLsMismatchErrorCode: string;
    readonly localReplicatorsLsMismatchErrorMsg: string;
    readonly localReplicatorsLsMismatchErrorStacktrace: string;
    readonly lsErrorArgs: string[];
    readonly lsErrorCode: string;
    readonly lsErrorMsg: string;
    readonly lsErrorStacktrace: string;
    readonly managerId?: string;
    readonly ntpErrorArgs: string[];
    readonly ntpErrorCode: string;
    readonly ntpErrorMsg: string;
    readonly ntpErrorStacktrace: string;
    readonly offlineReplicatorsIds: string[];
    readonly onlineReplicatorsIds: string[];
    readonly productName: string;
    readonly runtimeId: string;
    readonly serviceBootTimestamp: number;
    readonly serviceCert: string;
    readonly ssoAdminErrorArgs: string[];
    readonly ssoAdminErrorCode: string;
    readonly ssoAdminErrorMsg: string;
    readonly ssoAdminErrorStacktrace: string;
    readonly timeouts?: outputs.GetManagerHealthTimeouts;
    readonly tunnelsIds: string[];
}
export function getManagerHealthOutput(args: GetManagerHealthOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetManagerHealthResult> {
    return pulumi.output(args).apply((a: any) => getManagerHealth(a, opts))
}

/**
 * A collection of arguments for invoking getManagerHealth.
 */
export interface GetManagerHealthOutputArgs {
    managerId?: pulumi.Input<string>;
    serviceCert: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.GetManagerHealthTimeoutsArgs>;
}
