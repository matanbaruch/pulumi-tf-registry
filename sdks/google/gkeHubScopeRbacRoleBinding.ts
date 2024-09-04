// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class GkeHubScopeRbacRoleBinding extends pulumi.CustomResource {
    /**
     * Get an existing GkeHubScopeRbacRoleBinding resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: GkeHubScopeRbacRoleBindingState, opts?: pulumi.CustomResourceOptions): GkeHubScopeRbacRoleBinding {
        return new GkeHubScopeRbacRoleBinding(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'google:index/gkeHubScopeRbacRoleBinding:GkeHubScopeRbacRoleBinding';

    /**
     * Returns true if the given object is an instance of GkeHubScopeRbacRoleBinding.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is GkeHubScopeRbacRoleBinding {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === GkeHubScopeRbacRoleBinding.__pulumiType;
    }

    /**
     * Time the RBAC Role Binding was created in UTC.
     */
    public /*out*/ readonly createTime!: pulumi.Output<string>;
    /**
     * Time the RBAC Role Binding was deleted in UTC.
     */
    public /*out*/ readonly deleteTime!: pulumi.Output<string>;
    public /*out*/ readonly effectiveLabels!: pulumi.Output<{[key: string]: string}>;
    /**
     * Principal that is be authorized in the cluster (at least of one the oneof is required). Updating one will unset the
     * other automatically. group is the group, as seen by the kubernetes cluster.
     */
    public readonly group!: pulumi.Output<string | undefined>;
    /**
     * Labels for this ScopeRBACRoleBinding. **Note**: This field is non-authoritative, and will only manage the labels present
     * in your configuration. Please refer to the field 'effective_labels' for all of the labels present on the resource.
     */
    public readonly labels!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * The resource name for the RBAC Role Binding
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    public readonly project!: pulumi.Output<string>;
    /**
     * Role to bind to the principal.
     */
    public readonly role!: pulumi.Output<outputs.GkeHubScopeRbacRoleBindingRole>;
    /**
     * Id of the scope
     */
    public readonly scopeId!: pulumi.Output<string>;
    /**
     * The client-provided identifier of the RBAC Role Binding.
     */
    public readonly scopeRbacRoleBindingId!: pulumi.Output<string>;
    /**
     * State of the RBAC Role Binding resource.
     */
    public /*out*/ readonly states!: pulumi.Output<outputs.GkeHubScopeRbacRoleBindingState[]>;
    /**
     * The combination of labels configured directly on the resource and default labels configured on the provider.
     */
    public /*out*/ readonly terraformLabels!: pulumi.Output<{[key: string]: string}>;
    public readonly timeouts!: pulumi.Output<outputs.GkeHubScopeRbacRoleBindingTimeouts | undefined>;
    /**
     * Google-generated UUID for this resource.
     */
    public /*out*/ readonly uid!: pulumi.Output<string>;
    /**
     * Time the RBAC Role Binding was updated in UTC.
     */
    public /*out*/ readonly updateTime!: pulumi.Output<string>;
    /**
     * Principal that is be authorized in the cluster (at least of one the oneof is required). Updating one will unset the
     * other automatically. user is the name of the user as seen by the kubernetes cluster, example "alice" or
     * "alice@domain.tld"
     */
    public readonly user!: pulumi.Output<string | undefined>;

    /**
     * Create a GkeHubScopeRbacRoleBinding resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: GkeHubScopeRbacRoleBindingArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: GkeHubScopeRbacRoleBindingArgs | GkeHubScopeRbacRoleBindingState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as GkeHubScopeRbacRoleBindingState | undefined;
            resourceInputs["createTime"] = state ? state.createTime : undefined;
            resourceInputs["deleteTime"] = state ? state.deleteTime : undefined;
            resourceInputs["effectiveLabels"] = state ? state.effectiveLabels : undefined;
            resourceInputs["group"] = state ? state.group : undefined;
            resourceInputs["labels"] = state ? state.labels : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["project"] = state ? state.project : undefined;
            resourceInputs["role"] = state ? state.role : undefined;
            resourceInputs["scopeId"] = state ? state.scopeId : undefined;
            resourceInputs["scopeRbacRoleBindingId"] = state ? state.scopeRbacRoleBindingId : undefined;
            resourceInputs["states"] = state ? state.states : undefined;
            resourceInputs["terraformLabels"] = state ? state.terraformLabels : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
            resourceInputs["uid"] = state ? state.uid : undefined;
            resourceInputs["updateTime"] = state ? state.updateTime : undefined;
            resourceInputs["user"] = state ? state.user : undefined;
        } else {
            const args = argsOrState as GkeHubScopeRbacRoleBindingArgs | undefined;
            if ((!args || args.role === undefined) && !opts.urn) {
                throw new Error("Missing required property 'role'");
            }
            if ((!args || args.scopeId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'scopeId'");
            }
            if ((!args || args.scopeRbacRoleBindingId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'scopeRbacRoleBindingId'");
            }
            resourceInputs["group"] = args ? args.group : undefined;
            resourceInputs["labels"] = args ? args.labels : undefined;
            resourceInputs["project"] = args ? args.project : undefined;
            resourceInputs["role"] = args ? args.role : undefined;
            resourceInputs["scopeId"] = args ? args.scopeId : undefined;
            resourceInputs["scopeRbacRoleBindingId"] = args ? args.scopeRbacRoleBindingId : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["user"] = args ? args.user : undefined;
            resourceInputs["createTime"] = undefined /*out*/;
            resourceInputs["deleteTime"] = undefined /*out*/;
            resourceInputs["effectiveLabels"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["states"] = undefined /*out*/;
            resourceInputs["terraformLabels"] = undefined /*out*/;
            resourceInputs["uid"] = undefined /*out*/;
            resourceInputs["updateTime"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(GkeHubScopeRbacRoleBinding.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering GkeHubScopeRbacRoleBinding resources.
 */
export interface GkeHubScopeRbacRoleBindingState {
    /**
     * Time the RBAC Role Binding was created in UTC.
     */
    createTime?: pulumi.Input<string>;
    /**
     * Time the RBAC Role Binding was deleted in UTC.
     */
    deleteTime?: pulumi.Input<string>;
    effectiveLabels?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Principal that is be authorized in the cluster (at least of one the oneof is required). Updating one will unset the
     * other automatically. group is the group, as seen by the kubernetes cluster.
     */
    group?: pulumi.Input<string>;
    /**
     * Labels for this ScopeRBACRoleBinding. **Note**: This field is non-authoritative, and will only manage the labels present
     * in your configuration. Please refer to the field 'effective_labels' for all of the labels present on the resource.
     */
    labels?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * The resource name for the RBAC Role Binding
     */
    name?: pulumi.Input<string>;
    project?: pulumi.Input<string>;
    /**
     * Role to bind to the principal.
     */
    role?: pulumi.Input<inputs.GkeHubScopeRbacRoleBindingRole>;
    /**
     * Id of the scope
     */
    scopeId?: pulumi.Input<string>;
    /**
     * The client-provided identifier of the RBAC Role Binding.
     */
    scopeRbacRoleBindingId?: pulumi.Input<string>;
    /**
     * State of the RBAC Role Binding resource.
     */
    states?: pulumi.Input<pulumi.Input<inputs.GkeHubScopeRbacRoleBindingState>[]>;
    /**
     * The combination of labels configured directly on the resource and default labels configured on the provider.
     */
    terraformLabels?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    timeouts?: pulumi.Input<inputs.GkeHubScopeRbacRoleBindingTimeouts>;
    /**
     * Google-generated UUID for this resource.
     */
    uid?: pulumi.Input<string>;
    /**
     * Time the RBAC Role Binding was updated in UTC.
     */
    updateTime?: pulumi.Input<string>;
    /**
     * Principal that is be authorized in the cluster (at least of one the oneof is required). Updating one will unset the
     * other automatically. user is the name of the user as seen by the kubernetes cluster, example "alice" or
     * "alice@domain.tld"
     */
    user?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a GkeHubScopeRbacRoleBinding resource.
 */
export interface GkeHubScopeRbacRoleBindingArgs {
    /**
     * Principal that is be authorized in the cluster (at least of one the oneof is required). Updating one will unset the
     * other automatically. group is the group, as seen by the kubernetes cluster.
     */
    group?: pulumi.Input<string>;
    /**
     * Labels for this ScopeRBACRoleBinding. **Note**: This field is non-authoritative, and will only manage the labels present
     * in your configuration. Please refer to the field 'effective_labels' for all of the labels present on the resource.
     */
    labels?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    project?: pulumi.Input<string>;
    /**
     * Role to bind to the principal.
     */
    role: pulumi.Input<inputs.GkeHubScopeRbacRoleBindingRole>;
    /**
     * Id of the scope
     */
    scopeId: pulumi.Input<string>;
    /**
     * The client-provided identifier of the RBAC Role Binding.
     */
    scopeRbacRoleBindingId: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.GkeHubScopeRbacRoleBindingTimeouts>;
    /**
     * Principal that is be authorized in the cluster (at least of one the oneof is required). Updating one will unset the
     * other automatically. user is the name of the user as seen by the kubernetes cluster, example "alice" or
     * "alice@domain.tld"
     */
    user?: pulumi.Input<string>;
}
