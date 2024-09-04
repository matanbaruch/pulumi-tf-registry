// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class VpnSslSettingsAuthenticationrule extends pulumi.CustomResource {
    /**
     * Get an existing VpnSslSettingsAuthenticationrule resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: VpnSslSettingsAuthenticationruleState, opts?: pulumi.CustomResourceOptions): VpnSslSettingsAuthenticationrule {
        return new VpnSslSettingsAuthenticationrule(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'fmgdevice:index/vpnSslSettingsAuthenticationrule:VpnSslSettingsAuthenticationrule';

    /**
     * Returns true if the given object is an instance of VpnSslSettingsAuthenticationrule.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is VpnSslSettingsAuthenticationrule {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === VpnSslSettingsAuthenticationrule.__pulumiType;
    }

    public readonly auth!: pulumi.Output<string>;
    public readonly cipher!: pulumi.Output<string>;
    public readonly clientCert!: pulumi.Output<string>;
    public readonly deviceName!: pulumi.Output<string>;
    public readonly deviceVdom!: pulumi.Output<string>;
    public readonly fosid!: pulumi.Output<number | undefined>;
    public readonly groups!: pulumi.Output<string[]>;
    public readonly portals!: pulumi.Output<string[]>;
    public readonly realms!: pulumi.Output<string[]>;
    public readonly sourceAddress6Negate!: pulumi.Output<string>;
    public readonly sourceAddress6s!: pulumi.Output<string[]>;
    public readonly sourceAddressNegate!: pulumi.Output<string>;
    public readonly sourceAddresses!: pulumi.Output<string[]>;
    public readonly sourceInterfaces!: pulumi.Output<string[]>;
    public readonly userPeers!: pulumi.Output<string[]>;
    public readonly users!: pulumi.Output<string[]>;

    /**
     * Create a VpnSslSettingsAuthenticationrule resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: VpnSslSettingsAuthenticationruleArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: VpnSslSettingsAuthenticationruleArgs | VpnSslSettingsAuthenticationruleState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as VpnSslSettingsAuthenticationruleState | undefined;
            resourceInputs["auth"] = state ? state.auth : undefined;
            resourceInputs["cipher"] = state ? state.cipher : undefined;
            resourceInputs["clientCert"] = state ? state.clientCert : undefined;
            resourceInputs["deviceName"] = state ? state.deviceName : undefined;
            resourceInputs["deviceVdom"] = state ? state.deviceVdom : undefined;
            resourceInputs["fosid"] = state ? state.fosid : undefined;
            resourceInputs["groups"] = state ? state.groups : undefined;
            resourceInputs["portals"] = state ? state.portals : undefined;
            resourceInputs["realms"] = state ? state.realms : undefined;
            resourceInputs["sourceAddress6Negate"] = state ? state.sourceAddress6Negate : undefined;
            resourceInputs["sourceAddress6s"] = state ? state.sourceAddress6s : undefined;
            resourceInputs["sourceAddressNegate"] = state ? state.sourceAddressNegate : undefined;
            resourceInputs["sourceAddresses"] = state ? state.sourceAddresses : undefined;
            resourceInputs["sourceInterfaces"] = state ? state.sourceInterfaces : undefined;
            resourceInputs["userPeers"] = state ? state.userPeers : undefined;
            resourceInputs["users"] = state ? state.users : undefined;
        } else {
            const args = argsOrState as VpnSslSettingsAuthenticationruleArgs | undefined;
            resourceInputs["auth"] = args ? args.auth : undefined;
            resourceInputs["cipher"] = args ? args.cipher : undefined;
            resourceInputs["clientCert"] = args ? args.clientCert : undefined;
            resourceInputs["deviceName"] = args ? args.deviceName : undefined;
            resourceInputs["deviceVdom"] = args ? args.deviceVdom : undefined;
            resourceInputs["fosid"] = args ? args.fosid : undefined;
            resourceInputs["groups"] = args ? args.groups : undefined;
            resourceInputs["portals"] = args ? args.portals : undefined;
            resourceInputs["realms"] = args ? args.realms : undefined;
            resourceInputs["sourceAddress6Negate"] = args ? args.sourceAddress6Negate : undefined;
            resourceInputs["sourceAddress6s"] = args ? args.sourceAddress6s : undefined;
            resourceInputs["sourceAddressNegate"] = args ? args.sourceAddressNegate : undefined;
            resourceInputs["sourceAddresses"] = args ? args.sourceAddresses : undefined;
            resourceInputs["sourceInterfaces"] = args ? args.sourceInterfaces : undefined;
            resourceInputs["userPeers"] = args ? args.userPeers : undefined;
            resourceInputs["users"] = args ? args.users : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(VpnSslSettingsAuthenticationrule.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering VpnSslSettingsAuthenticationrule resources.
 */
export interface VpnSslSettingsAuthenticationruleState {
    auth?: pulumi.Input<string>;
    cipher?: pulumi.Input<string>;
    clientCert?: pulumi.Input<string>;
    deviceName?: pulumi.Input<string>;
    deviceVdom?: pulumi.Input<string>;
    fosid?: pulumi.Input<number>;
    groups?: pulumi.Input<pulumi.Input<string>[]>;
    portals?: pulumi.Input<pulumi.Input<string>[]>;
    realms?: pulumi.Input<pulumi.Input<string>[]>;
    sourceAddress6Negate?: pulumi.Input<string>;
    sourceAddress6s?: pulumi.Input<pulumi.Input<string>[]>;
    sourceAddressNegate?: pulumi.Input<string>;
    sourceAddresses?: pulumi.Input<pulumi.Input<string>[]>;
    sourceInterfaces?: pulumi.Input<pulumi.Input<string>[]>;
    userPeers?: pulumi.Input<pulumi.Input<string>[]>;
    users?: pulumi.Input<pulumi.Input<string>[]>;
}

/**
 * The set of arguments for constructing a VpnSslSettingsAuthenticationrule resource.
 */
export interface VpnSslSettingsAuthenticationruleArgs {
    auth?: pulumi.Input<string>;
    cipher?: pulumi.Input<string>;
    clientCert?: pulumi.Input<string>;
    deviceName?: pulumi.Input<string>;
    deviceVdom?: pulumi.Input<string>;
    fosid?: pulumi.Input<number>;
    groups?: pulumi.Input<pulumi.Input<string>[]>;
    portals?: pulumi.Input<pulumi.Input<string>[]>;
    realms?: pulumi.Input<pulumi.Input<string>[]>;
    sourceAddress6Negate?: pulumi.Input<string>;
    sourceAddress6s?: pulumi.Input<pulumi.Input<string>[]>;
    sourceAddressNegate?: pulumi.Input<string>;
    sourceAddresses?: pulumi.Input<pulumi.Input<string>[]>;
    sourceInterfaces?: pulumi.Input<pulumi.Input<string>[]>;
    userPeers?: pulumi.Input<pulumi.Input<string>[]>;
    users?: pulumi.Input<pulumi.Input<string>[]>;
}
