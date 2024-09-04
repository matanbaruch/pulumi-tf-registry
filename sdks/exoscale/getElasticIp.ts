// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getElasticIp(args: GetElasticIpArgs, opts?: pulumi.InvokeOptions): Promise<GetElasticIpResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("exoscale:index/getElasticIp:getElasticIp", {
        "id": args.id,
        "ipAddress": args.ipAddress,
        "labels": args.labels,
        "zone": args.zone,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getElasticIp.
 */
export interface GetElasticIpArgs {
    id?: string;
    ipAddress?: string;
    labels?: {[key: string]: string};
    zone: string;
}

/**
 * A collection of values returned by getElasticIp.
 */
export interface GetElasticIpResult {
    readonly addressFamily: string;
    readonly cidr: string;
    readonly description: string;
    readonly healthchecks: outputs.GetElasticIpHealthcheck[];
    readonly id?: string;
    readonly ipAddress?: string;
    readonly labels?: {[key: string]: string};
    readonly reverseDns: string;
    readonly zone: string;
}
export function getElasticIpOutput(args: GetElasticIpOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetElasticIpResult> {
    return pulumi.output(args).apply((a: any) => getElasticIp(a, opts))
}

/**
 * A collection of arguments for invoking getElasticIp.
 */
export interface GetElasticIpOutputArgs {
    id?: pulumi.Input<string>;
    ipAddress?: pulumi.Input<string>;
    labels?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    zone: pulumi.Input<string>;
}
