// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getDatascienceModelDeployment(args: GetDatascienceModelDeploymentArgs, opts?: pulumi.InvokeOptions): Promise<GetDatascienceModelDeploymentResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("oci:index/getDatascienceModelDeployment:getDatascienceModelDeployment", {
        "modelDeploymentId": args.modelDeploymentId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getDatascienceModelDeployment.
 */
export interface GetDatascienceModelDeploymentArgs {
    modelDeploymentId: string;
}

/**
 * A collection of values returned by getDatascienceModelDeployment.
 */
export interface GetDatascienceModelDeploymentResult {
    readonly categoryLogDetails: outputs.GetDatascienceModelDeploymentCategoryLogDetail[];
    readonly compartmentId: string;
    readonly createdBy: string;
    readonly definedTags: {[key: string]: string};
    readonly description: string;
    readonly displayName: string;
    readonly freeformTags: {[key: string]: string};
    readonly id: string;
    readonly lifecycleDetails: string;
    readonly modelDeploymentConfigurationDetails: outputs.GetDatascienceModelDeploymentModelDeploymentConfigurationDetail[];
    readonly modelDeploymentId: string;
    readonly modelDeploymentSystemDatas: outputs.GetDatascienceModelDeploymentModelDeploymentSystemData[];
    readonly modelDeploymentUrl: string;
    readonly opcParentRptUrl: string;
    readonly projectId: string;
    readonly state: string;
    readonly timeCreated: string;
}
export function getDatascienceModelDeploymentOutput(args: GetDatascienceModelDeploymentOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetDatascienceModelDeploymentResult> {
    return pulumi.output(args).apply((a: any) => getDatascienceModelDeployment(a, opts))
}

/**
 * A collection of arguments for invoking getDatascienceModelDeployment.
 */
export interface GetDatascienceModelDeploymentOutputArgs {
    modelDeploymentId: pulumi.Input<string>;
}
