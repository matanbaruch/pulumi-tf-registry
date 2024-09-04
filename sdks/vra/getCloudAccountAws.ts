// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getCloudAccountAws(args?: GetCloudAccountAwsArgs, opts?: pulumi.InvokeOptions): Promise<GetCloudAccountAwsResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("vra:index/getCloudAccountAws:getCloudAccountAws", {
        "id": args.id,
        "name": args.name,
        "tags": args.tags,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getCloudAccountAws.
 */
export interface GetCloudAccountAwsArgs {
    id?: string;
    name?: string;
    tags?: inputs.GetCloudAccountAwsTag[];
}

/**
 * A collection of values returned by getCloudAccountAws.
 */
export interface GetCloudAccountAwsResult {
    readonly accessKey: string;
    readonly createdAt: string;
    readonly description: string;
    readonly id: string;
    readonly links: outputs.GetCloudAccountAwsLink[];
    readonly name: string;
    readonly orgId: string;
    readonly owner: string;
    readonly regions: string[];
    readonly tags?: outputs.GetCloudAccountAwsTag[];
    readonly updatedAt: string;
}
export function getCloudAccountAwsOutput(args?: GetCloudAccountAwsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetCloudAccountAwsResult> {
    return pulumi.output(args).apply((a: any) => getCloudAccountAws(a, opts))
}

/**
 * A collection of arguments for invoking getCloudAccountAws.
 */
export interface GetCloudAccountAwsOutputArgs {
    id?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    tags?: pulumi.Input<pulumi.Input<inputs.GetCloudAccountAwsTagArgs>[]>;
}
