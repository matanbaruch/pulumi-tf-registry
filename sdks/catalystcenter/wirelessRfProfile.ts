// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class WirelessRfProfile extends pulumi.CustomResource {
    /**
     * Get an existing WirelessRfProfile resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: WirelessRfProfileState, opts?: pulumi.CustomResourceOptions): WirelessRfProfile {
        return new WirelessRfProfile(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'catalystcenter:index/wirelessRfProfile:WirelessRfProfile';

    /**
     * Returns true if the given object is an instance of WirelessRfProfile.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is WirelessRfProfile {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === WirelessRfProfile.__pulumiType;
    }

    /**
     * Channel Width
     */
    public readonly channelWidth!: pulumi.Output<string>;
    /**
     * is Default Rf Profile
     */
    public readonly defaultRfProfile!: pulumi.Output<boolean>;
    /**
     * Enable Brown Field
     */
    public readonly enableBrownField!: pulumi.Output<boolean>;
    /**
     * Enable Custom
     */
    public readonly enableCustom!: pulumi.Output<boolean>;
    /**
     * Enable Radio Type A
     */
    public readonly enableRadioTypeA!: pulumi.Output<boolean>;
    /**
     * Enable Radio Type B
     */
    public readonly enableRadioTypeB!: pulumi.Output<boolean>;
    /**
     * Enable Radio Type C (6GHz)
     */
    public readonly enableRadioTypeC!: pulumi.Output<boolean | undefined>;
    /**
     * RF Profile Name
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * Radio TypeA Properties - Data Rates
     */
    public readonly radioTypeADataRates!: pulumi.Output<string | undefined>;
    /**
     * Radio TypeA Properties - Mandatory Data Rates
     */
    public readonly radioTypeAMandatoryDataRates!: pulumi.Output<string | undefined>;
    /**
     * Radio TypeA Properties - Max Power Level
     */
    public readonly radioTypeAMaxPowerLevel!: pulumi.Output<number | undefined>;
    /**
     * Radio TypeA Properties - Min Power Level
     */
    public readonly radioTypeAMinPowerLevel!: pulumi.Output<number | undefined>;
    /**
     * Radio TypeA Properties - Parent Profile
     */
    public readonly radioTypeAParentProfile!: pulumi.Output<string | undefined>;
    /**
     * Radio TypeA Properties - Power Threshold V1
     */
    public readonly radioTypeAPowerThresholdV1!: pulumi.Output<number | undefined>;
    /**
     * Radio TypeA Properties - Radio Channels
     */
    public readonly radioTypeARadioChannels!: pulumi.Output<string | undefined>;
    /**
     * Radio TypeA Properties - Rx Sop Threshold
     */
    public readonly radioTypeARxSopThreshold!: pulumi.Output<string | undefined>;
    /**
     * Radio TypeB Properties - Data Rates
     */
    public readonly radioTypeBDataRates!: pulumi.Output<string | undefined>;
    /**
     * Radio TypeB Properties - Mandatory Data Rates
     */
    public readonly radioTypeBMandatoryDataRates!: pulumi.Output<string | undefined>;
    /**
     * Radio TypeB Properties - Max Power Level
     */
    public readonly radioTypeBMaxPowerLevel!: pulumi.Output<number | undefined>;
    /**
     * Radio TypeB Properties - Min Power Level
     */
    public readonly radioTypeBMinPowerLevel!: pulumi.Output<number | undefined>;
    /**
     * Radio TypeB Properties - Parent Profile
     */
    public readonly radioTypeBParentProfile!: pulumi.Output<string | undefined>;
    /**
     * Radio TypeB Properties - Power Threshold V1
     */
    public readonly radioTypeBPowerThresholdV1!: pulumi.Output<number | undefined>;
    /**
     * Radio TypeB Properties - Radio Channels
     */
    public readonly radioTypeBRadioChannels!: pulumi.Output<string | undefined>;
    /**
     * Radio TypeB Properties - Rx Sop Threshold
     */
    public readonly radioTypeBRxSopThreshold!: pulumi.Output<string | undefined>;
    /**
     * Radio TypeC Properties - Data Rates
     */
    public readonly radioTypeCDataRates!: pulumi.Output<string | undefined>;
    /**
     * Radio TypeC Properties - Mandatory Data Rates
     */
    public readonly radioTypeCMandatoryDataRates!: pulumi.Output<string | undefined>;
    /**
     * Radio TypeC Properties - Max Power Level
     */
    public readonly radioTypeCMaxPowerLevel!: pulumi.Output<number | undefined>;
    /**
     * Radio TypeC Properties - Min Power Level
     */
    public readonly radioTypeCMinPowerLevel!: pulumi.Output<number | undefined>;
    /**
     * Radio TypeC Properties - Parent Profile
     */
    public readonly radioTypeCParentProfile!: pulumi.Output<string | undefined>;
    /**
     * Radio TypeC Properties - Power Threshold V1
     */
    public readonly radioTypeCPowerThresholdV1!: pulumi.Output<number | undefined>;
    /**
     * Radio TypeC Properties - Radio Channels
     */
    public readonly radioTypeCRadioChannels!: pulumi.Output<string | undefined>;
    /**
     * Radio TypeC Properties - Rx Sop Threshold
     */
    public readonly radioTypeCRxSopThreshold!: pulumi.Output<string | undefined>;

    /**
     * Create a WirelessRfProfile resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: WirelessRfProfileArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: WirelessRfProfileArgs | WirelessRfProfileState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as WirelessRfProfileState | undefined;
            resourceInputs["channelWidth"] = state ? state.channelWidth : undefined;
            resourceInputs["defaultRfProfile"] = state ? state.defaultRfProfile : undefined;
            resourceInputs["enableBrownField"] = state ? state.enableBrownField : undefined;
            resourceInputs["enableCustom"] = state ? state.enableCustom : undefined;
            resourceInputs["enableRadioTypeA"] = state ? state.enableRadioTypeA : undefined;
            resourceInputs["enableRadioTypeB"] = state ? state.enableRadioTypeB : undefined;
            resourceInputs["enableRadioTypeC"] = state ? state.enableRadioTypeC : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["radioTypeADataRates"] = state ? state.radioTypeADataRates : undefined;
            resourceInputs["radioTypeAMandatoryDataRates"] = state ? state.radioTypeAMandatoryDataRates : undefined;
            resourceInputs["radioTypeAMaxPowerLevel"] = state ? state.radioTypeAMaxPowerLevel : undefined;
            resourceInputs["radioTypeAMinPowerLevel"] = state ? state.radioTypeAMinPowerLevel : undefined;
            resourceInputs["radioTypeAParentProfile"] = state ? state.radioTypeAParentProfile : undefined;
            resourceInputs["radioTypeAPowerThresholdV1"] = state ? state.radioTypeAPowerThresholdV1 : undefined;
            resourceInputs["radioTypeARadioChannels"] = state ? state.radioTypeARadioChannels : undefined;
            resourceInputs["radioTypeARxSopThreshold"] = state ? state.radioTypeARxSopThreshold : undefined;
            resourceInputs["radioTypeBDataRates"] = state ? state.radioTypeBDataRates : undefined;
            resourceInputs["radioTypeBMandatoryDataRates"] = state ? state.radioTypeBMandatoryDataRates : undefined;
            resourceInputs["radioTypeBMaxPowerLevel"] = state ? state.radioTypeBMaxPowerLevel : undefined;
            resourceInputs["radioTypeBMinPowerLevel"] = state ? state.radioTypeBMinPowerLevel : undefined;
            resourceInputs["radioTypeBParentProfile"] = state ? state.radioTypeBParentProfile : undefined;
            resourceInputs["radioTypeBPowerThresholdV1"] = state ? state.radioTypeBPowerThresholdV1 : undefined;
            resourceInputs["radioTypeBRadioChannels"] = state ? state.radioTypeBRadioChannels : undefined;
            resourceInputs["radioTypeBRxSopThreshold"] = state ? state.radioTypeBRxSopThreshold : undefined;
            resourceInputs["radioTypeCDataRates"] = state ? state.radioTypeCDataRates : undefined;
            resourceInputs["radioTypeCMandatoryDataRates"] = state ? state.radioTypeCMandatoryDataRates : undefined;
            resourceInputs["radioTypeCMaxPowerLevel"] = state ? state.radioTypeCMaxPowerLevel : undefined;
            resourceInputs["radioTypeCMinPowerLevel"] = state ? state.radioTypeCMinPowerLevel : undefined;
            resourceInputs["radioTypeCParentProfile"] = state ? state.radioTypeCParentProfile : undefined;
            resourceInputs["radioTypeCPowerThresholdV1"] = state ? state.radioTypeCPowerThresholdV1 : undefined;
            resourceInputs["radioTypeCRadioChannels"] = state ? state.radioTypeCRadioChannels : undefined;
            resourceInputs["radioTypeCRxSopThreshold"] = state ? state.radioTypeCRxSopThreshold : undefined;
        } else {
            const args = argsOrState as WirelessRfProfileArgs | undefined;
            if ((!args || args.channelWidth === undefined) && !opts.urn) {
                throw new Error("Missing required property 'channelWidth'");
            }
            if ((!args || args.defaultRfProfile === undefined) && !opts.urn) {
                throw new Error("Missing required property 'defaultRfProfile'");
            }
            if ((!args || args.enableBrownField === undefined) && !opts.urn) {
                throw new Error("Missing required property 'enableBrownField'");
            }
            if ((!args || args.enableCustom === undefined) && !opts.urn) {
                throw new Error("Missing required property 'enableCustom'");
            }
            if ((!args || args.enableRadioTypeA === undefined) && !opts.urn) {
                throw new Error("Missing required property 'enableRadioTypeA'");
            }
            if ((!args || args.enableRadioTypeB === undefined) && !opts.urn) {
                throw new Error("Missing required property 'enableRadioTypeB'");
            }
            resourceInputs["channelWidth"] = args ? args.channelWidth : undefined;
            resourceInputs["defaultRfProfile"] = args ? args.defaultRfProfile : undefined;
            resourceInputs["enableBrownField"] = args ? args.enableBrownField : undefined;
            resourceInputs["enableCustom"] = args ? args.enableCustom : undefined;
            resourceInputs["enableRadioTypeA"] = args ? args.enableRadioTypeA : undefined;
            resourceInputs["enableRadioTypeB"] = args ? args.enableRadioTypeB : undefined;
            resourceInputs["enableRadioTypeC"] = args ? args.enableRadioTypeC : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["radioTypeADataRates"] = args ? args.radioTypeADataRates : undefined;
            resourceInputs["radioTypeAMandatoryDataRates"] = args ? args.radioTypeAMandatoryDataRates : undefined;
            resourceInputs["radioTypeAMaxPowerLevel"] = args ? args.radioTypeAMaxPowerLevel : undefined;
            resourceInputs["radioTypeAMinPowerLevel"] = args ? args.radioTypeAMinPowerLevel : undefined;
            resourceInputs["radioTypeAParentProfile"] = args ? args.radioTypeAParentProfile : undefined;
            resourceInputs["radioTypeAPowerThresholdV1"] = args ? args.radioTypeAPowerThresholdV1 : undefined;
            resourceInputs["radioTypeARadioChannels"] = args ? args.radioTypeARadioChannels : undefined;
            resourceInputs["radioTypeARxSopThreshold"] = args ? args.radioTypeARxSopThreshold : undefined;
            resourceInputs["radioTypeBDataRates"] = args ? args.radioTypeBDataRates : undefined;
            resourceInputs["radioTypeBMandatoryDataRates"] = args ? args.radioTypeBMandatoryDataRates : undefined;
            resourceInputs["radioTypeBMaxPowerLevel"] = args ? args.radioTypeBMaxPowerLevel : undefined;
            resourceInputs["radioTypeBMinPowerLevel"] = args ? args.radioTypeBMinPowerLevel : undefined;
            resourceInputs["radioTypeBParentProfile"] = args ? args.radioTypeBParentProfile : undefined;
            resourceInputs["radioTypeBPowerThresholdV1"] = args ? args.radioTypeBPowerThresholdV1 : undefined;
            resourceInputs["radioTypeBRadioChannels"] = args ? args.radioTypeBRadioChannels : undefined;
            resourceInputs["radioTypeBRxSopThreshold"] = args ? args.radioTypeBRxSopThreshold : undefined;
            resourceInputs["radioTypeCDataRates"] = args ? args.radioTypeCDataRates : undefined;
            resourceInputs["radioTypeCMandatoryDataRates"] = args ? args.radioTypeCMandatoryDataRates : undefined;
            resourceInputs["radioTypeCMaxPowerLevel"] = args ? args.radioTypeCMaxPowerLevel : undefined;
            resourceInputs["radioTypeCMinPowerLevel"] = args ? args.radioTypeCMinPowerLevel : undefined;
            resourceInputs["radioTypeCParentProfile"] = args ? args.radioTypeCParentProfile : undefined;
            resourceInputs["radioTypeCPowerThresholdV1"] = args ? args.radioTypeCPowerThresholdV1 : undefined;
            resourceInputs["radioTypeCRadioChannels"] = args ? args.radioTypeCRadioChannels : undefined;
            resourceInputs["radioTypeCRxSopThreshold"] = args ? args.radioTypeCRxSopThreshold : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(WirelessRfProfile.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering WirelessRfProfile resources.
 */
export interface WirelessRfProfileState {
    /**
     * Channel Width
     */
    channelWidth?: pulumi.Input<string>;
    /**
     * is Default Rf Profile
     */
    defaultRfProfile?: pulumi.Input<boolean>;
    /**
     * Enable Brown Field
     */
    enableBrownField?: pulumi.Input<boolean>;
    /**
     * Enable Custom
     */
    enableCustom?: pulumi.Input<boolean>;
    /**
     * Enable Radio Type A
     */
    enableRadioTypeA?: pulumi.Input<boolean>;
    /**
     * Enable Radio Type B
     */
    enableRadioTypeB?: pulumi.Input<boolean>;
    /**
     * Enable Radio Type C (6GHz)
     */
    enableRadioTypeC?: pulumi.Input<boolean>;
    /**
     * RF Profile Name
     */
    name?: pulumi.Input<string>;
    /**
     * Radio TypeA Properties - Data Rates
     */
    radioTypeADataRates?: pulumi.Input<string>;
    /**
     * Radio TypeA Properties - Mandatory Data Rates
     */
    radioTypeAMandatoryDataRates?: pulumi.Input<string>;
    /**
     * Radio TypeA Properties - Max Power Level
     */
    radioTypeAMaxPowerLevel?: pulumi.Input<number>;
    /**
     * Radio TypeA Properties - Min Power Level
     */
    radioTypeAMinPowerLevel?: pulumi.Input<number>;
    /**
     * Radio TypeA Properties - Parent Profile
     */
    radioTypeAParentProfile?: pulumi.Input<string>;
    /**
     * Radio TypeA Properties - Power Threshold V1
     */
    radioTypeAPowerThresholdV1?: pulumi.Input<number>;
    /**
     * Radio TypeA Properties - Radio Channels
     */
    radioTypeARadioChannels?: pulumi.Input<string>;
    /**
     * Radio TypeA Properties - Rx Sop Threshold
     */
    radioTypeARxSopThreshold?: pulumi.Input<string>;
    /**
     * Radio TypeB Properties - Data Rates
     */
    radioTypeBDataRates?: pulumi.Input<string>;
    /**
     * Radio TypeB Properties - Mandatory Data Rates
     */
    radioTypeBMandatoryDataRates?: pulumi.Input<string>;
    /**
     * Radio TypeB Properties - Max Power Level
     */
    radioTypeBMaxPowerLevel?: pulumi.Input<number>;
    /**
     * Radio TypeB Properties - Min Power Level
     */
    radioTypeBMinPowerLevel?: pulumi.Input<number>;
    /**
     * Radio TypeB Properties - Parent Profile
     */
    radioTypeBParentProfile?: pulumi.Input<string>;
    /**
     * Radio TypeB Properties - Power Threshold V1
     */
    radioTypeBPowerThresholdV1?: pulumi.Input<number>;
    /**
     * Radio TypeB Properties - Radio Channels
     */
    radioTypeBRadioChannels?: pulumi.Input<string>;
    /**
     * Radio TypeB Properties - Rx Sop Threshold
     */
    radioTypeBRxSopThreshold?: pulumi.Input<string>;
    /**
     * Radio TypeC Properties - Data Rates
     */
    radioTypeCDataRates?: pulumi.Input<string>;
    /**
     * Radio TypeC Properties - Mandatory Data Rates
     */
    radioTypeCMandatoryDataRates?: pulumi.Input<string>;
    /**
     * Radio TypeC Properties - Max Power Level
     */
    radioTypeCMaxPowerLevel?: pulumi.Input<number>;
    /**
     * Radio TypeC Properties - Min Power Level
     */
    radioTypeCMinPowerLevel?: pulumi.Input<number>;
    /**
     * Radio TypeC Properties - Parent Profile
     */
    radioTypeCParentProfile?: pulumi.Input<string>;
    /**
     * Radio TypeC Properties - Power Threshold V1
     */
    radioTypeCPowerThresholdV1?: pulumi.Input<number>;
    /**
     * Radio TypeC Properties - Radio Channels
     */
    radioTypeCRadioChannels?: pulumi.Input<string>;
    /**
     * Radio TypeC Properties - Rx Sop Threshold
     */
    radioTypeCRxSopThreshold?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a WirelessRfProfile resource.
 */
export interface WirelessRfProfileArgs {
    /**
     * Channel Width
     */
    channelWidth: pulumi.Input<string>;
    /**
     * is Default Rf Profile
     */
    defaultRfProfile: pulumi.Input<boolean>;
    /**
     * Enable Brown Field
     */
    enableBrownField: pulumi.Input<boolean>;
    /**
     * Enable Custom
     */
    enableCustom: pulumi.Input<boolean>;
    /**
     * Enable Radio Type A
     */
    enableRadioTypeA: pulumi.Input<boolean>;
    /**
     * Enable Radio Type B
     */
    enableRadioTypeB: pulumi.Input<boolean>;
    /**
     * Enable Radio Type C (6GHz)
     */
    enableRadioTypeC?: pulumi.Input<boolean>;
    /**
     * RF Profile Name
     */
    name?: pulumi.Input<string>;
    /**
     * Radio TypeA Properties - Data Rates
     */
    radioTypeADataRates?: pulumi.Input<string>;
    /**
     * Radio TypeA Properties - Mandatory Data Rates
     */
    radioTypeAMandatoryDataRates?: pulumi.Input<string>;
    /**
     * Radio TypeA Properties - Max Power Level
     */
    radioTypeAMaxPowerLevel?: pulumi.Input<number>;
    /**
     * Radio TypeA Properties - Min Power Level
     */
    radioTypeAMinPowerLevel?: pulumi.Input<number>;
    /**
     * Radio TypeA Properties - Parent Profile
     */
    radioTypeAParentProfile?: pulumi.Input<string>;
    /**
     * Radio TypeA Properties - Power Threshold V1
     */
    radioTypeAPowerThresholdV1?: pulumi.Input<number>;
    /**
     * Radio TypeA Properties - Radio Channels
     */
    radioTypeARadioChannels?: pulumi.Input<string>;
    /**
     * Radio TypeA Properties - Rx Sop Threshold
     */
    radioTypeARxSopThreshold?: pulumi.Input<string>;
    /**
     * Radio TypeB Properties - Data Rates
     */
    radioTypeBDataRates?: pulumi.Input<string>;
    /**
     * Radio TypeB Properties - Mandatory Data Rates
     */
    radioTypeBMandatoryDataRates?: pulumi.Input<string>;
    /**
     * Radio TypeB Properties - Max Power Level
     */
    radioTypeBMaxPowerLevel?: pulumi.Input<number>;
    /**
     * Radio TypeB Properties - Min Power Level
     */
    radioTypeBMinPowerLevel?: pulumi.Input<number>;
    /**
     * Radio TypeB Properties - Parent Profile
     */
    radioTypeBParentProfile?: pulumi.Input<string>;
    /**
     * Radio TypeB Properties - Power Threshold V1
     */
    radioTypeBPowerThresholdV1?: pulumi.Input<number>;
    /**
     * Radio TypeB Properties - Radio Channels
     */
    radioTypeBRadioChannels?: pulumi.Input<string>;
    /**
     * Radio TypeB Properties - Rx Sop Threshold
     */
    radioTypeBRxSopThreshold?: pulumi.Input<string>;
    /**
     * Radio TypeC Properties - Data Rates
     */
    radioTypeCDataRates?: pulumi.Input<string>;
    /**
     * Radio TypeC Properties - Mandatory Data Rates
     */
    radioTypeCMandatoryDataRates?: pulumi.Input<string>;
    /**
     * Radio TypeC Properties - Max Power Level
     */
    radioTypeCMaxPowerLevel?: pulumi.Input<number>;
    /**
     * Radio TypeC Properties - Min Power Level
     */
    radioTypeCMinPowerLevel?: pulumi.Input<number>;
    /**
     * Radio TypeC Properties - Parent Profile
     */
    radioTypeCParentProfile?: pulumi.Input<string>;
    /**
     * Radio TypeC Properties - Power Threshold V1
     */
    radioTypeCPowerThresholdV1?: pulumi.Input<number>;
    /**
     * Radio TypeC Properties - Radio Channels
     */
    radioTypeCRadioChannels?: pulumi.Input<string>;
    /**
     * Radio TypeC Properties - Rx Sop Threshold
     */
    radioTypeCRxSopThreshold?: pulumi.Input<string>;
}
