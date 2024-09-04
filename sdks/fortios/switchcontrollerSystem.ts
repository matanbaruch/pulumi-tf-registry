// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class SwitchcontrollerSystem extends pulumi.CustomResource {
    /**
     * Get an existing SwitchcontrollerSystem resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SwitchcontrollerSystemState, opts?: pulumi.CustomResourceOptions): SwitchcontrollerSystem {
        return new SwitchcontrollerSystem(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'fortios:index/switchcontrollerSystem:SwitchcontrollerSystem';

    /**
     * Returns true if the given object is an instance of SwitchcontrollerSystem.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is SwitchcontrollerSystem {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === SwitchcontrollerSystem.__pulumiType;
    }

    public readonly caputpEchoInterval!: pulumi.Output<number>;
    public readonly caputpMaxRetransmit!: pulumi.Output<number>;
    public readonly dataSyncInterval!: pulumi.Output<number>;
    public readonly dynamicPeriodicInterval!: pulumi.Output<number>;
    public readonly iotHoldoff!: pulumi.Output<number>;
    public readonly iotMacIdle!: pulumi.Output<number>;
    public readonly iotScanInterval!: pulumi.Output<number>;
    public readonly iotWeightThreshold!: pulumi.Output<number>;
    public readonly nacPeriodicInterval!: pulumi.Output<number>;
    public readonly parallelProcess!: pulumi.Output<number>;
    public readonly parallelProcessOverride!: pulumi.Output<string>;
    public readonly tunnelMode!: pulumi.Output<string>;
    public readonly vdomparam!: pulumi.Output<string>;

    /**
     * Create a SwitchcontrollerSystem resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: SwitchcontrollerSystemArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: SwitchcontrollerSystemArgs | SwitchcontrollerSystemState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as SwitchcontrollerSystemState | undefined;
            resourceInputs["caputpEchoInterval"] = state ? state.caputpEchoInterval : undefined;
            resourceInputs["caputpMaxRetransmit"] = state ? state.caputpMaxRetransmit : undefined;
            resourceInputs["dataSyncInterval"] = state ? state.dataSyncInterval : undefined;
            resourceInputs["dynamicPeriodicInterval"] = state ? state.dynamicPeriodicInterval : undefined;
            resourceInputs["iotHoldoff"] = state ? state.iotHoldoff : undefined;
            resourceInputs["iotMacIdle"] = state ? state.iotMacIdle : undefined;
            resourceInputs["iotScanInterval"] = state ? state.iotScanInterval : undefined;
            resourceInputs["iotWeightThreshold"] = state ? state.iotWeightThreshold : undefined;
            resourceInputs["nacPeriodicInterval"] = state ? state.nacPeriodicInterval : undefined;
            resourceInputs["parallelProcess"] = state ? state.parallelProcess : undefined;
            resourceInputs["parallelProcessOverride"] = state ? state.parallelProcessOverride : undefined;
            resourceInputs["tunnelMode"] = state ? state.tunnelMode : undefined;
            resourceInputs["vdomparam"] = state ? state.vdomparam : undefined;
        } else {
            const args = argsOrState as SwitchcontrollerSystemArgs | undefined;
            resourceInputs["caputpEchoInterval"] = args ? args.caputpEchoInterval : undefined;
            resourceInputs["caputpMaxRetransmit"] = args ? args.caputpMaxRetransmit : undefined;
            resourceInputs["dataSyncInterval"] = args ? args.dataSyncInterval : undefined;
            resourceInputs["dynamicPeriodicInterval"] = args ? args.dynamicPeriodicInterval : undefined;
            resourceInputs["iotHoldoff"] = args ? args.iotHoldoff : undefined;
            resourceInputs["iotMacIdle"] = args ? args.iotMacIdle : undefined;
            resourceInputs["iotScanInterval"] = args ? args.iotScanInterval : undefined;
            resourceInputs["iotWeightThreshold"] = args ? args.iotWeightThreshold : undefined;
            resourceInputs["nacPeriodicInterval"] = args ? args.nacPeriodicInterval : undefined;
            resourceInputs["parallelProcess"] = args ? args.parallelProcess : undefined;
            resourceInputs["parallelProcessOverride"] = args ? args.parallelProcessOverride : undefined;
            resourceInputs["tunnelMode"] = args ? args.tunnelMode : undefined;
            resourceInputs["vdomparam"] = args ? args.vdomparam : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(SwitchcontrollerSystem.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering SwitchcontrollerSystem resources.
 */
export interface SwitchcontrollerSystemState {
    caputpEchoInterval?: pulumi.Input<number>;
    caputpMaxRetransmit?: pulumi.Input<number>;
    dataSyncInterval?: pulumi.Input<number>;
    dynamicPeriodicInterval?: pulumi.Input<number>;
    iotHoldoff?: pulumi.Input<number>;
    iotMacIdle?: pulumi.Input<number>;
    iotScanInterval?: pulumi.Input<number>;
    iotWeightThreshold?: pulumi.Input<number>;
    nacPeriodicInterval?: pulumi.Input<number>;
    parallelProcess?: pulumi.Input<number>;
    parallelProcessOverride?: pulumi.Input<string>;
    tunnelMode?: pulumi.Input<string>;
    vdomparam?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a SwitchcontrollerSystem resource.
 */
export interface SwitchcontrollerSystemArgs {
    caputpEchoInterval?: pulumi.Input<number>;
    caputpMaxRetransmit?: pulumi.Input<number>;
    dataSyncInterval?: pulumi.Input<number>;
    dynamicPeriodicInterval?: pulumi.Input<number>;
    iotHoldoff?: pulumi.Input<number>;
    iotMacIdle?: pulumi.Input<number>;
    iotScanInterval?: pulumi.Input<number>;
    iotWeightThreshold?: pulumi.Input<number>;
    nacPeriodicInterval?: pulumi.Input<number>;
    parallelProcess?: pulumi.Input<number>;
    parallelProcessOverride?: pulumi.Input<string>;
    tunnelMode?: pulumi.Input<string>;
    vdomparam?: pulumi.Input<string>;
}
