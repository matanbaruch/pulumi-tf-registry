// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getDeployment(args?: GetDeploymentArgs, opts?: pulumi.InvokeOptions): Promise<GetDeploymentResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("vra7:index/getDeployment:getDeployment", {
        "deploymentId": args.deploymentId,
        "id": args.id,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getDeployment.
 */
export interface GetDeploymentArgs {
    deploymentId?: string;
    id?: string;
}

/**
 * A collection of values returned by getDeployment.
 */
export interface GetDeploymentResult {
    readonly businessgroupId: string;
    readonly businessgroupName: string;
    readonly catalogItemId: string;
    readonly catalogItemName: string;
    readonly createdDate: string;
    readonly deploymentId: string;
    readonly description: string;
    readonly expiryDate: string;
    readonly id: string;
    readonly leaseDays: number;
    readonly name: string;
    readonly owners: outputs.GetDeploymentOwner[];
    readonly reasons: string;
    readonly requestStatus: string;
    readonly resourceConfigurations: outputs.GetDeploymentResourceConfiguration[];
}
export function getDeploymentOutput(args?: GetDeploymentOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetDeploymentResult> {
    return pulumi.output(args).apply((a: any) => getDeployment(a, opts))
}

/**
 * A collection of arguments for invoking getDeployment.
 */
export interface GetDeploymentOutputArgs {
    deploymentId?: pulumi.Input<string>;
    id?: pulumi.Input<string>;
}
