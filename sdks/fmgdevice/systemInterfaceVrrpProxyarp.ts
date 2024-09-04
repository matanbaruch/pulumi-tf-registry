// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class SystemInterfaceVrrpProxyarp extends pulumi.CustomResource {
    /**
     * Get an existing SystemInterfaceVrrpProxyarp resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SystemInterfaceVrrpProxyarpState, opts?: pulumi.CustomResourceOptions): SystemInterfaceVrrpProxyarp {
        return new SystemInterfaceVrrpProxyarp(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'fmgdevice:index/systemInterfaceVrrpProxyarp:SystemInterfaceVrrpProxyarp';

    /**
     * Returns true if the given object is an instance of SystemInterfaceVrrpProxyarp.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is SystemInterfaceVrrpProxyarp {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === SystemInterfaceVrrpProxyarp.__pulumiType;
    }

    public readonly deviceName!: pulumi.Output<string>;
    public readonly fosid!: pulumi.Output<number | undefined>;
    public readonly interface!: pulumi.Output<string>;
    public readonly ip!: pulumi.Output<string>;
    public readonly vrrp!: pulumi.Output<string>;

    /**
     * Create a SystemInterfaceVrrpProxyarp resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SystemInterfaceVrrpProxyarpArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: SystemInterfaceVrrpProxyarpArgs | SystemInterfaceVrrpProxyarpState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as SystemInterfaceVrrpProxyarpState | undefined;
            resourceInputs["deviceName"] = state ? state.deviceName : undefined;
            resourceInputs["fosid"] = state ? state.fosid : undefined;
            resourceInputs["interface"] = state ? state.interface : undefined;
            resourceInputs["ip"] = state ? state.ip : undefined;
            resourceInputs["vrrp"] = state ? state.vrrp : undefined;
        } else {
            const args = argsOrState as SystemInterfaceVrrpProxyarpArgs | undefined;
            if ((!args || args.interface === undefined) && !opts.urn) {
                throw new Error("Missing required property 'interface'");
            }
            if ((!args || args.vrrp === undefined) && !opts.urn) {
                throw new Error("Missing required property 'vrrp'");
            }
            resourceInputs["deviceName"] = args ? args.deviceName : undefined;
            resourceInputs["fosid"] = args ? args.fosid : undefined;
            resourceInputs["interface"] = args ? args.interface : undefined;
            resourceInputs["ip"] = args ? args.ip : undefined;
            resourceInputs["vrrp"] = args ? args.vrrp : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(SystemInterfaceVrrpProxyarp.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering SystemInterfaceVrrpProxyarp resources.
 */
export interface SystemInterfaceVrrpProxyarpState {
    deviceName?: pulumi.Input<string>;
    fosid?: pulumi.Input<number>;
    interface?: pulumi.Input<string>;
    ip?: pulumi.Input<string>;
    vrrp?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a SystemInterfaceVrrpProxyarp resource.
 */
export interface SystemInterfaceVrrpProxyarpArgs {
    deviceName?: pulumi.Input<string>;
    fosid?: pulumi.Input<number>;
    interface: pulumi.Input<string>;
    ip?: pulumi.Input<string>;
    vrrp: pulumi.Input<string>;
}
