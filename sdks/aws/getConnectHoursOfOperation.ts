// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getConnectHoursOfOperation(args: GetConnectHoursOfOperationArgs, opts?: pulumi.InvokeOptions): Promise<GetConnectHoursOfOperationResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("aws:index/getConnectHoursOfOperation:getConnectHoursOfOperation", {
        "hoursOfOperationId": args.hoursOfOperationId,
        "id": args.id,
        "instanceId": args.instanceId,
        "name": args.name,
        "tags": args.tags,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getConnectHoursOfOperation.
 */
export interface GetConnectHoursOfOperationArgs {
    hoursOfOperationId?: string;
    id?: string;
    instanceId: string;
    name?: string;
    tags?: {[key: string]: string};
}

/**
 * A collection of values returned by getConnectHoursOfOperation.
 */
export interface GetConnectHoursOfOperationResult {
    readonly arn: string;
    readonly configs: outputs.GetConnectHoursOfOperationConfig[];
    readonly description: string;
    readonly hoursOfOperationId: string;
    readonly id: string;
    readonly instanceId: string;
    readonly name: string;
    readonly tags: {[key: string]: string};
    readonly timeZone: string;
}
export function getConnectHoursOfOperationOutput(args: GetConnectHoursOfOperationOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetConnectHoursOfOperationResult> {
    return pulumi.output(args).apply((a: any) => getConnectHoursOfOperation(a, opts))
}

/**
 * A collection of arguments for invoking getConnectHoursOfOperation.
 */
export interface GetConnectHoursOfOperationOutputArgs {
    hoursOfOperationId?: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    instanceId: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}
