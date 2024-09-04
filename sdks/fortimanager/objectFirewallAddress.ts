// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class ObjectFirewallAddress extends pulumi.CustomResource {
    /**
     * Get an existing ObjectFirewallAddress resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ObjectFirewallAddressState, opts?: pulumi.CustomResourceOptions): ObjectFirewallAddress {
        return new ObjectFirewallAddress(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'fortimanager:index/objectFirewallAddress:ObjectFirewallAddress';

    /**
     * Returns true if the given object is an instance of ObjectFirewallAddress.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ObjectFirewallAddress {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ObjectFirewallAddress.__pulumiType;
    }

    public readonly _imageBase64!: pulumi.Output<string | undefined>;
    public readonly adom!: pulumi.Output<string | undefined>;
    public readonly allowRouting!: pulumi.Output<string>;
    public readonly associatedInterface!: pulumi.Output<string>;
    public readonly cacheTtl!: pulumi.Output<number | undefined>;
    public readonly clearpassSpt!: pulumi.Output<string>;
    public readonly color!: pulumi.Output<number | undefined>;
    public readonly comment!: pulumi.Output<string | undefined>;
    public readonly country!: pulumi.Output<string | undefined>;
    public readonly dirty!: pulumi.Output<string>;
    public readonly dynamicMappings!: pulumi.Output<outputs.ObjectFirewallAddressDynamicMapping[] | undefined>;
    public readonly dynamicSortSubtable!: pulumi.Output<string | undefined>;
    public readonly endIp!: pulumi.Output<string | undefined>;
    public readonly endMac!: pulumi.Output<string>;
    public readonly epgName!: pulumi.Output<string | undefined>;
    public readonly fabricObject!: pulumi.Output<string>;
    public readonly filter!: pulumi.Output<string | undefined>;
    public readonly fqdn!: pulumi.Output<string | undefined>;
    public readonly fssoGroup!: pulumi.Output<string | undefined>;
    public readonly globalObject!: pulumi.Output<number | undefined>;
    public readonly hwModel!: pulumi.Output<string | undefined>;
    public readonly hwVendor!: pulumi.Output<string | undefined>;
    public readonly interface!: pulumi.Output<string | undefined>;
    public readonly lists!: pulumi.Output<outputs.ObjectFirewallAddressList[] | undefined>;
    public readonly macaddrs!: pulumi.Output<string[]>;
    public readonly name!: pulumi.Output<string>;
    public readonly nodeIpOnly!: pulumi.Output<string>;
    public readonly objId!: pulumi.Output<string | undefined>;
    public readonly objTag!: pulumi.Output<string | undefined>;
    public readonly objType!: pulumi.Output<string>;
    public readonly organization!: pulumi.Output<string | undefined>;
    public readonly os!: pulumi.Output<string | undefined>;
    public readonly policyGroup!: pulumi.Output<string | undefined>;
    public readonly routeTag!: pulumi.Output<number | undefined>;
    public readonly scopetype!: pulumi.Output<string | undefined>;
    public readonly sdn!: pulumi.Output<string | undefined>;
    public readonly sdnAddrType!: pulumi.Output<string>;
    public readonly sdnTag!: pulumi.Output<string | undefined>;
    public readonly startIp!: pulumi.Output<string | undefined>;
    public readonly startMac!: pulumi.Output<string>;
    public readonly subType!: pulumi.Output<string | undefined>;
    public readonly subnetName!: pulumi.Output<string | undefined>;
    public readonly subnets!: pulumi.Output<string[]>;
    public readonly swVersion!: pulumi.Output<string | undefined>;
    public readonly tagDetectionLevel!: pulumi.Output<string | undefined>;
    public readonly tagType!: pulumi.Output<string | undefined>;
    public readonly taggings!: pulumi.Output<outputs.ObjectFirewallAddressTagging[] | undefined>;
    public readonly tenant!: pulumi.Output<string | undefined>;
    public readonly type!: pulumi.Output<string>;
    public readonly uuid!: pulumi.Output<string>;
    public readonly visibility!: pulumi.Output<string>;
    public readonly wildcard!: pulumi.Output<string | undefined>;
    public readonly wildcardFqdn!: pulumi.Output<string | undefined>;

    /**
     * Create a ObjectFirewallAddress resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: ObjectFirewallAddressArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ObjectFirewallAddressArgs | ObjectFirewallAddressState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as ObjectFirewallAddressState | undefined;
            resourceInputs["_imageBase64"] = state ? state._imageBase64 : undefined;
            resourceInputs["adom"] = state ? state.adom : undefined;
            resourceInputs["allowRouting"] = state ? state.allowRouting : undefined;
            resourceInputs["associatedInterface"] = state ? state.associatedInterface : undefined;
            resourceInputs["cacheTtl"] = state ? state.cacheTtl : undefined;
            resourceInputs["clearpassSpt"] = state ? state.clearpassSpt : undefined;
            resourceInputs["color"] = state ? state.color : undefined;
            resourceInputs["comment"] = state ? state.comment : undefined;
            resourceInputs["country"] = state ? state.country : undefined;
            resourceInputs["dirty"] = state ? state.dirty : undefined;
            resourceInputs["dynamicMappings"] = state ? state.dynamicMappings : undefined;
            resourceInputs["dynamicSortSubtable"] = state ? state.dynamicSortSubtable : undefined;
            resourceInputs["endIp"] = state ? state.endIp : undefined;
            resourceInputs["endMac"] = state ? state.endMac : undefined;
            resourceInputs["epgName"] = state ? state.epgName : undefined;
            resourceInputs["fabricObject"] = state ? state.fabricObject : undefined;
            resourceInputs["filter"] = state ? state.filter : undefined;
            resourceInputs["fqdn"] = state ? state.fqdn : undefined;
            resourceInputs["fssoGroup"] = state ? state.fssoGroup : undefined;
            resourceInputs["globalObject"] = state ? state.globalObject : undefined;
            resourceInputs["hwModel"] = state ? state.hwModel : undefined;
            resourceInputs["hwVendor"] = state ? state.hwVendor : undefined;
            resourceInputs["interface"] = state ? state.interface : undefined;
            resourceInputs["lists"] = state ? state.lists : undefined;
            resourceInputs["macaddrs"] = state ? state.macaddrs : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["nodeIpOnly"] = state ? state.nodeIpOnly : undefined;
            resourceInputs["objId"] = state ? state.objId : undefined;
            resourceInputs["objTag"] = state ? state.objTag : undefined;
            resourceInputs["objType"] = state ? state.objType : undefined;
            resourceInputs["organization"] = state ? state.organization : undefined;
            resourceInputs["os"] = state ? state.os : undefined;
            resourceInputs["policyGroup"] = state ? state.policyGroup : undefined;
            resourceInputs["routeTag"] = state ? state.routeTag : undefined;
            resourceInputs["scopetype"] = state ? state.scopetype : undefined;
            resourceInputs["sdn"] = state ? state.sdn : undefined;
            resourceInputs["sdnAddrType"] = state ? state.sdnAddrType : undefined;
            resourceInputs["sdnTag"] = state ? state.sdnTag : undefined;
            resourceInputs["startIp"] = state ? state.startIp : undefined;
            resourceInputs["startMac"] = state ? state.startMac : undefined;
            resourceInputs["subType"] = state ? state.subType : undefined;
            resourceInputs["subnetName"] = state ? state.subnetName : undefined;
            resourceInputs["subnets"] = state ? state.subnets : undefined;
            resourceInputs["swVersion"] = state ? state.swVersion : undefined;
            resourceInputs["tagDetectionLevel"] = state ? state.tagDetectionLevel : undefined;
            resourceInputs["tagType"] = state ? state.tagType : undefined;
            resourceInputs["taggings"] = state ? state.taggings : undefined;
            resourceInputs["tenant"] = state ? state.tenant : undefined;
            resourceInputs["type"] = state ? state.type : undefined;
            resourceInputs["uuid"] = state ? state.uuid : undefined;
            resourceInputs["visibility"] = state ? state.visibility : undefined;
            resourceInputs["wildcard"] = state ? state.wildcard : undefined;
            resourceInputs["wildcardFqdn"] = state ? state.wildcardFqdn : undefined;
        } else {
            const args = argsOrState as ObjectFirewallAddressArgs | undefined;
            resourceInputs["_imageBase64"] = args ? args._imageBase64 : undefined;
            resourceInputs["adom"] = args ? args.adom : undefined;
            resourceInputs["allowRouting"] = args ? args.allowRouting : undefined;
            resourceInputs["associatedInterface"] = args ? args.associatedInterface : undefined;
            resourceInputs["cacheTtl"] = args ? args.cacheTtl : undefined;
            resourceInputs["clearpassSpt"] = args ? args.clearpassSpt : undefined;
            resourceInputs["color"] = args ? args.color : undefined;
            resourceInputs["comment"] = args ? args.comment : undefined;
            resourceInputs["country"] = args ? args.country : undefined;
            resourceInputs["dirty"] = args ? args.dirty : undefined;
            resourceInputs["dynamicMappings"] = args ? args.dynamicMappings : undefined;
            resourceInputs["dynamicSortSubtable"] = args ? args.dynamicSortSubtable : undefined;
            resourceInputs["endIp"] = args ? args.endIp : undefined;
            resourceInputs["endMac"] = args ? args.endMac : undefined;
            resourceInputs["epgName"] = args ? args.epgName : undefined;
            resourceInputs["fabricObject"] = args ? args.fabricObject : undefined;
            resourceInputs["filter"] = args ? args.filter : undefined;
            resourceInputs["fqdn"] = args ? args.fqdn : undefined;
            resourceInputs["fssoGroup"] = args ? args.fssoGroup : undefined;
            resourceInputs["globalObject"] = args ? args.globalObject : undefined;
            resourceInputs["hwModel"] = args ? args.hwModel : undefined;
            resourceInputs["hwVendor"] = args ? args.hwVendor : undefined;
            resourceInputs["interface"] = args ? args.interface : undefined;
            resourceInputs["lists"] = args ? args.lists : undefined;
            resourceInputs["macaddrs"] = args ? args.macaddrs : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["nodeIpOnly"] = args ? args.nodeIpOnly : undefined;
            resourceInputs["objId"] = args ? args.objId : undefined;
            resourceInputs["objTag"] = args ? args.objTag : undefined;
            resourceInputs["objType"] = args ? args.objType : undefined;
            resourceInputs["organization"] = args ? args.organization : undefined;
            resourceInputs["os"] = args ? args.os : undefined;
            resourceInputs["policyGroup"] = args ? args.policyGroup : undefined;
            resourceInputs["routeTag"] = args ? args.routeTag : undefined;
            resourceInputs["scopetype"] = args ? args.scopetype : undefined;
            resourceInputs["sdn"] = args ? args.sdn : undefined;
            resourceInputs["sdnAddrType"] = args ? args.sdnAddrType : undefined;
            resourceInputs["sdnTag"] = args ? args.sdnTag : undefined;
            resourceInputs["startIp"] = args ? args.startIp : undefined;
            resourceInputs["startMac"] = args ? args.startMac : undefined;
            resourceInputs["subType"] = args ? args.subType : undefined;
            resourceInputs["subnetName"] = args ? args.subnetName : undefined;
            resourceInputs["subnets"] = args ? args.subnets : undefined;
            resourceInputs["swVersion"] = args ? args.swVersion : undefined;
            resourceInputs["tagDetectionLevel"] = args ? args.tagDetectionLevel : undefined;
            resourceInputs["tagType"] = args ? args.tagType : undefined;
            resourceInputs["taggings"] = args ? args.taggings : undefined;
            resourceInputs["tenant"] = args ? args.tenant : undefined;
            resourceInputs["type"] = args ? args.type : undefined;
            resourceInputs["uuid"] = args ? args.uuid : undefined;
            resourceInputs["visibility"] = args ? args.visibility : undefined;
            resourceInputs["wildcard"] = args ? args.wildcard : undefined;
            resourceInputs["wildcardFqdn"] = args ? args.wildcardFqdn : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(ObjectFirewallAddress.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering ObjectFirewallAddress resources.
 */
export interface ObjectFirewallAddressState {
    _imageBase64?: pulumi.Input<string>;
    adom?: pulumi.Input<string>;
    allowRouting?: pulumi.Input<string>;
    associatedInterface?: pulumi.Input<string>;
    cacheTtl?: pulumi.Input<number>;
    clearpassSpt?: pulumi.Input<string>;
    color?: pulumi.Input<number>;
    comment?: pulumi.Input<string>;
    country?: pulumi.Input<string>;
    dirty?: pulumi.Input<string>;
    dynamicMappings?: pulumi.Input<pulumi.Input<inputs.ObjectFirewallAddressDynamicMapping>[]>;
    dynamicSortSubtable?: pulumi.Input<string>;
    endIp?: pulumi.Input<string>;
    endMac?: pulumi.Input<string>;
    epgName?: pulumi.Input<string>;
    fabricObject?: pulumi.Input<string>;
    filter?: pulumi.Input<string>;
    fqdn?: pulumi.Input<string>;
    fssoGroup?: pulumi.Input<string>;
    globalObject?: pulumi.Input<number>;
    hwModel?: pulumi.Input<string>;
    hwVendor?: pulumi.Input<string>;
    interface?: pulumi.Input<string>;
    lists?: pulumi.Input<pulumi.Input<inputs.ObjectFirewallAddressList>[]>;
    macaddrs?: pulumi.Input<pulumi.Input<string>[]>;
    name?: pulumi.Input<string>;
    nodeIpOnly?: pulumi.Input<string>;
    objId?: pulumi.Input<string>;
    objTag?: pulumi.Input<string>;
    objType?: pulumi.Input<string>;
    organization?: pulumi.Input<string>;
    os?: pulumi.Input<string>;
    policyGroup?: pulumi.Input<string>;
    routeTag?: pulumi.Input<number>;
    scopetype?: pulumi.Input<string>;
    sdn?: pulumi.Input<string>;
    sdnAddrType?: pulumi.Input<string>;
    sdnTag?: pulumi.Input<string>;
    startIp?: pulumi.Input<string>;
    startMac?: pulumi.Input<string>;
    subType?: pulumi.Input<string>;
    subnetName?: pulumi.Input<string>;
    subnets?: pulumi.Input<pulumi.Input<string>[]>;
    swVersion?: pulumi.Input<string>;
    tagDetectionLevel?: pulumi.Input<string>;
    tagType?: pulumi.Input<string>;
    taggings?: pulumi.Input<pulumi.Input<inputs.ObjectFirewallAddressTagging>[]>;
    tenant?: pulumi.Input<string>;
    type?: pulumi.Input<string>;
    uuid?: pulumi.Input<string>;
    visibility?: pulumi.Input<string>;
    wildcard?: pulumi.Input<string>;
    wildcardFqdn?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a ObjectFirewallAddress resource.
 */
export interface ObjectFirewallAddressArgs {
    _imageBase64?: pulumi.Input<string>;
    adom?: pulumi.Input<string>;
    allowRouting?: pulumi.Input<string>;
    associatedInterface?: pulumi.Input<string>;
    cacheTtl?: pulumi.Input<number>;
    clearpassSpt?: pulumi.Input<string>;
    color?: pulumi.Input<number>;
    comment?: pulumi.Input<string>;
    country?: pulumi.Input<string>;
    dirty?: pulumi.Input<string>;
    dynamicMappings?: pulumi.Input<pulumi.Input<inputs.ObjectFirewallAddressDynamicMapping>[]>;
    dynamicSortSubtable?: pulumi.Input<string>;
    endIp?: pulumi.Input<string>;
    endMac?: pulumi.Input<string>;
    epgName?: pulumi.Input<string>;
    fabricObject?: pulumi.Input<string>;
    filter?: pulumi.Input<string>;
    fqdn?: pulumi.Input<string>;
    fssoGroup?: pulumi.Input<string>;
    globalObject?: pulumi.Input<number>;
    hwModel?: pulumi.Input<string>;
    hwVendor?: pulumi.Input<string>;
    interface?: pulumi.Input<string>;
    lists?: pulumi.Input<pulumi.Input<inputs.ObjectFirewallAddressList>[]>;
    macaddrs?: pulumi.Input<pulumi.Input<string>[]>;
    name?: pulumi.Input<string>;
    nodeIpOnly?: pulumi.Input<string>;
    objId?: pulumi.Input<string>;
    objTag?: pulumi.Input<string>;
    objType?: pulumi.Input<string>;
    organization?: pulumi.Input<string>;
    os?: pulumi.Input<string>;
    policyGroup?: pulumi.Input<string>;
    routeTag?: pulumi.Input<number>;
    scopetype?: pulumi.Input<string>;
    sdn?: pulumi.Input<string>;
    sdnAddrType?: pulumi.Input<string>;
    sdnTag?: pulumi.Input<string>;
    startIp?: pulumi.Input<string>;
    startMac?: pulumi.Input<string>;
    subType?: pulumi.Input<string>;
    subnetName?: pulumi.Input<string>;
    subnets?: pulumi.Input<pulumi.Input<string>[]>;
    swVersion?: pulumi.Input<string>;
    tagDetectionLevel?: pulumi.Input<string>;
    tagType?: pulumi.Input<string>;
    taggings?: pulumi.Input<pulumi.Input<inputs.ObjectFirewallAddressTagging>[]>;
    tenant?: pulumi.Input<string>;
    type?: pulumi.Input<string>;
    uuid?: pulumi.Input<string>;
    visibility?: pulumi.Input<string>;
    wildcard?: pulumi.Input<string>;
    wildcardFqdn?: pulumi.Input<string>;
}
