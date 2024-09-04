// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
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
    public static readonly __pulumiType = 'britive:index/policy:Policy';

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
     * Type of access for the policy
     */
    public readonly accessType!: pulumi.Output<string | undefined>;
    /**
     * Condition of the policy
     */
    public readonly condition!: pulumi.Output<string | undefined>;
    /**
     * The description of the policy
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * Is the policy active
     */
    public readonly isActive!: pulumi.Output<boolean | undefined>;
    /**
     * Is the policy a draft
     */
    public readonly isDraft!: pulumi.Output<boolean | undefined>;
    /**
     * Is the policy read only
     */
    public readonly isReadOnly!: pulumi.Output<boolean | undefined>;
    /**
     * Members of the policy
     */
    public readonly members!: pulumi.Output<string | undefined>;
    /**
     * Name of the policy
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * Permissions of the policy
     */
    public readonly permissions!: pulumi.Output<string | undefined>;
    /**
     * Roles of the policy
     */
    public readonly roles!: pulumi.Output<string | undefined>;

    /**
     * Create a Policy resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: PolicyArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: PolicyArgs | PolicyState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as PolicyState | undefined;
            resourceInputs["accessType"] = state ? state.accessType : undefined;
            resourceInputs["condition"] = state ? state.condition : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["isActive"] = state ? state.isActive : undefined;
            resourceInputs["isDraft"] = state ? state.isDraft : undefined;
            resourceInputs["isReadOnly"] = state ? state.isReadOnly : undefined;
            resourceInputs["members"] = state ? state.members : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["permissions"] = state ? state.permissions : undefined;
            resourceInputs["roles"] = state ? state.roles : undefined;
        } else {
            const args = argsOrState as PolicyArgs | undefined;
            resourceInputs["accessType"] = args ? args.accessType : undefined;
            resourceInputs["condition"] = args ? args.condition : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["isActive"] = args ? args.isActive : undefined;
            resourceInputs["isDraft"] = args ? args.isDraft : undefined;
            resourceInputs["isReadOnly"] = args ? args.isReadOnly : undefined;
            resourceInputs["members"] = args ? args.members : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["permissions"] = args ? args.permissions : undefined;
            resourceInputs["roles"] = args ? args.roles : undefined;
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
     * Type of access for the policy
     */
    accessType?: pulumi.Input<string>;
    /**
     * Condition of the policy
     */
    condition?: pulumi.Input<string>;
    /**
     * The description of the policy
     */
    description?: pulumi.Input<string>;
    /**
     * Is the policy active
     */
    isActive?: pulumi.Input<boolean>;
    /**
     * Is the policy a draft
     */
    isDraft?: pulumi.Input<boolean>;
    /**
     * Is the policy read only
     */
    isReadOnly?: pulumi.Input<boolean>;
    /**
     * Members of the policy
     */
    members?: pulumi.Input<string>;
    /**
     * Name of the policy
     */
    name?: pulumi.Input<string>;
    /**
     * Permissions of the policy
     */
    permissions?: pulumi.Input<string>;
    /**
     * Roles of the policy
     */
    roles?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a Policy resource.
 */
export interface PolicyArgs {
    /**
     * Type of access for the policy
     */
    accessType?: pulumi.Input<string>;
    /**
     * Condition of the policy
     */
    condition?: pulumi.Input<string>;
    /**
     * The description of the policy
     */
    description?: pulumi.Input<string>;
    /**
     * Is the policy active
     */
    isActive?: pulumi.Input<boolean>;
    /**
     * Is the policy a draft
     */
    isDraft?: pulumi.Input<boolean>;
    /**
     * Is the policy read only
     */
    isReadOnly?: pulumi.Input<boolean>;
    /**
     * Members of the policy
     */
    members?: pulumi.Input<string>;
    /**
     * Name of the policy
     */
    name?: pulumi.Input<string>;
    /**
     * Permissions of the policy
     */
    permissions?: pulumi.Input<string>;
    /**
     * Roles of the policy
     */
    roles?: pulumi.Input<string>;
}
