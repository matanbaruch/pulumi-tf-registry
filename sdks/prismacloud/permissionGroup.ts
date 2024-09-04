// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class PermissionGroup extends pulumi.CustomResource {
    /**
     * Get an existing PermissionGroup resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: PermissionGroupState, opts?: pulumi.CustomResourceOptions): PermissionGroup {
        return new PermissionGroup(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'prismacloud:index/permissionGroup:PermissionGroup';

    /**
     * Returns true if the given object is an instance of PermissionGroup.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is PermissionGroup {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === PermissionGroup.__pulumiType;
    }

    /**
     * Accept account groups
     */
    public readonly acceptAccountGroups!: pulumi.Output<boolean>;
    /**
     * Accept code repositories
     */
    public readonly acceptCodeRepositories!: pulumi.Output<boolean>;
    /**
     * Accept resource lists
     */
    public readonly acceptResourceLists!: pulumi.Output<boolean>;
    /**
     * Associated permission roles
     */
    public /*out*/ readonly associatedRoles!: pulumi.Output<{[key: string]: string}>;
    /**
     * Custom
     */
    public readonly custom!: pulumi.Output<boolean>;
    /**
     * Description
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * Features
     */
    public readonly features!: pulumi.Output<outputs.PermissionGroupFeature[]>;
    /**
     * Last modified by
     */
    public /*out*/ readonly lastModifiedBy!: pulumi.Output<string>;
    /**
     * Last modified timestamp
     */
    public /*out*/ readonly lastModifiedTs!: pulumi.Output<number>;
    /**
     * Name of the permission group
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * Permission group type
     */
    public readonly permissionGroupType!: pulumi.Output<string>;

    /**
     * Create a PermissionGroup resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: PermissionGroupArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: PermissionGroupArgs | PermissionGroupState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as PermissionGroupState | undefined;
            resourceInputs["acceptAccountGroups"] = state ? state.acceptAccountGroups : undefined;
            resourceInputs["acceptCodeRepositories"] = state ? state.acceptCodeRepositories : undefined;
            resourceInputs["acceptResourceLists"] = state ? state.acceptResourceLists : undefined;
            resourceInputs["associatedRoles"] = state ? state.associatedRoles : undefined;
            resourceInputs["custom"] = state ? state.custom : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["features"] = state ? state.features : undefined;
            resourceInputs["lastModifiedBy"] = state ? state.lastModifiedBy : undefined;
            resourceInputs["lastModifiedTs"] = state ? state.lastModifiedTs : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["permissionGroupType"] = state ? state.permissionGroupType : undefined;
        } else {
            const args = argsOrState as PermissionGroupArgs | undefined;
            if ((!args || args.features === undefined) && !opts.urn) {
                throw new Error("Missing required property 'features'");
            }
            resourceInputs["acceptAccountGroups"] = args ? args.acceptAccountGroups : undefined;
            resourceInputs["acceptCodeRepositories"] = args ? args.acceptCodeRepositories : undefined;
            resourceInputs["acceptResourceLists"] = args ? args.acceptResourceLists : undefined;
            resourceInputs["custom"] = args ? args.custom : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["features"] = args ? args.features : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["permissionGroupType"] = args ? args.permissionGroupType : undefined;
            resourceInputs["associatedRoles"] = undefined /*out*/;
            resourceInputs["lastModifiedBy"] = undefined /*out*/;
            resourceInputs["lastModifiedTs"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(PermissionGroup.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering PermissionGroup resources.
 */
export interface PermissionGroupState {
    /**
     * Accept account groups
     */
    acceptAccountGroups?: pulumi.Input<boolean>;
    /**
     * Accept code repositories
     */
    acceptCodeRepositories?: pulumi.Input<boolean>;
    /**
     * Accept resource lists
     */
    acceptResourceLists?: pulumi.Input<boolean>;
    /**
     * Associated permission roles
     */
    associatedRoles?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Custom
     */
    custom?: pulumi.Input<boolean>;
    /**
     * Description
     */
    description?: pulumi.Input<string>;
    /**
     * Features
     */
    features?: pulumi.Input<pulumi.Input<inputs.PermissionGroupFeature>[]>;
    /**
     * Last modified by
     */
    lastModifiedBy?: pulumi.Input<string>;
    /**
     * Last modified timestamp
     */
    lastModifiedTs?: pulumi.Input<number>;
    /**
     * Name of the permission group
     */
    name?: pulumi.Input<string>;
    /**
     * Permission group type
     */
    permissionGroupType?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a PermissionGroup resource.
 */
export interface PermissionGroupArgs {
    /**
     * Accept account groups
     */
    acceptAccountGroups?: pulumi.Input<boolean>;
    /**
     * Accept code repositories
     */
    acceptCodeRepositories?: pulumi.Input<boolean>;
    /**
     * Accept resource lists
     */
    acceptResourceLists?: pulumi.Input<boolean>;
    /**
     * Custom
     */
    custom?: pulumi.Input<boolean>;
    /**
     * Description
     */
    description?: pulumi.Input<string>;
    /**
     * Features
     */
    features: pulumi.Input<pulumi.Input<inputs.PermissionGroupFeature>[]>;
    /**
     * Name of the permission group
     */
    name?: pulumi.Input<string>;
    /**
     * Permission group type
     */
    permissionGroupType?: pulumi.Input<string>;
}
