// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class RouterOspf6Ospf6interface extends pulumi.CustomResource {
    /**
     * Get an existing RouterOspf6Ospf6interface resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: RouterOspf6Ospf6interfaceState, opts?: pulumi.CustomResourceOptions): RouterOspf6Ospf6interface {
        return new RouterOspf6Ospf6interface(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'fmgdevice:index/routerOspf6Ospf6interface:RouterOspf6Ospf6interface';

    /**
     * Returns true if the given object is an instance of RouterOspf6Ospf6interface.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is RouterOspf6Ospf6interface {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === RouterOspf6Ospf6interface.__pulumiType;
    }

    public readonly areaId!: pulumi.Output<string>;
    public readonly authentication!: pulumi.Output<string>;
    public readonly bfd!: pulumi.Output<string>;
    public readonly cost!: pulumi.Output<number | undefined>;
    public readonly deadInterval!: pulumi.Output<number | undefined>;
    public readonly deviceName!: pulumi.Output<string>;
    public readonly deviceVdom!: pulumi.Output<string>;
    public readonly dynamicSortSubtable!: pulumi.Output<string | undefined>;
    public readonly helloInterval!: pulumi.Output<number | undefined>;
    public readonly interfaces!: pulumi.Output<string[]>;
    public readonly ipsecAuthAlg!: pulumi.Output<string | undefined>;
    public readonly ipsecEncAlg!: pulumi.Output<string | undefined>;
    public readonly ipsecKeys!: pulumi.Output<outputs.RouterOspf6Ospf6interfaceIpsecKey[] | undefined>;
    public readonly keyRolloverInterval!: pulumi.Output<number>;
    public readonly mtu!: pulumi.Output<number | undefined>;
    public readonly mtuIgnore!: pulumi.Output<string>;
    public readonly name!: pulumi.Output<string>;
    public readonly neighbors!: pulumi.Output<outputs.RouterOspf6Ospf6interfaceNeighbor[] | undefined>;
    public readonly networkType!: pulumi.Output<string>;
    public readonly priority!: pulumi.Output<number>;
    public readonly retransmitInterval!: pulumi.Output<number>;
    public readonly status!: pulumi.Output<string>;
    public readonly transmitDelay!: pulumi.Output<number>;

    /**
     * Create a RouterOspf6Ospf6interface resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: RouterOspf6Ospf6interfaceArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: RouterOspf6Ospf6interfaceArgs | RouterOspf6Ospf6interfaceState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as RouterOspf6Ospf6interfaceState | undefined;
            resourceInputs["areaId"] = state ? state.areaId : undefined;
            resourceInputs["authentication"] = state ? state.authentication : undefined;
            resourceInputs["bfd"] = state ? state.bfd : undefined;
            resourceInputs["cost"] = state ? state.cost : undefined;
            resourceInputs["deadInterval"] = state ? state.deadInterval : undefined;
            resourceInputs["deviceName"] = state ? state.deviceName : undefined;
            resourceInputs["deviceVdom"] = state ? state.deviceVdom : undefined;
            resourceInputs["dynamicSortSubtable"] = state ? state.dynamicSortSubtable : undefined;
            resourceInputs["helloInterval"] = state ? state.helloInterval : undefined;
            resourceInputs["interfaces"] = state ? state.interfaces : undefined;
            resourceInputs["ipsecAuthAlg"] = state ? state.ipsecAuthAlg : undefined;
            resourceInputs["ipsecEncAlg"] = state ? state.ipsecEncAlg : undefined;
            resourceInputs["ipsecKeys"] = state ? state.ipsecKeys : undefined;
            resourceInputs["keyRolloverInterval"] = state ? state.keyRolloverInterval : undefined;
            resourceInputs["mtu"] = state ? state.mtu : undefined;
            resourceInputs["mtuIgnore"] = state ? state.mtuIgnore : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["neighbors"] = state ? state.neighbors : undefined;
            resourceInputs["networkType"] = state ? state.networkType : undefined;
            resourceInputs["priority"] = state ? state.priority : undefined;
            resourceInputs["retransmitInterval"] = state ? state.retransmitInterval : undefined;
            resourceInputs["status"] = state ? state.status : undefined;
            resourceInputs["transmitDelay"] = state ? state.transmitDelay : undefined;
        } else {
            const args = argsOrState as RouterOspf6Ospf6interfaceArgs | undefined;
            resourceInputs["areaId"] = args ? args.areaId : undefined;
            resourceInputs["authentication"] = args ? args.authentication : undefined;
            resourceInputs["bfd"] = args ? args.bfd : undefined;
            resourceInputs["cost"] = args ? args.cost : undefined;
            resourceInputs["deadInterval"] = args ? args.deadInterval : undefined;
            resourceInputs["deviceName"] = args ? args.deviceName : undefined;
            resourceInputs["deviceVdom"] = args ? args.deviceVdom : undefined;
            resourceInputs["dynamicSortSubtable"] = args ? args.dynamicSortSubtable : undefined;
            resourceInputs["helloInterval"] = args ? args.helloInterval : undefined;
            resourceInputs["interfaces"] = args ? args.interfaces : undefined;
            resourceInputs["ipsecAuthAlg"] = args ? args.ipsecAuthAlg : undefined;
            resourceInputs["ipsecEncAlg"] = args ? args.ipsecEncAlg : undefined;
            resourceInputs["ipsecKeys"] = args ? args.ipsecKeys : undefined;
            resourceInputs["keyRolloverInterval"] = args ? args.keyRolloverInterval : undefined;
            resourceInputs["mtu"] = args ? args.mtu : undefined;
            resourceInputs["mtuIgnore"] = args ? args.mtuIgnore : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["neighbors"] = args ? args.neighbors : undefined;
            resourceInputs["networkType"] = args ? args.networkType : undefined;
            resourceInputs["priority"] = args ? args.priority : undefined;
            resourceInputs["retransmitInterval"] = args ? args.retransmitInterval : undefined;
            resourceInputs["status"] = args ? args.status : undefined;
            resourceInputs["transmitDelay"] = args ? args.transmitDelay : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(RouterOspf6Ospf6interface.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering RouterOspf6Ospf6interface resources.
 */
export interface RouterOspf6Ospf6interfaceState {
    areaId?: pulumi.Input<string>;
    authentication?: pulumi.Input<string>;
    bfd?: pulumi.Input<string>;
    cost?: pulumi.Input<number>;
    deadInterval?: pulumi.Input<number>;
    deviceName?: pulumi.Input<string>;
    deviceVdom?: pulumi.Input<string>;
    dynamicSortSubtable?: pulumi.Input<string>;
    helloInterval?: pulumi.Input<number>;
    interfaces?: pulumi.Input<pulumi.Input<string>[]>;
    ipsecAuthAlg?: pulumi.Input<string>;
    ipsecEncAlg?: pulumi.Input<string>;
    ipsecKeys?: pulumi.Input<pulumi.Input<inputs.RouterOspf6Ospf6interfaceIpsecKey>[]>;
    keyRolloverInterval?: pulumi.Input<number>;
    mtu?: pulumi.Input<number>;
    mtuIgnore?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    neighbors?: pulumi.Input<pulumi.Input<inputs.RouterOspf6Ospf6interfaceNeighbor>[]>;
    networkType?: pulumi.Input<string>;
    priority?: pulumi.Input<number>;
    retransmitInterval?: pulumi.Input<number>;
    status?: pulumi.Input<string>;
    transmitDelay?: pulumi.Input<number>;
}

/**
 * The set of arguments for constructing a RouterOspf6Ospf6interface resource.
 */
export interface RouterOspf6Ospf6interfaceArgs {
    areaId?: pulumi.Input<string>;
    authentication?: pulumi.Input<string>;
    bfd?: pulumi.Input<string>;
    cost?: pulumi.Input<number>;
    deadInterval?: pulumi.Input<number>;
    deviceName?: pulumi.Input<string>;
    deviceVdom?: pulumi.Input<string>;
    dynamicSortSubtable?: pulumi.Input<string>;
    helloInterval?: pulumi.Input<number>;
    interfaces?: pulumi.Input<pulumi.Input<string>[]>;
    ipsecAuthAlg?: pulumi.Input<string>;
    ipsecEncAlg?: pulumi.Input<string>;
    ipsecKeys?: pulumi.Input<pulumi.Input<inputs.RouterOspf6Ospf6interfaceIpsecKey>[]>;
    keyRolloverInterval?: pulumi.Input<number>;
    mtu?: pulumi.Input<number>;
    mtuIgnore?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    neighbors?: pulumi.Input<pulumi.Input<inputs.RouterOspf6Ospf6interfaceNeighbor>[]>;
    networkType?: pulumi.Input<string>;
    priority?: pulumi.Input<number>;
    retransmitInterval?: pulumi.Input<number>;
    status?: pulumi.Input<string>;
    transmitDelay?: pulumi.Input<number>;
}
