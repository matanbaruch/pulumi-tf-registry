// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class MariadbInstanceConfig extends pulumi.CustomResource {
    /**
     * Get an existing MariadbInstanceConfig resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: MariadbInstanceConfigState, opts?: pulumi.CustomResourceOptions): MariadbInstanceConfig {
        return new MariadbInstanceConfig(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'tencentcloud:index/mariadbInstanceConfig:MariadbInstanceConfig';

    /**
     * Returns true if the given object is an instance of MariadbInstanceConfig.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is MariadbInstanceConfig {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === MariadbInstanceConfig.__pulumiType;
    }

    /**
     * External network status, 0-closed; 1- Opening; Default not enabled.
     */
    public readonly extranetAccess!: pulumi.Output<number>;
    /**
     * instance id.
     */
    public readonly instanceId!: pulumi.Output<string>;
    /**
     * RS proximity mode, 0- no strategy, 1- access to the nearest available zone.
     */
    public readonly rsAccessStrategy!: pulumi.Output<number>;

    /**
     * Create a MariadbInstanceConfig resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: MariadbInstanceConfigArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: MariadbInstanceConfigArgs | MariadbInstanceConfigState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as MariadbInstanceConfigState | undefined;
            resourceInputs["extranetAccess"] = state ? state.extranetAccess : undefined;
            resourceInputs["instanceId"] = state ? state.instanceId : undefined;
            resourceInputs["rsAccessStrategy"] = state ? state.rsAccessStrategy : undefined;
        } else {
            const args = argsOrState as MariadbInstanceConfigArgs | undefined;
            if ((!args || args.instanceId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'instanceId'");
            }
            resourceInputs["extranetAccess"] = args ? args.extranetAccess : undefined;
            resourceInputs["instanceId"] = args ? args.instanceId : undefined;
            resourceInputs["rsAccessStrategy"] = args ? args.rsAccessStrategy : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(MariadbInstanceConfig.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering MariadbInstanceConfig resources.
 */
export interface MariadbInstanceConfigState {
    /**
     * External network status, 0-closed; 1- Opening; Default not enabled.
     */
    extranetAccess?: pulumi.Input<number>;
    /**
     * instance id.
     */
    instanceId?: pulumi.Input<string>;
    /**
     * RS proximity mode, 0- no strategy, 1- access to the nearest available zone.
     */
    rsAccessStrategy?: pulumi.Input<number>;
}

/**
 * The set of arguments for constructing a MariadbInstanceConfig resource.
 */
export interface MariadbInstanceConfigArgs {
    /**
     * External network status, 0-closed; 1- Opening; Default not enabled.
     */
    extranetAccess?: pulumi.Input<number>;
    /**
     * instance id.
     */
    instanceId: pulumi.Input<string>;
    /**
     * RS proximity mode, 0- no strategy, 1- access to the nearest available zone.
     */
    rsAccessStrategy?: pulumi.Input<number>;
}
