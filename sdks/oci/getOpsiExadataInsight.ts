// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getOpsiExadataInsight(args: GetOpsiExadataInsightArgs, opts?: pulumi.InvokeOptions): Promise<GetOpsiExadataInsightResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("oci:index/getOpsiExadataInsight:getOpsiExadataInsight", {
        "exadataInsightId": args.exadataInsightId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getOpsiExadataInsight.
 */
export interface GetOpsiExadataInsightArgs {
    exadataInsightId: string;
}

/**
 * A collection of values returned by getOpsiExadataInsight.
 */
export interface GetOpsiExadataInsightResult {
    readonly compartmentId: string;
    readonly definedTags: {[key: string]: string};
    readonly enterpriseManagerBridgeId: string;
    readonly enterpriseManagerEntityDisplayName: string;
    readonly enterpriseManagerEntityIdentifier: string;
    readonly enterpriseManagerEntityName: string;
    readonly enterpriseManagerEntityType: string;
    readonly enterpriseManagerIdentifier: string;
    readonly entitySource: string;
    readonly exadataDisplayName: string;
    readonly exadataInfraId: string;
    readonly exadataInfraResourceType: string;
    readonly exadataInsightId: string;
    readonly exadataName: string;
    readonly exadataRackType: string;
    readonly exadataShape: string;
    readonly exadataType: string;
    readonly freeformTags: {[key: string]: string};
    readonly id: string;
    readonly isAutoSyncEnabled: boolean;
    readonly isVirtualizedExadata: boolean;
    readonly lifecycleDetails: string;
    readonly memberVmClusterDetails: outputs.GetOpsiExadataInsightMemberVmClusterDetail[];
    readonly state: string;
    readonly status: string;
    readonly systemTags: {[key: string]: string};
    readonly timeCreated: string;
    readonly timeUpdated: string;
}
export function getOpsiExadataInsightOutput(args: GetOpsiExadataInsightOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetOpsiExadataInsightResult> {
    return pulumi.output(args).apply((a: any) => getOpsiExadataInsight(a, opts))
}

/**
 * A collection of arguments for invoking getOpsiExadataInsight.
 */
export interface GetOpsiExadataInsightOutputArgs {
    exadataInsightId: pulumi.Input<string>;
}
