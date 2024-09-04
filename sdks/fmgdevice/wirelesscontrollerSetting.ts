// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class WirelesscontrollerSetting extends pulumi.CustomResource {
    /**
     * Get an existing WirelesscontrollerSetting resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: WirelesscontrollerSettingState, opts?: pulumi.CustomResourceOptions): WirelesscontrollerSetting {
        return new WirelesscontrollerSetting(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'fmgdevice:index/wirelesscontrollerSetting:WirelesscontrollerSetting';

    /**
     * Returns true if the given object is an instance of WirelesscontrollerSetting.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is WirelesscontrollerSetting {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === WirelesscontrollerSetting.__pulumiType;
    }

    public readonly accountId!: pulumi.Output<string | undefined>;
    public readonly country!: pulumi.Output<string>;
    public readonly darrpOptimize!: pulumi.Output<number>;
    public readonly darrpOptimizeSchedules!: pulumi.Output<string[]>;
    public readonly deviceHoldoff!: pulumi.Output<number>;
    public readonly deviceIdle!: pulumi.Output<number>;
    public readonly deviceName!: pulumi.Output<string>;
    public readonly deviceVdom!: pulumi.Output<string>;
    public readonly deviceWeight!: pulumi.Output<number>;
    public readonly duplicateSsid!: pulumi.Output<string>;
    public readonly dynamicSortSubtable!: pulumi.Output<string | undefined>;
    public readonly fakeSsidActions!: pulumi.Output<string[]>;
    public readonly fapcCompatibility!: pulumi.Output<string>;
    public readonly firmwareProvisionOnAuthorization!: pulumi.Output<string>;
    public readonly offendingSsids!: pulumi.Output<outputs.WirelesscontrollerSettingOffendingSsid[] | undefined>;
    public readonly phishingSsidDetect!: pulumi.Output<string>;
    public readonly rollingWtpUpgrade!: pulumi.Output<string>;
    public readonly wfaCompatibility!: pulumi.Output<string>;

    /**
     * Create a WirelesscontrollerSetting resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: WirelesscontrollerSettingArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: WirelesscontrollerSettingArgs | WirelesscontrollerSettingState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as WirelesscontrollerSettingState | undefined;
            resourceInputs["accountId"] = state ? state.accountId : undefined;
            resourceInputs["country"] = state ? state.country : undefined;
            resourceInputs["darrpOptimize"] = state ? state.darrpOptimize : undefined;
            resourceInputs["darrpOptimizeSchedules"] = state ? state.darrpOptimizeSchedules : undefined;
            resourceInputs["deviceHoldoff"] = state ? state.deviceHoldoff : undefined;
            resourceInputs["deviceIdle"] = state ? state.deviceIdle : undefined;
            resourceInputs["deviceName"] = state ? state.deviceName : undefined;
            resourceInputs["deviceVdom"] = state ? state.deviceVdom : undefined;
            resourceInputs["deviceWeight"] = state ? state.deviceWeight : undefined;
            resourceInputs["duplicateSsid"] = state ? state.duplicateSsid : undefined;
            resourceInputs["dynamicSortSubtable"] = state ? state.dynamicSortSubtable : undefined;
            resourceInputs["fakeSsidActions"] = state ? state.fakeSsidActions : undefined;
            resourceInputs["fapcCompatibility"] = state ? state.fapcCompatibility : undefined;
            resourceInputs["firmwareProvisionOnAuthorization"] = state ? state.firmwareProvisionOnAuthorization : undefined;
            resourceInputs["offendingSsids"] = state ? state.offendingSsids : undefined;
            resourceInputs["phishingSsidDetect"] = state ? state.phishingSsidDetect : undefined;
            resourceInputs["rollingWtpUpgrade"] = state ? state.rollingWtpUpgrade : undefined;
            resourceInputs["wfaCompatibility"] = state ? state.wfaCompatibility : undefined;
        } else {
            const args = argsOrState as WirelesscontrollerSettingArgs | undefined;
            resourceInputs["accountId"] = args ? args.accountId : undefined;
            resourceInputs["country"] = args ? args.country : undefined;
            resourceInputs["darrpOptimize"] = args ? args.darrpOptimize : undefined;
            resourceInputs["darrpOptimizeSchedules"] = args ? args.darrpOptimizeSchedules : undefined;
            resourceInputs["deviceHoldoff"] = args ? args.deviceHoldoff : undefined;
            resourceInputs["deviceIdle"] = args ? args.deviceIdle : undefined;
            resourceInputs["deviceName"] = args ? args.deviceName : undefined;
            resourceInputs["deviceVdom"] = args ? args.deviceVdom : undefined;
            resourceInputs["deviceWeight"] = args ? args.deviceWeight : undefined;
            resourceInputs["duplicateSsid"] = args ? args.duplicateSsid : undefined;
            resourceInputs["dynamicSortSubtable"] = args ? args.dynamicSortSubtable : undefined;
            resourceInputs["fakeSsidActions"] = args ? args.fakeSsidActions : undefined;
            resourceInputs["fapcCompatibility"] = args ? args.fapcCompatibility : undefined;
            resourceInputs["firmwareProvisionOnAuthorization"] = args ? args.firmwareProvisionOnAuthorization : undefined;
            resourceInputs["offendingSsids"] = args ? args.offendingSsids : undefined;
            resourceInputs["phishingSsidDetect"] = args ? args.phishingSsidDetect : undefined;
            resourceInputs["rollingWtpUpgrade"] = args ? args.rollingWtpUpgrade : undefined;
            resourceInputs["wfaCompatibility"] = args ? args.wfaCompatibility : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(WirelesscontrollerSetting.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering WirelesscontrollerSetting resources.
 */
export interface WirelesscontrollerSettingState {
    accountId?: pulumi.Input<string>;
    country?: pulumi.Input<string>;
    darrpOptimize?: pulumi.Input<number>;
    darrpOptimizeSchedules?: pulumi.Input<pulumi.Input<string>[]>;
    deviceHoldoff?: pulumi.Input<number>;
    deviceIdle?: pulumi.Input<number>;
    deviceName?: pulumi.Input<string>;
    deviceVdom?: pulumi.Input<string>;
    deviceWeight?: pulumi.Input<number>;
    duplicateSsid?: pulumi.Input<string>;
    dynamicSortSubtable?: pulumi.Input<string>;
    fakeSsidActions?: pulumi.Input<pulumi.Input<string>[]>;
    fapcCompatibility?: pulumi.Input<string>;
    firmwareProvisionOnAuthorization?: pulumi.Input<string>;
    offendingSsids?: pulumi.Input<pulumi.Input<inputs.WirelesscontrollerSettingOffendingSsid>[]>;
    phishingSsidDetect?: pulumi.Input<string>;
    rollingWtpUpgrade?: pulumi.Input<string>;
    wfaCompatibility?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a WirelesscontrollerSetting resource.
 */
export interface WirelesscontrollerSettingArgs {
    accountId?: pulumi.Input<string>;
    country?: pulumi.Input<string>;
    darrpOptimize?: pulumi.Input<number>;
    darrpOptimizeSchedules?: pulumi.Input<pulumi.Input<string>[]>;
    deviceHoldoff?: pulumi.Input<number>;
    deviceIdle?: pulumi.Input<number>;
    deviceName?: pulumi.Input<string>;
    deviceVdom?: pulumi.Input<string>;
    deviceWeight?: pulumi.Input<number>;
    duplicateSsid?: pulumi.Input<string>;
    dynamicSortSubtable?: pulumi.Input<string>;
    fakeSsidActions?: pulumi.Input<pulumi.Input<string>[]>;
    fapcCompatibility?: pulumi.Input<string>;
    firmwareProvisionOnAuthorization?: pulumi.Input<string>;
    offendingSsids?: pulumi.Input<pulumi.Input<inputs.WirelesscontrollerSettingOffendingSsid>[]>;
    phishingSsidDetect?: pulumi.Input<string>;
    rollingWtpUpgrade?: pulumi.Input<string>;
    wfaCompatibility?: pulumi.Input<string>;
}
