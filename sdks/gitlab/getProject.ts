// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getProject(args?: GetProjectArgs, opts?: pulumi.InvokeOptions): Promise<GetProjectResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("gitlab:index/getProject:getProject", {
        "ciDefaultGitDepth": args.ciDefaultGitDepth,
        "id": args.id,
        "pathWithNamespace": args.pathWithNamespace,
        "publicBuilds": args.publicBuilds,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getProject.
 */
export interface GetProjectArgs {
    ciDefaultGitDepth?: number;
    id?: string;
    pathWithNamespace?: string;
    publicBuilds?: boolean;
}

/**
 * A collection of values returned by getProject.
 */
export interface GetProjectResult {
    readonly analyticsAccessLevel: string;
    readonly archived: boolean;
    readonly autoCancelPendingPipelines: string;
    readonly autoDevopsDeployStrategy: string;
    readonly autoDevopsEnabled: boolean;
    readonly autocloseReferencedIssues: boolean;
    readonly buildGitStrategy: string;
    readonly buildTimeout: number;
    readonly buildsAccessLevel: string;
    readonly ciConfigPath: string;
    readonly ciDefaultGitDepth: number;
    readonly ciRestrictPipelineCancellationRole: string;
    readonly ciSeparatedCaches: boolean;
    readonly containerExpirationPolicies: outputs.GetProjectContainerExpirationPolicy[];
    readonly containerRegistryAccessLevel: string;
    readonly defaultBranch: string;
    readonly description: string;
    readonly emailsEnabled: boolean;
    readonly emptyRepo: boolean;
    readonly environmentsAccessLevel: string;
    readonly externalAuthorizationClassificationLabel: string;
    readonly featureFlagsAccessLevel: string;
    readonly forkingAccessLevel: string;
    readonly httpUrlToRepo: string;
    readonly id: string;
    readonly importUrl: string;
    readonly infrastructureAccessLevel: string;
    readonly issuesAccessLevel: string;
    readonly issuesEnabled: boolean;
    readonly keepLatestArtifact: boolean;
    readonly lfsEnabled: boolean;
    readonly mergeCommitTemplate: string;
    readonly mergePipelinesEnabled: boolean;
    readonly mergeRequestsAccessLevel: string;
    readonly mergeRequestsEnabled: boolean;
    readonly mergeTrainsEnabled: boolean;
    readonly monitorAccessLevel: string;
    readonly name: string;
    readonly namespaceId: number;
    readonly path: string;
    readonly pathWithNamespace: string;
    readonly pipelinesEnabled: boolean;
    readonly printingMergeRequestLinkEnabled: boolean;
    readonly publicBuilds?: boolean;
    readonly pushRules: outputs.GetProjectPushRule[];
    readonly releasesAccessLevel: string;
    readonly removeSourceBranchAfterMerge: boolean;
    readonly repositoryAccessLevel: string;
    readonly repositoryStorage: string;
    readonly requestAccessEnabled: boolean;
    readonly requirementsAccessLevel: string;
    readonly resolveOutdatedDiffDiscussions: boolean;
    readonly restrictUserDefinedVariables: boolean;
    readonly runnersToken: string;
    readonly securityAndComplianceAccessLevel: string;
    readonly sharedWithGroups: outputs.GetProjectSharedWithGroup[];
    readonly snippetsAccessLevel: string;
    readonly snippetsEnabled: boolean;
    readonly squashCommitTemplate: string;
    readonly sshUrlToRepo: string;
    readonly suggestionCommitMessage: string;
    readonly topics: string[];
    readonly visibilityLevel: string;
    readonly webUrl: string;
    readonly wikiAccessLevel: string;
    readonly wikiEnabled: boolean;
}
export function getProjectOutput(args?: GetProjectOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetProjectResult> {
    return pulumi.output(args).apply((a: any) => getProject(a, opts))
}

/**
 * A collection of arguments for invoking getProject.
 */
export interface GetProjectOutputArgs {
    ciDefaultGitDepth?: pulumi.Input<number>;
    id?: pulumi.Input<string>;
    pathWithNamespace?: pulumi.Input<string>;
    publicBuilds?: pulumi.Input<boolean>;
}
