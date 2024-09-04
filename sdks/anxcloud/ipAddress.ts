// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class IpAddress extends pulumi.CustomResource {
    /**
     * Get an existing IpAddress resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: IpAddressState, opts?: pulumi.CustomResourceOptions): IpAddress {
        return new IpAddress(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'anxcloud:index/ipAddress:IpAddress';

    /**
     * Returns true if the given object is an instance of IpAddress.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is IpAddress {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === IpAddress.__pulumiType;
    }

    /**
     * IP address.
     */
    public readonly address!: pulumi.Output<string>;
    /**
     * Additional customer description.
     */
    public readonly descriptionCustomer!: pulumi.Output<string>;
    /**
     * Internal description.
     */
    public /*out*/ readonly descriptionInternal!: pulumi.Output<string>;
    /**
     * Identifier of the related network prefix.
     */
    public readonly networkPrefixId!: pulumi.Output<string>;
    /**
     * Customer of yours. Reseller only.
     */
    public readonly organization!: pulumi.Output<string>;
    /**
     * Period for the requested reservation in seconds. Defaults to 30 minutes if not set.
     */
    public readonly reservationPeriodSeconds!: pulumi.Output<number | undefined>;
    /**
     * Role of the IP address
     */
    public readonly role!: pulumi.Output<string | undefined>;
    /**
     * Status of the IP address
     */
    public /*out*/ readonly status!: pulumi.Output<string>;
    /**
     * Set of tags attached to the resource.
     */
    public readonly tags!: pulumi.Output<string[]>;
    public readonly timeouts!: pulumi.Output<outputs.IpAddressTimeouts | undefined>;
    /**
     * IP version.
     */
    public readonly version!: pulumi.Output<number>;
    /**
     * The associated VLAN identifier.
     */
    public readonly vlanId!: pulumi.Output<string>;

    /**
     * Create a IpAddress resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: IpAddressArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: IpAddressArgs | IpAddressState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as IpAddressState | undefined;
            resourceInputs["address"] = state ? state.address : undefined;
            resourceInputs["descriptionCustomer"] = state ? state.descriptionCustomer : undefined;
            resourceInputs["descriptionInternal"] = state ? state.descriptionInternal : undefined;
            resourceInputs["networkPrefixId"] = state ? state.networkPrefixId : undefined;
            resourceInputs["organization"] = state ? state.organization : undefined;
            resourceInputs["reservationPeriodSeconds"] = state ? state.reservationPeriodSeconds : undefined;
            resourceInputs["role"] = state ? state.role : undefined;
            resourceInputs["status"] = state ? state.status : undefined;
            resourceInputs["tags"] = state ? state.tags : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
            resourceInputs["version"] = state ? state.version : undefined;
            resourceInputs["vlanId"] = state ? state.vlanId : undefined;
        } else {
            const args = argsOrState as IpAddressArgs | undefined;
            resourceInputs["address"] = args ? args.address : undefined;
            resourceInputs["descriptionCustomer"] = args ? args.descriptionCustomer : undefined;
            resourceInputs["networkPrefixId"] = args ? args.networkPrefixId : undefined;
            resourceInputs["organization"] = args ? args.organization : undefined;
            resourceInputs["reservationPeriodSeconds"] = args ? args.reservationPeriodSeconds : undefined;
            resourceInputs["role"] = args ? args.role : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["version"] = args ? args.version : undefined;
            resourceInputs["vlanId"] = args ? args.vlanId : undefined;
            resourceInputs["descriptionInternal"] = undefined /*out*/;
            resourceInputs["status"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(IpAddress.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering IpAddress resources.
 */
export interface IpAddressState {
    /**
     * IP address.
     */
    address?: pulumi.Input<string>;
    /**
     * Additional customer description.
     */
    descriptionCustomer?: pulumi.Input<string>;
    /**
     * Internal description.
     */
    descriptionInternal?: pulumi.Input<string>;
    /**
     * Identifier of the related network prefix.
     */
    networkPrefixId?: pulumi.Input<string>;
    /**
     * Customer of yours. Reseller only.
     */
    organization?: pulumi.Input<string>;
    /**
     * Period for the requested reservation in seconds. Defaults to 30 minutes if not set.
     */
    reservationPeriodSeconds?: pulumi.Input<number>;
    /**
     * Role of the IP address
     */
    role?: pulumi.Input<string>;
    /**
     * Status of the IP address
     */
    status?: pulumi.Input<string>;
    /**
     * Set of tags attached to the resource.
     */
    tags?: pulumi.Input<pulumi.Input<string>[]>;
    timeouts?: pulumi.Input<inputs.IpAddressTimeouts>;
    /**
     * IP version.
     */
    version?: pulumi.Input<number>;
    /**
     * The associated VLAN identifier.
     */
    vlanId?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a IpAddress resource.
 */
export interface IpAddressArgs {
    /**
     * IP address.
     */
    address?: pulumi.Input<string>;
    /**
     * Additional customer description.
     */
    descriptionCustomer?: pulumi.Input<string>;
    /**
     * Identifier of the related network prefix.
     */
    networkPrefixId?: pulumi.Input<string>;
    /**
     * Customer of yours. Reseller only.
     */
    organization?: pulumi.Input<string>;
    /**
     * Period for the requested reservation in seconds. Defaults to 30 minutes if not set.
     */
    reservationPeriodSeconds?: pulumi.Input<number>;
    /**
     * Role of the IP address
     */
    role?: pulumi.Input<string>;
    /**
     * Set of tags attached to the resource.
     */
    tags?: pulumi.Input<pulumi.Input<string>[]>;
    timeouts?: pulumi.Input<inputs.IpAddressTimeouts>;
    /**
     * IP version.
     */
    version?: pulumi.Input<number>;
    /**
     * The associated VLAN identifier.
     */
    vlanId?: pulumi.Input<string>;
}
