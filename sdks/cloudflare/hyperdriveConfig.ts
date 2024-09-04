// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class HyperdriveConfig extends pulumi.CustomResource {
    /**
     * Get an existing HyperdriveConfig resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: HyperdriveConfigState, opts?: pulumi.CustomResourceOptions): HyperdriveConfig {
        return new HyperdriveConfig(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'cloudflare:index/hyperdriveConfig:HyperdriveConfig';

    /**
     * Returns true if the given object is an instance of HyperdriveConfig.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is HyperdriveConfig {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === HyperdriveConfig.__pulumiType;
    }

    /**
     * The account identifier to target for the resource.
     */
    public readonly accountId!: pulumi.Output<string>;
    /**
     * The caching details for the Hyperdrive configuration.
     */
    public readonly caching!: pulumi.Output<outputs.HyperdriveConfigCaching>;
    /**
     * The name of the Hyperdrive configuration.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * The origin details for the Hyperdrive configuration.
     */
    public readonly origin!: pulumi.Output<outputs.HyperdriveConfigOrigin>;

    /**
     * Create a HyperdriveConfig resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: HyperdriveConfigArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: HyperdriveConfigArgs | HyperdriveConfigState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as HyperdriveConfigState | undefined;
            resourceInputs["accountId"] = state ? state.accountId : undefined;
            resourceInputs["caching"] = state ? state.caching : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["origin"] = state ? state.origin : undefined;
        } else {
            const args = argsOrState as HyperdriveConfigArgs | undefined;
            if ((!args || args.accountId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'accountId'");
            }
            if ((!args || args.origin === undefined) && !opts.urn) {
                throw new Error("Missing required property 'origin'");
            }
            resourceInputs["accountId"] = args ? args.accountId : undefined;
            resourceInputs["caching"] = args ? args.caching : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["origin"] = args ? args.origin : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(HyperdriveConfig.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering HyperdriveConfig resources.
 */
export interface HyperdriveConfigState {
    /**
     * The account identifier to target for the resource.
     */
    accountId?: pulumi.Input<string>;
    /**
     * The caching details for the Hyperdrive configuration.
     */
    caching?: pulumi.Input<inputs.HyperdriveConfigCaching>;
    /**
     * The name of the Hyperdrive configuration.
     */
    name?: pulumi.Input<string>;
    /**
     * The origin details for the Hyperdrive configuration.
     */
    origin?: pulumi.Input<inputs.HyperdriveConfigOrigin>;
}

/**
 * The set of arguments for constructing a HyperdriveConfig resource.
 */
export interface HyperdriveConfigArgs {
    /**
     * The account identifier to target for the resource.
     */
    accountId: pulumi.Input<string>;
    /**
     * The caching details for the Hyperdrive configuration.
     */
    caching?: pulumi.Input<inputs.HyperdriveConfigCaching>;
    /**
     * The name of the Hyperdrive configuration.
     */
    name?: pulumi.Input<string>;
    /**
     * The origin details for the Hyperdrive configuration.
     */
    origin: pulumi.Input<inputs.HyperdriveConfigOrigin>;
}
