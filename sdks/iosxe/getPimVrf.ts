// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getPimVrf(args: GetPimVrfArgs, opts?: pulumi.InvokeOptions): Promise<GetPimVrfResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("iosxe:index/getPimVrf:getPimVrf", {
        "device": args.device,
        "vrf": args.vrf,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getPimVrf.
 */
export interface GetPimVrfArgs {
    device?: string;
    vrf: string;
}

/**
 * A collection of values returned by getPimVrf.
 */
export interface GetPimVrfResult {
    readonly autorp: boolean;
    readonly autorpListener: boolean;
    readonly bsrCandidateAcceptRpCandidate: string;
    readonly bsrCandidateLoopback: number;
    readonly bsrCandidateMask: number;
    readonly bsrCandidatePriority: number;
    readonly cacheRpfOif: boolean;
    readonly device?: string;
    readonly id: string;
    readonly rpAddress: string;
    readonly rpAddressBidir: boolean;
    readonly rpAddressOverride: boolean;
    readonly rpAddresses: outputs.GetPimVrfRpAddress[];
    readonly rpCandidates: outputs.GetPimVrfRpCandidate[];
    readonly ssmDefault: boolean;
    readonly ssmRange: string;
    readonly vrf: string;
}
export function getPimVrfOutput(args: GetPimVrfOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetPimVrfResult> {
    return pulumi.output(args).apply((a: any) => getPimVrf(a, opts))
}

/**
 * A collection of arguments for invoking getPimVrf.
 */
export interface GetPimVrfOutputArgs {
    device?: pulumi.Input<string>;
    vrf: pulumi.Input<string>;
}
