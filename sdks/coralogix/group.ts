// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class Group extends pulumi.CustomResource {
    /**
     * Get an existing Group resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: GroupState, opts?: pulumi.CustomResourceOptions): Group {
        return new Group(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'coralogix:index/group:Group';

    /**
     * Returns true if the given object is an instance of Group.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Group {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Group.__pulumiType;
    }

    /**
     * Group display name.
     */
    public readonly displayName!: pulumi.Output<string>;
    public readonly members!: pulumi.Output<string[] | undefined>;
    public readonly role!: pulumi.Output<string>;
    /**
     * Scope attached to the group.
     */
    public readonly scopeId!: pulumi.Output<string | undefined>;

    /**
     * Create a Group resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: GroupArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: GroupArgs | GroupState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as GroupState | undefined;
            resourceInputs["displayName"] = state ? state.displayName : undefined;
            resourceInputs["members"] = state ? state.members : undefined;
            resourceInputs["role"] = state ? state.role : undefined;
            resourceInputs["scopeId"] = state ? state.scopeId : undefined;
        } else {
            const args = argsOrState as GroupArgs | undefined;
            if ((!args || args.displayName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'displayName'");
            }
            if ((!args || args.role === undefined) && !opts.urn) {
                throw new Error("Missing required property 'role'");
            }
            resourceInputs["displayName"] = args ? args.displayName : undefined;
            resourceInputs["members"] = args ? args.members : undefined;
            resourceInputs["role"] = args ? args.role : undefined;
            resourceInputs["scopeId"] = args ? args.scopeId : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(Group.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering Group resources.
 */
export interface GroupState {
    /**
     * Group display name.
     */
    displayName?: pulumi.Input<string>;
    members?: pulumi.Input<pulumi.Input<string>[]>;
    role?: pulumi.Input<string>;
    /**
     * Scope attached to the group.
     */
    scopeId?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a Group resource.
 */
export interface GroupArgs {
    /**
     * Group display name.
     */
    displayName: pulumi.Input<string>;
    members?: pulumi.Input<pulumi.Input<string>[]>;
    role: pulumi.Input<string>;
    /**
     * Scope attached to the group.
     */
    scopeId?: pulumi.Input<string>;
}
