// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getDnsRecords(args: GetDnsRecordsArgs, opts?: pulumi.InvokeOptions): Promise<GetDnsRecordsResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("anxcloud:index/getDnsRecords:getDnsRecords", {
        "id": args.id,
        "zoneName": args.zoneName,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getDnsRecords.
 */
export interface GetDnsRecordsArgs {
    id?: string;
    zoneName: string;
}

/**
 * A collection of values returned by getDnsRecords.
 */
export interface GetDnsRecordsResult {
    readonly id: string;
    readonly records: outputs.GetDnsRecordsRecord[];
    readonly zoneName: string;
}
export function getDnsRecordsOutput(args: GetDnsRecordsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetDnsRecordsResult> {
    return pulumi.output(args).apply((a: any) => getDnsRecords(a, opts))
}

/**
 * A collection of arguments for invoking getDnsRecords.
 */
export interface GetDnsRecordsOutputArgs {
    id?: pulumi.Input<string>;
    zoneName: pulumi.Input<string>;
}
