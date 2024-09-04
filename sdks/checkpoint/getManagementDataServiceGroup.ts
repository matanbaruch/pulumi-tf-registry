// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getManagementDataServiceGroup(args?: GetManagementDataServiceGroupArgs, opts?: pulumi.InvokeOptions): Promise<GetManagementDataServiceGroupResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("checkpoint:index/getManagementDataServiceGroup:getManagementDataServiceGroup", {
        "id": args.id,
        "name": args.name,
        "uid": args.uid,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getManagementDataServiceGroup.
 */
export interface GetManagementDataServiceGroupArgs {
    id?: string;
    name?: string;
    uid?: string;
}

/**
 * A collection of values returned by getManagementDataServiceGroup.
 */
export interface GetManagementDataServiceGroupResult {
    readonly color: string;
    readonly comments: string;
    readonly groups: string[];
    readonly id: string;
    readonly members: string[];
    readonly name?: string;
    readonly tags: string[];
    readonly uid?: string;
}
export function getManagementDataServiceGroupOutput(args?: GetManagementDataServiceGroupOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetManagementDataServiceGroupResult> {
    return pulumi.output(args).apply((a: any) => getManagementDataServiceGroup(a, opts))
}

/**
 * A collection of arguments for invoking getManagementDataServiceGroup.
 */
export interface GetManagementDataServiceGroupOutputArgs {
    id?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    uid?: pulumi.Input<string>;
}
