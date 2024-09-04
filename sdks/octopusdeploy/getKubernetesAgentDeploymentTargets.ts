// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getKubernetesAgentDeploymentTargets(args?: GetKubernetesAgentDeploymentTargetsArgs, opts?: pulumi.InvokeOptions): Promise<GetKubernetesAgentDeploymentTargetsResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("octopusdeploy:index/getKubernetesAgentDeploymentTargets:getKubernetesAgentDeploymentTargets", {
        "deploymentId": args.deploymentId,
        "environments": args.environments,
        "healthStatuses": args.healthStatuses,
        "ids": args.ids,
        "isDisabled": args.isDisabled,
        "name": args.name,
        "partialName": args.partialName,
        "roles": args.roles,
        "shellNames": args.shellNames,
        "skip": args.skip,
        "spaceId": args.spaceId,
        "take": args.take,
        "tenantTags": args.tenantTags,
        "tenants": args.tenants,
        "thumbprint": args.thumbprint,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getKubernetesAgentDeploymentTargets.
 */
export interface GetKubernetesAgentDeploymentTargetsArgs {
    deploymentId?: string;
    environments?: string[];
    healthStatuses?: string[];
    ids?: string[];
    isDisabled?: boolean;
    name?: string;
    partialName?: string;
    roles?: string[];
    shellNames?: string[];
    skip?: number;
    spaceId?: string;
    take?: number;
    tenantTags?: string[];
    tenants?: string[];
    thumbprint?: string;
}

/**
 * A collection of values returned by getKubernetesAgentDeploymentTargets.
 */
export interface GetKubernetesAgentDeploymentTargetsResult {
    readonly deploymentId?: string;
    readonly environments?: string[];
    readonly healthStatuses?: string[];
    readonly id: string;
    readonly ids?: string[];
    readonly isDisabled?: boolean;
    readonly kubernetesAgentDeploymentTargets: outputs.GetKubernetesAgentDeploymentTargetsKubernetesAgentDeploymentTarget[];
    readonly name?: string;
    readonly partialName?: string;
    readonly roles?: string[];
    readonly shellNames?: string[];
    readonly skip?: number;
    readonly spaceId: string;
    readonly take?: number;
    readonly tenantTags?: string[];
    readonly tenants?: string[];
    readonly thumbprint?: string;
}
export function getKubernetesAgentDeploymentTargetsOutput(args?: GetKubernetesAgentDeploymentTargetsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetKubernetesAgentDeploymentTargetsResult> {
    return pulumi.output(args).apply((a: any) => getKubernetesAgentDeploymentTargets(a, opts))
}

/**
 * A collection of arguments for invoking getKubernetesAgentDeploymentTargets.
 */
export interface GetKubernetesAgentDeploymentTargetsOutputArgs {
    deploymentId?: pulumi.Input<string>;
    environments?: pulumi.Input<pulumi.Input<string>[]>;
    healthStatuses?: pulumi.Input<pulumi.Input<string>[]>;
    ids?: pulumi.Input<pulumi.Input<string>[]>;
    isDisabled?: pulumi.Input<boolean>;
    name?: pulumi.Input<string>;
    partialName?: pulumi.Input<string>;
    roles?: pulumi.Input<pulumi.Input<string>[]>;
    shellNames?: pulumi.Input<pulumi.Input<string>[]>;
    skip?: pulumi.Input<number>;
    spaceId?: pulumi.Input<string>;
    take?: pulumi.Input<number>;
    tenantTags?: pulumi.Input<pulumi.Input<string>[]>;
    tenants?: pulumi.Input<pulumi.Input<string>[]>;
    thumbprint?: pulumi.Input<string>;
}
