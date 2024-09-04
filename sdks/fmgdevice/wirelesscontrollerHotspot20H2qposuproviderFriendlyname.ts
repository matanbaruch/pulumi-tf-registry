// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class WirelesscontrollerHotspot20H2qposuproviderFriendlyname extends pulumi.CustomResource {
    /**
     * Get an existing WirelesscontrollerHotspot20H2qposuproviderFriendlyname resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: WirelesscontrollerHotspot20H2qposuproviderFriendlynameState, opts?: pulumi.CustomResourceOptions): WirelesscontrollerHotspot20H2qposuproviderFriendlyname {
        return new WirelesscontrollerHotspot20H2qposuproviderFriendlyname(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'fmgdevice:index/wirelesscontrollerHotspot20H2qposuproviderFriendlyname:WirelesscontrollerHotspot20H2qposuproviderFriendlyname';

    /**
     * Returns true if the given object is an instance of WirelesscontrollerHotspot20H2qposuproviderFriendlyname.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is WirelesscontrollerHotspot20H2qposuproviderFriendlyname {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === WirelesscontrollerHotspot20H2qposuproviderFriendlyname.__pulumiType;
    }

    public readonly deviceName!: pulumi.Output<string>;
    public readonly deviceVdom!: pulumi.Output<string>;
    public readonly friendlyName!: pulumi.Output<string | undefined>;
    public readonly h2qpOsuProvider!: pulumi.Output<string>;
    public readonly index!: pulumi.Output<number | undefined>;
    public readonly lang!: pulumi.Output<string>;

    /**
     * Create a WirelesscontrollerHotspot20H2qposuproviderFriendlyname resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: WirelesscontrollerHotspot20H2qposuproviderFriendlynameArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: WirelesscontrollerHotspot20H2qposuproviderFriendlynameArgs | WirelesscontrollerHotspot20H2qposuproviderFriendlynameState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as WirelesscontrollerHotspot20H2qposuproviderFriendlynameState | undefined;
            resourceInputs["deviceName"] = state ? state.deviceName : undefined;
            resourceInputs["deviceVdom"] = state ? state.deviceVdom : undefined;
            resourceInputs["friendlyName"] = state ? state.friendlyName : undefined;
            resourceInputs["h2qpOsuProvider"] = state ? state.h2qpOsuProvider : undefined;
            resourceInputs["index"] = state ? state.index : undefined;
            resourceInputs["lang"] = state ? state.lang : undefined;
        } else {
            const args = argsOrState as WirelesscontrollerHotspot20H2qposuproviderFriendlynameArgs | undefined;
            if ((!args || args.h2qpOsuProvider === undefined) && !opts.urn) {
                throw new Error("Missing required property 'h2qpOsuProvider'");
            }
            resourceInputs["deviceName"] = args ? args.deviceName : undefined;
            resourceInputs["deviceVdom"] = args ? args.deviceVdom : undefined;
            resourceInputs["friendlyName"] = args ? args.friendlyName : undefined;
            resourceInputs["h2qpOsuProvider"] = args ? args.h2qpOsuProvider : undefined;
            resourceInputs["index"] = args ? args.index : undefined;
            resourceInputs["lang"] = args ? args.lang : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(WirelesscontrollerHotspot20H2qposuproviderFriendlyname.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering WirelesscontrollerHotspot20H2qposuproviderFriendlyname resources.
 */
export interface WirelesscontrollerHotspot20H2qposuproviderFriendlynameState {
    deviceName?: pulumi.Input<string>;
    deviceVdom?: pulumi.Input<string>;
    friendlyName?: pulumi.Input<string>;
    h2qpOsuProvider?: pulumi.Input<string>;
    index?: pulumi.Input<number>;
    lang?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a WirelesscontrollerHotspot20H2qposuproviderFriendlyname resource.
 */
export interface WirelesscontrollerHotspot20H2qposuproviderFriendlynameArgs {
    deviceName?: pulumi.Input<string>;
    deviceVdom?: pulumi.Input<string>;
    friendlyName?: pulumi.Input<string>;
    h2qpOsuProvider: pulumi.Input<string>;
    index?: pulumi.Input<number>;
    lang?: pulumi.Input<string>;
}
