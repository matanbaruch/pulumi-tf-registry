// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class NsxtNetworkDhcpBinding extends pulumi.CustomResource {
    /**
     * Get an existing NsxtNetworkDhcpBinding resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: NsxtNetworkDhcpBindingState, opts?: pulumi.CustomResourceOptions): NsxtNetworkDhcpBinding {
        return new NsxtNetworkDhcpBinding(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'vcd:index/nsxtNetworkDhcpBinding:NsxtNetworkDhcpBinding';

    /**
     * Returns true if the given object is an instance of NsxtNetworkDhcpBinding.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is NsxtNetworkDhcpBinding {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === NsxtNetworkDhcpBinding.__pulumiType;
    }

    /**
     * Binding type 'IPV4' or 'IPV6'
     */
    public readonly bindingType!: pulumi.Output<string>;
    /**
     * Description of DHCP binding
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * IPv4 specific DHCP Binding configuration
     */
    public readonly dhcpV4Config!: pulumi.Output<outputs.NsxtNetworkDhcpBindingDhcpV4Config | undefined>;
    /**
     * IPv6 specific DHCP Binding configuration
     */
    public readonly dhcpV6Config!: pulumi.Output<outputs.NsxtNetworkDhcpBindingDhcpV6Config | undefined>;
    /**
     * The DNS server IPs to be assigned . 2 values maximum.
     */
    public readonly dnsServers!: pulumi.Output<string[] | undefined>;
    /**
     * IP address of the DHCP binding
     */
    public readonly ipAddress!: pulumi.Output<string>;
    /**
     * Lease time in seconds. Minimum value is 60 seconds
     */
    public readonly leaseTime!: pulumi.Output<number>;
    /**
     * MAC address of the DHCP binding
     */
    public readonly macAddress!: pulumi.Output<string>;
    /**
     * Name of DHCP binding
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * The name of organization to use, optional if defined at provider level. Useful when connected as sysadmin working across
     * different organizations
     */
    public readonly org!: pulumi.Output<string | undefined>;
    /**
     * Parent Org VDC network ID
     */
    public readonly orgNetworkId!: pulumi.Output<string>;

    /**
     * Create a NsxtNetworkDhcpBinding resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: NsxtNetworkDhcpBindingArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: NsxtNetworkDhcpBindingArgs | NsxtNetworkDhcpBindingState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as NsxtNetworkDhcpBindingState | undefined;
            resourceInputs["bindingType"] = state ? state.bindingType : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["dhcpV4Config"] = state ? state.dhcpV4Config : undefined;
            resourceInputs["dhcpV6Config"] = state ? state.dhcpV6Config : undefined;
            resourceInputs["dnsServers"] = state ? state.dnsServers : undefined;
            resourceInputs["ipAddress"] = state ? state.ipAddress : undefined;
            resourceInputs["leaseTime"] = state ? state.leaseTime : undefined;
            resourceInputs["macAddress"] = state ? state.macAddress : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["org"] = state ? state.org : undefined;
            resourceInputs["orgNetworkId"] = state ? state.orgNetworkId : undefined;
        } else {
            const args = argsOrState as NsxtNetworkDhcpBindingArgs | undefined;
            if ((!args || args.bindingType === undefined) && !opts.urn) {
                throw new Error("Missing required property 'bindingType'");
            }
            if ((!args || args.ipAddress === undefined) && !opts.urn) {
                throw new Error("Missing required property 'ipAddress'");
            }
            if ((!args || args.leaseTime === undefined) && !opts.urn) {
                throw new Error("Missing required property 'leaseTime'");
            }
            if ((!args || args.macAddress === undefined) && !opts.urn) {
                throw new Error("Missing required property 'macAddress'");
            }
            if ((!args || args.orgNetworkId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'orgNetworkId'");
            }
            resourceInputs["bindingType"] = args ? args.bindingType : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["dhcpV4Config"] = args ? args.dhcpV4Config : undefined;
            resourceInputs["dhcpV6Config"] = args ? args.dhcpV6Config : undefined;
            resourceInputs["dnsServers"] = args ? args.dnsServers : undefined;
            resourceInputs["ipAddress"] = args ? args.ipAddress : undefined;
            resourceInputs["leaseTime"] = args ? args.leaseTime : undefined;
            resourceInputs["macAddress"] = args ? args.macAddress : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["org"] = args ? args.org : undefined;
            resourceInputs["orgNetworkId"] = args ? args.orgNetworkId : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(NsxtNetworkDhcpBinding.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering NsxtNetworkDhcpBinding resources.
 */
export interface NsxtNetworkDhcpBindingState {
    /**
     * Binding type 'IPV4' or 'IPV6'
     */
    bindingType?: pulumi.Input<string>;
    /**
     * Description of DHCP binding
     */
    description?: pulumi.Input<string>;
    /**
     * IPv4 specific DHCP Binding configuration
     */
    dhcpV4Config?: pulumi.Input<inputs.NsxtNetworkDhcpBindingDhcpV4Config>;
    /**
     * IPv6 specific DHCP Binding configuration
     */
    dhcpV6Config?: pulumi.Input<inputs.NsxtNetworkDhcpBindingDhcpV6Config>;
    /**
     * The DNS server IPs to be assigned . 2 values maximum.
     */
    dnsServers?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * IP address of the DHCP binding
     */
    ipAddress?: pulumi.Input<string>;
    /**
     * Lease time in seconds. Minimum value is 60 seconds
     */
    leaseTime?: pulumi.Input<number>;
    /**
     * MAC address of the DHCP binding
     */
    macAddress?: pulumi.Input<string>;
    /**
     * Name of DHCP binding
     */
    name?: pulumi.Input<string>;
    /**
     * The name of organization to use, optional if defined at provider level. Useful when connected as sysadmin working across
     * different organizations
     */
    org?: pulumi.Input<string>;
    /**
     * Parent Org VDC network ID
     */
    orgNetworkId?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a NsxtNetworkDhcpBinding resource.
 */
export interface NsxtNetworkDhcpBindingArgs {
    /**
     * Binding type 'IPV4' or 'IPV6'
     */
    bindingType: pulumi.Input<string>;
    /**
     * Description of DHCP binding
     */
    description?: pulumi.Input<string>;
    /**
     * IPv4 specific DHCP Binding configuration
     */
    dhcpV4Config?: pulumi.Input<inputs.NsxtNetworkDhcpBindingDhcpV4Config>;
    /**
     * IPv6 specific DHCP Binding configuration
     */
    dhcpV6Config?: pulumi.Input<inputs.NsxtNetworkDhcpBindingDhcpV6Config>;
    /**
     * The DNS server IPs to be assigned . 2 values maximum.
     */
    dnsServers?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * IP address of the DHCP binding
     */
    ipAddress: pulumi.Input<string>;
    /**
     * Lease time in seconds. Minimum value is 60 seconds
     */
    leaseTime: pulumi.Input<number>;
    /**
     * MAC address of the DHCP binding
     */
    macAddress: pulumi.Input<string>;
    /**
     * Name of DHCP binding
     */
    name?: pulumi.Input<string>;
    /**
     * The name of organization to use, optional if defined at provider level. Useful when connected as sysadmin working across
     * different organizations
     */
    org?: pulumi.Input<string>;
    /**
     * Parent Org VDC network ID
     */
    orgNetworkId: pulumi.Input<string>;
}
