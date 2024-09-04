// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class MysqlFlexibleServerFirewallRule extends pulumi.CustomResource {
    /**
     * Get an existing MysqlFlexibleServerFirewallRule resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: MysqlFlexibleServerFirewallRuleState, opts?: pulumi.CustomResourceOptions): MysqlFlexibleServerFirewallRule {
        return new MysqlFlexibleServerFirewallRule(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azurerm:index/mysqlFlexibleServerFirewallRule:MysqlFlexibleServerFirewallRule';

    /**
     * Returns true if the given object is an instance of MysqlFlexibleServerFirewallRule.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is MysqlFlexibleServerFirewallRule {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === MysqlFlexibleServerFirewallRule.__pulumiType;
    }

    public readonly endIpAddress!: pulumi.Output<string>;
    public readonly name!: pulumi.Output<string>;
    public readonly resourceGroupName!: pulumi.Output<string>;
    public readonly serverName!: pulumi.Output<string>;
    public readonly startIpAddress!: pulumi.Output<string>;
    public readonly timeouts!: pulumi.Output<outputs.MysqlFlexibleServerFirewallRuleTimeouts | undefined>;

    /**
     * Create a MysqlFlexibleServerFirewallRule resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: MysqlFlexibleServerFirewallRuleArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: MysqlFlexibleServerFirewallRuleArgs | MysqlFlexibleServerFirewallRuleState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as MysqlFlexibleServerFirewallRuleState | undefined;
            resourceInputs["endIpAddress"] = state ? state.endIpAddress : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["resourceGroupName"] = state ? state.resourceGroupName : undefined;
            resourceInputs["serverName"] = state ? state.serverName : undefined;
            resourceInputs["startIpAddress"] = state ? state.startIpAddress : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
        } else {
            const args = argsOrState as MysqlFlexibleServerFirewallRuleArgs | undefined;
            if ((!args || args.endIpAddress === undefined) && !opts.urn) {
                throw new Error("Missing required property 'endIpAddress'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.serverName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'serverName'");
            }
            if ((!args || args.startIpAddress === undefined) && !opts.urn) {
                throw new Error("Missing required property 'startIpAddress'");
            }
            resourceInputs["endIpAddress"] = args ? args.endIpAddress : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["serverName"] = args ? args.serverName : undefined;
            resourceInputs["startIpAddress"] = args ? args.startIpAddress : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(MysqlFlexibleServerFirewallRule.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering MysqlFlexibleServerFirewallRule resources.
 */
export interface MysqlFlexibleServerFirewallRuleState {
    endIpAddress?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    resourceGroupName?: pulumi.Input<string>;
    serverName?: pulumi.Input<string>;
    startIpAddress?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.MysqlFlexibleServerFirewallRuleTimeouts>;
}

/**
 * The set of arguments for constructing a MysqlFlexibleServerFirewallRule resource.
 */
export interface MysqlFlexibleServerFirewallRuleArgs {
    endIpAddress: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    resourceGroupName: pulumi.Input<string>;
    serverName: pulumi.Input<string>;
    startIpAddress: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.MysqlFlexibleServerFirewallRuleTimeouts>;
}
