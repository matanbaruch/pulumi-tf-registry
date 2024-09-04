// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class DiscoveryEngineConfiguration extends pulumi.CustomResource {
    /**
     * Get an existing DiscoveryEngineConfiguration resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: DiscoveryEngineConfigurationState, opts?: pulumi.CustomResourceOptions): DiscoveryEngineConfiguration {
        return new DiscoveryEngineConfiguration(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'accuknox:index/discoveryEngineConfiguration:DiscoveryEngineConfiguration';

    /**
     * Returns true if the given object is an instance of DiscoveryEngineConfiguration.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is DiscoveryEngineConfiguration {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === DiscoveryEngineConfiguration.__pulumiType;
    }

    public readonly data!: pulumi.Output<{[key: string]: string}>;
    public readonly lastUpdated!: pulumi.Output<string>;
    public readonly name!: pulumi.Output<string>;
    public readonly namespace!: pulumi.Output<string>;

    /**
     * Create a DiscoveryEngineConfiguration resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: DiscoveryEngineConfigurationArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: DiscoveryEngineConfigurationArgs | DiscoveryEngineConfigurationState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as DiscoveryEngineConfigurationState | undefined;
            resourceInputs["data"] = state ? state.data : undefined;
            resourceInputs["lastUpdated"] = state ? state.lastUpdated : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["namespace"] = state ? state.namespace : undefined;
        } else {
            const args = argsOrState as DiscoveryEngineConfigurationArgs | undefined;
            if ((!args || args.data === undefined) && !opts.urn) {
                throw new Error("Missing required property 'data'");
            }
            if ((!args || args.namespace === undefined) && !opts.urn) {
                throw new Error("Missing required property 'namespace'");
            }
            resourceInputs["data"] = args ? args.data : undefined;
            resourceInputs["lastUpdated"] = args ? args.lastUpdated : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["namespace"] = args ? args.namespace : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(DiscoveryEngineConfiguration.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering DiscoveryEngineConfiguration resources.
 */
export interface DiscoveryEngineConfigurationState {
    data?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    lastUpdated?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    namespace?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a DiscoveryEngineConfiguration resource.
 */
export interface DiscoveryEngineConfigurationArgs {
    data: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    lastUpdated?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    namespace: pulumi.Input<string>;
}
