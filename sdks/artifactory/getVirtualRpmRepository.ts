// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getVirtualRpmRepository(args: GetVirtualRpmRepositoryArgs, opts?: pulumi.InvokeOptions): Promise<GetVirtualRpmRepositoryResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("artifactory:index/getVirtualRpmRepository:getVirtualRpmRepository", {
        "artifactoryRequestsCanRetrieveRemoteArtifacts": args.artifactoryRequestsCanRetrieveRemoteArtifacts,
        "defaultDeploymentRepo": args.defaultDeploymentRepo,
        "description": args.description,
        "excludesPattern": args.excludesPattern,
        "id": args.id,
        "includesPattern": args.includesPattern,
        "key": args.key,
        "notes": args.notes,
        "primaryKeypairRef": args.primaryKeypairRef,
        "projectEnvironments": args.projectEnvironments,
        "projectKey": args.projectKey,
        "repoLayoutRef": args.repoLayoutRef,
        "repositories": args.repositories,
        "secondaryKeypairRef": args.secondaryKeypairRef,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getVirtualRpmRepository.
 */
export interface GetVirtualRpmRepositoryArgs {
    artifactoryRequestsCanRetrieveRemoteArtifacts?: boolean;
    defaultDeploymentRepo?: string;
    description?: string;
    excludesPattern?: string;
    id?: string;
    includesPattern?: string;
    key: string;
    notes?: string;
    primaryKeypairRef?: string;
    projectEnvironments?: string[];
    projectKey?: string;
    repoLayoutRef?: string;
    repositories?: string[];
    secondaryKeypairRef?: string;
}

/**
 * A collection of values returned by getVirtualRpmRepository.
 */
export interface GetVirtualRpmRepositoryResult {
    readonly artifactoryRequestsCanRetrieveRemoteArtifacts?: boolean;
    readonly defaultDeploymentRepo?: string;
    readonly description?: string;
    readonly excludesPattern?: string;
    readonly id: string;
    readonly includesPattern?: string;
    readonly key: string;
    readonly notes?: string;
    readonly packageType: string;
    readonly primaryKeypairRef?: string;
    readonly projectEnvironments: string[];
    readonly projectKey?: string;
    readonly repoLayoutRef?: string;
    readonly repositories?: string[];
    readonly secondaryKeypairRef?: string;
}
export function getVirtualRpmRepositoryOutput(args: GetVirtualRpmRepositoryOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetVirtualRpmRepositoryResult> {
    return pulumi.output(args).apply((a: any) => getVirtualRpmRepository(a, opts))
}

/**
 * A collection of arguments for invoking getVirtualRpmRepository.
 */
export interface GetVirtualRpmRepositoryOutputArgs {
    artifactoryRequestsCanRetrieveRemoteArtifacts?: pulumi.Input<boolean>;
    defaultDeploymentRepo?: pulumi.Input<string>;
    description?: pulumi.Input<string>;
    excludesPattern?: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    includesPattern?: pulumi.Input<string>;
    key: pulumi.Input<string>;
    notes?: pulumi.Input<string>;
    primaryKeypairRef?: pulumi.Input<string>;
    projectEnvironments?: pulumi.Input<pulumi.Input<string>[]>;
    projectKey?: pulumi.Input<string>;
    repoLayoutRef?: pulumi.Input<string>;
    repositories?: pulumi.Input<pulumi.Input<string>[]>;
    secondaryKeypairRef?: pulumi.Input<string>;
}
