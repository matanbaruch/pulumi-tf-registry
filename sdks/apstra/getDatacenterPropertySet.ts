// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getDatacenterPropertySet(args: GetDatacenterPropertySetArgs, opts?: pulumi.InvokeOptions): Promise<GetDatacenterPropertySetResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("apstra:index/getDatacenterPropertySet:getDatacenterPropertySet", {
        "blueprintId": args.blueprintId,
        "id": args.id,
        "name": args.name,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getDatacenterPropertySet.
 */
export interface GetDatacenterPropertySetArgs {
    blueprintId: string;
    id?: string;
    name?: string;
}

/**
 * A collection of values returned by getDatacenterPropertySet.
 */
export interface GetDatacenterPropertySetResult {
    readonly blueprintId: string;
    readonly data: string;
    readonly id: string;
    readonly keys: string[];
    readonly name: string;
    readonly stale: boolean;
    readonly syncRequired: boolean;
    readonly syncWithCatalog: boolean;
}
export function getDatacenterPropertySetOutput(args: GetDatacenterPropertySetOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetDatacenterPropertySetResult> {
    return pulumi.output(args).apply((a: any) => getDatacenterPropertySet(a, opts))
}

/**
 * A collection of arguments for invoking getDatacenterPropertySet.
 */
export interface GetDatacenterPropertySetOutputArgs {
    blueprintId: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
}
