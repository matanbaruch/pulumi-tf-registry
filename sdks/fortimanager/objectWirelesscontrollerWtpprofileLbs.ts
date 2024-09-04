// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class ObjectWirelesscontrollerWtpprofileLbs extends pulumi.CustomResource {
    /**
     * Get an existing ObjectWirelesscontrollerWtpprofileLbs resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ObjectWirelesscontrollerWtpprofileLbsState, opts?: pulumi.CustomResourceOptions): ObjectWirelesscontrollerWtpprofileLbs {
        return new ObjectWirelesscontrollerWtpprofileLbs(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'fortimanager:index/objectWirelesscontrollerWtpprofileLbs:ObjectWirelesscontrollerWtpprofileLbs';

    /**
     * Returns true if the given object is an instance of ObjectWirelesscontrollerWtpprofileLbs.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ObjectWirelesscontrollerWtpprofileLbs {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ObjectWirelesscontrollerWtpprofileLbs.__pulumiType;
    }

    public readonly adom!: pulumi.Output<string | undefined>;
    public readonly aeroscout!: pulumi.Output<string>;
    public readonly aeroscoutApMac!: pulumi.Output<string>;
    public readonly aeroscoutMmuReport!: pulumi.Output<string>;
    public readonly aeroscoutMu!: pulumi.Output<string>;
    public readonly aeroscoutMuFactor!: pulumi.Output<number>;
    public readonly aeroscoutMuTimeout!: pulumi.Output<number>;
    public readonly aeroscoutServerIp!: pulumi.Output<string>;
    public readonly aeroscoutServerPort!: pulumi.Output<number | undefined>;
    public readonly ekahauBlinkMode!: pulumi.Output<string>;
    public readonly ekahauTag!: pulumi.Output<string>;
    public readonly ercServerIp!: pulumi.Output<string>;
    public readonly ercServerPort!: pulumi.Output<number>;
    public readonly fortipresence!: pulumi.Output<string>;
    public readonly fortipresenceBle!: pulumi.Output<string>;
    public readonly fortipresenceFrequency!: pulumi.Output<number | undefined>;
    public readonly fortipresencePort!: pulumi.Output<number | undefined>;
    public readonly fortipresenceProject!: pulumi.Output<string | undefined>;
    public readonly fortipresenceRogue!: pulumi.Output<string | undefined>;
    public readonly fortipresenceSecrets!: pulumi.Output<string[]>;
    public readonly fortipresenceServer!: pulumi.Output<string | undefined>;
    public readonly fortipresenceServerAddrType!: pulumi.Output<string | undefined>;
    public readonly fortipresenceServerFqdn!: pulumi.Output<string | undefined>;
    public readonly fortipresenceUnassoc!: pulumi.Output<string | undefined>;
    public readonly polestar!: pulumi.Output<string>;
    public readonly polestarAccumulationInterval!: pulumi.Output<number>;
    public readonly polestarAssetAddrgrpList!: pulumi.Output<string | undefined>;
    public readonly polestarAssetUuidList1!: pulumi.Output<string | undefined>;
    public readonly polestarAssetUuidList2!: pulumi.Output<string | undefined>;
    public readonly polestarAssetUuidList3!: pulumi.Output<string | undefined>;
    public readonly polestarAssetUuidList4!: pulumi.Output<string | undefined>;
    public readonly polestarProtocol!: pulumi.Output<string>;
    public readonly polestarReportingInterval!: pulumi.Output<number>;
    public readonly polestarServerFqdn!: pulumi.Output<string>;
    public readonly polestarServerPath!: pulumi.Output<string>;
    public readonly polestarServerPort!: pulumi.Output<number>;
    public readonly polestarServerToken!: pulumi.Output<string | undefined>;
    public readonly scopetype!: pulumi.Output<string | undefined>;
    public readonly stationLocate!: pulumi.Output<string>;
    public readonly wtpProfile!: pulumi.Output<string>;

    /**
     * Create a ObjectWirelesscontrollerWtpprofileLbs resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ObjectWirelesscontrollerWtpprofileLbsArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ObjectWirelesscontrollerWtpprofileLbsArgs | ObjectWirelesscontrollerWtpprofileLbsState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as ObjectWirelesscontrollerWtpprofileLbsState | undefined;
            resourceInputs["adom"] = state ? state.adom : undefined;
            resourceInputs["aeroscout"] = state ? state.aeroscout : undefined;
            resourceInputs["aeroscoutApMac"] = state ? state.aeroscoutApMac : undefined;
            resourceInputs["aeroscoutMmuReport"] = state ? state.aeroscoutMmuReport : undefined;
            resourceInputs["aeroscoutMu"] = state ? state.aeroscoutMu : undefined;
            resourceInputs["aeroscoutMuFactor"] = state ? state.aeroscoutMuFactor : undefined;
            resourceInputs["aeroscoutMuTimeout"] = state ? state.aeroscoutMuTimeout : undefined;
            resourceInputs["aeroscoutServerIp"] = state ? state.aeroscoutServerIp : undefined;
            resourceInputs["aeroscoutServerPort"] = state ? state.aeroscoutServerPort : undefined;
            resourceInputs["ekahauBlinkMode"] = state ? state.ekahauBlinkMode : undefined;
            resourceInputs["ekahauTag"] = state ? state.ekahauTag : undefined;
            resourceInputs["ercServerIp"] = state ? state.ercServerIp : undefined;
            resourceInputs["ercServerPort"] = state ? state.ercServerPort : undefined;
            resourceInputs["fortipresence"] = state ? state.fortipresence : undefined;
            resourceInputs["fortipresenceBle"] = state ? state.fortipresenceBle : undefined;
            resourceInputs["fortipresenceFrequency"] = state ? state.fortipresenceFrequency : undefined;
            resourceInputs["fortipresencePort"] = state ? state.fortipresencePort : undefined;
            resourceInputs["fortipresenceProject"] = state ? state.fortipresenceProject : undefined;
            resourceInputs["fortipresenceRogue"] = state ? state.fortipresenceRogue : undefined;
            resourceInputs["fortipresenceSecrets"] = state ? state.fortipresenceSecrets : undefined;
            resourceInputs["fortipresenceServer"] = state ? state.fortipresenceServer : undefined;
            resourceInputs["fortipresenceServerAddrType"] = state ? state.fortipresenceServerAddrType : undefined;
            resourceInputs["fortipresenceServerFqdn"] = state ? state.fortipresenceServerFqdn : undefined;
            resourceInputs["fortipresenceUnassoc"] = state ? state.fortipresenceUnassoc : undefined;
            resourceInputs["polestar"] = state ? state.polestar : undefined;
            resourceInputs["polestarAccumulationInterval"] = state ? state.polestarAccumulationInterval : undefined;
            resourceInputs["polestarAssetAddrgrpList"] = state ? state.polestarAssetAddrgrpList : undefined;
            resourceInputs["polestarAssetUuidList1"] = state ? state.polestarAssetUuidList1 : undefined;
            resourceInputs["polestarAssetUuidList2"] = state ? state.polestarAssetUuidList2 : undefined;
            resourceInputs["polestarAssetUuidList3"] = state ? state.polestarAssetUuidList3 : undefined;
            resourceInputs["polestarAssetUuidList4"] = state ? state.polestarAssetUuidList4 : undefined;
            resourceInputs["polestarProtocol"] = state ? state.polestarProtocol : undefined;
            resourceInputs["polestarReportingInterval"] = state ? state.polestarReportingInterval : undefined;
            resourceInputs["polestarServerFqdn"] = state ? state.polestarServerFqdn : undefined;
            resourceInputs["polestarServerPath"] = state ? state.polestarServerPath : undefined;
            resourceInputs["polestarServerPort"] = state ? state.polestarServerPort : undefined;
            resourceInputs["polestarServerToken"] = state ? state.polestarServerToken : undefined;
            resourceInputs["scopetype"] = state ? state.scopetype : undefined;
            resourceInputs["stationLocate"] = state ? state.stationLocate : undefined;
            resourceInputs["wtpProfile"] = state ? state.wtpProfile : undefined;
        } else {
            const args = argsOrState as ObjectWirelesscontrollerWtpprofileLbsArgs | undefined;
            if ((!args || args.wtpProfile === undefined) && !opts.urn) {
                throw new Error("Missing required property 'wtpProfile'");
            }
            resourceInputs["adom"] = args ? args.adom : undefined;
            resourceInputs["aeroscout"] = args ? args.aeroscout : undefined;
            resourceInputs["aeroscoutApMac"] = args ? args.aeroscoutApMac : undefined;
            resourceInputs["aeroscoutMmuReport"] = args ? args.aeroscoutMmuReport : undefined;
            resourceInputs["aeroscoutMu"] = args ? args.aeroscoutMu : undefined;
            resourceInputs["aeroscoutMuFactor"] = args ? args.aeroscoutMuFactor : undefined;
            resourceInputs["aeroscoutMuTimeout"] = args ? args.aeroscoutMuTimeout : undefined;
            resourceInputs["aeroscoutServerIp"] = args ? args.aeroscoutServerIp : undefined;
            resourceInputs["aeroscoutServerPort"] = args ? args.aeroscoutServerPort : undefined;
            resourceInputs["ekahauBlinkMode"] = args ? args.ekahauBlinkMode : undefined;
            resourceInputs["ekahauTag"] = args ? args.ekahauTag : undefined;
            resourceInputs["ercServerIp"] = args ? args.ercServerIp : undefined;
            resourceInputs["ercServerPort"] = args ? args.ercServerPort : undefined;
            resourceInputs["fortipresence"] = args ? args.fortipresence : undefined;
            resourceInputs["fortipresenceBle"] = args ? args.fortipresenceBle : undefined;
            resourceInputs["fortipresenceFrequency"] = args ? args.fortipresenceFrequency : undefined;
            resourceInputs["fortipresencePort"] = args ? args.fortipresencePort : undefined;
            resourceInputs["fortipresenceProject"] = args ? args.fortipresenceProject : undefined;
            resourceInputs["fortipresenceRogue"] = args ? args.fortipresenceRogue : undefined;
            resourceInputs["fortipresenceSecrets"] = args?.fortipresenceSecrets ? pulumi.secret(args.fortipresenceSecrets) : undefined;
            resourceInputs["fortipresenceServer"] = args ? args.fortipresenceServer : undefined;
            resourceInputs["fortipresenceServerAddrType"] = args ? args.fortipresenceServerAddrType : undefined;
            resourceInputs["fortipresenceServerFqdn"] = args ? args.fortipresenceServerFqdn : undefined;
            resourceInputs["fortipresenceUnassoc"] = args ? args.fortipresenceUnassoc : undefined;
            resourceInputs["polestar"] = args ? args.polestar : undefined;
            resourceInputs["polestarAccumulationInterval"] = args ? args.polestarAccumulationInterval : undefined;
            resourceInputs["polestarAssetAddrgrpList"] = args ? args.polestarAssetAddrgrpList : undefined;
            resourceInputs["polestarAssetUuidList1"] = args ? args.polestarAssetUuidList1 : undefined;
            resourceInputs["polestarAssetUuidList2"] = args ? args.polestarAssetUuidList2 : undefined;
            resourceInputs["polestarAssetUuidList3"] = args ? args.polestarAssetUuidList3 : undefined;
            resourceInputs["polestarAssetUuidList4"] = args ? args.polestarAssetUuidList4 : undefined;
            resourceInputs["polestarProtocol"] = args ? args.polestarProtocol : undefined;
            resourceInputs["polestarReportingInterval"] = args ? args.polestarReportingInterval : undefined;
            resourceInputs["polestarServerFqdn"] = args ? args.polestarServerFqdn : undefined;
            resourceInputs["polestarServerPath"] = args ? args.polestarServerPath : undefined;
            resourceInputs["polestarServerPort"] = args ? args.polestarServerPort : undefined;
            resourceInputs["polestarServerToken"] = args ? args.polestarServerToken : undefined;
            resourceInputs["scopetype"] = args ? args.scopetype : undefined;
            resourceInputs["stationLocate"] = args ? args.stationLocate : undefined;
            resourceInputs["wtpProfile"] = args ? args.wtpProfile : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const secretOpts = { additionalSecretOutputs: ["fortipresenceSecrets"] };
        opts = pulumi.mergeOptions(opts, secretOpts);
        super(ObjectWirelesscontrollerWtpprofileLbs.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering ObjectWirelesscontrollerWtpprofileLbs resources.
 */
export interface ObjectWirelesscontrollerWtpprofileLbsState {
    adom?: pulumi.Input<string>;
    aeroscout?: pulumi.Input<string>;
    aeroscoutApMac?: pulumi.Input<string>;
    aeroscoutMmuReport?: pulumi.Input<string>;
    aeroscoutMu?: pulumi.Input<string>;
    aeroscoutMuFactor?: pulumi.Input<number>;
    aeroscoutMuTimeout?: pulumi.Input<number>;
    aeroscoutServerIp?: pulumi.Input<string>;
    aeroscoutServerPort?: pulumi.Input<number>;
    ekahauBlinkMode?: pulumi.Input<string>;
    ekahauTag?: pulumi.Input<string>;
    ercServerIp?: pulumi.Input<string>;
    ercServerPort?: pulumi.Input<number>;
    fortipresence?: pulumi.Input<string>;
    fortipresenceBle?: pulumi.Input<string>;
    fortipresenceFrequency?: pulumi.Input<number>;
    fortipresencePort?: pulumi.Input<number>;
    fortipresenceProject?: pulumi.Input<string>;
    fortipresenceRogue?: pulumi.Input<string>;
    fortipresenceSecrets?: pulumi.Input<pulumi.Input<string>[]>;
    fortipresenceServer?: pulumi.Input<string>;
    fortipresenceServerAddrType?: pulumi.Input<string>;
    fortipresenceServerFqdn?: pulumi.Input<string>;
    fortipresenceUnassoc?: pulumi.Input<string>;
    polestar?: pulumi.Input<string>;
    polestarAccumulationInterval?: pulumi.Input<number>;
    polestarAssetAddrgrpList?: pulumi.Input<string>;
    polestarAssetUuidList1?: pulumi.Input<string>;
    polestarAssetUuidList2?: pulumi.Input<string>;
    polestarAssetUuidList3?: pulumi.Input<string>;
    polestarAssetUuidList4?: pulumi.Input<string>;
    polestarProtocol?: pulumi.Input<string>;
    polestarReportingInterval?: pulumi.Input<number>;
    polestarServerFqdn?: pulumi.Input<string>;
    polestarServerPath?: pulumi.Input<string>;
    polestarServerPort?: pulumi.Input<number>;
    polestarServerToken?: pulumi.Input<string>;
    scopetype?: pulumi.Input<string>;
    stationLocate?: pulumi.Input<string>;
    wtpProfile?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a ObjectWirelesscontrollerWtpprofileLbs resource.
 */
export interface ObjectWirelesscontrollerWtpprofileLbsArgs {
    adom?: pulumi.Input<string>;
    aeroscout?: pulumi.Input<string>;
    aeroscoutApMac?: pulumi.Input<string>;
    aeroscoutMmuReport?: pulumi.Input<string>;
    aeroscoutMu?: pulumi.Input<string>;
    aeroscoutMuFactor?: pulumi.Input<number>;
    aeroscoutMuTimeout?: pulumi.Input<number>;
    aeroscoutServerIp?: pulumi.Input<string>;
    aeroscoutServerPort?: pulumi.Input<number>;
    ekahauBlinkMode?: pulumi.Input<string>;
    ekahauTag?: pulumi.Input<string>;
    ercServerIp?: pulumi.Input<string>;
    ercServerPort?: pulumi.Input<number>;
    fortipresence?: pulumi.Input<string>;
    fortipresenceBle?: pulumi.Input<string>;
    fortipresenceFrequency?: pulumi.Input<number>;
    fortipresencePort?: pulumi.Input<number>;
    fortipresenceProject?: pulumi.Input<string>;
    fortipresenceRogue?: pulumi.Input<string>;
    fortipresenceSecrets?: pulumi.Input<pulumi.Input<string>[]>;
    fortipresenceServer?: pulumi.Input<string>;
    fortipresenceServerAddrType?: pulumi.Input<string>;
    fortipresenceServerFqdn?: pulumi.Input<string>;
    fortipresenceUnassoc?: pulumi.Input<string>;
    polestar?: pulumi.Input<string>;
    polestarAccumulationInterval?: pulumi.Input<number>;
    polestarAssetAddrgrpList?: pulumi.Input<string>;
    polestarAssetUuidList1?: pulumi.Input<string>;
    polestarAssetUuidList2?: pulumi.Input<string>;
    polestarAssetUuidList3?: pulumi.Input<string>;
    polestarAssetUuidList4?: pulumi.Input<string>;
    polestarProtocol?: pulumi.Input<string>;
    polestarReportingInterval?: pulumi.Input<number>;
    polestarServerFqdn?: pulumi.Input<string>;
    polestarServerPath?: pulumi.Input<string>;
    polestarServerPort?: pulumi.Input<number>;
    polestarServerToken?: pulumi.Input<string>;
    scopetype?: pulumi.Input<string>;
    stationLocate?: pulumi.Input<string>;
    wtpProfile: pulumi.Input<string>;
}
