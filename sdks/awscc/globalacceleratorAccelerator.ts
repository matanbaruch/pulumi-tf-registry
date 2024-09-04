// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class GlobalacceleratorAccelerator extends pulumi.CustomResource {
    /**
     * Get an existing GlobalacceleratorAccelerator resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: GlobalacceleratorAcceleratorState, opts?: pulumi.CustomResourceOptions): GlobalacceleratorAccelerator {
        return new GlobalacceleratorAccelerator(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'awscc:index/globalacceleratorAccelerator:GlobalacceleratorAccelerator';

    /**
     * Returns true if the given object is an instance of GlobalacceleratorAccelerator.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is GlobalacceleratorAccelerator {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === GlobalacceleratorAccelerator.__pulumiType;
    }

    /**
     * The Amazon Resource Name (ARN) of the accelerator.
     */
    public /*out*/ readonly acceleratorArn!: pulumi.Output<string>;
    /**
     * The Domain Name System (DNS) name that Global Accelerator creates that points to your accelerator's static IPv4
     * addresses.
     */
    public /*out*/ readonly dnsName!: pulumi.Output<string>;
    /**
     * The Domain Name System (DNS) name that Global Accelerator creates that points to your accelerator's static IPv4 and IPv6
     * addresses.
     */
    public /*out*/ readonly dualStackDnsName!: pulumi.Output<string>;
    /**
     * Indicates whether an accelerator is enabled. The value is true or false.
     */
    public readonly enabled!: pulumi.Output<boolean>;
    /**
     * IP Address type.
     */
    public readonly ipAddressType!: pulumi.Output<string>;
    /**
     * The IP addresses from BYOIP Prefix pool.
     */
    public readonly ipAddresses!: pulumi.Output<string[]>;
    /**
     * The IPv4 addresses assigned to the accelerator.
     */
    public /*out*/ readonly ipv4Addresses!: pulumi.Output<string[]>;
    /**
     * The IPv6 addresses assigned if the accelerator is dualstack
     */
    public /*out*/ readonly ipv6Addresses!: pulumi.Output<string[]>;
    /**
     * Name of accelerator.
     */
    public readonly name!: pulumi.Output<string>;
    public readonly tags!: pulumi.Output<outputs.GlobalacceleratorAcceleratorTag[]>;

    /**
     * Create a GlobalacceleratorAccelerator resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: GlobalacceleratorAcceleratorArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: GlobalacceleratorAcceleratorArgs | GlobalacceleratorAcceleratorState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as GlobalacceleratorAcceleratorState | undefined;
            resourceInputs["acceleratorArn"] = state ? state.acceleratorArn : undefined;
            resourceInputs["dnsName"] = state ? state.dnsName : undefined;
            resourceInputs["dualStackDnsName"] = state ? state.dualStackDnsName : undefined;
            resourceInputs["enabled"] = state ? state.enabled : undefined;
            resourceInputs["ipAddressType"] = state ? state.ipAddressType : undefined;
            resourceInputs["ipAddresses"] = state ? state.ipAddresses : undefined;
            resourceInputs["ipv4Addresses"] = state ? state.ipv4Addresses : undefined;
            resourceInputs["ipv6Addresses"] = state ? state.ipv6Addresses : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["tags"] = state ? state.tags : undefined;
        } else {
            const args = argsOrState as GlobalacceleratorAcceleratorArgs | undefined;
            resourceInputs["enabled"] = args ? args.enabled : undefined;
            resourceInputs["ipAddressType"] = args ? args.ipAddressType : undefined;
            resourceInputs["ipAddresses"] = args ? args.ipAddresses : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["acceleratorArn"] = undefined /*out*/;
            resourceInputs["dnsName"] = undefined /*out*/;
            resourceInputs["dualStackDnsName"] = undefined /*out*/;
            resourceInputs["ipv4Addresses"] = undefined /*out*/;
            resourceInputs["ipv6Addresses"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(GlobalacceleratorAccelerator.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering GlobalacceleratorAccelerator resources.
 */
export interface GlobalacceleratorAcceleratorState {
    /**
     * The Amazon Resource Name (ARN) of the accelerator.
     */
    acceleratorArn?: pulumi.Input<string>;
    /**
     * The Domain Name System (DNS) name that Global Accelerator creates that points to your accelerator's static IPv4
     * addresses.
     */
    dnsName?: pulumi.Input<string>;
    /**
     * The Domain Name System (DNS) name that Global Accelerator creates that points to your accelerator's static IPv4 and IPv6
     * addresses.
     */
    dualStackDnsName?: pulumi.Input<string>;
    /**
     * Indicates whether an accelerator is enabled. The value is true or false.
     */
    enabled?: pulumi.Input<boolean>;
    /**
     * IP Address type.
     */
    ipAddressType?: pulumi.Input<string>;
    /**
     * The IP addresses from BYOIP Prefix pool.
     */
    ipAddresses?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The IPv4 addresses assigned to the accelerator.
     */
    ipv4Addresses?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The IPv6 addresses assigned if the accelerator is dualstack
     */
    ipv6Addresses?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Name of accelerator.
     */
    name?: pulumi.Input<string>;
    tags?: pulumi.Input<pulumi.Input<inputs.GlobalacceleratorAcceleratorTag>[]>;
}

/**
 * The set of arguments for constructing a GlobalacceleratorAccelerator resource.
 */
export interface GlobalacceleratorAcceleratorArgs {
    /**
     * Indicates whether an accelerator is enabled. The value is true or false.
     */
    enabled?: pulumi.Input<boolean>;
    /**
     * IP Address type.
     */
    ipAddressType?: pulumi.Input<string>;
    /**
     * The IP addresses from BYOIP Prefix pool.
     */
    ipAddresses?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Name of accelerator.
     */
    name?: pulumi.Input<string>;
    tags?: pulumi.Input<pulumi.Input<inputs.GlobalacceleratorAcceleratorTag>[]>;
}
