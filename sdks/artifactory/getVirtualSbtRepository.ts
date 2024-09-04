// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getVirtualSbtRepository(args: GetVirtualSbtRepositoryArgs, opts?: pulumi.InvokeOptions): Promise<GetVirtualSbtRepositoryResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("artifactory:index/getVirtualSbtRepository:getVirtualSbtRepository", {
        "artifactoryRequestsCanRetrieveRemoteArtifacts": args.artifactoryRequestsCanRetrieveRemoteArtifacts,
        "defaultDeploymentRepo": args.defaultDeploymentRepo,
        "description": args.description,
        "excludesPattern": args.excludesPattern,
        "forceMavenAuthentication": args.forceMavenAuthentication,
        "id": args.id,
        "includesPattern": args.includesPattern,
        "key": args.key,
        "keyPair": args.keyPair,
        "notes": args.notes,
        "pomRepositoryReferencesCleanupPolicy": args.pomRepositoryReferencesCleanupPolicy,
        "projectEnvironments": args.projectEnvironments,
        "projectKey": args.projectKey,
        "repoLayoutRef": args.repoLayoutRef,
        "repositories": args.repositories,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getVirtualSbtRepository.
 */
export interface GetVirtualSbtRepositoryArgs {
    artifactoryRequestsCanRetrieveRemoteArtifacts?: boolean;
    defaultDeploymentRepo?: string;
    description?: string;
    excludesPattern?: string;
    forceMavenAuthentication?: boolean;
    id?: string;
    includesPattern?: string;
    key: string;
    keyPair?: string;
    notes?: string;
    pomRepositoryReferencesCleanupPolicy?: string;
    projectEnvironments?: string[];
    projectKey?: string;
    repoLayoutRef?: string;
    repositories?: string[];
}

/**
 * A collection of values returned by getVirtualSbtRepository.
 */
export interface GetVirtualSbtRepositoryResult {
    readonly artifactoryRequestsCanRetrieveRemoteArtifacts?: boolean;
    readonly defaultDeploymentRepo?: string;
    readonly description?: string;
    readonly excludesPattern?: string;
    readonly forceMavenAuthentication: boolean;
    readonly id: string;
    readonly includesPattern?: string;
    readonly key: string;
    readonly keyPair?: string;
    readonly notes?: string;
    readonly packageType: string;
    readonly pomRepositoryReferencesCleanupPolicy: string;
    readonly projectEnvironments: string[];
    readonly projectKey?: string;
    readonly repoLayoutRef?: string;
    readonly repositories?: string[];
}
export function getVirtualSbtRepositoryOutput(args: GetVirtualSbtRepositoryOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetVirtualSbtRepositoryResult> {
    return pulumi.output(args).apply((a: any) => getVirtualSbtRepository(a, opts))
}

/**
 * A collection of arguments for invoking getVirtualSbtRepository.
 */
export interface GetVirtualSbtRepositoryOutputArgs {
    artifactoryRequestsCanRetrieveRemoteArtifacts?: pulumi.Input<boolean>;
    defaultDeploymentRepo?: pulumi.Input<string>;
    description?: pulumi.Input<string>;
    excludesPattern?: pulumi.Input<string>;
    forceMavenAuthentication?: pulumi.Input<boolean>;
    id?: pulumi.Input<string>;
    includesPattern?: pulumi.Input<string>;
    key: pulumi.Input<string>;
    keyPair?: pulumi.Input<string>;
    notes?: pulumi.Input<string>;
    pomRepositoryReferencesCleanupPolicy?: pulumi.Input<string>;
    projectEnvironments?: pulumi.Input<pulumi.Input<string>[]>;
    projectKey?: pulumi.Input<string>;
    repoLayoutRef?: pulumi.Input<string>;
    repositories?: pulumi.Input<pulumi.Input<string>[]>;
}
