// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class VirtualNetworkIpPool extends pulumi.CustomResource {
    /**
     * Get an existing VirtualNetworkIpPool resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: VirtualNetworkIpPoolState, opts?: pulumi.CustomResourceOptions): VirtualNetworkIpPool {
        return new VirtualNetworkIpPool(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'catalystcenter:index/virtualNetworkIpPool:VirtualNetworkIpPool';

    /**
     * Returns true if the given object is an instance of VirtualNetworkIpPool.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is VirtualNetworkIpPool {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === VirtualNetworkIpPool.__pulumiType;
    }

    /**
     * It will auto generate vlanName, if vlanName is empty(applicable for L3 and INFRA_VN)
     */
    public readonly autoGenerateVlanName!: pulumi.Output<boolean | undefined>;
    /**
     * Bridge Mode Vm enablement flag (applicable for L3 and L2 and default value is False)
     */
    public readonly bridgeModeVm!: pulumi.Output<boolean | undefined>;
    /**
     * Common Pool enablement flag(applicable for L3 and L2 and default value is False)
     */
    public readonly commonPool!: pulumi.Output<boolean | undefined>;
    /**
     * Critical pool enablement flag(applicable for L3 and default value is False )
     */
    public readonly criticalPool!: pulumi.Output<boolean | undefined>;
    /**
     * Ip Directed Broadcast enablement flag(applicable for L3 and default value is False)
     */
    public readonly ipDirectedBroadcast!: pulumi.Output<boolean | undefined>;
    /**
     * Ip Pool Name, that is reserved to Fabric Site (Required for L3 and INFRA_VN)
     */
    public readonly ipPoolName!: pulumi.Output<string | undefined>;
    /**
     * Layer2 flooding enablement flag(applicable for L3 , L2 and always true for L2 and default value is False)
     */
    public readonly l2FloodingEnabled!: pulumi.Output<boolean | undefined>;
    /**
     * Layer2 Only enablement flag and default value is False - Default value: `false`
     */
    public readonly layer2Only!: pulumi.Output<boolean>;
    /**
     * Pool Type (applicable for INFRA_VN) - Choices: `AP`, `Extended`
     */
    public readonly poolType!: pulumi.Output<string | undefined>;
    /**
     * Scalable Group Name(applicable for L3)
     */
    public readonly scalableGroupName!: pulumi.Output<string | undefined>;
    /**
     * Path of sda Fabric Site
     */
    public readonly siteNameHierarchy!: pulumi.Output<string>;
    /**
     * Traffic type(applicable for L3 and L2) - Choices: `DATA`, `VOICE`
     */
    public readonly trafficType!: pulumi.Output<string>;
    /**
     * Virtual Network Name, that is associated to Fabric Site
     */
    public readonly virtualNetworkName!: pulumi.Output<string>;
    /**
     * vlan Id(applicable for L3 , L2 and INFRA_VN)
     */
    public readonly vlanId!: pulumi.Output<string | undefined>;
    /**
     * Vlan name represent the segment name, if empty, vlanName would be auto generated by API
     */
    public readonly vlanName!: pulumi.Output<string>;
    /**
     * Wireless Pool enablement flag(applicable for L3 and L2 and default value is False)
     */
    public readonly wirelessPool!: pulumi.Output<boolean | undefined>;

    /**
     * Create a VirtualNetworkIpPool resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: VirtualNetworkIpPoolArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: VirtualNetworkIpPoolArgs | VirtualNetworkIpPoolState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as VirtualNetworkIpPoolState | undefined;
            resourceInputs["autoGenerateVlanName"] = state ? state.autoGenerateVlanName : undefined;
            resourceInputs["bridgeModeVm"] = state ? state.bridgeModeVm : undefined;
            resourceInputs["commonPool"] = state ? state.commonPool : undefined;
            resourceInputs["criticalPool"] = state ? state.criticalPool : undefined;
            resourceInputs["ipDirectedBroadcast"] = state ? state.ipDirectedBroadcast : undefined;
            resourceInputs["ipPoolName"] = state ? state.ipPoolName : undefined;
            resourceInputs["l2FloodingEnabled"] = state ? state.l2FloodingEnabled : undefined;
            resourceInputs["layer2Only"] = state ? state.layer2Only : undefined;
            resourceInputs["poolType"] = state ? state.poolType : undefined;
            resourceInputs["scalableGroupName"] = state ? state.scalableGroupName : undefined;
            resourceInputs["siteNameHierarchy"] = state ? state.siteNameHierarchy : undefined;
            resourceInputs["trafficType"] = state ? state.trafficType : undefined;
            resourceInputs["virtualNetworkName"] = state ? state.virtualNetworkName : undefined;
            resourceInputs["vlanId"] = state ? state.vlanId : undefined;
            resourceInputs["vlanName"] = state ? state.vlanName : undefined;
            resourceInputs["wirelessPool"] = state ? state.wirelessPool : undefined;
        } else {
            const args = argsOrState as VirtualNetworkIpPoolArgs | undefined;
            if ((!args || args.siteNameHierarchy === undefined) && !opts.urn) {
                throw new Error("Missing required property 'siteNameHierarchy'");
            }
            if ((!args || args.trafficType === undefined) && !opts.urn) {
                throw new Error("Missing required property 'trafficType'");
            }
            if ((!args || args.virtualNetworkName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'virtualNetworkName'");
            }
            if ((!args || args.vlanName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'vlanName'");
            }
            resourceInputs["autoGenerateVlanName"] = args ? args.autoGenerateVlanName : undefined;
            resourceInputs["bridgeModeVm"] = args ? args.bridgeModeVm : undefined;
            resourceInputs["commonPool"] = args ? args.commonPool : undefined;
            resourceInputs["criticalPool"] = args ? args.criticalPool : undefined;
            resourceInputs["ipDirectedBroadcast"] = args ? args.ipDirectedBroadcast : undefined;
            resourceInputs["ipPoolName"] = args ? args.ipPoolName : undefined;
            resourceInputs["l2FloodingEnabled"] = args ? args.l2FloodingEnabled : undefined;
            resourceInputs["layer2Only"] = args ? args.layer2Only : undefined;
            resourceInputs["poolType"] = args ? args.poolType : undefined;
            resourceInputs["scalableGroupName"] = args ? args.scalableGroupName : undefined;
            resourceInputs["siteNameHierarchy"] = args ? args.siteNameHierarchy : undefined;
            resourceInputs["trafficType"] = args ? args.trafficType : undefined;
            resourceInputs["virtualNetworkName"] = args ? args.virtualNetworkName : undefined;
            resourceInputs["vlanId"] = args ? args.vlanId : undefined;
            resourceInputs["vlanName"] = args ? args.vlanName : undefined;
            resourceInputs["wirelessPool"] = args ? args.wirelessPool : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(VirtualNetworkIpPool.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering VirtualNetworkIpPool resources.
 */
export interface VirtualNetworkIpPoolState {
    /**
     * It will auto generate vlanName, if vlanName is empty(applicable for L3 and INFRA_VN)
     */
    autoGenerateVlanName?: pulumi.Input<boolean>;
    /**
     * Bridge Mode Vm enablement flag (applicable for L3 and L2 and default value is False)
     */
    bridgeModeVm?: pulumi.Input<boolean>;
    /**
     * Common Pool enablement flag(applicable for L3 and L2 and default value is False)
     */
    commonPool?: pulumi.Input<boolean>;
    /**
     * Critical pool enablement flag(applicable for L3 and default value is False )
     */
    criticalPool?: pulumi.Input<boolean>;
    /**
     * Ip Directed Broadcast enablement flag(applicable for L3 and default value is False)
     */
    ipDirectedBroadcast?: pulumi.Input<boolean>;
    /**
     * Ip Pool Name, that is reserved to Fabric Site (Required for L3 and INFRA_VN)
     */
    ipPoolName?: pulumi.Input<string>;
    /**
     * Layer2 flooding enablement flag(applicable for L3 , L2 and always true for L2 and default value is False)
     */
    l2FloodingEnabled?: pulumi.Input<boolean>;
    /**
     * Layer2 Only enablement flag and default value is False - Default value: `false`
     */
    layer2Only?: pulumi.Input<boolean>;
    /**
     * Pool Type (applicable for INFRA_VN) - Choices: `AP`, `Extended`
     */
    poolType?: pulumi.Input<string>;
    /**
     * Scalable Group Name(applicable for L3)
     */
    scalableGroupName?: pulumi.Input<string>;
    /**
     * Path of sda Fabric Site
     */
    siteNameHierarchy?: pulumi.Input<string>;
    /**
     * Traffic type(applicable for L3 and L2) - Choices: `DATA`, `VOICE`
     */
    trafficType?: pulumi.Input<string>;
    /**
     * Virtual Network Name, that is associated to Fabric Site
     */
    virtualNetworkName?: pulumi.Input<string>;
    /**
     * vlan Id(applicable for L3 , L2 and INFRA_VN)
     */
    vlanId?: pulumi.Input<string>;
    /**
     * Vlan name represent the segment name, if empty, vlanName would be auto generated by API
     */
    vlanName?: pulumi.Input<string>;
    /**
     * Wireless Pool enablement flag(applicable for L3 and L2 and default value is False)
     */
    wirelessPool?: pulumi.Input<boolean>;
}

/**
 * The set of arguments for constructing a VirtualNetworkIpPool resource.
 */
export interface VirtualNetworkIpPoolArgs {
    /**
     * It will auto generate vlanName, if vlanName is empty(applicable for L3 and INFRA_VN)
     */
    autoGenerateVlanName?: pulumi.Input<boolean>;
    /**
     * Bridge Mode Vm enablement flag (applicable for L3 and L2 and default value is False)
     */
    bridgeModeVm?: pulumi.Input<boolean>;
    /**
     * Common Pool enablement flag(applicable for L3 and L2 and default value is False)
     */
    commonPool?: pulumi.Input<boolean>;
    /**
     * Critical pool enablement flag(applicable for L3 and default value is False )
     */
    criticalPool?: pulumi.Input<boolean>;
    /**
     * Ip Directed Broadcast enablement flag(applicable for L3 and default value is False)
     */
    ipDirectedBroadcast?: pulumi.Input<boolean>;
    /**
     * Ip Pool Name, that is reserved to Fabric Site (Required for L3 and INFRA_VN)
     */
    ipPoolName?: pulumi.Input<string>;
    /**
     * Layer2 flooding enablement flag(applicable for L3 , L2 and always true for L2 and default value is False)
     */
    l2FloodingEnabled?: pulumi.Input<boolean>;
    /**
     * Layer2 Only enablement flag and default value is False - Default value: `false`
     */
    layer2Only?: pulumi.Input<boolean>;
    /**
     * Pool Type (applicable for INFRA_VN) - Choices: `AP`, `Extended`
     */
    poolType?: pulumi.Input<string>;
    /**
     * Scalable Group Name(applicable for L3)
     */
    scalableGroupName?: pulumi.Input<string>;
    /**
     * Path of sda Fabric Site
     */
    siteNameHierarchy: pulumi.Input<string>;
    /**
     * Traffic type(applicable for L3 and L2) - Choices: `DATA`, `VOICE`
     */
    trafficType: pulumi.Input<string>;
    /**
     * Virtual Network Name, that is associated to Fabric Site
     */
    virtualNetworkName: pulumi.Input<string>;
    /**
     * vlan Id(applicable for L3 , L2 and INFRA_VN)
     */
    vlanId?: pulumi.Input<string>;
    /**
     * Vlan name represent the segment name, if empty, vlanName would be auto generated by API
     */
    vlanName: pulumi.Input<string>;
    /**
     * Wireless Pool enablement flag(applicable for L3 and L2 and default value is False)
     */
    wirelessPool?: pulumi.Input<boolean>;
}
