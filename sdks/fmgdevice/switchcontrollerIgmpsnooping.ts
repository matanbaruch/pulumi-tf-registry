// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class SwitchcontrollerIgmpsnooping extends pulumi.CustomResource {
    /**
     * Get an existing SwitchcontrollerIgmpsnooping resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SwitchcontrollerIgmpsnoopingState, opts?: pulumi.CustomResourceOptions): SwitchcontrollerIgmpsnooping {
        return new SwitchcontrollerIgmpsnooping(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'fmgdevice:index/switchcontrollerIgmpsnooping:SwitchcontrollerIgmpsnooping';

    /**
     * Returns true if the given object is an instance of SwitchcontrollerIgmpsnooping.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is SwitchcontrollerIgmpsnooping {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === SwitchcontrollerIgmpsnooping.__pulumiType;
    }

    public readonly agingTime!: pulumi.Output<number>;
    public readonly deviceName!: pulumi.Output<string>;
    public readonly deviceVdom!: pulumi.Output<string>;
    public readonly floodUnknownMulticast!: pulumi.Output<string>;
    public readonly queryInterval!: pulumi.Output<number>;

    /**
     * Create a SwitchcontrollerIgmpsnooping resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: SwitchcontrollerIgmpsnoopingArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: SwitchcontrollerIgmpsnoopingArgs | SwitchcontrollerIgmpsnoopingState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as SwitchcontrollerIgmpsnoopingState | undefined;
            resourceInputs["agingTime"] = state ? state.agingTime : undefined;
            resourceInputs["deviceName"] = state ? state.deviceName : undefined;
            resourceInputs["deviceVdom"] = state ? state.deviceVdom : undefined;
            resourceInputs["floodUnknownMulticast"] = state ? state.floodUnknownMulticast : undefined;
            resourceInputs["queryInterval"] = state ? state.queryInterval : undefined;
        } else {
            const args = argsOrState as SwitchcontrollerIgmpsnoopingArgs | undefined;
            resourceInputs["agingTime"] = args ? args.agingTime : undefined;
            resourceInputs["deviceName"] = args ? args.deviceName : undefined;
            resourceInputs["deviceVdom"] = args ? args.deviceVdom : undefined;
            resourceInputs["floodUnknownMulticast"] = args ? args.floodUnknownMulticast : undefined;
            resourceInputs["queryInterval"] = args ? args.queryInterval : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(SwitchcontrollerIgmpsnooping.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering SwitchcontrollerIgmpsnooping resources.
 */
export interface SwitchcontrollerIgmpsnoopingState {
    agingTime?: pulumi.Input<number>;
    deviceName?: pulumi.Input<string>;
    deviceVdom?: pulumi.Input<string>;
    floodUnknownMulticast?: pulumi.Input<string>;
    queryInterval?: pulumi.Input<number>;
}

/**
 * The set of arguments for constructing a SwitchcontrollerIgmpsnooping resource.
 */
export interface SwitchcontrollerIgmpsnoopingArgs {
    agingTime?: pulumi.Input<number>;
    deviceName?: pulumi.Input<string>;
    deviceVdom?: pulumi.Input<string>;
    floodUnknownMulticast?: pulumi.Input<string>;
    queryInterval?: pulumi.Input<number>;
}
