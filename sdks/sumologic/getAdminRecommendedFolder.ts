// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getAdminRecommendedFolder(args?: GetAdminRecommendedFolderArgs, opts?: pulumi.InvokeOptions): Promise<GetAdminRecommendedFolderResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("sumologic:index/getAdminRecommendedFolder:getAdminRecommendedFolder", {
        "description": args.description,
        "id": args.id,
        "name": args.name,
        "timeouts": args.timeouts,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getAdminRecommendedFolder.
 */
export interface GetAdminRecommendedFolderArgs {
    description?: string;
    id?: string;
    name?: string;
    timeouts?: inputs.GetAdminRecommendedFolderTimeouts;
}

/**
 * A collection of values returned by getAdminRecommendedFolder.
 */
export interface GetAdminRecommendedFolderResult {
    readonly description: string;
    readonly id: string;
    readonly name: string;
    readonly timeouts?: outputs.GetAdminRecommendedFolderTimeouts;
}
export function getAdminRecommendedFolderOutput(args?: GetAdminRecommendedFolderOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetAdminRecommendedFolderResult> {
    return pulumi.output(args).apply((a: any) => getAdminRecommendedFolder(a, opts))
}

/**
 * A collection of arguments for invoking getAdminRecommendedFolder.
 */
export interface GetAdminRecommendedFolderOutputArgs {
    description?: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.GetAdminRecommendedFolderTimeoutsArgs>;
}
