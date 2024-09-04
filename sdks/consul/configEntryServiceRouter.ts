// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class ConfigEntryServiceRouter extends pulumi.CustomResource {
    /**
     * Get an existing ConfigEntryServiceRouter resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ConfigEntryServiceRouterState, opts?: pulumi.CustomResourceOptions): ConfigEntryServiceRouter {
        return new ConfigEntryServiceRouter(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'consul:index/configEntryServiceRouter:ConfigEntryServiceRouter';

    /**
     * Returns true if the given object is an instance of ConfigEntryServiceRouter.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ConfigEntryServiceRouter {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ConfigEntryServiceRouter.__pulumiType;
    }

    /**
     * Specifies key-value pairs to add to the KV store.
     */
    public readonly meta!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Specifies a name for the configuration entry.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * Specifies the namespace to apply the configuration entry.
     */
    public readonly namespace!: pulumi.Output<string | undefined>;
    /**
     * Specifies the admin partition to apply the configuration entry.
     */
    public readonly partition!: pulumi.Output<string | undefined>;
    /**
     * Defines the possible routes for L7 requests.
     */
    public readonly routes!: pulumi.Output<outputs.ConfigEntryServiceRouterRoute[] | undefined>;

    /**
     * Create a ConfigEntryServiceRouter resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: ConfigEntryServiceRouterArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ConfigEntryServiceRouterArgs | ConfigEntryServiceRouterState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as ConfigEntryServiceRouterState | undefined;
            resourceInputs["meta"] = state ? state.meta : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["namespace"] = state ? state.namespace : undefined;
            resourceInputs["partition"] = state ? state.partition : undefined;
            resourceInputs["routes"] = state ? state.routes : undefined;
        } else {
            const args = argsOrState as ConfigEntryServiceRouterArgs | undefined;
            resourceInputs["meta"] = args ? args.meta : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["namespace"] = args ? args.namespace : undefined;
            resourceInputs["partition"] = args ? args.partition : undefined;
            resourceInputs["routes"] = args ? args.routes : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(ConfigEntryServiceRouter.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering ConfigEntryServiceRouter resources.
 */
export interface ConfigEntryServiceRouterState {
    /**
     * Specifies key-value pairs to add to the KV store.
     */
    meta?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Specifies a name for the configuration entry.
     */
    name?: pulumi.Input<string>;
    /**
     * Specifies the namespace to apply the configuration entry.
     */
    namespace?: pulumi.Input<string>;
    /**
     * Specifies the admin partition to apply the configuration entry.
     */
    partition?: pulumi.Input<string>;
    /**
     * Defines the possible routes for L7 requests.
     */
    routes?: pulumi.Input<pulumi.Input<inputs.ConfigEntryServiceRouterRoute>[]>;
}

/**
 * The set of arguments for constructing a ConfigEntryServiceRouter resource.
 */
export interface ConfigEntryServiceRouterArgs {
    /**
     * Specifies key-value pairs to add to the KV store.
     */
    meta?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Specifies a name for the configuration entry.
     */
    name?: pulumi.Input<string>;
    /**
     * Specifies the namespace to apply the configuration entry.
     */
    namespace?: pulumi.Input<string>;
    /**
     * Specifies the admin partition to apply the configuration entry.
     */
    partition?: pulumi.Input<string>;
    /**
     * Defines the possible routes for L7 requests.
     */
    routes?: pulumi.Input<pulumi.Input<inputs.ConfigEntryServiceRouterRoute>[]>;
}
