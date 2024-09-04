// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getFederatedMavenRepository(args: GetFederatedMavenRepositoryArgs, opts?: pulumi.InvokeOptions): Promise<GetFederatedMavenRepositoryResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("artifactory:index/getFederatedMavenRepository:getFederatedMavenRepository", {
        "archiveBrowsingEnabled": args.archiveBrowsingEnabled,
        "blackedOut": args.blackedOut,
        "cdnRedirect": args.cdnRedirect,
        "checksumPolicyType": args.checksumPolicyType,
        "cleanupOnDelete": args.cleanupOnDelete,
        "description": args.description,
        "disableProxy": args.disableProxy,
        "downloadDirect": args.downloadDirect,
        "excludesPattern": args.excludesPattern,
        "handleReleases": args.handleReleases,
        "handleSnapshots": args.handleSnapshots,
        "id": args.id,
        "includesPattern": args.includesPattern,
        "key": args.key,
        "maxUniqueSnapshots": args.maxUniqueSnapshots,
        "members": args.members,
        "notes": args.notes,
        "priorityResolution": args.priorityResolution,
        "projectEnvironments": args.projectEnvironments,
        "projectKey": args.projectKey,
        "propertySets": args.propertySets,
        "proxy": args.proxy,
        "repoLayoutRef": args.repoLayoutRef,
        "snapshotVersionBehavior": args.snapshotVersionBehavior,
        "suppressPomConsistencyChecks": args.suppressPomConsistencyChecks,
        "xrayIndex": args.xrayIndex,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getFederatedMavenRepository.
 */
export interface GetFederatedMavenRepositoryArgs {
    archiveBrowsingEnabled?: boolean;
    blackedOut?: boolean;
    cdnRedirect?: boolean;
    checksumPolicyType?: string;
    cleanupOnDelete?: boolean;
    description?: string;
    disableProxy?: boolean;
    downloadDirect?: boolean;
    excludesPattern?: string;
    handleReleases?: boolean;
    handleSnapshots?: boolean;
    id?: string;
    includesPattern?: string;
    key: string;
    maxUniqueSnapshots?: number;
    members?: inputs.GetFederatedMavenRepositoryMember[];
    notes?: string;
    priorityResolution?: boolean;
    projectEnvironments?: string[];
    projectKey?: string;
    propertySets?: string[];
    proxy?: string;
    repoLayoutRef?: string;
    snapshotVersionBehavior?: string;
    suppressPomConsistencyChecks?: boolean;
    xrayIndex?: boolean;
}

/**
 * A collection of values returned by getFederatedMavenRepository.
 */
export interface GetFederatedMavenRepositoryResult {
    readonly archiveBrowsingEnabled?: boolean;
    readonly blackedOut?: boolean;
    readonly cdnRedirect?: boolean;
    readonly checksumPolicyType?: string;
    readonly cleanupOnDelete?: boolean;
    readonly description?: string;
    readonly disableProxy?: boolean;
    readonly downloadDirect?: boolean;
    readonly excludesPattern?: string;
    readonly handleReleases?: boolean;
    readonly handleSnapshots?: boolean;
    readonly id: string;
    readonly includesPattern?: string;
    readonly key: string;
    readonly maxUniqueSnapshots?: number;
    readonly members?: outputs.GetFederatedMavenRepositoryMember[];
    readonly notes?: string;
    readonly packageType: string;
    readonly priorityResolution?: boolean;
    readonly projectEnvironments: string[];
    readonly projectKey?: string;
    readonly propertySets?: string[];
    readonly proxy?: string;
    readonly repoLayoutRef?: string;
    readonly snapshotVersionBehavior?: string;
    readonly suppressPomConsistencyChecks?: boolean;
    readonly xrayIndex?: boolean;
}
export function getFederatedMavenRepositoryOutput(args: GetFederatedMavenRepositoryOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetFederatedMavenRepositoryResult> {
    return pulumi.output(args).apply((a: any) => getFederatedMavenRepository(a, opts))
}

/**
 * A collection of arguments for invoking getFederatedMavenRepository.
 */
export interface GetFederatedMavenRepositoryOutputArgs {
    archiveBrowsingEnabled?: pulumi.Input<boolean>;
    blackedOut?: pulumi.Input<boolean>;
    cdnRedirect?: pulumi.Input<boolean>;
    checksumPolicyType?: pulumi.Input<string>;
    cleanupOnDelete?: pulumi.Input<boolean>;
    description?: pulumi.Input<string>;
    disableProxy?: pulumi.Input<boolean>;
    downloadDirect?: pulumi.Input<boolean>;
    excludesPattern?: pulumi.Input<string>;
    handleReleases?: pulumi.Input<boolean>;
    handleSnapshots?: pulumi.Input<boolean>;
    id?: pulumi.Input<string>;
    includesPattern?: pulumi.Input<string>;
    key: pulumi.Input<string>;
    maxUniqueSnapshots?: pulumi.Input<number>;
    members?: pulumi.Input<pulumi.Input<inputs.GetFederatedMavenRepositoryMemberArgs>[]>;
    notes?: pulumi.Input<string>;
    priorityResolution?: pulumi.Input<boolean>;
    projectEnvironments?: pulumi.Input<pulumi.Input<string>[]>;
    projectKey?: pulumi.Input<string>;
    propertySets?: pulumi.Input<pulumi.Input<string>[]>;
    proxy?: pulumi.Input<string>;
    repoLayoutRef?: pulumi.Input<string>;
    snapshotVersionBehavior?: pulumi.Input<string>;
    suppressPomConsistencyChecks?: pulumi.Input<boolean>;
    xrayIndex?: pulumi.Input<boolean>;
}
