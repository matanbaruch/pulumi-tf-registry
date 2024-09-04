// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class ComputeRegionNetworkEndpoint extends pulumi.CustomResource {
    /**
     * Get an existing ComputeRegionNetworkEndpoint resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ComputeRegionNetworkEndpointState, opts?: pulumi.CustomResourceOptions): ComputeRegionNetworkEndpoint {
        return new ComputeRegionNetworkEndpoint(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'google-beta:index/computeRegionNetworkEndpoint:ComputeRegionNetworkEndpoint';

    /**
     * Returns true if the given object is an instance of ComputeRegionNetworkEndpoint.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ComputeRegionNetworkEndpoint {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ComputeRegionNetworkEndpoint.__pulumiType;
    }

    /**
     * Client destination port for the 'GCE_VM_IP_PORTMAP' NEG.
     */
    public readonly clientDestinationPort!: pulumi.Output<number | undefined>;
    /**
     * Fully qualified domain name of network endpoint. This can only be specified when network_endpoint_type of the NEG is
     * INTERNET_FQDN_PORT.
     */
    public readonly fqdn!: pulumi.Output<string | undefined>;
    /**
     * The name for a specific VM instance that the IP address belongs to. This is required for network endpoints of type
     * GCE_VM_IP_PORTMAP.
     */
    public readonly instance!: pulumi.Output<string | undefined>;
    /**
     * IPv4 address external endpoint. This can only be specified when network_endpoint_type of the NEG is INTERNET_IP_PORT.
     */
    public readonly ipAddress!: pulumi.Output<string | undefined>;
    /**
     * Port number of network endpoint.
     */
    public readonly port!: pulumi.Output<number>;
    public readonly project!: pulumi.Output<string>;
    /**
     * Region where the containing network endpoint group is located.
     */
    public readonly region!: pulumi.Output<string>;
    /**
     * The network endpoint group this endpoint is part of.
     */
    public readonly regionNetworkEndpointGroup!: pulumi.Output<string>;
    public readonly timeouts!: pulumi.Output<outputs.ComputeRegionNetworkEndpointTimeouts | undefined>;

    /**
     * Create a ComputeRegionNetworkEndpoint resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ComputeRegionNetworkEndpointArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ComputeRegionNetworkEndpointArgs | ComputeRegionNetworkEndpointState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as ComputeRegionNetworkEndpointState | undefined;
            resourceInputs["clientDestinationPort"] = state ? state.clientDestinationPort : undefined;
            resourceInputs["fqdn"] = state ? state.fqdn : undefined;
            resourceInputs["instance"] = state ? state.instance : undefined;
            resourceInputs["ipAddress"] = state ? state.ipAddress : undefined;
            resourceInputs["port"] = state ? state.port : undefined;
            resourceInputs["project"] = state ? state.project : undefined;
            resourceInputs["region"] = state ? state.region : undefined;
            resourceInputs["regionNetworkEndpointGroup"] = state ? state.regionNetworkEndpointGroup : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
        } else {
            const args = argsOrState as ComputeRegionNetworkEndpointArgs | undefined;
            if ((!args || args.port === undefined) && !opts.urn) {
                throw new Error("Missing required property 'port'");
            }
            if ((!args || args.regionNetworkEndpointGroup === undefined) && !opts.urn) {
                throw new Error("Missing required property 'regionNetworkEndpointGroup'");
            }
            resourceInputs["clientDestinationPort"] = args ? args.clientDestinationPort : undefined;
            resourceInputs["fqdn"] = args ? args.fqdn : undefined;
            resourceInputs["instance"] = args ? args.instance : undefined;
            resourceInputs["ipAddress"] = args ? args.ipAddress : undefined;
            resourceInputs["port"] = args ? args.port : undefined;
            resourceInputs["project"] = args ? args.project : undefined;
            resourceInputs["region"] = args ? args.region : undefined;
            resourceInputs["regionNetworkEndpointGroup"] = args ? args.regionNetworkEndpointGroup : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(ComputeRegionNetworkEndpoint.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering ComputeRegionNetworkEndpoint resources.
 */
export interface ComputeRegionNetworkEndpointState {
    /**
     * Client destination port for the 'GCE_VM_IP_PORTMAP' NEG.
     */
    clientDestinationPort?: pulumi.Input<number>;
    /**
     * Fully qualified domain name of network endpoint. This can only be specified when network_endpoint_type of the NEG is
     * INTERNET_FQDN_PORT.
     */
    fqdn?: pulumi.Input<string>;
    /**
     * The name for a specific VM instance that the IP address belongs to. This is required for network endpoints of type
     * GCE_VM_IP_PORTMAP.
     */
    instance?: pulumi.Input<string>;
    /**
     * IPv4 address external endpoint. This can only be specified when network_endpoint_type of the NEG is INTERNET_IP_PORT.
     */
    ipAddress?: pulumi.Input<string>;
    /**
     * Port number of network endpoint.
     */
    port?: pulumi.Input<number>;
    project?: pulumi.Input<string>;
    /**
     * Region where the containing network endpoint group is located.
     */
    region?: pulumi.Input<string>;
    /**
     * The network endpoint group this endpoint is part of.
     */
    regionNetworkEndpointGroup?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.ComputeRegionNetworkEndpointTimeouts>;
}

/**
 * The set of arguments for constructing a ComputeRegionNetworkEndpoint resource.
 */
export interface ComputeRegionNetworkEndpointArgs {
    /**
     * Client destination port for the 'GCE_VM_IP_PORTMAP' NEG.
     */
    clientDestinationPort?: pulumi.Input<number>;
    /**
     * Fully qualified domain name of network endpoint. This can only be specified when network_endpoint_type of the NEG is
     * INTERNET_FQDN_PORT.
     */
    fqdn?: pulumi.Input<string>;
    /**
     * The name for a specific VM instance that the IP address belongs to. This is required for network endpoints of type
     * GCE_VM_IP_PORTMAP.
     */
    instance?: pulumi.Input<string>;
    /**
     * IPv4 address external endpoint. This can only be specified when network_endpoint_type of the NEG is INTERNET_IP_PORT.
     */
    ipAddress?: pulumi.Input<string>;
    /**
     * Port number of network endpoint.
     */
    port: pulumi.Input<number>;
    project?: pulumi.Input<string>;
    /**
     * Region where the containing network endpoint group is located.
     */
    region?: pulumi.Input<string>;
    /**
     * The network endpoint group this endpoint is part of.
     */
    regionNetworkEndpointGroup: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.ComputeRegionNetworkEndpointTimeouts>;
}
