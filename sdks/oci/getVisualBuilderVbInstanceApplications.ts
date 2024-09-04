// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getVisualBuilderVbInstanceApplications(args: GetVisualBuilderVbInstanceApplicationsArgs, opts?: pulumi.InvokeOptions): Promise<GetVisualBuilderVbInstanceApplicationsResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("oci:index/getVisualBuilderVbInstanceApplications:getVisualBuilderVbInstanceApplications", {
        "id": args.id,
        "idcsOpenId": args.idcsOpenId,
        "vbInstanceId": args.vbInstanceId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getVisualBuilderVbInstanceApplications.
 */
export interface GetVisualBuilderVbInstanceApplicationsArgs {
    id?: string;
    idcsOpenId?: string;
    vbInstanceId: string;
}

/**
 * A collection of values returned by getVisualBuilderVbInstanceApplications.
 */
export interface GetVisualBuilderVbInstanceApplicationsResult {
    readonly applicationSummaryCollections: outputs.GetVisualBuilderVbInstanceApplicationsApplicationSummaryCollection[];
    readonly id: string;
    readonly idcsOpenId?: string;
    readonly vbInstanceId: string;
}
export function getVisualBuilderVbInstanceApplicationsOutput(args: GetVisualBuilderVbInstanceApplicationsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetVisualBuilderVbInstanceApplicationsResult> {
    return pulumi.output(args).apply((a: any) => getVisualBuilderVbInstanceApplications(a, opts))
}

/**
 * A collection of arguments for invoking getVisualBuilderVbInstanceApplications.
 */
export interface GetVisualBuilderVbInstanceApplicationsOutputArgs {
    id?: pulumi.Input<string>;
    idcsOpenId?: pulumi.Input<string>;
    vbInstanceId: pulumi.Input<string>;
}
