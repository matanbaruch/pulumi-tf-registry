// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getProfileDns(args: GetProfileDnsArgs, opts?: pulumi.InvokeOptions): Promise<GetProfileDnsResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("ciscomcd:index/getProfileDns:getProfileDns", {
        "id": args.id,
        "name": args.name,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getProfileDns.
 */
export interface GetProfileDnsArgs {
    id?: string;
    name: string;
}

/**
 * A collection of values returned by getProfileDns.
 */
export interface GetProfileDnsResult {
    readonly id: string;
    readonly name: string;
}
export function getProfileDnsOutput(args: GetProfileDnsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetProfileDnsResult> {
    return pulumi.output(args).apply((a: any) => getProfileDns(a, opts))
}

/**
 * A collection of arguments for invoking getProfileDns.
 */
export interface GetProfileDnsOutputArgs {
    id?: pulumi.Input<string>;
    name: pulumi.Input<string>;
}
