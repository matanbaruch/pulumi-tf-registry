// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class GitRepository extends pulumi.CustomResource {
    /**
     * Get an existing GitRepository resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: GitRepositoryState, opts?: pulumi.CustomResourceOptions): GitRepository {
        return new GitRepository(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'tanzu-mission-control:index/gitRepository:GitRepository';

    /**
     * Returns true if the given object is an instance of GitRepository.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is GitRepository {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === GitRepository.__pulumiType;
    }

    /**
     * Metadata for the resource
     */
    public readonly meta!: pulumi.Output<outputs.GitRepositoryMeta | undefined>;
    /**
     * Name of the Repository.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * Name of Namespace.
     */
    public readonly namespaceName!: pulumi.Output<string>;
    /**
     * Scope for the git repository, having one of the valid scopes: cluster, cluster_group.
     */
    public readonly scope!: pulumi.Output<outputs.GitRepositoryScope>;
    /**
     * Spec for the Repository.
     */
    public readonly spec!: pulumi.Output<outputs.GitRepositorySpec>;
    /**
     * Status for the Repository.
     */
    public /*out*/ readonly status!: pulumi.Output<{[key: string]: string}>;

    /**
     * Create a GitRepository resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: GitRepositoryArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: GitRepositoryArgs | GitRepositoryState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as GitRepositoryState | undefined;
            resourceInputs["meta"] = state ? state.meta : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["namespaceName"] = state ? state.namespaceName : undefined;
            resourceInputs["scope"] = state ? state.scope : undefined;
            resourceInputs["spec"] = state ? state.spec : undefined;
            resourceInputs["status"] = state ? state.status : undefined;
        } else {
            const args = argsOrState as GitRepositoryArgs | undefined;
            if ((!args || args.namespaceName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'namespaceName'");
            }
            if ((!args || args.scope === undefined) && !opts.urn) {
                throw new Error("Missing required property 'scope'");
            }
            if ((!args || args.spec === undefined) && !opts.urn) {
                throw new Error("Missing required property 'spec'");
            }
            resourceInputs["meta"] = args ? args.meta : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["namespaceName"] = args ? args.namespaceName : undefined;
            resourceInputs["scope"] = args ? args.scope : undefined;
            resourceInputs["spec"] = args ? args.spec : undefined;
            resourceInputs["status"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(GitRepository.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering GitRepository resources.
 */
export interface GitRepositoryState {
    /**
     * Metadata for the resource
     */
    meta?: pulumi.Input<inputs.GitRepositoryMeta>;
    /**
     * Name of the Repository.
     */
    name?: pulumi.Input<string>;
    /**
     * Name of Namespace.
     */
    namespaceName?: pulumi.Input<string>;
    /**
     * Scope for the git repository, having one of the valid scopes: cluster, cluster_group.
     */
    scope?: pulumi.Input<inputs.GitRepositoryScope>;
    /**
     * Spec for the Repository.
     */
    spec?: pulumi.Input<inputs.GitRepositorySpec>;
    /**
     * Status for the Repository.
     */
    status?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}

/**
 * The set of arguments for constructing a GitRepository resource.
 */
export interface GitRepositoryArgs {
    /**
     * Metadata for the resource
     */
    meta?: pulumi.Input<inputs.GitRepositoryMeta>;
    /**
     * Name of the Repository.
     */
    name?: pulumi.Input<string>;
    /**
     * Name of Namespace.
     */
    namespaceName: pulumi.Input<string>;
    /**
     * Scope for the git repository, having one of the valid scopes: cluster, cluster_group.
     */
    scope: pulumi.Input<inputs.GitRepositoryScope>;
    /**
     * Spec for the Repository.
     */
    spec: pulumi.Input<inputs.GitRepositorySpec>;
}
