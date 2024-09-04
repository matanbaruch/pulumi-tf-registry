// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class WirelesscontrollerHotspot20H2qpoperatornameValuelist extends pulumi.CustomResource {
    /**
     * Get an existing WirelesscontrollerHotspot20H2qpoperatornameValuelist resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: WirelesscontrollerHotspot20H2qpoperatornameValuelistState, opts?: pulumi.CustomResourceOptions): WirelesscontrollerHotspot20H2qpoperatornameValuelist {
        return new WirelesscontrollerHotspot20H2qpoperatornameValuelist(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'fmgdevice:index/wirelesscontrollerHotspot20H2qpoperatornameValuelist:WirelesscontrollerHotspot20H2qpoperatornameValuelist';

    /**
     * Returns true if the given object is an instance of WirelesscontrollerHotspot20H2qpoperatornameValuelist.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is WirelesscontrollerHotspot20H2qpoperatornameValuelist {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === WirelesscontrollerHotspot20H2qpoperatornameValuelist.__pulumiType;
    }

    public readonly deviceName!: pulumi.Output<string>;
    public readonly deviceVdom!: pulumi.Output<string>;
    public readonly h2qpOperatorName!: pulumi.Output<string>;
    public readonly index!: pulumi.Output<number | undefined>;
    public readonly lang!: pulumi.Output<string>;
    public readonly value!: pulumi.Output<string | undefined>;

    /**
     * Create a WirelesscontrollerHotspot20H2qpoperatornameValuelist resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: WirelesscontrollerHotspot20H2qpoperatornameValuelistArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: WirelesscontrollerHotspot20H2qpoperatornameValuelistArgs | WirelesscontrollerHotspot20H2qpoperatornameValuelistState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as WirelesscontrollerHotspot20H2qpoperatornameValuelistState | undefined;
            resourceInputs["deviceName"] = state ? state.deviceName : undefined;
            resourceInputs["deviceVdom"] = state ? state.deviceVdom : undefined;
            resourceInputs["h2qpOperatorName"] = state ? state.h2qpOperatorName : undefined;
            resourceInputs["index"] = state ? state.index : undefined;
            resourceInputs["lang"] = state ? state.lang : undefined;
            resourceInputs["value"] = state ? state.value : undefined;
        } else {
            const args = argsOrState as WirelesscontrollerHotspot20H2qpoperatornameValuelistArgs | undefined;
            if ((!args || args.h2qpOperatorName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'h2qpOperatorName'");
            }
            resourceInputs["deviceName"] = args ? args.deviceName : undefined;
            resourceInputs["deviceVdom"] = args ? args.deviceVdom : undefined;
            resourceInputs["h2qpOperatorName"] = args ? args.h2qpOperatorName : undefined;
            resourceInputs["index"] = args ? args.index : undefined;
            resourceInputs["lang"] = args ? args.lang : undefined;
            resourceInputs["value"] = args ? args.value : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(WirelesscontrollerHotspot20H2qpoperatornameValuelist.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering WirelesscontrollerHotspot20H2qpoperatornameValuelist resources.
 */
export interface WirelesscontrollerHotspot20H2qpoperatornameValuelistState {
    deviceName?: pulumi.Input<string>;
    deviceVdom?: pulumi.Input<string>;
    h2qpOperatorName?: pulumi.Input<string>;
    index?: pulumi.Input<number>;
    lang?: pulumi.Input<string>;
    value?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a WirelesscontrollerHotspot20H2qpoperatornameValuelist resource.
 */
export interface WirelesscontrollerHotspot20H2qpoperatornameValuelistArgs {
    deviceName?: pulumi.Input<string>;
    deviceVdom?: pulumi.Input<string>;
    h2qpOperatorName: pulumi.Input<string>;
    index?: pulumi.Input<number>;
    lang?: pulumi.Input<string>;
    value?: pulumi.Input<string>;
}
