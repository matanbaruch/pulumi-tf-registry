// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getSrvRecordSet(args: GetSrvRecordSetArgs, opts?: pulumi.InvokeOptions): Promise<GetSrvRecordSetResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("dns:index/getSrvRecordSet:getSrvRecordSet", {
        "service": args.service,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSrvRecordSet.
 */
export interface GetSrvRecordSetArgs {
    service: string;
}

/**
 * A collection of values returned by getSrvRecordSet.
 */
export interface GetSrvRecordSetResult {
    readonly id: string;
    readonly service: string;
    readonly srvs: outputs.GetSrvRecordSetSrv[];
}
export function getSrvRecordSetOutput(args: GetSrvRecordSetOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetSrvRecordSetResult> {
    return pulumi.output(args).apply((a: any) => getSrvRecordSet(a, opts))
}

/**
 * A collection of arguments for invoking getSrvRecordSet.
 */
export interface GetSrvRecordSetOutputArgs {
    service: pulumi.Input<string>;
}
