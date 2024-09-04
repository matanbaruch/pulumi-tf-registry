// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class LogSyslogd3SettingCustomfieldname extends pulumi.CustomResource {
    /**
     * Get an existing LogSyslogd3SettingCustomfieldname resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: LogSyslogd3SettingCustomfieldnameState, opts?: pulumi.CustomResourceOptions): LogSyslogd3SettingCustomfieldname {
        return new LogSyslogd3SettingCustomfieldname(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'fmgdevice:index/logSyslogd3SettingCustomfieldname:LogSyslogd3SettingCustomfieldname';

    /**
     * Returns true if the given object is an instance of LogSyslogd3SettingCustomfieldname.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is LogSyslogd3SettingCustomfieldname {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === LogSyslogd3SettingCustomfieldname.__pulumiType;
    }

    public readonly custom!: pulumi.Output<string | undefined>;
    public readonly deviceName!: pulumi.Output<string>;
    public readonly fosid!: pulumi.Output<number | undefined>;
    public readonly name!: pulumi.Output<string>;

    /**
     * Create a LogSyslogd3SettingCustomfieldname resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: LogSyslogd3SettingCustomfieldnameArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: LogSyslogd3SettingCustomfieldnameArgs | LogSyslogd3SettingCustomfieldnameState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as LogSyslogd3SettingCustomfieldnameState | undefined;
            resourceInputs["custom"] = state ? state.custom : undefined;
            resourceInputs["deviceName"] = state ? state.deviceName : undefined;
            resourceInputs["fosid"] = state ? state.fosid : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
        } else {
            const args = argsOrState as LogSyslogd3SettingCustomfieldnameArgs | undefined;
            resourceInputs["custom"] = args ? args.custom : undefined;
            resourceInputs["deviceName"] = args ? args.deviceName : undefined;
            resourceInputs["fosid"] = args ? args.fosid : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(LogSyslogd3SettingCustomfieldname.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering LogSyslogd3SettingCustomfieldname resources.
 */
export interface LogSyslogd3SettingCustomfieldnameState {
    custom?: pulumi.Input<string>;
    deviceName?: pulumi.Input<string>;
    fosid?: pulumi.Input<number>;
    name?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a LogSyslogd3SettingCustomfieldname resource.
 */
export interface LogSyslogd3SettingCustomfieldnameArgs {
    custom?: pulumi.Input<string>;
    deviceName?: pulumi.Input<string>;
    fosid?: pulumi.Input<number>;
    name?: pulumi.Input<string>;
}
