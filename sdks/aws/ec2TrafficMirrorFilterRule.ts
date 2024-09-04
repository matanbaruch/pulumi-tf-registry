// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class Ec2TrafficMirrorFilterRule extends pulumi.CustomResource {
    /**
     * Get an existing Ec2TrafficMirrorFilterRule resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: Ec2TrafficMirrorFilterRuleState, opts?: pulumi.CustomResourceOptions): Ec2TrafficMirrorFilterRule {
        return new Ec2TrafficMirrorFilterRule(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'aws:index/ec2TrafficMirrorFilterRule:Ec2TrafficMirrorFilterRule';

    /**
     * Returns true if the given object is an instance of Ec2TrafficMirrorFilterRule.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Ec2TrafficMirrorFilterRule {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Ec2TrafficMirrorFilterRule.__pulumiType;
    }

    public /*out*/ readonly arn!: pulumi.Output<string>;
    public readonly description!: pulumi.Output<string | undefined>;
    public readonly destinationCidrBlock!: pulumi.Output<string>;
    public readonly destinationPortRange!: pulumi.Output<outputs.Ec2TrafficMirrorFilterRuleDestinationPortRange | undefined>;
    public readonly protocol!: pulumi.Output<number | undefined>;
    public readonly ruleAction!: pulumi.Output<string>;
    public readonly ruleNumber!: pulumi.Output<number>;
    public readonly sourceCidrBlock!: pulumi.Output<string>;
    public readonly sourcePortRange!: pulumi.Output<outputs.Ec2TrafficMirrorFilterRuleSourcePortRange | undefined>;
    public readonly trafficDirection!: pulumi.Output<string>;
    public readonly trafficMirrorFilterId!: pulumi.Output<string>;

    /**
     * Create a Ec2TrafficMirrorFilterRule resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: Ec2TrafficMirrorFilterRuleArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: Ec2TrafficMirrorFilterRuleArgs | Ec2TrafficMirrorFilterRuleState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as Ec2TrafficMirrorFilterRuleState | undefined;
            resourceInputs["arn"] = state ? state.arn : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["destinationCidrBlock"] = state ? state.destinationCidrBlock : undefined;
            resourceInputs["destinationPortRange"] = state ? state.destinationPortRange : undefined;
            resourceInputs["protocol"] = state ? state.protocol : undefined;
            resourceInputs["ruleAction"] = state ? state.ruleAction : undefined;
            resourceInputs["ruleNumber"] = state ? state.ruleNumber : undefined;
            resourceInputs["sourceCidrBlock"] = state ? state.sourceCidrBlock : undefined;
            resourceInputs["sourcePortRange"] = state ? state.sourcePortRange : undefined;
            resourceInputs["trafficDirection"] = state ? state.trafficDirection : undefined;
            resourceInputs["trafficMirrorFilterId"] = state ? state.trafficMirrorFilterId : undefined;
        } else {
            const args = argsOrState as Ec2TrafficMirrorFilterRuleArgs | undefined;
            if ((!args || args.destinationCidrBlock === undefined) && !opts.urn) {
                throw new Error("Missing required property 'destinationCidrBlock'");
            }
            if ((!args || args.ruleAction === undefined) && !opts.urn) {
                throw new Error("Missing required property 'ruleAction'");
            }
            if ((!args || args.ruleNumber === undefined) && !opts.urn) {
                throw new Error("Missing required property 'ruleNumber'");
            }
            if ((!args || args.sourceCidrBlock === undefined) && !opts.urn) {
                throw new Error("Missing required property 'sourceCidrBlock'");
            }
            if ((!args || args.trafficDirection === undefined) && !opts.urn) {
                throw new Error("Missing required property 'trafficDirection'");
            }
            if ((!args || args.trafficMirrorFilterId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'trafficMirrorFilterId'");
            }
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["destinationCidrBlock"] = args ? args.destinationCidrBlock : undefined;
            resourceInputs["destinationPortRange"] = args ? args.destinationPortRange : undefined;
            resourceInputs["protocol"] = args ? args.protocol : undefined;
            resourceInputs["ruleAction"] = args ? args.ruleAction : undefined;
            resourceInputs["ruleNumber"] = args ? args.ruleNumber : undefined;
            resourceInputs["sourceCidrBlock"] = args ? args.sourceCidrBlock : undefined;
            resourceInputs["sourcePortRange"] = args ? args.sourcePortRange : undefined;
            resourceInputs["trafficDirection"] = args ? args.trafficDirection : undefined;
            resourceInputs["trafficMirrorFilterId"] = args ? args.trafficMirrorFilterId : undefined;
            resourceInputs["arn"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(Ec2TrafficMirrorFilterRule.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering Ec2TrafficMirrorFilterRule resources.
 */
export interface Ec2TrafficMirrorFilterRuleState {
    arn?: pulumi.Input<string>;
    description?: pulumi.Input<string>;
    destinationCidrBlock?: pulumi.Input<string>;
    destinationPortRange?: pulumi.Input<inputs.Ec2TrafficMirrorFilterRuleDestinationPortRange>;
    protocol?: pulumi.Input<number>;
    ruleAction?: pulumi.Input<string>;
    ruleNumber?: pulumi.Input<number>;
    sourceCidrBlock?: pulumi.Input<string>;
    sourcePortRange?: pulumi.Input<inputs.Ec2TrafficMirrorFilterRuleSourcePortRange>;
    trafficDirection?: pulumi.Input<string>;
    trafficMirrorFilterId?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a Ec2TrafficMirrorFilterRule resource.
 */
export interface Ec2TrafficMirrorFilterRuleArgs {
    description?: pulumi.Input<string>;
    destinationCidrBlock: pulumi.Input<string>;
    destinationPortRange?: pulumi.Input<inputs.Ec2TrafficMirrorFilterRuleDestinationPortRange>;
    protocol?: pulumi.Input<number>;
    ruleAction: pulumi.Input<string>;
    ruleNumber: pulumi.Input<number>;
    sourceCidrBlock: pulumi.Input<string>;
    sourcePortRange?: pulumi.Input<inputs.Ec2TrafficMirrorFilterRuleSourcePortRange>;
    trafficDirection: pulumi.Input<string>;
    trafficMirrorFilterId: pulumi.Input<string>;
}
