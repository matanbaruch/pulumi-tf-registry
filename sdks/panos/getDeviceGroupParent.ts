// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getDeviceGroupParent(args?: GetDeviceGroupParentArgs, opts?: pulumi.InvokeOptions): Promise<GetDeviceGroupParentResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("panos:index/getDeviceGroupParent:getDeviceGroupParent", {
        "id": args.id,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getDeviceGroupParent.
 */
export interface GetDeviceGroupParentArgs {
    id?: string;
}

/**
 * A collection of values returned by getDeviceGroupParent.
 */
export interface GetDeviceGroupParentResult {
    readonly entries: {[key: string]: string};
    readonly id: string;
    readonly total: number;
}
export function getDeviceGroupParentOutput(args?: GetDeviceGroupParentOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetDeviceGroupParentResult> {
    return pulumi.output(args).apply((a: any) => getDeviceGroupParent(a, opts))
}

/**
 * A collection of arguments for invoking getDeviceGroupParent.
 */
export interface GetDeviceGroupParentOutputArgs {
    id?: pulumi.Input<string>;
}
