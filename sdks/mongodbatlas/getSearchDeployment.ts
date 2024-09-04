// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getSearchDeployment(args: GetSearchDeploymentArgs, opts?: pulumi.InvokeOptions): Promise<GetSearchDeploymentResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("mongodbatlas:index/getSearchDeployment:getSearchDeployment", {
        "clusterName": args.clusterName,
        "projectId": args.projectId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSearchDeployment.
 */
export interface GetSearchDeploymentArgs {
    clusterName: string;
    projectId: string;
}

/**
 * A collection of values returned by getSearchDeployment.
 */
export interface GetSearchDeploymentResult {
    readonly clusterName: string;
    readonly id: string;
    readonly projectId: string;
    readonly specs: outputs.GetSearchDeploymentSpec[];
    readonly stateName: string;
}
export function getSearchDeploymentOutput(args: GetSearchDeploymentOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetSearchDeploymentResult> {
    return pulumi.output(args).apply((a: any) => getSearchDeployment(a, opts))
}

/**
 * A collection of arguments for invoking getSearchDeployment.
 */
export interface GetSearchDeploymentOutputArgs {
    clusterName: pulumi.Input<string>;
    projectId: pulumi.Input<string>;
}
