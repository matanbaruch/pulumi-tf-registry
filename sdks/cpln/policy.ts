// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class Policy extends pulumi.CustomResource {
    /**
     * Get an existing Policy resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: PolicyState, opts?: pulumi.CustomResourceOptions): Policy {
        return new Policy(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'cpln:index/policy:Policy';

    /**
     * Returns true if the given object is an instance of Policy.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Policy {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Policy.__pulumiType;
    }

    /**
     * The association between a target kind and the bound permissions to service principals.
     */
    public readonly bindings!: pulumi.Output<outputs.PolicyBinding[] | undefined>;
    /**
     * The ID, in GUID format, of the Policy.
     */
    public /*out*/ readonly cplnId!: pulumi.Output<string>;
    /**
     * Description of the Policy.
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * The GVC for `identity`, `workload` and `volumeset` target kinds only.
     */
    public readonly gvc!: pulumi.Output<string | undefined>;
    /**
     * Name of the Policy.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * Origin of the Policy. Either `builtin` or `default`.
     */
    public /*out*/ readonly origin!: pulumi.Output<string>;
    /**
     * Full link to this resource. Can be referenced by other resources.
     */
    public /*out*/ readonly selfLink!: pulumi.Output<string>;
    /**
     * Key-value map of resource tags.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Set this value of this attribute to `all` if this policy should target all objects of the given target_kind. Otherwise,
     * do not include the attribute.
     */
    public readonly target!: pulumi.Output<string | undefined>;
    /**
     * The kind of resource to target (e.g., gvc, serviceaccount, etc.).
     */
    public readonly targetKind!: pulumi.Output<string>;
    /**
     * List of the targets this policy will be applied to. Not used if `target` is set to `all`.
     */
    public readonly targetLinks!: pulumi.Output<string[] | undefined>;
    /**
     * A defined set of criteria or conditions used to identify the target entities or resources to which the policy applies.
     */
    public readonly targetQuery!: pulumi.Output<outputs.PolicyTargetQuery | undefined>;

    /**
     * Create a Policy resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: PolicyArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: PolicyArgs | PolicyState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as PolicyState | undefined;
            resourceInputs["bindings"] = state ? state.bindings : undefined;
            resourceInputs["cplnId"] = state ? state.cplnId : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["gvc"] = state ? state.gvc : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["origin"] = state ? state.origin : undefined;
            resourceInputs["selfLink"] = state ? state.selfLink : undefined;
            resourceInputs["tags"] = state ? state.tags : undefined;
            resourceInputs["target"] = state ? state.target : undefined;
            resourceInputs["targetKind"] = state ? state.targetKind : undefined;
            resourceInputs["targetLinks"] = state ? state.targetLinks : undefined;
            resourceInputs["targetQuery"] = state ? state.targetQuery : undefined;
        } else {
            const args = argsOrState as PolicyArgs | undefined;
            if ((!args || args.targetKind === undefined) && !opts.urn) {
                throw new Error("Missing required property 'targetKind'");
            }
            resourceInputs["bindings"] = args ? args.bindings : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["gvc"] = args ? args.gvc : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["target"] = args ? args.target : undefined;
            resourceInputs["targetKind"] = args ? args.targetKind : undefined;
            resourceInputs["targetLinks"] = args ? args.targetLinks : undefined;
            resourceInputs["targetQuery"] = args ? args.targetQuery : undefined;
            resourceInputs["cplnId"] = undefined /*out*/;
            resourceInputs["origin"] = undefined /*out*/;
            resourceInputs["selfLink"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(Policy.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering Policy resources.
 */
export interface PolicyState {
    /**
     * The association between a target kind and the bound permissions to service principals.
     */
    bindings?: pulumi.Input<pulumi.Input<inputs.PolicyBinding>[]>;
    /**
     * The ID, in GUID format, of the Policy.
     */
    cplnId?: pulumi.Input<string>;
    /**
     * Description of the Policy.
     */
    description?: pulumi.Input<string>;
    /**
     * The GVC for `identity`, `workload` and `volumeset` target kinds only.
     */
    gvc?: pulumi.Input<string>;
    /**
     * Name of the Policy.
     */
    name?: pulumi.Input<string>;
    /**
     * Origin of the Policy. Either `builtin` or `default`.
     */
    origin?: pulumi.Input<string>;
    /**
     * Full link to this resource. Can be referenced by other resources.
     */
    selfLink?: pulumi.Input<string>;
    /**
     * Key-value map of resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Set this value of this attribute to `all` if this policy should target all objects of the given target_kind. Otherwise,
     * do not include the attribute.
     */
    target?: pulumi.Input<string>;
    /**
     * The kind of resource to target (e.g., gvc, serviceaccount, etc.).
     */
    targetKind?: pulumi.Input<string>;
    /**
     * List of the targets this policy will be applied to. Not used if `target` is set to `all`.
     */
    targetLinks?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * A defined set of criteria or conditions used to identify the target entities or resources to which the policy applies.
     */
    targetQuery?: pulumi.Input<inputs.PolicyTargetQuery>;
}

/**
 * The set of arguments for constructing a Policy resource.
 */
export interface PolicyArgs {
    /**
     * The association between a target kind and the bound permissions to service principals.
     */
    bindings?: pulumi.Input<pulumi.Input<inputs.PolicyBinding>[]>;
    /**
     * Description of the Policy.
     */
    description?: pulumi.Input<string>;
    /**
     * The GVC for `identity`, `workload` and `volumeset` target kinds only.
     */
    gvc?: pulumi.Input<string>;
    /**
     * Name of the Policy.
     */
    name?: pulumi.Input<string>;
    /**
     * Key-value map of resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Set this value of this attribute to `all` if this policy should target all objects of the given target_kind. Otherwise,
     * do not include the attribute.
     */
    target?: pulumi.Input<string>;
    /**
     * The kind of resource to target (e.g., gvc, serviceaccount, etc.).
     */
    targetKind: pulumi.Input<string>;
    /**
     * List of the targets this policy will be applied to. Not used if `target` is set to `all`.
     */
    targetLinks?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * A defined set of criteria or conditions used to identify the target entities or resources to which the policy applies.
     */
    targetQuery?: pulumi.Input<inputs.PolicyTargetQuery>;
}
