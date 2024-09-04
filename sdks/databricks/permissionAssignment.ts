// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class PermissionAssignment extends pulumi.CustomResource {
    /**
     * Get an existing PermissionAssignment resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: PermissionAssignmentState, opts?: pulumi.CustomResourceOptions): PermissionAssignment {
        return new PermissionAssignment(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'databricks:index/permissionAssignment:PermissionAssignment';

    /**
     * Returns true if the given object is an instance of PermissionAssignment.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is PermissionAssignment {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === PermissionAssignment.__pulumiType;
    }

    public readonly permissions!: pulumi.Output<string[]>;
    public readonly principalId!: pulumi.Output<number>;

    /**
     * Create a PermissionAssignment resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: PermissionAssignmentArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: PermissionAssignmentArgs | PermissionAssignmentState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as PermissionAssignmentState | undefined;
            resourceInputs["permissions"] = state ? state.permissions : undefined;
            resourceInputs["principalId"] = state ? state.principalId : undefined;
        } else {
            const args = argsOrState as PermissionAssignmentArgs | undefined;
            if ((!args || args.permissions === undefined) && !opts.urn) {
                throw new Error("Missing required property 'permissions'");
            }
            if ((!args || args.principalId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'principalId'");
            }
            resourceInputs["permissions"] = args ? args.permissions : undefined;
            resourceInputs["principalId"] = args ? args.principalId : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(PermissionAssignment.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering PermissionAssignment resources.
 */
export interface PermissionAssignmentState {
    permissions?: pulumi.Input<pulumi.Input<string>[]>;
    principalId?: pulumi.Input<number>;
}

/**
 * The set of arguments for constructing a PermissionAssignment resource.
 */
export interface PermissionAssignmentArgs {
    permissions: pulumi.Input<pulumi.Input<string>[]>;
    principalId: pulumi.Input<number>;
}
