// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getDnsInstances(args?: GetDnsInstancesArgs, opts?: pulumi.InvokeOptions): Promise<GetDnsInstancesResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("alicloud:index/getDnsInstances:getDnsInstances", {
        "domainType": args.domainType,
        "id": args.id,
        "ids": args.ids,
        "lang": args.lang,
        "outputFile": args.outputFile,
        "userClientIp": args.userClientIp,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getDnsInstances.
 */
export interface GetDnsInstancesArgs {
    domainType?: string;
    id?: string;
    ids?: string[];
    lang?: string;
    outputFile?: string;
    userClientIp?: string;
}

/**
 * A collection of values returned by getDnsInstances.
 */
export interface GetDnsInstancesResult {
    readonly domainType?: string;
    readonly id: string;
    readonly ids: string[];
    readonly instances: outputs.GetDnsInstancesInstance[];
    readonly lang?: string;
    readonly outputFile?: string;
    readonly userClientIp?: string;
}
export function getDnsInstancesOutput(args?: GetDnsInstancesOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetDnsInstancesResult> {
    return pulumi.output(args).apply((a: any) => getDnsInstances(a, opts))
}

/**
 * A collection of arguments for invoking getDnsInstances.
 */
export interface GetDnsInstancesOutputArgs {
    domainType?: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    ids?: pulumi.Input<pulumi.Input<string>[]>;
    lang?: pulumi.Input<string>;
    outputFile?: pulumi.Input<string>;
    userClientIp?: pulumi.Input<string>;
}
