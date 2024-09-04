// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class WirelesscontrollerWtpprofileSplittunnelingacl extends pulumi.CustomResource {
    /**
     * Get an existing WirelesscontrollerWtpprofileSplittunnelingacl resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: WirelesscontrollerWtpprofileSplittunnelingaclState, opts?: pulumi.CustomResourceOptions): WirelesscontrollerWtpprofileSplittunnelingacl {
        return new WirelesscontrollerWtpprofileSplittunnelingacl(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'fmgdevice:index/wirelesscontrollerWtpprofileSplittunnelingacl:WirelesscontrollerWtpprofileSplittunnelingacl';

    /**
     * Returns true if the given object is an instance of WirelesscontrollerWtpprofileSplittunnelingacl.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is WirelesscontrollerWtpprofileSplittunnelingacl {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === WirelesscontrollerWtpprofileSplittunnelingacl.__pulumiType;
    }

    public readonly destIps!: pulumi.Output<string[]>;
    public readonly deviceName!: pulumi.Output<string>;
    public readonly deviceVdom!: pulumi.Output<string>;
    public readonly fosid!: pulumi.Output<number | undefined>;
    public readonly wtpProfile!: pulumi.Output<string>;

    /**
     * Create a WirelesscontrollerWtpprofileSplittunnelingacl resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: WirelesscontrollerWtpprofileSplittunnelingaclArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: WirelesscontrollerWtpprofileSplittunnelingaclArgs | WirelesscontrollerWtpprofileSplittunnelingaclState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as WirelesscontrollerWtpprofileSplittunnelingaclState | undefined;
            resourceInputs["destIps"] = state ? state.destIps : undefined;
            resourceInputs["deviceName"] = state ? state.deviceName : undefined;
            resourceInputs["deviceVdom"] = state ? state.deviceVdom : undefined;
            resourceInputs["fosid"] = state ? state.fosid : undefined;
            resourceInputs["wtpProfile"] = state ? state.wtpProfile : undefined;
        } else {
            const args = argsOrState as WirelesscontrollerWtpprofileSplittunnelingaclArgs | undefined;
            if ((!args || args.wtpProfile === undefined) && !opts.urn) {
                throw new Error("Missing required property 'wtpProfile'");
            }
            resourceInputs["destIps"] = args ? args.destIps : undefined;
            resourceInputs["deviceName"] = args ? args.deviceName : undefined;
            resourceInputs["deviceVdom"] = args ? args.deviceVdom : undefined;
            resourceInputs["fosid"] = args ? args.fosid : undefined;
            resourceInputs["wtpProfile"] = args ? args.wtpProfile : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(WirelesscontrollerWtpprofileSplittunnelingacl.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering WirelesscontrollerWtpprofileSplittunnelingacl resources.
 */
export interface WirelesscontrollerWtpprofileSplittunnelingaclState {
    destIps?: pulumi.Input<pulumi.Input<string>[]>;
    deviceName?: pulumi.Input<string>;
    deviceVdom?: pulumi.Input<string>;
    fosid?: pulumi.Input<number>;
    wtpProfile?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a WirelesscontrollerWtpprofileSplittunnelingacl resource.
 */
export interface WirelesscontrollerWtpprofileSplittunnelingaclArgs {
    destIps?: pulumi.Input<pulumi.Input<string>[]>;
    deviceName?: pulumi.Input<string>;
    deviceVdom?: pulumi.Input<string>;
    fosid?: pulumi.Input<number>;
    wtpProfile: pulumi.Input<string>;
}
