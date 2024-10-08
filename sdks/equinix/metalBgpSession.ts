// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class MetalBgpSession extends pulumi.CustomResource {
    /**
     * Get an existing MetalBgpSession resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: MetalBgpSessionState, opts?: pulumi.CustomResourceOptions): MetalBgpSession {
        return new MetalBgpSession(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'equinix:index/metalBgpSession:MetalBgpSession';

    /**
     * Returns true if the given object is an instance of MetalBgpSession.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is MetalBgpSession {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === MetalBgpSession.__pulumiType;
    }

    /**
     * ipv4 or ipv6
     */
    public readonly addressFamily!: pulumi.Output<string>;
    /**
     * Boolean flag to set the default route policy. False by default
     */
    public readonly defaultRoute!: pulumi.Output<boolean | undefined>;
    /**
     * ID of device
     */
    public readonly deviceId!: pulumi.Output<string>;
    /**
     * Status of the session - up or down
     */
    public /*out*/ readonly status!: pulumi.Output<string>;

    /**
     * Create a MetalBgpSession resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: MetalBgpSessionArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: MetalBgpSessionArgs | MetalBgpSessionState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as MetalBgpSessionState | undefined;
            resourceInputs["addressFamily"] = state ? state.addressFamily : undefined;
            resourceInputs["defaultRoute"] = state ? state.defaultRoute : undefined;
            resourceInputs["deviceId"] = state ? state.deviceId : undefined;
            resourceInputs["status"] = state ? state.status : undefined;
        } else {
            const args = argsOrState as MetalBgpSessionArgs | undefined;
            if ((!args || args.addressFamily === undefined) && !opts.urn) {
                throw new Error("Missing required property 'addressFamily'");
            }
            if ((!args || args.deviceId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'deviceId'");
            }
            resourceInputs["addressFamily"] = args ? args.addressFamily : undefined;
            resourceInputs["defaultRoute"] = args ? args.defaultRoute : undefined;
            resourceInputs["deviceId"] = args ? args.deviceId : undefined;
            resourceInputs["status"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(MetalBgpSession.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering MetalBgpSession resources.
 */
export interface MetalBgpSessionState {
    /**
     * ipv4 or ipv6
     */
    addressFamily?: pulumi.Input<string>;
    /**
     * Boolean flag to set the default route policy. False by default
     */
    defaultRoute?: pulumi.Input<boolean>;
    /**
     * ID of device
     */
    deviceId?: pulumi.Input<string>;
    /**
     * Status of the session - up or down
     */
    status?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a MetalBgpSession resource.
 */
export interface MetalBgpSessionArgs {
    /**
     * ipv4 or ipv6
     */
    addressFamily: pulumi.Input<string>;
    /**
     * Boolean flag to set the default route policy. False by default
     */
    defaultRoute?: pulumi.Input<boolean>;
    /**
     * ID of device
     */
    deviceId: pulumi.Input<string>;
}
