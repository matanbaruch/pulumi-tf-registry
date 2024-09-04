// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class LoadbalancerBackendTlsConfig extends pulumi.CustomResource {
    /**
     * Get an existing LoadbalancerBackendTlsConfig resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: LoadbalancerBackendTlsConfigState, opts?: pulumi.CustomResourceOptions): LoadbalancerBackendTlsConfig {
        return new LoadbalancerBackendTlsConfig(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'upcloud:index/loadbalancerBackendTlsConfig:LoadbalancerBackendTlsConfig';

    /**
     * Returns true if the given object is an instance of LoadbalancerBackendTlsConfig.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is LoadbalancerBackendTlsConfig {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === LoadbalancerBackendTlsConfig.__pulumiType;
    }

    /**
     * ID of the load balancer backend to which the TLS config is connected.
     */
    public readonly backend!: pulumi.Output<string>;
    /**
     * Reference to certificate bundle ID.
     */
    public readonly certificateBundle!: pulumi.Output<string>;
    /**
     * The name of the TLS config. Must be unique within customer account.
     */
    public readonly name!: pulumi.Output<string>;

    /**
     * Create a LoadbalancerBackendTlsConfig resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: LoadbalancerBackendTlsConfigArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: LoadbalancerBackendTlsConfigArgs | LoadbalancerBackendTlsConfigState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as LoadbalancerBackendTlsConfigState | undefined;
            resourceInputs["backend"] = state ? state.backend : undefined;
            resourceInputs["certificateBundle"] = state ? state.certificateBundle : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
        } else {
            const args = argsOrState as LoadbalancerBackendTlsConfigArgs | undefined;
            if ((!args || args.backend === undefined) && !opts.urn) {
                throw new Error("Missing required property 'backend'");
            }
            if ((!args || args.certificateBundle === undefined) && !opts.urn) {
                throw new Error("Missing required property 'certificateBundle'");
            }
            resourceInputs["backend"] = args ? args.backend : undefined;
            resourceInputs["certificateBundle"] = args ? args.certificateBundle : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(LoadbalancerBackendTlsConfig.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering LoadbalancerBackendTlsConfig resources.
 */
export interface LoadbalancerBackendTlsConfigState {
    /**
     * ID of the load balancer backend to which the TLS config is connected.
     */
    backend?: pulumi.Input<string>;
    /**
     * Reference to certificate bundle ID.
     */
    certificateBundle?: pulumi.Input<string>;
    /**
     * The name of the TLS config. Must be unique within customer account.
     */
    name?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a LoadbalancerBackendTlsConfig resource.
 */
export interface LoadbalancerBackendTlsConfigArgs {
    /**
     * ID of the load balancer backend to which the TLS config is connected.
     */
    backend: pulumi.Input<string>;
    /**
     * Reference to certificate bundle ID.
     */
    certificateBundle: pulumi.Input<string>;
    /**
     * The name of the TLS config. Must be unique within customer account.
     */
    name?: pulumi.Input<string>;
}
