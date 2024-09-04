// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getDnsTxtRecord(args: GetDnsTxtRecordArgs, opts?: pulumi.InvokeOptions): Promise<GetDnsTxtRecordResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azurerm:index/getDnsTxtRecord:getDnsTxtRecord", {
        "id": args.id,
        "name": args.name,
        "resourceGroupName": args.resourceGroupName,
        "timeouts": args.timeouts,
        "zoneName": args.zoneName,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getDnsTxtRecord.
 */
export interface GetDnsTxtRecordArgs {
    id?: string;
    name: string;
    resourceGroupName: string;
    timeouts?: inputs.GetDnsTxtRecordTimeouts;
    zoneName: string;
}

/**
 * A collection of values returned by getDnsTxtRecord.
 */
export interface GetDnsTxtRecordResult {
    readonly fqdn: string;
    readonly id: string;
    readonly name: string;
    readonly records: outputs.GetDnsTxtRecordRecord[];
    readonly resourceGroupName: string;
    readonly tags: {[key: string]: string};
    readonly timeouts?: outputs.GetDnsTxtRecordTimeouts;
    readonly ttl: number;
    readonly zoneName: string;
}
export function getDnsTxtRecordOutput(args: GetDnsTxtRecordOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetDnsTxtRecordResult> {
    return pulumi.output(args).apply((a: any) => getDnsTxtRecord(a, opts))
}

/**
 * A collection of arguments for invoking getDnsTxtRecord.
 */
export interface GetDnsTxtRecordOutputArgs {
    id?: pulumi.Input<string>;
    name: pulumi.Input<string>;
    resourceGroupName: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.GetDnsTxtRecordTimeoutsArgs>;
    zoneName: pulumi.Input<string>;
}
