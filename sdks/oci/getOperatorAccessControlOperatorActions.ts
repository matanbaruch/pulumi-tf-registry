// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getOperatorAccessControlOperatorActions(args: GetOperatorAccessControlOperatorActionsArgs, opts?: pulumi.InvokeOptions): Promise<GetOperatorAccessControlOperatorActionsResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("oci:index/getOperatorAccessControlOperatorActions:getOperatorAccessControlOperatorActions", {
        "compartmentId": args.compartmentId,
        "filters": args.filters,
        "id": args.id,
        "name": args.name,
        "resourceType": args.resourceType,
        "state": args.state,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getOperatorAccessControlOperatorActions.
 */
export interface GetOperatorAccessControlOperatorActionsArgs {
    compartmentId: string;
    filters?: inputs.GetOperatorAccessControlOperatorActionsFilter[];
    id?: string;
    name?: string;
    resourceType?: string;
    state?: string;
}

/**
 * A collection of values returned by getOperatorAccessControlOperatorActions.
 */
export interface GetOperatorAccessControlOperatorActionsResult {
    readonly compartmentId: string;
    readonly filters?: outputs.GetOperatorAccessControlOperatorActionsFilter[];
    readonly id: string;
    readonly name?: string;
    readonly operatorActionCollections: outputs.GetOperatorAccessControlOperatorActionsOperatorActionCollection[];
    readonly resourceType?: string;
    readonly state?: string;
}
export function getOperatorAccessControlOperatorActionsOutput(args: GetOperatorAccessControlOperatorActionsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetOperatorAccessControlOperatorActionsResult> {
    return pulumi.output(args).apply((a: any) => getOperatorAccessControlOperatorActions(a, opts))
}

/**
 * A collection of arguments for invoking getOperatorAccessControlOperatorActions.
 */
export interface GetOperatorAccessControlOperatorActionsOutputArgs {
    compartmentId: pulumi.Input<string>;
    filters?: pulumi.Input<pulumi.Input<inputs.GetOperatorAccessControlOperatorActionsFilterArgs>[]>;
    id?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    resourceType?: pulumi.Input<string>;
    state?: pulumi.Input<string>;
}
