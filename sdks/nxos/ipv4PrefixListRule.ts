// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class Ipv4PrefixListRule extends pulumi.CustomResource {
    /**
     * Get an existing Ipv4PrefixListRule resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: Ipv4PrefixListRuleState, opts?: pulumi.CustomResourceOptions): Ipv4PrefixListRule {
        return new Ipv4PrefixListRule(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'nxos:index/ipv4PrefixListRule:Ipv4PrefixListRule';

    /**
     * Returns true if the given object is an instance of Ipv4PrefixListRule.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Ipv4PrefixListRule {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Ipv4PrefixListRule.__pulumiType;
    }

    /**
     * A device name from the provider configuration.
     */
    public readonly device!: pulumi.Output<string | undefined>;
    /**
     * IPv4 Prefix List Rule name.
     */
    public readonly name!: pulumi.Output<string>;

    /**
     * Create a Ipv4PrefixListRule resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: Ipv4PrefixListRuleArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: Ipv4PrefixListRuleArgs | Ipv4PrefixListRuleState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as Ipv4PrefixListRuleState | undefined;
            resourceInputs["device"] = state ? state.device : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
        } else {
            const args = argsOrState as Ipv4PrefixListRuleArgs | undefined;
            resourceInputs["device"] = args ? args.device : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(Ipv4PrefixListRule.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering Ipv4PrefixListRule resources.
 */
export interface Ipv4PrefixListRuleState {
    /**
     * A device name from the provider configuration.
     */
    device?: pulumi.Input<string>;
    /**
     * IPv4 Prefix List Rule name.
     */
    name?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a Ipv4PrefixListRule resource.
 */
export interface Ipv4PrefixListRuleArgs {
    /**
     * A device name from the provider configuration.
     */
    device?: pulumi.Input<string>;
    /**
     * IPv4 Prefix List Rule name.
     */
    name?: pulumi.Input<string>;
}
