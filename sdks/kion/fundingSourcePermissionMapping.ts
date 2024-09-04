// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class FundingSourcePermissionMapping extends pulumi.CustomResource {
    /**
     * Get an existing FundingSourcePermissionMapping resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: FundingSourcePermissionMappingState, opts?: pulumi.CustomResourceOptions): FundingSourcePermissionMapping {
        return new FundingSourcePermissionMapping(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'kion:index/fundingSourcePermissionMapping:FundingSourcePermissionMapping';

    /**
     * Returns true if the given object is an instance of FundingSourcePermissionMapping.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is FundingSourcePermissionMapping {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === FundingSourcePermissionMapping.__pulumiType;
    }

    /**
     * Application role ID for the permission mapping.
     */
    public readonly appRoleId!: pulumi.Output<number>;
    /**
     * ID of the Funding Source to manage permission mappings for.
     */
    public readonly fundingSourceId!: pulumi.Output<number>;
    /**
     * Set of user group IDs for the permission mapping (must be provided in numerical order).
     */
    public readonly userGroupsIds!: pulumi.Output<number[]>;
    /**
     * Set of user IDs for the permission mapping (must be provided in numerical order).
     */
    public readonly userIds!: pulumi.Output<number[]>;

    /**
     * Create a FundingSourcePermissionMapping resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: FundingSourcePermissionMappingArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: FundingSourcePermissionMappingArgs | FundingSourcePermissionMappingState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as FundingSourcePermissionMappingState | undefined;
            resourceInputs["appRoleId"] = state ? state.appRoleId : undefined;
            resourceInputs["fundingSourceId"] = state ? state.fundingSourceId : undefined;
            resourceInputs["userGroupsIds"] = state ? state.userGroupsIds : undefined;
            resourceInputs["userIds"] = state ? state.userIds : undefined;
        } else {
            const args = argsOrState as FundingSourcePermissionMappingArgs | undefined;
            if ((!args || args.appRoleId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'appRoleId'");
            }
            if ((!args || args.fundingSourceId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'fundingSourceId'");
            }
            if ((!args || args.userGroupsIds === undefined) && !opts.urn) {
                throw new Error("Missing required property 'userGroupsIds'");
            }
            if ((!args || args.userIds === undefined) && !opts.urn) {
                throw new Error("Missing required property 'userIds'");
            }
            resourceInputs["appRoleId"] = args ? args.appRoleId : undefined;
            resourceInputs["fundingSourceId"] = args ? args.fundingSourceId : undefined;
            resourceInputs["userGroupsIds"] = args ? args.userGroupsIds : undefined;
            resourceInputs["userIds"] = args ? args.userIds : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(FundingSourcePermissionMapping.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering FundingSourcePermissionMapping resources.
 */
export interface FundingSourcePermissionMappingState {
    /**
     * Application role ID for the permission mapping.
     */
    appRoleId?: pulumi.Input<number>;
    /**
     * ID of the Funding Source to manage permission mappings for.
     */
    fundingSourceId?: pulumi.Input<number>;
    /**
     * Set of user group IDs for the permission mapping (must be provided in numerical order).
     */
    userGroupsIds?: pulumi.Input<pulumi.Input<number>[]>;
    /**
     * Set of user IDs for the permission mapping (must be provided in numerical order).
     */
    userIds?: pulumi.Input<pulumi.Input<number>[]>;
}

/**
 * The set of arguments for constructing a FundingSourcePermissionMapping resource.
 */
export interface FundingSourcePermissionMappingArgs {
    /**
     * Application role ID for the permission mapping.
     */
    appRoleId: pulumi.Input<number>;
    /**
     * ID of the Funding Source to manage permission mappings for.
     */
    fundingSourceId: pulumi.Input<number>;
    /**
     * Set of user group IDs for the permission mapping (must be provided in numerical order).
     */
    userGroupsIds: pulumi.Input<pulumi.Input<number>[]>;
    /**
     * Set of user IDs for the permission mapping (must be provided in numerical order).
     */
    userIds: pulumi.Input<pulumi.Input<number>[]>;
}
