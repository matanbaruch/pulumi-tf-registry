// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class LbNatRule extends pulumi.CustomResource {
    /**
     * Get an existing LbNatRule resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: LbNatRuleState, opts?: pulumi.CustomResourceOptions): LbNatRule {
        return new LbNatRule(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azurestack:index/lbNatRule:LbNatRule';

    /**
     * Returns true if the given object is an instance of LbNatRule.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is LbNatRule {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === LbNatRule.__pulumiType;
    }

    public /*out*/ readonly backendIpConfigurationId!: pulumi.Output<string>;
    public readonly backendPort!: pulumi.Output<number>;
    public readonly enableFloatingIp!: pulumi.Output<boolean>;
    public /*out*/ readonly frontendIpConfigurationId!: pulumi.Output<string>;
    public readonly frontendIpConfigurationName!: pulumi.Output<string>;
    public readonly frontendPort!: pulumi.Output<number>;
    public readonly idleTimeoutInMinutes!: pulumi.Output<number>;
    public readonly loadbalancerId!: pulumi.Output<string>;
    public readonly name!: pulumi.Output<string>;
    public readonly protocol!: pulumi.Output<string>;
    public readonly resourceGroupName!: pulumi.Output<string>;
    public readonly timeouts!: pulumi.Output<outputs.LbNatRuleTimeouts | undefined>;

    /**
     * Create a LbNatRule resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: LbNatRuleArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: LbNatRuleArgs | LbNatRuleState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as LbNatRuleState | undefined;
            resourceInputs["backendIpConfigurationId"] = state ? state.backendIpConfigurationId : undefined;
            resourceInputs["backendPort"] = state ? state.backendPort : undefined;
            resourceInputs["enableFloatingIp"] = state ? state.enableFloatingIp : undefined;
            resourceInputs["frontendIpConfigurationId"] = state ? state.frontendIpConfigurationId : undefined;
            resourceInputs["frontendIpConfigurationName"] = state ? state.frontendIpConfigurationName : undefined;
            resourceInputs["frontendPort"] = state ? state.frontendPort : undefined;
            resourceInputs["idleTimeoutInMinutes"] = state ? state.idleTimeoutInMinutes : undefined;
            resourceInputs["loadbalancerId"] = state ? state.loadbalancerId : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["protocol"] = state ? state.protocol : undefined;
            resourceInputs["resourceGroupName"] = state ? state.resourceGroupName : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
        } else {
            const args = argsOrState as LbNatRuleArgs | undefined;
            if ((!args || args.backendPort === undefined) && !opts.urn) {
                throw new Error("Missing required property 'backendPort'");
            }
            if ((!args || args.frontendIpConfigurationName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'frontendIpConfigurationName'");
            }
            if ((!args || args.frontendPort === undefined) && !opts.urn) {
                throw new Error("Missing required property 'frontendPort'");
            }
            if ((!args || args.loadbalancerId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'loadbalancerId'");
            }
            if ((!args || args.protocol === undefined) && !opts.urn) {
                throw new Error("Missing required property 'protocol'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["backendPort"] = args ? args.backendPort : undefined;
            resourceInputs["enableFloatingIp"] = args ? args.enableFloatingIp : undefined;
            resourceInputs["frontendIpConfigurationName"] = args ? args.frontendIpConfigurationName : undefined;
            resourceInputs["frontendPort"] = args ? args.frontendPort : undefined;
            resourceInputs["idleTimeoutInMinutes"] = args ? args.idleTimeoutInMinutes : undefined;
            resourceInputs["loadbalancerId"] = args ? args.loadbalancerId : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["protocol"] = args ? args.protocol : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["backendIpConfigurationId"] = undefined /*out*/;
            resourceInputs["frontendIpConfigurationId"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(LbNatRule.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering LbNatRule resources.
 */
export interface LbNatRuleState {
    backendIpConfigurationId?: pulumi.Input<string>;
    backendPort?: pulumi.Input<number>;
    enableFloatingIp?: pulumi.Input<boolean>;
    frontendIpConfigurationId?: pulumi.Input<string>;
    frontendIpConfigurationName?: pulumi.Input<string>;
    frontendPort?: pulumi.Input<number>;
    idleTimeoutInMinutes?: pulumi.Input<number>;
    loadbalancerId?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    protocol?: pulumi.Input<string>;
    resourceGroupName?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.LbNatRuleTimeouts>;
}

/**
 * The set of arguments for constructing a LbNatRule resource.
 */
export interface LbNatRuleArgs {
    backendPort: pulumi.Input<number>;
    enableFloatingIp?: pulumi.Input<boolean>;
    frontendIpConfigurationName: pulumi.Input<string>;
    frontendPort: pulumi.Input<number>;
    idleTimeoutInMinutes?: pulumi.Input<number>;
    loadbalancerId: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    protocol: pulumi.Input<string>;
    resourceGroupName: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.LbNatRuleTimeouts>;
}
