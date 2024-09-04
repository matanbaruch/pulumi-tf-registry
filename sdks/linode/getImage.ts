// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getImage(args: GetImageArgs, opts?: pulumi.InvokeOptions): Promise<GetImageResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("linode:index/getImage:getImage", {
        "id": args.id,
        "replications": args.replications,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getImage.
 */
export interface GetImageArgs {
    id: string;
    replications?: inputs.GetImageReplication[];
}

/**
 * A collection of values returned by getImage.
 */
export interface GetImageResult {
    readonly capabilities: string[];
    readonly created: string;
    readonly createdBy: string;
    readonly deprecated: boolean;
    readonly description: string;
    readonly expiry: string;
    readonly id: string;
    readonly isPublic: boolean;
    readonly label: string;
    readonly replications?: outputs.GetImageReplication[];
    readonly size: number;
    readonly status: string;
    readonly tags: string[];
    readonly totalSize: number;
    readonly type: string;
    readonly vendor: string;
}
export function getImageOutput(args: GetImageOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetImageResult> {
    return pulumi.output(args).apply((a: any) => getImage(a, opts))
}

/**
 * A collection of arguments for invoking getImage.
 */
export interface GetImageOutputArgs {
    id: pulumi.Input<string>;
    replications?: pulumi.Input<pulumi.Input<inputs.GetImageReplicationArgs>[]>;
}
