// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
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
    public static readonly __pulumiType = 'tencentcloud:index/lb:Lb';

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

    /**
     * The type of the LB. Valid value: 'CLASSIC', 'APPLICATION'.
     */
    public readonly forward!: pulumi.Output<string>;
    /**
     * The name of the LB.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * The project id of the LB, unspecified or 0 stands for default project.
     */
    public readonly projectId!: pulumi.Output<number>;
    /**
     * The status of the LB.
     */
    public /*out*/ readonly status!: pulumi.Output<string>;
    /**
     * The network type of the LB. Valid value: 'OPEN', 'INTERNAL'.
     */
    public readonly type!: pulumi.Output<string>;
    /**
     * The VPC ID of the LB, unspecified or 0 stands for CVM basic network.
     */
    public readonly vpcId!: pulumi.Output<string>;

    /**
     * Create a Lb resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: LbArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: LbArgs | LbState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as LbState | undefined;
            resourceInputs["forward"] = state ? state.forward : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["projectId"] = state ? state.projectId : undefined;
            resourceInputs["status"] = state ? state.status : undefined;
            resourceInputs["type"] = state ? state.type : undefined;
            resourceInputs["vpcId"] = state ? state.vpcId : undefined;
        } else {
            const args = argsOrState as LbArgs | undefined;
            if ((!args || args.type === undefined) && !opts.urn) {
                throw new Error("Missing required property 'type'");
            }
            resourceInputs["forward"] = args ? args.forward : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["projectId"] = args ? args.projectId : undefined;
            resourceInputs["type"] = args ? args.type : undefined;
            resourceInputs["vpcId"] = args ? args.vpcId : undefined;
            resourceInputs["status"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(Lb.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering Lb resources.
 */
export interface LbState {
    /**
     * The type of the LB. Valid value: 'CLASSIC', 'APPLICATION'.
     */
    forward?: pulumi.Input<string>;
    /**
     * The name of the LB.
     */
    name?: pulumi.Input<string>;
    /**
     * The project id of the LB, unspecified or 0 stands for default project.
     */
    projectId?: pulumi.Input<number>;
    /**
     * The status of the LB.
     */
    status?: pulumi.Input<string>;
    /**
     * The network type of the LB. Valid value: 'OPEN', 'INTERNAL'.
     */
    type?: pulumi.Input<string>;
    /**
     * The VPC ID of the LB, unspecified or 0 stands for CVM basic network.
     */
    vpcId?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a Lb resource.
 */
export interface LbArgs {
    /**
     * The type of the LB. Valid value: 'CLASSIC', 'APPLICATION'.
     */
    forward?: pulumi.Input<string>;
    /**
     * The name of the LB.
     */
    name?: pulumi.Input<string>;
    /**
     * The project id of the LB, unspecified or 0 stands for default project.
     */
    projectId?: pulumi.Input<number>;
    /**
     * The network type of the LB. Valid value: 'OPEN', 'INTERNAL'.
     */
    type: pulumi.Input<string>;
    /**
     * The VPC ID of the LB, unspecified or 0 stands for CVM basic network.
     */
    vpcId?: pulumi.Input<string>;
}
