// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class PrivatelinkEndpointServiceServerless extends pulumi.CustomResource {
    /**
     * Get an existing PrivatelinkEndpointServiceServerless resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: PrivatelinkEndpointServiceServerlessState, opts?: pulumi.CustomResourceOptions): PrivatelinkEndpointServiceServerless {
        return new PrivatelinkEndpointServiceServerless(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'mongodbatlas:index/privatelinkEndpointServiceServerless:PrivatelinkEndpointServiceServerless';

    /**
     * Returns true if the given object is an instance of PrivatelinkEndpointServiceServerless.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is PrivatelinkEndpointServiceServerless {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === PrivatelinkEndpointServiceServerless.__pulumiType;
    }

    public readonly cloudProviderEndpointId!: pulumi.Output<string>;
    public readonly comment!: pulumi.Output<string | undefined>;
    public readonly endpointId!: pulumi.Output<string>;
    public readonly instanceName!: pulumi.Output<string>;
    public readonly privateEndpointIpAddress!: pulumi.Output<string>;
    public /*out*/ readonly privateLinkServiceResourceId!: pulumi.Output<string>;
    public readonly projectId!: pulumi.Output<string>;
    public readonly providerName!: pulumi.Output<string>;
    public /*out*/ readonly status!: pulumi.Output<string>;
    public readonly timeouts!: pulumi.Output<outputs.PrivatelinkEndpointServiceServerlessTimeouts | undefined>;

    /**
     * Create a PrivatelinkEndpointServiceServerless resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: PrivatelinkEndpointServiceServerlessArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: PrivatelinkEndpointServiceServerlessArgs | PrivatelinkEndpointServiceServerlessState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as PrivatelinkEndpointServiceServerlessState | undefined;
            resourceInputs["cloudProviderEndpointId"] = state ? state.cloudProviderEndpointId : undefined;
            resourceInputs["comment"] = state ? state.comment : undefined;
            resourceInputs["endpointId"] = state ? state.endpointId : undefined;
            resourceInputs["instanceName"] = state ? state.instanceName : undefined;
            resourceInputs["privateEndpointIpAddress"] = state ? state.privateEndpointIpAddress : undefined;
            resourceInputs["privateLinkServiceResourceId"] = state ? state.privateLinkServiceResourceId : undefined;
            resourceInputs["projectId"] = state ? state.projectId : undefined;
            resourceInputs["providerName"] = state ? state.providerName : undefined;
            resourceInputs["status"] = state ? state.status : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
        } else {
            const args = argsOrState as PrivatelinkEndpointServiceServerlessArgs | undefined;
            if ((!args || args.endpointId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'endpointId'");
            }
            if ((!args || args.instanceName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'instanceName'");
            }
            if ((!args || args.projectId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'projectId'");
            }
            if ((!args || args.providerName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'providerName'");
            }
            resourceInputs["cloudProviderEndpointId"] = args ? args.cloudProviderEndpointId : undefined;
            resourceInputs["comment"] = args ? args.comment : undefined;
            resourceInputs["endpointId"] = args ? args.endpointId : undefined;
            resourceInputs["instanceName"] = args ? args.instanceName : undefined;
            resourceInputs["privateEndpointIpAddress"] = args ? args.privateEndpointIpAddress : undefined;
            resourceInputs["projectId"] = args ? args.projectId : undefined;
            resourceInputs["providerName"] = args ? args.providerName : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["privateLinkServiceResourceId"] = undefined /*out*/;
            resourceInputs["status"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(PrivatelinkEndpointServiceServerless.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering PrivatelinkEndpointServiceServerless resources.
 */
export interface PrivatelinkEndpointServiceServerlessState {
    cloudProviderEndpointId?: pulumi.Input<string>;
    comment?: pulumi.Input<string>;
    endpointId?: pulumi.Input<string>;
    instanceName?: pulumi.Input<string>;
    privateEndpointIpAddress?: pulumi.Input<string>;
    privateLinkServiceResourceId?: pulumi.Input<string>;
    projectId?: pulumi.Input<string>;
    providerName?: pulumi.Input<string>;
    status?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.PrivatelinkEndpointServiceServerlessTimeouts>;
}

/**
 * The set of arguments for constructing a PrivatelinkEndpointServiceServerless resource.
 */
export interface PrivatelinkEndpointServiceServerlessArgs {
    cloudProviderEndpointId?: pulumi.Input<string>;
    comment?: pulumi.Input<string>;
    endpointId: pulumi.Input<string>;
    instanceName: pulumi.Input<string>;
    privateEndpointIpAddress?: pulumi.Input<string>;
    projectId: pulumi.Input<string>;
    providerName: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.PrivatelinkEndpointServiceServerlessTimeouts>;
}
