// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class HvnRoute extends pulumi.CustomResource {
    /**
     * Get an existing HvnRoute resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: HvnRouteState, opts?: pulumi.CustomResourceOptions): HvnRoute {
        return new HvnRoute(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'hcp:index/hvnRoute:HvnRoute';

    /**
     * Returns true if the given object is an instance of HvnRoute.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is HvnRoute {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === HvnRoute.__pulumiType;
    }

    /**
     * The Azure configuration for routing.
     */
    public readonly azureConfig!: pulumi.Output<outputs.HvnRouteAzureConfig | undefined>;
    /**
     * The time that the HVN route was created.
     */
    public /*out*/ readonly createdAt!: pulumi.Output<string>;
    /**
     * The destination CIDR of the HVN route.
     */
    public readonly destinationCidr!: pulumi.Output<string>;
    /**
     * The `self_link` of the HashiCorp Virtual Network (HVN).
     */
    public readonly hvnLink!: pulumi.Output<string>;
    /**
     * The ID of the HVN route.
     */
    public readonly hvnRouteId!: pulumi.Output<string>;
    /**
     * The ID of the HCP project where the HVN route is located. Always matches the project ID in `hvn_link`. Setting this
     * attribute is deprecated, but it will remain usable in read-only form.
     *
     * @deprecated Deprecated
     */
    public readonly projectId!: pulumi.Output<string>;
    /**
     * A unique URL identifying the HVN route.
     */
    public /*out*/ readonly selfLink!: pulumi.Output<string>;
    /**
     * The state of the HVN route.
     */
    public /*out*/ readonly state!: pulumi.Output<string>;
    /**
     * A unique URL identifying the target of the HVN route. Examples of the target: `aws_network_peering`,
     * `aws_transit_gateway_attachment`
     */
    public readonly targetLink!: pulumi.Output<string>;
    public readonly timeouts!: pulumi.Output<outputs.HvnRouteTimeouts | undefined>;

    /**
     * Create a HvnRoute resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: HvnRouteArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: HvnRouteArgs | HvnRouteState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as HvnRouteState | undefined;
            resourceInputs["azureConfig"] = state ? state.azureConfig : undefined;
            resourceInputs["createdAt"] = state ? state.createdAt : undefined;
            resourceInputs["destinationCidr"] = state ? state.destinationCidr : undefined;
            resourceInputs["hvnLink"] = state ? state.hvnLink : undefined;
            resourceInputs["hvnRouteId"] = state ? state.hvnRouteId : undefined;
            resourceInputs["projectId"] = state ? state.projectId : undefined;
            resourceInputs["selfLink"] = state ? state.selfLink : undefined;
            resourceInputs["state"] = state ? state.state : undefined;
            resourceInputs["targetLink"] = state ? state.targetLink : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
        } else {
            const args = argsOrState as HvnRouteArgs | undefined;
            if ((!args || args.destinationCidr === undefined) && !opts.urn) {
                throw new Error("Missing required property 'destinationCidr'");
            }
            if ((!args || args.hvnLink === undefined) && !opts.urn) {
                throw new Error("Missing required property 'hvnLink'");
            }
            if ((!args || args.hvnRouteId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'hvnRouteId'");
            }
            if ((!args || args.targetLink === undefined) && !opts.urn) {
                throw new Error("Missing required property 'targetLink'");
            }
            resourceInputs["azureConfig"] = args ? args.azureConfig : undefined;
            resourceInputs["destinationCidr"] = args ? args.destinationCidr : undefined;
            resourceInputs["hvnLink"] = args ? args.hvnLink : undefined;
            resourceInputs["hvnRouteId"] = args ? args.hvnRouteId : undefined;
            resourceInputs["projectId"] = args ? args.projectId : undefined;
            resourceInputs["targetLink"] = args ? args.targetLink : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["createdAt"] = undefined /*out*/;
            resourceInputs["selfLink"] = undefined /*out*/;
            resourceInputs["state"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(HvnRoute.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering HvnRoute resources.
 */
export interface HvnRouteState {
    /**
     * The Azure configuration for routing.
     */
    azureConfig?: pulumi.Input<inputs.HvnRouteAzureConfig>;
    /**
     * The time that the HVN route was created.
     */
    createdAt?: pulumi.Input<string>;
    /**
     * The destination CIDR of the HVN route.
     */
    destinationCidr?: pulumi.Input<string>;
    /**
     * The `self_link` of the HashiCorp Virtual Network (HVN).
     */
    hvnLink?: pulumi.Input<string>;
    /**
     * The ID of the HVN route.
     */
    hvnRouteId?: pulumi.Input<string>;
    /**
     * The ID of the HCP project where the HVN route is located. Always matches the project ID in `hvn_link`. Setting this
     * attribute is deprecated, but it will remain usable in read-only form.
     *
     * @deprecated Deprecated
     */
    projectId?: pulumi.Input<string>;
    /**
     * A unique URL identifying the HVN route.
     */
    selfLink?: pulumi.Input<string>;
    /**
     * The state of the HVN route.
     */
    state?: pulumi.Input<string>;
    /**
     * A unique URL identifying the target of the HVN route. Examples of the target: `aws_network_peering`,
     * `aws_transit_gateway_attachment`
     */
    targetLink?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.HvnRouteTimeouts>;
}

/**
 * The set of arguments for constructing a HvnRoute resource.
 */
export interface HvnRouteArgs {
    /**
     * The Azure configuration for routing.
     */
    azureConfig?: pulumi.Input<inputs.HvnRouteAzureConfig>;
    /**
     * The destination CIDR of the HVN route.
     */
    destinationCidr: pulumi.Input<string>;
    /**
     * The `self_link` of the HashiCorp Virtual Network (HVN).
     */
    hvnLink: pulumi.Input<string>;
    /**
     * The ID of the HVN route.
     */
    hvnRouteId: pulumi.Input<string>;
    /**
     * The ID of the HCP project where the HVN route is located. Always matches the project ID in `hvn_link`. Setting this
     * attribute is deprecated, but it will remain usable in read-only form.
     *
     * @deprecated Deprecated
     */
    projectId?: pulumi.Input<string>;
    /**
     * A unique URL identifying the target of the HVN route. Examples of the target: `aws_network_peering`,
     * `aws_transit_gateway_attachment`
     */
    targetLink: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.HvnRouteTimeouts>;
}
