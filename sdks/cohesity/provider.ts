// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

/**
 * The provider type for the cohesity package. By default, resources use package-wide configuration
 * settings, however an explicit `Provider` instance may be created and passed during resource
 * construction to achieve fine-grained programmatic control over provider settings. See the
 * [documentation](https://www.pulumi.com/docs/reference/programming-model/#providers) for more information.
 */
export class Provider extends pulumi.ProviderResource {
    /** @internal */
    public static readonly __pulumiType = 'cohesity';

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
     * The domain name of cohesity user
     */
    public readonly clusterDomain!: pulumi.Output<string | undefined>;
    /**
     * Cohesity cluster password
     */
    public readonly clusterPassword!: pulumi.Output<string | undefined>;
    /**
     * Cohesity cluster username
     */
    public readonly clusterUsername!: pulumi.Output<string | undefined>;
    /**
     * IP or hostname of Cohesity cluster node
     */
    public readonly clusterVip!: pulumi.Output<string | undefined>;

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
            resourceInputs["clusterDomain"] = args ? args.clusterDomain : undefined;
            resourceInputs["clusterPassword"] = args ? args.clusterPassword : undefined;
            resourceInputs["clusterUsername"] = args ? args.clusterUsername : undefined;
            resourceInputs["clusterVip"] = args ? args.clusterVip : undefined;
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
     * The domain name of cohesity user
     */
    clusterDomain?: pulumi.Input<string>;
    /**
     * Cohesity cluster password
     */
    clusterPassword?: pulumi.Input<string>;
    /**
     * Cohesity cluster username
     */
    clusterUsername?: pulumi.Input<string>;
    /**
     * IP or hostname of Cohesity cluster node
     */
    clusterVip?: pulumi.Input<string>;
}
