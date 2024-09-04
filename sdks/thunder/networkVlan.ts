// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class NetworkVlan extends pulumi.CustomResource {
    /**
     * Get an existing NetworkVlan resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: NetworkVlanState, opts?: pulumi.CustomResourceOptions): NetworkVlan {
        return new NetworkVlan(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'thunder:index/networkVlan:NetworkVlan';

    /**
     * Returns true if the given object is an instance of NetworkVlan.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is NetworkVlan {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === NetworkVlan.__pulumiType;
    }

    /**
     * VLAN name
     */
    public readonly name!: pulumi.Output<string>;
    public readonly samplingEnables!: pulumi.Output<outputs.NetworkVlanSamplingEnable[] | undefined>;
    /**
     * Configure VLAN as a shared VLAN
     */
    public readonly sharedVlan!: pulumi.Output<number | undefined>;
    public readonly taggedEthLists!: pulumi.Output<outputs.NetworkVlanTaggedEthList[] | undefined>;
    public readonly taggedTrunkLists!: pulumi.Output<outputs.NetworkVlanTaggedTrunkList[] | undefined>;
    /**
     * 'sip': sip; 'dip': dip; 'primary': primary; 'blade': blade; 'l4-src-port': l4-src-port; 'l4-dst-port': l4-dst-port;
     */
    public readonly trafficDistributionMode!: pulumi.Output<string | undefined>;
    public readonly untaggedEthLists!: pulumi.Output<outputs.NetworkVlanUntaggedEthList[] | undefined>;
    /**
     * Logical tunnel interface (Logical tunnel interface name)
     */
    public readonly untaggedLif!: pulumi.Output<string | undefined>;
    public readonly untaggedTrunkLists!: pulumi.Output<outputs.NetworkVlanUntaggedTrunkList[] | undefined>;
    /**
     * Customized tag
     */
    public readonly userTag!: pulumi.Output<string | undefined>;
    /**
     * uuid of the object
     */
    public readonly uuid!: pulumi.Output<string>;
    /**
     * ve number
     */
    public readonly ve!: pulumi.Output<number | undefined>;
    /**
     * VLAN number
     */
    public readonly vlanNum!: pulumi.Output<number>;

    /**
     * Create a NetworkVlan resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: NetworkVlanArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: NetworkVlanArgs | NetworkVlanState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as NetworkVlanState | undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["samplingEnables"] = state ? state.samplingEnables : undefined;
            resourceInputs["sharedVlan"] = state ? state.sharedVlan : undefined;
            resourceInputs["taggedEthLists"] = state ? state.taggedEthLists : undefined;
            resourceInputs["taggedTrunkLists"] = state ? state.taggedTrunkLists : undefined;
            resourceInputs["trafficDistributionMode"] = state ? state.trafficDistributionMode : undefined;
            resourceInputs["untaggedEthLists"] = state ? state.untaggedEthLists : undefined;
            resourceInputs["untaggedLif"] = state ? state.untaggedLif : undefined;
            resourceInputs["untaggedTrunkLists"] = state ? state.untaggedTrunkLists : undefined;
            resourceInputs["userTag"] = state ? state.userTag : undefined;
            resourceInputs["uuid"] = state ? state.uuid : undefined;
            resourceInputs["ve"] = state ? state.ve : undefined;
            resourceInputs["vlanNum"] = state ? state.vlanNum : undefined;
        } else {
            const args = argsOrState as NetworkVlanArgs | undefined;
            if ((!args || args.vlanNum === undefined) && !opts.urn) {
                throw new Error("Missing required property 'vlanNum'");
            }
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["samplingEnables"] = args ? args.samplingEnables : undefined;
            resourceInputs["sharedVlan"] = args ? args.sharedVlan : undefined;
            resourceInputs["taggedEthLists"] = args ? args.taggedEthLists : undefined;
            resourceInputs["taggedTrunkLists"] = args ? args.taggedTrunkLists : undefined;
            resourceInputs["trafficDistributionMode"] = args ? args.trafficDistributionMode : undefined;
            resourceInputs["untaggedEthLists"] = args ? args.untaggedEthLists : undefined;
            resourceInputs["untaggedLif"] = args ? args.untaggedLif : undefined;
            resourceInputs["untaggedTrunkLists"] = args ? args.untaggedTrunkLists : undefined;
            resourceInputs["userTag"] = args ? args.userTag : undefined;
            resourceInputs["uuid"] = args ? args.uuid : undefined;
            resourceInputs["ve"] = args ? args.ve : undefined;
            resourceInputs["vlanNum"] = args ? args.vlanNum : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(NetworkVlan.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering NetworkVlan resources.
 */
export interface NetworkVlanState {
    /**
     * VLAN name
     */
    name?: pulumi.Input<string>;
    samplingEnables?: pulumi.Input<pulumi.Input<inputs.NetworkVlanSamplingEnable>[]>;
    /**
     * Configure VLAN as a shared VLAN
     */
    sharedVlan?: pulumi.Input<number>;
    taggedEthLists?: pulumi.Input<pulumi.Input<inputs.NetworkVlanTaggedEthList>[]>;
    taggedTrunkLists?: pulumi.Input<pulumi.Input<inputs.NetworkVlanTaggedTrunkList>[]>;
    /**
     * 'sip': sip; 'dip': dip; 'primary': primary; 'blade': blade; 'l4-src-port': l4-src-port; 'l4-dst-port': l4-dst-port;
     */
    trafficDistributionMode?: pulumi.Input<string>;
    untaggedEthLists?: pulumi.Input<pulumi.Input<inputs.NetworkVlanUntaggedEthList>[]>;
    /**
     * Logical tunnel interface (Logical tunnel interface name)
     */
    untaggedLif?: pulumi.Input<string>;
    untaggedTrunkLists?: pulumi.Input<pulumi.Input<inputs.NetworkVlanUntaggedTrunkList>[]>;
    /**
     * Customized tag
     */
    userTag?: pulumi.Input<string>;
    /**
     * uuid of the object
     */
    uuid?: pulumi.Input<string>;
    /**
     * ve number
     */
    ve?: pulumi.Input<number>;
    /**
     * VLAN number
     */
    vlanNum?: pulumi.Input<number>;
}

/**
 * The set of arguments for constructing a NetworkVlan resource.
 */
export interface NetworkVlanArgs {
    /**
     * VLAN name
     */
    name?: pulumi.Input<string>;
    samplingEnables?: pulumi.Input<pulumi.Input<inputs.NetworkVlanSamplingEnable>[]>;
    /**
     * Configure VLAN as a shared VLAN
     */
    sharedVlan?: pulumi.Input<number>;
    taggedEthLists?: pulumi.Input<pulumi.Input<inputs.NetworkVlanTaggedEthList>[]>;
    taggedTrunkLists?: pulumi.Input<pulumi.Input<inputs.NetworkVlanTaggedTrunkList>[]>;
    /**
     * 'sip': sip; 'dip': dip; 'primary': primary; 'blade': blade; 'l4-src-port': l4-src-port; 'l4-dst-port': l4-dst-port;
     */
    trafficDistributionMode?: pulumi.Input<string>;
    untaggedEthLists?: pulumi.Input<pulumi.Input<inputs.NetworkVlanUntaggedEthList>[]>;
    /**
     * Logical tunnel interface (Logical tunnel interface name)
     */
    untaggedLif?: pulumi.Input<string>;
    untaggedTrunkLists?: pulumi.Input<pulumi.Input<inputs.NetworkVlanUntaggedTrunkList>[]>;
    /**
     * Customized tag
     */
    userTag?: pulumi.Input<string>;
    /**
     * uuid of the object
     */
    uuid?: pulumi.Input<string>;
    /**
     * ve number
     */
    ve?: pulumi.Input<number>;
    /**
     * VLAN number
     */
    vlanNum: pulumi.Input<number>;
}
