// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class VpcTrafficMirrorFilterIngressRule extends pulumi.CustomResource {
    /**
     * Get an existing VpcTrafficMirrorFilterIngressRule resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: VpcTrafficMirrorFilterIngressRuleState, opts?: pulumi.CustomResourceOptions): VpcTrafficMirrorFilterIngressRule {
        return new VpcTrafficMirrorFilterIngressRule(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'alicloud:index/vpcTrafficMirrorFilterIngressRule:VpcTrafficMirrorFilterIngressRule';

    /**
     * Returns true if the given object is an instance of VpcTrafficMirrorFilterIngressRule.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is VpcTrafficMirrorFilterIngressRule {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === VpcTrafficMirrorFilterIngressRule.__pulumiType;
    }

    public readonly action!: pulumi.Output<string>;
    public readonly destinationCidrBlock!: pulumi.Output<string>;
    public readonly destinationPortRange!: pulumi.Output<string>;
    public readonly dryRun!: pulumi.Output<boolean | undefined>;
    public readonly priority!: pulumi.Output<number>;
    public readonly protocol!: pulumi.Output<string>;
    /**
     * @deprecated Deprecated
     */
    public readonly ruleAction!: pulumi.Output<string>;
    public readonly sourceCidrBlock!: pulumi.Output<string>;
    public readonly sourcePortRange!: pulumi.Output<string>;
    public /*out*/ readonly status!: pulumi.Output<string>;
    public readonly timeouts!: pulumi.Output<outputs.VpcTrafficMirrorFilterIngressRuleTimeouts | undefined>;
    public readonly trafficMirrorFilterId!: pulumi.Output<string>;
    public /*out*/ readonly trafficMirrorFilterIngressRuleId!: pulumi.Output<string>;

    /**
     * Create a VpcTrafficMirrorFilterIngressRule resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: VpcTrafficMirrorFilterIngressRuleArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: VpcTrafficMirrorFilterIngressRuleArgs | VpcTrafficMirrorFilterIngressRuleState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as VpcTrafficMirrorFilterIngressRuleState | undefined;
            resourceInputs["action"] = state ? state.action : undefined;
            resourceInputs["destinationCidrBlock"] = state ? state.destinationCidrBlock : undefined;
            resourceInputs["destinationPortRange"] = state ? state.destinationPortRange : undefined;
            resourceInputs["dryRun"] = state ? state.dryRun : undefined;
            resourceInputs["priority"] = state ? state.priority : undefined;
            resourceInputs["protocol"] = state ? state.protocol : undefined;
            resourceInputs["ruleAction"] = state ? state.ruleAction : undefined;
            resourceInputs["sourceCidrBlock"] = state ? state.sourceCidrBlock : undefined;
            resourceInputs["sourcePortRange"] = state ? state.sourcePortRange : undefined;
            resourceInputs["status"] = state ? state.status : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
            resourceInputs["trafficMirrorFilterId"] = state ? state.trafficMirrorFilterId : undefined;
            resourceInputs["trafficMirrorFilterIngressRuleId"] = state ? state.trafficMirrorFilterIngressRuleId : undefined;
        } else {
            const args = argsOrState as VpcTrafficMirrorFilterIngressRuleArgs | undefined;
            if ((!args || args.destinationCidrBlock === undefined) && !opts.urn) {
                throw new Error("Missing required property 'destinationCidrBlock'");
            }
            if ((!args || args.priority === undefined) && !opts.urn) {
                throw new Error("Missing required property 'priority'");
            }
            if ((!args || args.protocol === undefined) && !opts.urn) {
                throw new Error("Missing required property 'protocol'");
            }
            if ((!args || args.sourceCidrBlock === undefined) && !opts.urn) {
                throw new Error("Missing required property 'sourceCidrBlock'");
            }
            if ((!args || args.trafficMirrorFilterId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'trafficMirrorFilterId'");
            }
            resourceInputs["action"] = args ? args.action : undefined;
            resourceInputs["destinationCidrBlock"] = args ? args.destinationCidrBlock : undefined;
            resourceInputs["destinationPortRange"] = args ? args.destinationPortRange : undefined;
            resourceInputs["dryRun"] = args ? args.dryRun : undefined;
            resourceInputs["priority"] = args ? args.priority : undefined;
            resourceInputs["protocol"] = args ? args.protocol : undefined;
            resourceInputs["ruleAction"] = args ? args.ruleAction : undefined;
            resourceInputs["sourceCidrBlock"] = args ? args.sourceCidrBlock : undefined;
            resourceInputs["sourcePortRange"] = args ? args.sourcePortRange : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["trafficMirrorFilterId"] = args ? args.trafficMirrorFilterId : undefined;
            resourceInputs["status"] = undefined /*out*/;
            resourceInputs["trafficMirrorFilterIngressRuleId"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(VpcTrafficMirrorFilterIngressRule.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering VpcTrafficMirrorFilterIngressRule resources.
 */
export interface VpcTrafficMirrorFilterIngressRuleState {
    action?: pulumi.Input<string>;
    destinationCidrBlock?: pulumi.Input<string>;
    destinationPortRange?: pulumi.Input<string>;
    dryRun?: pulumi.Input<boolean>;
    priority?: pulumi.Input<number>;
    protocol?: pulumi.Input<string>;
    /**
     * @deprecated Deprecated
     */
    ruleAction?: pulumi.Input<string>;
    sourceCidrBlock?: pulumi.Input<string>;
    sourcePortRange?: pulumi.Input<string>;
    status?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.VpcTrafficMirrorFilterIngressRuleTimeouts>;
    trafficMirrorFilterId?: pulumi.Input<string>;
    trafficMirrorFilterIngressRuleId?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a VpcTrafficMirrorFilterIngressRule resource.
 */
export interface VpcTrafficMirrorFilterIngressRuleArgs {
    action?: pulumi.Input<string>;
    destinationCidrBlock: pulumi.Input<string>;
    destinationPortRange?: pulumi.Input<string>;
    dryRun?: pulumi.Input<boolean>;
    priority: pulumi.Input<number>;
    protocol: pulumi.Input<string>;
    /**
     * @deprecated Deprecated
     */
    ruleAction?: pulumi.Input<string>;
    sourceCidrBlock: pulumi.Input<string>;
    sourcePortRange?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.VpcTrafficMirrorFilterIngressRuleTimeouts>;
    trafficMirrorFilterId: pulumi.Input<string>;
}
