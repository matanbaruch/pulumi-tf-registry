// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getInstanceList(args: GetInstanceListArgs, opts?: pulumi.InvokeOptions): Promise<GetInstanceListResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("stackbill:index/getInstanceList:getInstanceList", {
        "id": args.id,
        "uuid": args.uuid,
        "zoneUuid": args.zoneUuid,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getInstanceList.
 */
export interface GetInstanceListArgs {
    id?: string;
    uuid?: string;
    zoneUuid: string;
}

/**
 * A collection of values returned by getInstanceList.
 */
export interface GetInstanceListResult {
    readonly id: string;
    readonly instances: outputs.GetInstanceListInstance[];
    readonly length: number;
    readonly uuid?: string;
    readonly zoneUuid: string;
}
export function getInstanceListOutput(args: GetInstanceListOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetInstanceListResult> {
    return pulumi.output(args).apply((a: any) => getInstanceList(a, opts))
}

/**
 * A collection of arguments for invoking getInstanceList.
 */
export interface GetInstanceListOutputArgs {
    id?: pulumi.Input<string>;
    uuid?: pulumi.Input<string>;
    zoneUuid: pulumi.Input<string>;
}
