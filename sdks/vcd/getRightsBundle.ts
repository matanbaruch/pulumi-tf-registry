// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getRightsBundle(args: GetRightsBundleArgs, opts?: pulumi.InvokeOptions): Promise<GetRightsBundleResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("vcd:index/getRightsBundle:getRightsBundle", {
        "id": args.id,
        "name": args.name,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getRightsBundle.
 */
export interface GetRightsBundleArgs {
    id?: string;
    name: string;
}

/**
 * A collection of values returned by getRightsBundle.
 */
export interface GetRightsBundleResult {
    readonly bundleKey: string;
    readonly description: string;
    readonly id: string;
    readonly name: string;
    readonly publishToAllTenants: boolean;
    readonly readOnly: boolean;
    readonly rights: string[];
    readonly tenants: string[];
}
export function getRightsBundleOutput(args: GetRightsBundleOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetRightsBundleResult> {
    return pulumi.output(args).apply((a: any) => getRightsBundle(a, opts))
}

/**
 * A collection of arguments for invoking getRightsBundle.
 */
export interface GetRightsBundleOutputArgs {
    id?: pulumi.Input<string>;
    name: pulumi.Input<string>;
}
