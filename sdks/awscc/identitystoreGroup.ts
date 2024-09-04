// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class IdentitystoreGroup extends pulumi.CustomResource {
    /**
     * Get an existing IdentitystoreGroup resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: IdentitystoreGroupState, opts?: pulumi.CustomResourceOptions): IdentitystoreGroup {
        return new IdentitystoreGroup(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'awscc:index/identitystoreGroup:IdentitystoreGroup';

    /**
     * Returns true if the given object is an instance of IdentitystoreGroup.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is IdentitystoreGroup {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === IdentitystoreGroup.__pulumiType;
    }

    /**
     * A string containing the description of the group.
     */
    public readonly description!: pulumi.Output<string>;
    /**
     * A string containing the name of the group. This value is commonly displayed when the group is referenced.
     */
    public readonly displayName!: pulumi.Output<string>;
    /**
     * The unique identifier for a group in the identity store.
     */
    public /*out*/ readonly groupId!: pulumi.Output<string>;
    /**
     * The globally unique identifier for the identity store.
     */
    public readonly identityStoreId!: pulumi.Output<string>;

    /**
     * Create a IdentitystoreGroup resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: IdentitystoreGroupArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: IdentitystoreGroupArgs | IdentitystoreGroupState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as IdentitystoreGroupState | undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["displayName"] = state ? state.displayName : undefined;
            resourceInputs["groupId"] = state ? state.groupId : undefined;
            resourceInputs["identityStoreId"] = state ? state.identityStoreId : undefined;
        } else {
            const args = argsOrState as IdentitystoreGroupArgs | undefined;
            if ((!args || args.displayName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'displayName'");
            }
            if ((!args || args.identityStoreId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'identityStoreId'");
            }
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["displayName"] = args ? args.displayName : undefined;
            resourceInputs["identityStoreId"] = args ? args.identityStoreId : undefined;
            resourceInputs["groupId"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(IdentitystoreGroup.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering IdentitystoreGroup resources.
 */
export interface IdentitystoreGroupState {
    /**
     * A string containing the description of the group.
     */
    description?: pulumi.Input<string>;
    /**
     * A string containing the name of the group. This value is commonly displayed when the group is referenced.
     */
    displayName?: pulumi.Input<string>;
    /**
     * The unique identifier for a group in the identity store.
     */
    groupId?: pulumi.Input<string>;
    /**
     * The globally unique identifier for the identity store.
     */
    identityStoreId?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a IdentitystoreGroup resource.
 */
export interface IdentitystoreGroupArgs {
    /**
     * A string containing the description of the group.
     */
    description?: pulumi.Input<string>;
    /**
     * A string containing the name of the group. This value is commonly displayed when the group is referenced.
     */
    displayName: pulumi.Input<string>;
    /**
     * The globally unique identifier for the identity store.
     */
    identityStoreId: pulumi.Input<string>;
}
