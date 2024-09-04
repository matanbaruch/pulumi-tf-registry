// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class Project extends pulumi.CustomResource {
    /**
     * Get an existing Project resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ProjectState, opts?: pulumi.CustomResourceOptions): Project {
        return new Project(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'buddy:index/project:Project';

    /**
     * Returns true if the given object is an instance of Project.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Project {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Project.__pulumiType;
    }

    /**
     * The project's access. Possible values: `PRIVATE`, `PUBLIC`
     */
    public readonly access!: pulumi.Output<string>;
    /**
     * Defines whether or not pull requests are enabled (GitHub)
     */
    public readonly allowPullRequests!: pulumi.Output<boolean>;
    /**
     * The project's date of creation
     */
    public /*out*/ readonly createDate!: pulumi.Output<string>;
    /**
     * The project's creator
     */
    public /*out*/ readonly createdBies!: pulumi.Output<outputs.ProjectCreatedBy[]>;
    /**
     * The project's custom repository password. Needed when cloning from a custom repository
     */
    public readonly customRepoPass!: pulumi.Output<string | undefined>;
    /**
     * The project's custom repository SSH key ID. Needed when cloning from a custom repository
     */
    public readonly customRepoSshKeyId!: pulumi.Output<number | undefined>;
    /**
     * The project's custom repository URL. Needed when cloning from a custom repository
     */
    public readonly customRepoUrl!: pulumi.Output<string | undefined>;
    /**
     * The project's custom repository user. Needed when cloning from a custom repository
     */
    public readonly customRepoUser!: pulumi.Output<string | undefined>;
    /**
     * The project's Git default branch
     */
    public /*out*/ readonly defaultBranch!: pulumi.Output<string>;
    /**
     * The project's display name
     */
    public readonly displayName!: pulumi.Output<string>;
    /**
     * The workspace's URL handle
     */
    public readonly domain!: pulumi.Output<string>;
    /**
     * The project's external project ID. Needed when cloning from GitHub, GitLab or BitBucket
     */
    public readonly externalProjectId!: pulumi.Output<string | undefined>;
    /**
     * Defines wheter or not fetch submodules in repository
     */
    public readonly fetchSubmodules!: pulumi.Output<boolean>;
    /**
     * The project's environmental key name for fetching submodules
     */
    public readonly fetchSubmodulesEnvKey!: pulumi.Output<string>;
    /**
     * The project's GitLab project ID. Needed when cloning from a GitLab
     */
    public readonly gitLabProjectId!: pulumi.Output<string | undefined>;
    /**
     * The project's URL
     */
    public /*out*/ readonly htmlUrl!: pulumi.Output<string>;
    /**
     * The project's Git HTTP endpoint
     */
    public /*out*/ readonly httpRepository!: pulumi.Output<string>;
    /**
     * The project's integration ID. Needed when cloning from a GitHub, GitLab or BitBucket
     */
    public readonly integrationId!: pulumi.Output<string | undefined>;
    /**
     * The project's unique name ID
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The project's Git SSH endpoint
     */
    public /*out*/ readonly sshRepository!: pulumi.Output<string>;
    /**
     * The project's status. Possible values: `CLOSED`, `ACTIVE`
     */
    public /*out*/ readonly status!: pulumi.Output<string>;
    /**
     * Defines whether or not update default branch from external repository (GitHub, GitLab, BitBucket)
     */
    public readonly updateDefaultBranchFromExternal!: pulumi.Output<boolean>;
    /**
     * Defines wheter or not create GIT repository
     */
    public readonly withoutRepository!: pulumi.Output<boolean | undefined>;

    /**
     * Create a Project resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ProjectArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ProjectArgs | ProjectState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as ProjectState | undefined;
            resourceInputs["access"] = state ? state.access : undefined;
            resourceInputs["allowPullRequests"] = state ? state.allowPullRequests : undefined;
            resourceInputs["createDate"] = state ? state.createDate : undefined;
            resourceInputs["createdBies"] = state ? state.createdBies : undefined;
            resourceInputs["customRepoPass"] = state ? state.customRepoPass : undefined;
            resourceInputs["customRepoSshKeyId"] = state ? state.customRepoSshKeyId : undefined;
            resourceInputs["customRepoUrl"] = state ? state.customRepoUrl : undefined;
            resourceInputs["customRepoUser"] = state ? state.customRepoUser : undefined;
            resourceInputs["defaultBranch"] = state ? state.defaultBranch : undefined;
            resourceInputs["displayName"] = state ? state.displayName : undefined;
            resourceInputs["domain"] = state ? state.domain : undefined;
            resourceInputs["externalProjectId"] = state ? state.externalProjectId : undefined;
            resourceInputs["fetchSubmodules"] = state ? state.fetchSubmodules : undefined;
            resourceInputs["fetchSubmodulesEnvKey"] = state ? state.fetchSubmodulesEnvKey : undefined;
            resourceInputs["gitLabProjectId"] = state ? state.gitLabProjectId : undefined;
            resourceInputs["htmlUrl"] = state ? state.htmlUrl : undefined;
            resourceInputs["httpRepository"] = state ? state.httpRepository : undefined;
            resourceInputs["integrationId"] = state ? state.integrationId : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["sshRepository"] = state ? state.sshRepository : undefined;
            resourceInputs["status"] = state ? state.status : undefined;
            resourceInputs["updateDefaultBranchFromExternal"] = state ? state.updateDefaultBranchFromExternal : undefined;
            resourceInputs["withoutRepository"] = state ? state.withoutRepository : undefined;
        } else {
            const args = argsOrState as ProjectArgs | undefined;
            if ((!args || args.displayName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'displayName'");
            }
            if ((!args || args.domain === undefined) && !opts.urn) {
                throw new Error("Missing required property 'domain'");
            }
            resourceInputs["access"] = args ? args.access : undefined;
            resourceInputs["allowPullRequests"] = args ? args.allowPullRequests : undefined;
            resourceInputs["customRepoPass"] = args ? args.customRepoPass : undefined;
            resourceInputs["customRepoSshKeyId"] = args ? args.customRepoSshKeyId : undefined;
            resourceInputs["customRepoUrl"] = args ? args.customRepoUrl : undefined;
            resourceInputs["customRepoUser"] = args ? args.customRepoUser : undefined;
            resourceInputs["displayName"] = args ? args.displayName : undefined;
            resourceInputs["domain"] = args ? args.domain : undefined;
            resourceInputs["externalProjectId"] = args ? args.externalProjectId : undefined;
            resourceInputs["fetchSubmodules"] = args ? args.fetchSubmodules : undefined;
            resourceInputs["fetchSubmodulesEnvKey"] = args ? args.fetchSubmodulesEnvKey : undefined;
            resourceInputs["gitLabProjectId"] = args ? args.gitLabProjectId : undefined;
            resourceInputs["integrationId"] = args ? args.integrationId : undefined;
            resourceInputs["updateDefaultBranchFromExternal"] = args ? args.updateDefaultBranchFromExternal : undefined;
            resourceInputs["withoutRepository"] = args ? args.withoutRepository : undefined;
            resourceInputs["createDate"] = undefined /*out*/;
            resourceInputs["createdBies"] = undefined /*out*/;
            resourceInputs["defaultBranch"] = undefined /*out*/;
            resourceInputs["htmlUrl"] = undefined /*out*/;
            resourceInputs["httpRepository"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["sshRepository"] = undefined /*out*/;
            resourceInputs["status"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(Project.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering Project resources.
 */
export interface ProjectState {
    /**
     * The project's access. Possible values: `PRIVATE`, `PUBLIC`
     */
    access?: pulumi.Input<string>;
    /**
     * Defines whether or not pull requests are enabled (GitHub)
     */
    allowPullRequests?: pulumi.Input<boolean>;
    /**
     * The project's date of creation
     */
    createDate?: pulumi.Input<string>;
    /**
     * The project's creator
     */
    createdBies?: pulumi.Input<pulumi.Input<inputs.ProjectCreatedBy>[]>;
    /**
     * The project's custom repository password. Needed when cloning from a custom repository
     */
    customRepoPass?: pulumi.Input<string>;
    /**
     * The project's custom repository SSH key ID. Needed when cloning from a custom repository
     */
    customRepoSshKeyId?: pulumi.Input<number>;
    /**
     * The project's custom repository URL. Needed when cloning from a custom repository
     */
    customRepoUrl?: pulumi.Input<string>;
    /**
     * The project's custom repository user. Needed when cloning from a custom repository
     */
    customRepoUser?: pulumi.Input<string>;
    /**
     * The project's Git default branch
     */
    defaultBranch?: pulumi.Input<string>;
    /**
     * The project's display name
     */
    displayName?: pulumi.Input<string>;
    /**
     * The workspace's URL handle
     */
    domain?: pulumi.Input<string>;
    /**
     * The project's external project ID. Needed when cloning from GitHub, GitLab or BitBucket
     */
    externalProjectId?: pulumi.Input<string>;
    /**
     * Defines wheter or not fetch submodules in repository
     */
    fetchSubmodules?: pulumi.Input<boolean>;
    /**
     * The project's environmental key name for fetching submodules
     */
    fetchSubmodulesEnvKey?: pulumi.Input<string>;
    /**
     * The project's GitLab project ID. Needed when cloning from a GitLab
     */
    gitLabProjectId?: pulumi.Input<string>;
    /**
     * The project's URL
     */
    htmlUrl?: pulumi.Input<string>;
    /**
     * The project's Git HTTP endpoint
     */
    httpRepository?: pulumi.Input<string>;
    /**
     * The project's integration ID. Needed when cloning from a GitHub, GitLab or BitBucket
     */
    integrationId?: pulumi.Input<string>;
    /**
     * The project's unique name ID
     */
    name?: pulumi.Input<string>;
    /**
     * The project's Git SSH endpoint
     */
    sshRepository?: pulumi.Input<string>;
    /**
     * The project's status. Possible values: `CLOSED`, `ACTIVE`
     */
    status?: pulumi.Input<string>;
    /**
     * Defines whether or not update default branch from external repository (GitHub, GitLab, BitBucket)
     */
    updateDefaultBranchFromExternal?: pulumi.Input<boolean>;
    /**
     * Defines wheter or not create GIT repository
     */
    withoutRepository?: pulumi.Input<boolean>;
}

/**
 * The set of arguments for constructing a Project resource.
 */
export interface ProjectArgs {
    /**
     * The project's access. Possible values: `PRIVATE`, `PUBLIC`
     */
    access?: pulumi.Input<string>;
    /**
     * Defines whether or not pull requests are enabled (GitHub)
     */
    allowPullRequests?: pulumi.Input<boolean>;
    /**
     * The project's custom repository password. Needed when cloning from a custom repository
     */
    customRepoPass?: pulumi.Input<string>;
    /**
     * The project's custom repository SSH key ID. Needed when cloning from a custom repository
     */
    customRepoSshKeyId?: pulumi.Input<number>;
    /**
     * The project's custom repository URL. Needed when cloning from a custom repository
     */
    customRepoUrl?: pulumi.Input<string>;
    /**
     * The project's custom repository user. Needed when cloning from a custom repository
     */
    customRepoUser?: pulumi.Input<string>;
    /**
     * The project's display name
     */
    displayName: pulumi.Input<string>;
    /**
     * The workspace's URL handle
     */
    domain: pulumi.Input<string>;
    /**
     * The project's external project ID. Needed when cloning from GitHub, GitLab or BitBucket
     */
    externalProjectId?: pulumi.Input<string>;
    /**
     * Defines wheter or not fetch submodules in repository
     */
    fetchSubmodules?: pulumi.Input<boolean>;
    /**
     * The project's environmental key name for fetching submodules
     */
    fetchSubmodulesEnvKey?: pulumi.Input<string>;
    /**
     * The project's GitLab project ID. Needed when cloning from a GitLab
     */
    gitLabProjectId?: pulumi.Input<string>;
    /**
     * The project's integration ID. Needed when cloning from a GitHub, GitLab or BitBucket
     */
    integrationId?: pulumi.Input<string>;
    /**
     * Defines whether or not update default branch from external repository (GitHub, GitLab, BitBucket)
     */
    updateDefaultBranchFromExternal?: pulumi.Input<boolean>;
    /**
     * Defines wheter or not create GIT repository
     */
    withoutRepository?: pulumi.Input<boolean>;
}
