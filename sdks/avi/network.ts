// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class Network extends pulumi.CustomResource {
    /**
     * Get an existing Network resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: NetworkState, opts?: pulumi.CustomResourceOptions): Network {
        return new Network(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'avi:index/network:Network';

    /**
     * Returns true if the given object is an instance of Network.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Network {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Network.__pulumiType;
    }

    public readonly attrs!: pulumi.Output<outputs.NetworkAttr[] | undefined>;
    public readonly cloudRef!: pulumi.Output<string>;
    public readonly configpbAttributes!: pulumi.Output<outputs.NetworkConfigpbAttribute[] | undefined>;
    public readonly configuredSubnets!: pulumi.Output<outputs.NetworkConfiguredSubnet[] | undefined>;
    public readonly dhcpEnabled!: pulumi.Output<string | undefined>;
    public readonly excludeDiscoveredSubnets!: pulumi.Output<string | undefined>;
    public readonly ip6AutocfgEnabled!: pulumi.Output<string | undefined>;
    public readonly markers!: pulumi.Output<outputs.NetworkMarker[] | undefined>;
    public readonly name!: pulumi.Output<string>;
    public readonly syncedFromSe!: pulumi.Output<string | undefined>;
    public readonly tenantRef!: pulumi.Output<string>;
    public readonly uuid!: pulumi.Output<string>;
    public readonly vcenterDvs!: pulumi.Output<string | undefined>;
    public readonly vimgrnwRef!: pulumi.Output<string>;
    public readonly vrfContextRef!: pulumi.Output<string>;

    /**
     * Create a Network resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: NetworkArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: NetworkArgs | NetworkState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as NetworkState | undefined;
            resourceInputs["attrs"] = state ? state.attrs : undefined;
            resourceInputs["cloudRef"] = state ? state.cloudRef : undefined;
            resourceInputs["configpbAttributes"] = state ? state.configpbAttributes : undefined;
            resourceInputs["configuredSubnets"] = state ? state.configuredSubnets : undefined;
            resourceInputs["dhcpEnabled"] = state ? state.dhcpEnabled : undefined;
            resourceInputs["excludeDiscoveredSubnets"] = state ? state.excludeDiscoveredSubnets : undefined;
            resourceInputs["ip6AutocfgEnabled"] = state ? state.ip6AutocfgEnabled : undefined;
            resourceInputs["markers"] = state ? state.markers : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["syncedFromSe"] = state ? state.syncedFromSe : undefined;
            resourceInputs["tenantRef"] = state ? state.tenantRef : undefined;
            resourceInputs["uuid"] = state ? state.uuid : undefined;
            resourceInputs["vcenterDvs"] = state ? state.vcenterDvs : undefined;
            resourceInputs["vimgrnwRef"] = state ? state.vimgrnwRef : undefined;
            resourceInputs["vrfContextRef"] = state ? state.vrfContextRef : undefined;
        } else {
            const args = argsOrState as NetworkArgs | undefined;
            resourceInputs["attrs"] = args ? args.attrs : undefined;
            resourceInputs["cloudRef"] = args ? args.cloudRef : undefined;
            resourceInputs["configpbAttributes"] = args ? args.configpbAttributes : undefined;
            resourceInputs["configuredSubnets"] = args ? args.configuredSubnets : undefined;
            resourceInputs["dhcpEnabled"] = args ? args.dhcpEnabled : undefined;
            resourceInputs["excludeDiscoveredSubnets"] = args ? args.excludeDiscoveredSubnets : undefined;
            resourceInputs["ip6AutocfgEnabled"] = args ? args.ip6AutocfgEnabled : undefined;
            resourceInputs["markers"] = args ? args.markers : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["syncedFromSe"] = args ? args.syncedFromSe : undefined;
            resourceInputs["tenantRef"] = args ? args.tenantRef : undefined;
            resourceInputs["uuid"] = args ? args.uuid : undefined;
            resourceInputs["vcenterDvs"] = args ? args.vcenterDvs : undefined;
            resourceInputs["vimgrnwRef"] = args ? args.vimgrnwRef : undefined;
            resourceInputs["vrfContextRef"] = args ? args.vrfContextRef : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(Network.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering Network resources.
 */
export interface NetworkState {
    attrs?: pulumi.Input<pulumi.Input<inputs.NetworkAttr>[]>;
    cloudRef?: pulumi.Input<string>;
    configpbAttributes?: pulumi.Input<pulumi.Input<inputs.NetworkConfigpbAttribute>[]>;
    configuredSubnets?: pulumi.Input<pulumi.Input<inputs.NetworkConfiguredSubnet>[]>;
    dhcpEnabled?: pulumi.Input<string>;
    excludeDiscoveredSubnets?: pulumi.Input<string>;
    ip6AutocfgEnabled?: pulumi.Input<string>;
    markers?: pulumi.Input<pulumi.Input<inputs.NetworkMarker>[]>;
    name?: pulumi.Input<string>;
    syncedFromSe?: pulumi.Input<string>;
    tenantRef?: pulumi.Input<string>;
    uuid?: pulumi.Input<string>;
    vcenterDvs?: pulumi.Input<string>;
    vimgrnwRef?: pulumi.Input<string>;
    vrfContextRef?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a Network resource.
 */
export interface NetworkArgs {
    attrs?: pulumi.Input<pulumi.Input<inputs.NetworkAttr>[]>;
    cloudRef?: pulumi.Input<string>;
    configpbAttributes?: pulumi.Input<pulumi.Input<inputs.NetworkConfigpbAttribute>[]>;
    configuredSubnets?: pulumi.Input<pulumi.Input<inputs.NetworkConfiguredSubnet>[]>;
    dhcpEnabled?: pulumi.Input<string>;
    excludeDiscoveredSubnets?: pulumi.Input<string>;
    ip6AutocfgEnabled?: pulumi.Input<string>;
    markers?: pulumi.Input<pulumi.Input<inputs.NetworkMarker>[]>;
    name?: pulumi.Input<string>;
    syncedFromSe?: pulumi.Input<string>;
    tenantRef?: pulumi.Input<string>;
    uuid?: pulumi.Input<string>;
    vcenterDvs?: pulumi.Input<string>;
    vimgrnwRef?: pulumi.Input<string>;
    vrfContextRef?: pulumi.Input<string>;
}
