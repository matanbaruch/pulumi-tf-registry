// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

/**
 * The provider type for the helm package. By default, resources use package-wide configuration
 * settings, however an explicit `Provider` instance may be created and passed during resource
 * construction to achieve fine-grained programmatic control over provider settings. See the
 * [documentation](https://www.pulumi.com/docs/reference/programming-model/#providers) for more information.
 */
export class Provider extends pulumi.ProviderResource {
    /** @internal */
    public static readonly __pulumiType = 'helm';

    /**
     * Returns true if the given object is an instance of Provider.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Provider {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === "pulumi:providers:" + Provider.__pulumiType;
    }

    /**
     * The backend storage driver. Values are: configmap, secret, memory, sql
     */
    public readonly helmDriver!: pulumi.Output<string | undefined>;
    /**
     * The path to the helm plugins directory
     */
    public readonly pluginsPath!: pulumi.Output<string | undefined>;
    /**
     * The path to the registry config file
     */
    public readonly registryConfigPath!: pulumi.Output<string | undefined>;
    /**
     * The path to the file containing cached repository indexes
     */
    public readonly repositoryCache!: pulumi.Output<string | undefined>;
    /**
     * The path to the file containing repository names and URLs
     */
    public readonly repositoryConfigPath!: pulumi.Output<string | undefined>;

    /**
     * Create a Provider resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: ProviderArgs, opts?: pulumi.ResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        {
            resourceInputs["burstLimit"] = pulumi.output(args ? args.burstLimit : undefined).apply(JSON.stringify);
            resourceInputs["debug"] = pulumi.output(args ? args.debug : undefined).apply(JSON.stringify);
            resourceInputs["experiments"] = pulumi.output(args ? args.experiments : undefined).apply(JSON.stringify);
            resourceInputs["helmDriver"] = args ? args.helmDriver : undefined;
            resourceInputs["kubernetes"] = pulumi.output(args ? args.kubernetes : undefined).apply(JSON.stringify);
            resourceInputs["pluginsPath"] = args ? args.pluginsPath : undefined;
            resourceInputs["registries"] = pulumi.output(args ? args.registries : undefined).apply(JSON.stringify);
            resourceInputs["registryConfigPath"] = args ? args.registryConfigPath : undefined;
            resourceInputs["repositoryCache"] = args ? args.repositoryCache : undefined;
            resourceInputs["repositoryConfigPath"] = args ? args.repositoryConfigPath : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(Provider.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * The set of arguments for constructing a Provider resource.
 */
export interface ProviderArgs {
    /**
     * Helm burst limit. Increase this if you have a cluster with many CRDs
     */
    burstLimit?: pulumi.Input<number>;
    /**
     * Debug indicates whether or not Helm is running in Debug mode.
     */
    debug?: pulumi.Input<boolean>;
    /**
     * Enable and disable experimental features.
     */
    experiments?: pulumi.Input<inputs.ProviderExperiments>;
    /**
     * The backend storage driver. Values are: configmap, secret, memory, sql
     */
    helmDriver?: pulumi.Input<string>;
    /**
     * Kubernetes configuration.
     */
    kubernetes?: pulumi.Input<inputs.ProviderKubernetes>;
    /**
     * The path to the helm plugins directory
     */
    pluginsPath?: pulumi.Input<string>;
    /**
     * RegistryClient configuration.
     */
    registries?: pulumi.Input<pulumi.Input<inputs.ProviderRegistry>[]>;
    /**
     * The path to the registry config file
     */
    registryConfigPath?: pulumi.Input<string>;
    /**
     * The path to the file containing cached repository indexes
     */
    repositoryCache?: pulumi.Input<string>;
    /**
     * The path to the file containing repository names and URLs
     */
    repositoryConfigPath?: pulumi.Input<string>;
}
