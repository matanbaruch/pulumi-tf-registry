// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class LogSetting extends pulumi.CustomResource {
    /**
     * Get an existing LogSetting resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: LogSettingState, opts?: pulumi.CustomResourceOptions): LogSetting {
        return new LogSetting(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'fmgdevice:index/logSetting:LogSetting';

    /**
     * Returns true if the given object is an instance of LogSetting.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is LogSetting {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === LogSetting.__pulumiType;
    }

    public readonly anonymizationHash!: pulumi.Output<string | undefined>;
    public readonly briefTrafficFormat!: pulumi.Output<string>;
    public readonly customLogFields!: pulumi.Output<string[]>;
    public readonly daemonLog!: pulumi.Output<string>;
    public readonly deviceName!: pulumi.Output<string>;
    public readonly deviceVdom!: pulumi.Output<string>;
    public readonly expolicyImplicitLog!: pulumi.Output<string>;
    public readonly extendedLog!: pulumi.Output<string>;
    public readonly fazOverride!: pulumi.Output<string>;
    public readonly fortiviewWeeklyData!: pulumi.Output<string | undefined>;
    public readonly fwpolicy6ImplicitLog!: pulumi.Output<string>;
    public readonly fwpolicyImplicitLog!: pulumi.Output<string>;
    public readonly localInAllow!: pulumi.Output<string>;
    public readonly localInDenyBroadcast!: pulumi.Output<string>;
    public readonly localInDenyUnicast!: pulumi.Output<string>;
    public readonly localOut!: pulumi.Output<string>;
    public readonly localOutIocDetection!: pulumi.Output<string>;
    public readonly logInvalidPacket!: pulumi.Output<string>;
    public readonly logPolicyComment!: pulumi.Output<string>;
    public readonly logPolicyName!: pulumi.Output<string | undefined>;
    public readonly logUserInUpper!: pulumi.Output<string>;
    public readonly longLiveSessionStat!: pulumi.Output<string>;
    public readonly neighborEvent!: pulumi.Output<string>;
    public readonly resolveIp!: pulumi.Output<string>;
    public readonly resolvePort!: pulumi.Output<string>;
    public readonly restApiGet!: pulumi.Output<string>;
    public readonly restApiSet!: pulumi.Output<string>;
    public readonly syslogOverride!: pulumi.Output<string>;
    public readonly userAnonymize!: pulumi.Output<string>;

    /**
     * Create a LogSetting resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: LogSettingArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: LogSettingArgs | LogSettingState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as LogSettingState | undefined;
            resourceInputs["anonymizationHash"] = state ? state.anonymizationHash : undefined;
            resourceInputs["briefTrafficFormat"] = state ? state.briefTrafficFormat : undefined;
            resourceInputs["customLogFields"] = state ? state.customLogFields : undefined;
            resourceInputs["daemonLog"] = state ? state.daemonLog : undefined;
            resourceInputs["deviceName"] = state ? state.deviceName : undefined;
            resourceInputs["deviceVdom"] = state ? state.deviceVdom : undefined;
            resourceInputs["expolicyImplicitLog"] = state ? state.expolicyImplicitLog : undefined;
            resourceInputs["extendedLog"] = state ? state.extendedLog : undefined;
            resourceInputs["fazOverride"] = state ? state.fazOverride : undefined;
            resourceInputs["fortiviewWeeklyData"] = state ? state.fortiviewWeeklyData : undefined;
            resourceInputs["fwpolicy6ImplicitLog"] = state ? state.fwpolicy6ImplicitLog : undefined;
            resourceInputs["fwpolicyImplicitLog"] = state ? state.fwpolicyImplicitLog : undefined;
            resourceInputs["localInAllow"] = state ? state.localInAllow : undefined;
            resourceInputs["localInDenyBroadcast"] = state ? state.localInDenyBroadcast : undefined;
            resourceInputs["localInDenyUnicast"] = state ? state.localInDenyUnicast : undefined;
            resourceInputs["localOut"] = state ? state.localOut : undefined;
            resourceInputs["localOutIocDetection"] = state ? state.localOutIocDetection : undefined;
            resourceInputs["logInvalidPacket"] = state ? state.logInvalidPacket : undefined;
            resourceInputs["logPolicyComment"] = state ? state.logPolicyComment : undefined;
            resourceInputs["logPolicyName"] = state ? state.logPolicyName : undefined;
            resourceInputs["logUserInUpper"] = state ? state.logUserInUpper : undefined;
            resourceInputs["longLiveSessionStat"] = state ? state.longLiveSessionStat : undefined;
            resourceInputs["neighborEvent"] = state ? state.neighborEvent : undefined;
            resourceInputs["resolveIp"] = state ? state.resolveIp : undefined;
            resourceInputs["resolvePort"] = state ? state.resolvePort : undefined;
            resourceInputs["restApiGet"] = state ? state.restApiGet : undefined;
            resourceInputs["restApiSet"] = state ? state.restApiSet : undefined;
            resourceInputs["syslogOverride"] = state ? state.syslogOverride : undefined;
            resourceInputs["userAnonymize"] = state ? state.userAnonymize : undefined;
        } else {
            const args = argsOrState as LogSettingArgs | undefined;
            resourceInputs["anonymizationHash"] = args ? args.anonymizationHash : undefined;
            resourceInputs["briefTrafficFormat"] = args ? args.briefTrafficFormat : undefined;
            resourceInputs["customLogFields"] = args ? args.customLogFields : undefined;
            resourceInputs["daemonLog"] = args ? args.daemonLog : undefined;
            resourceInputs["deviceName"] = args ? args.deviceName : undefined;
            resourceInputs["deviceVdom"] = args ? args.deviceVdom : undefined;
            resourceInputs["expolicyImplicitLog"] = args ? args.expolicyImplicitLog : undefined;
            resourceInputs["extendedLog"] = args ? args.extendedLog : undefined;
            resourceInputs["fazOverride"] = args ? args.fazOverride : undefined;
            resourceInputs["fortiviewWeeklyData"] = args ? args.fortiviewWeeklyData : undefined;
            resourceInputs["fwpolicy6ImplicitLog"] = args ? args.fwpolicy6ImplicitLog : undefined;
            resourceInputs["fwpolicyImplicitLog"] = args ? args.fwpolicyImplicitLog : undefined;
            resourceInputs["localInAllow"] = args ? args.localInAllow : undefined;
            resourceInputs["localInDenyBroadcast"] = args ? args.localInDenyBroadcast : undefined;
            resourceInputs["localInDenyUnicast"] = args ? args.localInDenyUnicast : undefined;
            resourceInputs["localOut"] = args ? args.localOut : undefined;
            resourceInputs["localOutIocDetection"] = args ? args.localOutIocDetection : undefined;
            resourceInputs["logInvalidPacket"] = args ? args.logInvalidPacket : undefined;
            resourceInputs["logPolicyComment"] = args ? args.logPolicyComment : undefined;
            resourceInputs["logPolicyName"] = args ? args.logPolicyName : undefined;
            resourceInputs["logUserInUpper"] = args ? args.logUserInUpper : undefined;
            resourceInputs["longLiveSessionStat"] = args ? args.longLiveSessionStat : undefined;
            resourceInputs["neighborEvent"] = args ? args.neighborEvent : undefined;
            resourceInputs["resolveIp"] = args ? args.resolveIp : undefined;
            resourceInputs["resolvePort"] = args ? args.resolvePort : undefined;
            resourceInputs["restApiGet"] = args ? args.restApiGet : undefined;
            resourceInputs["restApiSet"] = args ? args.restApiSet : undefined;
            resourceInputs["syslogOverride"] = args ? args.syslogOverride : undefined;
            resourceInputs["userAnonymize"] = args ? args.userAnonymize : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(LogSetting.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering LogSetting resources.
 */
export interface LogSettingState {
    anonymizationHash?: pulumi.Input<string>;
    briefTrafficFormat?: pulumi.Input<string>;
    customLogFields?: pulumi.Input<pulumi.Input<string>[]>;
    daemonLog?: pulumi.Input<string>;
    deviceName?: pulumi.Input<string>;
    deviceVdom?: pulumi.Input<string>;
    expolicyImplicitLog?: pulumi.Input<string>;
    extendedLog?: pulumi.Input<string>;
    fazOverride?: pulumi.Input<string>;
    fortiviewWeeklyData?: pulumi.Input<string>;
    fwpolicy6ImplicitLog?: pulumi.Input<string>;
    fwpolicyImplicitLog?: pulumi.Input<string>;
    localInAllow?: pulumi.Input<string>;
    localInDenyBroadcast?: pulumi.Input<string>;
    localInDenyUnicast?: pulumi.Input<string>;
    localOut?: pulumi.Input<string>;
    localOutIocDetection?: pulumi.Input<string>;
    logInvalidPacket?: pulumi.Input<string>;
    logPolicyComment?: pulumi.Input<string>;
    logPolicyName?: pulumi.Input<string>;
    logUserInUpper?: pulumi.Input<string>;
    longLiveSessionStat?: pulumi.Input<string>;
    neighborEvent?: pulumi.Input<string>;
    resolveIp?: pulumi.Input<string>;
    resolvePort?: pulumi.Input<string>;
    restApiGet?: pulumi.Input<string>;
    restApiSet?: pulumi.Input<string>;
    syslogOverride?: pulumi.Input<string>;
    userAnonymize?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a LogSetting resource.
 */
export interface LogSettingArgs {
    anonymizationHash?: pulumi.Input<string>;
    briefTrafficFormat?: pulumi.Input<string>;
    customLogFields?: pulumi.Input<pulumi.Input<string>[]>;
    daemonLog?: pulumi.Input<string>;
    deviceName?: pulumi.Input<string>;
    deviceVdom?: pulumi.Input<string>;
    expolicyImplicitLog?: pulumi.Input<string>;
    extendedLog?: pulumi.Input<string>;
    fazOverride?: pulumi.Input<string>;
    fortiviewWeeklyData?: pulumi.Input<string>;
    fwpolicy6ImplicitLog?: pulumi.Input<string>;
    fwpolicyImplicitLog?: pulumi.Input<string>;
    localInAllow?: pulumi.Input<string>;
    localInDenyBroadcast?: pulumi.Input<string>;
    localInDenyUnicast?: pulumi.Input<string>;
    localOut?: pulumi.Input<string>;
    localOutIocDetection?: pulumi.Input<string>;
    logInvalidPacket?: pulumi.Input<string>;
    logPolicyComment?: pulumi.Input<string>;
    logPolicyName?: pulumi.Input<string>;
    logUserInUpper?: pulumi.Input<string>;
    longLiveSessionStat?: pulumi.Input<string>;
    neighborEvent?: pulumi.Input<string>;
    resolveIp?: pulumi.Input<string>;
    resolvePort?: pulumi.Input<string>;
    restApiGet?: pulumi.Input<string>;
    restApiSet?: pulumi.Input<string>;
    syslogOverride?: pulumi.Input<string>;
    userAnonymize?: pulumi.Input<string>;
}
