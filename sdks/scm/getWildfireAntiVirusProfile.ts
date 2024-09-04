// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getWildfireAntiVirusProfile(args: GetWildfireAntiVirusProfileArgs, opts?: pulumi.InvokeOptions): Promise<GetWildfireAntiVirusProfileResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("scm:index/getWildfireAntiVirusProfile:getWildfireAntiVirusProfile", {
        "id": args.id,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getWildfireAntiVirusProfile.
 */
export interface GetWildfireAntiVirusProfileArgs {
    id: string;
}

/**
 * A collection of values returned by getWildfireAntiVirusProfile.
 */
export interface GetWildfireAntiVirusProfileResult {
    readonly description: string;
    readonly id: string;
    readonly mlavExceptions: outputs.GetWildfireAntiVirusProfileMlavException[];
    readonly name: string;
    readonly packetCapture: boolean;
    readonly rules: outputs.GetWildfireAntiVirusProfileRule[];
    readonly tfid: string;
    readonly threatExceptions: outputs.GetWildfireAntiVirusProfileThreatException[];
}
export function getWildfireAntiVirusProfileOutput(args: GetWildfireAntiVirusProfileOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetWildfireAntiVirusProfileResult> {
    return pulumi.output(args).apply((a: any) => getWildfireAntiVirusProfile(a, opts))
}

/**
 * A collection of arguments for invoking getWildfireAntiVirusProfile.
 */
export interface GetWildfireAntiVirusProfileOutputArgs {
    id: pulumi.Input<string>;
}
