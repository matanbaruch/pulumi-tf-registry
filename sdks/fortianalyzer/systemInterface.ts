// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class SystemInterface extends pulumi.CustomResource {
    /**
     * Get an existing SystemInterface resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SystemInterfaceState, opts?: pulumi.CustomResourceOptions): SystemInterface {
        return new SystemInterface(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'fortianalyzer:index/systemInterface:SystemInterface';

    /**
     * Returns true if the given object is an instance of SystemInterface.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is SystemInterface {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === SystemInterface.__pulumiType;
    }

    public readonly aggregate!: pulumi.Output<string | undefined>;
    public readonly alias!: pulumi.Output<string | undefined>;
    public readonly allowaccesses!: pulumi.Output<string[] | undefined>;
    public readonly autogenerated!: pulumi.Output<string>;
    public readonly defaultgw!: pulumi.Output<string>;
    public readonly description!: pulumi.Output<string | undefined>;
    public readonly dhcpClientIdentifier!: pulumi.Output<string | undefined>;
    public readonly dnsServerOverride!: pulumi.Output<string>;
    public readonly dynamicSortSubtable!: pulumi.Output<string | undefined>;
    public readonly interface!: pulumi.Output<string | undefined>;
    public readonly ips!: pulumi.Output<string[]>;
    public readonly ipv6!: pulumi.Output<outputs.SystemInterfaceIpv6 | undefined>;
    public readonly lacpMode!: pulumi.Output<string>;
    public readonly lacpSpeed!: pulumi.Output<string>;
    public readonly linkUpDelay!: pulumi.Output<number>;
    public readonly lldp!: pulumi.Output<string>;
    public readonly members!: pulumi.Output<outputs.SystemInterfaceMember[] | undefined>;
    public readonly minLinks!: pulumi.Output<number>;
    public readonly minLinksDown!: pulumi.Output<string>;
    public readonly mode!: pulumi.Output<string>;
    public readonly mtu!: pulumi.Output<number>;
    public readonly mtuOverride!: pulumi.Output<string>;
    public readonly name!: pulumi.Output<string>;
    public readonly speed!: pulumi.Output<string>;
    public readonly status!: pulumi.Output<string>;
    public readonly type!: pulumi.Output<string>;
    public readonly vlanProtocol!: pulumi.Output<string>;
    public readonly vlanid!: pulumi.Output<number | undefined>;

    /**
     * Create a SystemInterface resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: SystemInterfaceArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: SystemInterfaceArgs | SystemInterfaceState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as SystemInterfaceState | undefined;
            resourceInputs["aggregate"] = state ? state.aggregate : undefined;
            resourceInputs["alias"] = state ? state.alias : undefined;
            resourceInputs["allowaccesses"] = state ? state.allowaccesses : undefined;
            resourceInputs["autogenerated"] = state ? state.autogenerated : undefined;
            resourceInputs["defaultgw"] = state ? state.defaultgw : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["dhcpClientIdentifier"] = state ? state.dhcpClientIdentifier : undefined;
            resourceInputs["dnsServerOverride"] = state ? state.dnsServerOverride : undefined;
            resourceInputs["dynamicSortSubtable"] = state ? state.dynamicSortSubtable : undefined;
            resourceInputs["interface"] = state ? state.interface : undefined;
            resourceInputs["ips"] = state ? state.ips : undefined;
            resourceInputs["ipv6"] = state ? state.ipv6 : undefined;
            resourceInputs["lacpMode"] = state ? state.lacpMode : undefined;
            resourceInputs["lacpSpeed"] = state ? state.lacpSpeed : undefined;
            resourceInputs["linkUpDelay"] = state ? state.linkUpDelay : undefined;
            resourceInputs["lldp"] = state ? state.lldp : undefined;
            resourceInputs["members"] = state ? state.members : undefined;
            resourceInputs["minLinks"] = state ? state.minLinks : undefined;
            resourceInputs["minLinksDown"] = state ? state.minLinksDown : undefined;
            resourceInputs["mode"] = state ? state.mode : undefined;
            resourceInputs["mtu"] = state ? state.mtu : undefined;
            resourceInputs["mtuOverride"] = state ? state.mtuOverride : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["speed"] = state ? state.speed : undefined;
            resourceInputs["status"] = state ? state.status : undefined;
            resourceInputs["type"] = state ? state.type : undefined;
            resourceInputs["vlanProtocol"] = state ? state.vlanProtocol : undefined;
            resourceInputs["vlanid"] = state ? state.vlanid : undefined;
        } else {
            const args = argsOrState as SystemInterfaceArgs | undefined;
            resourceInputs["aggregate"] = args ? args.aggregate : undefined;
            resourceInputs["alias"] = args ? args.alias : undefined;
            resourceInputs["allowaccesses"] = args ? args.allowaccesses : undefined;
            resourceInputs["autogenerated"] = args ? args.autogenerated : undefined;
            resourceInputs["defaultgw"] = args ? args.defaultgw : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["dhcpClientIdentifier"] = args ? args.dhcpClientIdentifier : undefined;
            resourceInputs["dnsServerOverride"] = args ? args.dnsServerOverride : undefined;
            resourceInputs["dynamicSortSubtable"] = args ? args.dynamicSortSubtable : undefined;
            resourceInputs["interface"] = args ? args.interface : undefined;
            resourceInputs["ips"] = args ? args.ips : undefined;
            resourceInputs["ipv6"] = args ? args.ipv6 : undefined;
            resourceInputs["lacpMode"] = args ? args.lacpMode : undefined;
            resourceInputs["lacpSpeed"] = args ? args.lacpSpeed : undefined;
            resourceInputs["linkUpDelay"] = args ? args.linkUpDelay : undefined;
            resourceInputs["lldp"] = args ? args.lldp : undefined;
            resourceInputs["members"] = args ? args.members : undefined;
            resourceInputs["minLinks"] = args ? args.minLinks : undefined;
            resourceInputs["minLinksDown"] = args ? args.minLinksDown : undefined;
            resourceInputs["mode"] = args ? args.mode : undefined;
            resourceInputs["mtu"] = args ? args.mtu : undefined;
            resourceInputs["mtuOverride"] = args ? args.mtuOverride : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["speed"] = args ? args.speed : undefined;
            resourceInputs["status"] = args ? args.status : undefined;
            resourceInputs["type"] = args ? args.type : undefined;
            resourceInputs["vlanProtocol"] = args ? args.vlanProtocol : undefined;
            resourceInputs["vlanid"] = args ? args.vlanid : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(SystemInterface.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering SystemInterface resources.
 */
export interface SystemInterfaceState {
    aggregate?: pulumi.Input<string>;
    alias?: pulumi.Input<string>;
    allowaccesses?: pulumi.Input<pulumi.Input<string>[]>;
    autogenerated?: pulumi.Input<string>;
    defaultgw?: pulumi.Input<string>;
    description?: pulumi.Input<string>;
    dhcpClientIdentifier?: pulumi.Input<string>;
    dnsServerOverride?: pulumi.Input<string>;
    dynamicSortSubtable?: pulumi.Input<string>;
    interface?: pulumi.Input<string>;
    ips?: pulumi.Input<pulumi.Input<string>[]>;
    ipv6?: pulumi.Input<inputs.SystemInterfaceIpv6>;
    lacpMode?: pulumi.Input<string>;
    lacpSpeed?: pulumi.Input<string>;
    linkUpDelay?: pulumi.Input<number>;
    lldp?: pulumi.Input<string>;
    members?: pulumi.Input<pulumi.Input<inputs.SystemInterfaceMember>[]>;
    minLinks?: pulumi.Input<number>;
    minLinksDown?: pulumi.Input<string>;
    mode?: pulumi.Input<string>;
    mtu?: pulumi.Input<number>;
    mtuOverride?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    speed?: pulumi.Input<string>;
    status?: pulumi.Input<string>;
    type?: pulumi.Input<string>;
    vlanProtocol?: pulumi.Input<string>;
    vlanid?: pulumi.Input<number>;
}

/**
 * The set of arguments for constructing a SystemInterface resource.
 */
export interface SystemInterfaceArgs {
    aggregate?: pulumi.Input<string>;
    alias?: pulumi.Input<string>;
    allowaccesses?: pulumi.Input<pulumi.Input<string>[]>;
    autogenerated?: pulumi.Input<string>;
    defaultgw?: pulumi.Input<string>;
    description?: pulumi.Input<string>;
    dhcpClientIdentifier?: pulumi.Input<string>;
    dnsServerOverride?: pulumi.Input<string>;
    dynamicSortSubtable?: pulumi.Input<string>;
    interface?: pulumi.Input<string>;
    ips?: pulumi.Input<pulumi.Input<string>[]>;
    ipv6?: pulumi.Input<inputs.SystemInterfaceIpv6>;
    lacpMode?: pulumi.Input<string>;
    lacpSpeed?: pulumi.Input<string>;
    linkUpDelay?: pulumi.Input<number>;
    lldp?: pulumi.Input<string>;
    members?: pulumi.Input<pulumi.Input<inputs.SystemInterfaceMember>[]>;
    minLinks?: pulumi.Input<number>;
    minLinksDown?: pulumi.Input<string>;
    mode?: pulumi.Input<string>;
    mtu?: pulumi.Input<number>;
    mtuOverride?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    speed?: pulumi.Input<string>;
    status?: pulumi.Input<string>;
    type?: pulumi.Input<string>;
    vlanProtocol?: pulumi.Input<string>;
    vlanid?: pulumi.Input<number>;
}
