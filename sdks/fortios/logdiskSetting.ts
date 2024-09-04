// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class LogdiskSetting extends pulumi.CustomResource {
    /**
     * Get an existing LogdiskSetting resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: LogdiskSettingState, opts?: pulumi.CustomResourceOptions): LogdiskSetting {
        return new LogdiskSetting(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'fortios:index/logdiskSetting:LogdiskSetting';

    /**
     * Returns true if the given object is an instance of LogdiskSetting.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is LogdiskSetting {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === LogdiskSetting.__pulumiType;
    }

    public readonly diskfull!: pulumi.Output<string>;
    public readonly dlpArchiveQuota!: pulumi.Output<number>;
    public readonly fullFinalWarningThreshold!: pulumi.Output<number>;
    public readonly fullFirstWarningThreshold!: pulumi.Output<number>;
    public readonly fullSecondWarningThreshold!: pulumi.Output<number>;
    public readonly interface!: pulumi.Output<string>;
    public readonly interfaceSelectMethod!: pulumi.Output<string>;
    public readonly ipsArchive!: pulumi.Output<string>;
    public readonly logQuota!: pulumi.Output<number>;
    public readonly maxLogFileSize!: pulumi.Output<number>;
    public readonly maxPolicyPacketCaptureSize!: pulumi.Output<number>;
    public readonly maximumLogAge!: pulumi.Output<number>;
    public readonly reportQuota!: pulumi.Output<number>;
    public readonly rollDay!: pulumi.Output<string>;
    public readonly rollSchedule!: pulumi.Output<string>;
    public readonly rollTime!: pulumi.Output<string>;
    public readonly sourceIp!: pulumi.Output<string>;
    public readonly status!: pulumi.Output<string>;
    public readonly upload!: pulumi.Output<string>;
    public readonly uploadDeleteFiles!: pulumi.Output<string>;
    public readonly uploadDestination!: pulumi.Output<string>;
    public readonly uploadSslConn!: pulumi.Output<string>;
    public readonly uploaddir!: pulumi.Output<string>;
    public readonly uploadip!: pulumi.Output<string>;
    public readonly uploadpass!: pulumi.Output<string | undefined>;
    public readonly uploadport!: pulumi.Output<number>;
    public readonly uploadsched!: pulumi.Output<string>;
    public readonly uploadtime!: pulumi.Output<string>;
    public readonly uploadtype!: pulumi.Output<string>;
    public readonly uploaduser!: pulumi.Output<string>;
    public readonly vdomparam!: pulumi.Output<string>;

    /**
     * Create a LogdiskSetting resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: LogdiskSettingArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: LogdiskSettingArgs | LogdiskSettingState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as LogdiskSettingState | undefined;
            resourceInputs["diskfull"] = state ? state.diskfull : undefined;
            resourceInputs["dlpArchiveQuota"] = state ? state.dlpArchiveQuota : undefined;
            resourceInputs["fullFinalWarningThreshold"] = state ? state.fullFinalWarningThreshold : undefined;
            resourceInputs["fullFirstWarningThreshold"] = state ? state.fullFirstWarningThreshold : undefined;
            resourceInputs["fullSecondWarningThreshold"] = state ? state.fullSecondWarningThreshold : undefined;
            resourceInputs["interface"] = state ? state.interface : undefined;
            resourceInputs["interfaceSelectMethod"] = state ? state.interfaceSelectMethod : undefined;
            resourceInputs["ipsArchive"] = state ? state.ipsArchive : undefined;
            resourceInputs["logQuota"] = state ? state.logQuota : undefined;
            resourceInputs["maxLogFileSize"] = state ? state.maxLogFileSize : undefined;
            resourceInputs["maxPolicyPacketCaptureSize"] = state ? state.maxPolicyPacketCaptureSize : undefined;
            resourceInputs["maximumLogAge"] = state ? state.maximumLogAge : undefined;
            resourceInputs["reportQuota"] = state ? state.reportQuota : undefined;
            resourceInputs["rollDay"] = state ? state.rollDay : undefined;
            resourceInputs["rollSchedule"] = state ? state.rollSchedule : undefined;
            resourceInputs["rollTime"] = state ? state.rollTime : undefined;
            resourceInputs["sourceIp"] = state ? state.sourceIp : undefined;
            resourceInputs["status"] = state ? state.status : undefined;
            resourceInputs["upload"] = state ? state.upload : undefined;
            resourceInputs["uploadDeleteFiles"] = state ? state.uploadDeleteFiles : undefined;
            resourceInputs["uploadDestination"] = state ? state.uploadDestination : undefined;
            resourceInputs["uploadSslConn"] = state ? state.uploadSslConn : undefined;
            resourceInputs["uploaddir"] = state ? state.uploaddir : undefined;
            resourceInputs["uploadip"] = state ? state.uploadip : undefined;
            resourceInputs["uploadpass"] = state ? state.uploadpass : undefined;
            resourceInputs["uploadport"] = state ? state.uploadport : undefined;
            resourceInputs["uploadsched"] = state ? state.uploadsched : undefined;
            resourceInputs["uploadtime"] = state ? state.uploadtime : undefined;
            resourceInputs["uploadtype"] = state ? state.uploadtype : undefined;
            resourceInputs["uploaduser"] = state ? state.uploaduser : undefined;
            resourceInputs["vdomparam"] = state ? state.vdomparam : undefined;
        } else {
            const args = argsOrState as LogdiskSettingArgs | undefined;
            if ((!args || args.status === undefined) && !opts.urn) {
                throw new Error("Missing required property 'status'");
            }
            resourceInputs["diskfull"] = args ? args.diskfull : undefined;
            resourceInputs["dlpArchiveQuota"] = args ? args.dlpArchiveQuota : undefined;
            resourceInputs["fullFinalWarningThreshold"] = args ? args.fullFinalWarningThreshold : undefined;
            resourceInputs["fullFirstWarningThreshold"] = args ? args.fullFirstWarningThreshold : undefined;
            resourceInputs["fullSecondWarningThreshold"] = args ? args.fullSecondWarningThreshold : undefined;
            resourceInputs["interface"] = args ? args.interface : undefined;
            resourceInputs["interfaceSelectMethod"] = args ? args.interfaceSelectMethod : undefined;
            resourceInputs["ipsArchive"] = args ? args.ipsArchive : undefined;
            resourceInputs["logQuota"] = args ? args.logQuota : undefined;
            resourceInputs["maxLogFileSize"] = args ? args.maxLogFileSize : undefined;
            resourceInputs["maxPolicyPacketCaptureSize"] = args ? args.maxPolicyPacketCaptureSize : undefined;
            resourceInputs["maximumLogAge"] = args ? args.maximumLogAge : undefined;
            resourceInputs["reportQuota"] = args ? args.reportQuota : undefined;
            resourceInputs["rollDay"] = args ? args.rollDay : undefined;
            resourceInputs["rollSchedule"] = args ? args.rollSchedule : undefined;
            resourceInputs["rollTime"] = args ? args.rollTime : undefined;
            resourceInputs["sourceIp"] = args ? args.sourceIp : undefined;
            resourceInputs["status"] = args ? args.status : undefined;
            resourceInputs["upload"] = args ? args.upload : undefined;
            resourceInputs["uploadDeleteFiles"] = args ? args.uploadDeleteFiles : undefined;
            resourceInputs["uploadDestination"] = args ? args.uploadDestination : undefined;
            resourceInputs["uploadSslConn"] = args ? args.uploadSslConn : undefined;
            resourceInputs["uploaddir"] = args ? args.uploaddir : undefined;
            resourceInputs["uploadip"] = args ? args.uploadip : undefined;
            resourceInputs["uploadpass"] = args?.uploadpass ? pulumi.secret(args.uploadpass) : undefined;
            resourceInputs["uploadport"] = args ? args.uploadport : undefined;
            resourceInputs["uploadsched"] = args ? args.uploadsched : undefined;
            resourceInputs["uploadtime"] = args ? args.uploadtime : undefined;
            resourceInputs["uploadtype"] = args ? args.uploadtype : undefined;
            resourceInputs["uploaduser"] = args ? args.uploaduser : undefined;
            resourceInputs["vdomparam"] = args ? args.vdomparam : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const secretOpts = { additionalSecretOutputs: ["uploadpass"] };
        opts = pulumi.mergeOptions(opts, secretOpts);
        super(LogdiskSetting.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering LogdiskSetting resources.
 */
export interface LogdiskSettingState {
    diskfull?: pulumi.Input<string>;
    dlpArchiveQuota?: pulumi.Input<number>;
    fullFinalWarningThreshold?: pulumi.Input<number>;
    fullFirstWarningThreshold?: pulumi.Input<number>;
    fullSecondWarningThreshold?: pulumi.Input<number>;
    interface?: pulumi.Input<string>;
    interfaceSelectMethod?: pulumi.Input<string>;
    ipsArchive?: pulumi.Input<string>;
    logQuota?: pulumi.Input<number>;
    maxLogFileSize?: pulumi.Input<number>;
    maxPolicyPacketCaptureSize?: pulumi.Input<number>;
    maximumLogAge?: pulumi.Input<number>;
    reportQuota?: pulumi.Input<number>;
    rollDay?: pulumi.Input<string>;
    rollSchedule?: pulumi.Input<string>;
    rollTime?: pulumi.Input<string>;
    sourceIp?: pulumi.Input<string>;
    status?: pulumi.Input<string>;
    upload?: pulumi.Input<string>;
    uploadDeleteFiles?: pulumi.Input<string>;
    uploadDestination?: pulumi.Input<string>;
    uploadSslConn?: pulumi.Input<string>;
    uploaddir?: pulumi.Input<string>;
    uploadip?: pulumi.Input<string>;
    uploadpass?: pulumi.Input<string>;
    uploadport?: pulumi.Input<number>;
    uploadsched?: pulumi.Input<string>;
    uploadtime?: pulumi.Input<string>;
    uploadtype?: pulumi.Input<string>;
    uploaduser?: pulumi.Input<string>;
    vdomparam?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a LogdiskSetting resource.
 */
export interface LogdiskSettingArgs {
    diskfull?: pulumi.Input<string>;
    dlpArchiveQuota?: pulumi.Input<number>;
    fullFinalWarningThreshold?: pulumi.Input<number>;
    fullFirstWarningThreshold?: pulumi.Input<number>;
    fullSecondWarningThreshold?: pulumi.Input<number>;
    interface?: pulumi.Input<string>;
    interfaceSelectMethod?: pulumi.Input<string>;
    ipsArchive?: pulumi.Input<string>;
    logQuota?: pulumi.Input<number>;
    maxLogFileSize?: pulumi.Input<number>;
    maxPolicyPacketCaptureSize?: pulumi.Input<number>;
    maximumLogAge?: pulumi.Input<number>;
    reportQuota?: pulumi.Input<number>;
    rollDay?: pulumi.Input<string>;
    rollSchedule?: pulumi.Input<string>;
    rollTime?: pulumi.Input<string>;
    sourceIp?: pulumi.Input<string>;
    status: pulumi.Input<string>;
    upload?: pulumi.Input<string>;
    uploadDeleteFiles?: pulumi.Input<string>;
    uploadDestination?: pulumi.Input<string>;
    uploadSslConn?: pulumi.Input<string>;
    uploaddir?: pulumi.Input<string>;
    uploadip?: pulumi.Input<string>;
    uploadpass?: pulumi.Input<string>;
    uploadport?: pulumi.Input<number>;
    uploadsched?: pulumi.Input<string>;
    uploadtime?: pulumi.Input<string>;
    uploadtype?: pulumi.Input<string>;
    uploaduser?: pulumi.Input<string>;
    vdomparam?: pulumi.Input<string>;
}
