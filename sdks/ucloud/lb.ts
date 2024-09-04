// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class Lb extends pulumi.CustomResource {
    /**
     * Get an existing Lb resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: LbState, opts?: pulumi.CustomResourceOptions): Lb {
        return new Lb(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'ucloud:index/lb:Lb';

    /**
     * Returns true if the given object is an instance of Lb.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Lb {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Lb.__pulumiType;
    }

    public readonly chargeType!: pulumi.Output<string | undefined>;
    public /*out*/ readonly createTime!: pulumi.Output<string>;
    public /*out*/ readonly expireTime!: pulumi.Output<string>;
    public readonly internal!: pulumi.Output<boolean>;
    public /*out*/ readonly ipSets!: pulumi.Output<outputs.LbIpSet[]>;
    public readonly listenType!: pulumi.Output<string>;
    public readonly name!: pulumi.Output<string>;
    public /*out*/ readonly privateIp!: pulumi.Output<string>;
    public readonly remark!: pulumi.Output<string>;
    public readonly securityGroup!: pulumi.Output<string>;
    public readonly subnetId!: pulumi.Output<string>;
    public readonly tag!: pulumi.Output<string | undefined>;
    public readonly vpcId!: pulumi.Output<string>;

    /**
     * Create a Lb resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: LbArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: LbArgs | LbState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as LbState | undefined;
            resourceInputs["chargeType"] = state ? state.chargeType : undefined;
            resourceInputs["createTime"] = state ? state.createTime : undefined;
            resourceInputs["expireTime"] = state ? state.expireTime : undefined;
            resourceInputs["internal"] = state ? state.internal : undefined;
            resourceInputs["ipSets"] = state ? state.ipSets : undefined;
            resourceInputs["listenType"] = state ? state.listenType : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["privateIp"] = state ? state.privateIp : undefined;
            resourceInputs["remark"] = state ? state.remark : undefined;
            resourceInputs["securityGroup"] = state ? state.securityGroup : undefined;
            resourceInputs["subnetId"] = state ? state.subnetId : undefined;
            resourceInputs["tag"] = state ? state.tag : undefined;
            resourceInputs["vpcId"] = state ? state.vpcId : undefined;
        } else {
            const args = argsOrState as LbArgs | undefined;
            resourceInputs["chargeType"] = args ? args.chargeType : undefined;
            resourceInputs["internal"] = args ? args.internal : undefined;
            resourceInputs["listenType"] = args ? args.listenType : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["remark"] = args ? args.remark : undefined;
            resourceInputs["securityGroup"] = args ? args.securityGroup : undefined;
            resourceInputs["subnetId"] = args ? args.subnetId : undefined;
            resourceInputs["tag"] = args ? args.tag : undefined;
            resourceInputs["vpcId"] = args ? args.vpcId : undefined;
            resourceInputs["createTime"] = undefined /*out*/;
            resourceInputs["expireTime"] = undefined /*out*/;
            resourceInputs["ipSets"] = undefined /*out*/;
            resourceInputs["privateIp"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(Lb.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering Lb resources.
 */
export interface LbState {
    chargeType?: pulumi.Input<string>;
    createTime?: pulumi.Input<string>;
    expireTime?: pulumi.Input<string>;
    internal?: pulumi.Input<boolean>;
    ipSets?: pulumi.Input<pulumi.Input<inputs.LbIpSet>[]>;
    listenType?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    privateIp?: pulumi.Input<string>;
    remark?: pulumi.Input<string>;
    securityGroup?: pulumi.Input<string>;
    subnetId?: pulumi.Input<string>;
    tag?: pulumi.Input<string>;
    vpcId?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a Lb resource.
 */
export interface LbArgs {
    chargeType?: pulumi.Input<string>;
    internal?: pulumi.Input<boolean>;
    listenType?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    remark?: pulumi.Input<string>;
    securityGroup?: pulumi.Input<string>;
    subnetId?: pulumi.Input<string>;
    tag?: pulumi.Input<string>;
    vpcId?: pulumi.Input<string>;
}
