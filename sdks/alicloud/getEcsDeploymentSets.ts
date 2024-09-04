// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getEcsDeploymentSets(args?: GetEcsDeploymentSetsArgs, opts?: pulumi.InvokeOptions): Promise<GetEcsDeploymentSetsResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("alicloud:index/getEcsDeploymentSets:getEcsDeploymentSets", {
        "deploymentSetName": args.deploymentSetName,
        "id": args.id,
        "ids": args.ids,
        "nameRegex": args.nameRegex,
        "outputFile": args.outputFile,
        "strategy": args.strategy,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getEcsDeploymentSets.
 */
export interface GetEcsDeploymentSetsArgs {
    deploymentSetName?: string;
    id?: string;
    ids?: string[];
    nameRegex?: string;
    outputFile?: string;
    strategy?: string;
}

/**
 * A collection of values returned by getEcsDeploymentSets.
 */
export interface GetEcsDeploymentSetsResult {
    readonly deploymentSetName?: string;
    readonly id: string;
    readonly ids: string[];
    readonly nameRegex?: string;
    readonly names: string[];
    readonly outputFile?: string;
    readonly sets: outputs.GetEcsDeploymentSetsSet[];
    readonly strategy?: string;
}
export function getEcsDeploymentSetsOutput(args?: GetEcsDeploymentSetsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetEcsDeploymentSetsResult> {
    return pulumi.output(args).apply((a: any) => getEcsDeploymentSets(a, opts))
}

/**
 * A collection of arguments for invoking getEcsDeploymentSets.
 */
export interface GetEcsDeploymentSetsOutputArgs {
    deploymentSetName?: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    ids?: pulumi.Input<pulumi.Input<string>[]>;
    nameRegex?: pulumi.Input<string>;
    outputFile?: pulumi.Input<string>;
    strategy?: pulumi.Input<string>;
}
