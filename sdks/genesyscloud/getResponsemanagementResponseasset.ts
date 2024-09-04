// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getResponsemanagementResponseasset(args: GetResponsemanagementResponseassetArgs, opts?: pulumi.InvokeOptions): Promise<GetResponsemanagementResponseassetResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("genesyscloud:index/getResponsemanagementResponseasset:getResponsemanagementResponseasset", {
        "id": args.id,
        "name": args.name,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getResponsemanagementResponseasset.
 */
export interface GetResponsemanagementResponseassetArgs {
    id?: string;
    name: string;
}

/**
 * A collection of values returned by getResponsemanagementResponseasset.
 */
export interface GetResponsemanagementResponseassetResult {
    readonly id: string;
    readonly name: string;
}
export function getResponsemanagementResponseassetOutput(args: GetResponsemanagementResponseassetOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetResponsemanagementResponseassetResult> {
    return pulumi.output(args).apply((a: any) => getResponsemanagementResponseasset(a, opts))
}

/**
 * A collection of arguments for invoking getResponsemanagementResponseasset.
 */
export interface GetResponsemanagementResponseassetOutputArgs {
    id?: pulumi.Input<string>;
    name: pulumi.Input<string>;
}
