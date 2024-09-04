// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class SystemLocallogSetting extends pulumi.CustomResource {
    /**
     * Get an existing SystemLocallogSetting resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SystemLocallogSettingState, opts?: pulumi.CustomResourceOptions): SystemLocallogSetting {
        return new SystemLocallogSetting(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'fortianalyzer:index/systemLocallogSetting:SystemLocallogSetting';

    /**
     * Returns true if the given object is an instance of SystemLocallogSetting.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is SystemLocallogSetting {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === SystemLocallogSetting.__pulumiType;
    }

    public readonly logDaemonCrash!: pulumi.Output<string>;
    public readonly logIntervalAdomPerfStats!: pulumi.Output<number>;
    public readonly logIntervalDevNoLogging!: pulumi.Output<number>;
    public readonly logIntervalDiskFull!: pulumi.Output<number>;
    public readonly logIntervalGbdayExceeded!: pulumi.Output<number>;
    public readonly noLogDetectionThreshold!: pulumi.Output<number>;

    /**
     * Create a SystemLocallogSetting resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: SystemLocallogSettingArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: SystemLocallogSettingArgs | SystemLocallogSettingState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as SystemLocallogSettingState | undefined;
            resourceInputs["logDaemonCrash"] = state ? state.logDaemonCrash : undefined;
            resourceInputs["logIntervalAdomPerfStats"] = state ? state.logIntervalAdomPerfStats : undefined;
            resourceInputs["logIntervalDevNoLogging"] = state ? state.logIntervalDevNoLogging : undefined;
            resourceInputs["logIntervalDiskFull"] = state ? state.logIntervalDiskFull : undefined;
            resourceInputs["logIntervalGbdayExceeded"] = state ? state.logIntervalGbdayExceeded : undefined;
            resourceInputs["noLogDetectionThreshold"] = state ? state.noLogDetectionThreshold : undefined;
        } else {
            const args = argsOrState as SystemLocallogSettingArgs | undefined;
            resourceInputs["logDaemonCrash"] = args ? args.logDaemonCrash : undefined;
            resourceInputs["logIntervalAdomPerfStats"] = args ? args.logIntervalAdomPerfStats : undefined;
            resourceInputs["logIntervalDevNoLogging"] = args ? args.logIntervalDevNoLogging : undefined;
            resourceInputs["logIntervalDiskFull"] = args ? args.logIntervalDiskFull : undefined;
            resourceInputs["logIntervalGbdayExceeded"] = args ? args.logIntervalGbdayExceeded : undefined;
            resourceInputs["noLogDetectionThreshold"] = args ? args.noLogDetectionThreshold : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(SystemLocallogSetting.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering SystemLocallogSetting resources.
 */
export interface SystemLocallogSettingState {
    logDaemonCrash?: pulumi.Input<string>;
    logIntervalAdomPerfStats?: pulumi.Input<number>;
    logIntervalDevNoLogging?: pulumi.Input<number>;
    logIntervalDiskFull?: pulumi.Input<number>;
    logIntervalGbdayExceeded?: pulumi.Input<number>;
    noLogDetectionThreshold?: pulumi.Input<number>;
}

/**
 * The set of arguments for constructing a SystemLocallogSetting resource.
 */
export interface SystemLocallogSettingArgs {
    logDaemonCrash?: pulumi.Input<string>;
    logIntervalAdomPerfStats?: pulumi.Input<number>;
    logIntervalDevNoLogging?: pulumi.Input<number>;
    logIntervalDiskFull?: pulumi.Input<number>;
    logIntervalGbdayExceeded?: pulumi.Input<number>;
    noLogDetectionThreshold?: pulumi.Input<number>;
}
