// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class ThreatDetectionInstance extends pulumi.CustomResource {
    /**
     * Get an existing ThreatDetectionInstance resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ThreatDetectionInstanceState, opts?: pulumi.CustomResourceOptions): ThreatDetectionInstance {
        return new ThreatDetectionInstance(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'alicloud:index/threatDetectionInstance:ThreatDetectionInstance';

    /**
     * Returns true if the given object is an instance of ThreatDetectionInstance.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ThreatDetectionInstance {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ThreatDetectionInstance.__pulumiType;
    }

    public readonly buyNumber!: pulumi.Output<string | undefined>;
    /**
     * @deprecated Deprecated
     */
    public readonly containerImageScan!: pulumi.Output<string | undefined>;
    public readonly containerImageScanNew!: pulumi.Output<string | undefined>;
    public /*out*/ readonly createTime!: pulumi.Output<string>;
    public readonly honeypot!: pulumi.Output<string | undefined>;
    public readonly honeypotSwitch!: pulumi.Output<string>;
    public readonly modifyType!: pulumi.Output<string | undefined>;
    public readonly paymentType!: pulumi.Output<string>;
    public readonly period!: pulumi.Output<number | undefined>;
    public readonly raspCount!: pulumi.Output<string | undefined>;
    public readonly renewPeriod!: pulumi.Output<number>;
    public readonly renewalPeriodUnit!: pulumi.Output<string>;
    public readonly renewalStatus!: pulumi.Output<string | undefined>;
    public readonly sasAntiRansomware!: pulumi.Output<string | undefined>;
    public readonly sasCspm!: pulumi.Output<string | undefined>;
    public readonly sasCspmSwitch!: pulumi.Output<string>;
    public readonly sasSc!: pulumi.Output<boolean | undefined>;
    public readonly sasSdk!: pulumi.Output<string | undefined>;
    public readonly sasSdkSwitch!: pulumi.Output<string>;
    public readonly sasSlsStorage!: pulumi.Output<string | undefined>;
    public readonly sasWebguardBoolean!: pulumi.Output<string>;
    public readonly sasWebguardOrderNum!: pulumi.Output<string | undefined>;
    public /*out*/ readonly status!: pulumi.Output<string>;
    public readonly threatAnalysis!: pulumi.Output<string | undefined>;
    public readonly threatAnalysisSwitch!: pulumi.Output<string>;
    public readonly timeouts!: pulumi.Output<outputs.ThreatDetectionInstanceTimeouts | undefined>;
    public readonly vCore!: pulumi.Output<string | undefined>;
    public readonly versionCode!: pulumi.Output<string>;
    public readonly vulCount!: pulumi.Output<string | undefined>;
    public readonly vulSwitch!: pulumi.Output<string>;

    /**
     * Create a ThreatDetectionInstance resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ThreatDetectionInstanceArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ThreatDetectionInstanceArgs | ThreatDetectionInstanceState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as ThreatDetectionInstanceState | undefined;
            resourceInputs["buyNumber"] = state ? state.buyNumber : undefined;
            resourceInputs["containerImageScan"] = state ? state.containerImageScan : undefined;
            resourceInputs["containerImageScanNew"] = state ? state.containerImageScanNew : undefined;
            resourceInputs["createTime"] = state ? state.createTime : undefined;
            resourceInputs["honeypot"] = state ? state.honeypot : undefined;
            resourceInputs["honeypotSwitch"] = state ? state.honeypotSwitch : undefined;
            resourceInputs["modifyType"] = state ? state.modifyType : undefined;
            resourceInputs["paymentType"] = state ? state.paymentType : undefined;
            resourceInputs["period"] = state ? state.period : undefined;
            resourceInputs["raspCount"] = state ? state.raspCount : undefined;
            resourceInputs["renewPeriod"] = state ? state.renewPeriod : undefined;
            resourceInputs["renewalPeriodUnit"] = state ? state.renewalPeriodUnit : undefined;
            resourceInputs["renewalStatus"] = state ? state.renewalStatus : undefined;
            resourceInputs["sasAntiRansomware"] = state ? state.sasAntiRansomware : undefined;
            resourceInputs["sasCspm"] = state ? state.sasCspm : undefined;
            resourceInputs["sasCspmSwitch"] = state ? state.sasCspmSwitch : undefined;
            resourceInputs["sasSc"] = state ? state.sasSc : undefined;
            resourceInputs["sasSdk"] = state ? state.sasSdk : undefined;
            resourceInputs["sasSdkSwitch"] = state ? state.sasSdkSwitch : undefined;
            resourceInputs["sasSlsStorage"] = state ? state.sasSlsStorage : undefined;
            resourceInputs["sasWebguardBoolean"] = state ? state.sasWebguardBoolean : undefined;
            resourceInputs["sasWebguardOrderNum"] = state ? state.sasWebguardOrderNum : undefined;
            resourceInputs["status"] = state ? state.status : undefined;
            resourceInputs["threatAnalysis"] = state ? state.threatAnalysis : undefined;
            resourceInputs["threatAnalysisSwitch"] = state ? state.threatAnalysisSwitch : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
            resourceInputs["vCore"] = state ? state.vCore : undefined;
            resourceInputs["versionCode"] = state ? state.versionCode : undefined;
            resourceInputs["vulCount"] = state ? state.vulCount : undefined;
            resourceInputs["vulSwitch"] = state ? state.vulSwitch : undefined;
        } else {
            const args = argsOrState as ThreatDetectionInstanceArgs | undefined;
            if ((!args || args.paymentType === undefined) && !opts.urn) {
                throw new Error("Missing required property 'paymentType'");
            }
            if ((!args || args.versionCode === undefined) && !opts.urn) {
                throw new Error("Missing required property 'versionCode'");
            }
            resourceInputs["buyNumber"] = args ? args.buyNumber : undefined;
            resourceInputs["containerImageScan"] = args ? args.containerImageScan : undefined;
            resourceInputs["containerImageScanNew"] = args ? args.containerImageScanNew : undefined;
            resourceInputs["honeypot"] = args ? args.honeypot : undefined;
            resourceInputs["honeypotSwitch"] = args ? args.honeypotSwitch : undefined;
            resourceInputs["modifyType"] = args ? args.modifyType : undefined;
            resourceInputs["paymentType"] = args ? args.paymentType : undefined;
            resourceInputs["period"] = args ? args.period : undefined;
            resourceInputs["raspCount"] = args ? args.raspCount : undefined;
            resourceInputs["renewPeriod"] = args ? args.renewPeriod : undefined;
            resourceInputs["renewalPeriodUnit"] = args ? args.renewalPeriodUnit : undefined;
            resourceInputs["renewalStatus"] = args ? args.renewalStatus : undefined;
            resourceInputs["sasAntiRansomware"] = args ? args.sasAntiRansomware : undefined;
            resourceInputs["sasCspm"] = args ? args.sasCspm : undefined;
            resourceInputs["sasCspmSwitch"] = args ? args.sasCspmSwitch : undefined;
            resourceInputs["sasSc"] = args ? args.sasSc : undefined;
            resourceInputs["sasSdk"] = args ? args.sasSdk : undefined;
            resourceInputs["sasSdkSwitch"] = args ? args.sasSdkSwitch : undefined;
            resourceInputs["sasSlsStorage"] = args ? args.sasSlsStorage : undefined;
            resourceInputs["sasWebguardBoolean"] = args ? args.sasWebguardBoolean : undefined;
            resourceInputs["sasWebguardOrderNum"] = args ? args.sasWebguardOrderNum : undefined;
            resourceInputs["threatAnalysis"] = args ? args.threatAnalysis : undefined;
            resourceInputs["threatAnalysisSwitch"] = args ? args.threatAnalysisSwitch : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["vCore"] = args ? args.vCore : undefined;
            resourceInputs["versionCode"] = args ? args.versionCode : undefined;
            resourceInputs["vulCount"] = args ? args.vulCount : undefined;
            resourceInputs["vulSwitch"] = args ? args.vulSwitch : undefined;
            resourceInputs["createTime"] = undefined /*out*/;
            resourceInputs["status"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(ThreatDetectionInstance.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering ThreatDetectionInstance resources.
 */
export interface ThreatDetectionInstanceState {
    buyNumber?: pulumi.Input<string>;
    /**
     * @deprecated Deprecated
     */
    containerImageScan?: pulumi.Input<string>;
    containerImageScanNew?: pulumi.Input<string>;
    createTime?: pulumi.Input<string>;
    honeypot?: pulumi.Input<string>;
    honeypotSwitch?: pulumi.Input<string>;
    modifyType?: pulumi.Input<string>;
    paymentType?: pulumi.Input<string>;
    period?: pulumi.Input<number>;
    raspCount?: pulumi.Input<string>;
    renewPeriod?: pulumi.Input<number>;
    renewalPeriodUnit?: pulumi.Input<string>;
    renewalStatus?: pulumi.Input<string>;
    sasAntiRansomware?: pulumi.Input<string>;
    sasCspm?: pulumi.Input<string>;
    sasCspmSwitch?: pulumi.Input<string>;
    sasSc?: pulumi.Input<boolean>;
    sasSdk?: pulumi.Input<string>;
    sasSdkSwitch?: pulumi.Input<string>;
    sasSlsStorage?: pulumi.Input<string>;
    sasWebguardBoolean?: pulumi.Input<string>;
    sasWebguardOrderNum?: pulumi.Input<string>;
    status?: pulumi.Input<string>;
    threatAnalysis?: pulumi.Input<string>;
    threatAnalysisSwitch?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.ThreatDetectionInstanceTimeouts>;
    vCore?: pulumi.Input<string>;
    versionCode?: pulumi.Input<string>;
    vulCount?: pulumi.Input<string>;
    vulSwitch?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a ThreatDetectionInstance resource.
 */
export interface ThreatDetectionInstanceArgs {
    buyNumber?: pulumi.Input<string>;
    /**
     * @deprecated Deprecated
     */
    containerImageScan?: pulumi.Input<string>;
    containerImageScanNew?: pulumi.Input<string>;
    honeypot?: pulumi.Input<string>;
    honeypotSwitch?: pulumi.Input<string>;
    modifyType?: pulumi.Input<string>;
    paymentType: pulumi.Input<string>;
    period?: pulumi.Input<number>;
    raspCount?: pulumi.Input<string>;
    renewPeriod?: pulumi.Input<number>;
    renewalPeriodUnit?: pulumi.Input<string>;
    renewalStatus?: pulumi.Input<string>;
    sasAntiRansomware?: pulumi.Input<string>;
    sasCspm?: pulumi.Input<string>;
    sasCspmSwitch?: pulumi.Input<string>;
    sasSc?: pulumi.Input<boolean>;
    sasSdk?: pulumi.Input<string>;
    sasSdkSwitch?: pulumi.Input<string>;
    sasSlsStorage?: pulumi.Input<string>;
    sasWebguardBoolean?: pulumi.Input<string>;
    sasWebguardOrderNum?: pulumi.Input<string>;
    threatAnalysis?: pulumi.Input<string>;
    threatAnalysisSwitch?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.ThreatDetectionInstanceTimeouts>;
    vCore?: pulumi.Input<string>;
    versionCode: pulumi.Input<string>;
    vulCount?: pulumi.Input<string>;
    vulSwitch?: pulumi.Input<string>;
}
