// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class LogSyslogd3Filter extends pulumi.CustomResource {
    /**
     * Get an existing LogSyslogd3Filter resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: LogSyslogd3FilterState, opts?: pulumi.CustomResourceOptions): LogSyslogd3Filter {
        return new LogSyslogd3Filter(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'fmgdevice:index/logSyslogd3Filter:LogSyslogd3Filter';

    /**
     * Returns true if the given object is an instance of LogSyslogd3Filter.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is LogSyslogd3Filter {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === LogSyslogd3Filter.__pulumiType;
    }

    public readonly anomaly!: pulumi.Output<string | undefined>;
    public readonly deviceName!: pulumi.Output<string>;
    public readonly dynamicSortSubtable!: pulumi.Output<string | undefined>;
    public readonly filter!: pulumi.Output<string | undefined>;
    public readonly filterType!: pulumi.Output<string | undefined>;
    public readonly fortiSwitch!: pulumi.Output<string>;
    public readonly forwardTraffic!: pulumi.Output<string>;
    public readonly freeStyles!: pulumi.Output<outputs.LogSyslogd3FilterFreeStyle[] | undefined>;
    public readonly gtp!: pulumi.Output<string>;
    public readonly localTraffic!: pulumi.Output<string>;
    public readonly multicastTraffic!: pulumi.Output<string>;
    public readonly severity!: pulumi.Output<string>;
    public readonly snifferTraffic!: pulumi.Output<string>;
    public readonly voip!: pulumi.Output<string>;
    public readonly ztnaTraffic!: pulumi.Output<string>;

    /**
     * Create a LogSyslogd3Filter resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: LogSyslogd3FilterArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: LogSyslogd3FilterArgs | LogSyslogd3FilterState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as LogSyslogd3FilterState | undefined;
            resourceInputs["anomaly"] = state ? state.anomaly : undefined;
            resourceInputs["deviceName"] = state ? state.deviceName : undefined;
            resourceInputs["dynamicSortSubtable"] = state ? state.dynamicSortSubtable : undefined;
            resourceInputs["filter"] = state ? state.filter : undefined;
            resourceInputs["filterType"] = state ? state.filterType : undefined;
            resourceInputs["fortiSwitch"] = state ? state.fortiSwitch : undefined;
            resourceInputs["forwardTraffic"] = state ? state.forwardTraffic : undefined;
            resourceInputs["freeStyles"] = state ? state.freeStyles : undefined;
            resourceInputs["gtp"] = state ? state.gtp : undefined;
            resourceInputs["localTraffic"] = state ? state.localTraffic : undefined;
            resourceInputs["multicastTraffic"] = state ? state.multicastTraffic : undefined;
            resourceInputs["severity"] = state ? state.severity : undefined;
            resourceInputs["snifferTraffic"] = state ? state.snifferTraffic : undefined;
            resourceInputs["voip"] = state ? state.voip : undefined;
            resourceInputs["ztnaTraffic"] = state ? state.ztnaTraffic : undefined;
        } else {
            const args = argsOrState as LogSyslogd3FilterArgs | undefined;
            resourceInputs["anomaly"] = args ? args.anomaly : undefined;
            resourceInputs["deviceName"] = args ? args.deviceName : undefined;
            resourceInputs["dynamicSortSubtable"] = args ? args.dynamicSortSubtable : undefined;
            resourceInputs["filter"] = args ? args.filter : undefined;
            resourceInputs["filterType"] = args ? args.filterType : undefined;
            resourceInputs["fortiSwitch"] = args ? args.fortiSwitch : undefined;
            resourceInputs["forwardTraffic"] = args ? args.forwardTraffic : undefined;
            resourceInputs["freeStyles"] = args ? args.freeStyles : undefined;
            resourceInputs["gtp"] = args ? args.gtp : undefined;
            resourceInputs["localTraffic"] = args ? args.localTraffic : undefined;
            resourceInputs["multicastTraffic"] = args ? args.multicastTraffic : undefined;
            resourceInputs["severity"] = args ? args.severity : undefined;
            resourceInputs["snifferTraffic"] = args ? args.snifferTraffic : undefined;
            resourceInputs["voip"] = args ? args.voip : undefined;
            resourceInputs["ztnaTraffic"] = args ? args.ztnaTraffic : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(LogSyslogd3Filter.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering LogSyslogd3Filter resources.
 */
export interface LogSyslogd3FilterState {
    anomaly?: pulumi.Input<string>;
    deviceName?: pulumi.Input<string>;
    dynamicSortSubtable?: pulumi.Input<string>;
    filter?: pulumi.Input<string>;
    filterType?: pulumi.Input<string>;
    fortiSwitch?: pulumi.Input<string>;
    forwardTraffic?: pulumi.Input<string>;
    freeStyles?: pulumi.Input<pulumi.Input<inputs.LogSyslogd3FilterFreeStyle>[]>;
    gtp?: pulumi.Input<string>;
    localTraffic?: pulumi.Input<string>;
    multicastTraffic?: pulumi.Input<string>;
    severity?: pulumi.Input<string>;
    snifferTraffic?: pulumi.Input<string>;
    voip?: pulumi.Input<string>;
    ztnaTraffic?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a LogSyslogd3Filter resource.
 */
export interface LogSyslogd3FilterArgs {
    anomaly?: pulumi.Input<string>;
    deviceName?: pulumi.Input<string>;
    dynamicSortSubtable?: pulumi.Input<string>;
    filter?: pulumi.Input<string>;
    filterType?: pulumi.Input<string>;
    fortiSwitch?: pulumi.Input<string>;
    forwardTraffic?: pulumi.Input<string>;
    freeStyles?: pulumi.Input<pulumi.Input<inputs.LogSyslogd3FilterFreeStyle>[]>;
    gtp?: pulumi.Input<string>;
    localTraffic?: pulumi.Input<string>;
    multicastTraffic?: pulumi.Input<string>;
    severity?: pulumi.Input<string>;
    snifferTraffic?: pulumi.Input<string>;
    voip?: pulumi.Input<string>;
    ztnaTraffic?: pulumi.Input<string>;
}
