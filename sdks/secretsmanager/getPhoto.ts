// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getPhoto(args: GetPhotoArgs, opts?: pulumi.InvokeOptions): Promise<GetPhotoResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("secretsmanager:index/getPhoto:getPhoto", {
        "id": args.id,
        "path": args.path,
        "title": args.title,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getPhoto.
 */
export interface GetPhotoArgs {
    id?: string;
    path: string;
    title?: string;
}

/**
 * A collection of values returned by getPhoto.
 */
export interface GetPhotoResult {
    readonly fileReves: outputs.GetPhotoFileRef[];
    readonly id: string;
    readonly notes: string;
    readonly path: string;
    readonly title?: string;
    readonly type: string;
}
export function getPhotoOutput(args: GetPhotoOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetPhotoResult> {
    return pulumi.output(args).apply((a: any) => getPhoto(a, opts))
}

/**
 * A collection of arguments for invoking getPhoto.
 */
export interface GetPhotoOutputArgs {
    id?: pulumi.Input<string>;
    path: pulumi.Input<string>;
    title?: pulumi.Input<string>;
}
