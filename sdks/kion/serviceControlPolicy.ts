// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class ServiceControlPolicy extends pulumi.CustomResource {
    /**
     * Get an existing ServiceControlPolicy resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ServiceControlPolicyState, opts?: pulumi.CustomResourceOptions): ServiceControlPolicy {
        return new ServiceControlPolicy(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'kion:index/serviceControlPolicy:ServiceControlPolicy';

    /**
     * Returns true if the given object is an instance of ServiceControlPolicy.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ServiceControlPolicy {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ServiceControlPolicy.__pulumiType;
    }

    public /*out*/ readonly awsManagedPolicy!: pulumi.Output<boolean>;
    public /*out*/ readonly createdByUserId!: pulumi.Output<number>;
    public readonly description!: pulumi.Output<string | undefined>;
    public readonly lastUpdated!: pulumi.Output<string>;
    public readonly name!: pulumi.Output<string>;
    /**
     * Must provide at least the owner_user_groups field or the owner_users field.
     */
    public readonly ownerUserGroups!: pulumi.Output<outputs.ServiceControlPolicyOwnerUserGroup[] | undefined>;
    /**
     * Must provide at least the owner_user_groups field or the owner_users field.
     */
    public readonly ownerUsers!: pulumi.Output<outputs.ServiceControlPolicyOwnerUser[] | undefined>;
    public readonly policy!: pulumi.Output<string>;
    public /*out*/ readonly systemManagedPolicy!: pulumi.Output<boolean>;

    /**
     * Create a ServiceControlPolicy resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ServiceControlPolicyArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ServiceControlPolicyArgs | ServiceControlPolicyState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as ServiceControlPolicyState | undefined;
            resourceInputs["awsManagedPolicy"] = state ? state.awsManagedPolicy : undefined;
            resourceInputs["createdByUserId"] = state ? state.createdByUserId : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["lastUpdated"] = state ? state.lastUpdated : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["ownerUserGroups"] = state ? state.ownerUserGroups : undefined;
            resourceInputs["ownerUsers"] = state ? state.ownerUsers : undefined;
            resourceInputs["policy"] = state ? state.policy : undefined;
            resourceInputs["systemManagedPolicy"] = state ? state.systemManagedPolicy : undefined;
        } else {
            const args = argsOrState as ServiceControlPolicyArgs | undefined;
            if ((!args || args.policy === undefined) && !opts.urn) {
                throw new Error("Missing required property 'policy'");
            }
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["lastUpdated"] = args ? args.lastUpdated : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["ownerUserGroups"] = args ? args.ownerUserGroups : undefined;
            resourceInputs["ownerUsers"] = args ? args.ownerUsers : undefined;
            resourceInputs["policy"] = args ? args.policy : undefined;
            resourceInputs["awsManagedPolicy"] = undefined /*out*/;
            resourceInputs["createdByUserId"] = undefined /*out*/;
            resourceInputs["systemManagedPolicy"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(ServiceControlPolicy.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering ServiceControlPolicy resources.
 */
export interface ServiceControlPolicyState {
    awsManagedPolicy?: pulumi.Input<boolean>;
    createdByUserId?: pulumi.Input<number>;
    description?: pulumi.Input<string>;
    lastUpdated?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    /**
     * Must provide at least the owner_user_groups field or the owner_users field.
     */
    ownerUserGroups?: pulumi.Input<pulumi.Input<inputs.ServiceControlPolicyOwnerUserGroup>[]>;
    /**
     * Must provide at least the owner_user_groups field or the owner_users field.
     */
    ownerUsers?: pulumi.Input<pulumi.Input<inputs.ServiceControlPolicyOwnerUser>[]>;
    policy?: pulumi.Input<string>;
    systemManagedPolicy?: pulumi.Input<boolean>;
}

/**
 * The set of arguments for constructing a ServiceControlPolicy resource.
 */
export interface ServiceControlPolicyArgs {
    description?: pulumi.Input<string>;
    lastUpdated?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    /**
     * Must provide at least the owner_user_groups field or the owner_users field.
     */
    ownerUserGroups?: pulumi.Input<pulumi.Input<inputs.ServiceControlPolicyOwnerUserGroup>[]>;
    /**
     * Must provide at least the owner_user_groups field or the owner_users field.
     */
    ownerUsers?: pulumi.Input<pulumi.Input<inputs.ServiceControlPolicyOwnerUser>[]>;
    policy: pulumi.Input<string>;
}
