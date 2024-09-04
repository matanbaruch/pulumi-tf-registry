// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getVirtualGoRepository(args: GetVirtualGoRepositoryArgs, opts?: pulumi.InvokeOptions): Promise<GetVirtualGoRepositoryResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("artifactory:index/getVirtualGoRepository:getVirtualGoRepository", {
        "artifactoryRequestsCanRetrieveRemoteArtifacts": args.artifactoryRequestsCanRetrieveRemoteArtifacts,
        "defaultDeploymentRepo": args.defaultDeploymentRepo,
        "description": args.description,
        "excludesPattern": args.excludesPattern,
        "externalDependenciesEnabled": args.externalDependenciesEnabled,
        "externalDependenciesPatterns": args.externalDependenciesPatterns,
        "id": args.id,
        "includesPattern": args.includesPattern,
        "key": args.key,
        "notes": args.notes,
        "projectEnvironments": args.projectEnvironments,
        "projectKey": args.projectKey,
        "repoLayoutRef": args.repoLayoutRef,
        "repositories": args.repositories,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getVirtualGoRepository.
 */
export interface GetVirtualGoRepositoryArgs {
    artifactoryRequestsCanRetrieveRemoteArtifacts?: boolean;
    defaultDeploymentRepo?: string;
    description?: string;
    excludesPattern?: string;
    externalDependenciesEnabled?: boolean;
    externalDependenciesPatterns?: string[];
    id?: string;
    includesPattern?: string;
    key: string;
    notes?: string;
    projectEnvironments?: string[];
    projectKey?: string;
    repoLayoutRef?: string;
    repositories?: string[];
}

/**
 * A collection of values returned by getVirtualGoRepository.
 */
export interface GetVirtualGoRepositoryResult {
    readonly artifactoryRequestsCanRetrieveRemoteArtifacts?: boolean;
    readonly defaultDeploymentRepo?: string;
    readonly description?: string;
    readonly excludesPattern?: string;
    readonly externalDependenciesEnabled?: boolean;
    readonly externalDependenciesPatterns?: string[];
    readonly id: string;
    readonly includesPattern?: string;
    readonly key: string;
    readonly notes?: string;
    readonly packageType: string;
    readonly projectEnvironments: string[];
    readonly projectKey?: string;
    readonly repoLayoutRef?: string;
    readonly repositories?: string[];
}
export function getVirtualGoRepositoryOutput(args: GetVirtualGoRepositoryOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetVirtualGoRepositoryResult> {
    return pulumi.output(args).apply((a: any) => getVirtualGoRepository(a, opts))
}

/**
 * A collection of arguments for invoking getVirtualGoRepository.
 */
export interface GetVirtualGoRepositoryOutputArgs {
    artifactoryRequestsCanRetrieveRemoteArtifacts?: pulumi.Input<boolean>;
    defaultDeploymentRepo?: pulumi.Input<string>;
    description?: pulumi.Input<string>;
    excludesPattern?: pulumi.Input<string>;
    externalDependenciesEnabled?: pulumi.Input<boolean>;
    externalDependenciesPatterns?: pulumi.Input<pulumi.Input<string>[]>;
    id?: pulumi.Input<string>;
    includesPattern?: pulumi.Input<string>;
    key: pulumi.Input<string>;
    notes?: pulumi.Input<string>;
    projectEnvironments?: pulumi.Input<pulumi.Input<string>[]>;
    projectKey?: pulumi.Input<string>;
    repoLayoutRef?: pulumi.Input<string>;
    repositories?: pulumi.Input<pulumi.Input<string>[]>;
}
