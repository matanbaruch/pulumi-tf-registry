// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getIpv4AccessList(args: GetIpv4AccessListArgs, opts?: pulumi.InvokeOptions): Promise<GetIpv4AccessListResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("nxos:index/getIpv4AccessList:getIpv4AccessList", {
        "device": args.device,
        "name": args.name,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getIpv4AccessList.
 */
export interface GetIpv4AccessListArgs {
    device?: string;
    name: string;
}

/**
 * A collection of values returned by getIpv4AccessList.
 */
export interface GetIpv4AccessListResult {
    readonly device?: string;
    readonly id: string;
    readonly name: string;
}
export function getIpv4AccessListOutput(args: GetIpv4AccessListOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetIpv4AccessListResult> {
    return pulumi.output(args).apply((a: any) => getIpv4AccessList(a, opts))
}

/**
 * A collection of arguments for invoking getIpv4AccessList.
 */
export interface GetIpv4AccessListOutputArgs {
    device?: pulumi.Input<string>;
    name: pulumi.Input<string>;
}
