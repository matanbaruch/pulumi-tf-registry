// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class SecurityPoliciesPolicyPolicyMatchDestinationAddress extends pulumi.CustomResource {
    /**
     * Get an existing SecurityPoliciesPolicyPolicyMatchDestinationAddress resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SecurityPoliciesPolicyPolicyMatchDestinationAddressState, opts?: pulumi.CustomResourceOptions): SecurityPoliciesPolicyPolicyMatchDestinationAddress {
        return new SecurityPoliciesPolicyPolicyMatchDestinationAddress(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'junos-vsrx:index/securityPoliciesPolicyPolicyMatchDestinationAddress:SecurityPoliciesPolicyPolicyMatchDestinationAddress';

    /**
     * Returns true if the given object is an instance of SecurityPoliciesPolicyPolicyMatchDestinationAddress.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is SecurityPoliciesPolicyPolicyMatchDestinationAddress {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === SecurityPoliciesPolicyPolicyMatchDestinationAddress.__pulumiType;
    }

    /**
     * xpath is: config.Groups.V_policy.V_policy__1.V_match.
     */
    public readonly destinationAddress!: pulumi.Output<string | undefined>;
    /**
     * xpath is: config.Groups.V_policy
     */
    public readonly fromZoneName!: pulumi.Output<string | undefined>;
    /**
     * xpath is: config.Groups.V_policy.V_policy__1
     */
    public readonly name!: pulumi.Output<string>;
    public readonly resourceName!: pulumi.Output<string>;
    /**
     * xpath is: config.Groups.V_policy
     */
    public readonly toZoneName!: pulumi.Output<string | undefined>;

    /**
     * Create a SecurityPoliciesPolicyPolicyMatchDestinationAddress resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SecurityPoliciesPolicyPolicyMatchDestinationAddressArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: SecurityPoliciesPolicyPolicyMatchDestinationAddressArgs | SecurityPoliciesPolicyPolicyMatchDestinationAddressState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as SecurityPoliciesPolicyPolicyMatchDestinationAddressState | undefined;
            resourceInputs["destinationAddress"] = state ? state.destinationAddress : undefined;
            resourceInputs["fromZoneName"] = state ? state.fromZoneName : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["resourceName"] = state ? state.resourceName : undefined;
            resourceInputs["toZoneName"] = state ? state.toZoneName : undefined;
        } else {
            const args = argsOrState as SecurityPoliciesPolicyPolicyMatchDestinationAddressArgs | undefined;
            if ((!args || args.resourceName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceName'");
            }
            resourceInputs["destinationAddress"] = args ? args.destinationAddress : undefined;
            resourceInputs["fromZoneName"] = args ? args.fromZoneName : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["resourceName"] = args ? args.resourceName : undefined;
            resourceInputs["toZoneName"] = args ? args.toZoneName : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(SecurityPoliciesPolicyPolicyMatchDestinationAddress.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering SecurityPoliciesPolicyPolicyMatchDestinationAddress resources.
 */
export interface SecurityPoliciesPolicyPolicyMatchDestinationAddressState {
    /**
     * xpath is: config.Groups.V_policy.V_policy__1.V_match.
     */
    destinationAddress?: pulumi.Input<string>;
    /**
     * xpath is: config.Groups.V_policy
     */
    fromZoneName?: pulumi.Input<string>;
    /**
     * xpath is: config.Groups.V_policy.V_policy__1
     */
    name?: pulumi.Input<string>;
    resourceName?: pulumi.Input<string>;
    /**
     * xpath is: config.Groups.V_policy
     */
    toZoneName?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a SecurityPoliciesPolicyPolicyMatchDestinationAddress resource.
 */
export interface SecurityPoliciesPolicyPolicyMatchDestinationAddressArgs {
    /**
     * xpath is: config.Groups.V_policy.V_policy__1.V_match.
     */
    destinationAddress?: pulumi.Input<string>;
    /**
     * xpath is: config.Groups.V_policy
     */
    fromZoneName?: pulumi.Input<string>;
    /**
     * xpath is: config.Groups.V_policy.V_policy__1
     */
    name?: pulumi.Input<string>;
    resourceName: pulumi.Input<string>;
    /**
     * xpath is: config.Groups.V_policy
     */
    toZoneName?: pulumi.Input<string>;
}
