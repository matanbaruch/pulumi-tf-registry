// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getLookoutvisionProject(args: GetLookoutvisionProjectArgs, opts?: pulumi.InvokeOptions): Promise<GetLookoutvisionProjectResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("awscc:index/getLookoutvisionProject:getLookoutvisionProject", {
        "id": args.id,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getLookoutvisionProject.
 */
export interface GetLookoutvisionProjectArgs {
    id: string;
}

/**
 * A collection of values returned by getLookoutvisionProject.
 */
export interface GetLookoutvisionProjectResult {
    readonly arn: string;
    readonly id: string;
    readonly projectName: string;
}
export function getLookoutvisionProjectOutput(args: GetLookoutvisionProjectOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetLookoutvisionProjectResult> {
    return pulumi.output(args).apply((a: any) => getLookoutvisionProject(a, opts))
}

/**
 * A collection of arguments for invoking getLookoutvisionProject.
 */
export interface GetLookoutvisionProjectOutputArgs {
    id: pulumi.Input<string>;
}
