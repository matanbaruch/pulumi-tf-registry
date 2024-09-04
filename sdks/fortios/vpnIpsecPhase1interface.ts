// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class VpnIpsecPhase1interface extends pulumi.CustomResource {
    /**
     * Get an existing VpnIpsecPhase1interface resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: VpnIpsecPhase1interfaceState, opts?: pulumi.CustomResourceOptions): VpnIpsecPhase1interface {
        return new VpnIpsecPhase1interface(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'fortios:index/vpnIpsecPhase1interface:VpnIpsecPhase1interface';

    /**
     * Returns true if the given object is an instance of VpnIpsecPhase1interface.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is VpnIpsecPhase1interface {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === VpnIpsecPhase1interface.__pulumiType;
    }

    public readonly authmethod!: pulumi.Output<string>;
    public readonly authmethodRemote!: pulumi.Output<string>;
    public readonly certificates!: pulumi.Output<string[]>;
    public readonly comments!: pulumi.Output<string | undefined>;
    public readonly interface!: pulumi.Output<string>;
    public readonly ipv4SplitExclude!: pulumi.Output<string>;
    public readonly ipv4SplitInclude!: pulumi.Output<string>;
    public readonly modeCfg!: pulumi.Output<string>;
    public readonly name!: pulumi.Output<string>;
    public readonly peer!: pulumi.Output<string>;
    public readonly peergrp!: pulumi.Output<string>;
    public readonly peerid!: pulumi.Output<string>;
    public readonly peertype!: pulumi.Output<string>;
    public readonly proposal!: pulumi.Output<string>;
    public readonly psksecret!: pulumi.Output<string>;
    public readonly remoteGw!: pulumi.Output<string>;
    public readonly splitIncludeService!: pulumi.Output<string>;
    public readonly type!: pulumi.Output<string>;
    public readonly wizardType!: pulumi.Output<string>;

    /**
     * Create a VpnIpsecPhase1interface resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: VpnIpsecPhase1interfaceArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: VpnIpsecPhase1interfaceArgs | VpnIpsecPhase1interfaceState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as VpnIpsecPhase1interfaceState | undefined;
            resourceInputs["authmethod"] = state ? state.authmethod : undefined;
            resourceInputs["authmethodRemote"] = state ? state.authmethodRemote : undefined;
            resourceInputs["certificates"] = state ? state.certificates : undefined;
            resourceInputs["comments"] = state ? state.comments : undefined;
            resourceInputs["interface"] = state ? state.interface : undefined;
            resourceInputs["ipv4SplitExclude"] = state ? state.ipv4SplitExclude : undefined;
            resourceInputs["ipv4SplitInclude"] = state ? state.ipv4SplitInclude : undefined;
            resourceInputs["modeCfg"] = state ? state.modeCfg : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["peer"] = state ? state.peer : undefined;
            resourceInputs["peergrp"] = state ? state.peergrp : undefined;
            resourceInputs["peerid"] = state ? state.peerid : undefined;
            resourceInputs["peertype"] = state ? state.peertype : undefined;
            resourceInputs["proposal"] = state ? state.proposal : undefined;
            resourceInputs["psksecret"] = state ? state.psksecret : undefined;
            resourceInputs["remoteGw"] = state ? state.remoteGw : undefined;
            resourceInputs["splitIncludeService"] = state ? state.splitIncludeService : undefined;
            resourceInputs["type"] = state ? state.type : undefined;
            resourceInputs["wizardType"] = state ? state.wizardType : undefined;
        } else {
            const args = argsOrState as VpnIpsecPhase1interfaceArgs | undefined;
            if ((!args || args.interface === undefined) && !opts.urn) {
                throw new Error("Missing required property 'interface'");
            }
            if ((!args || args.psksecret === undefined) && !opts.urn) {
                throw new Error("Missing required property 'psksecret'");
            }
            if ((!args || args.remoteGw === undefined) && !opts.urn) {
                throw new Error("Missing required property 'remoteGw'");
            }
            if ((!args || args.type === undefined) && !opts.urn) {
                throw new Error("Missing required property 'type'");
            }
            resourceInputs["authmethod"] = args ? args.authmethod : undefined;
            resourceInputs["authmethodRemote"] = args ? args.authmethodRemote : undefined;
            resourceInputs["certificates"] = args ? args.certificates : undefined;
            resourceInputs["comments"] = args ? args.comments : undefined;
            resourceInputs["interface"] = args ? args.interface : undefined;
            resourceInputs["ipv4SplitExclude"] = args ? args.ipv4SplitExclude : undefined;
            resourceInputs["ipv4SplitInclude"] = args ? args.ipv4SplitInclude : undefined;
            resourceInputs["modeCfg"] = args ? args.modeCfg : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["peer"] = args ? args.peer : undefined;
            resourceInputs["peergrp"] = args ? args.peergrp : undefined;
            resourceInputs["peerid"] = args ? args.peerid : undefined;
            resourceInputs["peertype"] = args ? args.peertype : undefined;
            resourceInputs["proposal"] = args ? args.proposal : undefined;
            resourceInputs["psksecret"] = args ? args.psksecret : undefined;
            resourceInputs["remoteGw"] = args ? args.remoteGw : undefined;
            resourceInputs["splitIncludeService"] = args ? args.splitIncludeService : undefined;
            resourceInputs["type"] = args ? args.type : undefined;
            resourceInputs["wizardType"] = args ? args.wizardType : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(VpnIpsecPhase1interface.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering VpnIpsecPhase1interface resources.
 */
export interface VpnIpsecPhase1interfaceState {
    authmethod?: pulumi.Input<string>;
    authmethodRemote?: pulumi.Input<string>;
    certificates?: pulumi.Input<pulumi.Input<string>[]>;
    comments?: pulumi.Input<string>;
    interface?: pulumi.Input<string>;
    ipv4SplitExclude?: pulumi.Input<string>;
    ipv4SplitInclude?: pulumi.Input<string>;
    modeCfg?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    peer?: pulumi.Input<string>;
    peergrp?: pulumi.Input<string>;
    peerid?: pulumi.Input<string>;
    peertype?: pulumi.Input<string>;
    proposal?: pulumi.Input<string>;
    psksecret?: pulumi.Input<string>;
    remoteGw?: pulumi.Input<string>;
    splitIncludeService?: pulumi.Input<string>;
    type?: pulumi.Input<string>;
    wizardType?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a VpnIpsecPhase1interface resource.
 */
export interface VpnIpsecPhase1interfaceArgs {
    authmethod?: pulumi.Input<string>;
    authmethodRemote?: pulumi.Input<string>;
    certificates?: pulumi.Input<pulumi.Input<string>[]>;
    comments?: pulumi.Input<string>;
    interface: pulumi.Input<string>;
    ipv4SplitExclude?: pulumi.Input<string>;
    ipv4SplitInclude?: pulumi.Input<string>;
    modeCfg?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    peer?: pulumi.Input<string>;
    peergrp?: pulumi.Input<string>;
    peerid?: pulumi.Input<string>;
    peertype?: pulumi.Input<string>;
    proposal?: pulumi.Input<string>;
    psksecret: pulumi.Input<string>;
    remoteGw: pulumi.Input<string>;
    splitIncludeService?: pulumi.Input<string>;
    type: pulumi.Input<string>;
    wizardType?: pulumi.Input<string>;
}
