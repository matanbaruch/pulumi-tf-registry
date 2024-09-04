// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class LbLoadbalancerV2 extends pulumi.CustomResource {
    /**
     * Get an existing LbLoadbalancerV2 resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: LbLoadbalancerV2State, opts?: pulumi.CustomResourceOptions): LbLoadbalancerV2 {
        return new LbLoadbalancerV2(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'nhncloud:index/lbLoadbalancerV2:LbLoadbalancerV2';

    /**
     * Returns true if the given object is an instance of LbLoadbalancerV2.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is LbLoadbalancerV2 {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === LbLoadbalancerV2.__pulumiType;
    }

    public readonly adminStateUp!: pulumi.Output<boolean | undefined>;
    public readonly availabilityZone!: pulumi.Output<string | undefined>;
    public readonly description!: pulumi.Output<string | undefined>;
    public readonly flavorId!: pulumi.Output<string>;
    public readonly loadbalancerProvider!: pulumi.Output<string>;
    public readonly name!: pulumi.Output<string>;
    public readonly region!: pulumi.Output<string>;
    public readonly securityGroupIds!: pulumi.Output<string[]>;
    public readonly tags!: pulumi.Output<string[] | undefined>;
    public readonly tenantId!: pulumi.Output<string>;
    public readonly timeouts!: pulumi.Output<outputs.LbLoadbalancerV2Timeouts | undefined>;
    public readonly vipAddress!: pulumi.Output<string>;
    public readonly vipNetworkId!: pulumi.Output<string>;
    public readonly vipPortId!: pulumi.Output<string>;
    public readonly vipSubnetId!: pulumi.Output<string>;

    /**
     * Create a LbLoadbalancerV2 resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: LbLoadbalancerV2Args, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: LbLoadbalancerV2Args | LbLoadbalancerV2State, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as LbLoadbalancerV2State | undefined;
            resourceInputs["adminStateUp"] = state ? state.adminStateUp : undefined;
            resourceInputs["availabilityZone"] = state ? state.availabilityZone : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["flavorId"] = state ? state.flavorId : undefined;
            resourceInputs["loadbalancerProvider"] = state ? state.loadbalancerProvider : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["region"] = state ? state.region : undefined;
            resourceInputs["securityGroupIds"] = state ? state.securityGroupIds : undefined;
            resourceInputs["tags"] = state ? state.tags : undefined;
            resourceInputs["tenantId"] = state ? state.tenantId : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
            resourceInputs["vipAddress"] = state ? state.vipAddress : undefined;
            resourceInputs["vipNetworkId"] = state ? state.vipNetworkId : undefined;
            resourceInputs["vipPortId"] = state ? state.vipPortId : undefined;
            resourceInputs["vipSubnetId"] = state ? state.vipSubnetId : undefined;
        } else {
            const args = argsOrState as LbLoadbalancerV2Args | undefined;
            resourceInputs["adminStateUp"] = args ? args.adminStateUp : undefined;
            resourceInputs["availabilityZone"] = args ? args.availabilityZone : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["flavorId"] = args ? args.flavorId : undefined;
            resourceInputs["loadbalancerProvider"] = args ? args.loadbalancerProvider : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["region"] = args ? args.region : undefined;
            resourceInputs["securityGroupIds"] = args ? args.securityGroupIds : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["tenantId"] = args ? args.tenantId : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["vipAddress"] = args ? args.vipAddress : undefined;
            resourceInputs["vipNetworkId"] = args ? args.vipNetworkId : undefined;
            resourceInputs["vipPortId"] = args ? args.vipPortId : undefined;
            resourceInputs["vipSubnetId"] = args ? args.vipSubnetId : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(LbLoadbalancerV2.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering LbLoadbalancerV2 resources.
 */
export interface LbLoadbalancerV2State {
    adminStateUp?: pulumi.Input<boolean>;
    availabilityZone?: pulumi.Input<string>;
    description?: pulumi.Input<string>;
    flavorId?: pulumi.Input<string>;
    loadbalancerProvider?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    region?: pulumi.Input<string>;
    securityGroupIds?: pulumi.Input<pulumi.Input<string>[]>;
    tags?: pulumi.Input<pulumi.Input<string>[]>;
    tenantId?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.LbLoadbalancerV2Timeouts>;
    vipAddress?: pulumi.Input<string>;
    vipNetworkId?: pulumi.Input<string>;
    vipPortId?: pulumi.Input<string>;
    vipSubnetId?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a LbLoadbalancerV2 resource.
 */
export interface LbLoadbalancerV2Args {
    adminStateUp?: pulumi.Input<boolean>;
    availabilityZone?: pulumi.Input<string>;
    description?: pulumi.Input<string>;
    flavorId?: pulumi.Input<string>;
    loadbalancerProvider?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    region?: pulumi.Input<string>;
    securityGroupIds?: pulumi.Input<pulumi.Input<string>[]>;
    tags?: pulumi.Input<pulumi.Input<string>[]>;
    tenantId?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.LbLoadbalancerV2Timeouts>;
    vipAddress?: pulumi.Input<string>;
    vipNetworkId?: pulumi.Input<string>;
    vipPortId?: pulumi.Input<string>;
    vipSubnetId?: pulumi.Input<string>;
}
