// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class BgpPeerConnectivityProfile extends pulumi.CustomResource {
    /**
     * Get an existing BgpPeerConnectivityProfile resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: BgpPeerConnectivityProfileState, opts?: pulumi.CustomResourceOptions): BgpPeerConnectivityProfile {
        return new BgpPeerConnectivityProfile(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'aci:index/bgpPeerConnectivityProfile:BgpPeerConnectivityProfile';

    /**
     * Returns true if the given object is an instance of BgpPeerConnectivityProfile.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is BgpPeerConnectivityProfile {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === BgpPeerConnectivityProfile.__pulumiType;
    }

    public readonly addr!: pulumi.Output<string>;
    public readonly addrTCtrls!: pulumi.Output<string[]>;
    public readonly adminState!: pulumi.Output<string>;
    public readonly allowedSelfAsCnt!: pulumi.Output<string>;
    public readonly annotation!: pulumi.Output<string>;
    public readonly asNumber!: pulumi.Output<string>;
    public readonly ctrls!: pulumi.Output<string[]>;
    public readonly description!: pulumi.Output<string>;
    public readonly localAsn!: pulumi.Output<string>;
    public readonly localAsnPropagate!: pulumi.Output<string>;
    /**
     * @deprecated Deprecated
     */
    public readonly logicalNodeProfileDn!: pulumi.Output<string | undefined>;
    public readonly nameAlias!: pulumi.Output<string>;
    public readonly parentDn!: pulumi.Output<string | undefined>;
    public readonly password!: pulumi.Output<string>;
    public readonly peerCtrls!: pulumi.Output<string[]>;
    public readonly privateASctrls!: pulumi.Output<string[]>;
    public readonly relationBgpRsPeerPfxPol!: pulumi.Output<string>;
    /**
     * Create relation to rtctrlProfile
     */
    public readonly relationBgpRsPeerToProfiles!: pulumi.Output<outputs.BgpPeerConnectivityProfileRelationBgpRsPeerToProfile[] | undefined>;
    public readonly ttl!: pulumi.Output<string>;
    public readonly weight!: pulumi.Output<string>;

    /**
     * Create a BgpPeerConnectivityProfile resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: BgpPeerConnectivityProfileArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: BgpPeerConnectivityProfileArgs | BgpPeerConnectivityProfileState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as BgpPeerConnectivityProfileState | undefined;
            resourceInputs["addr"] = state ? state.addr : undefined;
            resourceInputs["addrTCtrls"] = state ? state.addrTCtrls : undefined;
            resourceInputs["adminState"] = state ? state.adminState : undefined;
            resourceInputs["allowedSelfAsCnt"] = state ? state.allowedSelfAsCnt : undefined;
            resourceInputs["annotation"] = state ? state.annotation : undefined;
            resourceInputs["asNumber"] = state ? state.asNumber : undefined;
            resourceInputs["ctrls"] = state ? state.ctrls : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["localAsn"] = state ? state.localAsn : undefined;
            resourceInputs["localAsnPropagate"] = state ? state.localAsnPropagate : undefined;
            resourceInputs["logicalNodeProfileDn"] = state ? state.logicalNodeProfileDn : undefined;
            resourceInputs["nameAlias"] = state ? state.nameAlias : undefined;
            resourceInputs["parentDn"] = state ? state.parentDn : undefined;
            resourceInputs["password"] = state ? state.password : undefined;
            resourceInputs["peerCtrls"] = state ? state.peerCtrls : undefined;
            resourceInputs["privateASctrls"] = state ? state.privateASctrls : undefined;
            resourceInputs["relationBgpRsPeerPfxPol"] = state ? state.relationBgpRsPeerPfxPol : undefined;
            resourceInputs["relationBgpRsPeerToProfiles"] = state ? state.relationBgpRsPeerToProfiles : undefined;
            resourceInputs["ttl"] = state ? state.ttl : undefined;
            resourceInputs["weight"] = state ? state.weight : undefined;
        } else {
            const args = argsOrState as BgpPeerConnectivityProfileArgs | undefined;
            if ((!args || args.addr === undefined) && !opts.urn) {
                throw new Error("Missing required property 'addr'");
            }
            resourceInputs["addr"] = args ? args.addr : undefined;
            resourceInputs["addrTCtrls"] = args ? args.addrTCtrls : undefined;
            resourceInputs["adminState"] = args ? args.adminState : undefined;
            resourceInputs["allowedSelfAsCnt"] = args ? args.allowedSelfAsCnt : undefined;
            resourceInputs["annotation"] = args ? args.annotation : undefined;
            resourceInputs["asNumber"] = args ? args.asNumber : undefined;
            resourceInputs["ctrls"] = args ? args.ctrls : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["localAsn"] = args ? args.localAsn : undefined;
            resourceInputs["localAsnPropagate"] = args ? args.localAsnPropagate : undefined;
            resourceInputs["logicalNodeProfileDn"] = args ? args.logicalNodeProfileDn : undefined;
            resourceInputs["nameAlias"] = args ? args.nameAlias : undefined;
            resourceInputs["parentDn"] = args ? args.parentDn : undefined;
            resourceInputs["password"] = args?.password ? pulumi.secret(args.password) : undefined;
            resourceInputs["peerCtrls"] = args ? args.peerCtrls : undefined;
            resourceInputs["privateASctrls"] = args ? args.privateASctrls : undefined;
            resourceInputs["relationBgpRsPeerPfxPol"] = args ? args.relationBgpRsPeerPfxPol : undefined;
            resourceInputs["relationBgpRsPeerToProfiles"] = args ? args.relationBgpRsPeerToProfiles : undefined;
            resourceInputs["ttl"] = args ? args.ttl : undefined;
            resourceInputs["weight"] = args ? args.weight : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const secretOpts = { additionalSecretOutputs: ["password"] };
        opts = pulumi.mergeOptions(opts, secretOpts);
        super(BgpPeerConnectivityProfile.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering BgpPeerConnectivityProfile resources.
 */
export interface BgpPeerConnectivityProfileState {
    addr?: pulumi.Input<string>;
    addrTCtrls?: pulumi.Input<pulumi.Input<string>[]>;
    adminState?: pulumi.Input<string>;
    allowedSelfAsCnt?: pulumi.Input<string>;
    annotation?: pulumi.Input<string>;
    asNumber?: pulumi.Input<string>;
    ctrls?: pulumi.Input<pulumi.Input<string>[]>;
    description?: pulumi.Input<string>;
    localAsn?: pulumi.Input<string>;
    localAsnPropagate?: pulumi.Input<string>;
    /**
     * @deprecated Deprecated
     */
    logicalNodeProfileDn?: pulumi.Input<string>;
    nameAlias?: pulumi.Input<string>;
    parentDn?: pulumi.Input<string>;
    password?: pulumi.Input<string>;
    peerCtrls?: pulumi.Input<pulumi.Input<string>[]>;
    privateASctrls?: pulumi.Input<pulumi.Input<string>[]>;
    relationBgpRsPeerPfxPol?: pulumi.Input<string>;
    /**
     * Create relation to rtctrlProfile
     */
    relationBgpRsPeerToProfiles?: pulumi.Input<pulumi.Input<inputs.BgpPeerConnectivityProfileRelationBgpRsPeerToProfile>[]>;
    ttl?: pulumi.Input<string>;
    weight?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a BgpPeerConnectivityProfile resource.
 */
export interface BgpPeerConnectivityProfileArgs {
    addr: pulumi.Input<string>;
    addrTCtrls?: pulumi.Input<pulumi.Input<string>[]>;
    adminState?: pulumi.Input<string>;
    allowedSelfAsCnt?: pulumi.Input<string>;
    annotation?: pulumi.Input<string>;
    asNumber?: pulumi.Input<string>;
    ctrls?: pulumi.Input<pulumi.Input<string>[]>;
    description?: pulumi.Input<string>;
    localAsn?: pulumi.Input<string>;
    localAsnPropagate?: pulumi.Input<string>;
    /**
     * @deprecated Deprecated
     */
    logicalNodeProfileDn?: pulumi.Input<string>;
    nameAlias?: pulumi.Input<string>;
    parentDn?: pulumi.Input<string>;
    password?: pulumi.Input<string>;
    peerCtrls?: pulumi.Input<pulumi.Input<string>[]>;
    privateASctrls?: pulumi.Input<pulumi.Input<string>[]>;
    relationBgpRsPeerPfxPol?: pulumi.Input<string>;
    /**
     * Create relation to rtctrlProfile
     */
    relationBgpRsPeerToProfiles?: pulumi.Input<pulumi.Input<inputs.BgpPeerConnectivityProfileRelationBgpRsPeerToProfile>[]>;
    ttl?: pulumi.Input<string>;
    weight?: pulumi.Input<string>;
}
