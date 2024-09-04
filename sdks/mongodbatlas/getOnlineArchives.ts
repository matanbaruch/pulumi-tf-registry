// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getOnlineArchives(args: GetOnlineArchivesArgs, opts?: pulumi.InvokeOptions): Promise<GetOnlineArchivesResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("mongodbatlas:index/getOnlineArchives:getOnlineArchives", {
        "clusterName": args.clusterName,
        "id": args.id,
        "projectId": args.projectId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getOnlineArchives.
 */
export interface GetOnlineArchivesArgs {
    clusterName: string;
    id?: string;
    projectId: string;
}

/**
 * A collection of values returned by getOnlineArchives.
 */
export interface GetOnlineArchivesResult {
    readonly clusterName: string;
    readonly id: string;
    readonly projectId: string;
    readonly results: outputs.GetOnlineArchivesResult[];
    readonly totalCount: number;
}
export function getOnlineArchivesOutput(args: GetOnlineArchivesOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetOnlineArchivesResult> {
    return pulumi.output(args).apply((a: any) => getOnlineArchives(a, opts))
}

/**
 * A collection of arguments for invoking getOnlineArchives.
 */
export interface GetOnlineArchivesOutputArgs {
    clusterName: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    projectId: pulumi.Input<string>;
}
