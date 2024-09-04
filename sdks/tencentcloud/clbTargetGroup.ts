// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class ClbTargetGroup extends pulumi.CustomResource {
    /**
     * Get an existing ClbTargetGroup resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ClbTargetGroupState, opts?: pulumi.CustomResourceOptions): ClbTargetGroup {
        return new ClbTargetGroup(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'tencentcloud:index/clbTargetGroup:ClbTargetGroup';

    /**
     * Returns true if the given object is an instance of ClbTargetGroup.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ClbTargetGroup {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ClbTargetGroup.__pulumiType;
    }

    /**
     * The default port of target group, add server after can use it.
     */
    public readonly port!: pulumi.Output<number | undefined>;
    /**
     * The backend server of target group bind.
     *
     * @deprecated Deprecated
     */
    public readonly targetGroupInstances!: pulumi.Output<outputs.ClbTargetGroupTargetGroupInstance[] | undefined>;
    /**
     * Target group name.
     */
    public readonly targetGroupName!: pulumi.Output<string | undefined>;
    /**
     * VPC ID, default is based on the network.
     */
    public readonly vpcId!: pulumi.Output<string | undefined>;

    /**
     * Create a ClbTargetGroup resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: ClbTargetGroupArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ClbTargetGroupArgs | ClbTargetGroupState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as ClbTargetGroupState | undefined;
            resourceInputs["port"] = state ? state.port : undefined;
            resourceInputs["targetGroupInstances"] = state ? state.targetGroupInstances : undefined;
            resourceInputs["targetGroupName"] = state ? state.targetGroupName : undefined;
            resourceInputs["vpcId"] = state ? state.vpcId : undefined;
        } else {
            const args = argsOrState as ClbTargetGroupArgs | undefined;
            resourceInputs["port"] = args ? args.port : undefined;
            resourceInputs["targetGroupInstances"] = args ? args.targetGroupInstances : undefined;
            resourceInputs["targetGroupName"] = args ? args.targetGroupName : undefined;
            resourceInputs["vpcId"] = args ? args.vpcId : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(ClbTargetGroup.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering ClbTargetGroup resources.
 */
export interface ClbTargetGroupState {
    /**
     * The default port of target group, add server after can use it.
     */
    port?: pulumi.Input<number>;
    /**
     * The backend server of target group bind.
     *
     * @deprecated Deprecated
     */
    targetGroupInstances?: pulumi.Input<pulumi.Input<inputs.ClbTargetGroupTargetGroupInstance>[]>;
    /**
     * Target group name.
     */
    targetGroupName?: pulumi.Input<string>;
    /**
     * VPC ID, default is based on the network.
     */
    vpcId?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a ClbTargetGroup resource.
 */
export interface ClbTargetGroupArgs {
    /**
     * The default port of target group, add server after can use it.
     */
    port?: pulumi.Input<number>;
    /**
     * The backend server of target group bind.
     *
     * @deprecated Deprecated
     */
    targetGroupInstances?: pulumi.Input<pulumi.Input<inputs.ClbTargetGroupTargetGroupInstance>[]>;
    /**
     * Target group name.
     */
    targetGroupName?: pulumi.Input<string>;
    /**
     * VPC ID, default is based on the network.
     */
    vpcId?: pulumi.Input<string>;
}
