// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class EniIpv4Address extends pulumi.CustomResource {
    /**
     * Get an existing EniIpv4Address resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: EniIpv4AddressState, opts?: pulumi.CustomResourceOptions): EniIpv4Address {
        return new EniIpv4Address(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'tencentcloud:index/eniIpv4Address:EniIpv4Address';

    /**
     * Returns true if the given object is an instance of EniIpv4Address.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is EniIpv4Address {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === EniIpv4Address.__pulumiType;
    }

    /**
     * The ID of the ENI instance, such as `eni-m6dyj72l`.
     */
    public readonly networkInterfaceId!: pulumi.Output<string>;
    /**
     * The information on private IP addresses, of which you can specify a maximum of 10 at a time. You should provide either
     * this parameter or SecondaryPrivateIpAddressCount, or both.
     */
    public readonly privateIpAddresses!: pulumi.Output<outputs.EniIpv4AddressPrivateIpAddress[] | undefined>;
    /**
     * IP service level. It is used together with `SecondaryPrivateIpAddressCount`. Values: PT`(Gold), `AU`(Silver), `AG
     * `(Bronze) and DEFAULT (Default).
     */
    public readonly qosLevel!: pulumi.Output<string>;
    /**
     * The number of newly-applied private IP addresses. You should provide either this parameter or PrivateIpAddresses, or
     * both. The total number of private IP addresses cannot exceed the quota.
     */
    public readonly secondaryPrivateIpAddressCount!: pulumi.Output<number>;

    /**
     * Create a EniIpv4Address resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: EniIpv4AddressArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: EniIpv4AddressArgs | EniIpv4AddressState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as EniIpv4AddressState | undefined;
            resourceInputs["networkInterfaceId"] = state ? state.networkInterfaceId : undefined;
            resourceInputs["privateIpAddresses"] = state ? state.privateIpAddresses : undefined;
            resourceInputs["qosLevel"] = state ? state.qosLevel : undefined;
            resourceInputs["secondaryPrivateIpAddressCount"] = state ? state.secondaryPrivateIpAddressCount : undefined;
        } else {
            const args = argsOrState as EniIpv4AddressArgs | undefined;
            if ((!args || args.networkInterfaceId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'networkInterfaceId'");
            }
            resourceInputs["networkInterfaceId"] = args ? args.networkInterfaceId : undefined;
            resourceInputs["privateIpAddresses"] = args ? args.privateIpAddresses : undefined;
            resourceInputs["qosLevel"] = args ? args.qosLevel : undefined;
            resourceInputs["secondaryPrivateIpAddressCount"] = args ? args.secondaryPrivateIpAddressCount : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(EniIpv4Address.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering EniIpv4Address resources.
 */
export interface EniIpv4AddressState {
    /**
     * The ID of the ENI instance, such as `eni-m6dyj72l`.
     */
    networkInterfaceId?: pulumi.Input<string>;
    /**
     * The information on private IP addresses, of which you can specify a maximum of 10 at a time. You should provide either
     * this parameter or SecondaryPrivateIpAddressCount, or both.
     */
    privateIpAddresses?: pulumi.Input<pulumi.Input<inputs.EniIpv4AddressPrivateIpAddress>[]>;
    /**
     * IP service level. It is used together with `SecondaryPrivateIpAddressCount`. Values: PT`(Gold), `AU`(Silver), `AG
     * `(Bronze) and DEFAULT (Default).
     */
    qosLevel?: pulumi.Input<string>;
    /**
     * The number of newly-applied private IP addresses. You should provide either this parameter or PrivateIpAddresses, or
     * both. The total number of private IP addresses cannot exceed the quota.
     */
    secondaryPrivateIpAddressCount?: pulumi.Input<number>;
}

/**
 * The set of arguments for constructing a EniIpv4Address resource.
 */
export interface EniIpv4AddressArgs {
    /**
     * The ID of the ENI instance, such as `eni-m6dyj72l`.
     */
    networkInterfaceId: pulumi.Input<string>;
    /**
     * The information on private IP addresses, of which you can specify a maximum of 10 at a time. You should provide either
     * this parameter or SecondaryPrivateIpAddressCount, or both.
     */
    privateIpAddresses?: pulumi.Input<pulumi.Input<inputs.EniIpv4AddressPrivateIpAddress>[]>;
    /**
     * IP service level. It is used together with `SecondaryPrivateIpAddressCount`. Values: PT`(Gold), `AU`(Silver), `AG
     * `(Bronze) and DEFAULT (Default).
     */
    qosLevel?: pulumi.Input<string>;
    /**
     * The number of newly-applied private IP addresses. You should provide either this parameter or PrivateIpAddresses, or
     * both. The total number of private IP addresses cannot exceed the quota.
     */
    secondaryPrivateIpAddressCount?: pulumi.Input<number>;
}
