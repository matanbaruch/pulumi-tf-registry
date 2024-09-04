// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class SecurityNatDestinationRuleSetFromInterface extends pulumi.CustomResource {
    /**
     * Get an existing SecurityNatDestinationRuleSetFromInterface resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SecurityNatDestinationRuleSetFromInterfaceState, opts?: pulumi.CustomResourceOptions): SecurityNatDestinationRuleSetFromInterface {
        return new SecurityNatDestinationRuleSetFromInterface(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'junos-vsrx:index/securityNatDestinationRuleSetFromInterface:SecurityNatDestinationRuleSetFromInterface';

    /**
     * Returns true if the given object is an instance of SecurityNatDestinationRuleSetFromInterface.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is SecurityNatDestinationRuleSetFromInterface {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === SecurityNatDestinationRuleSetFromInterface.__pulumiType;
    }

    /**
     * xpath is: config.Groups.V_rule__set.V_from. Source interface list
     */
    public readonly interface!: pulumi.Output<string | undefined>;
    /**
     * xpath is: config.Groups.V_rule__set
     */
    public readonly name!: pulumi.Output<string>;
    public readonly resourceName!: pulumi.Output<string>;

    /**
     * Create a SecurityNatDestinationRuleSetFromInterface resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SecurityNatDestinationRuleSetFromInterfaceArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: SecurityNatDestinationRuleSetFromInterfaceArgs | SecurityNatDestinationRuleSetFromInterfaceState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as SecurityNatDestinationRuleSetFromInterfaceState | undefined;
            resourceInputs["interface"] = state ? state.interface : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["resourceName"] = state ? state.resourceName : undefined;
        } else {
            const args = argsOrState as SecurityNatDestinationRuleSetFromInterfaceArgs | undefined;
            if ((!args || args.resourceName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceName'");
            }
            resourceInputs["interface"] = args ? args.interface : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["resourceName"] = args ? args.resourceName : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(SecurityNatDestinationRuleSetFromInterface.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering SecurityNatDestinationRuleSetFromInterface resources.
 */
export interface SecurityNatDestinationRuleSetFromInterfaceState {
    /**
     * xpath is: config.Groups.V_rule__set.V_from. Source interface list
     */
    interface?: pulumi.Input<string>;
    /**
     * xpath is: config.Groups.V_rule__set
     */
    name?: pulumi.Input<string>;
    resourceName?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a SecurityNatDestinationRuleSetFromInterface resource.
 */
export interface SecurityNatDestinationRuleSetFromInterfaceArgs {
    /**
     * xpath is: config.Groups.V_rule__set.V_from. Source interface list
     */
    interface?: pulumi.Input<string>;
    /**
     * xpath is: config.Groups.V_rule__set
     */
    name?: pulumi.Input<string>;
    resourceName: pulumi.Input<string>;
}
