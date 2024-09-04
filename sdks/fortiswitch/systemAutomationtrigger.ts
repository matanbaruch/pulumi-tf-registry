// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class SystemAutomationtrigger extends pulumi.CustomResource {
    /**
     * Get an existing SystemAutomationtrigger resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SystemAutomationtriggerState, opts?: pulumi.CustomResourceOptions): SystemAutomationtrigger {
        return new SystemAutomationtrigger(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'fortiswitch:index/systemAutomationtrigger:SystemAutomationtrigger';

    /**
     * Returns true if the given object is an instance of SystemAutomationtrigger.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is SystemAutomationtrigger {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === SystemAutomationtrigger.__pulumiType;
    }

    public readonly dynamicSortSubtable!: pulumi.Output<string | undefined>;
    public readonly eventType!: pulumi.Output<string>;
    public readonly fields!: pulumi.Output<outputs.SystemAutomationtriggerField[] | undefined>;
    public readonly logid!: pulumi.Output<string>;
    public readonly name!: pulumi.Output<string>;
    public readonly triggerDay!: pulumi.Output<number>;
    public readonly triggerFrequency!: pulumi.Output<string>;
    public readonly triggerHour!: pulumi.Output<number>;
    public readonly triggerMinute!: pulumi.Output<number>;
    public readonly triggerType!: pulumi.Output<string>;
    public readonly triggerWeekday!: pulumi.Output<string>;

    /**
     * Create a SystemAutomationtrigger resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: SystemAutomationtriggerArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: SystemAutomationtriggerArgs | SystemAutomationtriggerState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as SystemAutomationtriggerState | undefined;
            resourceInputs["dynamicSortSubtable"] = state ? state.dynamicSortSubtable : undefined;
            resourceInputs["eventType"] = state ? state.eventType : undefined;
            resourceInputs["fields"] = state ? state.fields : undefined;
            resourceInputs["logid"] = state ? state.logid : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["triggerDay"] = state ? state.triggerDay : undefined;
            resourceInputs["triggerFrequency"] = state ? state.triggerFrequency : undefined;
            resourceInputs["triggerHour"] = state ? state.triggerHour : undefined;
            resourceInputs["triggerMinute"] = state ? state.triggerMinute : undefined;
            resourceInputs["triggerType"] = state ? state.triggerType : undefined;
            resourceInputs["triggerWeekday"] = state ? state.triggerWeekday : undefined;
        } else {
            const args = argsOrState as SystemAutomationtriggerArgs | undefined;
            resourceInputs["dynamicSortSubtable"] = args ? args.dynamicSortSubtable : undefined;
            resourceInputs["eventType"] = args ? args.eventType : undefined;
            resourceInputs["fields"] = args ? args.fields : undefined;
            resourceInputs["logid"] = args ? args.logid : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["triggerDay"] = args ? args.triggerDay : undefined;
            resourceInputs["triggerFrequency"] = args ? args.triggerFrequency : undefined;
            resourceInputs["triggerHour"] = args ? args.triggerHour : undefined;
            resourceInputs["triggerMinute"] = args ? args.triggerMinute : undefined;
            resourceInputs["triggerType"] = args ? args.triggerType : undefined;
            resourceInputs["triggerWeekday"] = args ? args.triggerWeekday : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(SystemAutomationtrigger.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering SystemAutomationtrigger resources.
 */
export interface SystemAutomationtriggerState {
    dynamicSortSubtable?: pulumi.Input<string>;
    eventType?: pulumi.Input<string>;
    fields?: pulumi.Input<pulumi.Input<inputs.SystemAutomationtriggerField>[]>;
    logid?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    triggerDay?: pulumi.Input<number>;
    triggerFrequency?: pulumi.Input<string>;
    triggerHour?: pulumi.Input<number>;
    triggerMinute?: pulumi.Input<number>;
    triggerType?: pulumi.Input<string>;
    triggerWeekday?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a SystemAutomationtrigger resource.
 */
export interface SystemAutomationtriggerArgs {
    dynamicSortSubtable?: pulumi.Input<string>;
    eventType?: pulumi.Input<string>;
    fields?: pulumi.Input<pulumi.Input<inputs.SystemAutomationtriggerField>[]>;
    logid?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    triggerDay?: pulumi.Input<number>;
    triggerFrequency?: pulumi.Input<string>;
    triggerHour?: pulumi.Input<number>;
    triggerMinute?: pulumi.Input<number>;
    triggerType?: pulumi.Input<string>;
    triggerWeekday?: pulumi.Input<string>;
}
