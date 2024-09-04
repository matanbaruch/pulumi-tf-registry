// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class SystemAutoscript extends pulumi.CustomResource {
    /**
     * Get an existing SystemAutoscript resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SystemAutoscriptState, opts?: pulumi.CustomResourceOptions): SystemAutoscript {
        return new SystemAutoscript(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'fmgdevice:index/systemAutoscript:SystemAutoscript';

    /**
     * Returns true if the given object is an instance of SystemAutoscript.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is SystemAutoscript {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === SystemAutoscript.__pulumiType;
    }

    public readonly deviceName!: pulumi.Output<string>;
    public readonly interval!: pulumi.Output<number | undefined>;
    public readonly name!: pulumi.Output<string>;
    public readonly outputSize!: pulumi.Output<number>;
    public readonly repeat!: pulumi.Output<number>;
    public readonly script!: pulumi.Output<string | undefined>;
    public readonly start!: pulumi.Output<string>;
    public readonly timeout!: pulumi.Output<number | undefined>;

    /**
     * Create a SystemAutoscript resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: SystemAutoscriptArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: SystemAutoscriptArgs | SystemAutoscriptState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as SystemAutoscriptState | undefined;
            resourceInputs["deviceName"] = state ? state.deviceName : undefined;
            resourceInputs["interval"] = state ? state.interval : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["outputSize"] = state ? state.outputSize : undefined;
            resourceInputs["repeat"] = state ? state.repeat : undefined;
            resourceInputs["script"] = state ? state.script : undefined;
            resourceInputs["start"] = state ? state.start : undefined;
            resourceInputs["timeout"] = state ? state.timeout : undefined;
        } else {
            const args = argsOrState as SystemAutoscriptArgs | undefined;
            resourceInputs["deviceName"] = args ? args.deviceName : undefined;
            resourceInputs["interval"] = args ? args.interval : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["outputSize"] = args ? args.outputSize : undefined;
            resourceInputs["repeat"] = args ? args.repeat : undefined;
            resourceInputs["script"] = args ? args.script : undefined;
            resourceInputs["start"] = args ? args.start : undefined;
            resourceInputs["timeout"] = args ? args.timeout : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(SystemAutoscript.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering SystemAutoscript resources.
 */
export interface SystemAutoscriptState {
    deviceName?: pulumi.Input<string>;
    interval?: pulumi.Input<number>;
    name?: pulumi.Input<string>;
    outputSize?: pulumi.Input<number>;
    repeat?: pulumi.Input<number>;
    script?: pulumi.Input<string>;
    start?: pulumi.Input<string>;
    timeout?: pulumi.Input<number>;
}

/**
 * The set of arguments for constructing a SystemAutoscript resource.
 */
export interface SystemAutoscriptArgs {
    deviceName?: pulumi.Input<string>;
    interval?: pulumi.Input<number>;
    name?: pulumi.Input<string>;
    outputSize?: pulumi.Input<number>;
    repeat?: pulumi.Input<number>;
    script?: pulumi.Input<string>;
    start?: pulumi.Input<string>;
    timeout?: pulumi.Input<number>;
}
