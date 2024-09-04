// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class LbTargetGroup extends pulumi.CustomResource {
    /**
     * Get an existing LbTargetGroup resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: LbTargetGroupState, opts?: pulumi.CustomResourceOptions): LbTargetGroup {
        return new LbTargetGroup(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'ncloud:index/lbTargetGroup:LbTargetGroup';

    /**
     * Returns true if the given object is an instance of LbTargetGroup.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is LbTargetGroup {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === LbTargetGroup.__pulumiType;
    }

    public readonly algorithmType!: pulumi.Output<string>;
    public readonly description!: pulumi.Output<string | undefined>;
    public readonly healthCheck!: pulumi.Output<outputs.LbTargetGroupHealthCheck | undefined>;
    public /*out*/ readonly loadBalancerInstanceNo!: pulumi.Output<string>;
    public readonly name!: pulumi.Output<string>;
    public readonly port!: pulumi.Output<number>;
    public readonly protocol!: pulumi.Output<string>;
    public /*out*/ readonly targetGroupNo!: pulumi.Output<string>;
    public /*out*/ readonly targetNoLists!: pulumi.Output<string[]>;
    public readonly targetType!: pulumi.Output<string>;
    public readonly useProxyProtocol!: pulumi.Output<boolean>;
    public readonly useStickySession!: pulumi.Output<boolean>;
    public readonly vpcNo!: pulumi.Output<string>;

    /**
     * Create a LbTargetGroup resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: LbTargetGroupArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: LbTargetGroupArgs | LbTargetGroupState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as LbTargetGroupState | undefined;
            resourceInputs["algorithmType"] = state ? state.algorithmType : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["healthCheck"] = state ? state.healthCheck : undefined;
            resourceInputs["loadBalancerInstanceNo"] = state ? state.loadBalancerInstanceNo : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["port"] = state ? state.port : undefined;
            resourceInputs["protocol"] = state ? state.protocol : undefined;
            resourceInputs["targetGroupNo"] = state ? state.targetGroupNo : undefined;
            resourceInputs["targetNoLists"] = state ? state.targetNoLists : undefined;
            resourceInputs["targetType"] = state ? state.targetType : undefined;
            resourceInputs["useProxyProtocol"] = state ? state.useProxyProtocol : undefined;
            resourceInputs["useStickySession"] = state ? state.useStickySession : undefined;
            resourceInputs["vpcNo"] = state ? state.vpcNo : undefined;
        } else {
            const args = argsOrState as LbTargetGroupArgs | undefined;
            if ((!args || args.protocol === undefined) && !opts.urn) {
                throw new Error("Missing required property 'protocol'");
            }
            if ((!args || args.vpcNo === undefined) && !opts.urn) {
                throw new Error("Missing required property 'vpcNo'");
            }
            resourceInputs["algorithmType"] = args ? args.algorithmType : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["healthCheck"] = args ? args.healthCheck : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["port"] = args ? args.port : undefined;
            resourceInputs["protocol"] = args ? args.protocol : undefined;
            resourceInputs["targetType"] = args ? args.targetType : undefined;
            resourceInputs["useProxyProtocol"] = args ? args.useProxyProtocol : undefined;
            resourceInputs["useStickySession"] = args ? args.useStickySession : undefined;
            resourceInputs["vpcNo"] = args ? args.vpcNo : undefined;
            resourceInputs["loadBalancerInstanceNo"] = undefined /*out*/;
            resourceInputs["targetGroupNo"] = undefined /*out*/;
            resourceInputs["targetNoLists"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(LbTargetGroup.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering LbTargetGroup resources.
 */
export interface LbTargetGroupState {
    algorithmType?: pulumi.Input<string>;
    description?: pulumi.Input<string>;
    healthCheck?: pulumi.Input<inputs.LbTargetGroupHealthCheck>;
    loadBalancerInstanceNo?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    port?: pulumi.Input<number>;
    protocol?: pulumi.Input<string>;
    targetGroupNo?: pulumi.Input<string>;
    targetNoLists?: pulumi.Input<pulumi.Input<string>[]>;
    targetType?: pulumi.Input<string>;
    useProxyProtocol?: pulumi.Input<boolean>;
    useStickySession?: pulumi.Input<boolean>;
    vpcNo?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a LbTargetGroup resource.
 */
export interface LbTargetGroupArgs {
    algorithmType?: pulumi.Input<string>;
    description?: pulumi.Input<string>;
    healthCheck?: pulumi.Input<inputs.LbTargetGroupHealthCheck>;
    name?: pulumi.Input<string>;
    port?: pulumi.Input<number>;
    protocol: pulumi.Input<string>;
    targetType?: pulumi.Input<string>;
    useProxyProtocol?: pulumi.Input<boolean>;
    useStickySession?: pulumi.Input<boolean>;
    vpcNo: pulumi.Input<string>;
}
