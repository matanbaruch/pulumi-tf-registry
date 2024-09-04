// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getFederatedGemsRepository(args: GetFederatedGemsRepositoryArgs, opts?: pulumi.InvokeOptions): Promise<GetFederatedGemsRepositoryResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("artifactory:index/getFederatedGemsRepository:getFederatedGemsRepository", {
        "archiveBrowsingEnabled": args.archiveBrowsingEnabled,
        "blackedOut": args.blackedOut,
        "cdnRedirect": args.cdnRedirect,
        "cleanupOnDelete": args.cleanupOnDelete,
        "description": args.description,
        "disableProxy": args.disableProxy,
        "downloadDirect": args.downloadDirect,
        "excludesPattern": args.excludesPattern,
        "id": args.id,
        "includesPattern": args.includesPattern,
        "key": args.key,
        "members": args.members,
        "notes": args.notes,
        "priorityResolution": args.priorityResolution,
        "projectEnvironments": args.projectEnvironments,
        "projectKey": args.projectKey,
        "propertySets": args.propertySets,
        "proxy": args.proxy,
        "repoLayoutRef": args.repoLayoutRef,
        "xrayIndex": args.xrayIndex,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getFederatedGemsRepository.
 */
export interface GetFederatedGemsRepositoryArgs {
    archiveBrowsingEnabled?: boolean;
    blackedOut?: boolean;
    cdnRedirect?: boolean;
    cleanupOnDelete?: boolean;
    description?: string;
    disableProxy?: boolean;
    downloadDirect?: boolean;
    excludesPattern?: string;
    id?: string;
    includesPattern?: string;
    key: string;
    members?: inputs.GetFederatedGemsRepositoryMember[];
    notes?: string;
    priorityResolution?: boolean;
    projectEnvironments?: string[];
    projectKey?: string;
    propertySets?: string[];
    proxy?: string;
    repoLayoutRef?: string;
    xrayIndex?: boolean;
}

/**
 * A collection of values returned by getFederatedGemsRepository.
 */
export interface GetFederatedGemsRepositoryResult {
    readonly archiveBrowsingEnabled?: boolean;
    readonly blackedOut?: boolean;
    readonly cdnRedirect?: boolean;
    readonly cleanupOnDelete?: boolean;
    readonly description?: string;
    readonly disableProxy?: boolean;
    readonly downloadDirect?: boolean;
    readonly excludesPattern?: string;
    readonly id: string;
    readonly includesPattern?: string;
    readonly key: string;
    readonly members?: outputs.GetFederatedGemsRepositoryMember[];
    readonly notes?: string;
    readonly packageType: string;
    readonly priorityResolution?: boolean;
    readonly projectEnvironments: string[];
    readonly projectKey?: string;
    readonly propertySets?: string[];
    readonly proxy?: string;
    readonly repoLayoutRef?: string;
    readonly xrayIndex?: boolean;
}
export function getFederatedGemsRepositoryOutput(args: GetFederatedGemsRepositoryOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetFederatedGemsRepositoryResult> {
    return pulumi.output(args).apply((a: any) => getFederatedGemsRepository(a, opts))
}

/**
 * A collection of arguments for invoking getFederatedGemsRepository.
 */
export interface GetFederatedGemsRepositoryOutputArgs {
    archiveBrowsingEnabled?: pulumi.Input<boolean>;
    blackedOut?: pulumi.Input<boolean>;
    cdnRedirect?: pulumi.Input<boolean>;
    cleanupOnDelete?: pulumi.Input<boolean>;
    description?: pulumi.Input<string>;
    disableProxy?: pulumi.Input<boolean>;
    downloadDirect?: pulumi.Input<boolean>;
    excludesPattern?: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    includesPattern?: pulumi.Input<string>;
    key: pulumi.Input<string>;
    members?: pulumi.Input<pulumi.Input<inputs.GetFederatedGemsRepositoryMemberArgs>[]>;
    notes?: pulumi.Input<string>;
    priorityResolution?: pulumi.Input<boolean>;
    projectEnvironments?: pulumi.Input<pulumi.Input<string>[]>;
    projectKey?: pulumi.Input<string>;
    propertySets?: pulumi.Input<pulumi.Input<string>[]>;
    proxy?: pulumi.Input<string>;
    repoLayoutRef?: pulumi.Input<string>;
    xrayIndex?: pulumi.Input<boolean>;
}
