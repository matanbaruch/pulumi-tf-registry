// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getAntiSpywareProfile(args: GetAntiSpywareProfileArgs, opts?: pulumi.InvokeOptions): Promise<GetAntiSpywareProfileResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("scm:index/getAntiSpywareProfile:getAntiSpywareProfile", {
        "id": args.id,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getAntiSpywareProfile.
 */
export interface GetAntiSpywareProfileArgs {
    id: string;
}

/**
 * A collection of values returned by getAntiSpywareProfile.
 */
export interface GetAntiSpywareProfileResult {
    readonly cloudInlineAnalysis: boolean;
    readonly description: string;
    readonly id: string;
    readonly inlineExceptionEdlUrls: string[];
    readonly inlineExceptionIpAddresses: string[];
    readonly micaEngineSpywareEnabledLists: outputs.GetAntiSpywareProfileMicaEngineSpywareEnabledList[];
    readonly name: string;
    readonly rules: outputs.GetAntiSpywareProfileRule[];
    readonly tfid: string;
    readonly threatExceptions: outputs.GetAntiSpywareProfileThreatException[];
}
export function getAntiSpywareProfileOutput(args: GetAntiSpywareProfileOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetAntiSpywareProfileResult> {
    return pulumi.output(args).apply((a: any) => getAntiSpywareProfile(a, opts))
}

/**
 * A collection of arguments for invoking getAntiSpywareProfile.
 */
export interface GetAntiSpywareProfileOutputArgs {
    id: pulumi.Input<string>;
}
