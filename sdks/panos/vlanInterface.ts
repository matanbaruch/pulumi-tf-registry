// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class VlanInterface extends pulumi.CustomResource {
    /**
     * Get an existing VlanInterface resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: VlanInterfaceState, opts?: pulumi.CustomResourceOptions): VlanInterface {
        return new VlanInterface(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'panos:index/vlanInterface:VlanInterface';

    /**
     * Returns true if the given object is an instance of VlanInterface.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is VlanInterface {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === VlanInterface.__pulumiType;
    }

    public readonly adjustTcpMss!: pulumi.Output<boolean | undefined>;
    public readonly comment!: pulumi.Output<string | undefined>;
    public readonly createDhcpDefaultRoute!: pulumi.Output<boolean | undefined>;
    public readonly dhcpDefaultRouteMetric!: pulumi.Output<number | undefined>;
    public readonly enableDhcp!: pulumi.Output<boolean | undefined>;
    public readonly ipv4MssAdjust!: pulumi.Output<number | undefined>;
    public readonly ipv6MssAdjust!: pulumi.Output<number | undefined>;
    public readonly managementProfile!: pulumi.Output<string | undefined>;
    public readonly mtu!: pulumi.Output<number | undefined>;
    public readonly name!: pulumi.Output<string>;
    public readonly netflowProfile!: pulumi.Output<string | undefined>;
    /**
     * List of static IP addresses
     */
    public readonly staticIps!: pulumi.Output<string[] | undefined>;
    public readonly vsys!: pulumi.Output<string | undefined>;

    /**
     * Create a VlanInterface resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: VlanInterfaceArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: VlanInterfaceArgs | VlanInterfaceState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as VlanInterfaceState | undefined;
            resourceInputs["adjustTcpMss"] = state ? state.adjustTcpMss : undefined;
            resourceInputs["comment"] = state ? state.comment : undefined;
            resourceInputs["createDhcpDefaultRoute"] = state ? state.createDhcpDefaultRoute : undefined;
            resourceInputs["dhcpDefaultRouteMetric"] = state ? state.dhcpDefaultRouteMetric : undefined;
            resourceInputs["enableDhcp"] = state ? state.enableDhcp : undefined;
            resourceInputs["ipv4MssAdjust"] = state ? state.ipv4MssAdjust : undefined;
            resourceInputs["ipv6MssAdjust"] = state ? state.ipv6MssAdjust : undefined;
            resourceInputs["managementProfile"] = state ? state.managementProfile : undefined;
            resourceInputs["mtu"] = state ? state.mtu : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["netflowProfile"] = state ? state.netflowProfile : undefined;
            resourceInputs["staticIps"] = state ? state.staticIps : undefined;
            resourceInputs["vsys"] = state ? state.vsys : undefined;
        } else {
            const args = argsOrState as VlanInterfaceArgs | undefined;
            resourceInputs["adjustTcpMss"] = args ? args.adjustTcpMss : undefined;
            resourceInputs["comment"] = args ? args.comment : undefined;
            resourceInputs["createDhcpDefaultRoute"] = args ? args.createDhcpDefaultRoute : undefined;
            resourceInputs["dhcpDefaultRouteMetric"] = args ? args.dhcpDefaultRouteMetric : undefined;
            resourceInputs["enableDhcp"] = args ? args.enableDhcp : undefined;
            resourceInputs["ipv4MssAdjust"] = args ? args.ipv4MssAdjust : undefined;
            resourceInputs["ipv6MssAdjust"] = args ? args.ipv6MssAdjust : undefined;
            resourceInputs["managementProfile"] = args ? args.managementProfile : undefined;
            resourceInputs["mtu"] = args ? args.mtu : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["netflowProfile"] = args ? args.netflowProfile : undefined;
            resourceInputs["staticIps"] = args ? args.staticIps : undefined;
            resourceInputs["vsys"] = args ? args.vsys : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(VlanInterface.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering VlanInterface resources.
 */
export interface VlanInterfaceState {
    adjustTcpMss?: pulumi.Input<boolean>;
    comment?: pulumi.Input<string>;
    createDhcpDefaultRoute?: pulumi.Input<boolean>;
    dhcpDefaultRouteMetric?: pulumi.Input<number>;
    enableDhcp?: pulumi.Input<boolean>;
    ipv4MssAdjust?: pulumi.Input<number>;
    ipv6MssAdjust?: pulumi.Input<number>;
    managementProfile?: pulumi.Input<string>;
    mtu?: pulumi.Input<number>;
    name?: pulumi.Input<string>;
    netflowProfile?: pulumi.Input<string>;
    /**
     * List of static IP addresses
     */
    staticIps?: pulumi.Input<pulumi.Input<string>[]>;
    vsys?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a VlanInterface resource.
 */
export interface VlanInterfaceArgs {
    adjustTcpMss?: pulumi.Input<boolean>;
    comment?: pulumi.Input<string>;
    createDhcpDefaultRoute?: pulumi.Input<boolean>;
    dhcpDefaultRouteMetric?: pulumi.Input<number>;
    enableDhcp?: pulumi.Input<boolean>;
    ipv4MssAdjust?: pulumi.Input<number>;
    ipv6MssAdjust?: pulumi.Input<number>;
    managementProfile?: pulumi.Input<string>;
    mtu?: pulumi.Input<number>;
    name?: pulumi.Input<string>;
    netflowProfile?: pulumi.Input<string>;
    /**
     * List of static IP addresses
     */
    staticIps?: pulumi.Input<pulumi.Input<string>[]>;
    vsys?: pulumi.Input<string>;
}
