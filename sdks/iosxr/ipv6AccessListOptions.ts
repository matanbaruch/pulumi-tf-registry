// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class Ipv6AccessListOptions extends pulumi.CustomResource {
    /**
     * Get an existing Ipv6AccessListOptions resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: Ipv6AccessListOptionsState, opts?: pulumi.CustomResourceOptions): Ipv6AccessListOptions {
        return new Ipv6AccessListOptions(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'iosxr:index/ipv6AccessListOptions:Ipv6AccessListOptions';

    /**
     * Returns true if the given object is an instance of Ipv6AccessListOptions.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Ipv6AccessListOptions {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Ipv6AccessListOptions.__pulumiType;
    }

    /**
     * Configure behavior when deleting/destroying the resource. Either delete the entire object (YANG container) being
     * managed, or only delete the individual resource attributes configured explicitly and leave everything else as-is.
     * Default value is `all`. - Choices: `all`, `attributes`
     */
    public readonly deleteMode!: pulumi.Output<string | undefined>;
    /**
     * A device name from the provider configuration.
     */
    public readonly device!: pulumi.Output<string | undefined>;
    /**
     * Do not generate the ICMP message
     */
    public readonly icmpOff!: pulumi.Output<boolean | undefined>;
    /**
     * Set access-list logging rate (num. logs per second) - Range: `1`-`1000`
     */
    public readonly logUpdateRate!: pulumi.Output<number | undefined>;
    /**
     * Set access-list logging threshold - Range: `1`-`2147483647`
     */
    public readonly logUpdateThreshold!: pulumi.Output<number | undefined>;

    /**
     * Create a Ipv6AccessListOptions resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: Ipv6AccessListOptionsArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: Ipv6AccessListOptionsArgs | Ipv6AccessListOptionsState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as Ipv6AccessListOptionsState | undefined;
            resourceInputs["deleteMode"] = state ? state.deleteMode : undefined;
            resourceInputs["device"] = state ? state.device : undefined;
            resourceInputs["icmpOff"] = state ? state.icmpOff : undefined;
            resourceInputs["logUpdateRate"] = state ? state.logUpdateRate : undefined;
            resourceInputs["logUpdateThreshold"] = state ? state.logUpdateThreshold : undefined;
        } else {
            const args = argsOrState as Ipv6AccessListOptionsArgs | undefined;
            resourceInputs["deleteMode"] = args ? args.deleteMode : undefined;
            resourceInputs["device"] = args ? args.device : undefined;
            resourceInputs["icmpOff"] = args ? args.icmpOff : undefined;
            resourceInputs["logUpdateRate"] = args ? args.logUpdateRate : undefined;
            resourceInputs["logUpdateThreshold"] = args ? args.logUpdateThreshold : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(Ipv6AccessListOptions.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering Ipv6AccessListOptions resources.
 */
export interface Ipv6AccessListOptionsState {
    /**
     * Configure behavior when deleting/destroying the resource. Either delete the entire object (YANG container) being
     * managed, or only delete the individual resource attributes configured explicitly and leave everything else as-is.
     * Default value is `all`. - Choices: `all`, `attributes`
     */
    deleteMode?: pulumi.Input<string>;
    /**
     * A device name from the provider configuration.
     */
    device?: pulumi.Input<string>;
    /**
     * Do not generate the ICMP message
     */
    icmpOff?: pulumi.Input<boolean>;
    /**
     * Set access-list logging rate (num. logs per second) - Range: `1`-`1000`
     */
    logUpdateRate?: pulumi.Input<number>;
    /**
     * Set access-list logging threshold - Range: `1`-`2147483647`
     */
    logUpdateThreshold?: pulumi.Input<number>;
}

/**
 * The set of arguments for constructing a Ipv6AccessListOptions resource.
 */
export interface Ipv6AccessListOptionsArgs {
    /**
     * Configure behavior when deleting/destroying the resource. Either delete the entire object (YANG container) being
     * managed, or only delete the individual resource attributes configured explicitly and leave everything else as-is.
     * Default value is `all`. - Choices: `all`, `attributes`
     */
    deleteMode?: pulumi.Input<string>;
    /**
     * A device name from the provider configuration.
     */
    device?: pulumi.Input<string>;
    /**
     * Do not generate the ICMP message
     */
    icmpOff?: pulumi.Input<boolean>;
    /**
     * Set access-list logging rate (num. logs per second) - Range: `1`-`1000`
     */
    logUpdateRate?: pulumi.Input<number>;
    /**
     * Set access-list logging threshold - Range: `1`-`2147483647`
     */
    logUpdateThreshold?: pulumi.Input<number>;
}
