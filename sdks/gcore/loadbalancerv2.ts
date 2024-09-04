// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class Loadbalancerv2 extends pulumi.CustomResource {
    /**
     * Get an existing Loadbalancerv2 resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: Loadbalancerv2State, opts?: pulumi.CustomResourceOptions): Loadbalancerv2 {
        return new Loadbalancerv2(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'gcore:index/loadbalancerv2:Loadbalancerv2';

    /**
     * Returns true if the given object is an instance of Loadbalancerv2.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Loadbalancerv2 {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Loadbalancerv2.__pulumiType;
    }

    /**
     * Desired flavor to be used for load balancer. By default, `lb1-1-2` will be used.
     */
    public readonly flavor!: pulumi.Output<string | undefined>;
    /**
     * Datetime when load balancer was updated at the last time.
     */
    public /*out*/ readonly lastUpdated!: pulumi.Output<string>;
    /**
     * Metadata map to apply to the load balancer.
     */
    public readonly metadataMap!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * List of metadata items.
     */
    public /*out*/ readonly metadataReadOnlies!: pulumi.Output<outputs.Loadbalancerv2MetadataReadOnly[]>;
    /**
     * Name of the load balancer.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * ID of the desired project to create load balancer in. Alternative for `project_name`. One of them should be specified.
     */
    public readonly projectId!: pulumi.Output<number | undefined>;
    /**
     * Name of the desired project to create load balancer in. Alternative for `project_id`. One of them should be specified.
     */
    public readonly projectName!: pulumi.Output<string | undefined>;
    /**
     * ID of the desired region to create load balancer in. Alternative for `region_name`. One of them should be specified.
     */
    public readonly regionId!: pulumi.Output<number | undefined>;
    /**
     * Name of the desired region to create load balancer in. Alternative for `region_id`. One of them should be specified.
     */
    public readonly regionName!: pulumi.Output<string | undefined>;
    public readonly timeouts!: pulumi.Output<outputs.Loadbalancerv2Timeouts | undefined>;
    /**
     * Load balancer IP address. IP address will be changed when load balancer will be recreated if `vip_port_id` is not
     * specified.
     */
    public /*out*/ readonly vipAddress!: pulumi.Output<string>;
    /**
     * Available values are 'ipv4', 'ipv6', 'dual'
     */
    public readonly vipIpFamily!: pulumi.Output<string | undefined>;
    /**
     * ID of the desired network. Can be used with vip_subnet_id, in this case Load Balancer will be created in specified
     * subnet, otherwise in most free subnet. Note: add all created `gcore.Subnet` resources within the network with this id to
     * the `depends_on` to be sure that `gcore.Loadbalancerv2` will be destroyed first
     */
    public readonly vipNetworkId!: pulumi.Output<string | undefined>;
    /**
     * Load balancer Port ID. It might be ID of the already created Reserved Fixed IP, otherwise we will create port
     * automatically in specified `vip_network_id`/`vip_subnet_id`. It is an alternative for specifying
     * `vip_network_id`/`vip_subnet_id`.
     */
    public readonly vipPortId!: pulumi.Output<string>;
    /**
     * ID of the desired subnet. Should be used together with vip_network_id.
     */
    public readonly vipSubnetId!: pulumi.Output<string | undefined>;

    /**
     * Create a Loadbalancerv2 resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: Loadbalancerv2Args, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: Loadbalancerv2Args | Loadbalancerv2State, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as Loadbalancerv2State | undefined;
            resourceInputs["flavor"] = state ? state.flavor : undefined;
            resourceInputs["lastUpdated"] = state ? state.lastUpdated : undefined;
            resourceInputs["metadataMap"] = state ? state.metadataMap : undefined;
            resourceInputs["metadataReadOnlies"] = state ? state.metadataReadOnlies : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["projectId"] = state ? state.projectId : undefined;
            resourceInputs["projectName"] = state ? state.projectName : undefined;
            resourceInputs["regionId"] = state ? state.regionId : undefined;
            resourceInputs["regionName"] = state ? state.regionName : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
            resourceInputs["vipAddress"] = state ? state.vipAddress : undefined;
            resourceInputs["vipIpFamily"] = state ? state.vipIpFamily : undefined;
            resourceInputs["vipNetworkId"] = state ? state.vipNetworkId : undefined;
            resourceInputs["vipPortId"] = state ? state.vipPortId : undefined;
            resourceInputs["vipSubnetId"] = state ? state.vipSubnetId : undefined;
        } else {
            const args = argsOrState as Loadbalancerv2Args | undefined;
            resourceInputs["flavor"] = args ? args.flavor : undefined;
            resourceInputs["metadataMap"] = args ? args.metadataMap : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["projectId"] = args ? args.projectId : undefined;
            resourceInputs["projectName"] = args ? args.projectName : undefined;
            resourceInputs["regionId"] = args ? args.regionId : undefined;
            resourceInputs["regionName"] = args ? args.regionName : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["vipIpFamily"] = args ? args.vipIpFamily : undefined;
            resourceInputs["vipNetworkId"] = args ? args.vipNetworkId : undefined;
            resourceInputs["vipPortId"] = args ? args.vipPortId : undefined;
            resourceInputs["vipSubnetId"] = args ? args.vipSubnetId : undefined;
            resourceInputs["lastUpdated"] = undefined /*out*/;
            resourceInputs["metadataReadOnlies"] = undefined /*out*/;
            resourceInputs["vipAddress"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(Loadbalancerv2.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering Loadbalancerv2 resources.
 */
export interface Loadbalancerv2State {
    /**
     * Desired flavor to be used for load balancer. By default, `lb1-1-2` will be used.
     */
    flavor?: pulumi.Input<string>;
    /**
     * Datetime when load balancer was updated at the last time.
     */
    lastUpdated?: pulumi.Input<string>;
    /**
     * Metadata map to apply to the load balancer.
     */
    metadataMap?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * List of metadata items.
     */
    metadataReadOnlies?: pulumi.Input<pulumi.Input<inputs.Loadbalancerv2MetadataReadOnly>[]>;
    /**
     * Name of the load balancer.
     */
    name?: pulumi.Input<string>;
    /**
     * ID of the desired project to create load balancer in. Alternative for `project_name`. One of them should be specified.
     */
    projectId?: pulumi.Input<number>;
    /**
     * Name of the desired project to create load balancer in. Alternative for `project_id`. One of them should be specified.
     */
    projectName?: pulumi.Input<string>;
    /**
     * ID of the desired region to create load balancer in. Alternative for `region_name`. One of them should be specified.
     */
    regionId?: pulumi.Input<number>;
    /**
     * Name of the desired region to create load balancer in. Alternative for `region_id`. One of them should be specified.
     */
    regionName?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.Loadbalancerv2Timeouts>;
    /**
     * Load balancer IP address. IP address will be changed when load balancer will be recreated if `vip_port_id` is not
     * specified.
     */
    vipAddress?: pulumi.Input<string>;
    /**
     * Available values are 'ipv4', 'ipv6', 'dual'
     */
    vipIpFamily?: pulumi.Input<string>;
    /**
     * ID of the desired network. Can be used with vip_subnet_id, in this case Load Balancer will be created in specified
     * subnet, otherwise in most free subnet. Note: add all created `gcore.Subnet` resources within the network with this id to
     * the `depends_on` to be sure that `gcore.Loadbalancerv2` will be destroyed first
     */
    vipNetworkId?: pulumi.Input<string>;
    /**
     * Load balancer Port ID. It might be ID of the already created Reserved Fixed IP, otherwise we will create port
     * automatically in specified `vip_network_id`/`vip_subnet_id`. It is an alternative for specifying
     * `vip_network_id`/`vip_subnet_id`.
     */
    vipPortId?: pulumi.Input<string>;
    /**
     * ID of the desired subnet. Should be used together with vip_network_id.
     */
    vipSubnetId?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a Loadbalancerv2 resource.
 */
export interface Loadbalancerv2Args {
    /**
     * Desired flavor to be used for load balancer. By default, `lb1-1-2` will be used.
     */
    flavor?: pulumi.Input<string>;
    /**
     * Metadata map to apply to the load balancer.
     */
    metadataMap?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Name of the load balancer.
     */
    name?: pulumi.Input<string>;
    /**
     * ID of the desired project to create load balancer in. Alternative for `project_name`. One of them should be specified.
     */
    projectId?: pulumi.Input<number>;
    /**
     * Name of the desired project to create load balancer in. Alternative for `project_id`. One of them should be specified.
     */
    projectName?: pulumi.Input<string>;
    /**
     * ID of the desired region to create load balancer in. Alternative for `region_name`. One of them should be specified.
     */
    regionId?: pulumi.Input<number>;
    /**
     * Name of the desired region to create load balancer in. Alternative for `region_id`. One of them should be specified.
     */
    regionName?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.Loadbalancerv2Timeouts>;
    /**
     * Available values are 'ipv4', 'ipv6', 'dual'
     */
    vipIpFamily?: pulumi.Input<string>;
    /**
     * ID of the desired network. Can be used with vip_subnet_id, in this case Load Balancer will be created in specified
     * subnet, otherwise in most free subnet. Note: add all created `gcore.Subnet` resources within the network with this id to
     * the `depends_on` to be sure that `gcore.Loadbalancerv2` will be destroyed first
     */
    vipNetworkId?: pulumi.Input<string>;
    /**
     * Load balancer Port ID. It might be ID of the already created Reserved Fixed IP, otherwise we will create port
     * automatically in specified `vip_network_id`/`vip_subnet_id`. It is an alternative for specifying
     * `vip_network_id`/`vip_subnet_id`.
     */
    vipPortId?: pulumi.Input<string>;
    /**
     * ID of the desired subnet. Should be used together with vip_network_id.
     */
    vipSubnetId?: pulumi.Input<string>;
}
