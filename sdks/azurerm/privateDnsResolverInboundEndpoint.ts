// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class PrivateDnsResolverInboundEndpoint extends pulumi.CustomResource {
    /**
     * Get an existing PrivateDnsResolverInboundEndpoint resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: PrivateDnsResolverInboundEndpointState, opts?: pulumi.CustomResourceOptions): PrivateDnsResolverInboundEndpoint {
        return new PrivateDnsResolverInboundEndpoint(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azurerm:index/privateDnsResolverInboundEndpoint:PrivateDnsResolverInboundEndpoint';

    /**
     * Returns true if the given object is an instance of PrivateDnsResolverInboundEndpoint.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is PrivateDnsResolverInboundEndpoint {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === PrivateDnsResolverInboundEndpoint.__pulumiType;
    }

    public readonly ipConfigurations!: pulumi.Output<outputs.PrivateDnsResolverInboundEndpointIpConfigurations>;
    public readonly location!: pulumi.Output<string>;
    public readonly name!: pulumi.Output<string>;
    public readonly privateDnsResolverId!: pulumi.Output<string>;
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    public readonly timeouts!: pulumi.Output<outputs.PrivateDnsResolverInboundEndpointTimeouts | undefined>;

    /**
     * Create a PrivateDnsResolverInboundEndpoint resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: PrivateDnsResolverInboundEndpointArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: PrivateDnsResolverInboundEndpointArgs | PrivateDnsResolverInboundEndpointState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as PrivateDnsResolverInboundEndpointState | undefined;
            resourceInputs["ipConfigurations"] = state ? state.ipConfigurations : undefined;
            resourceInputs["location"] = state ? state.location : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["privateDnsResolverId"] = state ? state.privateDnsResolverId : undefined;
            resourceInputs["tags"] = state ? state.tags : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
        } else {
            const args = argsOrState as PrivateDnsResolverInboundEndpointArgs | undefined;
            if ((!args || args.ipConfigurations === undefined) && !opts.urn) {
                throw new Error("Missing required property 'ipConfigurations'");
            }
            if ((!args || args.location === undefined) && !opts.urn) {
                throw new Error("Missing required property 'location'");
            }
            if ((!args || args.privateDnsResolverId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'privateDnsResolverId'");
            }
            resourceInputs["ipConfigurations"] = args ? args.ipConfigurations : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["privateDnsResolverId"] = args ? args.privateDnsResolverId : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(PrivateDnsResolverInboundEndpoint.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering PrivateDnsResolverInboundEndpoint resources.
 */
export interface PrivateDnsResolverInboundEndpointState {
    ipConfigurations?: pulumi.Input<inputs.PrivateDnsResolverInboundEndpointIpConfigurations>;
    location?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    privateDnsResolverId?: pulumi.Input<string>;
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    timeouts?: pulumi.Input<inputs.PrivateDnsResolverInboundEndpointTimeouts>;
}

/**
 * The set of arguments for constructing a PrivateDnsResolverInboundEndpoint resource.
 */
export interface PrivateDnsResolverInboundEndpointArgs {
    ipConfigurations: pulumi.Input<inputs.PrivateDnsResolverInboundEndpointIpConfigurations>;
    location: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    privateDnsResolverId: pulumi.Input<string>;
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    timeouts?: pulumi.Input<inputs.PrivateDnsResolverInboundEndpointTimeouts>;
}
