// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class MssqlVirtualNetworkRule extends pulumi.CustomResource {
    /**
     * Get an existing MssqlVirtualNetworkRule resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: MssqlVirtualNetworkRuleState, opts?: pulumi.CustomResourceOptions): MssqlVirtualNetworkRule {
        return new MssqlVirtualNetworkRule(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azurerm:index/mssqlVirtualNetworkRule:MssqlVirtualNetworkRule';

    /**
     * Returns true if the given object is an instance of MssqlVirtualNetworkRule.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is MssqlVirtualNetworkRule {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === MssqlVirtualNetworkRule.__pulumiType;
    }

    public readonly ignoreMissingVnetServiceEndpoint!: pulumi.Output<boolean | undefined>;
    public readonly name!: pulumi.Output<string>;
    public readonly serverId!: pulumi.Output<string>;
    public readonly subnetId!: pulumi.Output<string>;
    public readonly timeouts!: pulumi.Output<outputs.MssqlVirtualNetworkRuleTimeouts | undefined>;

    /**
     * Create a MssqlVirtualNetworkRule resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: MssqlVirtualNetworkRuleArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: MssqlVirtualNetworkRuleArgs | MssqlVirtualNetworkRuleState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as MssqlVirtualNetworkRuleState | undefined;
            resourceInputs["ignoreMissingVnetServiceEndpoint"] = state ? state.ignoreMissingVnetServiceEndpoint : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["serverId"] = state ? state.serverId : undefined;
            resourceInputs["subnetId"] = state ? state.subnetId : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
        } else {
            const args = argsOrState as MssqlVirtualNetworkRuleArgs | undefined;
            if ((!args || args.serverId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'serverId'");
            }
            if ((!args || args.subnetId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'subnetId'");
            }
            resourceInputs["ignoreMissingVnetServiceEndpoint"] = args ? args.ignoreMissingVnetServiceEndpoint : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["serverId"] = args ? args.serverId : undefined;
            resourceInputs["subnetId"] = args ? args.subnetId : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(MssqlVirtualNetworkRule.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering MssqlVirtualNetworkRule resources.
 */
export interface MssqlVirtualNetworkRuleState {
    ignoreMissingVnetServiceEndpoint?: pulumi.Input<boolean>;
    name?: pulumi.Input<string>;
    serverId?: pulumi.Input<string>;
    subnetId?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.MssqlVirtualNetworkRuleTimeouts>;
}

/**
 * The set of arguments for constructing a MssqlVirtualNetworkRule resource.
 */
export interface MssqlVirtualNetworkRuleArgs {
    ignoreMissingVnetServiceEndpoint?: pulumi.Input<boolean>;
    name?: pulumi.Input<string>;
    serverId: pulumi.Input<string>;
    subnetId: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.MssqlVirtualNetworkRuleTimeouts>;
}
