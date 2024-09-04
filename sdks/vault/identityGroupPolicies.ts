// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class IdentityGroupPolicies extends pulumi.CustomResource {
    /**
     * Get an existing IdentityGroupPolicies resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: IdentityGroupPoliciesState, opts?: pulumi.CustomResourceOptions): IdentityGroupPolicies {
        return new IdentityGroupPolicies(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'vault:index/identityGroupPolicies:IdentityGroupPolicies';

    /**
     * Returns true if the given object is an instance of IdentityGroupPolicies.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is IdentityGroupPolicies {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === IdentityGroupPolicies.__pulumiType;
    }

    /**
     * Should the resource manage policies exclusively? Beware of race conditions when disabling exclusive management
     */
    public readonly exclusive!: pulumi.Output<boolean | undefined>;
    /**
     * ID of the group.
     */
    public readonly groupId!: pulumi.Output<string>;
    /**
     * Name of the group.
     */
    public /*out*/ readonly groupName!: pulumi.Output<string>;
    /**
     * Target namespace. (requires Enterprise)
     */
    public readonly namespace!: pulumi.Output<string | undefined>;
    /**
     * Policies to be tied to the group.
     */
    public readonly policies!: pulumi.Output<string[]>;

    /**
     * Create a IdentityGroupPolicies resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: IdentityGroupPoliciesArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: IdentityGroupPoliciesArgs | IdentityGroupPoliciesState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as IdentityGroupPoliciesState | undefined;
            resourceInputs["exclusive"] = state ? state.exclusive : undefined;
            resourceInputs["groupId"] = state ? state.groupId : undefined;
            resourceInputs["groupName"] = state ? state.groupName : undefined;
            resourceInputs["namespace"] = state ? state.namespace : undefined;
            resourceInputs["policies"] = state ? state.policies : undefined;
        } else {
            const args = argsOrState as IdentityGroupPoliciesArgs | undefined;
            if ((!args || args.groupId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'groupId'");
            }
            if ((!args || args.policies === undefined) && !opts.urn) {
                throw new Error("Missing required property 'policies'");
            }
            resourceInputs["exclusive"] = args ? args.exclusive : undefined;
            resourceInputs["groupId"] = args ? args.groupId : undefined;
            resourceInputs["namespace"] = args ? args.namespace : undefined;
            resourceInputs["policies"] = args ? args.policies : undefined;
            resourceInputs["groupName"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(IdentityGroupPolicies.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering IdentityGroupPolicies resources.
 */
export interface IdentityGroupPoliciesState {
    /**
     * Should the resource manage policies exclusively? Beware of race conditions when disabling exclusive management
     */
    exclusive?: pulumi.Input<boolean>;
    /**
     * ID of the group.
     */
    groupId?: pulumi.Input<string>;
    /**
     * Name of the group.
     */
    groupName?: pulumi.Input<string>;
    /**
     * Target namespace. (requires Enterprise)
     */
    namespace?: pulumi.Input<string>;
    /**
     * Policies to be tied to the group.
     */
    policies?: pulumi.Input<pulumi.Input<string>[]>;
}

/**
 * The set of arguments for constructing a IdentityGroupPolicies resource.
 */
export interface IdentityGroupPoliciesArgs {
    /**
     * Should the resource manage policies exclusively? Beware of race conditions when disabling exclusive management
     */
    exclusive?: pulumi.Input<boolean>;
    /**
     * ID of the group.
     */
    groupId: pulumi.Input<string>;
    /**
     * Target namespace. (requires Enterprise)
     */
    namespace?: pulumi.Input<string>;
    /**
     * Policies to be tied to the group.
     */
    policies: pulumi.Input<pulumi.Input<string>[]>;
}
