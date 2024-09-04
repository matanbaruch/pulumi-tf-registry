// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class HbacPolicyServiceMembership extends pulumi.CustomResource {
    /**
     * Get an existing HbacPolicyServiceMembership resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: HbacPolicyServiceMembershipState, opts?: pulumi.CustomResourceOptions): HbacPolicyServiceMembership {
        return new HbacPolicyServiceMembership(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'freeipa:index/hbacPolicyServiceMembership:HbacPolicyServiceMembership';

    /**
     * Returns true if the given object is an instance of HbacPolicyServiceMembership.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is HbacPolicyServiceMembership {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === HbacPolicyServiceMembership.__pulumiType;
    }

    /**
     * HBAC policy name
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * Service name the policy is applied to
     */
    public readonly service!: pulumi.Output<string | undefined>;
    /**
     * Service group name the policy is applied to
     */
    public readonly servicegroup!: pulumi.Output<string | undefined>;

    /**
     * Create a HbacPolicyServiceMembership resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: HbacPolicyServiceMembershipArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: HbacPolicyServiceMembershipArgs | HbacPolicyServiceMembershipState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as HbacPolicyServiceMembershipState | undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["service"] = state ? state.service : undefined;
            resourceInputs["servicegroup"] = state ? state.servicegroup : undefined;
        } else {
            const args = argsOrState as HbacPolicyServiceMembershipArgs | undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["service"] = args ? args.service : undefined;
            resourceInputs["servicegroup"] = args ? args.servicegroup : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(HbacPolicyServiceMembership.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering HbacPolicyServiceMembership resources.
 */
export interface HbacPolicyServiceMembershipState {
    /**
     * HBAC policy name
     */
    name?: pulumi.Input<string>;
    /**
     * Service name the policy is applied to
     */
    service?: pulumi.Input<string>;
    /**
     * Service group name the policy is applied to
     */
    servicegroup?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a HbacPolicyServiceMembership resource.
 */
export interface HbacPolicyServiceMembershipArgs {
    /**
     * HBAC policy name
     */
    name?: pulumi.Input<string>;
    /**
     * Service name the policy is applied to
     */
    service?: pulumi.Input<string>;
    /**
     * Service group name the policy is applied to
     */
    servicegroup?: pulumi.Input<string>;
}
