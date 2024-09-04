// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getSgtObjects(args: GetSgtObjectsArgs, opts?: pulumi.InvokeOptions): Promise<GetSgtObjectsResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("fmc:index/getSgtObjects:getSgtObjects", {
        "name": args.name,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSgtObjects.
 */
export interface GetSgtObjectsArgs {
    name: string;
}

/**
 * A collection of values returned by getSgtObjects.
 */
export interface GetSgtObjectsResult {
    readonly id: string;
    readonly name: string;
    readonly type: string;
}
export function getSgtObjectsOutput(args: GetSgtObjectsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetSgtObjectsResult> {
    return pulumi.output(args).apply((a: any) => getSgtObjects(a, opts))
}

/**
 * A collection of arguments for invoking getSgtObjects.
 */
export interface GetSgtObjectsOutputArgs {
    name: pulumi.Input<string>;
}
