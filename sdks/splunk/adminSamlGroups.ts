// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class AdminSamlGroups extends pulumi.CustomResource {
    /**
     * Get an existing AdminSamlGroups resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: AdminSamlGroupsState, opts?: pulumi.CustomResourceOptions): AdminSamlGroups {
        return new AdminSamlGroups(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'splunk:index/adminSamlGroups:AdminSamlGroups';

    /**
     * Returns true if the given object is an instance of AdminSamlGroups.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is AdminSamlGroups {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === AdminSamlGroups.__pulumiType;
    }

    /**
     * Required. The external group name.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * Required. List of internal roles assigned to group.
     */
    public readonly roles!: pulumi.Output<string[]>;

    /**
     * Create a AdminSamlGroups resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: AdminSamlGroupsArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: AdminSamlGroupsArgs | AdminSamlGroupsState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as AdminSamlGroupsState | undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["roles"] = state ? state.roles : undefined;
        } else {
            const args = argsOrState as AdminSamlGroupsArgs | undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["roles"] = args ? args.roles : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(AdminSamlGroups.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering AdminSamlGroups resources.
 */
export interface AdminSamlGroupsState {
    /**
     * Required. The external group name.
     */
    name?: pulumi.Input<string>;
    /**
     * Required. List of internal roles assigned to group.
     */
    roles?: pulumi.Input<pulumi.Input<string>[]>;
}

/**
 * The set of arguments for constructing a AdminSamlGroups resource.
 */
export interface AdminSamlGroupsArgs {
    /**
     * Required. The external group name.
     */
    name?: pulumi.Input<string>;
    /**
     * Required. List of internal roles assigned to group.
     */
    roles?: pulumi.Input<pulumi.Input<string>[]>;
}
