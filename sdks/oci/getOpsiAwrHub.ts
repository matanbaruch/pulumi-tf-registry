// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getOpsiAwrHub(args: GetOpsiAwrHubArgs, opts?: pulumi.InvokeOptions): Promise<GetOpsiAwrHubResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("oci:index/getOpsiAwrHub:getOpsiAwrHub", {
        "awrHubId": args.awrHubId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getOpsiAwrHub.
 */
export interface GetOpsiAwrHubArgs {
    awrHubId: string;
}

/**
 * A collection of values returned by getOpsiAwrHub.
 */
export interface GetOpsiAwrHubResult {
    readonly awrHubId: string;
    readonly awrMailboxUrl: string;
    readonly compartmentId: string;
    readonly definedTags: {[key: string]: string};
    readonly displayName: string;
    readonly freeformTags: {[key: string]: string};
    readonly hubDstTimezoneVersion: string;
    readonly id: string;
    readonly lifecycleDetails: string;
    readonly objectStorageBucketName: string;
    readonly operationsInsightsWarehouseId: string;
    readonly state: string;
    readonly systemTags: {[key: string]: string};
    readonly timeCreated: string;
    readonly timeUpdated: string;
}
export function getOpsiAwrHubOutput(args: GetOpsiAwrHubOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetOpsiAwrHubResult> {
    return pulumi.output(args).apply((a: any) => getOpsiAwrHub(a, opts))
}

/**
 * A collection of arguments for invoking getOpsiAwrHub.
 */
export interface GetOpsiAwrHubOutputArgs {
    awrHubId: pulumi.Input<string>;
}
