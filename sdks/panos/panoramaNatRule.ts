// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class PanoramaNatRule extends pulumi.CustomResource {
    /**
     * Get an existing PanoramaNatRule resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: PanoramaNatRuleState, opts?: pulumi.CustomResourceOptions): PanoramaNatRule {
        return new PanoramaNatRule(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'panos:index/panoramaNatRule:PanoramaNatRule';

    /**
     * Returns true if the given object is an instance of PanoramaNatRule.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is PanoramaNatRule {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === PanoramaNatRule.__pulumiType;
    }

    public readonly datAddress!: pulumi.Output<string | undefined>;
    public readonly datDynamicDistribution!: pulumi.Output<string | undefined>;
    public readonly datPort!: pulumi.Output<number | undefined>;
    public readonly datType!: pulumi.Output<string | undefined>;
    public readonly description!: pulumi.Output<string | undefined>;
    public readonly destinationAddresses!: pulumi.Output<string[]>;
    public readonly destinationZone!: pulumi.Output<string>;
    public readonly deviceGroup!: pulumi.Output<string | undefined>;
    public readonly disabled!: pulumi.Output<boolean | undefined>;
    public readonly name!: pulumi.Output<string>;
    public readonly negateTarget!: pulumi.Output<boolean | undefined>;
    public readonly rulebase!: pulumi.Output<string | undefined>;
    /**
     * interface-address or translated-address
     */
    public readonly satAddressType!: pulumi.Output<string | undefined>;
    public readonly satFallbackInterface!: pulumi.Output<string | undefined>;
    public readonly satFallbackIpAddress!: pulumi.Output<string | undefined>;
    public readonly satFallbackIpType!: pulumi.Output<string | undefined>;
    public readonly satFallbackTranslatedAddresses!: pulumi.Output<string[] | undefined>;
    public readonly satFallbackType!: pulumi.Output<string | undefined>;
    public readonly satInterface!: pulumi.Output<string | undefined>;
    public readonly satIpAddress!: pulumi.Output<string | undefined>;
    public readonly satStaticBiDirectional!: pulumi.Output<boolean | undefined>;
    public readonly satStaticTranslatedAddress!: pulumi.Output<string | undefined>;
    public readonly satTranslatedAddresses!: pulumi.Output<string[] | undefined>;
    /**
     * none (default), dynamic-ip-and-port, dynamic-ip, or static-ip
     */
    public readonly satType!: pulumi.Output<string | undefined>;
    public readonly service!: pulumi.Output<string | undefined>;
    public readonly sourceAddresses!: pulumi.Output<string[]>;
    public readonly sourceZones!: pulumi.Output<string[]>;
    public readonly tags!: pulumi.Output<string[] | undefined>;
    /**
     * NGFW serial numbers and vsys spec.
     */
    public readonly targets!: pulumi.Output<outputs.PanoramaNatRuleTarget[] | undefined>;
    public readonly toInterface!: pulumi.Output<string | undefined>;
    /**
     * NAT type (ipv4 default, nat64, or nptv6)
     */
    public readonly type!: pulumi.Output<string | undefined>;

    /**
     * Create a PanoramaNatRule resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: PanoramaNatRuleArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: PanoramaNatRuleArgs | PanoramaNatRuleState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as PanoramaNatRuleState | undefined;
            resourceInputs["datAddress"] = state ? state.datAddress : undefined;
            resourceInputs["datDynamicDistribution"] = state ? state.datDynamicDistribution : undefined;
            resourceInputs["datPort"] = state ? state.datPort : undefined;
            resourceInputs["datType"] = state ? state.datType : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["destinationAddresses"] = state ? state.destinationAddresses : undefined;
            resourceInputs["destinationZone"] = state ? state.destinationZone : undefined;
            resourceInputs["deviceGroup"] = state ? state.deviceGroup : undefined;
            resourceInputs["disabled"] = state ? state.disabled : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["negateTarget"] = state ? state.negateTarget : undefined;
            resourceInputs["rulebase"] = state ? state.rulebase : undefined;
            resourceInputs["satAddressType"] = state ? state.satAddressType : undefined;
            resourceInputs["satFallbackInterface"] = state ? state.satFallbackInterface : undefined;
            resourceInputs["satFallbackIpAddress"] = state ? state.satFallbackIpAddress : undefined;
            resourceInputs["satFallbackIpType"] = state ? state.satFallbackIpType : undefined;
            resourceInputs["satFallbackTranslatedAddresses"] = state ? state.satFallbackTranslatedAddresses : undefined;
            resourceInputs["satFallbackType"] = state ? state.satFallbackType : undefined;
            resourceInputs["satInterface"] = state ? state.satInterface : undefined;
            resourceInputs["satIpAddress"] = state ? state.satIpAddress : undefined;
            resourceInputs["satStaticBiDirectional"] = state ? state.satStaticBiDirectional : undefined;
            resourceInputs["satStaticTranslatedAddress"] = state ? state.satStaticTranslatedAddress : undefined;
            resourceInputs["satTranslatedAddresses"] = state ? state.satTranslatedAddresses : undefined;
            resourceInputs["satType"] = state ? state.satType : undefined;
            resourceInputs["service"] = state ? state.service : undefined;
            resourceInputs["sourceAddresses"] = state ? state.sourceAddresses : undefined;
            resourceInputs["sourceZones"] = state ? state.sourceZones : undefined;
            resourceInputs["tags"] = state ? state.tags : undefined;
            resourceInputs["targets"] = state ? state.targets : undefined;
            resourceInputs["toInterface"] = state ? state.toInterface : undefined;
            resourceInputs["type"] = state ? state.type : undefined;
        } else {
            const args = argsOrState as PanoramaNatRuleArgs | undefined;
            if ((!args || args.destinationAddresses === undefined) && !opts.urn) {
                throw new Error("Missing required property 'destinationAddresses'");
            }
            if ((!args || args.destinationZone === undefined) && !opts.urn) {
                throw new Error("Missing required property 'destinationZone'");
            }
            if ((!args || args.sourceAddresses === undefined) && !opts.urn) {
                throw new Error("Missing required property 'sourceAddresses'");
            }
            if ((!args || args.sourceZones === undefined) && !opts.urn) {
                throw new Error("Missing required property 'sourceZones'");
            }
            resourceInputs["datAddress"] = args ? args.datAddress : undefined;
            resourceInputs["datDynamicDistribution"] = args ? args.datDynamicDistribution : undefined;
            resourceInputs["datPort"] = args ? args.datPort : undefined;
            resourceInputs["datType"] = args ? args.datType : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["destinationAddresses"] = args ? args.destinationAddresses : undefined;
            resourceInputs["destinationZone"] = args ? args.destinationZone : undefined;
            resourceInputs["deviceGroup"] = args ? args.deviceGroup : undefined;
            resourceInputs["disabled"] = args ? args.disabled : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["negateTarget"] = args ? args.negateTarget : undefined;
            resourceInputs["rulebase"] = args ? args.rulebase : undefined;
            resourceInputs["satAddressType"] = args ? args.satAddressType : undefined;
            resourceInputs["satFallbackInterface"] = args ? args.satFallbackInterface : undefined;
            resourceInputs["satFallbackIpAddress"] = args ? args.satFallbackIpAddress : undefined;
            resourceInputs["satFallbackIpType"] = args ? args.satFallbackIpType : undefined;
            resourceInputs["satFallbackTranslatedAddresses"] = args ? args.satFallbackTranslatedAddresses : undefined;
            resourceInputs["satFallbackType"] = args ? args.satFallbackType : undefined;
            resourceInputs["satInterface"] = args ? args.satInterface : undefined;
            resourceInputs["satIpAddress"] = args ? args.satIpAddress : undefined;
            resourceInputs["satStaticBiDirectional"] = args ? args.satStaticBiDirectional : undefined;
            resourceInputs["satStaticTranslatedAddress"] = args ? args.satStaticTranslatedAddress : undefined;
            resourceInputs["satTranslatedAddresses"] = args ? args.satTranslatedAddresses : undefined;
            resourceInputs["satType"] = args ? args.satType : undefined;
            resourceInputs["service"] = args ? args.service : undefined;
            resourceInputs["sourceAddresses"] = args ? args.sourceAddresses : undefined;
            resourceInputs["sourceZones"] = args ? args.sourceZones : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["targets"] = args ? args.targets : undefined;
            resourceInputs["toInterface"] = args ? args.toInterface : undefined;
            resourceInputs["type"] = args ? args.type : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(PanoramaNatRule.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering PanoramaNatRule resources.
 */
export interface PanoramaNatRuleState {
    datAddress?: pulumi.Input<string>;
    datDynamicDistribution?: pulumi.Input<string>;
    datPort?: pulumi.Input<number>;
    datType?: pulumi.Input<string>;
    description?: pulumi.Input<string>;
    destinationAddresses?: pulumi.Input<pulumi.Input<string>[]>;
    destinationZone?: pulumi.Input<string>;
    deviceGroup?: pulumi.Input<string>;
    disabled?: pulumi.Input<boolean>;
    name?: pulumi.Input<string>;
    negateTarget?: pulumi.Input<boolean>;
    rulebase?: pulumi.Input<string>;
    /**
     * interface-address or translated-address
     */
    satAddressType?: pulumi.Input<string>;
    satFallbackInterface?: pulumi.Input<string>;
    satFallbackIpAddress?: pulumi.Input<string>;
    satFallbackIpType?: pulumi.Input<string>;
    satFallbackTranslatedAddresses?: pulumi.Input<pulumi.Input<string>[]>;
    satFallbackType?: pulumi.Input<string>;
    satInterface?: pulumi.Input<string>;
    satIpAddress?: pulumi.Input<string>;
    satStaticBiDirectional?: pulumi.Input<boolean>;
    satStaticTranslatedAddress?: pulumi.Input<string>;
    satTranslatedAddresses?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * none (default), dynamic-ip-and-port, dynamic-ip, or static-ip
     */
    satType?: pulumi.Input<string>;
    service?: pulumi.Input<string>;
    sourceAddresses?: pulumi.Input<pulumi.Input<string>[]>;
    sourceZones?: pulumi.Input<pulumi.Input<string>[]>;
    tags?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * NGFW serial numbers and vsys spec.
     */
    targets?: pulumi.Input<pulumi.Input<inputs.PanoramaNatRuleTarget>[]>;
    toInterface?: pulumi.Input<string>;
    /**
     * NAT type (ipv4 default, nat64, or nptv6)
     */
    type?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a PanoramaNatRule resource.
 */
export interface PanoramaNatRuleArgs {
    datAddress?: pulumi.Input<string>;
    datDynamicDistribution?: pulumi.Input<string>;
    datPort?: pulumi.Input<number>;
    datType?: pulumi.Input<string>;
    description?: pulumi.Input<string>;
    destinationAddresses: pulumi.Input<pulumi.Input<string>[]>;
    destinationZone: pulumi.Input<string>;
    deviceGroup?: pulumi.Input<string>;
    disabled?: pulumi.Input<boolean>;
    name?: pulumi.Input<string>;
    negateTarget?: pulumi.Input<boolean>;
    rulebase?: pulumi.Input<string>;
    /**
     * interface-address or translated-address
     */
    satAddressType?: pulumi.Input<string>;
    satFallbackInterface?: pulumi.Input<string>;
    satFallbackIpAddress?: pulumi.Input<string>;
    satFallbackIpType?: pulumi.Input<string>;
    satFallbackTranslatedAddresses?: pulumi.Input<pulumi.Input<string>[]>;
    satFallbackType?: pulumi.Input<string>;
    satInterface?: pulumi.Input<string>;
    satIpAddress?: pulumi.Input<string>;
    satStaticBiDirectional?: pulumi.Input<boolean>;
    satStaticTranslatedAddress?: pulumi.Input<string>;
    satTranslatedAddresses?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * none (default), dynamic-ip-and-port, dynamic-ip, or static-ip
     */
    satType?: pulumi.Input<string>;
    service?: pulumi.Input<string>;
    sourceAddresses: pulumi.Input<pulumi.Input<string>[]>;
    sourceZones: pulumi.Input<pulumi.Input<string>[]>;
    tags?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * NGFW serial numbers and vsys spec.
     */
    targets?: pulumi.Input<pulumi.Input<inputs.PanoramaNatRuleTarget>[]>;
    toInterface?: pulumi.Input<string>;
    /**
     * NAT type (ipv4 default, nat64, or nptv6)
     */
    type?: pulumi.Input<string>;
}
