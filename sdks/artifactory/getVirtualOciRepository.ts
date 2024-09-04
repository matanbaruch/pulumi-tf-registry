// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getVirtualOciRepository(args: GetVirtualOciRepositoryArgs, opts?: pulumi.InvokeOptions): Promise<GetVirtualOciRepositoryResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("artifactory:index/getVirtualOciRepository:getVirtualOciRepository", {
        "artifactoryRequestsCanRetrieveRemoteArtifacts": args.artifactoryRequestsCanRetrieveRemoteArtifacts,
        "defaultDeploymentRepo": args.defaultDeploymentRepo,
        "description": args.description,
        "excludesPattern": args.excludesPattern,
        "id": args.id,
        "includesPattern": args.includesPattern,
        "key": args.key,
        "notes": args.notes,
        "projectEnvironments": args.projectEnvironments,
        "projectKey": args.projectKey,
        "repoLayoutRef": args.repoLayoutRef,
        "repositories": args.repositories,
        "resolveOciTagsByTimestamp": args.resolveOciTagsByTimestamp,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getVirtualOciRepository.
 */
export interface GetVirtualOciRepositoryArgs {
    artifactoryRequestsCanRetrieveRemoteArtifacts?: boolean;
    defaultDeploymentRepo?: string;
    description?: string;
    excludesPattern?: string;
    id?: string;
    includesPattern?: string;
    key: string;
    notes?: string;
    projectEnvironments?: string[];
    projectKey?: string;
    repoLayoutRef?: string;
    repositories?: string[];
    resolveOciTagsByTimestamp?: boolean;
}

/**
 * A collection of values returned by getVirtualOciRepository.
 */
export interface GetVirtualOciRepositoryResult {
    readonly artifactoryRequestsCanRetrieveRemoteArtifacts?: boolean;
    readonly defaultDeploymentRepo?: string;
    readonly description?: string;
    readonly excludesPattern?: string;
    readonly id: string;
    readonly includesPattern?: string;
    readonly key: string;
    readonly notes?: string;
    readonly packageType: string;
    readonly projectEnvironments: string[];
    readonly projectKey?: string;
    readonly repoLayoutRef?: string;
    readonly repositories?: string[];
    readonly resolveOciTagsByTimestamp?: boolean;
}
export function getVirtualOciRepositoryOutput(args: GetVirtualOciRepositoryOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetVirtualOciRepositoryResult> {
    return pulumi.output(args).apply((a: any) => getVirtualOciRepository(a, opts))
}

/**
 * A collection of arguments for invoking getVirtualOciRepository.
 */
export interface GetVirtualOciRepositoryOutputArgs {
    artifactoryRequestsCanRetrieveRemoteArtifacts?: pulumi.Input<boolean>;
    defaultDeploymentRepo?: pulumi.Input<string>;
    description?: pulumi.Input<string>;
    excludesPattern?: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    includesPattern?: pulumi.Input<string>;
    key: pulumi.Input<string>;
    notes?: pulumi.Input<string>;
    projectEnvironments?: pulumi.Input<pulumi.Input<string>[]>;
    projectKey?: pulumi.Input<string>;
    repoLayoutRef?: pulumi.Input<string>;
    repositories?: pulumi.Input<pulumi.Input<string>[]>;
    resolveOciTagsByTimestamp?: pulumi.Input<boolean>;
}
