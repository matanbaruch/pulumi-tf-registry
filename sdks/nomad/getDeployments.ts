// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getDeployments(args?: GetDeploymentsArgs, opts?: pulumi.InvokeOptions): Promise<GetDeploymentsResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("nomad:index/getDeployments:getDeployments", {
        "id": args.id,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getDeployments.
 */
export interface GetDeploymentsArgs {
    id?: string;
}

/**
 * A collection of values returned by getDeployments.
 */
export interface GetDeploymentsResult {
    readonly deployments: {[key: string]: string}[];
    readonly id: string;
}
export function getDeploymentsOutput(args?: GetDeploymentsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetDeploymentsResult> {
    return pulumi.output(args).apply((a: any) => getDeployments(a, opts))
}

/**
 * A collection of arguments for invoking getDeployments.
 */
export interface GetDeploymentsOutputArgs {
    id?: pulumi.Input<string>;
}
