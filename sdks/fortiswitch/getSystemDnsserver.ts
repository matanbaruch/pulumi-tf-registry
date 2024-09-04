// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getSystemDnsserver(args: GetSystemDnsserverArgs, opts?: pulumi.InvokeOptions): Promise<GetSystemDnsserverResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("fortiswitch:index/getSystemDnsserver:getSystemDnsserver", {
        "id": args.id,
        "name": args.name,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSystemDnsserver.
 */
export interface GetSystemDnsserverArgs {
    id?: string;
    name: string;
}

/**
 * A collection of values returned by getSystemDnsserver.
 */
export interface GetSystemDnsserverResult {
    readonly id: string;
    readonly mode: string;
    readonly name: string;
}
export function getSystemDnsserverOutput(args: GetSystemDnsserverOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetSystemDnsserverResult> {
    return pulumi.output(args).apply((a: any) => getSystemDnsserver(a, opts))
}

/**
 * A collection of arguments for invoking getSystemDnsserver.
 */
export interface GetSystemDnsserverOutputArgs {
    id?: pulumi.Input<string>;
    name: pulumi.Input<string>;
}
