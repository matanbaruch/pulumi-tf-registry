// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class DrdsPolardbxInstance extends pulumi.CustomResource {
    /**
     * Get an existing DrdsPolardbxInstance resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: DrdsPolardbxInstanceState, opts?: pulumi.CustomResourceOptions): DrdsPolardbxInstance {
        return new DrdsPolardbxInstance(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'alicloud:index/drdsPolardbxInstance:DrdsPolardbxInstance';

    /**
     * Returns true if the given object is an instance of DrdsPolardbxInstance.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is DrdsPolardbxInstance {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === DrdsPolardbxInstance.__pulumiType;
    }

    public readonly cnClass!: pulumi.Output<string>;
    public readonly cnNodeCount!: pulumi.Output<number>;
    public /*out*/ readonly createTime!: pulumi.Output<string>;
    public readonly dnClass!: pulumi.Output<string>;
    public readonly dnNodeCount!: pulumi.Output<number>;
    public readonly primaryZone!: pulumi.Output<string>;
    public readonly resourceGroupId!: pulumi.Output<string>;
    public readonly secondaryZone!: pulumi.Output<string | undefined>;
    public /*out*/ readonly status!: pulumi.Output<string>;
    public readonly tertiaryZone!: pulumi.Output<string | undefined>;
    public readonly timeouts!: pulumi.Output<outputs.DrdsPolardbxInstanceTimeouts | undefined>;
    public readonly topologyType!: pulumi.Output<string>;
    public readonly vpcId!: pulumi.Output<string>;
    public readonly vswitchId!: pulumi.Output<string>;

    /**
     * Create a DrdsPolardbxInstance resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: DrdsPolardbxInstanceArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: DrdsPolardbxInstanceArgs | DrdsPolardbxInstanceState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as DrdsPolardbxInstanceState | undefined;
            resourceInputs["cnClass"] = state ? state.cnClass : undefined;
            resourceInputs["cnNodeCount"] = state ? state.cnNodeCount : undefined;
            resourceInputs["createTime"] = state ? state.createTime : undefined;
            resourceInputs["dnClass"] = state ? state.dnClass : undefined;
            resourceInputs["dnNodeCount"] = state ? state.dnNodeCount : undefined;
            resourceInputs["primaryZone"] = state ? state.primaryZone : undefined;
            resourceInputs["resourceGroupId"] = state ? state.resourceGroupId : undefined;
            resourceInputs["secondaryZone"] = state ? state.secondaryZone : undefined;
            resourceInputs["status"] = state ? state.status : undefined;
            resourceInputs["tertiaryZone"] = state ? state.tertiaryZone : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
            resourceInputs["topologyType"] = state ? state.topologyType : undefined;
            resourceInputs["vpcId"] = state ? state.vpcId : undefined;
            resourceInputs["vswitchId"] = state ? state.vswitchId : undefined;
        } else {
            const args = argsOrState as DrdsPolardbxInstanceArgs | undefined;
            if ((!args || args.cnClass === undefined) && !opts.urn) {
                throw new Error("Missing required property 'cnClass'");
            }
            if ((!args || args.cnNodeCount === undefined) && !opts.urn) {
                throw new Error("Missing required property 'cnNodeCount'");
            }
            if ((!args || args.dnClass === undefined) && !opts.urn) {
                throw new Error("Missing required property 'dnClass'");
            }
            if ((!args || args.dnNodeCount === undefined) && !opts.urn) {
                throw new Error("Missing required property 'dnNodeCount'");
            }
            if ((!args || args.primaryZone === undefined) && !opts.urn) {
                throw new Error("Missing required property 'primaryZone'");
            }
            if ((!args || args.topologyType === undefined) && !opts.urn) {
                throw new Error("Missing required property 'topologyType'");
            }
            if ((!args || args.vpcId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'vpcId'");
            }
            if ((!args || args.vswitchId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'vswitchId'");
            }
            resourceInputs["cnClass"] = args ? args.cnClass : undefined;
            resourceInputs["cnNodeCount"] = args ? args.cnNodeCount : undefined;
            resourceInputs["dnClass"] = args ? args.dnClass : undefined;
            resourceInputs["dnNodeCount"] = args ? args.dnNodeCount : undefined;
            resourceInputs["primaryZone"] = args ? args.primaryZone : undefined;
            resourceInputs["resourceGroupId"] = args ? args.resourceGroupId : undefined;
            resourceInputs["secondaryZone"] = args ? args.secondaryZone : undefined;
            resourceInputs["tertiaryZone"] = args ? args.tertiaryZone : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["topologyType"] = args ? args.topologyType : undefined;
            resourceInputs["vpcId"] = args ? args.vpcId : undefined;
            resourceInputs["vswitchId"] = args ? args.vswitchId : undefined;
            resourceInputs["createTime"] = undefined /*out*/;
            resourceInputs["status"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(DrdsPolardbxInstance.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering DrdsPolardbxInstance resources.
 */
export interface DrdsPolardbxInstanceState {
    cnClass?: pulumi.Input<string>;
    cnNodeCount?: pulumi.Input<number>;
    createTime?: pulumi.Input<string>;
    dnClass?: pulumi.Input<string>;
    dnNodeCount?: pulumi.Input<number>;
    primaryZone?: pulumi.Input<string>;
    resourceGroupId?: pulumi.Input<string>;
    secondaryZone?: pulumi.Input<string>;
    status?: pulumi.Input<string>;
    tertiaryZone?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.DrdsPolardbxInstanceTimeouts>;
    topologyType?: pulumi.Input<string>;
    vpcId?: pulumi.Input<string>;
    vswitchId?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a DrdsPolardbxInstance resource.
 */
export interface DrdsPolardbxInstanceArgs {
    cnClass: pulumi.Input<string>;
    cnNodeCount: pulumi.Input<number>;
    dnClass: pulumi.Input<string>;
    dnNodeCount: pulumi.Input<number>;
    primaryZone: pulumi.Input<string>;
    resourceGroupId?: pulumi.Input<string>;
    secondaryZone?: pulumi.Input<string>;
    tertiaryZone?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.DrdsPolardbxInstanceTimeouts>;
    topologyType: pulumi.Input<string>;
    vpcId: pulumi.Input<string>;
    vswitchId: pulumi.Input<string>;
}
