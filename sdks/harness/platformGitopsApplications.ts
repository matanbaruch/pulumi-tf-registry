// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class PlatformGitopsApplications extends pulumi.CustomResource {
    /**
     * Get an existing PlatformGitopsApplications resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: PlatformGitopsApplicationsState, opts?: pulumi.CustomResourceOptions): PlatformGitopsApplications {
        return new PlatformGitopsApplications(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'harness:index/platformGitopsApplications:PlatformGitopsApplications';

    /**
     * Returns true if the given object is an instance of PlatformGitopsApplications.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is PlatformGitopsApplications {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === PlatformGitopsApplications.__pulumiType;
    }

    /**
     * Account identifier of the GitOps application.
     */
    public readonly accountId!: pulumi.Output<string>;
    /**
     * Agent identifier of the GitOps application.
     */
    public readonly agentId!: pulumi.Output<string>;
    /**
     * Definition of the GitOps application resource.
     */
    public readonly applications!: pulumi.Output<outputs.PlatformGitopsApplicationsApplication[]>;
    /**
     * Cluster identifier of the GitOps application.
     */
    public readonly clusterId!: pulumi.Output<string>;
    /**
     * Identifier of the GitOps application.
     */
    public readonly identifier!: pulumi.Output<string | undefined>;
    /**
     * Kind of the GitOps application.
     */
    public readonly kind!: pulumi.Output<string | undefined>;
    /**
     * Name of the GitOps application.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * Options to remove existing finalizers to delete the GitOps application.
     */
    public readonly optionsRemoveExistingFinalizers!: pulumi.Output<boolean | undefined>;
    /**
     * Organization identifier of the GitOps application.
     */
    public readonly orgId!: pulumi.Output<string>;
    /**
     * The ArgoCD project name corresponding to this GitOps application. An empty string means that the GitOps application
     * belongs to the default project created by Harness.
     */
    public readonly project!: pulumi.Output<string | undefined>;
    /**
     * Project identifier of the GitOps application.
     */
    public readonly projectId!: pulumi.Output<string>;
    /**
     * Repository identifier of the GitOps application.
     */
    public readonly repoId!: pulumi.Output<string | undefined>;
    /**
     * Request cascade to delete the GitOps application.
     */
    public readonly requestCascade!: pulumi.Output<boolean | undefined>;
    /**
     * Request propagation policy to delete the GitOps application.
     */
    public readonly requestPropagationPolicy!: pulumi.Output<string | undefined>;
    /**
     * Indicates if the GitOps application should skip validate repository definition exists.
     */
    public readonly skipRepoValidation!: pulumi.Output<boolean | undefined>;
    /**
     * Indicates if the GitOps application should be updated if existing and inserted if not.
     */
    public readonly upsert!: pulumi.Output<boolean | undefined>;
    /**
     * Indicates if the GitOps application yaml has to be validated.
     */
    public readonly validate!: pulumi.Output<boolean | undefined>;

    /**
     * Create a PlatformGitopsApplications resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: PlatformGitopsApplicationsArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: PlatformGitopsApplicationsArgs | PlatformGitopsApplicationsState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as PlatformGitopsApplicationsState | undefined;
            resourceInputs["accountId"] = state ? state.accountId : undefined;
            resourceInputs["agentId"] = state ? state.agentId : undefined;
            resourceInputs["applications"] = state ? state.applications : undefined;
            resourceInputs["clusterId"] = state ? state.clusterId : undefined;
            resourceInputs["identifier"] = state ? state.identifier : undefined;
            resourceInputs["kind"] = state ? state.kind : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["optionsRemoveExistingFinalizers"] = state ? state.optionsRemoveExistingFinalizers : undefined;
            resourceInputs["orgId"] = state ? state.orgId : undefined;
            resourceInputs["project"] = state ? state.project : undefined;
            resourceInputs["projectId"] = state ? state.projectId : undefined;
            resourceInputs["repoId"] = state ? state.repoId : undefined;
            resourceInputs["requestCascade"] = state ? state.requestCascade : undefined;
            resourceInputs["requestPropagationPolicy"] = state ? state.requestPropagationPolicy : undefined;
            resourceInputs["skipRepoValidation"] = state ? state.skipRepoValidation : undefined;
            resourceInputs["upsert"] = state ? state.upsert : undefined;
            resourceInputs["validate"] = state ? state.validate : undefined;
        } else {
            const args = argsOrState as PlatformGitopsApplicationsArgs | undefined;
            if ((!args || args.accountId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'accountId'");
            }
            if ((!args || args.agentId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'agentId'");
            }
            if ((!args || args.applications === undefined) && !opts.urn) {
                throw new Error("Missing required property 'applications'");
            }
            if ((!args || args.clusterId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'clusterId'");
            }
            if ((!args || args.orgId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'orgId'");
            }
            if ((!args || args.projectId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'projectId'");
            }
            resourceInputs["accountId"] = args ? args.accountId : undefined;
            resourceInputs["agentId"] = args ? args.agentId : undefined;
            resourceInputs["applications"] = args ? args.applications : undefined;
            resourceInputs["clusterId"] = args ? args.clusterId : undefined;
            resourceInputs["identifier"] = args ? args.identifier : undefined;
            resourceInputs["kind"] = args ? args.kind : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["optionsRemoveExistingFinalizers"] = args ? args.optionsRemoveExistingFinalizers : undefined;
            resourceInputs["orgId"] = args ? args.orgId : undefined;
            resourceInputs["project"] = args ? args.project : undefined;
            resourceInputs["projectId"] = args ? args.projectId : undefined;
            resourceInputs["repoId"] = args ? args.repoId : undefined;
            resourceInputs["requestCascade"] = args ? args.requestCascade : undefined;
            resourceInputs["requestPropagationPolicy"] = args ? args.requestPropagationPolicy : undefined;
            resourceInputs["skipRepoValidation"] = args ? args.skipRepoValidation : undefined;
            resourceInputs["upsert"] = args ? args.upsert : undefined;
            resourceInputs["validate"] = args ? args.validate : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(PlatformGitopsApplications.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering PlatformGitopsApplications resources.
 */
export interface PlatformGitopsApplicationsState {
    /**
     * Account identifier of the GitOps application.
     */
    accountId?: pulumi.Input<string>;
    /**
     * Agent identifier of the GitOps application.
     */
    agentId?: pulumi.Input<string>;
    /**
     * Definition of the GitOps application resource.
     */
    applications?: pulumi.Input<pulumi.Input<inputs.PlatformGitopsApplicationsApplication>[]>;
    /**
     * Cluster identifier of the GitOps application.
     */
    clusterId?: pulumi.Input<string>;
    /**
     * Identifier of the GitOps application.
     */
    identifier?: pulumi.Input<string>;
    /**
     * Kind of the GitOps application.
     */
    kind?: pulumi.Input<string>;
    /**
     * Name of the GitOps application.
     */
    name?: pulumi.Input<string>;
    /**
     * Options to remove existing finalizers to delete the GitOps application.
     */
    optionsRemoveExistingFinalizers?: pulumi.Input<boolean>;
    /**
     * Organization identifier of the GitOps application.
     */
    orgId?: pulumi.Input<string>;
    /**
     * The ArgoCD project name corresponding to this GitOps application. An empty string means that the GitOps application
     * belongs to the default project created by Harness.
     */
    project?: pulumi.Input<string>;
    /**
     * Project identifier of the GitOps application.
     */
    projectId?: pulumi.Input<string>;
    /**
     * Repository identifier of the GitOps application.
     */
    repoId?: pulumi.Input<string>;
    /**
     * Request cascade to delete the GitOps application.
     */
    requestCascade?: pulumi.Input<boolean>;
    /**
     * Request propagation policy to delete the GitOps application.
     */
    requestPropagationPolicy?: pulumi.Input<string>;
    /**
     * Indicates if the GitOps application should skip validate repository definition exists.
     */
    skipRepoValidation?: pulumi.Input<boolean>;
    /**
     * Indicates if the GitOps application should be updated if existing and inserted if not.
     */
    upsert?: pulumi.Input<boolean>;
    /**
     * Indicates if the GitOps application yaml has to be validated.
     */
    validate?: pulumi.Input<boolean>;
}

/**
 * The set of arguments for constructing a PlatformGitopsApplications resource.
 */
export interface PlatformGitopsApplicationsArgs {
    /**
     * Account identifier of the GitOps application.
     */
    accountId: pulumi.Input<string>;
    /**
     * Agent identifier of the GitOps application.
     */
    agentId: pulumi.Input<string>;
    /**
     * Definition of the GitOps application resource.
     */
    applications: pulumi.Input<pulumi.Input<inputs.PlatformGitopsApplicationsApplication>[]>;
    /**
     * Cluster identifier of the GitOps application.
     */
    clusterId: pulumi.Input<string>;
    /**
     * Identifier of the GitOps application.
     */
    identifier?: pulumi.Input<string>;
    /**
     * Kind of the GitOps application.
     */
    kind?: pulumi.Input<string>;
    /**
     * Name of the GitOps application.
     */
    name?: pulumi.Input<string>;
    /**
     * Options to remove existing finalizers to delete the GitOps application.
     */
    optionsRemoveExistingFinalizers?: pulumi.Input<boolean>;
    /**
     * Organization identifier of the GitOps application.
     */
    orgId: pulumi.Input<string>;
    /**
     * The ArgoCD project name corresponding to this GitOps application. An empty string means that the GitOps application
     * belongs to the default project created by Harness.
     */
    project?: pulumi.Input<string>;
    /**
     * Project identifier of the GitOps application.
     */
    projectId: pulumi.Input<string>;
    /**
     * Repository identifier of the GitOps application.
     */
    repoId?: pulumi.Input<string>;
    /**
     * Request cascade to delete the GitOps application.
     */
    requestCascade?: pulumi.Input<boolean>;
    /**
     * Request propagation policy to delete the GitOps application.
     */
    requestPropagationPolicy?: pulumi.Input<string>;
    /**
     * Indicates if the GitOps application should skip validate repository definition exists.
     */
    skipRepoValidation?: pulumi.Input<boolean>;
    /**
     * Indicates if the GitOps application should be updated if existing and inserted if not.
     */
    upsert?: pulumi.Input<boolean>;
    /**
     * Indicates if the GitOps application yaml has to be validated.
     */
    validate?: pulumi.Input<boolean>;
}
