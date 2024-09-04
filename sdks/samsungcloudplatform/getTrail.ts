// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getTrail(args: GetTrailArgs, opts?: pulumi.InvokeOptions): Promise<GetTrailResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("samsungcloudplatform:index/getTrail:getTrail", {
        "id": args.id,
        "trailId": args.trailId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getTrail.
 */
export interface GetTrailArgs {
    id?: string;
    trailId: string;
}

/**
 * A collection of values returned by getTrail.
 */
export interface GetTrailResult {
    readonly createdBy: string;
    readonly createdByName: string;
    readonly createdDt: string;
    readonly description: string;
    readonly id: string;
    readonly isLoggingTargetAllRegion: string;
    readonly isLoggingTargetAllResource: string;
    readonly isLoggingTargetAllUser: string;
    readonly isTrailDeleted: string;
    readonly lastDigestFileCreateDt: string;
    readonly loggingTargetRegions: string[];
    readonly loggingTargetResourceIds: string[];
    readonly loggingTargetUsers: outputs.GetTrailLoggingTargetUser[];
    readonly modifiedBy: string;
    readonly modifiedByName: string;
    readonly modifiedDt: string;
    readonly objectStorageFolderName: string;
    readonly objectStorageName: string;
    readonly obsBucketId: string;
    readonly obsBucketName: string;
    readonly projectId: string;
    readonly projectName: string;
    readonly region: string;
    readonly serviceZoneId: string;
    readonly targetLoggingResourceLists: outputs.GetTrailTargetLoggingResourceList[];
    readonly trailBatchEndDt: string;
    readonly trailBatchFirstStartDt: string;
    readonly trailBatchLastSuccessDt: string;
    readonly trailBatchStartDt: string;
    readonly trailBatchState: string;
    readonly trailId: string;
    readonly trailName: string;
    readonly trailSaveType: string;
    readonly trailState: string;
    readonly validationYn: string;
}
export function getTrailOutput(args: GetTrailOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetTrailResult> {
    return pulumi.output(args).apply((a: any) => getTrail(a, opts))
}

/**
 * A collection of arguments for invoking getTrail.
 */
export interface GetTrailOutputArgs {
    id?: pulumi.Input<string>;
    trailId: pulumi.Input<string>;
}
