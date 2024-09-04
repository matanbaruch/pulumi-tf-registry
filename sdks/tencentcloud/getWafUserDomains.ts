// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getWafUserDomains(args?: GetWafUserDomainsArgs, opts?: pulumi.InvokeOptions): Promise<GetWafUserDomainsResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("tencentcloud:index/getWafUserDomains:getWafUserDomains", {
        "id": args.id,
        "resultOutputFile": args.resultOutputFile,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getWafUserDomains.
 */
export interface GetWafUserDomainsArgs {
    id?: string;
    resultOutputFile?: string;
}

/**
 * A collection of values returned by getWafUserDomains.
 */
export interface GetWafUserDomainsResult {
    readonly id: string;
    readonly resultOutputFile?: string;
    readonly usersInfos: outputs.GetWafUserDomainsUsersInfo[];
}
export function getWafUserDomainsOutput(args?: GetWafUserDomainsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetWafUserDomainsResult> {
    return pulumi.output(args).apply((a: any) => getWafUserDomains(a, opts))
}

/**
 * A collection of arguments for invoking getWafUserDomains.
 */
export interface GetWafUserDomainsOutputArgs {
    id?: pulumi.Input<string>;
    resultOutputFile?: pulumi.Input<string>;
}
