// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class OrganizationServiceAssign extends pulumi.CustomResource {
    /**
     * Get an existing OrganizationServiceAssign resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: OrganizationServiceAssignState, opts?: pulumi.CustomResourceOptions): OrganizationServiceAssign {
        return new OrganizationServiceAssign(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'tencentcloud:index/organizationServiceAssign:OrganizationServiceAssign';

    /**
     * Returns true if the given object is an instance of OrganizationServiceAssign.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is OrganizationServiceAssign {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === OrganizationServiceAssign.__pulumiType;
    }

    /**
     * Management scope of the delegated admin. Valid values: 1 (all members), 2 (partial members). Default value: `1`.
     */
    public readonly managementScope!: pulumi.Output<number>;
    /**
     * ID list of the managed departments. This parameter is valid when `management_scope` is `2`.
     */
    public readonly managementScopeNodeIds!: pulumi.Output<number[] | undefined>;
    /**
     * Uin list of the managed members. This parameter is valid when `management_scope` is `2`.
     */
    public readonly managementScopeUins!: pulumi.Output<number[] | undefined>;
    /**
     * Uin list of the delegated admins, Including up to 20 items.
     */
    public readonly memberUins!: pulumi.Output<number[]>;
    /**
     * Organization service ID.
     */
    public readonly serviceId!: pulumi.Output<number>;

    /**
     * Create a OrganizationServiceAssign resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: OrganizationServiceAssignArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: OrganizationServiceAssignArgs | OrganizationServiceAssignState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as OrganizationServiceAssignState | undefined;
            resourceInputs["managementScope"] = state ? state.managementScope : undefined;
            resourceInputs["managementScopeNodeIds"] = state ? state.managementScopeNodeIds : undefined;
            resourceInputs["managementScopeUins"] = state ? state.managementScopeUins : undefined;
            resourceInputs["memberUins"] = state ? state.memberUins : undefined;
            resourceInputs["serviceId"] = state ? state.serviceId : undefined;
        } else {
            const args = argsOrState as OrganizationServiceAssignArgs | undefined;
            if ((!args || args.memberUins === undefined) && !opts.urn) {
                throw new Error("Missing required property 'memberUins'");
            }
            if ((!args || args.serviceId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'serviceId'");
            }
            resourceInputs["managementScope"] = args ? args.managementScope : undefined;
            resourceInputs["managementScopeNodeIds"] = args ? args.managementScopeNodeIds : undefined;
            resourceInputs["managementScopeUins"] = args ? args.managementScopeUins : undefined;
            resourceInputs["memberUins"] = args ? args.memberUins : undefined;
            resourceInputs["serviceId"] = args ? args.serviceId : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(OrganizationServiceAssign.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering OrganizationServiceAssign resources.
 */
export interface OrganizationServiceAssignState {
    /**
     * Management scope of the delegated admin. Valid values: 1 (all members), 2 (partial members). Default value: `1`.
     */
    managementScope?: pulumi.Input<number>;
    /**
     * ID list of the managed departments. This parameter is valid when `management_scope` is `2`.
     */
    managementScopeNodeIds?: pulumi.Input<pulumi.Input<number>[]>;
    /**
     * Uin list of the managed members. This parameter is valid when `management_scope` is `2`.
     */
    managementScopeUins?: pulumi.Input<pulumi.Input<number>[]>;
    /**
     * Uin list of the delegated admins, Including up to 20 items.
     */
    memberUins?: pulumi.Input<pulumi.Input<number>[]>;
    /**
     * Organization service ID.
     */
    serviceId?: pulumi.Input<number>;
}

/**
 * The set of arguments for constructing a OrganizationServiceAssign resource.
 */
export interface OrganizationServiceAssignArgs {
    /**
     * Management scope of the delegated admin. Valid values: 1 (all members), 2 (partial members). Default value: `1`.
     */
    managementScope?: pulumi.Input<number>;
    /**
     * ID list of the managed departments. This parameter is valid when `management_scope` is `2`.
     */
    managementScopeNodeIds?: pulumi.Input<pulumi.Input<number>[]>;
    /**
     * Uin list of the managed members. This parameter is valid when `management_scope` is `2`.
     */
    managementScopeUins?: pulumi.Input<pulumi.Input<number>[]>;
    /**
     * Uin list of the delegated admins, Including up to 20 items.
     */
    memberUins: pulumi.Input<pulumi.Input<number>[]>;
    /**
     * Organization service ID.
     */
    serviceId: pulumi.Input<number>;
}
