// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class NetworkLldpManagementAddressIpv4Addr extends pulumi.CustomResource {
    /**
     * Get an existing NetworkLldpManagementAddressIpv4Addr resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: NetworkLldpManagementAddressIpv4AddrState, opts?: pulumi.CustomResourceOptions): NetworkLldpManagementAddressIpv4Addr {
        return new NetworkLldpManagementAddressIpv4Addr(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'thunder:index/networkLldpManagementAddressIpv4Addr:NetworkLldpManagementAddressIpv4Addr';

    /**
     * Returns true if the given object is an instance of NetworkLldpManagementAddressIpv4Addr.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is NetworkLldpManagementAddressIpv4Addr {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === NetworkLldpManagementAddressIpv4Addr.__pulumiType;
    }

    public readonly interfaceIpv4!: pulumi.Output<outputs.NetworkLldpManagementAddressIpv4AddrInterfaceIpv4 | undefined>;
    /**
     * Configure lldp management-address, subtype is ipv4 (lldp management-address ipv4 address)
     */
    public readonly ipv4!: pulumi.Output<string>;
    /**
     * uuid of the object
     */
    public readonly uuid!: pulumi.Output<string>;

    /**
     * Create a NetworkLldpManagementAddressIpv4Addr resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: NetworkLldpManagementAddressIpv4AddrArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: NetworkLldpManagementAddressIpv4AddrArgs | NetworkLldpManagementAddressIpv4AddrState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as NetworkLldpManagementAddressIpv4AddrState | undefined;
            resourceInputs["interfaceIpv4"] = state ? state.interfaceIpv4 : undefined;
            resourceInputs["ipv4"] = state ? state.ipv4 : undefined;
            resourceInputs["uuid"] = state ? state.uuid : undefined;
        } else {
            const args = argsOrState as NetworkLldpManagementAddressIpv4AddrArgs | undefined;
            if ((!args || args.ipv4 === undefined) && !opts.urn) {
                throw new Error("Missing required property 'ipv4'");
            }
            resourceInputs["interfaceIpv4"] = args ? args.interfaceIpv4 : undefined;
            resourceInputs["ipv4"] = args ? args.ipv4 : undefined;
            resourceInputs["uuid"] = args ? args.uuid : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(NetworkLldpManagementAddressIpv4Addr.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering NetworkLldpManagementAddressIpv4Addr resources.
 */
export interface NetworkLldpManagementAddressIpv4AddrState {
    interfaceIpv4?: pulumi.Input<inputs.NetworkLldpManagementAddressIpv4AddrInterfaceIpv4>;
    /**
     * Configure lldp management-address, subtype is ipv4 (lldp management-address ipv4 address)
     */
    ipv4?: pulumi.Input<string>;
    /**
     * uuid of the object
     */
    uuid?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a NetworkLldpManagementAddressIpv4Addr resource.
 */
export interface NetworkLldpManagementAddressIpv4AddrArgs {
    interfaceIpv4?: pulumi.Input<inputs.NetworkLldpManagementAddressIpv4AddrInterfaceIpv4>;
    /**
     * Configure lldp management-address, subtype is ipv4 (lldp management-address ipv4 address)
     */
    ipv4: pulumi.Input<string>;
    /**
     * uuid of the object
     */
    uuid?: pulumi.Input<string>;
}
