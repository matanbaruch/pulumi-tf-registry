// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class WirelesscontrollerHotspot20H2qposuprovider extends pulumi.CustomResource {
    /**
     * Get an existing WirelesscontrollerHotspot20H2qposuprovider resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: WirelesscontrollerHotspot20H2qposuproviderState, opts?: pulumi.CustomResourceOptions): WirelesscontrollerHotspot20H2qposuprovider {
        return new WirelesscontrollerHotspot20H2qposuprovider(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'fmgdevice:index/wirelesscontrollerHotspot20H2qposuprovider:WirelesscontrollerHotspot20H2qposuprovider';

    /**
     * Returns true if the given object is an instance of WirelesscontrollerHotspot20H2qposuprovider.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is WirelesscontrollerHotspot20H2qposuprovider {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === WirelesscontrollerHotspot20H2qposuprovider.__pulumiType;
    }

    public readonly deviceName!: pulumi.Output<string>;
    public readonly deviceVdom!: pulumi.Output<string>;
    public readonly dynamicSortSubtable!: pulumi.Output<string | undefined>;
    public readonly friendlyNames!: pulumi.Output<outputs.WirelesscontrollerHotspot20H2qposuproviderFriendlyName[] | undefined>;
    public readonly icons!: pulumi.Output<string[]>;
    public readonly name!: pulumi.Output<string>;
    public readonly osuMethods!: pulumi.Output<string[]>;
    public readonly osuNai!: pulumi.Output<string | undefined>;
    public readonly serverUri!: pulumi.Output<string | undefined>;
    public readonly serviceDescriptions!: pulumi.Output<outputs.WirelesscontrollerHotspot20H2qposuproviderServiceDescription[] | undefined>;

    /**
     * Create a WirelesscontrollerHotspot20H2qposuprovider resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: WirelesscontrollerHotspot20H2qposuproviderArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: WirelesscontrollerHotspot20H2qposuproviderArgs | WirelesscontrollerHotspot20H2qposuproviderState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as WirelesscontrollerHotspot20H2qposuproviderState | undefined;
            resourceInputs["deviceName"] = state ? state.deviceName : undefined;
            resourceInputs["deviceVdom"] = state ? state.deviceVdom : undefined;
            resourceInputs["dynamicSortSubtable"] = state ? state.dynamicSortSubtable : undefined;
            resourceInputs["friendlyNames"] = state ? state.friendlyNames : undefined;
            resourceInputs["icons"] = state ? state.icons : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["osuMethods"] = state ? state.osuMethods : undefined;
            resourceInputs["osuNai"] = state ? state.osuNai : undefined;
            resourceInputs["serverUri"] = state ? state.serverUri : undefined;
            resourceInputs["serviceDescriptions"] = state ? state.serviceDescriptions : undefined;
        } else {
            const args = argsOrState as WirelesscontrollerHotspot20H2qposuproviderArgs | undefined;
            resourceInputs["deviceName"] = args ? args.deviceName : undefined;
            resourceInputs["deviceVdom"] = args ? args.deviceVdom : undefined;
            resourceInputs["dynamicSortSubtable"] = args ? args.dynamicSortSubtable : undefined;
            resourceInputs["friendlyNames"] = args ? args.friendlyNames : undefined;
            resourceInputs["icons"] = args ? args.icons : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["osuMethods"] = args ? args.osuMethods : undefined;
            resourceInputs["osuNai"] = args ? args.osuNai : undefined;
            resourceInputs["serverUri"] = args ? args.serverUri : undefined;
            resourceInputs["serviceDescriptions"] = args ? args.serviceDescriptions : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(WirelesscontrollerHotspot20H2qposuprovider.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering WirelesscontrollerHotspot20H2qposuprovider resources.
 */
export interface WirelesscontrollerHotspot20H2qposuproviderState {
    deviceName?: pulumi.Input<string>;
    deviceVdom?: pulumi.Input<string>;
    dynamicSortSubtable?: pulumi.Input<string>;
    friendlyNames?: pulumi.Input<pulumi.Input<inputs.WirelesscontrollerHotspot20H2qposuproviderFriendlyName>[]>;
    icons?: pulumi.Input<pulumi.Input<string>[]>;
    name?: pulumi.Input<string>;
    osuMethods?: pulumi.Input<pulumi.Input<string>[]>;
    osuNai?: pulumi.Input<string>;
    serverUri?: pulumi.Input<string>;
    serviceDescriptions?: pulumi.Input<pulumi.Input<inputs.WirelesscontrollerHotspot20H2qposuproviderServiceDescription>[]>;
}

/**
 * The set of arguments for constructing a WirelesscontrollerHotspot20H2qposuprovider resource.
 */
export interface WirelesscontrollerHotspot20H2qposuproviderArgs {
    deviceName?: pulumi.Input<string>;
    deviceVdom?: pulumi.Input<string>;
    dynamicSortSubtable?: pulumi.Input<string>;
    friendlyNames?: pulumi.Input<pulumi.Input<inputs.WirelesscontrollerHotspot20H2qposuproviderFriendlyName>[]>;
    icons?: pulumi.Input<pulumi.Input<string>[]>;
    name?: pulumi.Input<string>;
    osuMethods?: pulumi.Input<pulumi.Input<string>[]>;
    osuNai?: pulumi.Input<string>;
    serverUri?: pulumi.Input<string>;
    serviceDescriptions?: pulumi.Input<pulumi.Input<inputs.WirelesscontrollerHotspot20H2qposuproviderServiceDescription>[]>;
}
