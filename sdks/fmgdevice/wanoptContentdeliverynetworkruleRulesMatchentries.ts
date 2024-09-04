// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class WanoptContentdeliverynetworkruleRulesMatchentries extends pulumi.CustomResource {
    /**
     * Get an existing WanoptContentdeliverynetworkruleRulesMatchentries resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: WanoptContentdeliverynetworkruleRulesMatchentriesState, opts?: pulumi.CustomResourceOptions): WanoptContentdeliverynetworkruleRulesMatchentries {
        return new WanoptContentdeliverynetworkruleRulesMatchentries(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'fmgdevice:index/wanoptContentdeliverynetworkruleRulesMatchentries:WanoptContentdeliverynetworkruleRulesMatchentries';

    /**
     * Returns true if the given object is an instance of WanoptContentdeliverynetworkruleRulesMatchentries.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is WanoptContentdeliverynetworkruleRulesMatchentries {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === WanoptContentdeliverynetworkruleRulesMatchentries.__pulumiType;
    }

    public readonly contentDeliveryNetworkRule!: pulumi.Output<string>;
    public readonly deviceName!: pulumi.Output<string>;
    public readonly fosid!: pulumi.Output<number | undefined>;
    public readonly patterns!: pulumi.Output<string[]>;
    public readonly rules!: pulumi.Output<string>;
    public readonly target!: pulumi.Output<string>;

    /**
     * Create a WanoptContentdeliverynetworkruleRulesMatchentries resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: WanoptContentdeliverynetworkruleRulesMatchentriesArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: WanoptContentdeliverynetworkruleRulesMatchentriesArgs | WanoptContentdeliverynetworkruleRulesMatchentriesState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as WanoptContentdeliverynetworkruleRulesMatchentriesState | undefined;
            resourceInputs["contentDeliveryNetworkRule"] = state ? state.contentDeliveryNetworkRule : undefined;
            resourceInputs["deviceName"] = state ? state.deviceName : undefined;
            resourceInputs["fosid"] = state ? state.fosid : undefined;
            resourceInputs["patterns"] = state ? state.patterns : undefined;
            resourceInputs["rules"] = state ? state.rules : undefined;
            resourceInputs["target"] = state ? state.target : undefined;
        } else {
            const args = argsOrState as WanoptContentdeliverynetworkruleRulesMatchentriesArgs | undefined;
            if ((!args || args.contentDeliveryNetworkRule === undefined) && !opts.urn) {
                throw new Error("Missing required property 'contentDeliveryNetworkRule'");
            }
            if ((!args || args.rules === undefined) && !opts.urn) {
                throw new Error("Missing required property 'rules'");
            }
            resourceInputs["contentDeliveryNetworkRule"] = args ? args.contentDeliveryNetworkRule : undefined;
            resourceInputs["deviceName"] = args ? args.deviceName : undefined;
            resourceInputs["fosid"] = args ? args.fosid : undefined;
            resourceInputs["patterns"] = args ? args.patterns : undefined;
            resourceInputs["rules"] = args ? args.rules : undefined;
            resourceInputs["target"] = args ? args.target : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(WanoptContentdeliverynetworkruleRulesMatchentries.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering WanoptContentdeliverynetworkruleRulesMatchentries resources.
 */
export interface WanoptContentdeliverynetworkruleRulesMatchentriesState {
    contentDeliveryNetworkRule?: pulumi.Input<string>;
    deviceName?: pulumi.Input<string>;
    fosid?: pulumi.Input<number>;
    patterns?: pulumi.Input<pulumi.Input<string>[]>;
    rules?: pulumi.Input<string>;
    target?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a WanoptContentdeliverynetworkruleRulesMatchentries resource.
 */
export interface WanoptContentdeliverynetworkruleRulesMatchentriesArgs {
    contentDeliveryNetworkRule: pulumi.Input<string>;
    deviceName?: pulumi.Input<string>;
    fosid?: pulumi.Input<number>;
    patterns?: pulumi.Input<pulumi.Input<string>[]>;
    rules: pulumi.Input<string>;
    target?: pulumi.Input<string>;
}
