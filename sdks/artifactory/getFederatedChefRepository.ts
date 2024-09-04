// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getFederatedChefRepository(args: GetFederatedChefRepositoryArgs, opts?: pulumi.InvokeOptions): Promise<GetFederatedChefRepositoryResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("artifactory:index/getFederatedChefRepository:getFederatedChefRepository", {
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
 * A collection of arguments for invoking getFederatedChefRepository.
 */
export interface GetFederatedChefRepositoryArgs {
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
    members?: inputs.GetFederatedChefRepositoryMember[];
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
 * A collection of values returned by getFederatedChefRepository.
 */
export interface GetFederatedChefRepositoryResult {
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
    readonly members?: outputs.GetFederatedChefRepositoryMember[];
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
export function getFederatedChefRepositoryOutput(args: GetFederatedChefRepositoryOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetFederatedChefRepositoryResult> {
    return pulumi.output(args).apply((a: any) => getFederatedChefRepository(a, opts))
}

/**
 * A collection of arguments for invoking getFederatedChefRepository.
 */
export interface GetFederatedChefRepositoryOutputArgs {
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
    members?: pulumi.Input<pulumi.Input<inputs.GetFederatedChefRepositoryMemberArgs>[]>;
    notes?: pulumi.Input<string>;
    priorityResolution?: pulumi.Input<boolean>;
    projectEnvironments?: pulumi.Input<pulumi.Input<string>[]>;
    projectKey?: pulumi.Input<string>;
    propertySets?: pulumi.Input<pulumi.Input<string>[]>;
    proxy?: pulumi.Input<string>;
    repoLayoutRef?: pulumi.Input<string>;
    xrayIndex?: pulumi.Input<boolean>;
}
