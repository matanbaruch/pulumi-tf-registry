// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class WirelesscontrollerHotspot20Anqpnetworkauthtype extends pulumi.CustomResource {
    /**
     * Get an existing WirelesscontrollerHotspot20Anqpnetworkauthtype resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: WirelesscontrollerHotspot20AnqpnetworkauthtypeState, opts?: pulumi.CustomResourceOptions): WirelesscontrollerHotspot20Anqpnetworkauthtype {
        return new WirelesscontrollerHotspot20Anqpnetworkauthtype(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'fmgdevice:index/wirelesscontrollerHotspot20Anqpnetworkauthtype:WirelesscontrollerHotspot20Anqpnetworkauthtype';

    /**
     * Returns true if the given object is an instance of WirelesscontrollerHotspot20Anqpnetworkauthtype.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is WirelesscontrollerHotspot20Anqpnetworkauthtype {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === WirelesscontrollerHotspot20Anqpnetworkauthtype.__pulumiType;
    }

    public readonly authType!: pulumi.Output<string>;
    public readonly deviceName!: pulumi.Output<string>;
    public readonly deviceVdom!: pulumi.Output<string>;
    public readonly name!: pulumi.Output<string>;
    public readonly url!: pulumi.Output<string | undefined>;

    /**
     * Create a WirelesscontrollerHotspot20Anqpnetworkauthtype resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: WirelesscontrollerHotspot20AnqpnetworkauthtypeArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: WirelesscontrollerHotspot20AnqpnetworkauthtypeArgs | WirelesscontrollerHotspot20AnqpnetworkauthtypeState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as WirelesscontrollerHotspot20AnqpnetworkauthtypeState | undefined;
            resourceInputs["authType"] = state ? state.authType : undefined;
            resourceInputs["deviceName"] = state ? state.deviceName : undefined;
            resourceInputs["deviceVdom"] = state ? state.deviceVdom : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["url"] = state ? state.url : undefined;
        } else {
            const args = argsOrState as WirelesscontrollerHotspot20AnqpnetworkauthtypeArgs | undefined;
            resourceInputs["authType"] = args ? args.authType : undefined;
            resourceInputs["deviceName"] = args ? args.deviceName : undefined;
            resourceInputs["deviceVdom"] = args ? args.deviceVdom : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["url"] = args ? args.url : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(WirelesscontrollerHotspot20Anqpnetworkauthtype.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering WirelesscontrollerHotspot20Anqpnetworkauthtype resources.
 */
export interface WirelesscontrollerHotspot20AnqpnetworkauthtypeState {
    authType?: pulumi.Input<string>;
    deviceName?: pulumi.Input<string>;
    deviceVdom?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    url?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a WirelesscontrollerHotspot20Anqpnetworkauthtype resource.
 */
export interface WirelesscontrollerHotspot20AnqpnetworkauthtypeArgs {
    authType?: pulumi.Input<string>;
    deviceName?: pulumi.Input<string>;
    deviceVdom?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    url?: pulumi.Input<string>;
}
