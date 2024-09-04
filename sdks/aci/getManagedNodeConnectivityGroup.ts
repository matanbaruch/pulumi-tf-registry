// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getManagedNodeConnectivityGroup(args: GetManagedNodeConnectivityGroupArgs, opts?: pulumi.InvokeOptions): Promise<GetManagedNodeConnectivityGroupResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("aci:index/getManagedNodeConnectivityGroup:getManagedNodeConnectivityGroup", {
        "annotation": args.annotation,
        "id": args.id,
        "name": args.name,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getManagedNodeConnectivityGroup.
 */
export interface GetManagedNodeConnectivityGroupArgs {
    annotation?: string;
    id?: string;
    name: string;
}

/**
 * A collection of values returned by getManagedNodeConnectivityGroup.
 */
export interface GetManagedNodeConnectivityGroupResult {
    readonly annotation: string;
    readonly id: string;
    readonly name: string;
}
export function getManagedNodeConnectivityGroupOutput(args: GetManagedNodeConnectivityGroupOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetManagedNodeConnectivityGroupResult> {
    return pulumi.output(args).apply((a: any) => getManagedNodeConnectivityGroup(a, opts))
}

/**
 * A collection of arguments for invoking getManagedNodeConnectivityGroup.
 */
export interface GetManagedNodeConnectivityGroupOutputArgs {
    annotation?: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    name: pulumi.Input<string>;
}
