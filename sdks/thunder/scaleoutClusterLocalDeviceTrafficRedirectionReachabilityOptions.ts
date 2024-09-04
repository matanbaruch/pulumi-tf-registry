// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class ScaleoutClusterLocalDeviceTrafficRedirectionReachabilityOptions extends pulumi.CustomResource {
    /**
     * Get an existing ScaleoutClusterLocalDeviceTrafficRedirectionReachabilityOptions resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ScaleoutClusterLocalDeviceTrafficRedirectionReachabilityOptionsState, opts?: pulumi.CustomResourceOptions): ScaleoutClusterLocalDeviceTrafficRedirectionReachabilityOptions {
        return new ScaleoutClusterLocalDeviceTrafficRedirectionReachabilityOptions(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'thunder:index/scaleoutClusterLocalDeviceTrafficRedirectionReachabilityOptions:ScaleoutClusterLocalDeviceTrafficRedirectionReachabilityOptions';

    /**
     * Returns true if the given object is an instance of ScaleoutClusterLocalDeviceTrafficRedirectionReachabilityOptions.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ScaleoutClusterLocalDeviceTrafficRedirectionReachabilityOptions {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ScaleoutClusterLocalDeviceTrafficRedirectionReachabilityOptions.__pulumiType;
    }

    /**
     * ClusterId
     */
    public readonly clusterId!: pulumi.Output<string>;
    /**
     * Do not choose default route for redirection
     */
    public readonly skipDefaultRoute!: pulumi.Output<number | undefined>;
    /**
     * uuid of the object
     */
    public readonly uuid!: pulumi.Output<string>;

    /**
     * Create a ScaleoutClusterLocalDeviceTrafficRedirectionReachabilityOptions resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ScaleoutClusterLocalDeviceTrafficRedirectionReachabilityOptionsArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ScaleoutClusterLocalDeviceTrafficRedirectionReachabilityOptionsArgs | ScaleoutClusterLocalDeviceTrafficRedirectionReachabilityOptionsState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as ScaleoutClusterLocalDeviceTrafficRedirectionReachabilityOptionsState | undefined;
            resourceInputs["clusterId"] = state ? state.clusterId : undefined;
            resourceInputs["skipDefaultRoute"] = state ? state.skipDefaultRoute : undefined;
            resourceInputs["uuid"] = state ? state.uuid : undefined;
        } else {
            const args = argsOrState as ScaleoutClusterLocalDeviceTrafficRedirectionReachabilityOptionsArgs | undefined;
            if ((!args || args.clusterId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'clusterId'");
            }
            resourceInputs["clusterId"] = args ? args.clusterId : undefined;
            resourceInputs["skipDefaultRoute"] = args ? args.skipDefaultRoute : undefined;
            resourceInputs["uuid"] = args ? args.uuid : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(ScaleoutClusterLocalDeviceTrafficRedirectionReachabilityOptions.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering ScaleoutClusterLocalDeviceTrafficRedirectionReachabilityOptions resources.
 */
export interface ScaleoutClusterLocalDeviceTrafficRedirectionReachabilityOptionsState {
    /**
     * ClusterId
     */
    clusterId?: pulumi.Input<string>;
    /**
     * Do not choose default route for redirection
     */
    skipDefaultRoute?: pulumi.Input<number>;
    /**
     * uuid of the object
     */
    uuid?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a ScaleoutClusterLocalDeviceTrafficRedirectionReachabilityOptions resource.
 */
export interface ScaleoutClusterLocalDeviceTrafficRedirectionReachabilityOptionsArgs {
    /**
     * ClusterId
     */
    clusterId: pulumi.Input<string>;
    /**
     * Do not choose default route for redirection
     */
    skipDefaultRoute?: pulumi.Input<number>;
    /**
     * uuid of the object
     */
    uuid?: pulumi.Input<string>;
}
