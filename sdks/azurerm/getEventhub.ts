// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getEventhub(args: GetEventhubArgs, opts?: pulumi.InvokeOptions): Promise<GetEventhubResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azurerm:index/getEventhub:getEventhub", {
        "id": args.id,
        "name": args.name,
        "namespaceName": args.namespaceName,
        "resourceGroupName": args.resourceGroupName,
        "timeouts": args.timeouts,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getEventhub.
 */
export interface GetEventhubArgs {
    id?: string;
    name: string;
    namespaceName: string;
    resourceGroupName: string;
    timeouts?: inputs.GetEventhubTimeouts;
}

/**
 * A collection of values returned by getEventhub.
 */
export interface GetEventhubResult {
    readonly id: string;
    readonly name: string;
    readonly namespaceName: string;
    readonly partitionCount: number;
    readonly partitionIds: string[];
    readonly resourceGroupName: string;
    readonly timeouts?: outputs.GetEventhubTimeouts;
}
export function getEventhubOutput(args: GetEventhubOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetEventhubResult> {
    return pulumi.output(args).apply((a: any) => getEventhub(a, opts))
}

/**
 * A collection of arguments for invoking getEventhub.
 */
export interface GetEventhubOutputArgs {
    id?: pulumi.Input<string>;
    name: pulumi.Input<string>;
    namespaceName: pulumi.Input<string>;
    resourceGroupName: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.GetEventhubTimeoutsArgs>;
}
