// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class SystempLogSyslogdSetting extends pulumi.CustomResource {
    /**
     * Get an existing SystempLogSyslogdSetting resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SystempLogSyslogdSettingState, opts?: pulumi.CustomResourceOptions): SystempLogSyslogdSetting {
        return new SystempLogSyslogdSetting(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'fortimanager:index/systempLogSyslogdSetting:SystempLogSyslogdSetting';

    /**
     * Returns true if the given object is an instance of SystempLogSyslogdSetting.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is SystempLogSyslogdSetting {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === SystempLogSyslogdSetting.__pulumiType;
    }

    public readonly adom!: pulumi.Output<string | undefined>;
    public readonly certificate!: pulumi.Output<string | undefined>;
    public readonly customFieldNames!: pulumi.Output<outputs.SystempLogSyslogdSettingCustomFieldName[] | undefined>;
    public readonly devprof!: pulumi.Output<string>;
    public readonly dynamicSortSubtable!: pulumi.Output<string | undefined>;
    public readonly encAlgorithm!: pulumi.Output<string>;
    public readonly facility!: pulumi.Output<string>;
    public readonly format!: pulumi.Output<string>;
    public readonly interface!: pulumi.Output<string | undefined>;
    public readonly interfaceSelectMethod!: pulumi.Output<string>;
    public readonly maxLogRate!: pulumi.Output<number | undefined>;
    public readonly mode!: pulumi.Output<string>;
    public readonly port!: pulumi.Output<number>;
    public readonly priority!: pulumi.Output<string>;
    public readonly scopetype!: pulumi.Output<string | undefined>;
    public readonly server!: pulumi.Output<string | undefined>;
    public readonly sslMinProtoVersion!: pulumi.Output<string>;
    public readonly status!: pulumi.Output<string>;

    /**
     * Create a SystempLogSyslogdSetting resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SystempLogSyslogdSettingArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: SystempLogSyslogdSettingArgs | SystempLogSyslogdSettingState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as SystempLogSyslogdSettingState | undefined;
            resourceInputs["adom"] = state ? state.adom : undefined;
            resourceInputs["certificate"] = state ? state.certificate : undefined;
            resourceInputs["customFieldNames"] = state ? state.customFieldNames : undefined;
            resourceInputs["devprof"] = state ? state.devprof : undefined;
            resourceInputs["dynamicSortSubtable"] = state ? state.dynamicSortSubtable : undefined;
            resourceInputs["encAlgorithm"] = state ? state.encAlgorithm : undefined;
            resourceInputs["facility"] = state ? state.facility : undefined;
            resourceInputs["format"] = state ? state.format : undefined;
            resourceInputs["interface"] = state ? state.interface : undefined;
            resourceInputs["interfaceSelectMethod"] = state ? state.interfaceSelectMethod : undefined;
            resourceInputs["maxLogRate"] = state ? state.maxLogRate : undefined;
            resourceInputs["mode"] = state ? state.mode : undefined;
            resourceInputs["port"] = state ? state.port : undefined;
            resourceInputs["priority"] = state ? state.priority : undefined;
            resourceInputs["scopetype"] = state ? state.scopetype : undefined;
            resourceInputs["server"] = state ? state.server : undefined;
            resourceInputs["sslMinProtoVersion"] = state ? state.sslMinProtoVersion : undefined;
            resourceInputs["status"] = state ? state.status : undefined;
        } else {
            const args = argsOrState as SystempLogSyslogdSettingArgs | undefined;
            if ((!args || args.devprof === undefined) && !opts.urn) {
                throw new Error("Missing required property 'devprof'");
            }
            resourceInputs["adom"] = args ? args.adom : undefined;
            resourceInputs["certificate"] = args ? args.certificate : undefined;
            resourceInputs["customFieldNames"] = args ? args.customFieldNames : undefined;
            resourceInputs["devprof"] = args ? args.devprof : undefined;
            resourceInputs["dynamicSortSubtable"] = args ? args.dynamicSortSubtable : undefined;
            resourceInputs["encAlgorithm"] = args ? args.encAlgorithm : undefined;
            resourceInputs["facility"] = args ? args.facility : undefined;
            resourceInputs["format"] = args ? args.format : undefined;
            resourceInputs["interface"] = args ? args.interface : undefined;
            resourceInputs["interfaceSelectMethod"] = args ? args.interfaceSelectMethod : undefined;
            resourceInputs["maxLogRate"] = args ? args.maxLogRate : undefined;
            resourceInputs["mode"] = args ? args.mode : undefined;
            resourceInputs["port"] = args ? args.port : undefined;
            resourceInputs["priority"] = args ? args.priority : undefined;
            resourceInputs["scopetype"] = args ? args.scopetype : undefined;
            resourceInputs["server"] = args ? args.server : undefined;
            resourceInputs["sslMinProtoVersion"] = args ? args.sslMinProtoVersion : undefined;
            resourceInputs["status"] = args ? args.status : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(SystempLogSyslogdSetting.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering SystempLogSyslogdSetting resources.
 */
export interface SystempLogSyslogdSettingState {
    adom?: pulumi.Input<string>;
    certificate?: pulumi.Input<string>;
    customFieldNames?: pulumi.Input<pulumi.Input<inputs.SystempLogSyslogdSettingCustomFieldName>[]>;
    devprof?: pulumi.Input<string>;
    dynamicSortSubtable?: pulumi.Input<string>;
    encAlgorithm?: pulumi.Input<string>;
    facility?: pulumi.Input<string>;
    format?: pulumi.Input<string>;
    interface?: pulumi.Input<string>;
    interfaceSelectMethod?: pulumi.Input<string>;
    maxLogRate?: pulumi.Input<number>;
    mode?: pulumi.Input<string>;
    port?: pulumi.Input<number>;
    priority?: pulumi.Input<string>;
    scopetype?: pulumi.Input<string>;
    server?: pulumi.Input<string>;
    sslMinProtoVersion?: pulumi.Input<string>;
    status?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a SystempLogSyslogdSetting resource.
 */
export interface SystempLogSyslogdSettingArgs {
    adom?: pulumi.Input<string>;
    certificate?: pulumi.Input<string>;
    customFieldNames?: pulumi.Input<pulumi.Input<inputs.SystempLogSyslogdSettingCustomFieldName>[]>;
    devprof: pulumi.Input<string>;
    dynamicSortSubtable?: pulumi.Input<string>;
    encAlgorithm?: pulumi.Input<string>;
    facility?: pulumi.Input<string>;
    format?: pulumi.Input<string>;
    interface?: pulumi.Input<string>;
    interfaceSelectMethod?: pulumi.Input<string>;
    maxLogRate?: pulumi.Input<number>;
    mode?: pulumi.Input<string>;
    port?: pulumi.Input<number>;
    priority?: pulumi.Input<string>;
    scopetype?: pulumi.Input<string>;
    server?: pulumi.Input<string>;
    sslMinProtoVersion?: pulumi.Input<string>;
    status?: pulumi.Input<string>;
}
